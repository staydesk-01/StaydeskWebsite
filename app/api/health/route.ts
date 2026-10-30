import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { connectDb, isDbConfigured } from "@/lib/mongodb";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  let database: "ok" | "not-configured" | "unreachable" = "not-configured";
  if (isDbConfigured()) {
    try {
      await connectDb();
      await mongoose.connection.db?.admin().ping();
      database = "ok";
    } catch {
      database = "unreachable";
    }
  }
  const email = process.env.RESEND_API_KEY && process.env.NOTIFY_EMAIL_TO ? "configured" : "not-configured";
  return NextResponse.json({ status: database === "unreachable" ? "degraded" : "ok", database, email }, { status: database === "unreachable" ? 503 : 200 });
}
