import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { PhoneCall, Users, AudioLines } from "lucide-react";
import { DemoBadge } from "@/components/ui/DemoBadge";

export function ExistingPhone() {
  const rows = [
    { icon: PhoneCall, t: "Customer calls your business number", d: "Nothing changes for your customers." },
    { icon: Users, t: "Your team rings first", d: "If someone's free, they answer as usual." },
    { icon: AudioLines, t: "StayDesk steps in", d: "Only when staff are busy, unavailable or it's after hours." },
  ];
  return (
    <Section id="existing-phone" eyebrow="Works with how you already operate" title="Keep your business phone. Add a safety net."
      intro="The concept: your existing number stays your number. StayDesk is the fallback that makes sure important calls aren't missed.">
      <Reveal>
        <div className="card p-6 md:p-8">
          <div className="mb-6"><DemoBadge label="Prototype concept" /></div>
          <div className="grid gap-6 md:grid-cols-3">
            {rows.map((r, i) => (
              <div key={r.t} className="relative">
                <span className="grid size-12 place-items-center rounded-xl bg-brass/15 text-brass-soft"><r.icon size={20} strokeWidth={1.5} /></span>
                <p className="mt-4 text-xs uppercase tracking-wider text-brass">Step {i + 1}</p>
                <h3 className="mt-1 font-serif text-xl">{r.t}</h3>
                <p className="mt-1.5 text-[0.92rem] text-mist/60">{r.d}</p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
