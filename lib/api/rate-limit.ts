/**
 * Minimal in-memory sliding-window rate limiter. Fine for a single instance / local dev;
 * swap the body of `rateLimit` for Redis/Upstash when deploying across instances.
 */
const hits = new Map<string, number[]>();

export function rateLimit(key: string, limit = 8, windowMs = 10 * 60_000): { ok: boolean; retryAfter: number } {
  const now = Date.now();
  const recent = (hits.get(key) ?? []).filter((t) => now - t < windowMs);
  if (recent.length >= limit) return { ok: false, retryAfter: Math.ceil((windowMs - (now - recent[0])) / 1000) };
  recent.push(now);
  hits.set(key, recent);
  if (hits.size > 5000) for (const [k, v] of hits) if (!v.some((t) => now - t < windowMs)) hits.delete(k);
  return { ok: true, retryAfter: 0 };
}
