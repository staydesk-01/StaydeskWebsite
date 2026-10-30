import Link from "next/link";
import { TalkToTeam } from "@/components/TalkToTeam";
import { Logo } from "./Logo";
import { FOOTER_GROUPS } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-mist/10 bg-ink px-5 py-16 sm:px-8 lg:px-[72px]">
      <div className="mx-auto grid max-w-[1240px] gap-12 md:grid-cols-[1.4fr_repeat(3,1fr)]">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-mist/60">
            Turning customer conversations into completed business actions. Currently building and validating our MVP.
          </p>
        </div>
        {FOOTER_GROUPS.map((g) => (
          <div key={g.title}>
            <h3 className="eyebrow mb-4">{g.title}</h3>
            <ul className="space-y-3">
              {g.links.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-mist/70 transition-colors hover:text-mist">{l.label}</Link>
                </li>
              ))}
              {g.title === "Company" && (
                <li><TalkToTeam variant="link" /></li>
              )}
            </ul>
          </div>
        ))}
      </div>
      <div className="mx-auto mt-14 flex max-w-[1240px] flex-col gap-2 border-t border-mist/10 pt-6 text-xs text-mist/45 sm:flex-row sm:justify-between">
        <p>© {new Date().getFullYear()} StayDesk. All rights reserved.</p>
        <p>Product visuals on this site use demo data and prototype concepts.</p>
      </div>
    </footer>
  );
}
