export function DemoBadge({ label = "Demo Data" }: { label?: string }) {
  return (
    <span className="inline-flex items-center rounded-full border border-brass/40 bg-brass/10 px-2.5 py-0.5 text-[0.65rem] font-medium uppercase tracking-[0.14em] text-brass-soft">
      {label}
    </span>
  );
}
