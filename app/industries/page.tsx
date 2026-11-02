import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { Button } from "@/components/ui/Button";
import { Industries } from "@/components/home/Industries";
import { HumanAI } from "@/components/home/HumanAI";
import { CTA } from "@/components/home/CTA";

export const metadata: Metadata = { title: "Industries", description: "TrulyHello adapts to hotels, restaurants, dental and healthcare offices, auto repair, home services, real estate, salons and more." };

export default function IndustriesPage() {
  return (
    <>
      <PageHeader eyebrow="Industries" title="Any business that takes calls."
        intro="TrulyHello is configurable rather than industry-specific. Set your services, hours and rules, and it handles the conversations that matter to you.">
        <Button href="/early-access">Request Early Access</Button>
      </PageHeader>
      <Industries full />
      <HumanAI />
      <CTA />
    </>
  );
}
