"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { CalendarDays, ExternalLink, X } from "lucide-react";
import { siteConfig } from "@/config/site";

type Props = {
  title?: string;
  description?: string;
  buttonLabel?: string;
  bookingUrl?: string;
  /** "modal" embeds the Cal.com page; "new-tab" simply opens it. */
  mode?: "modal" | "new-tab";
  variant?: "primary" | "ghost" | "link";
  /** Open the modal immediately (e.g. right after a demo request is saved). */
  defaultOpen?: boolean;
  /** Show the "Open in a new tab" escape hatch. Disable to keep users strictly on-site. */
  showNewTabLink?: boolean;
  className?: string;
};

/** Adds embed params while preserving any query already on the booking URL (e.g. overlayCalendar). */
function embedSrc(url: string, direct: boolean) {
  const u = new URL(url);
  u.searchParams.set("embed", "true");
  u.searchParams.set("theme", "dark");
  if (direct) u.searchParams.set("layout", "month_view");
  return u.toString();
}

const styles = {
  primary: "inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-br from-[#a67a4e] to-brass-deep px-7 py-3.5 text-[0.95rem] font-medium text-white shadow-[0_8px_28px_rgba(0,0,0,.35)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_34px_rgba(185,143,98,.35)]",
  ghost: "inline-flex items-center justify-center gap-3 rounded-full border border-mist/30 bg-ink/30 px-7 py-3.5 text-[0.95rem] font-medium text-mist backdrop-blur transition-all duration-300 hover:border-mist/60 hover:bg-mist/10",
  link: "text-sm text-mist/70 transition-colors hover:text-mist",
};

export function ScheduleMeeting({
  title = "Schedule a Meeting",
  description = "Pick a time that works for you.",
  buttonLabel = "Schedule a Meeting",
  bookingUrl = siteConfig.calUrl,
  mode = "modal",
  variant = "primary",
  defaultOpen = false,
  showNewTabLink = true,
  className = "",
}: Props) {
  const [open, setOpen] = useState(defaultOpen);
  const [loaded, setLoaded] = useState(false);
  const [slow, setSlow] = useState(false);
  const [attempt, setAttempt] = useState(0);
  const closeRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const cls = `${styles[variant]} ${className}`;

  useEffect(() => {
    if (!open) return;
    setLoaded(false);
    setSlow(false);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
      triggerRef.current?.focus();
    };
  }, [open]);

  useEffect(() => {
    if (!open || loaded || showNewTabLink) return;
    const t = setTimeout(() => setSlow(true), 12000);
    return () => clearTimeout(t);
  }, [open, loaded, showNewTabLink, attempt]);

  if (mode === "new-tab") {
    return (
      <a href={bookingUrl} target="_blank" rel="noopener noreferrer" className={cls}>
        {variant !== "link" && <CalendarDays size={16} />}{buttonLabel}
      </a>
    );
  }

  return (
    <>
      <button ref={triggerRef} type="button" className={cls} onClick={() => setOpen(true)}>
        {variant !== "link" && <CalendarDays size={16} />}{buttonLabel}
      </button>
      {open && typeof document !== "undefined" && createPortal(
        <div className="fixed inset-0 z-[100] flex items-end justify-center bg-ink/80 p-0 backdrop-blur-sm sm:items-center sm:p-6" onMouseDown={(e) => { if (e.target === e.currentTarget) setOpen(false); }}>
          <div role="dialog" aria-modal="true" aria-label={title} className="flex h-[92svh] w-full max-w-4xl flex-col overflow-hidden rounded-t-3xl border border-mist/15 bg-graphite shadow-[0_30px_100px_rgba(0,0,0,.6)] sm:h-[85svh] sm:rounded-3xl">
            <div className="flex items-start justify-between gap-4 border-b border-mist/10 px-5 py-4 sm:px-7">
              <div>
                <h2 className="font-serif text-2xl">{title}</h2>
                <p className="mt-1 text-sm text-mist/60">{description}</p>
              </div>
              <button ref={closeRef} type="button" onClick={() => setOpen(false)} aria-label="Close scheduler" className="grid size-9 shrink-0 place-items-center rounded-full border border-mist/25 hover:bg-mist/10"><X size={16} /></button>
            </div>
            <div className="relative flex-1 bg-ink/40">
              {!loaded && !slow && <p className="absolute inset-0 grid place-items-center text-sm text-mist/50">Loading scheduler…</p>}
              {!loaded && slow && (
                <div className="absolute inset-0 grid place-items-center p-6 text-center text-sm text-mist/60">
                  <div>
                    <p>The calendar is taking longer than expected.</p>
                    <button type="button" onClick={() => { setSlow(false); setAttempt((a) => a + 1); }} className="mt-3 rounded-full border border-mist/30 px-5 py-2 text-mist hover:bg-mist/10">Try again</button>
                  </div>
                </div>
              )}
              <iframe
                key={attempt}
                src={embedSrc(bookingUrl, !showNewTabLink)}
                title={title}
                className="relative size-full border-0"
                loading="lazy"
                onLoad={() => setLoaded(true)}
                allow="payment"
              />
            </div>
            {showNewTabLink && (
              <div className="flex flex-wrap items-center justify-between gap-2 border-t border-mist/10 px-5 py-3 text-sm text-mist/60 sm:px-7">
                <span>Scheduler not loading?</span>
                <a href={bookingUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-brass-soft hover:text-mist">
                  Open in a new tab <ExternalLink size={14} />
                </a>
              </div>
            )}
          </div>
        </div>,
        document.body,
      )}
    </>
  );
}
