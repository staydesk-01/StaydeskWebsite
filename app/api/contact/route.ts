import { createSubmissionHandler } from "@/lib/api/handler";
import { contactSchema } from "@/lib/validation";
import { Contact } from "@/models/Contact";

export const runtime = "nodejs";
export const POST = createSubmissionHandler({ route: "contact", label: "Contact inquiry", schema: contactSchema, model: Contact, defaultSource: "contact" });
