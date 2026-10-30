import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { User, MessageSquare, Brain, BookOpen, Wrench, Zap } from "lucide-react";

const NODES = [
  { icon: User, label: "Customer" },
  { icon: MessageSquare, label: "Conversation" },
  { icon: Brain, label: "Intent understanding" },
  { icon: BookOpen, label: "Business knowledge" },
  { icon: Wrench, label: "Business tools" },
  { icon: Zap, label: "Action" },
];
const OUTCOMES = ["Lead Created", "Appointment Booked", "Booking Captured", "Service Request Created", "Follow-up Scheduled", "Human Transfer"];
const AFTER = ["Confirmation", "Dashboard", "Business Insights"];

function Connector({ vertical = false }: { vertical?: boolean }) {
  return (
    <svg className={vertical ? "h-8 w-3" : "h-3 w-10"} viewBox={vertical ? "0 0 12 32" : "0 0 40 12"} aria-hidden="true">
      {vertical
        ? <line x1="6" y1="0" x2="6" y2="32" stroke="#b98f62" strokeWidth="1.5" strokeDasharray="4 8" className="animate-dash" />
        : <line x1="0" y1="6" x2="40" y2="6" stroke="#b98f62" strokeWidth="1.5" strokeDasharray="4 8" className="animate-dash" />}
    </svg>
  );
}

export function ConversationToAction() {
  return (
    <Section id="action" eyebrow="From conversation to action" title="A call doesn't end with a call."
      intro="StayDesk follows each conversation all the way through, from what the customer said to what actually got done.">
      <Reveal>
        <div className="card p-6 md:p-10">
          <div className="flex flex-col items-center gap-0 xl:flex-row xl:justify-between">
            {NODES.map((n, i) => (
              <div key={n.label} className="flex flex-col items-center xl:flex-row">
                <div className="flex w-32 flex-col items-center gap-3 text-center">
                  <span className="grid size-14 place-items-center rounded-2xl border border-brass/40 bg-brass/10 text-brass-soft"><n.icon size={22} strokeWidth={1.5} /></span>
                  <span className="text-sm text-mist/85">{n.label}</span>
                </div>
                {i < NODES.length - 1 && (<><span className="my-1 xl:hidden"><Connector vertical /></span><span className="hidden xl:block"><Connector /></span></>)}
              </div>
            ))}
          </div>

          <div className="my-8 flex justify-center"><Connector vertical /></div>

          <div className="flex flex-wrap justify-center gap-2.5">
            {OUTCOMES.map((o) => (
              <span key={o} className="rounded-full border border-mist/15 bg-mist/5 px-4 py-2 text-sm text-mist/85 transition-colors hover:border-brass/60 hover:text-mist">{o}</span>
            ))}
          </div>

          <div className="my-8 flex justify-center"><Connector vertical /></div>

          <div className="flex flex-col items-center justify-center gap-2 sm:flex-row sm:gap-4">
            {AFTER.map((a, i) => (
              <div key={a} className="flex flex-col items-center gap-2 sm:flex-row sm:gap-4">
                <span className="font-serif text-xl">{a}</span>
                {i < AFTER.length - 1 && <span className="text-brass">→</span>}
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
