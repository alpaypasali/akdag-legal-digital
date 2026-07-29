import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader, LegalDisclaimer } from "@/components/section";
import { Breadcrumbs, breadcrumbJsonLd } from "@/components/breadcrumbs";
import { site } from "@/data/site";
import headerAsset from "@/assets/banner-inside-a.jpg.asset.json";
import logoMarkAsset from "@/assets/logo-footer.png.asset.json";

const title = "Av. Kutay Onat Akdağ | Akdağ Hukuk ve Danışmanlık";
const description =
  "Av. Kutay Onat Akdağ'ın mesleki geçmişi, çalışma alanları ve hukuki süreçlere yaklaşımı hakkında bilgi. Bursa'da avukatlık ve danışmanlık.";

export const Route = createFileRoute("/avukat-kutay-onat-akdag")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: "/avukat-kutay-onat-akdag" },
    ],
    links: [{ rel: "canonical", href: "/avukat-kutay-onat-akdag" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: site.lawyer,
          jobTitle: "Avukat",
          url: "/avukat-kutay-onat-akdag",
          email: site.contact.email,
          worksFor: { "@type": "LegalService", name: site.name },
          address: {
            "@type": "PostalAddress",
            addressLocality: site.contact.district,
            addressRegion: site.contact.city,
            addressCountry: "TR",
          },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbJsonLd([
            { name: "Av. Kutay Onat Akdağ", item: "/avukat-kutay-onat-akdag" },
          ]),
        ),
      },
    ],
  }),
  component: LawyerPage,
});

const timeline = [
  { t: "Eğitim", d: "Hukuk fakültesi lisans eğitimi. Ayrıntılı bilgi güncellenecektir." },
  { t: "Baro", d: "Bursa Barosu'na kayıtlı avukat." },
  { t: "Mesleğe başlangıç", d: "Serbest avukatlık faaliyeti. Yıl bilgisi güncellenecektir." },
  { t: "Faaliyet bölgesi", d: "Bursa merkez ilçeleri ve çevre yerleşimler." },
];

function LawyerPage() {
  return (
    <>
      <PageHeader
        eyebrow="Avukat"
        title="Av. Kutay Onat Akdağ"
        image={headerAsset.url}
        imagePosition="70% center"
        imageAlt="Ciltli hukuk kitaplarının bulunduğu çalışma kütüphanesi"
        intro="Dosyaların hazırlığı, dilekçelerin yazımı ve duruşma takibi doğrudan yürütülür. Amaç, sürecin müvekkil tarafından anlaşılabilir biçimde ilerlemesidir."
      >
        <Breadcrumbs items={[{ label: "Av. Kutay Onat Akdağ" }]} />
      </PageHeader>

      <div className="container-editorial grid gap-14 py-14 md:py-20 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-7">
          <section aria-labelledby="biyografi">
            <h2 id="biyografi" className="font-serif text-2xl sm:text-3xl">
              Kısa biyografi
            </h2>
            <div className="measure mt-5 space-y-5 text-muted-foreground">
              <p>
                Av. Kutay Onat Akdağ, Bursa'da serbest avukat olarak faaliyet
                göstermektedir. Aile, ceza, iş, gayrimenkul ve ticaret hukuku
                alanlarındaki dosyaları yürütmekte; bireysel müvekkiller ile
                şirketlere hukuki danışmanlık vermektedir.
              </p>
              <p>
                Mesleki geçmişe ilişkin ayrıntılı bilgiler, güncel özgeçmiş
                metni paylaşıldığında bu bölüme eklenecektir.
              </p>
            </div>
          </section>

          <section aria-labelledby="yaklasim" className="mt-12">
            <h2 id="yaklasim" className="font-serif text-2xl sm:text-3xl">
              Mesleki yaklaşım
            </h2>
            <div className="measure mt-5 space-y-5 text-muted-foreground">
              <p>
                Her dosyada önce hukuki durum belgelerle birlikte incelenir.
                İncelemenin ardından izlenebilecek yollar, bu yolların gerektirdiği
                süre ve masraf ile öngörülebilir riskler müvekkile aktarılır.
              </p>
              <p>
                Uyuşmazlığın niteliğine göre arabuluculuk ve sulh olanakları da
                değerlendirilir. Karar müvekkile aittir; avukatın görevi
                seçenekleri açık biçimde ortaya koymaktır.
              </p>
            </div>
          </section>

          <div className="mt-12">
            <LegalDisclaimer />
          </div>
        </div>

        <aside className="lg:col-span-5">
          <div className="grid aspect-[4/5] place-items-center border border-border bg-secondary p-10 transition-colors duration-500 hover:border-accent/50">
            <img
              src={logoMarkAsset.url}
              alt="Akdağ Hukuk ve Danışmanlık logosu"
              width={1536}
              height={1215}
              loading="lazy"
              decoding="async"
              className="h-auto w-full max-w-[240px] object-contain opacity-95 transition-opacity duration-500 hover:opacity-100"
            />
          </div>


          <dl className="mt-8 border-t border-border">
            {timeline.map((item) => (
              <div key={item.t} className="border-b border-border py-4">
                <dt className="eyebrow">{item.t}</dt>
                <dd className="mt-2 text-sm text-muted-foreground">{item.d}</dd>
              </div>
            ))}
          </dl>

          <Link
            to="/iletisim"
            className="mt-8 inline-flex min-h-12 w-full items-center justify-center border border-foreground bg-foreground px-6 text-sm text-primary-foreground transition-colors hover:bg-transparent hover:text-foreground"
          >
            Randevu ve İletişim
          </Link>
        </aside>
      </div>
    </>
  );
}
