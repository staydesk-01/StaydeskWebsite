import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { TalkToTeam } from "@/components/TalkToTeam";
import { GlobalVision } from "@/components/home/GlobalVision";
import { CTA } from "@/components/home/CTA";

export const metadata: Metadata = { title: "Company", description: "StayDesk started from missed calls in hospitality and is being built to help businesses across industries." };

export default function CompanyPage() {
  return (
    <>
      <PageHeader eyebrow="Company" title="Built from a problem we saw firsthand."
        intro="StayDesk is an early-stage company currently building and validating its MVP.">
        <TalkToTeam variant="ghost" />
      </PageHeader>
      <Section tone="graphite" eyebrow="Our story">
        <Reveal className="max-w-3xl space-y-6 text-xl leading-relaxed text-mist/80">
          <p>StayDesk started from seeing operational problems firsthand in hospitality: missed calls, customer requests and teams too busy to handle everything at once.</p>
          <p>That experience revealed a broader problem. Businesses across industries face the same challenge. Customers expect immediate responses, while employees cannot answer every call at every moment.</p>
          <p className="font-serif text-2xl text-mist">StayDesk is being built to help solve that problem, for every kind of business.</p>
        </Reveal>
      </Section>
      <Section eyebrow="Principles" title="How we think about it.">
        <div className="grid gap-5 md:grid-cols-3">
          {[["People first", "AI supports your team. It doesn't replace the relationships that make your business."], ["You stay in control", "Businesses decide what StayDesk may say and do. Nothing happens outside those rules."], ["Honest by design", "We don't invent metrics or customers. Where this site shows sample data, it says so."]].map(([t, d], i) => (
            <Reveal key={t} delay={i * 0.08}><div className="card h-full p-7"><h3 className="font-serif text-2xl">{t}</h3><p className="mt-3 text-mist/65">{d}</p></div></Reveal>
          ))}
        </div>
      </Section>
      <GlobalVision />
      <CTA />
    </>
  );
}
