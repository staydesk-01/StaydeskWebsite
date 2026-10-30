import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

type Props = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
  arrow?: boolean;
  className?: string;
};

export function Button({ href, children, variant = "primary", arrow = true, className = "" }: Props) {
  const base =
    "group inline-flex items-center justify-center gap-3 rounded-full px-7 py-3.5 text-[0.95rem] font-medium transition-all duration-300";
  const styles =
    variant === "primary"
      ? "bg-gradient-to-br from-[#a67a4e] to-brass-deep text-white shadow-[0_8px_28px_rgba(0,0,0,.35)] hover:shadow-[0_10px_34px_rgba(185,143,98,.35)] hover:-translate-y-0.5"
      : "border border-mist/30 bg-ink/30 text-mist backdrop-blur hover:border-mist/60 hover:bg-mist/10";
  return (
    <Link href={href} className={`${base} ${styles} ${className}`}>
      {children}
      {arrow && <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />}
    </Link>
  );
}
