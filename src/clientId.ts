const CLIENT_ID_STORAGE_KEY = 'cvz_client_id';

/**
 * Returns a stable per-browser identifier, generating and persisting one to
 * localStorage on first use. Used as one dimension of server-side per-visitor
 * rate limiting - a cost-control signal, not a security boundary (clearing
 * storage or an incognito window resets it).
 */
export function getOrCreateClientId(): string {
  try {
    const existing = localStorage.getItem(CLIENT_ID_STORAGE_KEY);
    if (existing) {
      return existing;
    }
    const id = crypto.randomUUID();
    localStorage.setItem(CLIENT_ID_STORAGE_KEY, id);
    return id;
  } catch {
    // localStorage unavailable (private mode, disabled storage, etc.) - fall
    // back to a per-session id so the widget still works, just without
    // cross-reload persistence for the widget-id rate-limit dimension.
    return crypto.randomUUID();
  }
}
