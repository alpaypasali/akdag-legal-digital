import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Breadcrumbs, breadcrumbJsonLd } from "@/components/breadcrumbs";
import { LegalDisclaimer } from "@/components/section";
import { FaqList } from "@/components/faq-list";
import { areaFaqs, faqJsonLd } from "@/data/faqs";
import {
  getArea,
  practiceAreas,
  getAreaImage,
  type PracticeArea,
} from "@/data/practice-areas";
import { articlesForArea, formatDate } from "@/data/articles";
import { site } from "@/data/site";


export const Route = createFileRoute("/calisma-alanlari/$slug")({
  loader: ({ params }): { area: PracticeArea } => {
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
        { property: "og:type", content: "article" },
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
        ...(areaFaqs[params.slug]?.length
          ? [
              {
                type: "application/ld+json",
                children: JSON.stringify(faqJsonLd(areaFaqs[params.slug])),
              },
            ]
          : []),
      ],

    };
  },
  component: AreaDetail,
});

function AreaDetail() {
  const { area } = Route.useLoaderData() as { area: PracticeArea };
  const related = articlesForArea(area.slug);
  const faqs = areaFaqs[area.slug] ?? [];
  const heroImg = getAreaImage(area.slug);

  const others = practiceAreas.filter((a) => a.slug !== area.slug).slice(0, 6);

  return (
    <>
      <div className="relative overflow-hidden border-b border-hairline-invert bg-ink pb-14 pt-28 text-ink-foreground md:pb-20 md:pt-40">
        {heroImg ? (
          <>
            <div className="absolute inset-y-0 right-0 w-full lg:w-2/3">
              <img
                src={heroImg.url}
                alt={heroImg.alt}
                fetchPriority="high"
                decoding="async"
                className="size-full object-cover"
              />
            </div>
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/30"
            />
          </>
        ) : null}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.06] [background-image:radial-gradient(currentColor_0.5px,transparent_0.5px)] [background-size:20px_20px]"
        />

        <div className="container-editorial relative grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7 [&_a:hover]:text-gold [&_ol]:text-ink-foreground/70">
            <Breadcrumbs
              items={[
                { label: "Çalışma Alanları", to: "/calisma-alanlari" },
                { label: area.title },
              ]}
            />

            <div className="mt-8 flex items-center gap-4">
              <span aria-hidden="true" className="h-px w-8 bg-gold" />
              <p className="eyebrow text-gold">Çalışma Alanı</p>
            </div>

            <div className="relative mt-5 pl-6">
              <span
                aria-hidden="true"
                className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-gold via-gold/25 to-transparent"
              />
              <h1 className="max-w-3xl font-serif text-4xl leading-[1.05] sm:text-5xl lg:text-6xl">
                {area.heading}
              </h1>
            </div>

            <p className="measure mt-7 border-l border-gold/30 pl-6 text-base text-ink-foreground/70 sm:text-lg">
              {area.intro}
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-5">
              <Link
                to="/iletisim"
                className="group relative inline-flex min-h-12 items-center overflow-hidden border border-gold px-8 py-4"
              >
                <span
                  aria-hidden="true"
                  className="absolute inset-0 translate-y-full bg-gold transition-transform duration-500 ease-out group-hover:translate-y-0"
                />
                <span className="relative text-[11px] font-semibold uppercase tracking-[0.3em] text-ink-foreground transition-colors duration-500 group-hover:text-ink">
                  Bize Ulaşın
                </span>
              </Link>
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-[0.25em] text-ink-foreground/50">
                  Büro
                </span>
                <span className="mt-1 font-serif text-lg">
                  {site.contact.district} / {site.contact.city}
                </span>
              </div>
            </div>

            <ul className="mt-9 flex flex-wrap gap-x-8 gap-y-3 text-xs uppercase tracking-[0.18em] text-ink-foreground/55">
              <li className="flex items-center gap-2">
                <span aria-hidden="true" className="size-1 bg-gold" />
                Dosya sürecinde düzenli bilgilendirme
              </li>
              <li className="flex items-center gap-2">
                <span aria-hidden="true" className="size-1 bg-gold" />
                Mesleki sır ve gizlilik
              </li>
              <li className="flex items-center gap-2">
                <span aria-hidden="true" className="size-1 bg-gold" />
                {site.contact.hours}
              </li>
            </ul>
          </div>

        </div>

        <span
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold/25 to-transparent"
        />
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

          {faqs.length > 0 ? (
            <section aria-labelledby="sss" className="mt-14">
              <h2 id="sss" className="font-serif text-2xl sm:text-3xl">
                {area.title} — sıkça sorulan sorular
              </h2>
              <FaqList items={faqs} headingId="sss" />
              <p className="mt-6 text-xs text-muted-foreground">
                Diğer sorular için{" "}
                <Link to="/sikca-sorulan-sorular" className="underline">
                  sıkça sorulan sorular
                </Link>{" "}
                sayfasına göz atabilirsiniz.
              </p>
            </section>
          ) : null}



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
