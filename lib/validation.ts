import { z } from "zod";
import { CONTACT_SUBJECTS } from "./options";

const required = (label: string, max = 200) =>
  z.string({ error: `${label} is required.` }).trim().min(1, `${label} is required.`).max(max, `${label} is too long.`);

const optional = (max = 200) =>
  z.string().trim().max(max, "Too long.").optional().transform((v) => v || undefined);

const email = z
  .string({ error: "Email is required." })
  .trim()
  .min(1, "Email is required.")
  .max(254, "Email is too long.")
  .pipe(z.email("Please enter a valid email address."));

const phone = z
  .string()
  .trim()
  .max(30, "Phone number is too long.")
  .optional()
  .transform((v) => v || undefined)
  .refine((v) => !v || /^[+\d][\d\s().-]{5,}$/.test(v), "Please enter a valid phone number.");

const normalizeUrl = (v: string | undefined) => (v && !/^https?:\/\//i.test(v) ? `https://${v}` : v);
const url = (required_: boolean, label: string) =>
  z
    .string()
    .trim()
    .max(300, "Too long.")
    .optional()
    .transform((v) => normalizeUrl(v || undefined))
    .refine((v) => (required_ ? !!v : true), `${label} is required.`)
    .refine((v) => {
      if (!v) return true;
      try { return ["http:", "https:"].includes(new URL(v).protocol) && v.includes("."); } catch { return false; }
    }, "Please enter a valid URL.");

const locations = z
  .string()
  .trim()
  .optional()
  .transform((v) => v || undefined)
  .refine((v) => !v || /^\d{1,4}$/.test(v), "Enter a whole number.")
  .transform((v) => (v ? Number(v) : undefined));

const checkbox = z
  .preprocess((v) => v === true || (typeof v === "string" && ["true", "on", "yes"].includes(v.toLowerCase())), z.boolean())
  .optional();

/** Attribution captured with every submission. */
export const trackingSchema = z.object({
  source: z.string().trim().regex(/^[a-z0-9_-]{1,40}$/i).optional().catch(undefined),
  utm_source: optional(100).catch(undefined),
  utm_medium: optional(100).catch(undefined),
  utm_campaign: optional(100).catch(undefined),
  pagePath: optional(200).catch(undefined),
});

export const earlyAccessSchema = z.object({
  fullName: required("Full name", 120),
  businessName: required("Business name", 160),
  email,
  phone,
  industry: optional(80),
  businessSize: optional(80),
  locations,
  callsPerDay: optional(80),
  currentCallHandling: optional(1500),
  biggestProblem: optional(1500),
  interestedInPilot: checkbox,
  message: optional(3000),
});

export const contactSchema = z.object({
  name: required("Name", 120),
  email,
  company: optional(160),
  phone,
  subject: z.enum(CONTACT_SUBJECTS, { error: "Please choose a subject." }),
  message: required("Message", 4000).pipe(z.string().min(10, "Please add a little more detail.")),
});

export const demoSchema = z.object({
  fullName: required("Name", 120),
  businessName: required("Business name", 160),
  email,
  phone,
  industry: optional(80),
  companySize: optional(80),
  locations,
  callsPerDay: optional(80),
  demoInterest: optional(2000),
});

export const careersSchema = z.object({
  fullName: required("Full name", 120),
  email,
  linkedin: url(true, "LinkedIn"),
  github: url(false, "GitHub"),
  portfolio: url(false, "Portfolio"),
  location: optional(120),
  areaOfInterest: required("Area of interest", 80),
  experience: optional(80),
  whyTrulyHello: required("This field", 3000).pipe(z.string().min(10, "Please tell us a little more.")),
  resumeUrl: url(false, "Resume URL"),
});

export const SCHEMAS = {
  "early-access": earlyAccessSchema,
  contact: contactSchema,
  demo: demoSchema,
  careers: careersSchema,
} as const;
export type FormKey = keyof typeof SCHEMAS;

export function fieldErrors(error: z.ZodError): Record<string, string> {
  const out: Record<string, string> = {};
  for (const issue of error.issues) {
    const k = String(issue.path[0] ?? "form");
    out[k] ??= issue.message;
  }
  return out;
}
