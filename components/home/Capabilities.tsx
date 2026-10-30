import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { FEATURES } from "@/lib/content";

export function Capabilities({ limit }: { limit?: number }) {
  const list = limit ? FEATURES.slice(0, limit) : FEATURES;
  return (
    <Section id="capabilities" tone="graphite" eyebrow="Product capabilities" title="Everything a call can lead to, in one platform.">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {list.map((f, i) => (
          <Reveal key={f.title} delay={(i % 4) * 0.05}><FeatureCard {...f} /></Reveal>
        ))}
      </div>
    </Section>
  );
}
