import type { Industry } from "@/lib/content";
import { ArrowUpRight } from "lucide-react";

export function IndustryCard({ name, outcome, example }: Industry) {
  return (
    <div className="card card-hover group flex h-full flex-col p-6">
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-serif text-xl font-medium">{name}</h3>
        <ArrowUpRight size={18} className="shrink-0 text-mist/30 transition-colors group-hover:text-brass" />
      </div>
      <p className="mt-3 inline-flex w-fit rounded-full border border-brass/35 bg-brass/10 px-3 py-1 text-xs text-brass-soft">{outcome}</p>
      <p className="mt-4 text-[0.92rem] leading-relaxed text-mist/60">{example}</p>
    </div>
  );
}
