export function Waveform({ active = true, bars = 28, className = "" }: { active?: boolean; bars?: number; className?: string }) {
  return (
    <div className={`flex h-10 items-center gap-[3px] ${className}`} aria-hidden="true">
      {Array.from({ length: bars }, (_, i) => (
        <span
          key={i}
          className={`block w-[3px] origin-center rounded-full bg-brass ${active ? "animate-wave" : ""}`}
          style={{
            height: `${30 + ((i * 37) % 70)}%`,
            animationDelay: `${(i % 9) * 0.11}s`,
            animationDuration: `${0.8 + ((i * 13) % 6) / 10}s`,
            opacity: active ? 1 : 0.35,
            transform: active ? undefined : "scaleY(0.35)",
          }}
        />
      ))}
    </div>
  );
}
