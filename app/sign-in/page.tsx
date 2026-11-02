import type { Metadata } from "next";
import { SignInForm } from "@/components/ui/SignInForm";

export const metadata: Metadata = { title: "Sign in", description: "Sign in to the TrulyHello dashboard.", robots: { index: false } };

export default function SignInPage() {
  return (
    <section className="flex min-h-svh items-center justify-center bg-ink px-5 py-32" style={{ backgroundImage: "radial-gradient(ellipse at 50% 0%, rgba(185,143,98,.16), transparent 60%)" }}>
      <div className="w-full max-w-md">
        <h1 className="h-display text-center text-4xl">TrulyHello Workspace</h1>
        <p className="mt-3 text-center text-mist/60">Sign in to continue.</p>
        <SignInForm />
      </div>
    </section>
  );
}
