import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { EarlyAccessForm } from "@/components/EarlyAccessForm";

export const metadata: Metadata = { title: "Request Early Access", description: "Join TrulyHello's early access program and help shape an AI calling agent for your business." };

export default function EarlyAccessPage() {
  return (
    <>
      <PageHeader eyebrow="Early access" title="Help shape TrulyHello."
        intro="We're building and validating our MVP with a small group of businesses. Tell us about yours and we'll be in touch." />
      <section className="bg-graphite px-5 py-16 sm:px-8 lg:px-[72px]">
        <div className="mx-auto max-w-2xl">
          <EarlyAccessForm />
        </div>
      </section>
    </>
  );
}
