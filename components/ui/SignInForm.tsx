"use client";

import Link from "next/link";
import { useState } from "react";

/**
 * Authentication foundation. No auth provider is wired up yet, so submitting never signs anyone in.
 * To integrate: call your provider (e.g. Auth.js / Clerk / custom) inside `onSubmit`, and read sessions via lib/auth.ts.
 */
export function SignInForm() {
  const [notice, setNotice] = useState<"" | "signin" | "forgot">("");
  const input = "w-full rounded-xl border border-mist/15 bg-ink/60 px-4 py-3 text-mist placeholder:text-mist/35 focus:border-brass focus:outline-none";
  return (
    <form className="card mt-8 space-y-5 p-6 md:p-8" onSubmit={(e) => { e.preventDefault(); setNotice("signin"); }}>
      <div>
        <label htmlFor="email" className="mb-2 block text-sm text-mist/80">Email</label>
        <input id="email" type="email" autoComplete="email" required className={input} placeholder="you@business.com" />
      </div>
      <div>
        <label htmlFor="password" className="mb-2 block text-sm text-mist/80">Password</label>
        <input id="password" type="password" autoComplete="current-password" required className={input} />
      </div>
      {notice && (
        <p role="status" className="rounded-xl bg-brass/10 p-3 text-sm text-brass-soft">
          {notice === "signin"
            ? "The StayDesk workspace isn't open yet, so sign-in isn't available."
            : "Password reset isn't available yet because accounts aren't open."}{" "}
          <Link href="/early-access" className="underline">Request access</Link> and we&apos;ll let you know when it is.
        </p>
      )}
      <button type="submit" className="w-full rounded-full bg-gradient-to-br from-[#a67a4e] to-brass-deep px-7 py-3.5 font-medium text-white">Sign In</button>
      <div className="flex justify-between text-sm">
        <button type="button" onClick={() => setNotice("forgot")} className="text-mist/60 hover:text-mist">Forgot Password</button>
        <Link href="/early-access" className="text-brass-soft hover:text-mist">Request Access</Link>
      </div>
    </form>
  );
}
