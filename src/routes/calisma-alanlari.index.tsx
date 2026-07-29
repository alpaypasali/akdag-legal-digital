import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { PageHeader, LegalDisclaimer } from "@/components/section";
import { Breadcrumbs, breadcrumbJsonLd } from "@/components/breadcrumbs";
import { featuredAreas, secondaryAreas } from "@/data/practice-areas";
import headerAsset from "@/assets/calisma-header.png.asset.json";

const title = "Çalışma Alanları | Akdağ Hukuk ve Danışmanlık";
const description =
  "Aile, ceza, iş, gayrimenkul ve kira, ticaret, miras, icra, borçlar, tüketici, idare, inşaat ve yabancılar hukuku alanlarında yürütülen çalışmalar.";

export const Route = createFileRoute("/calisma-alanlari/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/calisma-alanlari" },
    ],
    links: [{ rel: "canonical", href: "/calisma-alanlari" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbJsonLd([
            { name: "Çalışma Alanları", item: "/calisma-alanlari" },
          ]),
        ),
      },
    ],
  }),
  component: AreasPage,
});

function AreasPage() {
  return (
    <>
      <PageHeader
        eyebrow="Çalışma Alanları"
        title="Takip edilen hukuk alanları ve dosya grupları"
        image={headerAsset.url}
        imageAlt="Ahşap raflarla çevrili klasik bir hukuk kütüphanesi"
        intro="Aşağıdaki başlıklar, büro tarafından yürütülen dosya gruplarını gösterir. Her alanda sürecin kapsamı, izlenen aşamalar ve sık karşılaşılan durumlar ilgili sayfada ayrıca açıklanmıştır."
      >
        <Breadcrumbs items={[{ label: "Çalışma Alanları" }]} />
      </PageHeader>

      <section aria-labelledby="oncelikli" className="border-b border-border py-14 md:py-20">
        <div className="container-editorial">
          <h2 id="oncelikli" className="eyebrow">
            Öne Çıkan Alanlar
          </h2>
          <ul className="mt-8 border-t border-border">
            {featuredAreas.map((area, i) => (
              <li key={area.slug} className="border-b border-border">
                <Link
                  to="/calisma-alanlari/$slug"
                  params={{ slug: area.slug }}
                  className="group grid gap-3 py-7 md:grid-cols-12 md:items-baseline md:gap-8"
                >
                  <span className="rule-number md:col-span-1">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-serif text-2xl transition-colors group-hover:text-accent md:col-span-4 lg:text-3xl">
                    {area.title}
                  </h3>
                  <p className="text-sm text-muted-foreground md:col-span-6">
                    {area.summary}
                  </p>
                  <ArrowUpRight
                    className="size-4 text-gold md:col-span-1 md:justify-self-end"
                    aria-hidden="true"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="diger" className="py-14 md:py-20">
        <div className="container-editorial">
          <h2 id="diger" className="eyebrow">
            Diğer Çalışma Alanları
          </h2>
          <div className="mt-8 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {secondaryAreas.map((area) => (
              <Link
                key={area.slug}
                to="/calisma-alanlari/$slug"
                params={{ slug: area.slug }}
                className="bg-background p-6 transition-colors hover:bg-secondary"
              >
                <h3 className="font-serif text-xl">{area.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">
                  {area.summary}
                </p>
              </Link>
            ))}
          </div>

          <div className="mt-14">
            <LegalDisclaimer />
          </div>
        </div>
      </section>
    </>
  );
}
