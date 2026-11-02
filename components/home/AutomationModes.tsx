import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Check, Handshake, Zap, SlidersHorizontal } from "lucide-react";

const MODES = [
  {
    icon: Handshake, tag: "AI Assist", title: "AI handles the conversation. Your team completes the work.",
    points: ["Answers questions and captures information", "Creates tasks and follow-ups", "Transfers to a person when necessary", "Human completes sensitive actions"],
  },
  {
    icon: Zap, tag: "Autonomous AI", title: "For actions you approve, TrulyHello finishes the job.",
    points: ["Handles the conversation", "Checks your business systems", "Executes approved actions and completes the task", "Sends confirmation and updates the dashboard"], featured: true,
  },
  {
    icon: SlidersHorizontal, tag: "Custom Automation", title: "You decide exactly what TrulyHello is allowed to do.",
    points: ["Choose which actions are automatic", "Keep sensitive steps with your team", "Change the rules as your business changes", "You stay in control, always"],
  },
];

export function AutomationModes() {
  return (
    <Section id="modes" tone="graphite" eyebrow="Two ways to work" title="Assist when you want help. Autonomous when you want it done."
      intro="Start with TrulyHello handling conversations, then approve it to complete more as trust grows.">
      <div className="grid gap-5 lg:grid-cols-3">
        {MODES.map((m, i) => (
          <Reveal key={m.tag} delay={i * 0.1} className="h-full">
            <div className={`card h-full p-7 ${m.featured ? "!border-brass/50 bg-gradient-to-b from-brass/12 to-transparent" : ""}`}>
              <div className="flex items-center gap-3">
                <span className="grid size-10 place-items-center rounded-xl bg-brass/15 text-brass-soft"><m.icon size={19} strokeWidth={1.6} /></span>
                <span className="eyebrow">{m.tag}</span>
              </div>
              <h3 className="mt-6 font-serif text-[1.65rem] leading-snug">{m.title}</h3>
              <ul className="mt-6 space-y-3">
                {m.points.map((p) => (
                  <li key={p} className="flex gap-3 text-[0.95rem] text-mist/75"><Check size={16} className="mt-1 shrink-0 text-brass" />{p}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
