import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { IndustryCard } from "@/components/ui/IndustryCard";
import { Button } from "@/components/ui/Button";
import { INDUSTRIES } from "@/lib/content";

export function Industries({ full = false }: { full?: boolean }) {
  const list = full ? INDUSTRIES : INDUSTRIES.slice(0, 8);
  return (
    <Section id="industries" tone="graphite" eyebrow="Industries" title="Configured to your business, not built for just one."
      intro="Hospitality is where we first saw the problem. The same missed-call gap exists wherever customers phone in. TrulyHello adapts to your services, hours and rules.">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {list.map((ind, i) => (<Reveal key={ind.name} delay={(i % 4) * 0.05}><IndustryCard {...ind} /></Reveal>))}
      </div>
      {!full && <div className="mt-10"><Button href="/industries" variant="ghost">Explore all industries</Button></div>}
    </Section>
  );
}
