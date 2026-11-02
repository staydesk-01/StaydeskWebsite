import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { WORKFLOW_STEPS } from "@/lib/content";

export function HowItWorks({ id = "how-it-works", title = "Your team first. TrulyHello when it counts." }: { id?: string; title?: string }) {
  return (
    <Section id={id} eyebrow="How TrulyHello works" title={title}
      intro="TrulyHello sits behind your team, not in front of it. It steps in only when the call would otherwise go unanswered.">
      <ol className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {WORKFLOW_STEPS.map((s, i) => (
          <Reveal key={s.title} delay={(i % 3) * 0.08}>
            <li className="list-none">
              <span className="font-serif text-5xl text-brass/60">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-3 font-serif text-2xl">{s.title}</h3>
              <p className="mt-2 leading-relaxed text-mist/65">{s.body}</p>
            </li>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
