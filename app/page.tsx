import { Hero } from "@/components/home/Hero";
import { Problem } from "@/components/home/Problem";
import { HowItWorks } from "@/components/home/HowItWorks";
import { AutomationModes } from "@/components/home/AutomationModes";
import { ConversationToAction } from "@/components/home/ConversationToAction";
import { Capabilities } from "@/components/home/Capabilities";
import { Speed } from "@/components/home/Speed";
import { Industries } from "@/components/home/Industries";
import { DashboardPreview } from "@/components/home/DashboardPreview";
import { HumanAI } from "@/components/home/HumanAI";
import { ExistingPhone } from "@/components/home/ExistingPhone";
import { OwnerVisibility } from "@/components/home/OwnerVisibility";
import { GlobalVision } from "@/components/home/GlobalVision";
import { CTA } from "@/components/home/CTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Problem />
      <HowItWorks />
      <AutomationModes />
      <ConversationToAction />
      <Capabilities />
      <Speed />
      <Industries />
      <DashboardPreview />
      <HumanAI />
      <ExistingPhone />
      <OwnerVisibility />
      <GlobalVision />
      <CTA />
    </>
  );
}
