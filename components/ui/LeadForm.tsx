"use client";

import { useRef, useState, type FormEvent, type ReactNode } from "react";
import { submitForm } from "@/lib/forms";
import { SCHEMAS, fieldErrors, type FormKey } from "@/lib/validation";
import { getAttribution } from "@/lib/tracking";

export type Field = {
  name: string;
  label: string;
  type?: "text" | "email" | "tel" | "textarea" | "select" | "checkbox" | "number" | "url";
  required?: boolean;
  options?: readonly string[];
  placeholder?: string;
};

type Status = "idle" | "submitting" | "success" | "validation-error" | "server-error";

export function LeadForm({
  formKey, endpoint, fields, submitLabel, defaultSource, success, onSuccess,
}: {
  formKey: FormKey;
  endpoint: string;
  fields: Field[];
  submitLabel: string;
  defaultSource: string;
  /** Rendered in place of the form after a successful submission. */
  success: (values: Record<string, string | boolean>) => ReactNode;
  /** Optional hook fired once after a successful submission. */
  onSuccess?: (values: Record<string, string | boolean>) => void;
}) {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formError, setFormError] = useState("");
  const [submitted, setSubmitted] = useState<Record<string, string | boolean>>({});
  const lock = useRef(false);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (lock.current) return; // blocks double clicks / Enter-spam before state re-renders
    const form = e.currentTarget;
    const fd = new FormData(form);
    const values: Record<string, string | boolean> = {};
    for (const f of fields) values[f.name] = f.type === "checkbox" ? fd.get(f.name) === "on" : String(fd.get(f.name) ?? "");
    const honeypot = String(fd.get("company_website") ?? "");

    const check = SCHEMAS[formKey].safeParse(values);
    if (!check.success) {
      const errs = fieldErrors(check.error);
      setErrors(errs); setFormError(""); setStatus("validation-error");
      form.querySelector<HTMLElement>(`[name="${Object.keys(errs)[0]}"]`)?.focus();
      return;
    }

    lock.current = true;
    setErrors({}); setFormError(""); setStatus("submitting");
    const res = await submitForm(endpoint, { ...values, ...getAttribution(defaultSource), company_website: honeypot });
    lock.current = false;

    if (res.ok) {
      setSubmitted(values); setStatus("success"); onSuccess?.(values);
    } else {
      setErrors(res.fieldErrors ?? {}); setFormError(res.kind === "server" ? res.message : ""); setStatus(res.kind === "validation" ? "validation-error" : "server-error");
    }
  }

  if (status === "success") return <>{success(submitted)}</>;

  const input = "w-full rounded-xl border border-mist/15 bg-ink/60 px-4 py-3 text-[0.95rem] text-mist placeholder:text-mist/35 focus:border-brass focus:outline-none aria-[invalid=true]:border-red-400/70";
  const busy = status === "submitting";

  return (
    <form onSubmit={onSubmit} noValidate className="card space-y-5 p-6 md:p-8" aria-busy={busy}>
      <input type="text" name="company_website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
      <fieldset disabled={busy} className="space-y-5 border-0 p-0">
        {fields.map((f) => {
          const err = errors[f.name];
          const common = { id: f.name, name: f.name, "aria-invalid": err ? true : undefined, "aria-describedby": err ? `${f.name}-err` : undefined } as const;
          return (
            <div key={f.name}>
              {f.type === "checkbox" ? (
                <label className="flex cursor-pointer items-start gap-3 text-sm text-mist/80">
                  <input {...common} type="checkbox" className="mt-0.5 size-4 accent-[#b98f62]" />
                  {f.label}
                </label>
              ) : (
                <>
                  <label htmlFor={f.name} className="mb-2 block text-sm text-mist/80">{f.label}{f.required && <span className="text-brass"> *</span>}</label>
                  {f.type === "textarea" ? (
                    <textarea {...common} rows={4} placeholder={f.placeholder} className={input} />
                  ) : f.type === "select" ? (
                    <select {...common} defaultValue="" className={input}>
                      <option value="">Select…</option>
                      {f.options?.map((o) => <option key={o} value={o}>{o}</option>)}
                    </select>
                  ) : (
                    <input {...common} type={f.type ?? "text"} inputMode={f.type === "number" ? "numeric" : undefined} placeholder={f.placeholder} className={input} />
                  )}
                </>
              )}
              {err && <p id={`${f.name}-err`} className="mt-1.5 text-sm text-red-300" role="alert">{err}</p>}
            </div>
          );
        })}
      </fieldset>
      {formError && <p className="rounded-xl border border-red-400/30 bg-red-400/10 p-3 text-sm text-red-200" role="alert">{formError}</p>}
      <button type="submit" disabled={busy}
        className="w-full rounded-full bg-gradient-to-br from-[#a67a4e] to-brass-deep px-7 py-3.5 font-medium text-white transition-all hover:shadow-[0_8px_28px_rgba(185,143,98,.35)] disabled:cursor-not-allowed disabled:opacity-60">
        {busy ? "Submitting..." : submitLabel}
      </button>
    </form>
  );
}
