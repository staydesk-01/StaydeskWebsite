import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = { title: "Contact", description: "Get in touch with the StayDesk team." };

export default function ContactPage() {
  return (
    <>
      <PageHeader eyebrow="Contact" title="Talk to the StayDesk team." intro="Questions, ideas or partnership conversations are all welcome." />
      <section className="bg-graphite px-5 py-16 sm:px-8 lg:px-[72px]">
        <div className="mx-auto max-w-2xl">
          <ContactForm />
        </div>
      </section>
    </>
  );
}
