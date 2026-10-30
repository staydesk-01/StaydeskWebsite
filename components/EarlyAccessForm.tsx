"use client";

import { LeadForm } from "@/components/ui/LeadForm";
import { FormSuccess } from "@/components/ui/FormSuccess";
import { ScheduleMeeting } from "@/components/ScheduleMeeting";
import { INDUSTRY_OPTIONS, BUSINESS_SIZE_OPTIONS, CALLS_PER_DAY_OPTIONS } from "@/lib/options";

export function EarlyAccessForm() {
  return (
    <LeadForm formKey="early-access" endpoint="/api/early-access" defaultSource="early-access" submitLabel="Request Early Access"
      success={() => (
        <FormSuccess title="Thanks — we received your request." body="We'll be in touch soon. If you'd like to move faster, pick a time to talk.">
          <ScheduleMeeting title="Book a Demo" description="See StayDesk in action." buttonLabel="Book a Demo" />
          <ScheduleMeeting variant="ghost" title="Schedule a Meeting" buttonLabel="Schedule a Meeting" />
        </FormSuccess>
      )}
      fields={[
        { name: "fullName", label: "Full name", required: true },
        { name: "businessName", label: "Business name", required: true },
        { name: "email", label: "Work email", type: "email", required: true },
        { name: "phone", label: "Phone", type: "tel" },
        { name: "industry", label: "Industry", type: "select", options: INDUSTRY_OPTIONS },
        { name: "businessSize", label: "Business size", type: "select", options: BUSINESS_SIZE_OPTIONS },
        { name: "locations", label: "Number of locations", type: "number" },
        { name: "callsPerDay", label: "Approximate calls per day", type: "select", options: CALLS_PER_DAY_OPTIONS },
        { name: "currentCallHandling", label: "How are calls handled today?", type: "textarea" },
        { name: "biggestProblem", label: "What's your biggest problem with calls?", type: "textarea" },
        { name: "interestedInPilot", label: "I'm interested in joining a pilot", type: "checkbox" },
        { name: "message", label: "Anything else you'd like us to know?", type: "textarea" },
      ]} />
  );
}
