import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

export function Section({
  id, eyebrow, title, intro, children, tone = "ink", className = "",
}: {
  id?: string; eyebrow?: string; title?: ReactNode; intro?: ReactNode;
  children?: ReactNode; tone?: "ink" | "graphite"; className?: string;
}) {
  return (
    <section id={id} className={`${tone === "graphite" ? "bg-graphite" : "bg-ink"} px-5 py-20 sm:px-8 md:py-28 lg:px-[72px] ${className}`}>
      <div className="mx-auto max-w-[1240px]">
        {(eyebrow || title || intro) && (
          <Reveal className="mb-12 max-w-3xl md:mb-16">
            {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
            {title && <h2 className="h-display text-[clamp(2rem,4.6vw,3.4rem)]">{title}</h2>}
            {intro && <p className="mt-5 text-lg leading-relaxed text-mist/70">{intro}</p>}
          </Reveal>
        )}
        {children}
      </div>
    </section>
  );
}
