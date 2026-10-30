import { makeSchema, registerModel } from "./_shared";

export const CONTACT_STATUSES = ["new", "replied", "scheduled", "closed"] as const;

const schema = makeSchema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, lowercase: true, trim: true, index: true },
    company: String,
    phone: String,
    subject: { type: String, required: true },
    message: { type: String, required: true },
  },
  CONTACT_STATUSES,
);

export const Contact = registerModel("Contact", schema);
