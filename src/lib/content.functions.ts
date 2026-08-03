import { createServerFn } from "@tanstack/react-start";
import { createClient } from "@supabase/supabase-js";

import type { Database } from "@/integrations/supabase/types";
import {
  mapArticle,
  mapCategory,
  mapPracticeArea,
  type ArticleRow,
  type CategoryRow,
  type PracticeAreaRow,
  type SiteContent,
} from "@/lib/content-mappers";
import { articles as staticArticles, articleCategories as staticCategories } from "@/data/articles";
import { practiceAreas as staticAreas, areaImages as staticAreaImages } from "@/data/practice-areas";

/**
 * Sitenin herkese açık içeriği (yayındaki makaleler + aktif çalışma alanları).
 * Veritabanı boş ya da erişilemez olursa statik içerik yedeği kullanılır.
 */
export const fetchSiteContent = createServerFn({ method: "GET" }).handler(
  async (): Promise<SiteContent> => {
    const fallback: SiteContent = {
      articles: staticArticles.filter((a) => a.status === "published"),
      categories: staticCategories,
      areas: [...staticAreas].sort((a, b) => a.order - b.order),
      areaImages: staticAreaImages,
    };

    try {
      const key = process.env.SUPABASE_PUBLISHABLE_KEY;
      const url = process.env.SUPABASE_URL;
      if (!key || !url) return fallback;

      const supabase = createClient<Database>(url, key, {
        auth: { storage: undefined, persistSession: false, autoRefreshToken: false },
        global: {
          fetch: (input, init) => {
            const headers = new Headers(init?.headers);
            if (key.startsWith("sb_") && headers.get("Authorization") === `Bearer ${key}`) {
              headers.delete("Authorization");
            }
            headers.set("apikey", key);
            return fetch(input, { ...init, headers });
          },
        },
      });

      const [articlesRes, categoriesRes, areasRes] = await Promise.all([
        supabase
          .from("articles")
          .select(
            "slug,title,excerpt,category_slug,author,published_at,content_updated_at,reading_minutes,related_area_slug,sections,sources,meta_title,meta_description,noindex,status,faqs,closing_note,schema_type,og_image_url",
          )

          .eq("status", "published")
          .order("published_at", { ascending: false }),
        supabase
          .from("article_categories")
          .select("slug,title,description")
          .order("sort_order", { ascending: true }),
        supabase
          .from("practice_areas")
          .select(
            "slug,title,summary,featured,sort_order,heading,intro,scope,processes,situations,process_note,meta_title,meta_description",
          )
          .eq("is_active", true)
          .order("sort_order", { ascending: true }),
      ]);

      const areaRows = (areasRes.data ?? []) as PracticeAreaRow[];
      if (areaRows.length === 0) return fallback;

      // Görseller statiktir: veritabanından okunmaz.
      const areaImages: Record<string, { url: string; alt: string }> = { ...staticAreaImages };

      const dbArticles = ((articlesRes.data ?? []) as ArticleRow[]).map(mapArticle);
      const dbSlugs = new Set(dbArticles.map((a) => a.slug));
      // Kod içinde tanımlı yayındaki makaleler, veritabanında yoksa korunur.
      const mergedArticles = [
        ...dbArticles,
        ...staticArticles.filter((a) => a.status === "published" && !dbSlugs.has(a.slug)),
      ].sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1));

      const dbCategories =
        (categoriesRes.data ?? []).length > 0
          ? ((categoriesRes.data ?? []) as CategoryRow[]).map(mapCategory)
          : staticCategories;
      const categorySlugs = new Set(dbCategories.map((c) => c.slug));
      const mergedCategories = [
        ...dbCategories,
        ...staticCategories.filter((c) => !categorySlugs.has(c.slug)),
      ].filter((c) => mergedArticles.some((a) => a.categorySlug === c.slug));

      return {
        articles: mergedArticles,
        categories: mergedCategories,
        areas: areaRows.map(mapPracticeArea),
        areaImages,
      };
    } catch {
      return fallback;
    }
  },
);
