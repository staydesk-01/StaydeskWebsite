import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { AutomationModes } from "@/components/home/AutomationModes";
import { ConversationToAction } from "@/components/home/ConversationToAction";
import { CTA } from "@/components/home/CTA";

export const metadata: Metadata = { title: "Business Automation", description: "Approve exactly what StayDesk can complete on its own: scheduling, leads, service requests, follow-ups and more." };

const EXAMPLES = ["Appointment scheduling", "Booking requests", "Lead creation", "Service requests", "Follow-ups", "Customer confirmations", "Business notifications", "Basic operational actions"];

export default function AutomationPage() {
  return (
    <>
      <PageHeader eyebrow="Business Automation" title="You decide what gets done automatically."
        intro="StayDesk can complete work for you, but only the work you've approved. Everything else stays with your team, with full context attached.">
        <Button href="/early-access">Request Early Access</Button>
      </PageHeader>
      <AutomationModes />
      <Section eyebrow="Examples" title="Actions StayDesk can be configured to complete.">
        <Reveal>
          <div className="flex flex-wrap gap-3">
            {EXAMPLES.map((e) => <span key={e} className="rounded-full border border-mist/15 bg-mist/5 px-5 py-2.5 text-mist/85">{e}</span>)}
            <span className="rounded-full border border-brass/40 bg-brass/10 px-5 py-2.5 text-brass-soft">+ Custom automation</span>
          </div>
        </Reveal>
      </Section>
      <ConversationToAction />
      <CTA />
    </>
  );
}
