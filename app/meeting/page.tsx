import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/ui/PageHeader";
import { ScheduleMeeting } from "@/components/ScheduleMeeting";

export const metadata: Metadata = { title: "Schedule a Meeting", description: "Schedule a conversation about StayDesk, partnerships, pilots, integrations or the product." };

export default function MeetingPage() {
  return (
    <>
      <PageHeader eyebrow="Meeting" title="Let's Talk"
        intro="Have a question about StayDesk, partnerships, pilots, integrations or the product? Schedule a conversation directly.">
        <ScheduleMeeting title="Schedule a Meeting" description="Choose a time that works for you." buttonLabel="Schedule a Meeting" />
      </PageHeader>
      <section className="bg-graphite px-5 py-14 text-center sm:px-8">
        <p className="text-mist/60">Prefer to write first? <Link href="/contact" className="text-brass-soft underline underline-offset-4 hover:text-mist">Send us a message</Link>.</p>
      </section>
    </>
  );
}
