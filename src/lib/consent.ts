/**
 * Çerez izni yönetimi.
 *
 * Yalnızca üç kategori vardır: gerekli, analitik, tercih.
 * Reklam / hedefleme / yeniden pazarlama kategorisi bilinçli olarak yoktur.
 */

export type ConsentCategory = "necessary" | "analytics" | "preferences";

export interface ConsentState {
  necessary: true;
  analytics: boolean;
  preferences: boolean;
  /** ISO tarih; izin kaydının verildiği an */
  updatedAt: string;
  version: number;
}

export const CONSENT_VERSION = 1;
const STORAGE_KEY = "akdag_cookie_consent";
/** İzin kaydı 180 gün sonra geçersiz sayılır ve tekrar sorulur. */
const MAX_AGE_MS = 180 * 24 * 60 * 60 * 1000;

export const CONSENT_EVENT = "akdag:consent-change";
export const CONSENT_OPEN_EVENT = "akdag:consent-open";

export const defaultConsent: ConsentState = {
  necessary: true,
  analytics: false,
  preferences: false,
  updatedAt: "",
  version: CONSENT_VERSION,
};

export function readConsent(): ConsentState | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Partial<ConsentState>;
    if (parsed.version !== CONSENT_VERSION || !parsed.updatedAt) return null;
    if (Date.now() - Date.parse(parsed.updatedAt) > MAX_AGE_MS) return null;
    return {
      necessary: true,
      analytics: Boolean(parsed.analytics),
      preferences: Boolean(parsed.preferences),
      updatedAt: parsed.updatedAt,
      version: CONSENT_VERSION,
    };
  } catch {
    return null;
  }
}

export function writeConsent(input: {
  analytics: boolean;
  preferences: boolean;
}): ConsentState {
  const next: ConsentState = {
    necessary: true,
    analytics: input.analytics,
    preferences: input.preferences,
    updatedAt: new Date().toISOString(),
    version: CONSENT_VERSION,
  };
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  } catch {
    /* depolama kapalıysa yalnızca oturum içinde geçerli olur */
  }
  window.dispatchEvent(new CustomEvent<ConsentState>(CONSENT_EVENT, { detail: next }));
  return next;
}

export function openConsentPreferences() {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new Event(CONSENT_OPEN_EVENT));
}

export function hasAnalyticsConsent(): boolean {
  return readConsent()?.analytics === true;
}
