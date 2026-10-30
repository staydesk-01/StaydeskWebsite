"use client";

import { useEffect, useRef, useState } from "react";
import { Pause, Play, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { LiveCallCard } from "./LiveCallCard";

const SEGMENTS = 7;

export function Hero() {
  const land = useRef<HTMLVideoElement>(null);
  const port = useRef<HTMLVideoElement>(null);
  const fills = useRef<(HTMLElement | null)[]>([]);
  const active = useRef<HTMLVideoElement | null>(null);
  const userPaused = useRef(false);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    userPaused.current = reduce;
    setPaused(reduce);

    const pick = () => {
      const want = window.innerHeight > window.innerWidth * 1.05 ? port.current : land.current;
      if (!want || want === active.current) return;
      const other = want === land.current ? port.current : land.current;
      other?.pause();
      if (other) other.style.display = "none";
      active.current = want;
      want.style.display = "block";
      if (want.preload !== "auto") { want.preload = "auto"; want.load(); }
      if (!userPaused.current) want.play().catch(() => { userPaused.current = true; setPaused(true); });
    };
    pick();
    window.addEventListener("resize", pick);

    let raf = 0;
    const frame = () => {
      const v = active.current;
      if (v) {
        const d = v.duration || 20, t = v.currentTime || 0;
        const n = Math.min(SEGMENTS - 1, Math.floor((t / d) * SEGMENTS));
        fills.current.forEach((el, j) => {
          if (el) el.style.width = `${j < n ? 100 : j > n ? 0 : ((t / d) * SEGMENTS - n) * 100}%`;
        });
      }
      raf = requestAnimationFrame(frame);
    };
    raf = requestAnimationFrame(frame);
    return () => { window.removeEventListener("resize", pick); cancelAnimationFrame(raf); };
  }, []);

  const toggle = () => {
    const v = active.current;
    if (!v) return;
    if (v.paused) { userPaused.current = false; v.play(); setPaused(false); }
    else { userPaused.current = true; v.pause(); setPaused(true); }
  };

  const vid = "absolute inset-0 -z-20 hidden size-full object-cover bg-ink";

  return (
    <section id="hero" className="relative isolate flex min-h-svh flex-col justify-end overflow-hidden px-5 pb-8 pt-28 sm:px-8 lg:px-[72px]">
      <video ref={land} className={vid} muted loop playsInline preload="none" aria-hidden="true" poster="/media/hero-landscape.jpg">
        <source src="/media/hero-landscape.mp4" type="video/mp4" />
      </video>
      <video ref={port} className={vid} muted loop playsInline preload="none" aria-hidden="true" poster="/media/hero-portrait.jpg">
        <source src="/media/hero-portrait.mp4" type="video/mp4" />
      </video>
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(0deg,rgba(12,17,24,.92) 0%,rgba(12,17,24,.55) 40%,rgba(12,17,24,.3) 70%,rgba(12,17,24,.55) 100%),linear-gradient(90deg,rgba(12,17,24,.7) 0%,rgba(12,17,24,0) 70%)",
        }}
      />

      <div className="mx-auto w-full max-w-[1400px]">
        <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-end lg:gap-16">
          <div className="max-w-[44rem]">
            <p className="eyebrow mb-5">AI for every business that takes calls</p>
            <h1 className="h-display text-[clamp(2.7rem,7.2vw,6.2rem)] leading-[0.98]">Never Miss a Customer.</h1>
            <p className="mt-4 font-serif text-[clamp(1.35rem,2.8vw,2.1rem)] italic leading-tight text-brass-soft">
              Turn every conversation into opportunity.
            </p>
            <p className="mt-6 max-w-[40rem] text-[clamp(1rem,1.5vw,1.2rem)] leading-relaxed text-mist/80">
              StayDesk helps businesses handle important customer calls when their teams are busy, unavailable or after hours, then turns those conversations into leads, bookings, appointments, service requests and follow-ups.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/early-access">Request Early Access</Button>
              <Button href="/how-it-works" variant="ghost" arrow={false}>See How It Works</Button>
              <Button href="/demo?source=hero" variant="ghost" arrow={false}>Book a Demo</Button>
            </div>
          </div>
          <LiveCallCard className="lg:mb-1" />
        </div>

        <div className="mt-10 flex items-center gap-5">
          <div className="flex flex-1 gap-1.5" aria-hidden="true">
            {Array.from({ length: SEGMENTS }, (_, i) => (
              <div key={i} className="h-0.5 flex-1 overflow-hidden rounded-sm bg-mist/20">
                <i ref={(el) => { fills.current[i] = el; }} className="block h-full w-0 bg-brass" />
              </div>
            ))}
          </div>
          <button
            type="button"
            onClick={toggle}
            aria-pressed={paused}
            aria-label={paused ? "Play background video" : "Pause background video"}
            className="grid size-10 shrink-0 place-items-center rounded-full border border-mist/40 bg-ink/35 backdrop-blur transition-colors hover:bg-mist/10"
          >
            {paused ? <Play size={13} fill="currentColor" /> : <Pause size={13} fill="currentColor" />}
          </button>
          <a href="#problem" aria-label="Scroll to the next section" className="hidden shrink-0 items-center gap-2 text-xs uppercase tracking-[0.16em] text-mist/70 hover:text-mist sm:flex">
            Scroll <ChevronDown size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}
