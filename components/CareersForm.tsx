"use client";

import { LeadForm } from "@/components/ui/LeadForm";
import { FormSuccess } from "@/components/ui/FormSuccess";
import { ScheduleMeeting } from "@/components/ScheduleMeeting";
import { CAREER_AREAS, EXPERIENCE_OPTIONS } from "@/lib/options";

export function CareersForm() {
  return (
    <LeadForm formKey="careers" endpoint="/api/careers" defaultSource="careers" submitLabel="Share your interest"
      success={() => (
        <FormSuccess title="Thanks for reaching out. We received your information." body="If you'd like, you can also set up a conversation. It's entirely optional.">
          <ScheduleMeeting variant="ghost" title="Schedule a Conversation" description="An informal career conversation." buttonLabel="Schedule a Conversation" />
        </FormSuccess>
      )}
      fields={[
        { name: "fullName", label: "Full name", required: true },
        { name: "email", label: "Email", type: "email", required: true },
        { name: "linkedin", label: "LinkedIn", type: "url", required: true, placeholder: "linkedin.com/in/…" },
        { name: "github", label: "GitHub (optional)", type: "url" },
        { name: "portfolio", label: "Portfolio (optional)", type: "url" },
        { name: "location", label: "Location" },
        { name: "areaOfInterest", label: "Area of interest", type: "select", required: true, options: CAREER_AREAS },
        { name: "experience", label: "Experience", type: "select", options: EXPERIENCE_OPTIONS },
        { name: "whyTrulyHello", label: "Why TrulyHello?", type: "textarea", required: true },
        { name: "resumeUrl", label: "Resume URL (optional)", type: "url" },
      ]} />
  );
}
