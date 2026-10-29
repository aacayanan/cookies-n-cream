// Client-side session storage: { user: { id, email }, session: { access_token,
// refresh_token, expires_at, token_type } } as returned by POST /api/login.
//
// TODO: when expires_at passes, refresh via the backend before treating the
// visitor as signed out — nothing here validates tokens yet.
const STORAGE_KEY = "ice-track.session";

export function getSession() {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

export function isAuthenticated() {
  return getSession() !== null;
}

export function setSession(session) {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(session));
}

export function clearSession() {
  window.localStorage.removeItem(STORAGE_KEY);
}