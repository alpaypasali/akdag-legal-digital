/**
 * Merkezi site adresi. Yönetim panelindeki "Alan adı" ekranından bir adres
 * kaydedildiğinde bu değer çalışma anında otomatik olarak güncellenir
 * (canonical, og:url ve sitemap adresleri buradan üretilir).
 */
export const siteUrl = "https://akdag-legal-digital.lovable.app";

let siteUrlOverride: string | null = null;

/** Panelden gelen alan adını normalize eder (sondaki eğik çizgi kaldırılır). */
export function normalizeSiteUrl(value: string | undefined | null): string | null {
  const trimmed = (value ?? "").trim();
  if (!trimmed) return null;
  const withProtocol = /^https?:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`;
  try {
    const url = new URL(withProtocol);
    return `${url.protocol}//${url.host}`;
  } catch {
    return null;
  }
}

/** Panelden okunan alan adını uygulama genelinde etkinleştirir. */
export function setSiteUrlOverride(value: string | undefined | null) {
  siteUrlOverride = normalizeSiteUrl(value);
}

/** Yürürlükteki site adresi (panel ayarı varsa o, yoksa varsayılan). */
export function getSiteUrl() {
  return siteUrlOverride ?? siteUrl;
}

/** Göreli yolu yürürlükteki site adresiyle mutlak URL'ye çevirir. */
export function absoluteUrl(path: string) {
  const base = getSiteUrl().replace(/\/$/, "");
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}


export const site = {
  name: "Akdağ Hukuk ve Danışmanlık",
  shortName: "Akdağ Hukuk",
  lawyer: "Av. Kutay Onat Akdağ",
  region: "Bursa",
  district: "Osmangazi",
  tagline: "Bursa'da Avukatlık ve Hukuki Danışmanlık",
  description:
    "Akdağ Hukuk ve Danışmanlık, bireyler ve kurumların hukuki süreçlerini anlaşılır, düzenli ve şeffaf bir yaklaşımla takip eder.",
  contact: {
    addressLine:
      "Hacı İlyas Mh. Kıbrıs Şehitleri Cd. 1. Han Sk. Avukatlar İşhanı K:2 D:17/B",
    postalCode: "16120",
    district: "Osmangazi",
    city: "Bursa",
    phoneLabel: "0534 898 77 91",
    phoneHref: "+905348987791",
    whatsapp: "905348987791",
    email: "info@akdaghukuk.com.tr",
    hours: "Pazartesi – Cuma · 09:00 – 18:00",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Hac%C4%B1+%C4%B0lyas+Mh.+K%C4%B1br%C4%B1s+%C5%9Eehitleri+Cd.+Avukatlar+%C4%B0%C5%9Fhan%C4%B1+Osmangazi+Bursa",
  },
  formNotice:
    "Bu form üzerinden gönderilen bilgiler, avukat-müvekkil ilişkisi kurulduğu veya hukuki danışmanlık verildiği anlamına gelmez.",
} as const;

export const mainNav = [
  { label: "Ana Sayfa", to: "/" },
  { label: "Hakkımızda", to: "/hakkimizda" },
  { label: "Çalışma Alanları", to: "/calisma-alanlari" },
  { label: "Bursa Gurbetçi Hukuk", to: "/bursa-gurbetci-hukuk" },
  { label: "Makaleler", to: "/makaleler" },
  { label: "İletişim", to: "/iletisim" },
] as const;
