import Link from "next/link";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link href="/" aria-label="TrulyHello home" className={`font-serif text-2xl font-medium tracking-tight text-mist ${className}`}>
      TrulyHello
    </Link>
  );
}
