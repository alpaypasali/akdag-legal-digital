import { createFileRoute, Link } from "@tanstack/react-router";
import { Breadcrumbs, breadcrumbJsonLd } from "@/components/breadcrumbs";
import { FaqList } from "@/components/faq-list";
import { areaFaqs, faqJsonLd, generalFaqs } from "@/data/faqs";
import { practiceAreas } from "@/data/practice-areas";
import { site } from "@/data/site";

const title = "Sıkça Sorulan Sorular | Bursa Avukat | Akdağ Hukuk";
const description =
  "Bursa'da avukatlık hizmeti, randevu, vekâlet, avukatlık ücreti ve dava süreleri hakkında sıkça sorulan sorular ve genel bilgilendirici yanıtlar.";

const allFaqs = [
  ...generalFaqs,
  ...practiceAreas.flatMap((a) => areaFaqs[a.slug] ?? []),
];

export const Route = createFileRoute("/sikca-sorulan-sorular")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/sikca-sorulan-sorular" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/sikca-sorulan-sorular" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbJsonLd([
            { name: "Sıkça Sorulan Sorular", item: "/sikca-sorulan-sorular" },
          ]),
        ),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(faqJsonLd(allFaqs)),
      },
    ],
  }),
  component: FaqPage,
});

function FaqPage() {
  return (
    <>
      <div className="border-b border-border py-12 md:py-16">
        <div className="container-editorial">
          <Breadcrumbs items={[{ label: "Sıkça Sorulan Sorular" }]} />
          <p className="eyebrow mt-6">Bilgilendirme</p>
          <h1 className="mt-4 max-w-4xl font-serif text-3xl leading-[1.15] sm:text-4xl lg:text-5xl">
            Sıkça sorulan sorular
          </h1>
          <p className="measure mt-6 text-base text-muted-foreground sm:text-lg">
            Bursa'daki büromuza en sık iletilen sorular ve genel çerçevede
            yanıtları. Çalışma alanına özgü sorular için ilgili alan sayfasını
            inceleyebilirsiniz.
          </p>
        </div>
      </div>

      <div className="container-editorial grid gap-14 py-14 md:py-20 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-8">
          <section aria-labelledby="genel">
            <h2 id="genel" className="font-serif text-2xl sm:text-3xl">
              Genel sorular
            </h2>
            <FaqList items={generalFaqs} headingId="genel" />
          </section>

          {practiceAreas.map((area) => {
            const faqs = areaFaqs[area.slug] ?? [];
            if (faqs.length === 0) return null;
            const id = `sss-${area.slug}`;
            return (
              <section key={area.slug} aria-labelledby={id} className="mt-14">
                <h2 id={id} className="font-serif text-2xl sm:text-3xl">
                  {area.title}
                </h2>
                <FaqList items={faqs} headingId={id} />
                <Link
                  to="/calisma-alanlari/$slug"
                  params={{ slug: area.slug }}
                  className="mt-5 inline-flex text-sm underline"
                >
                  {area.title} sayfasına git
                </Link>
              </section>
            );
          })}

        </div>

        <aside className="lg:col-span-4">
          <div className="border border-border bg-secondary p-6 lg:sticky lg:top-28">
            <h2 className="font-serif text-xl">Sorunuz burada yok mu?</h2>
            <p className="mt-3 text-sm text-muted-foreground">
              Dosyanıza özgü sorularınızı büroyla paylaşabilirsiniz.
            </p>
            <Link
              to="/iletisim"
              className="mt-6 inline-flex min-h-12 w-full items-center justify-center border border-foreground bg-foreground px-6 text-sm text-primary-foreground transition-colors hover:bg-transparent hover:text-foreground"
            >
              İletişim sayfası
            </Link>
            <p className="mt-4 text-xs text-muted-foreground">
              {site.contact.district} / {site.contact.city} · {site.contact.hours}
            </p>
          </div>
        </aside>
      </div>
    </>
  );
}
