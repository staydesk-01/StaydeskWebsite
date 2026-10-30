import { makeSchema, registerModel } from "./_shared";

export const CAREER_STATUSES = ["new", "reviewing", "contacted", "future", "closed"] as const;

const schema = makeSchema(
  {
    fullName: { type: String, required: true, trim: true },
    email: { type: String, required: true, lowercase: true, trim: true, index: true },
    linkedin: { type: String, required: true },
    github: String,
    portfolio: String,
    location: String,
    areaOfInterest: { type: String, required: true },
    experience: String,
    whyStayDesk: { type: String, required: true },
    resumeUrl: String,
  },
  CAREER_STATUSES,
);

export const CareerInterest = registerModel("CareerInterest", schema);
