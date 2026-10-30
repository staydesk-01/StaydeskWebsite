import { makeSchema, registerModel } from "./_shared";

export const EARLY_ACCESS_STATUSES = ["new", "contacted", "scheduled", "completed", "closed"] as const;

const schema = makeSchema(
  {
    fullName: { type: String, required: true, trim: true },
    businessName: { type: String, required: true, trim: true },
    email: { type: String, required: true, lowercase: true, trim: true, index: true },
    phone: String,
    industry: String,
    businessSize: String,
    locations: Number,
    callsPerDay: String,
    currentCallHandling: String,
    biggestProblem: String,
    interestedInPilot: { type: Boolean, default: false },
    message: String,
  },
  EARLY_ACCESS_STATUSES,
);

export const EarlyAccess = registerModel("EarlyAccess", schema);
