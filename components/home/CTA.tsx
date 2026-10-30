import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

export function CTA({ title = "Be among the first to try StayDesk.", body = "We're building and validating our MVP with early businesses. Tell us about yours." }: { title?: string; body?: string }) {
  return (
    <section className="bg-graphite px-5 py-20 sm:px-8 md:py-28 lg:px-[72px]">
      <Reveal>
        <div className="relative mx-auto max-w-[1240px] overflow-hidden rounded-[2rem] border border-brass/30 px-6 py-16 text-center md:py-24"
          style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(185,143,98,.22), transparent 65%), #0c1118" }}>
          <h2 className="h-display mx-auto max-w-3xl text-[clamp(2rem,4.8vw,3.6rem)]">{title}</h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-mist/70">{body}</p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href="/early-access">Request Early Access</Button>
            <Button href="/demo?source=bottom-cta" variant="ghost" arrow={false}>Book a Demo</Button>
            <Button href="/contact" variant="ghost" arrow={false}>Talk to us</Button>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
