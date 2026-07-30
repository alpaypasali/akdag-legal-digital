import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { PageHeader } from "@/components/section";
import { Breadcrumbs, breadcrumbJsonLd } from "@/components/breadcrumbs";
import { formatDate, type Article, type ArticleCategory } from "@/data/articles";
import { fetchSiteContent } from "@/lib/content.functions";

export const Route = createFileRoute("/makaleler/kategori/$slug")({
  loader: async ({
    params,
  }): Promise<{ category: ArticleCategory; items: Article[] }> => {
    const content = await fetchSiteContent();
    const category = content.categories.find((c) => c.slug === params.slug);
    if (!category) throw notFound();
    const items = content.articles.filter((a) => a.categorySlug === params.slug);
    return { category, items };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Kategori bulunamadı | Akdağ Hukuk" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const url = `/makaleler/kategori/${params.slug}`;
    const title = `${loaderData.category.title} Makaleleri | Akdağ Hukuk`;
    return {
      meta: [
        { title },
        { name: "description", content: loaderData.category.description },
        { property: "og:title", content: title },
        { property: "og:description", content: loaderData.category.description },
        { property: "og:url", content: url },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Makaleler", item: "/makaleler" },
              { name: loaderData.category.title, item: url },
            ]),
          ),
        },
      ],
    };
  },
  errorComponent: CategoryErrorComponent,
  notFoundComponent: CategoryNotFoundComponent,
  component: CategoryPage,
});

function CategoryPage() {
  const { category, items } = Route.useLoaderData();

  return (
    <>
      <PageHeader
        eyebrow="Makale Kategorisi"
        title={`${category.title} yazıları`}
        intro={category.description}
      >
        <Breadcrumbs
          items={[
            { label: "Makaleler", to: "/makaleler" },
            { label: category.title },
          ]}
        />
      </PageHeader>

      <div className="container-editorial py-12 md:py-16">
        {items.length === 0 ? (
          <p className="text-muted-foreground">
            Bu kategoride henüz yayımlanmış makale bulunmuyor.
          </p>
        ) : (
          <ul className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {items.map((a) => (
              <li key={a.slug}>
                <article className="border-t border-border pt-5">
                  <h2 className="font-serif text-xl leading-snug">
                    <Link
                      to="/makaleler/$slug"
                      params={{ slug: a.slug }}
                      className="transition-colors hover:text-accent"
                    >
                      {a.title}
                    </Link>
                  </h2>
                  <p className="mt-3 text-sm text-muted-foreground">{a.excerpt}</p>
                  <p className="mt-4 text-xs text-muted-foreground">
                    <time dateTime={a.publishedAt}>{formatDate(a.publishedAt)}</time>
                    <span aria-hidden="true"> · </span>
                    {a.readingMinutes} dk okuma
                  </p>
                </article>
              </li>
            ))}
          </ul>
        )}

        <Link to="/makaleler" className="link-underline mt-12 text-sm">
          Tüm makaleler
        </Link>
      </div>
    </>
  );
}

function CategoryErrorComponent() {
  return (
    <div className="container-editorial flex min-h-[40vh] flex-col justify-center py-20">
      <p className="rule-number">500</p>
      <h1 className="mt-4 font-serif text-3xl sm:text-4xl">
        Kategori yüklenemedi
      </h1>
      <p className="measure mt-4 text-muted-foreground">
        Beklenmeyen bir sorun oluştu. Lütfen daha sonra tekrar deneyin.
      </p>
    </div>
  );
}

function CategoryNotFoundComponent() {
  return (
    <div className="container-editorial flex min-h-[40vh] flex-col justify-center py-20">
      <p className="rule-number">404</p>
      <h1 className="mt-4 font-serif text-3xl sm:text-4xl">Kategori bulunamadı</h1>
      <p className="measure mt-4 text-muted-foreground">
        Aradığınız kategori bulunamadı.
      </p>
      <Link to="/makaleler" className="link-underline mt-6 text-sm">
        Tüm makaleler
        <ArrowUpRight className="size-3.5 text-gold" aria-hidden="true" />
      </Link>
    </div>
  );
}
