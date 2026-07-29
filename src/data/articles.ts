export interface ArticleCategory {
  slug: string;
  title: string;
  description: string;
}

export interface ArticleSection {
  id: string;
  heading: string;
  level: 2 | 3;
  paragraphs: string[];
  list?: string[];
}

export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  categorySlug: string;
  author: string;
  publishedAt: string;
  updatedAt?: string;
  readingMinutes: number;
  relatedAreaSlug: string;
  sections: ArticleSection[];
  sources: string[];
  metaTitle: string;
  metaDescription: string;
  noindex?: boolean;
  status: "published" | "draft";
}

export const articleCategories: ArticleCategory[] = [
  {
    slug: "aile-hukuku",
    title: "Aile Hukuku",
    description:
      "Boşanma, velayet, nafaka ve mal rejimi süreçlerine ilişkin genel bilgilendirme yazıları.",
  },
  {
    slug: "is-hukuku",
    title: "İş Hukuku",
    description:
      "Fesih, işçilik alacakları, arabuluculuk ve iş kazası süreçlerine ilişkin yazılar.",
  },
  {
    slug: "kira-hukuku",
    title: "Kira Hukuku",
    description:
      "Kira bedelinin tespiti, tahliye ve kiracı-kiraya veren ilişkisine dair yazılar.",
  },
  {
    slug: "ceza-hukuku",
    title: "Ceza Hukuku",
    description:
      "Soruşturma, kovuşturma ve kanun yollarına ilişkin genel bilgilendirme yazıları.",
  },
];

export const articles: Article[] = [
  {
    slug: "anlasmali-bosanmada-protokolun-onemi",
    title: "Anlaşmalı Boşanmada Protokolün Kapsamı Neden Önemlidir?",
    excerpt:
      "Anlaşmalı boşanmada protokol, tarafların tüm sonuçlar üzerinde uzlaştığını gösteren temel belgedir. Eksik düzenlenen protokoller sonradan yeni uyuşmazlıklara yol açabilir.",
    categorySlug: "aile-hukuku",
    author: "Av. Kutay Onat Akdağ",
    publishedAt: "2026-05-12",
    updatedAt: "2026-07-02",
    readingMinutes: 6,
    relatedAreaSlug: "aile-hukuku",
    sections: [
      {
        id: "protokol-nedir",
        heading: "Anlaşmalı boşanma protokolü nedir?",
        level: 2,
        paragraphs: [
          "Anlaşmalı boşanma, evlilik birliğinin taraflarca birlikte sonlandırılmak istendiği ve boşanmanın mali ile kişisel sonuçları üzerinde uzlaşıldığı hâllerde başvurulan yoldur. Protokol, bu uzlaşmanın yazılı hâlidir ve mahkemenin denetimine sunulur.",
          "Mahkeme protokolü olduğu gibi kabul etmek zorunda değildir. Özellikle çocukların menfaatine ilişkin düzenlemelerde re'sen inceleme yapar ve gerekli gördüğü değişikliği taraflara önerebilir.",
        ],
      },
      {
        id: "protokolde-yer-almasi-gerekenler",
        heading: "Protokolde hangi başlıklar yer almalıdır?",
        level: 2,
        paragraphs: [
          "Protokolün, boşanmanın tüm sonuçlarını kapsaması beklenir. Açıkta bırakılan her başlık, ileride ayrı bir dava konusu hâline gelebilir.",
        ],
        list: [
          "Velayet ve kişisel ilişkinin gün, saat ve tatil dönemleri belirtilerek düzenlenmesi",
          "İştirak ve yoksulluk nafakasının miktarı ile artış ölçütü",
          "Maddi ve manevi tazminat taleplerinden feragat edilip edilmediği",
          "Mal rejiminin tasfiyesine ilişkin karşılıklı beyanlar",
          "Ev eşyası ve kişisel eşyaların paylaşımı",
        ],
      },
      {
        id: "sik-yapilan-eksiklikler",
        heading: "Sık karşılaşılan eksiklikler",
        level: 3,
        paragraphs: [
          "Uygulamada en sık görülen eksiklik, kişisel ilişkinin \"uygun zamanlarda\" gibi belirsiz ifadelerle düzenlenmesidir. Bu tür ifadeler, kararın icra edilebilirliğini zayıflatır.",
          "Bir diğer eksiklik, mal rejimi tasfiyesine ilişkin ifadenin protokolde yer almamasıdır. Bu durumda taraflar boşanma kesinleştikten sonra ayrı bir alacak davası açmak durumunda kalabilir.",
        ],
      },
      {
        id: "sonrasinda-degisiklik",
        heading: "Protokol sonradan değiştirilebilir mi?",
        level: 2,
        paragraphs: [
          "Karar kesinleştikten sonra protokolün kendisi değiştirilemez. Ancak nafaka gibi sürekli edim doğuran düzenlemeler, koşulların önemli ölçüde değişmesi hâlinde uyarlama davasına konu edilebilir.",
          "Velayet ve kişisel ilişki düzeni de çocuğun üstün yararı gerektirdiğinde yeniden düzenlenebilir. Bu, protokolün geçersizliği anlamına gelmez; değişen koşullara uyarlanmasıdır.",
        ],
      },
    ],
    sources: [
      "4721 sayılı Türk Medeni Kanunu m. 166/3",
      "4721 sayılı Türk Medeni Kanunu m. 176 ve devamı",
    ],
    metaTitle: "Anlaşmalı Boşanma Protokolü Nasıl Hazırlanır? | Akdağ Hukuk",
    metaDescription:
      "Anlaşmalı boşanma protokolünde yer alması gereken başlıklar, sık yapılan eksiklikler ve protokolün sonradan uyarlanması hakkında genel bilgilendirme.",
    status: "published",
  },
  {
    slug: "is-davalarinda-zorunlu-arabuluculuk",
    title: "İş Davalarında Zorunlu Arabuluculuk: Süreç Nasıl İşler?",
    excerpt:
      "İşçilik alacakları ve işe iade taleplerinde dava açmadan önce arabulucuya başvurmak zorunludur. Bu aşamanın usulüne uygun tamamlanmaması davanın reddine yol açabilir.",
    categorySlug: "is-hukuku",
    author: "Av. Kutay Onat Akdağ",
    publishedAt: "2026-06-03",
    readingMinutes: 5,
    relatedAreaSlug: "is-hukuku",
    sections: [
      {
        id: "kapsam",
        heading: "Hangi taleplerde arabuluculuk zorunludur?",
        level: 2,
        paragraphs: [
          "Bireysel veya toplu iş sözleşmesine dayanan işçi ve işveren alacağı ile tazminatı ve işe iade talepleri bakımından arabulucuya başvuru dava şartıdır. İş kazası veya meslek hastalığından kaynaklanan maddi ve manevi tazminat talepleri ise bu kapsamın dışındadır.",
        ],
      },
      {
        id: "surec",
        heading: "Başvurudan görüşmeye süreç",
        level: 2,
        paragraphs: [
          "Başvuru, karşı tarafın yerleşim yeri veya işin yapıldığı yerdeki arabuluculuk bürosuna yapılır. Büro, listeden bir arabulucu görevlendirir.",
        ],
        list: [
          "Başvurunun yapılması ve arabulucunun görevlendirilmesi",
          "Tarafların davet edilmesi ve ilk görüşmenin planlanması",
          "Görüşmelerde talep kalemlerinin ve hesaplamanın tartışılması",
          "Anlaşma veya anlaşmama tutanağının düzenlenmesi",
        ],
      },
      {
        id: "anlasma-sonucu",
        heading: "Anlaşma tutanağının sonucu",
        level: 3,
        paragraphs: [
          "Taraflar anlaşırsa, üzerinde anlaşılan konularda dava açılamaz. Bu nedenle tutanakta hangi alacak kalemlerinin kapsandığının açıkça yazılması önem taşır.",
          "Anlaşmama hâlinde son tutanağın aslı veya onaylı örneği dava dilekçesine eklenmelidir. Eklenmemesi hâlinde mahkeme bir haftalık kesin süre verir.",
        ],
      },
      {
        id: "sureler",
        heading: "Dikkat edilmesi gereken süreler",
        level: 2,
        paragraphs: [
          "İşe iade talebinde, fesih bildiriminin tebliğinden itibaren bir ay içinde arabulucuya başvurulması gerekir. Anlaşmama tutanağının düzenlendiği tarihten itibaren ise iki hafta içinde dava açılmalıdır.",
          "Bu süreler hak düşürücü niteliktedir ve kaçırılması hâlinde talep esasa girilmeden reddedilebilir.",
        ],
      },
    ],
    sources: [
      "7036 sayılı İş Mahkemeleri Kanunu m. 3",
      "4857 sayılı İş Kanunu m. 20",
    ],
    metaTitle: "İş Davalarında Zorunlu Arabuluculuk Süreci | Akdağ Hukuk",
    metaDescription:
      "İşçilik alacakları ve işe iade taleplerinde zorunlu arabuluculuğun kapsamı, başvuru süreci, tutanağın sonuçları ve dikkat edilmesi gereken süreler.",
    status: "published",
  },
  {
    slug: "kira-bedelinin-tespiti-davasi",
    title: "Kira Bedelinin Tespiti Davası Hangi Durumlarda Açılır?",
    excerpt:
      "Kira bedelinin güncel koşullara uymadığı hâllerde tespit davası gündeme gelir. Davanın zamanı ve hangi dönem için sonuç doğuracağı belirleyicidir.",
    categorySlug: "kira-hukuku",
    author: "Av. Kutay Onat Akdağ",
    publishedAt: "2026-06-24",
    readingMinutes: 5,
    relatedAreaSlug: "gayrimenkul-ve-kira-hukuku",
    sections: [
      {
        id: "dava-nedir",
        heading: "Tespit davasının amacı",
        level: 2,
        paragraphs: [
          "Kira bedelinin tespiti davası, yenilenen kira dönemlerinde uygulanacak bedelin mahkemece belirlenmesini amaçlar. Taraflar arasında bedel konusunda anlaşma sağlanamadığında başvurulur.",
        ],
      },
      {
        id: "bes-yil-kurali",
        heading: "Beş yıllık dönemin etkisi",
        level: 2,
        paragraphs: [
          "Kira ilişkisinin beş yıldan uzun sürmesi hâlinde, bedel; tüketici fiyat endeksindeki değişim, kiralananın durumu ve emsal kira bedelleri gözetilerek hakkaniyete uygun biçimde belirlenir.",
          "Beş yıldan kısa süreli ilişkilerde ise artış oranı sözleşmedeki düzenleme ve kanuni üst sınır çerçevesinde değerlendirilir.",
        ],
      },
      {
        id: "davanin-zamani",
        heading: "Davanın hangi tarihte açılması gerekir?",
        level: 3,
        paragraphs: [
          "Yeni kira döneminin başlangıcından en az otuz gün önce dava açılması veya kiraya verenin bu süre içinde artış iradesini yazılı olarak bildirmesi hâlinde, tespit edilecek bedel yeni dönemin başından itibaren geçerli olur.",
          "Bu koşul sağlanmazsa karar, izleyen kira döneminden itibaren sonuç doğurur.",
        ],
      },
      {
        id: "arabuluculuk",
        heading: "Dava öncesi arabuluculuk",
        level: 2,
        paragraphs: [
          "Kira ilişkisinden kaynaklanan uyuşmazlıklarda, tahliye taleplerinin bir kısmı hariç olmak üzere, dava açılmadan önce arabulucuya başvurulması dava şartıdır.",
        ],
      },
    ],
    sources: [
      "6098 sayılı Türk Borçlar Kanunu m. 344",
      "6325 sayılı Hukuk Uyuşmazlıklarında Arabuluculuk Kanunu m. 18/B",
    ],
    metaTitle: "Kira Bedelinin Tespiti Davası Nasıl Açılır? | Akdağ Hukuk",
    metaDescription:
      "Kira bedelinin tespiti davasının amacı, beş yıllık dönemin etkisi, davanın açılma zamanı ve zorunlu arabuluculuk hakkında genel bilgilendirme.",
    status: "published",
  },
  {
    slug: "sorusturma-asamasinda-ifade",
    title: "Soruşturma Aşamasında İfade: Bilinmesi Gereken Temel Haklar",
    excerpt:
      "İfade ve sorgu, ceza soruşturmasının yönünü belirleyen aşamalardır. Susma hakkı, müdafi yardımı ve tutanağın okunması bu aşamanın temel güvenceleridir.",
    categorySlug: "ceza-hukuku",
    author: "Av. Kutay Onat Akdağ",
    publishedAt: "2026-07-08",
    readingMinutes: 4,
    relatedAreaSlug: "ceza-hukuku",
    sections: [
      {
        id: "ifade-oncesi",
        heading: "İfade öncesinde bildirilmesi gerekenler",
        level: 2,
        paragraphs: [
          "Şüpheliye, isnat edilen suç anlatılır; müdafi seçme hakkı, susma hakkı ve delil toplanmasını isteme hakkı hatırlatılır. Bu hatırlatmanın yapılmaması usule aykırılık oluşturur.",
        ],
        list: [
          "İsnadın açık biçimde bildirilmesi",
          "Müdafi yardımından yararlanma hakkı",
          "Susma hakkı ve bunun aleyhe yorumlanamayacağı",
          "Yakınlarına haber verilmesini isteme hakkı",
        ],
      },
      {
        id: "musteki",
        heading: "Müşteki ve mağdur bakımından",
        level: 3,
        paragraphs: [
          "Mağdur ve şikâyetçinin de vekil yardımından yararlanma, delil sunma ve dosya hakkında bilgi alma hakkı bulunur. Beyanın somut olgulara dayanması ve belgelerle desteklenmesi önem taşır.",
        ],
      },
      {
        id: "tutanak",
        heading: "Tutanağın imzalanması",
        level: 2,
        paragraphs: [
          "İfade tutanağı imzalanmadan önce okunmalı, beyanla uyumlu olmayan kısımlar düzeltilmelidir. Tutanağa geçirilmeyen bir açıklamanın sonradan ileri sürülmesi güçleşir.",
        ],
      },
    ],
    sources: ["5271 sayılı Ceza Muhakemesi Kanunu m. 147", "5271 sayılı Ceza Muhakemesi Kanunu m. 234"],
    metaTitle: "Soruşturmada İfade ve Temel Haklar | Akdağ Hukuk",
    metaDescription:
      "Ceza soruşturmasında ifade alınmadan önce bildirilmesi gereken haklar, müşteki bakımından haklar ve ifade tutanağı hakkında genel bilgilendirme.",
    status: "published",
  },
];

export const publishedArticles = articles
  .filter((a) => a.status === "published")
  .sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1));

export function getArticle(slug: string) {
  return publishedArticles.find((a) => a.slug === slug);
}

export function getCategory(slug: string) {
  return articleCategories.find((c) => c.slug === slug);
}

export function articlesByCategory(slug: string) {
  return publishedArticles.filter((a) => a.categorySlug === slug);
}

export function articlesForArea(areaSlug: string) {
  return publishedArticles.filter((a) => a.relatedAreaSlug === areaSlug);
}

export function formatDate(value: string) {
  return new Date(`${value}T00:00:00Z`).toLocaleDateString("tr-TR", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}
