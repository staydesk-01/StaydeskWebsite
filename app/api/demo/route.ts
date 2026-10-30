import { createSubmissionHandler } from "@/lib/api/handler";
import { demoSchema } from "@/lib/validation";
import { DemoRequest } from "@/models/DemoRequest";

export const runtime = "nodejs";
export const POST = createSubmissionHandler({ route: "demo", label: "Demo request", schema: demoSchema, model: DemoRequest, defaultSource: "demo" });
