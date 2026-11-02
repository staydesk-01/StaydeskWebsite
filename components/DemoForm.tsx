"use client";

import { LeadForm } from "@/components/ui/LeadForm";
import { FormSuccess } from "@/components/ui/FormSuccess";
import { ScheduleMeeting } from "@/components/ScheduleMeeting";
import { INDUSTRY_OPTIONS, BUSINESS_SIZE_OPTIONS, CALLS_PER_DAY_OPTIONS } from "@/lib/options";

export function DemoForm() {
  return (
    <LeadForm formKey="demo" endpoint="/api/demo" defaultSource="demo" submitLabel="Continue to Schedule Demo"
      success={() => (
        <FormSuccess title="Request received. Now choose a time." body="Your details are saved. Pick a slot that works for you in the scheduler.">
          {/* Opens right away so the flow continues straight into scheduling. */}
          <ScheduleMeeting defaultOpen title="Schedule Your Demo" description="Choose a time for your TrulyHello demo." buttonLabel="Choose a Time" />
        </FormSuccess>
      )}
      fields={[
        { name: "fullName", label: "Name", required: true },
        { name: "businessName", label: "Business name", required: true },
        { name: "email", label: "Email", type: "email", required: true },
        { name: "phone", label: "Phone", type: "tel" },
        { name: "industry", label: "Industry", type: "select", options: INDUSTRY_OPTIONS },
        { name: "companySize", label: "Company size", type: "select", options: BUSINESS_SIZE_OPTIONS },
        { name: "locations", label: "Number of locations", type: "number" },
        { name: "callsPerDay", label: "Approx. calls per day", type: "select", options: CALLS_PER_DAY_OPTIONS },
        { name: "demoInterest", label: "What would you like to see in the demo?", type: "textarea" },
      ]} />
  );
}
