"use client";

import { useEffect, useState } from "react";
import { Check, PhoneIncoming } from "lucide-react";
import { Waveform } from "@/components/ui/Waveform";
import { DemoBadge } from "@/components/ui/DemoBadge";

const STEPS = [
  { status: "Incoming call", handler: "Front desk", intent: "Detecting…", t: 0 },
  { status: "Team busy, routing", handler: "Front desk", intent: "Detecting…", t: 6 },
  { status: "StayDesk answered", handler: "StayDesk", intent: "Listening…", t: 11 },
  { status: "Understanding request", handler: "StayDesk", intent: "Appointment Request", t: 19 },
  { status: "Checking availability", handler: "StayDesk", intent: "Appointment Request", t: 29 },
  { status: "Completing request", handler: "StayDesk", intent: "Appointment Request", t: 41 },
  { status: "Team updated", handler: "StayDesk", intent: "Appointment Request", t: 48 },
] as const;

const ACTIONS = [
  { label: "Customer identified", at: 3 },
  { label: "Availability checked", at: 4 },
  { label: "Appointment created", at: 5 },
  { label: "Confirmation sent", at: 6 },
];

const fmt = (s: number) => `00:${String(s).padStart(2, "0")}`;

export function LiveCallCard({ className = "" }: { className?: string }) {
  const [step, setStep] = useState(0);
  const [reduce, setReduce] = useState(false);

  useEffect(() => {
    const r = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setReduce(r);
    if (r) { setStep(STEPS.length - 1); return; }
    const last = step === STEPS.length - 1;
    const id = setTimeout(() => setStep(last ? 0 : step + 1), last ? 4200 : 1900);
    return () => clearTimeout(id);
  }, [step]);

  const cur = STEPS[step];
  const live = step >= 2;

  return (
    <div className={`glass w-full max-w-[400px] rounded-3xl p-5 shadow-[0_24px_80px_rgba(0,0,0,.5)] ${className}`} role="img" aria-label="Illustration of a live call being handled by StayDesk (demo)">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <span className="relative grid size-8 place-items-center rounded-full bg-brass/20 text-brass-soft">
            {!live && !reduce && <span className="absolute inset-0 animate-pulse-ring rounded-full border border-brass" />}
            <PhoneIncoming size={15} />
          </span>
          <span className="text-xs font-medium uppercase tracking-[0.16em]">{live ? "Live call" : "Incoming call"}</span>
        </div>
        <DemoBadge />
      </div>

      <dl className="grid grid-cols-2 gap-x-4 gap-y-3 text-sm">
        <div><dt className="text-[0.7rem] uppercase tracking-wider text-mist/50">Caller</dt><dd className="mt-0.5 font-medium">+1 ••• ••• 4821</dd></div>
        <div><dt className="text-[0.7rem] uppercase tracking-wider text-mist/50">Timer</dt><dd className="mt-0.5 font-medium tabular-nums">{fmt(cur.t)}</dd></div>
        <div><dt className="text-[0.7rem] uppercase tracking-wider text-mist/50">Intent</dt><dd className="mt-0.5 font-medium transition-colors">{cur.intent}</dd></div>
        <div><dt className="text-[0.7rem] uppercase tracking-wider text-mist/50">Handled by</dt><dd className={`mt-0.5 font-medium ${cur.handler === "StayDesk" ? "text-brass-soft" : ""}`}>{cur.handler}</dd></div>
      </dl>

      <div className="mt-4 flex items-center justify-between rounded-xl bg-ink/50 px-3.5 py-2.5">
        <span className="text-sm" aria-live="polite">{cur.status}</span>
        <Waveform active={live && step < STEPS.length - 1} bars={16} className="!h-6" />
      </div>

      <ul className="mt-4 space-y-2">
        {ACTIONS.map((a) => {
          const done = step >= a.at;
          return (
            <li key={a.label} className={`flex items-center gap-2.5 text-sm transition-all duration-500 ${done ? "text-mist" : "text-mist/30"}`}>
              <span className={`grid size-5 place-items-center rounded-full transition-colors duration-500 ${done ? "bg-good/20 text-good" : "border border-mist/20"}`}>
                {done && <Check size={12} strokeWidth={3} />}
              </span>
              {a.label}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
