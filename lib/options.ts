export const INDUSTRY_OPTIONS = [
  "Hotels & Motels", "Restaurants", "Dental / Healthcare", "Auto Repair", "Home Services", "Real Estate / Property",
  "Salons & Spas", "Retail", "Professional Services", "Multi-location", "Other",
];
export const BUSINESS_SIZE_OPTIONS = ["Just me", "2–10 people", "11–50 people", "51–200 people", "200+ people"];
export const CALLS_PER_DAY_OPTIONS = ["Fewer than 20", "20–50", "50–150", "150–500", "500+"];
export const CONTACT_SUBJECTS = ["Product Question", "Book a Demo", "Pilot Program", "Partnership", "Investment", "Careers", "Media", "Other"] as const;
export const CAREER_AREAS = ["Engineering", "AI / Voice", "Product", "Design", "Business / Partnerships", "Operations", "Other"];
export const EXPERIENCE_OPTIONS = ["0–2 years", "3–5 years", "6–10 years", "10+ years"];

/** Contact subjects that offer a Cal.com follow-up, with the button label to show. */
export const CONTACT_SCHEDULE_LABEL: Partial<Record<(typeof CONTACT_SUBJECTS)[number], string>> = {
  "Book a Demo": "Schedule Demo",
  Careers: "Schedule Career Conversation",
  Partnership: "Schedule Meeting",
};
