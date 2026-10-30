import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { Button } from "@/components/ui/Button";
import { Capabilities } from "@/components/home/Capabilities";
import { AutomationModes } from "@/components/home/AutomationModes";
import { DashboardPreview } from "@/components/home/DashboardPreview";
import { CTA } from "@/components/home/CTA";

export const metadata: Metadata = { title: "Product", description: "The StayDesk platform: an AI calling agent, business automation and a dashboard that turns customer calls into completed actions." };

export default function ProductPage() {
  return (
    <>
      <PageHeader eyebrow="Product" title="One platform for every call your business can't get to."
        intro="StayDesk starts with an AI calling agent and grows into an intelligent layer for business operations: conversations in, completed actions out.">
        <Button href="/early-access">Request Early Access</Button>
        <Button href="/how-it-works" variant="ghost" arrow={false}>See How It Works</Button>
        <Button href="/demo?source=product-page" variant="ghost" arrow={false}>Book a Demo</Button>
      </PageHeader>
      <Capabilities />
      <AutomationModes />
      <DashboardPreview />
      <CTA />
    </>
  );
}
