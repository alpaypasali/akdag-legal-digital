export const site = {
  name: "Akdağ Hukuk ve Danışmanlık",
  shortName: "Akdağ Hukuk",
  lawyer: "Av. Kutay Onat Akdağ",
  region: "Bursa",
  district: "Osmangazi",
  tagline: "Bursa'da Avukatlık ve Hukuki Danışmanlık",
  description:
    "Akdağ Hukuk ve Danışmanlık, bireyler ve kurumların hukuki süreçlerini anlaşılır, düzenli ve şeffaf bir yaklaşımla takip eder.",
  /**
   * TODO: Aşağıdaki iletişim bilgileri yer tutucudur.
   * Gerçek bilgiler paylaşıldığında güncellenmeli; yapılandırılmış veri de
   * yalnızca sayfada görünen bu bilgileri kullanır.
   */
  contact: {
    addressLine: "Adres bilgisi güncellenecektir",
    district: "Osmangazi",
    city: "Bursa",
    phoneLabel: "Telefon bilgisi güncellenecektir",
    phoneHref: "",
    email: "info@akdaghukuk.com.tr",
    hours: "Pazartesi – Cuma · 09:00 – 18:00",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Osmangazi+Bursa",
  },
  legalNotice:
    "Bu internet sitesindeki içerikler yalnızca genel bilgilendirme amacı taşır; hukuki görüş veya tavsiye niteliğinde değildir. Her uyuşmazlık kendi koşulları içinde değerlendirilir.",
  formNotice:
    "Bu form üzerinden gönderilen bilgiler, avukat-müvekkil ilişkisi kurulduğu veya hukuki danışmanlık verildiği anlamına gelmez.",
} as const;

export const mainNav = [
  { label: "Ana Sayfa", to: "/" },
  { label: "Hakkımızda", to: "/hakkimizda" },
  { label: "Çalışma Alanları", to: "/calisma-alanlari" },
  { label: "Makaleler", to: "/makaleler" },
  { label: "İletişim", to: "/iletisim" },
] as const;
