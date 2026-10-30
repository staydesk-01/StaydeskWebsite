import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { Button } from "@/components/ui/Button";
import { HowItWorks } from "@/components/home/HowItWorks";
import { ConversationToAction } from "@/components/home/ConversationToAction";
import { OwnerVisibility } from "@/components/home/OwnerVisibility";
import { CTA } from "@/components/home/CTA";

export const metadata: Metadata = { title: "How It Works", description: "Your team answers first. When they can't, StayDesk takes over, understands the request, takes approved actions and updates your team." };

export default function HowItWorksPage() {
  return (
    <>
      <PageHeader eyebrow="How it works" title="Simple for your customers. Controlled by you."
        intro="From the first ring to the recorded outcome, here is what happens when a customer calls a business using StayDesk.">
        <Button href="/early-access">Request Early Access</Button>
      </PageHeader>
      <HowItWorks id="steps" title="Six steps from ring to result." />
      <ConversationToAction />
      <OwnerVisibility />
      <CTA />
    </>
  );
}
