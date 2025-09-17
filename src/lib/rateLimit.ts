/**
 * Simple in-memory rate limiter for demo/dev purposes.
 * Not suitable for production.
 */

const map = new Map<string, { count: number; resetAt: number }>();
const LIMIT = 10; // operations per WINDOW
const WINDOW = 60_000; // 1 minute

export function isRateLimited(key: string) {
  const now = Date.now();
  const entry = map.get(key);
  if (!entry || entry.resetAt < now) {
    map.set(key, { count: 1, resetAt: now + WINDOW });
    return false;
  }
  if (entry.count >= LIMIT) return true;
  entry.count += 1;
  map.set(key, entry);
  return false;
}
