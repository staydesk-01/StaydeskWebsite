"use client";

import { LeadForm } from "@/components/ui/LeadForm";
import { FormSuccess } from "@/components/ui/FormSuccess";
import { ScheduleMeeting } from "@/components/ScheduleMeeting";
import { CONTACT_SUBJECTS, CONTACT_SCHEDULE_LABEL } from "@/lib/options";

export function ContactForm() {
  return (
    <LeadForm formKey="contact" endpoint="/api/contact" defaultSource="contact" submitLabel="Send message"
      success={(v) => {
        const label = CONTACT_SCHEDULE_LABEL[v.subject as (typeof CONTACT_SUBJECTS)[number]];
        return (
          <FormSuccess title="Message sent." body="Thanks for reaching out. We'll reply soon.">
            {label && <ScheduleMeeting title={label} buttonLabel={label} />}
          </FormSuccess>
        );
      }}
      fields={[
        { name: "name", label: "Name", required: true },
        { name: "email", label: "Email", type: "email", required: true },
        { name: "company", label: "Company" },
        { name: "phone", label: "Phone", type: "tel" },
        { name: "subject", label: "Subject", type: "select", required: true, options: CONTACT_SUBJECTS },
        { name: "message", label: "Message", type: "textarea", required: true },
      ]} />
  );
}
