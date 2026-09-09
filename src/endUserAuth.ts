// End-user identity for accounts using ConverZen's own subscription/credits
// monetization (WidgetConfig.endUserLicensing). Independent of the widget's
// tenant-level auth (apiKey/getToken): this is a *visitor's* own identity
// (magic-link email login), persisted so it survives reloads and lets the
// widget skip straight to using the visitor's purchased balance instead of
// the free-tier rate limit.

const AUTH_STORAGE_KEY = 'cvz_end_user_auth_v1';
const LAST_EMAIL_STORAGE_KEY = 'cvz_end_user_last_email';
const PENDING_CHECKOUT_STORAGE_KEY = 'cvz_end_user_pending_checkout_v1';

// A magic-link-issued chat JWT is meant to last weeks (see cvz-chat's
// end_user.chat_token_ttl_secs) - treat anything expiring within the next
// 5 minutes as already gone rather than handing it to a request that will
// just get a 401 back.
const EXPIRY_SKEW_SECS = 5 * 60;

export interface EndUserAuth {
  token: string;
  /** Unix seconds, matching cvz-chat's `expires_at`. */
  expiresAt: number;
  email: string;
}

export interface EndUserPlanInfo {
  id: number;
  name: string;
  price_cents: number;
  currency: string;
  kind: 'subscription' | 'topup' | string;
  included_vtokens: number;
}

export interface EndUserStatus {
  email: string;
  subscription_vtokens_remaining: number;
  prepaid_vtokens_balance: number;
  total_vtokens_remaining: number;
  subscription_status: string | null;
  /** Unix seconds - when the current subscription period renews. */
  current_period_end: number | null;
  plan_name: string | null;
}

export type EndUserWaitOutcome =
  | { status: 'verified'; chat_token: string; expires_at: number }
  | { status: 'subscribed'; plan_id: number }
  | { status: 'timed_out' }
  | { status: 'error' };

export interface PendingCheckout {
  pendingId: string;
  planId: number;
}

export interface BaseAuth {
  token: string;
  type: 'apiKey' | 'bearer';
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

function clearStorage(key: string): void {
  try {
    localStorage.removeItem(key);
  } catch {
    // as above
  }
}

export function loadEndUserAuth(): EndUserAuth | null {
  const raw = readStorage(AUTH_STORAGE_KEY);
  if (!raw) return null;
  try {
    const parsed = JSON.parse(raw) as Partial<EndUserAuth>;
    if (typeof parsed.token === 'string' && typeof parsed.expiresAt === 'number' && typeof parsed.email === 'string') {
      return parsed as EndUserAuth;
    }
  } catch {
    // corrupted value - treat as absent
  }
  return null;
}

export function isEndUserAuthValid(auth: EndUserAuth | null): auth is EndUserAuth {
  if (!auth) return false;
  return auth.expiresAt - EXPIRY_SKEW_SECS > Date.now() / 1000;
}

export function saveEndUserAuth(auth: EndUserAuth): void {
  writeStorage(AUTH_STORAGE_KEY, JSON.stringify(auth));
  writeStorage(LAST_EMAIL_STORAGE_KEY, auth.email);
}

/** Drops the token but keeps the last-known email so re-authenticating (or
 * an expired session's next login prompt) doesn't make the visitor retype it. */
export function clearEndUserAuth(): void {
  clearStorage(AUTH_STORAGE_KEY);
}

export function loadLastKnownEmail(): string | null {
  return readStorage(LAST_EMAIL_STORAGE_KEY);
}

export function savePendingCheckout(pending: PendingCheckout): void {
  writeStorage(PENDING_CHECKOUT_STORAGE_KEY, JSON.stringify(pending));
}

export function loadPendingCheckout(): PendingCheckout | null {
  const raw = readStorage(PENDING_CHECKOUT_STORAGE_KEY);
  if (!raw) return null;
  try {
    const parsed = JSON.parse(raw) as Partial<PendingCheckout>;
    if (typeof parsed.pendingId === 'string' && typeof parsed.planId === 'number') {
      return parsed as PendingCheckout;
    }
  } catch {
    // corrupted value - treat as absent
  }
  return null;
}

export function clearPendingCheckout(): void {
  clearStorage(PENDING_CHECKOUT_STORAGE_KEY);
}

function authHeader(auth: BaseAuth): Record<string, string> {
  return auth.type === 'apiKey' ? { 'X-API-Key': auth.token } : { Authorization: `Bearer ${auth.token}` };
}

async function readErrorMessage(res: Response): Promise<string> {
  try {
    const body = await res.json();
    if (body && typeof body.message === 'string') return body.message;
    if (body && typeof body.error === 'string') return body.error;
  } catch {
    // not JSON, or empty body
  }
  return `${res.status} ${res.statusText}`;
}

/** Starts a magic-link login for `email` - uses the widget's existing
 * tenant-level auth (apiKey or getToken bearer), since the visitor has no
 * identity of their own yet. Throws with a user-presentable message on
 * failure (e.g. the 60s resend cooldown's 409). */
export async function startEndUserLogin(baseUrl: string, auth: BaseAuth, email: string): Promise<string> {
  const res = await fetch(`${baseUrl}/api/chat/end_user/start_login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...authHeader(auth) },
    body: JSON.stringify({ email }),
  });
  if (!res.ok) {
    throw new Error(await readErrorMessage(res));
  }
  const data = (await res.json()) as { pending_id: string };
  return data.pending_id;
}

/** Resolves once `pendingId` completes (magic-link click, or a checkout) or
 * times out - the backend sends exactly one event then closes the stream. */
export function waitForEndUserAction(baseUrl: string, pendingId: string): Promise<EndUserWaitOutcome> {
  return new Promise((resolve) => {
    const source = new EventSource(`${baseUrl}/api/chat/end_user/wait/${encodeURIComponent(pendingId)}`);
    let settled = false;
    const finish = (outcome: EndUserWaitOutcome) => {
      if (settled) return;
      settled = true;
      source.close();
      resolve(outcome);
    };
    source.onmessage = (event) => {
      try {
        finish(JSON.parse(event.data) as EndUserWaitOutcome);
      } catch {
        finish({ status: 'error' });
      }
    };
    source.onerror = () => {
      // A dropped connection isn't itself a timeout or a failure - the
      // action may already be durably resolved server-side. Treat it the
      // same as a timeout: the caller can re-open `wait` with the same
      // pending_id later (it checks the durable row first) rather than
      // getting stuck with no signal at all.
      finish({ status: 'timed_out' });
    };
  });
}

export async function fetchEndUserPlans(baseUrl: string, auth: BaseAuth): Promise<EndUserPlanInfo[]> {
  const res = await fetch(`${baseUrl}/api/chat/end_user/plans`, {
    headers: authHeader(auth),
  });
  if (!res.ok) {
    throw new Error(await readErrorMessage(res));
  }
  const data = (await res.json()) as { plans: EndUserPlanInfo[] };
  return data.plans;
}

export async function fetchEndUserStatus(baseUrl: string, endUserToken: string): Promise<EndUserStatus> {
  const res = await fetch(`${baseUrl}/api/chat/end_user/me`, {
    headers: { Authorization: `Bearer ${endUserToken}` },
  });
  if (!res.ok) {
    throw new Error(await readErrorMessage(res));
  }
  return (await res.json()) as EndUserStatus;
}

export async function startEndUserCheckout(
  baseUrl: string,
  endUserToken: string,
  planId: number,
  successUrl: string,
  cancelUrl: string,
): Promise<{ checkoutUrl: string; pendingId: string }> {
  const res = await fetch(`${baseUrl}/api/chat/end_user/checkout`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${endUserToken}` },
    body: JSON.stringify({ plan_id: planId, success_url: successUrl, cancel_url: cancelUrl }),
  });
  if (!res.ok) {
    throw new Error(await readErrorMessage(res));
  }
  const data = (await res.json()) as { checkout_url: string; pending_id: string };
  return { checkoutUrl: data.checkout_url, pendingId: data.pending_id };
}
