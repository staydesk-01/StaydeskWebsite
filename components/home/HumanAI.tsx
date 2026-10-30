import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { User, AudioLines, Plus } from "lucide-react";

export function HumanAI() {
  return (
    <Section id="human-ai" tone="graphite" eyebrow="Human + AI" title={<>Your team when they&apos;re available.<br className="hidden md:block" /> StayDesk when they&apos;re not.</>}
      intro="StayDesk is built to support your people, not replace them. For approved workflows, it can complete the work automatically.">
      <Reveal>
        <div className="flex flex-col items-center justify-center gap-6 md:flex-row md:gap-10">
          <div className="card flex w-full max-w-sm flex-col items-center p-8 text-center">
            <span className="grid size-16 place-items-center rounded-full bg-mist/10"><User size={28} strokeWidth={1.4} /></span>
            <h3 className="mt-5 font-serif text-2xl">Your team</h3>
            <p className="mt-2 text-mist/60">Relationships, judgment and the moments that need a human.</p>
          </div>
          <Plus size={28} className="text-brass" aria-hidden="true" />
          <div className="card flex w-full max-w-sm flex-col items-center !border-brass/45 p-8 text-center">
            <span className="grid size-16 place-items-center rounded-full bg-brass/20 text-brass-soft"><AudioLines size={28} strokeWidth={1.4} /></span>
            <h3 className="mt-5 font-serif text-2xl">StayDesk</h3>
            <p className="mt-2 text-mist/60">Coverage when it&apos;s busy, late or quiet, and approved tasks done end to end.</p>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
