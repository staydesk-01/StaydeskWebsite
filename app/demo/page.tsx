import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { DemoForm } from "@/components/DemoForm";

export const metadata: Metadata = { title: "Book a Demo", description: "See StayDesk in action: handling customer calls, capturing opportunities and automating approved business actions." };

export default function DemoPage() {
  return (
    <>
      <PageHeader eyebrow="Demo" title="See StayDesk in Action"
        intro="Learn how StayDesk can help your business handle customer calls, capture opportunities and automate approved business actions." />
      <section className="bg-graphite px-5 py-16 sm:px-8 lg:px-[72px]">
        <div className="mx-auto max-w-2xl"><DemoForm /></div>
      </section>
    </>
  );
}
