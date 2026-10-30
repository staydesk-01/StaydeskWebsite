import Link from "next/link";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link href="/" aria-label="StayDesk home" className={`font-serif text-2xl font-medium tracking-tight text-mist ${className}`}>
      StayDesk
    </Link>
  );
}
