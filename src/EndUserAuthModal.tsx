import { useEffect, useState } from 'preact/hooks';
import {
  BaseAuth,
  EndUserAuth,
  EndUserPlanInfo,
  EndUserStatus,
  fetchEndUserPlans,
  fetchEndUserStatus,
  savePendingCheckout,
  startEndUserCheckout,
  startEndUserLogin,
  waitForEndUserAction,
} from './endUserAuth';

const RESEND_COOLDOWN_MS = 60 * 1000;

type View = 'email' | 'waiting' | 'plans' | 'status';

interface EndUserAuthModalProps {
  open: boolean;
  onClose: () => void;
  darkMode?: boolean;
  baseUrl: string;
  /** The widget's existing tenant-level auth (apiKey or getToken bearer) -
   * needed to start a login for a visitor who has no identity of their own yet. */
  getBaseAuth: () => Promise<BaseAuth>;
  endUserAuth: EndUserAuth | null;
  onAuthenticated: (auth: EndUserAuth) => void;
  /** Prefills the email step for a visitor who has logged in before on this
   * browser but whose token has since expired/been cleared. */
  initialEmail?: string;
}

function formatPrice(cents: number, currency: string): string {
  try {
    return new Intl.NumberFormat(undefined, { style: 'currency', currency: currency.toUpperCase() }).format(cents / 100);
  } catch {
    return `${(cents / 100).toFixed(2)} ${currency.toUpperCase()}`;
  }
}

function formatRenewal(unixSeconds: number): string {
  return new Date(unixSeconds * 1000).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' });
}

export const EndUserAuthModal = ({ open, onClose, darkMode, baseUrl, getBaseAuth, endUserAuth, onAuthenticated, initialEmail }: EndUserAuthModalProps) => {
  const [view, setView] = useState<View>('email');
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [cooldownUntil, setCooldownUntil] = useState(0);
  const [status, setStatus] = useState<EndUserStatus | null>(null);
  const [plans, setPlans] = useState<EndUserPlanInfo[]>([]);
  const [buyingPlanId, setBuyingPlanId] = useState<number | null>(null);
  const [now, setNow] = useState(Date.now());

  // Re-initialize whenever the modal opens - authenticated visitors land on
  // their status, everyone else starts at the email step.
  useEffect(() => {
    if (!open) return;
    setErrorMessage(null);
    if (endUserAuth) {
      setEmail(endUserAuth.email);
      setView('status');
      fetchEndUserStatus(baseUrl, endUserAuth.token)
        .then(setStatus)
        .catch((e) => setErrorMessage(e instanceof Error ? e.message : String(e)));
    } else {
      setEmail(initialEmail ?? '');
      setView('email');
    }
  }, [open]);

  // Drives the resend-cooldown countdown display.
  useEffect(() => {
    if (cooldownUntil <= Date.now()) return;
    const interval = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(interval);
  }, [cooldownUntil]);

  if (!open) return null;

  const cooldownRemainingSecs = Math.max(0, Math.ceil((cooldownUntil - now) / 1000));

  const runLogin = async () => {
    const trimmed = email.trim();
    if (!trimmed || !trimmed.includes('@')) {
      setErrorMessage('Enter a valid email address.');
      return;
    }
    setErrorMessage(null);
    setView('waiting');
    try {
      const baseAuth = await getBaseAuth();
      const pendingId = await startEndUserLogin(baseUrl, baseAuth, trimmed);
      setCooldownUntil(Date.now() + RESEND_COOLDOWN_MS);
      const outcome = await waitForEndUserAction(baseUrl, pendingId);
      if (outcome.status === 'verified') {
        const auth: EndUserAuth = { token: outcome.chat_token, expiresAt: outcome.expires_at, email: trimmed };
        onAuthenticated(auth);
        try {
          const freshStatus = await fetchEndUserStatus(baseUrl, auth.token);
          setStatus(freshStatus);
          const hasAccess = freshStatus.total_vtokens_remaining > 0 || freshStatus.subscription_status === 'active';
          if (hasAccess) {
            setView('status');
          } else {
            const availablePlans = await fetchEndUserPlans(baseUrl, { token: auth.token, type: 'bearer' });
            setPlans(availablePlans);
            setView('plans');
          }
        } catch {
          // Logged in either way - a status/plans hiccup shouldn't strand
          // the visitor on the waiting screen.
          setView('status');
        }
      } else if (outcome.status === 'timed_out') {
        setErrorMessage("That link expired before it was clicked. You can send a new one below.");
        setView('email');
      } else {
        setErrorMessage('Something went wrong confirming your login. Please try again.');
        setView('email');
      }
    } catch (e) {
      setErrorMessage(e instanceof Error ? e.message : String(e));
      setView('email');
    }
  };

  const switchToPlans = async () => {
    if (!endUserAuth) return;
    setErrorMessage(null);
    try {
      const availablePlans = await fetchEndUserPlans(baseUrl, { token: endUserAuth.token, type: 'bearer' });
      setPlans(availablePlans);
      setView('plans');
    } catch (e) {
      setErrorMessage(e instanceof Error ? e.message : String(e));
    }
  };

  const buyPlan = async (plan: EndUserPlanInfo) => {
    if (!endUserAuth) return;
    setErrorMessage(null);
    setBuyingPlanId(plan.id);
    try {
      const currentUrl = window.location.href;
      const { checkoutUrl, pendingId } = await startEndUserCheckout(baseUrl, endUserAuth.token, plan.id, currentUrl, currentUrl);
      savePendingCheckout({ pendingId, planId: plan.id });
      window.location.href = checkoutUrl;
    } catch (e) {
      setErrorMessage(e instanceof Error ? e.message : String(e));
      setBuyingPlanId(null);
    }
  };

  const textClass = darkMode ? 'cvz-text-gray-100' : 'cvz-text-gray-800';
  const subTextClass = darkMode ? 'cvz-text-gray-400' : 'cvz-text-gray-500';
  const panelClass = darkMode ? 'cvz-bg-gray-800' : 'cvz-bg-white';
  const inputClass = darkMode
    ? 'cvz-bg-gray-700 cvz-border-gray-600 cvz-text-gray-100'
    : 'cvz-bg-white cvz-border-gray-300 cvz-text-gray-800';
  const primaryButtonClass = 'cvz-bg-blue-600 hover:cvz-bg-blue-700 cvz-text-white disabled:cvz-opacity-50 disabled:cvz-cursor-not-allowed';

  return (
    <div className="cvz-absolute cvz-inset-0 cvz-z-20 cvz-flex cvz-flex-col">
      <div className={`cvz-flex-1 cvz-overflow-y-auto cvz-p-5 cvz-flex cvz-flex-col cvz-gap-4 ${panelClass}`}>
        <div className="cvz-flex cvz-justify-between cvz-items-start">
          <h3 className={`cvz-font-bold cvz-text-lg ${textClass}`}>Account</h3>
          <button
            onClick={onClose}
            className={`cvz-p-1 cvz-rounded-md ${darkMode ? 'cvz-text-gray-400 hover:cvz-text-white' : 'cvz-text-gray-400 hover:cvz-text-gray-700'}`}
            title="Close"
          >
            ✕
          </button>
        </div>

        {errorMessage && (
          <p className="cvz-text-sm cvz-text-red-500">{errorMessage}</p>
        )}

        {view === 'email' && (
          <div className="cvz-flex cvz-flex-col cvz-gap-3">
            <p className={`cvz-text-sm ${subTextClass}`}>
              Enter your email and we'll send you a login link - use it to access a plan you've already
              bought, or to start a new one.
            </p>
            <input
              type="email"
              value={email}
              onInput={(e) => setEmail((e.target as HTMLInputElement).value)}
              placeholder="you@example.com"
              className={`cvz-border cvz-rounded-lg cvz-px-3 cvz-py-2 cvz-text-sm ${inputClass}`}
              onKeyDown={(e) => {
                if (e.key === 'Enter') runLogin();
              }}
            />
            <button
              onClick={runLogin}
              disabled={cooldownRemainingSecs > 0}
              className={`cvz-rounded-lg cvz-px-3 cvz-py-2 cvz-text-sm cvz-font-medium ${primaryButtonClass}`}
            >
              {cooldownRemainingSecs > 0 ? `Wait ${cooldownRemainingSecs}s to resend` : 'Send login link'}
            </button>
          </div>
        )}

        {view === 'waiting' && (
          <div className="cvz-flex cvz-flex-col cvz-gap-2 cvz-items-center cvz-py-6 cvz-text-center">
            <p className={`cvz-text-sm ${textClass}`}>Check your email</p>
            <p className={`cvz-text-xs ${subTextClass}`}>
              We sent a login link to {email}. Click it to continue - this can stay open while you do.
            </p>
          </div>
        )}

        {view === 'status' && (
          <div className="cvz-flex cvz-flex-col cvz-gap-3">
            <p className={`cvz-text-sm ${textClass}`}>Signed in as {endUserAuth?.email}</p>
            {status ? (
              <div className={`cvz-rounded-lg cvz-border cvz-p-3 cvz-text-sm cvz-flex cvz-flex-col cvz-gap-1 ${darkMode ? 'cvz-border-gray-600' : 'cvz-border-gray-200'} ${textClass}`}>
                <span>{Math.floor(status.total_vtokens_remaining).toLocaleString()} tokens left</span>
                {status.plan_name && <span className={subTextClass}>Plan: {status.plan_name}</span>}
                {status.current_period_end && (
                  <span className={subTextClass}>Renews {formatRenewal(status.current_period_end)}</span>
                )}
              </div>
            ) : (
              <p className={`cvz-text-sm ${subTextClass}`}>Loading your balance...</p>
            )}
            <button
              onClick={switchToPlans}
              className={`cvz-rounded-lg cvz-px-3 cvz-py-2 cvz-text-sm cvz-font-medium ${primaryButtonClass}`}
            >
              Buy more
            </button>
            <button
              onClick={() => {
                setView('email');
                setErrorMessage(null);
              }}
              className={`cvz-text-xs cvz-underline cvz-self-start ${subTextClass}`}
            >
              Use a different email
            </button>
          </div>
        )}

        {view === 'plans' && (
          <div className="cvz-flex cvz-flex-col cvz-gap-3">
            {plans.length === 0 && <p className={`cvz-text-sm ${subTextClass}`}>No plans are available right now.</p>}
            {plans.map((plan) => (
              <div
                key={plan.id}
                className={`cvz-rounded-lg cvz-border cvz-p-3 cvz-flex cvz-justify-between cvz-items-center ${darkMode ? 'cvz-border-gray-600' : 'cvz-border-gray-200'}`}
              >
                <div>
                  <p className={`cvz-text-sm cvz-font-medium ${textClass}`}>{plan.name}</p>
                  <p className={`cvz-text-xs ${subTextClass}`}>
                    {formatPrice(plan.price_cents, plan.currency)}
                    {plan.kind === 'subscription' ? ' / period' : ''} · {plan.included_vtokens.toLocaleString()} tokens
                  </p>
                </div>
                <button
                  onClick={() => buyPlan(plan)}
                  disabled={buyingPlanId === plan.id}
                  className={`cvz-rounded-lg cvz-px-3 cvz-py-1.5 cvz-text-sm cvz-font-medium ${primaryButtonClass}`}
                >
                  {buyingPlanId === plan.id ? 'Redirecting...' : 'Buy'}
                </button>
              </div>
            ))}
            {endUserAuth && (
              <button
                onClick={() => setView('status')}
                className={`cvz-text-xs cvz-underline cvz-self-start ${subTextClass}`}
              >
                Back
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
