import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader, SectionLabel } from "@/components/section";
import { Breadcrumbs, breadcrumbJsonLd } from "@/components/breadcrumbs";
import { site } from "@/data/site";
import headerAsset from "@/assets/hero-hakkimizda.webp.asset.json";
import archAsset from "@/assets/arch-columns.webp.asset.json";

const title = "Hakkımızda | Akdağ Hukuk ve Danışmanlık";
const description =
  "Akdağ Hukuk ve Danışmanlık'ın çalışma düzeni, mesleki ilkeleri ve Bursa'daki faaliyet alanı hakkında bilgi.";

export const Route = createFileRoute("/hakkimizda")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/hakkimizda" },
    ],
    links: [
      { rel: "canonical", href: "/hakkimizda" },
      {
        rel: "preload",
        as: "image",
        href: headerAsset.url,
        fetchPriority: "high" as const,
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbJsonLd([{ name: "Hakkımızda", item: "/hakkimizda" }]),
        ),
      },
    ],
  }),
  component: AboutPage,
});

const values = [
  { t: "Gizlilik", d: "Paylaşılan her bilgi meslek sırrı kapsamında korunur." },
  { t: "Şeffaflık", d: "Sürecin aşamaları ve olası sonuçları açıkça aktarılır." },
  { t: "Bağımsızlık", d: "Değerlendirme yalnızca hukuki ölçütlere göre yapılır." },
  { t: "Dürüstlük", d: "Beklenti oluşturmadan, gerçekçi bir çerçeve sunulur." },
  { t: "Özen", d: "Dosya, belgeler ve süreler ayrıntılı biçimde takip edilir." },
  { t: "Saygı", d: "Karşı taraf dâhil tüm süjelerle ölçülü iletişim kurulur." },
];

function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="Hakkımızda"
        title="Bursa'da bireyler ve kurumlar için hukuki süreç yönetimi"
        image={headerAsset.url}
        imageAlt="Klasik büst, hukuk kitabı ve mimari sütunlarla düzenlenmiş sakin bir büro köşesi"
        imagePosition="72% center"
        intro="Akdağ Hukuk ve Danışmanlık, dava ve danışmanlık dosyalarını düzenli bir çalışma yöntemiyle yürütür. Amaç, müvekkilin süreci anlaması ve her aşamada nerede durduğunu bilmesidir."
      >
        <Breadcrumbs items={[{ label: "Hakkımızda" }]} />
      </PageHeader>

      <section className="border-b border-border py-14 md:py-20">
        <div className="container-editorial grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <SectionLabel index="01">Büro</SectionLabel>
          </div>
          <div className="measure space-y-6 text-muted-foreground lg:col-span-8">
            <h2 className="font-serif text-2xl text-foreground sm:text-3xl">
              Çalışma düzeni
            </h2>
            <p>
              Büro, Bursa ve çevresinde bireysel müvekkiller ile şirketlerin
              hukuki işlerini takip eder. Her dosyada önce mevcut durum
              belgelerle birlikte incelenir; ardından izlenebilecek yollar ve
              bunların olası sonuçları yazılı veya sözlü olarak aktarılır.
            </p>
            <p>
              Dava yolu tek seçenek olarak görülmez. Arabuluculuk, sulh ve
              müzakere olanakları her dosyada ayrıca değerlendirilir. Bu
              yöntemlerin uygun olduğu hâllerde süreç daha kısa sürede
              sonuçlanabilir.
            </p>
            <h3 className="font-serif text-xl text-foreground">
              Bilgilendirme biçimi
            </h3>
            <p>
              Duruşma, tebligat ve süreye bağlı işlemler takip edilir; önemli
              gelişmeler müvekkile bildirilir. Sürecin sonucu yargı merciinin
              takdirine bağlı olduğundan, herhangi bir sonuç taahhüdünde
              bulunulmaz.
            </p>
          </div>
        </div>
      </section>


      <section
        aria-labelledby="ilkeler"
        className="relative isolate overflow-hidden border-b border-hairline-invert bg-ink py-16 text-ink-foreground md:py-24"
      >
        <img
          src={archAsset.url}
          alt=""
          aria-hidden="true"
          loading="lazy"
          decoding="async"
          className="pointer-events-none absolute inset-0 -z-10 size-full object-cover object-center opacity-45 [filter:grayscale(1)_contrast(1.05)_brightness(0.9)]"
        />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(100deg,color-mix(in_oklab,var(--ink)_88%,transparent),color-mix(in_oklab,var(--ink)_58%,transparent))]"
        />
        <div className="container-editorial grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-4">
              <span className="rule-number">02</span>
              <span className="eyebrow">Mesleki İlkeler</span>
            </div>
            <h2
              id="ilkeler"
              className="mt-6 font-serif text-2xl sm:text-3xl lg:text-4xl"
            >
              Çalışmanın dayandığı altı ilke
            </h2>
          </div>
          <dl className="grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:col-span-8 lg:grid-cols-3">
            {values.map((v) => (
              <div key={v.t} className="border-t border-hairline-invert pt-4">
                <dt className="font-serif text-lg text-ink-foreground">{v.t}</dt>
                <dd className="mt-2 text-sm text-ink-foreground/75">{v.d}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>




      <section className="py-14 md:py-20">
        <div className="container-editorial grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h2 className="font-serif text-2xl sm:text-3xl">
              Avukat profili ve iletişim
            </h2>
            <p className="measure mt-4 text-muted-foreground">
              Dosyaları yürüten avukatın mesleki geçmişi ve çalışma yaklaşımı
              için özgeçmiş sayfasını inceleyebilir, görüşme için iletişim
              sayfasından büroya ulaşabilirsiniz.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/avukat-kutay-onat-akdag"
                className="inline-flex min-h-12 items-center border border-foreground bg-foreground px-6 text-sm text-primary-foreground transition-colors hover:bg-transparent hover:text-foreground"
              >
                Av. Kutay Onat Akdağ
              </Link>
              <Link
                to="/iletisim"
                className="inline-flex min-h-12 items-center border border-foreground px-6 text-sm transition-colors hover:bg-secondary"
              >
                İletişim
              </Link>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
