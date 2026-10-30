import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

export function PageHeader({ eyebrow, title, intro, children }: { eyebrow: string; title: ReactNode; intro: ReactNode; children?: ReactNode }) {
  return (
    <header className="relative overflow-hidden bg-ink px-5 pb-16 pt-36 sm:px-8 md:pb-24 md:pt-44 lg:px-[72px]"
      style={{ backgroundImage: "radial-gradient(ellipse at 80% 0%, rgba(185,143,98,.16), transparent 55%)" }}>
      <Reveal className="mx-auto max-w-[1240px]">
        <p className="eyebrow mb-5">{eyebrow}</p>
        <h1 className="h-display max-w-4xl text-[clamp(2.4rem,6vw,4.8rem)]">{title}</h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-mist/70">{intro}</p>
        {children && <div className="mt-8 flex flex-col gap-3 sm:flex-row">{children}</div>}
      </Reveal>
    </header>
  );
}
