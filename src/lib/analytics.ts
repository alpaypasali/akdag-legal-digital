/**
 * Anonim Google Analytics 4 ölçümü.
 *
 * Kurallar:
 * - Etiket yalnızca kullanıcı analitik çerezlere izin verdikten sonra yüklenir.
 * - Reklam özellikleri (Google Signals, reklam kişiselleştirme, yeniden
 *   pazarlama, reklam kitleleri, demografi raporları) kapalıdır.
 * - Aynı GA4 etiketi hiçbir koşulda ikinci kez yüklenmez.
 * - Etkinliklerde yalnızca aşağıdaki anonim parametreler gönderilir.
 * - Kişisel veri (ad, telefon, e-posta, form içeriği, dosya bilgisi vb.)
 *   hiçbir şekilde gönderilmez.
 */

import { hasAnalyticsConsent } from "./consent";

export const GA_MEASUREMENT_ID: string =
  (import.meta.env.VITE_GA4_MEASUREMENT_ID as string | undefined) ?? "";

export type AnalyticsEventName =
  | "page_view"
  | "view_service"
  | "view_article"
  | "scroll_50"
  | "scroll_90"
  | "click_phone"
  | "click_email"
  | "click_map"
  | "click_appointment"
  | "form_start"
  | "form_submit_success"
  | "form_submit_error"
  | "file_download"
  | "internal_search";

export interface AnalyticsParams {
  page_type?: string;
  page_slug?: string;
  page_title?: string;
  service_slug?: string;
  article_slug?: string;
  article_category?: string;
  button_location?: string;
  form_name?: string;
  form_status?: "success" | "error";
  device_type?: "mobile" | "tablet" | "desktop";
}

const ALLOWED_PARAMS: (keyof AnalyticsParams)[] = [
  "page_type",
  "page_slug",
  "page_title",
  "service_slug",
  "article_slug",
  "article_category",
  "button_location",
  "form_name",
  "form_status",
  "device_type",
];

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

let loaded = false;
/** Aynı etkinliğin tek kullanıcı hareketinde tekrar gönderilmesini engeller. */
const sentOnce = new Set<string>();

function gtag(...args: unknown[]) {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(args);
}

function deviceType(): NonNullable<AnalyticsParams["device_type"]> {
  const w = window.innerWidth;
  if (w < 640) return "mobile";
  if (w < 1024) return "tablet";
  return "desktop";
}

/** GA4 etiketini yükler (yalnızca izin verildiyse ve yalnızca bir kez). */
export function loadAnalytics() {
  if (typeof window === "undefined") return;
  if (loaded || !GA_MEASUREMENT_ID || !hasAnalyticsConsent()) return;
  if (document.querySelector('script[data-ga4="1"]')) {
    loaded = true;
    return;
  }
  loaded = true;

  const s = document.createElement("script");
  s.async = true;
  s.dataset.ga4 = "1";
  s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(s);

  window.gtag = gtag;
  gtag("js", new Date());
  // Reklam depolamaları kalıcı olarak reddedilir.
  gtag("consent", "default", {
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
    analytics_storage: "granted",
  });
  gtag("config", GA_MEASUREMENT_ID, {
    anonymize_ip: true,
    allow_google_signals: false,
    allow_ad_personalization_signals: false,
    // Sayfa görüntülemeleri uygulama yönlendirmesiyle elle gönderilir.
    send_page_view: false,
  });
}

/** İzin geri alındığında ölçümü durdurur. */
export function disableAnalytics() {
  if (typeof window === "undefined" || !GA_MEASUREMENT_ID) return;
  (window as unknown as Record<string, boolean>)[
    `ga-disable-${GA_MEASUREMENT_ID}`
  ] = true;
  sentOnce.clear();
}

function sanitize(params: AnalyticsParams): Record<string, string> {
  const out: Record<string, string> = {};
  for (const key of ALLOWED_PARAMS) {
    const value = params[key];
    if (typeof value === "string" && value.trim()) {
      out[key] = value.slice(0, 100);
    }
  }
  return out;
}

/**
 * Anonim etkinlik gönderir.
 * `once` verildiğinde aynı anahtar için yalnızca bir kez gönderim yapılır.
 */
export function trackEvent(
  name: AnalyticsEventName,
  params: AnalyticsParams = {},
  options?: { once?: string },
) {
  if (typeof window === "undefined") return;
  if (!GA_MEASUREMENT_ID || !hasAnalyticsConsent()) return;

  const key = options?.once ?? null;
  if (key) {
    if (sentOnce.has(key)) return;
    sentOnce.add(key);
  }

  loadAnalytics();
  gtag("event", name, { ...sanitize(params), device_type: deviceType() });
}

/** Yeni sayfaya geçildiğinde tekrar gönderilebilir etkinlikleri sıfırlar. */
export function resetOnceScope() {
  sentOnce.clear();
}
