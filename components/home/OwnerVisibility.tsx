import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Eye, BellRing, FileText, ShieldCheck } from "lucide-react";

const ITEMS = [
  { icon: Eye, t: "See every call", d: "Who called, what they needed and how it ended." },
  { icon: BellRing, t: "Get the right alerts", d: "Urgent calls and requests reach you immediately." },
  { icon: FileText, t: "Read the summary", d: "Short call summaries and reports instead of recordings to replay." },
  { icon: ShieldCheck, t: "Stay in control", d: "You set what TrulyHello can say and do." },
];

export function OwnerVisibility() {
  return (
    <Section id="owner" tone="graphite" eyebrow="Owner visibility" title="Know what happened while you were busy."
      intro="Owners and managers get a clear view of every conversation, without having to be on the phone.">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {ITEMS.map((it, i) => (
          <Reveal key={it.t} delay={i * 0.06}>
            <div className="card h-full p-6">
              <it.icon size={22} strokeWidth={1.5} className="text-brass" />
              <h3 className="mt-4 font-serif text-xl">{it.t}</h3>
              <p className="mt-2 text-[0.92rem] text-mist/60">{it.d}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
