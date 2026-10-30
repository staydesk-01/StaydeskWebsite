import type { Feature } from "@/lib/content";

export function FeatureCard({ icon: Icon, title, body }: Feature) {
  return (
    <div className="card card-hover h-full p-6">
      <span className="mb-5 grid size-11 place-items-center rounded-xl bg-brass/15 text-brass-soft"><Icon size={20} strokeWidth={1.6} /></span>
      <h3 className="font-serif text-xl font-medium">{title}</h3>
      <p className="mt-2 text-[0.95rem] leading-relaxed text-mist/65">{body}</p>
    </div>
  );
}
