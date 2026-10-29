// Minimal client-side auth state.
//
// TODO: this is a placeholder until Flask returns a real session token (the
// /api/login response currently has no token). Replace storage with the
// session the backend hands back — nothing here should outlive that.
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