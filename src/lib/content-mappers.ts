import type {
  Article,
  ArticleCategory,
  ArticleFaq,
  ArticleSection,
} from "@/data/articles";
import type { PracticeArea } from "@/data/practice-areas";

/** Veritabanı satırı -> uygulama tipi dönüşümleri (istemci ve sunucuda güvenle kullanılır). */

export type ArticleRow = {
  slug: string;
  title: string;
  excerpt: string;
  category_slug: string;
  author: string;
  published_at: string;
  content_updated_at: string | null;
  reading_minutes: number;
  related_area_slug: string | null;
  sections: unknown;
  sources: unknown;
  meta_title: string;
  meta_description: string;
  noindex: boolean;
  status: string;
  faqs?: unknown;
  closing_note?: string | null;
  schema_type?: string | null;
  og_image_url?: string | null;
};


export type CategoryRow = {
  slug: string;
  title: string;
  description: string;
};

export type PracticeAreaRow = {
  slug: string;
  title: string;
  summary: string;
  featured: boolean;
  sort_order: number;
  heading: string;
  intro: string;
  scope: unknown;
  processes: unknown;
  situations: unknown;
  process_note: string;
  image_url: string | null;
  image_alt: string | null;
  meta_title: string;
  meta_description: string;
};

const asStringArray = (value: unknown): string[] =>
  Array.isArray(value) ? value.filter((v): v is string => typeof v === "string") : [];

export function mapArticle(row: ArticleRow): Article {
  return {
    slug: row.slug,
    title: row.title,
    excerpt: row.excerpt,
    categorySlug: row.category_slug,
    author: row.author,
    publishedAt: row.published_at,
    updatedAt: row.content_updated_at ?? undefined,
    readingMinutes: row.reading_minutes,
    relatedAreaSlug: row.related_area_slug ?? "",
    sections: (Array.isArray(row.sections) ? row.sections : []) as ArticleSection[],
    sources: asStringArray(row.sources),
    metaTitle: row.meta_title,
    metaDescription: row.meta_description,
    noindex: row.noindex,
    status: row.status === "published" ? "published" : "draft",
    faqs: Array.isArray(row.faqs)
      ? (row.faqs as ArticleFaq[]).filter(
          (f) => f && typeof f.question === "string" && typeof f.answer === "string",
        )
      : undefined,
    closingNote: row.closing_note ?? undefined,
    schemaType:
      row.schema_type === "Article" || row.schema_type === "NewsArticle"
        ? row.schema_type
        : "BlogPosting",

    ogImageUrl: row.og_image_url ?? undefined,
  };
}


export function mapCategory(row: CategoryRow): ArticleCategory {
  return { slug: row.slug, title: row.title, description: row.description };
}

export function mapPracticeArea(row: PracticeAreaRow): PracticeArea {
  return {
    slug: row.slug,
    title: row.title,
    summary: row.summary,
    featured: row.featured,
    order: row.sort_order,
    heading: row.heading,
    intro: row.intro,
    scope: asStringArray(row.scope),
    processes: asStringArray(row.processes),
    situations: asStringArray(row.situations),
    processNote: row.process_note,
    metaTitle: row.meta_title,
    metaDescription: row.meta_description,
  };
}

export type SiteContent = {
  articles: Article[];
  categories: ArticleCategory[];
  areas: PracticeArea[];
  areaImages: Record<string, { url: string; alt: string }>;
};
