import { makeSchema, registerModel } from "./_shared";

export const DEMO_STATUSES = ["new", "contacted", "scheduled", "completed", "closed"] as const;

const schema = makeSchema(
  {
    fullName: { type: String, required: true, trim: true },
    businessName: { type: String, required: true, trim: true },
    email: { type: String, required: true, lowercase: true, trim: true, index: true },
    phone: String,
    industry: String,
    companySize: String,
    locations: Number,
    callsPerDay: String,
    demoInterest: String,
  },
  DEMO_STATUSES,
);

export const DemoRequest = registerModel("DemoRequest", schema);
