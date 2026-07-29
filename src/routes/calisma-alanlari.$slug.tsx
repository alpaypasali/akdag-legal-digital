import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Breadcrumbs, breadcrumbJsonLd } from "@/components/breadcrumbs";
import { LegalDisclaimer } from "@/components/section";
import { getArea, practiceAreas } from "@/data/practice-areas";
import { articlesForArea, formatDate } from "@/data/articles";
import { site } from "@/data/site";

export const Route = createFileRoute("/calisma-alanlari/$slug")({
  loader: ({ params }) => {
    const area = getArea(params.slug);
    if (!area) throw notFound();
    return { area };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Sayfa bulunamadı | Akdağ Hukuk" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { area } = loaderData;
    const url = `/calisma-alanlari/${params.slug}`;
    return {
      meta: [
        { title: area.metaTitle },
        { name: "description", content: area.metaDescription },
        { property: "og:title", content: area.metaTitle },
        { property: "og:description", content: area.metaDescription },
        { property: "og:url", content: url },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Çalışma Alanları", item: "/calisma-alanlari" },
              { name: area.title, item: url },
            ]),
          ),
        },
      ],
    };
  },
  component: AreaDetail,
});

function AreaDetail() {
  const { area } = Route.useLoaderData();
  const related = articlesForArea(area.slug);
  const others = practiceAreas.filter((a) => a.slug !== area.slug).slice(0, 6);

  return (
    <>
      <div className="border-b border-border py-12 md:py-16">
        <div className="container-editorial">
          <Breadcrumbs
            items={[
              { label: "Çalışma Alanları", to: "/calisma-alanlari" },
              { label: area.title },
            ]}
          />
          <p className="eyebrow mt-6">Çalışma Alanı</p>
          <h1 className="mt-4 max-w-4xl font-serif text-3xl leading-[1.15] sm:text-4xl lg:text-5xl">
            {area.heading}
          </h1>
          <p className="measure mt-6 text-base text-muted-foreground sm:text-lg">
            {area.intro}
          </p>
        </div>
      </div>

      <div className="container-editorial grid gap-14 py-14 md:py-20 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-8">
          <section aria-labelledby="kapsam">
            <h2 id="kapsam" className="font-serif text-2xl sm:text-3xl">
              Konunun kapsamı
            </h2>
            <ul className="mt-6 space-y-3">
              {area.scope.map((item) => (
                <li key={item} className="flex gap-4 border-b border-border pb-3">
                  <span aria-hidden="true" className="mt-2.5 h-px w-4 shrink-0 bg-gold" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="surecler" className="mt-14">
            <h2 id="surecler" className="font-serif text-2xl sm:text-3xl">
              İlgili hukuki süreçler
            </h2>
            <ol className="mt-6 space-y-5">
              {area.processes.map((item, i) => (
                <li key={item} className="flex gap-5">
                  <span className="rule-number pt-1">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="measure text-muted-foreground">{item}</span>
                </li>
              ))}
            </ol>
          </section>

          <section aria-labelledby="durumlar" className="mt-14">
            <h2 id="durumlar" className="font-serif text-2xl sm:text-3xl">
              Sık karşılaşılan durumlar
            </h2>
            <div className="mt-6 grid gap-px border border-border bg-border sm:grid-cols-2">
              {area.situations.map((item) => (
                <p key={item} className="bg-background p-5 text-sm text-muted-foreground">
                  {item}
                </p>
              ))}
            </div>
          </section>

          <section aria-labelledby="bilgilendirme" className="mt-14">
            <h2 id="bilgilendirme" className="font-serif text-2xl sm:text-3xl">
              Süreç hakkında genel bilgilendirme
            </h2>
            <p className="measure mt-5 text-muted-foreground">{area.processNote}</p>
          </section>

          {related.length > 0 ? (
            <section aria-labelledby="ilgili-makaleler" className="mt-14">
              <h2 id="ilgili-makaleler" className="font-serif text-2xl sm:text-3xl">
                İlgili makaleler
              </h2>
              <ul className="mt-6 border-t border-border">
                {related.map((a) => (
                  <li key={a.slug} className="border-b border-border">
                    <Link
                      to="/makaleler/$slug"
                      params={{ slug: a.slug }}
                      className="flex min-h-14 flex-wrap items-baseline gap-x-4 gap-y-1 py-4 transition-colors hover:text-accent"
                    >
                      <span className="font-serif text-lg">{a.title}</span>
                      <time
                        dateTime={a.publishedAt}
                        className="ml-auto text-xs text-muted-foreground"
                      >
                        {formatDate(a.publishedAt)}
                      </time>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ) : null}

          <div className="mt-14">
            <LegalDisclaimer
              text={`${site.legalNotice} Bu sayfadaki açıklamalar ${area.title.toLocaleLowerCase("tr-TR")} alanına ilişkin genel çerçeveyi anlatır.`}
            />
          </div>
        </div>

        <aside className="lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <div className="border border-border bg-secondary p-6">
              <h2 className="font-serif text-xl">Görüşme talebi</h2>
              <p className="mt-3 text-sm text-muted-foreground">
                Dosyanızın kapsamını değerlendirmek için büroyla iletişime
                geçebilirsiniz.
              </p>
              <Link
                to="/iletisim"
                className="mt-6 inline-flex min-h-12 w-full items-center justify-center border border-foreground bg-foreground px-6 text-sm text-primary-foreground transition-colors hover:bg-transparent hover:text-foreground"
              >
                İletişim sayfası
              </Link>
              <p className="mt-4 text-xs text-muted-foreground">
                {site.contact.district} / {site.contact.city} ·{" "}
                {site.contact.hours}
              </p>
            </div>

            <nav aria-label="Diğer çalışma alanları" className="mt-10">
              <h2 className="eyebrow">Diğer Çalışma Alanları</h2>
              <ul className="mt-4 border-t border-border">
                {others.map((a) => (
                  <li key={a.slug} className="border-b border-border">
                    <Link
                      to="/calisma-alanlari/$slug"
                      params={{ slug: a.slug }}
                      className="flex min-h-12 items-center justify-between gap-3 py-3 text-sm transition-colors hover:text-accent"
                    >
                      {a.title}
                      <ArrowUpRight className="size-3.5 text-gold" aria-hidden="true" />
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </aside>
      </div>
    </>
  );
}
