import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { CareersForm } from "@/components/CareersForm";

export const metadata: Metadata = { title: "Careers", description: "StayDesk is an early-stage startup. We'd love to meet exceptional builders, engineers, operators and collaborators." };

const AREAS = [
  ["Engineering", "Build reliable products and the systems behind them."],
  ["AI / Voice", "Work on conversation, voice and agent behavior that people trust."],
  ["Product", "Shape how businesses actually use StayDesk day to day."],
  ["Design", "Craft calm, premium experiences for owners and their customers."],
  ["Business / Partnerships", "Help StayDesk reach the businesses that need it."],
  ["Operations", "Make an early-stage company run well."],
];

export default function CareersPage() {
  return (
    <>
      <PageHeader eyebrow="Careers" title="Build StayDesk With Us"
        intro="StayDesk is an early-stage startup building intelligent business operations technology. We're interested in meeting exceptional builders, engineers, operators and collaborators who are excited about AI, voice technology and business automation.">
        <Button href="#apply">Share your interest</Button>
      </PageHeader>
      <Section tone="graphite" eyebrow="Where you could fit" title="Areas we care about.">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {AREAS.map(([t, d], i) => (
            <Reveal key={t} delay={(i % 3) * 0.06}><div className="card h-full p-6"><h3 className="font-serif text-2xl">{t}</h3><p className="mt-2 text-mist/65">{d}</p></div></Reveal>
          ))}
        </div>
        <p className="mt-10 max-w-2xl text-lg text-mist/70">We may not have a formal opening for every role today, but we&apos;re always interested in meeting exceptional people.</p>
      </Section>
      <section id="apply" className="bg-ink px-5 py-16 sm:px-8 lg:px-[72px]">
        <div className="mx-auto max-w-2xl">
          <h2 className="h-display mb-8 text-3xl">Tell us about you.</h2>
          <CareersForm />
        </div>
      </section>
    </>
  );
}
