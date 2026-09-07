const LEGACY_CLIENT_ID_STORAGE_KEY = 'cvz_client_id';
const SERVER_CLIENT_ID_STORAGE_KEY = 'cvz_client_id_v2';
const CAPTCHA_ACTION = 'issue_client_id';

type CaptchaProvider = 'recaptcha_v3' | 'turnstile';

interface CaptchaRequiredResponse {
  error: string;
  provider: CaptchaProvider;
  site_key: string;
}

function isCaptchaRequiredResponse(body: unknown): body is CaptchaRequiredResponse {
  return (
    typeof body === 'object' &&
    body !== null &&
    'provider' in body &&
    'site_key' in body
  );
}

// Neither provider ships first-party TypeScript types worth pulling in for
// two methods each - minimal ambient declarations for just what's used.
declare global {
  interface Window {
    grecaptcha?: {
      ready: (callback: () => void) => void;
      execute: (siteKey: string, options: { action: string }) => Promise<string>;
    };
    turnstile?: {
      render: (
        container: HTMLElement,
        options: {
          sitekey: string;
          action?: string;
          size?: 'invisible' | 'normal' | 'compact';
          callback: (token: string) => void;
          'error-callback'?: (error: unknown) => void;
        },
      ) => string;
    };
  }
}

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

let recaptchaScriptPromise: Promise<void> | null = null;
function loadRecaptchaScript(siteKey: string): Promise<void> {
  if (!recaptchaScriptPromise) {
    recaptchaScriptPromise = new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = `https://www.google.com/recaptcha/api.js?render=${encodeURIComponent(siteKey)}`;
      script.async = true;
      script.onload = () => resolve();
      script.onerror = () => reject(new Error('failed to load reCAPTCHA script'));
      // Real top-level DOM, not the widget's shadow root - the script and
      // its badge both need it.
      document.head.appendChild(script);
    });
  }
  return recaptchaScriptPromise;
}

async function getRecaptchaToken(siteKey: string): Promise<string> {
  await loadRecaptchaScript(siteKey);
  return new Promise((resolve, reject) => {
    if (!window.grecaptcha) {
      reject(new Error('grecaptcha unavailable after script load'));
      return;
    }
    window.grecaptcha.ready(() => {
      window
        .grecaptcha!.execute(siteKey, { action: CAPTCHA_ACTION })
        .then(resolve, reject);
    });
  });
}

let turnstileScriptPromise: Promise<void> | null = null;
function loadTurnstileScript(): Promise<void> {
  if (!turnstileScriptPromise) {
    turnstileScriptPromise = new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js';
      script.async = true;
      script.onload = () => resolve();
      script.onerror = () => reject(new Error('failed to load Turnstile script'));
      document.head.appendChild(script);
    });
  }
  return turnstileScriptPromise;
}

async function getTurnstileToken(siteKey: string): Promise<string> {
  await loadTurnstileScript();
  return new Promise((resolve, reject) => {
    if (!window.turnstile) {
      reject(new Error('turnstile unavailable after script load'));
      return;
    }
    // Turnstile needs a real (if invisible/zero-size) container element to
    // render into, unlike reCAPTCHA v3's bare execute() - a real
    // implementation difference, not just a different script URL.
    const container = document.createElement('div');
    container.style.display = 'none';
    document.body.appendChild(container);
    const cleanup = () => container.remove();
    window.turnstile.render(container, {
      sitekey: siteKey,
      action: CAPTCHA_ACTION,
      size: 'invisible',
      callback: (token) => {
        resolve(token);
        cleanup();
      },
      'error-callback': (err) => {
        reject(err instanceof Error ? err : new Error('Turnstile challenge failed'));
        cleanup();
      },
    });
  });
}

function getCaptchaToken(provider: CaptchaProvider, siteKey: string): Promise<string> {
  return provider === 'recaptcha_v3'
    ? getRecaptchaToken(siteKey)
    : getTurnstileToken(siteKey);
}

function issueClientId(
  baseUrl: string,
  publicId: string,
  recaptchaToken?: string,
): Promise<Response> {
  return fetch(`${baseUrl}/api/chat/client_id`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      widget_public_id: publicId,
      ...(recaptchaToken ? { recaptcha_token: recaptchaToken } : {}),
    }),
  });
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
 * If the account requires a CAPTCHA, this transparently loads the right
 * provider's script (reCAPTCHA v3 or Cloudflare Turnstile - whichever the
 * account picked), solves an invisible/background challenge, and retries
 * once with the resulting token.
 *
 * A `null` return means an outright failure (network, or CAPTCHA
 * challenge failure) while `publicId` IS configured. Callers should still
 * proceed with no client_id in that case rather than block the user's
 * message - cvz-chat accepts a missing client_id until its hard-cutover
 * date is reached.
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
    let res = await issueClientId(baseUrl, publicId);

    if (res.status === 400) {
      const body: unknown = await res.json();
      if (isCaptchaRequiredResponse(body)) {
        const token = await getCaptchaToken(body.provider, body.site_key);
        res = await issueClientId(baseUrl, publicId, token);
      } else {
        console.warn('cvzWidget: client_id issuance failed (400)');
        return null;
      }
    }

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
