import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { PageHeader } from "@/components/section";
import { Breadcrumbs, breadcrumbJsonLd } from "@/components/breadcrumbs";
import {
  publishedArticles,
  articleCategories,
  getCategory,
  formatDate,
} from "@/data/articles";
import headerAsset from "@/assets/hero-makaleler.webp.asset.json";

const title = "Makaleler | Akdağ Hukuk ve Danışmanlık";
const description =
  "Aile, iş, kira ve ceza hukuku başta olmak üzere güncel hukuki süreçlere ilişkin genel bilgilendirme yazıları.";

export const Route = createFileRoute("/makaleler/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/makaleler" },
    ],
    links: [{ rel: "canonical", href: "/makaleler" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbJsonLd([{ name: "Makaleler", item: "/makaleler" }]),
        ),
      },
    ],
  }),
  component: ArticlesPage,
});

function ArticlesPage() {
  const [query, setQuery] = useState("");
  const [featured, ...rest] = publishedArticles;

  const normalized = query.trim().toLocaleLowerCase("tr-TR");
  const results = normalized
    ? publishedArticles.filter(
        (a) =>
          a.title.toLocaleLowerCase("tr-TR").includes(normalized) ||
          a.excerpt.toLocaleLowerCase("tr-TR").includes(normalized),
      )
    : null;

  return (
    <>
      <PageHeader
        eyebrow="Makaleler"
        title="Hukuki süreçlere ilişkin bilgilendirme yazıları"
        image={headerAsset.url}
        imageAlt="Rafta duran ciltli hukuk kitapları ve sütunlu duvar detayı"
        imagePosition="75% center"
        intro="Bu bölümdeki yazılar genel bilgilendirme amacı taşır. Yazılarda anlatılan çerçeve, her uyuşmazlığın kendi koşullarına göre değişebilir."
      >
        <Breadcrumbs items={[{ label: "Makaleler" }]} />
      </PageHeader>

      <div className="container-editorial py-12 md:py-16">
        <div className="flex flex-col gap-6 border-b border-border pb-6 lg:flex-row lg:items-end lg:justify-between">
          <nav aria-label="Kategori filtreleri">
            <h2 className="eyebrow">Kategoriler</h2>
            <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm">
              {articleCategories.map((c) => (
                <li key={c.slug}>
                  <Link
                    to="/makaleler/kategori/$slug"
                    params={{ slug: c.slug }}
                    className="inline-flex min-h-11 items-center border-b border-transparent transition-colors hover:border-gold hover:text-accent"
                  >
                    {c.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:w-80">
            <label htmlFor="makale-arama" className="eyebrow block">
              Makalelerde ara
            </label>
            <input
              id="makale-arama"
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Örn. arabuluculuk"
              className="mt-2 min-h-12 w-full border border-input bg-card px-4 text-base"
            />
          </div>
        </div>

        {results ? (
          <section aria-label="Arama sonuçları" className="py-12">
            <p aria-live="polite" className="eyebrow">
              {results.length} sonuç bulundu
            </p>
            <ul className="mt-8 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
              {results.map((a) => (
                <li key={a.slug}>
                  <ArticleCard slug={a.slug} />
                </li>
              ))}
            </ul>
          </section>
        ) : (
          <>
            <section aria-labelledby="one-cikan" className="py-12">
              <h2 id="one-cikan" className="eyebrow">
                Öne Çıkan Makale
              </h2>
              <article className="mt-6 grid gap-8 border-t border-border pt-8 lg:grid-cols-12">
                <div className="lg:col-span-3">
                  <p className="rule-number">
                    {getCategory(featured.categorySlug)?.title}
                  </p>
                  <p className="mt-3 text-xs text-muted-foreground">
                    <time dateTime={featured.publishedAt}>
                      {formatDate(featured.publishedAt)}
                    </time>
                    <span aria-hidden="true"> · </span>
                    {featured.readingMinutes} dk okuma
                  </p>
                </div>
                <div className="lg:col-span-9">
                  <h3 className="font-serif text-2xl leading-snug sm:text-3xl lg:text-4xl">
                    <Link
                      to="/makaleler/$slug"
                      params={{ slug: featured.slug }}
                      className="transition-colors hover:text-accent"
                    >
                      {featured.title}
                    </Link>
                  </h3>
                  <p className="measure mt-4 text-muted-foreground">
                    {featured.excerpt}
                  </p>
                  <Link
                    to="/makaleler/$slug"
                    params={{ slug: featured.slug }}
                    className="link-underline mt-6 text-sm"
                  >
                    Makaleyi oku
                    <ArrowUpRight className="size-3.5 text-gold" aria-hidden="true" />
                  </Link>
                </div>
              </article>
            </section>

            <section aria-labelledby="son-makaleler" className="border-t border-border py-12">
              <h2 id="son-makaleler" className="eyebrow">
                Son Makaleler
              </h2>
              <ul className="mt-8 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
                {rest.map((a) => (
                  <li key={a.slug}>
                    <ArticleCard slug={a.slug} />
                  </li>
                ))}
              </ul>

              <nav aria-label="Sayfalama" className="mt-14 flex items-center gap-4 border-t border-border pt-6">
                <span className="text-sm text-muted-foreground">
                  Sayfa 1 / 1 · Toplam {publishedArticles.length} makale
                </span>
              </nav>
            </section>
          </>
        )}
      </div>
    </>
  );
}

export function ArticleCard({ slug }: { slug: string }) {
  const article = publishedArticles.find((a) => a.slug === slug);
  if (!article) return null;
  return (
    <article className="border-t border-border pt-5">
      <p className="eyebrow">{getCategory(article.categorySlug)?.title}</p>
      <h3 className="mt-3 font-serif text-xl leading-snug">
        <Link
          to="/makaleler/$slug"
          params={{ slug: article.slug }}
          className="transition-colors hover:text-accent"
        >
          {article.title}
        </Link>
      </h3>
      <p className="mt-3 text-sm text-muted-foreground">{article.excerpt}</p>
      <p className="mt-4 text-xs text-muted-foreground">
        <time dateTime={article.publishedAt}>{formatDate(article.publishedAt)}</time>
        <span aria-hidden="true"> · </span>
        {article.readingMinutes} dk okuma
      </p>
    </article>
  );
}
