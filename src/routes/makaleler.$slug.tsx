import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Breadcrumbs, breadcrumbJsonLd } from "@/components/breadcrumbs";
import { LegalDisclaimer } from "@/components/section";
import {
  getArticle,
  getCategory,
  publishedArticles,
  formatDate,
  type Article,
} from "@/data/articles";
import { getArea } from "@/data/practice-areas";
import { site } from "@/data/site";

export const Route = createFileRoute("/makaleler/$slug")({
  loader: ({ params }): { article: Article } => {
    const article = getArticle(params.slug);
    if (!article) throw notFound();
    return { article };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Makale bulunamadı | Akdağ Hukuk" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { article } = loaderData;
    const url = `/makaleler/${params.slug}`;
    return {
      meta: [
        { title: article.metaTitle },
        { name: "description", content: article.metaDescription },
        { property: "og:title", content: article.metaTitle },
        { property: "og:description", content: article.metaDescription },
        { property: "og:type", content: "article" },
        { property: "og:url", content: url },
        ...(article.noindex
          ? [{ name: "robots", content: "noindex" }]
          : []),
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: article.title,
            description: article.excerpt,
            datePublished: article.publishedAt,
            dateModified: article.updatedAt ?? article.publishedAt,
            inLanguage: "tr-TR",
            author: { "@type": "Person", name: article.author },
            publisher: { "@type": "Organization", name: site.name },
            mainEntityOfPage: url,
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Makaleler", item: "/makaleler" },
              { name: article.title, item: url },
            ]),
          ),
        },
      ],
    };
  },
  component: ArticleDetail,
});

function ArticleDetail() {
  const { article } = Route.useLoaderData() as { article: Article };
  const category = getCategory(article.categorySlug);
  const area = getArea(article.relatedAreaSlug);
  const related = publishedArticles
    .filter((a) => a.slug !== article.slug && a.categorySlug === article.categorySlug)
    .concat(publishedArticles.filter((a) => a.slug !== article.slug))
    .slice(0, 3);

  const toc = article.sections.map((s) => ({
    id: s.id,
    heading: s.heading,
    level: s.level,
  }));

  return (
    <>
      <div className="border-b border-hairline py-12 md:py-16">
        <div className="container-editorial">
          <Breadcrumbs
            items={[
              { label: "Makaleler", to: "/makaleler" },
              { label: article.title },
            ]}
          />
          <p className="eyebrow mt-6">
            {category ? (
              <Link
                to="/makaleler/kategori/$slug"
                params={{ slug: category.slug }}
                className="transition-colors hover:text-accent"
              >
                {category.title}
              </Link>
            ) : (
              "Makale"
            )}
          </p>
          <h1 className="mt-4 max-w-4xl font-serif text-3xl leading-[1.15] sm:text-4xl lg:text-5xl">
            {article.title}
          </h1>
          <p className="measure mt-6 text-base text-muted-foreground sm:text-lg">
            {article.excerpt}
          </p>

          <dl className="mt-8 flex flex-wrap gap-x-10 gap-y-4 border-t border-hairline pt-6 text-sm">
            <div>
              <dt className="eyebrow">Yazar</dt>
              <dd className="mt-1">{article.author}</dd>
            </div>
            <div>
              <dt className="eyebrow">Yayın</dt>
              <dd className="mt-1">
                <time dateTime={article.publishedAt}>
                  {formatDate(article.publishedAt)}
                </time>
              </dd>
            </div>
            {article.updatedAt ? (
              <div>
                <dt className="eyebrow">Güncelleme</dt>
                <dd className="mt-1">
                  <time dateTime={article.updatedAt}>
                    {formatDate(article.updatedAt)}
                  </time>
                </dd>
              </div>
            ) : null}
            <div>
              <dt className="eyebrow">Okuma Süresi</dt>
              <dd className="mt-1">{article.readingMinutes} dakika</dd>
            </div>
          </dl>
        </div>
      </div>

      <div className="container-editorial grid gap-14 py-12 md:py-16 lg:grid-cols-12 lg:gap-16">
        <aside className="lg:col-span-4 lg:order-2">
          <div className="lg:sticky lg:top-28">
            <details className="border border-hairline p-5 lg:hidden" name="icindekiler">
              <summary className="eyebrow cursor-pointer">İçindekiler</summary>
              <TocList items={toc} />
            </details>

            <nav aria-label="İçindekiler" className="hidden lg:block">
              <h2 className="eyebrow">İçindekiler</h2>
              <TocList items={toc} />
            </nav>

            {area ? (
              <div className="mt-10 border-l-2 border-hairline-gold bg-paper-stone p-6">
                <h2 className="eyebrow">İlgili Çalışma Alanı</h2>
                <Link
                  to="/calisma-alanlari/$slug"
                  params={{ slug: area.slug }}
                  className="mt-3 inline-flex items-center gap-2 font-serif text-xl transition-colors hover:text-accent"
                >
                  {area.title}
                  <ArrowUpRight className="size-4 text-gold" aria-hidden="true" />
                </Link>
                <p className="mt-3 text-sm text-muted-foreground">{area.summary}</p>
              </div>
            ) : null}
          </div>
        </aside>

        <article className="lg:col-span-8 lg:order-1">
          {article.sections.map((section) => {
            const Heading = section.level === 2 ? "h2" : "h3";
            return (
              <section key={section.id} className="mb-10 scroll-mt-28" id={section.id}>
                <Heading
                  className={
                    section.level === 2
                      ? "font-serif text-2xl sm:text-3xl"
                      : "font-serif text-xl sm:text-2xl"
                  }
                >
                  {section.heading}
                </Heading>
                {section.paragraphs.map((p) => (
                  <p key={p} className="measure mt-4 text-muted-foreground">
                    {p}
                  </p>
                ))}
                {section.list ? (
                  <ul className="measure mt-5 space-y-2">
                    {section.list.map((li) => (
                      <li key={li} className="flex gap-4">
                        <span
                          aria-hidden="true"
                          className="mt-2.5 h-px w-4 shrink-0 bg-gold"
                        />
                        <span className="text-muted-foreground">{li}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </section>
            );
          })}

          {article.sources.length > 0 ? (
            <section aria-labelledby="kaynaklar" className="mt-12 border-t border-hairline pt-8">
              <h2 id="kaynaklar" className="font-serif text-xl">
                İlgili mevzuat ve kaynaklar
              </h2>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {article.sources.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </section>
          ) : null}

          <section aria-labelledby="yazar" className="mt-12 border-t border-hairline-gold pt-6">
            <h2 id="yazar" className="eyebrow">
              Yazar
            </h2>
            <p className="mt-3 font-serif text-xl">{article.author}</p>
            <p className="measure mt-3 text-sm text-muted-foreground">
              Bursa'da serbest avukat olarak faaliyet göstermektedir. Aile, ceza,
              iş, gayrimenkul ve ticaret hukuku alanlarındaki dosyaları yürütür.
            </p>
            <Link
              to="/avukat-kutay-onat-akdag"
              className="link-underline mt-5 text-sm"
            >
              Avukat profili
              <ArrowUpRight className="size-3.5 text-gold" aria-hidden="true" />
            </Link>
          </section>

          <div className="mt-10">
            <LegalDisclaimer />
          </div>
        </article>
      </div>

      {related.length > 0 ? (
        <section aria-labelledby="ilgili" className="border-t border-hairline py-14">
          <div className="container-editorial">
            <h2 id="ilgili" className="eyebrow">
              İlgili Makaleler
            </h2>
            <ul className="mt-8 grid gap-10 md:grid-cols-3">
              {related.map((a) => (
                <li key={a.slug} className="border-t border-hairline pt-5">
                  <h3 className="font-serif text-lg leading-snug">
                    <Link
                      to="/makaleler/$slug"
                      params={{ slug: a.slug }}
                      className="transition-colors hover:text-accent"
                    >
                      {a.title}
                    </Link>
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground">{a.excerpt}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}
    </>
  );
}

function TocList({
  items,
}: {
  items: { id: string; heading: string; level: 2 | 3 }[];
}) {
  return (
    <ol className="mt-4 space-y-2 text-sm">
      {items.map((item) => (
        <li key={item.id} className={item.level === 3 ? "pl-4" : undefined}>
          <a
            href={`#${item.id}`}
            className="inline-block py-1 text-muted-foreground transition-colors hover:text-accent"
          >
            {item.heading}
          </a>
        </li>
      ))}
    </ol>
  );
}
