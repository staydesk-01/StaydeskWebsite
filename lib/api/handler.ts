import { NextResponse } from "next/server";
import type { Model } from "mongoose";
import type { z } from "zod";
import { connectDb, DbNotConfiguredError } from "@/lib/mongodb";
import { fieldErrors, trackingSchema } from "@/lib/validation";
import { rateLimit } from "./rate-limit";
import { notifyTeam } from "./email";

const MAX_BODY = 20_000;
const DEDUPE_WINDOW_MS = 2 * 60_000;
const SERVER_ERROR = "Unable to submit form right now";

type Options = {
  route: string;
  label: string;
  schema: z.ZodType<Record<string, unknown>>;
  model: Model<unknown>;
  defaultSource: string;
  /** Field used to detect accidental double submits. */
  dedupeBy?: string;
};

const ok = (message: string, status = 200, extra: Record<string, unknown> = {}) =>
  NextResponse.json({ success: true, data: { message, ...extra } }, { status });
const fail = (error: string, status: number, extra: Record<string, unknown> = {}, headers?: HeadersInit) =>
  NextResponse.json({ success: false, error, ...extra }, { status, headers });

/**
 * Logs never include the Mongo URI, API keys or submitted personal data — only step names and ids.
 */
export function createSubmissionHandler({ route, label, schema, model, defaultSource, dedupeBy = "email" }: Options) {
  return async function POST(req: Request) {
    console.log(`${label} submission received`);

    const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "local";
    const rl = rateLimit(`${route}:${ip}`);
    if (!rl.ok) {
      console.warn(`${label} rate limited`);
      return fail("Too many requests. Please try again in a few minutes.", 429, {}, { "Retry-After": String(rl.retryAfter) });
    }

    const text = await req.text().catch(() => "");
    if (text.length > MAX_BODY) return fail("Request is too large.", 413);
    let raw: Record<string, unknown>;
    try {
      const parsed = JSON.parse(text);
      if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) throw new Error("not an object");
      raw = parsed;
    } catch {
      return fail("Invalid request.", 400);
    }

    // Honeypot: report success so bots learn nothing; nothing is stored.
    if (typeof raw.company_website === "string" && raw.company_website.trim()) {
      console.warn(`${label} honeypot triggered`);
      return ok("Submission received successfully");
    }

    const result = schema.safeParse(raw);
    if (!result.success) {
      const errors = fieldErrors(result.error);
      console.warn(`${label} validation failed on: ${Object.keys(errors).join(", ")}`);
      return fail(Object.values(errors)[0] ?? "Please check your details.", 400, { fieldErrors: errors });
    }
    console.log("Validation passed");

    const tracking = trackingSchema.parse(raw);
    const doc: Record<string, unknown> = { ...result.data, ...tracking, source: tracking.source ?? defaultSource };

    try {
      await connectDb();
      const key = doc[dedupeBy];
      if (typeof key === "string") {
        const dup = await model.exists({ [dedupeBy]: key.toLowerCase(), createdAt: { $gte: new Date(Date.now() - DEDUPE_WINDOW_MS) } });
        if (dup) {
          console.log(`${label} duplicate suppressed`);
          return ok("Submission received successfully", 200, { duplicate: true });
        }
      }
      const saved = await model.create(doc);
      const id = String((saved as { _id: unknown })._id);
      console.log(`Submission saved (${id})`);

      // Email is best-effort and must never turn a saved submission into a failure.
      try {
        await notifyTeam(`New ${label}`, { ...doc, id });
      } catch (e) {
        console.error(`${label} notification failed:`, e instanceof Error ? e.message : "unknown");
      }
      return ok("Submission received successfully", 201, { id });
    } catch (e) {
      if (e instanceof DbNotConfiguredError) {
        console.error(`${label} submission failed: database is not configured`);
      } else {
        console.error(`${label} submission failed:`, e instanceof Error ? `${e.name}: ${e.message}` : "unknown error");
      }
      return fail(SERVER_ERROR, 500);
    }
  };
}
