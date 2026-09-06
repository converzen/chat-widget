const LEGACY_CLIENT_ID_STORAGE_KEY = 'cvz_client_id';
const SERVER_CLIENT_ID_STORAGE_KEY = 'cvz_client_id_v2';

function readStorage(key: string): string | null {
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
}

function writeStorage(key: string, value: string): void {
  try {
    localStorage.setItem(key, value);
  } catch {
    // private mode / disabled storage - just doesn't persist across reloads
  }
}

/**
 * Legacy, self-generated per-browser id - kept only as a fallback for
 * integrations that haven't configured `WidgetConfig.publicId` yet, since
 * there's no account to ask cvz-chat for a real one without it. Spoofable
 * by construction (any caller can send any value); do not rely on it for
 * anything security-sensitive.
 */
function generateLocalClientId(): string {
  const existing = readStorage(LEGACY_CLIENT_ID_STORAGE_KEY);
  if (existing) {
    return existing;
  }
  const id = crypto.randomUUID();
  writeStorage(LEGACY_CLIENT_ID_STORAGE_KEY, id);
  return id;
}

/**
 * Returns a stable per-browser identifier, or `null` if none is available
 * right now.
 *
 * When `publicId` (`WidgetConfig.publicId`) is configured, this is a
 * client_id cvz-chat itself issued and will vouch for at get_token time -
 * see the "Client ID Protocol" design. It's cached under its own storage
 * key (distinct from the legacy one below) so a visitor who already had a
 * self-generated id gets upgraded to a real one the first time their
 * account adds `publicId`, rather than reusing the old spoofable value
 * forever.
 *
 * Without a `publicId` there's no account to ask cvz-chat for one, so this
 * falls back to the old self-generated, unverified id - no worse than
 * this widget's behavior before this existed.
 *
 * A `null` return means an outright network failure while `publicId` IS
 * configured. Callers should still proceed with no client_id in that case
 * rather than block the user's message - cvz-chat accepts a missing
 * client_id until its hard-cutover date is reached.
 */
export async function getOrCreateClientId(
  baseUrl: string,
  publicId?: string,
): Promise<string | null> {
  if (!publicId) {
    return generateLocalClientId();
  }

  const cached = readStorage(SERVER_CLIENT_ID_STORAGE_KEY);
  if (cached) {
    return cached;
  }

  try {
    const res = await fetch(`${baseUrl}/api/chat/client_id`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ widget_public_id: publicId }),
    });
    if (!res.ok) {
      console.warn(`cvzWidget: client_id issuance failed (${res.status})`);
      return null;
    }
    const data = (await res.json()) as { client_id: string };
    writeStorage(SERVER_CLIENT_ID_STORAGE_KEY, data.client_id);
    return data.client_id;
  } catch (err) {
    console.warn('cvzWidget: client_id issuance failed', err);
    return null;
  }
}
