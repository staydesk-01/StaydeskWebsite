const KEY = "sd_attribution";
const UTM = ["utm_source", "utm_medium", "utm_campaign"] as const;

type Attribution = Partial<Record<(typeof UTM)[number] | "source", string>>;

function read(): Attribution {
  try { return JSON.parse(sessionStorage.getItem(KEY) ?? "{}"); } catch { return {}; }
}

/** Remember UTM params / ?source= from the landing URL for the rest of the session. */
export function captureAttribution() {
  try {
    const p = new URLSearchParams(window.location.search);
    const found: Attribution = {};
    for (const k of UTM) { const v = p.get(k); if (v) found[k] = v.slice(0, 100); }
    if (Object.keys(found).length) sessionStorage.setItem(KEY, JSON.stringify({ ...read(), ...found }));
  } catch { /* storage unavailable */ }
}

/** Attribution to attach to a submission. A ?source= on the current URL (e.g. from the hero/navbar CTA) wins. */
export function getAttribution(defaultSource: string) {
  const p = new URLSearchParams(window.location.search);
  const stored = read();
  const pick = (k: (typeof UTM)[number]) => p.get(k)?.slice(0, 100) || stored[k];
  return {
    source: p.get("source")?.slice(0, 40) || defaultSource,
    utm_source: pick("utm_source"),
    utm_medium: pick("utm_medium"),
    utm_campaign: pick("utm_campaign"),
    pagePath: window.location.pathname,
  };
}
