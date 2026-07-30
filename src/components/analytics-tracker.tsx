import { useEffect } from "react";
import { useRouterState } from "@tanstack/react-router";
import { loadAnalytics, resetOnceScope, setMeasurementId, trackEvent } from "@/lib/analytics";
import { CONSENT_EVENT } from "@/lib/consent";

function pageTypeOf(pathname: string): { page_type: string; page_slug: string } {
  const parts = pathname.split("/").filter(Boolean);
  if (parts.length === 0) return { page_type: "home", page_slug: "/" };
  const [first, ...rest] = parts;
  const slug = rest.at(-1) ?? first;
  if (first === "calisma-alanlari")
    return { page_type: rest.length ? "service_detail" : "service_list", page_slug: slug };
  if (first === "makaleler")
    return {
      page_type: rest.length
        ? rest[0] === "kategori"
          ? "article_category"
          : "article_detail"
        : "article_list",
      page_slug: slug,
    };
  return { page_type: first, page_slug: slug };
}

/**
 * Anonim sayfa görüntüleme ve kaydırma derinliği ölçümü.
 * Hiçbir kişisel veri veya URL parametresi gönderilmez.
 */
export function AnalyticsTracker({ measurementId }: { measurementId?: string }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  // Ölçüm kimliği yönetim panelindeki ayardan gelir; boşsa hiçbir kod yüklenmez.
  useEffect(() => {
    if (!measurementId) return;
    setMeasurementId(measurementId);
    loadAnalytics();
  }, [measurementId]);

  useEffect(() => {
    if (pathname.startsWith("/admin")) return;
    resetOnceScope();

    const meta = pageTypeOf(pathname);
    const page_title = document.title;

    trackEvent("page_view", { ...meta, page_title }, { once: `pv:${pathname}` });

    if (meta.page_type === "service_detail") {
      trackEvent("view_service", { ...meta, service_slug: meta.page_slug, page_title }, {
        once: `svc:${pathname}`,
      });
    }
    if (meta.page_type === "article_detail") {
      trackEvent("view_article", { ...meta, article_slug: meta.page_slug, page_title }, {
        once: `art:${pathname}`,
      });
    }

    const onScroll = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      if (max <= 0) return;
      const pct = (window.scrollY / max) * 100;
      if (pct >= 50)
        trackEvent("scroll_50", meta, { once: `s50:${pathname}` });
      if (pct >= 90)
        trackEvent("scroll_90", meta, { once: `s90:${pathname}` });
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    const onConsent = () => onScroll();
    window.addEventListener(CONSENT_EVENT, onConsent);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener(CONSENT_EVENT, onConsent);
    };
  }, [pathname]);

  return null;
}
