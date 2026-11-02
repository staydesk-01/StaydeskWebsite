"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { NAV_LINKS } from "@/lib/site";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid ? "border-b border-mist/10 bg-ink/80 backdrop-blur-xl" : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex h-[68px] max-w-[1400px] items-center justify-between px-5 sm:px-8 lg:px-10 xl:px-[72px]" aria-label="Primary">
        <Logo />
        <ul className="hidden items-center gap-8 xl:flex">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                aria-current={pathname === l.href ? "page" : undefined}
                className={`text-sm transition-colors hover:text-mist ${pathname === l.href ? "text-mist" : "text-mist/70"}`}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="hidden items-center gap-3 xl:flex">
          <Link href="/sign-in" className="px-3 py-2 text-sm text-mist/70 transition-colors hover:text-mist">Sign in</Link>
        </div>
        <button
          type="button"
          className="grid size-10 place-items-center rounded-full border border-mist/30 bg-ink/35 backdrop-blur xl:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {open && (
        <div className="fixed inset-x-0 top-[68px] bottom-0 overflow-y-auto bg-ink px-5 pb-10 pt-6 xl:hidden">
          <ul className="flex flex-col">
            {NAV_LINKS.map((l) => (
              <li key={l.href} className="border-b border-mist/10">
                <Link href={l.href} className="block py-4 font-serif text-2xl text-mist">{l.label}</Link>
              </li>
            ))}
            <li className="border-b border-mist/10">
              <Link href="/sign-in" className="block py-4 font-serif text-2xl text-mist/70">Sign in</Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
