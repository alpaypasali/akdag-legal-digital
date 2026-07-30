import { useEffect, useState } from "react";
import {
  CONSENT_EVENT,
  CONSENT_OPEN_EVENT,
  readConsent,
  writeConsent,
  type ConsentState,
} from "@/lib/consent";
import { disableAnalytics, loadAnalytics } from "@/lib/analytics";
import { Link } from "@tanstack/react-router";

/**
 * Çerez tercih bileşeni.
 * Kategoriler: gerekli (zorunlu), analitik, tercih. Reklam kategorisi yoktur.
 */
export function CookieConsent() {
  const [state, setState] = useState<ConsentState | null>(null);
  const [open, setOpen] = useState(false);
  const [panel, setPanel] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [preferences, setPreferences] = useState(false);

  useEffect(() => {
    const stored = readConsent();
    setState(stored);
    if (stored) {
      setAnalytics(stored.analytics);
      setPreferences(stored.preferences);
      if (stored.analytics) loadAnalytics();
    } else {
      setOpen(true);
    }

    const onOpen = () => {
      const current = readConsent();
      setAnalytics(current?.analytics ?? false);
      setPreferences(current?.preferences ?? false);
      setPanel(true);
      setOpen(true);
    };
    window.addEventListener(CONSENT_OPEN_EVENT, onOpen);
    return () => window.removeEventListener(CONSENT_OPEN_EVENT, onOpen);
  }, []);

  const save = (next: { analytics: boolean; preferences: boolean }) => {
    const saved = writeConsent(next);
    setState(saved);
    setOpen(false);
    setPanel(false);
    if (saved.analytics) loadAnalytics();
    else disableAnalytics();
    window.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: saved }));
  };

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-labelledby="cerez-baslik"
      className="fixed inset-x-0 bottom-0 z-[70] border-t border-hairline-invert bg-ink text-ink-foreground print:hidden"
    >
      <div className="container-editorial py-6">
        <h2 id="cerez-baslik" className="font-serif text-lg">
          Çerez tercihleri
        </h2>
        <p className="measure mt-2 text-sm text-ink-foreground/75">
          Sitenin çalışması için gerekli çerezler her zaman kullanılır. Anonim
          kullanım ölçümü ve tercih çerezleri yalnızca izin verdiğinizde
          çalışır. Ayrıntılar için{" "}
          <Link to="/cerez-politikasi" className="underline hover:text-gold">
            Çerez Politikası
          </Link>
          .
        </p>

        {panel ? (
          <ul className="mt-5 space-y-3 text-sm">
            <li className="flex items-start gap-3">
              <input
                id="cerez-gerekli"
                type="checkbox"
                checked
                disabled
                className="mt-1 size-4"
              />
              <label htmlFor="cerez-gerekli">
                <span className="font-medium">Gerekli çerezler</span>
                <span className="block text-ink-foreground/65">
                  Güvenlik ve temel site işlevleri için zorunludur.
                </span>
              </label>
            </li>
            <li className="flex items-start gap-3">
              <input
                id="cerez-analitik"
                type="checkbox"
                checked={analytics}
                onChange={(e) => setAnalytics(e.target.checked)}
                className="mt-1 size-4"
              />
              <label htmlFor="cerez-analitik">
                <span className="font-medium">Analitik çerezler</span>
                <span className="block text-ink-foreground/65">
                  Kişisel veri içermeyen anonim sayfa kullanım ölçümü.
                </span>
              </label>
            </li>
            <li className="flex items-start gap-3">
              <input
                id="cerez-tercih"
                type="checkbox"
                checked={preferences}
                onChange={(e) => setPreferences(e.target.checked)}
                className="mt-1 size-4"
              />
              <label htmlFor="cerez-tercih">
                <span className="font-medium">Tercih çerezleri</span>
                <span className="block text-ink-foreground/65">
                  Görünüm ve dil gibi tercihlerin hatırlanması.
                </span>
              </label>
            </li>
          </ul>
        ) : null}

        <div className="mt-6 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() =>
              save(
                panel
                  ? { analytics, preferences }
                  : { analytics: true, preferences: true },
              )
            }
            className="inline-flex min-h-11 items-center bg-gold px-5 text-sm font-medium text-ink"
          >
            {panel ? "Seçimi kaydet" : "Tümünü kabul et"}
          </button>
          <button
            type="button"
            onClick={() => save({ analytics: false, preferences: false })}
            className="inline-flex min-h-11 items-center border border-hairline-invert px-5 text-sm"
          >
            Yalnızca gerekli
          </button>
          {panel ? null : (
            <button
              type="button"
              onClick={() => setPanel(true)}
              className="inline-flex min-h-11 items-center px-3 text-sm underline hover:text-gold"
            >
              Tercihleri özelleştir
            </button>
          )}
          {state ? (
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="inline-flex min-h-11 items-center px-3 text-sm underline hover:text-gold"
            >
              Kapat
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
}
