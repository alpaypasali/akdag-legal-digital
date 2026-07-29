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
          <ul className="mt-8 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {featuredAreas.map((area, i) => {
              const img = getAreaImage(area.slug);
              return (
                <li key={area.slug} className="bg-background">
                  <Link
                    to="/calisma-alanlari/$slug"
                    params={{ slug: area.slug }}
                    className="group flex h-full flex-col"
                  >
                    {img ? (
                      <span className="relative block aspect-[16/10] overflow-hidden bg-ink">
                        <img
                          src={img.url}
                          alt={img.alt}
                          loading={i < 3 ? "eager" : "lazy"}
                          decoding="async"
                          className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </span>
                    ) : null}
                    <span className="flex flex-1 flex-col p-6">
                      <span className="rule-number">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h3 className="mt-2 font-serif text-xl transition-colors group-hover:text-accent">
                        {area.title}
                      </h3>
                      <span className="mt-3 block text-sm text-muted-foreground">
                        {area.summary}
                      </span>
                      <span className="link-underline mt-5 self-start text-sm">
                        Alanı incele
                        <ArrowUpRight className="size-4 text-gold" aria-hidden="true" />
                      </span>
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <section aria-labelledby="diger" className="py-14 md:py-20">
        <div className="container-editorial">
          <h2 id="diger" className="eyebrow">
            Diğer Çalışma Alanları
          </h2>
          <div className="mt-8 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {secondaryAreas.map((area) => {
              const img = getAreaImage(area.slug);
              return (
                <Link
                  key={area.slug}
                  to="/calisma-alanlari/$slug"
                  params={{ slug: area.slug }}
                  className="group flex flex-col bg-background transition-colors hover:bg-secondary"
                >
                  {img ? (
                    <span className="relative block aspect-[16/9] overflow-hidden bg-ink">
                      <img
                        src={img.url}
                        alt={img.alt}
                        loading="lazy"
                        decoding="async"
                        className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </span>
                  ) : null}
                  <span className="block p-6">
                    <h3 className="font-serif text-xl">{area.title}</h3>
                    <span className="mt-3 block text-sm text-muted-foreground">
                      {area.summary}
                    </span>
                  </span>
                </Link>
              );
            })}
          </div>


          <div className="mt-14">
            <LegalDisclaimer />
          </div>
        </div>
      </section>
    </>
  );
}
