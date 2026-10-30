import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Zap, MessageCircleMore, Database, Wrench, Route } from "lucide-react";

const ITEMS = [
  { icon: Zap, title: "Quick response", body: "Designed to pick up and respond without awkward pauses." },
  { icon: MessageCircleMore, title: "Natural interruptions", body: "Built to handle callers who talk over, correct themselves or change their mind." },
  { icon: Database, title: "Live business context", body: "Answers draw on your hours, services and rules, not generic scripts." },
  { icon: Wrench, title: "Fast tool execution", body: "Checks availability and creates records while the caller is still on the line." },
  { icon: Route, title: "Short path to resolution", body: "Fewer handoffs between the question and the finished task." },
];

export function Speed() {
  return (
    <Section id="speed" eyebrow="Designed for natural conversation" title={<>Not only faster conversations.<br className="hidden md:block" /> Faster completion of customer requests.</>}>
      <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-5">
        {ITEMS.map((it, i) => (
          <Reveal key={it.title} delay={i * 0.06}>
            <it.icon size={22} strokeWidth={1.5} className="text-brass" />
            <h3 className="mt-4 font-serif text-xl">{it.title}</h3>
            <p className="mt-2 text-[0.92rem] leading-relaxed text-mist/60">{it.body}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
