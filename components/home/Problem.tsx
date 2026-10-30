import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Users, Moon, PhoneMissed } from "lucide-react";

const ITEMS = [
  { icon: Users, title: "Hands full", body: "Your team is with a customer, in a treatment room or on a job site. The phone keeps ringing." },
  { icon: Moon, title: "Closed doors", body: "Customers call after hours, on weekends and at peak times, exactly when no one can pick up." },
  { icon: PhoneMissed, title: "Quiet losses", body: "A missed call rarely leaves a trace. The customer simply calls someone else." },
];

export function Problem() {
  return (
    <Section id="problem" tone="graphite" eyebrow="The problem" title={<>Customers expect an answer now.<br className="hidden md:block" /> Teams can&apos;t answer every call.</>}
      intro="Every business has the same gap between the calls that come in and the people available to take them.">
      <div className="grid gap-5 md:grid-cols-3">
        {ITEMS.map((it, i) => (
          <Reveal key={it.title} delay={i * 0.08}>
            <div className="border-t border-mist/20 pt-6">
              <it.icon size={22} strokeWidth={1.5} className="text-brass" />
              <h3 className="mt-5 font-serif text-2xl">{it.title}</h3>
              <p className="mt-2 leading-relaxed text-mist/65">{it.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
