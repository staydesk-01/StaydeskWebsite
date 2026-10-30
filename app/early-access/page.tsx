import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { EarlyAccessForm } from "@/components/EarlyAccessForm";
import { TalkToTeam } from "@/components/TalkToTeam";

export const metadata: Metadata = { title: "Request Early Access", description: "Join StayDesk's early access program and help shape an AI calling agent for your business." };

export default function EarlyAccessPage() {
  return (
    <>
      <PageHeader eyebrow="Early access" title="Help shape StayDesk."
        intro="We're building and validating our MVP with a small group of businesses. Tell us about yours and we'll be in touch." />
      <section className="bg-graphite px-5 py-16 sm:px-8 lg:px-[72px]">
        <div className="mx-auto max-w-2xl">
          <EarlyAccessForm />
          <p className="mt-8 text-center text-sm text-mist/60">
            Prefer to talk it through? <TalkToTeam variant="link" className="!text-brass-soft underline underline-offset-4" />
          </p>
        </div>
      </section>
    </>
  );
}
