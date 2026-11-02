import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { LiveCallCard } from "@/components/home/LiveCallCard";
import { Speed } from "@/components/home/Speed";
import { ExistingPhone } from "@/components/home/ExistingPhone";
import { CTA } from "@/components/home/CTA";

export const metadata: Metadata = { title: "AI Calling Agent", description: "TrulyHello answers customer calls when your team is busy, unavailable or after hours, and turns them into completed actions." };

export default function VoicePage() {
  return (
    <>
      <PageHeader eyebrow="AI Calling Agent" title="The call gets answered. The request gets handled."
        intro="When your team can't pick up, TrulyHello does: it understands what the customer needs, answers from your business knowledge and moves the request forward.">
        <Button href="/early-access">Request Early Access</Button>
      </PageHeader>
      <Section tone="graphite" eyebrow="What a call looks like" title="From ring to resolution.">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <ul className="space-y-5 text-lg text-mist/75">
              {["Your team gets first opportunity to answer.", "If busy, unavailable or after hours, TrulyHello takes over.", "It identifies intent and answers questions.", "It captures details and takes approved actions.", "Your team is notified and the outcome is recorded."].map((t) => (
                <li key={t} className="flex gap-4"><span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-brass" />{t}</li>
              ))}
            </ul>
          </Reveal>
          <Reveal className="flex justify-center"><LiveCallCard /></Reveal>
        </div>
      </Section>
      <Speed />
      <ExistingPhone />
      <CTA />
    </>
  );
}
