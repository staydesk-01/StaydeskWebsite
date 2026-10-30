export type SubmitResult =
  | { ok: true }
  | { ok: false; kind: "validation" | "server"; message: string; fieldErrors?: Record<string, string> };

export const SERVER_ERROR_MESSAGE = "We couldn't submit your request right now. Please try again.";

type ApiBody = { success?: boolean; error?: string; fieldErrors?: Record<string, string> };

export async function submitForm(endpoint: string, data: Record<string, unknown>): Promise<SubmitResult> {
  let res: Response;
  try {
    res = await fetch(endpoint, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
  } catch {
    return { ok: false, kind: "server", message: SERVER_ERROR_MESSAGE };
  }
  const body = (await res.json().catch(() => ({}))) as ApiBody;
  if (res.ok && body.success) return { ok: true };
  if (res.status === 400 && body.fieldErrors) {
    return { ok: false, kind: "validation", message: body.error ?? "Please check your details.", fieldErrors: body.fieldErrors };
  }
  // 429 gets its own server-provided wording; everything else falls back to the generic message.
  return { ok: false, kind: "server", message: res.status === 429 && body.error ? body.error : SERVER_ERROR_MESSAGE };
}
