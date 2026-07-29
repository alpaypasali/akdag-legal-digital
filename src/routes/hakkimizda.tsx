import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader, LegalDisclaimer, SectionLabel } from "@/components/section";
import { Breadcrumbs, breadcrumbJsonLd } from "@/components/breadcrumbs";
import { site } from "@/data/site";
import headerAsset from "@/assets/hero-hakkimizda.png.asset.json";
import ilkelerAsset from "@/assets/ilkeler.jpg.asset.json";

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
    links: [{ rel: "canonical", href: "/hakkimizda" }],
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
  { t: "Gizlilik", d: "Müvekkil bilgileri meslek sırrı kapsamında korunur; üçüncü kişilerle paylaşılmaz." },
  { t: "Şeffaflık", d: "Sürecin aşamaları, olası riskler ve masraf kalemleri baştan açıklanır." },
  { t: "Bağımsızlık", d: "Hukuki değerlendirme, dış etkiden bağımsız biçimde yapılır." },
  { t: "Dürüstlük", d: "Gerçekleşmesi öngörülmeyen sonuçlar için beklenti oluşturulmaz." },
  { t: "Özen", d: "Belge, süre ve usul koşulları dosya boyunca takip edilir." },
  { t: "Saygı", d: "Tüm taraflarla ölçülü ve mesleki bir iletişim kurulur." },
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

      <section aria-labelledby="ilkeler" className="border-b border-border bg-secondary py-14 md:py-20">
        <div className="container-editorial grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <SectionLabel index="02">Mesleki İlkeler</SectionLabel>
            <h2 id="ilkeler" className="mt-6 font-serif text-2xl sm:text-3xl">
              Çalışmanın dayandığı altı ilke
            </h2>
            <figure className="relative mt-8 border border-accent/30 p-1.5">
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={ilkelerAsset.url}
                  alt="Bursa'daki büronun çalışma ortamından mimari bir detay"
                  width={1200}
                  height={400}
                  loading="lazy"
                  decoding="async"
                  sizes="(min-width: 1024px) 32vw, 100vw"
                  className="h-full w-full object-cover object-center [filter:saturate(0.55)_contrast(0.96)_brightness(0.92)_sepia(0.18)]"
                />
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/55 via-ink/10 to-transparent"
                />
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 shadow-[inset_0_0_70px_rgba(20,16,12,0.45)]"
                />
              </div>
            </figure>
          </div>
          <div className="lg:col-span-8">
            <dl className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
              {values.map((v) => (
                <div key={v.t} className="border-t border-border pt-4">
                  <dt className="font-serif text-lg">{v.t}</dt>
                  <dd className="mt-2 text-base text-muted-foreground sm:text-sm">{v.d}</dd>
                </div>
              ))}
            </dl>
          </div>
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
          <div className="lg:col-span-5">
            <LegalDisclaimer text={site.legalNotice} />
          </div>
        </div>
      </section>
    </>
  );
}
