import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

export function GlobalVision() {
  return (
    <Section id="vision" eyebrow="Our vision">
      <Reveal>
        <p className="h-display max-w-5xl text-[clamp(2rem,5vw,4rem)]">
          Every customer call, in every kind of business, <span className="italic text-brass-soft">answered, understood and acted on.</span>
        </p>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-mist/65">
          We&apos;re building toward intelligent business operations that work for any business in any place, starting with the one moment that matters most: the customer on the line.
        </p>
      </Reveal>
    </Section>
  );
}
