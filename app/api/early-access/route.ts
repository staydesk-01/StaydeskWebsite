import { createSubmissionHandler } from "@/lib/api/handler";
import { earlyAccessSchema } from "@/lib/validation";
import { EarlyAccess } from "@/models/EarlyAccess";

export const runtime = "nodejs";
export const POST = createSubmissionHandler({ route: "early-access", label: "Early Access request", schema: earlyAccessSchema, model: EarlyAccess, defaultSource: "early-access" });
