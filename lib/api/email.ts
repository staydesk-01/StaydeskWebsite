/** Internal notification via Resend's REST API. Never throws; skips quietly when not configured. */
export async function notifyTeam(subject: string, fields: Record<string, unknown>): Promise<"sent" | "skipped" | "failed"> {
  const key = process.env.RESEND_API_KEY;
  const to = process.env.NOTIFY_EMAIL_TO;
  const from = process.env.EMAIL_FROM;
  if (!key || !to || !from) {
    console.info(`[email] skipped (Resend not configured): ${subject}`);
    return "skipped";
  }
  const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  const rows = Object.entries(fields)
    .filter(([, v]) => v !== undefined && v !== "")
    .map(([k, v]) => `<tr><td style="padding:4px 12px 4px 0;color:#666"><b>${esc(k)}</b></td><td style="padding:4px 0">${esc(String(v))}</td></tr>`)
    .join("");
  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
      body: JSON.stringify({ from, to: to.split(",").map((s) => s.trim()), subject, html: `<table>${rows}</table>` }),
      signal: AbortSignal.timeout(5000),
    });
    if (!res.ok) { console.error(`[email] Resend responded ${res.status}`); return "failed"; }
    return "sent";
  } catch (e) {
    console.error("[email] send failed:", e instanceof Error ? e.message : "unknown");
    return "failed";
  }
}
