/**
 * Eski adreslerden yeni adreslere kalıcı (301) yönlendirme haritası.
 * Yönetim panelindeki "Yönlendirmeler" kontrol sayfası bu listeyi test eder.
 */
export type RedirectRule = {
  from: string;
  to: string;
  note?: string;
};

export const redirectRules: RedirectRule[] = [
  { from: "/gurbetci-hub", to: "/bursa-gurbetci-hukuk", note: "Eski gurbetçi hub adresi" },
  { from: "/gurbetci-hukuk", to: "/bursa-gurbetci-hukuk", note: "Eski gurbetçi sayfası" },
  { from: "/yurtdisi-hukuk", to: "/bursa-gurbetci-hukuk", note: "Eski yurt dışı sayfası" },
  { from: "/blog", to: "/makaleler", note: "Blog listesi" },
  {
    from: "/blog/bursa-gurbetci-hukuk-rehberi",
    to: "/makaleler/bursa-gurbetci-hukuk-rehberi",
    note: "Blog makalesi",
  },
  {
    from: "/blog/bursa-aile-hukuku-avukati",
    to: "/makaleler/bursa-aile-hukuku-avukati",
    note: "Blog makalesi",
  },
  {
    from: "/blog/bursa-anlasmali-cekismeli-bosanma-davasi",
    to: "/makaleler/bursa-anlasmali-cekismeli-bosanma-davasi",
    note: "Blog makalesi",
  },
  {
    from: "/blog/bursa-ceza-avukati-sorusturma-kovusturma",
    to: "/makaleler/bursa-ceza-avukati-sorusturma-kovusturma",
    note: "Blog makalesi",
  },
];
