/**
 * Auth integration point. There is no authentication yet, so there is never a session.
 * Replace this with your real session lookup (cookies/JWT/provider SDK) when auth is added;
 * protected routes and API handlers should call getSession() rather than assuming a user.
 */
export type Session = { userId: string; email: string } | null;

export async function getSession(): Promise<Session> {
  return null;
}
