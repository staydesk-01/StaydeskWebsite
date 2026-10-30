import { createSubmissionHandler } from "@/lib/api/handler";
import { careersSchema } from "@/lib/validation";
import { CareerInterest } from "@/models/CareerInterest";

export const runtime = "nodejs";
export const POST = createSubmissionHandler({ route: "careers", label: "Career submission", schema: careersSchema, model: CareerInterest, defaultSource: "careers" });
