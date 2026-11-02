import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { DemoBadge } from "@/components/ui/DemoBadge";
import { DASH_NAV } from "@/lib/content";

const STATS = [
  ["Calls Received", "48"], ["AI Handled Calls", "31"], ["Completed Actions", "22"], ["Opportunities Captured", "14"],
  ["Follow-ups Needed", "5"], ["Human Transfers", "4"], ["Average Call Duration", "2:14"],
];

export function DashboardPreview() {
  return (
    <Section id="dashboard" eyebrow="Dashboard preview" title="See every call, outcome and next step."
      intro="A prototype of the TrulyHello workspace for owners and managers. All figures shown are sample data.">
      <Reveal>
        <div className="overflow-hidden rounded-3xl border border-mist/12 bg-graphite shadow-[0_30px_100px_rgba(0,0,0,.5)]">
          <div className="flex items-center gap-2 border-b border-mist/10 px-4 py-3">
            <span className="size-2.5 rounded-full bg-mist/20" /><span className="size-2.5 rounded-full bg-mist/20" /><span className="size-2.5 rounded-full bg-mist/20" />
            <span className="ml-3 text-xs text-mist/45">app.trulyhello.com / overview</span>
            <span className="ml-auto"><DemoBadge /></span>
          </div>
          <div className="grid md:grid-cols-[210px_1fr]">
            <aside className="hidden border-r border-mist/10 p-4 md:block">
              <ul className="space-y-1">
                {DASH_NAV.map((n, i) => (
                  <li key={n} className={`rounded-lg px-3 py-2 text-sm ${i === 0 ? "bg-brass/15 text-brass-soft" : "text-mist/55"}`}>{n}</li>
                ))}
              </ul>
            </aside>
            <div className="p-4 sm:p-6">
              <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
                {STATS.map(([l, v]) => (
                  <div key={l} className="rounded-2xl border border-mist/10 bg-ink/40 p-4">
                    <p className="text-[0.7rem] uppercase tracking-wider text-mist/50">{l}</p>
                    <p className="mt-2 font-serif text-3xl tabular-nums">{v}</p>
                  </div>
                ))}
                <div className="rounded-2xl border border-mist/10 bg-ink/40 p-4">
                  <p className="text-[0.7rem] uppercase tracking-wider text-mist/50">Agent Status</p>
                  <p className="mt-3 flex items-center gap-2 text-sm"><span className="size-2 rounded-full bg-good" />Active, backing up team</p>
                </div>
              </div>
              <div className="mt-4 rounded-2xl border border-mist/10 bg-ink/40 p-4">
                <p className="text-[0.7rem] uppercase tracking-wider text-mist/50">Recent calls (sample)</p>
                <ul className="mt-3 divide-y divide-mist/10 text-sm">
                  {[["Appointment request", "Booked"], ["Service inquiry", "Follow-up scheduled"], ["Pricing question", "Answered"], ["Complex request", "Transferred to team"]].map(([a, b]) => (
                    <li key={a} className="flex justify-between gap-4 py-2.5"><span>{a}</span><span className="text-mist/55">{b}</span></li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
