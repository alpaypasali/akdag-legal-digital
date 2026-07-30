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
            "slug,title,excerpt,category_slug,author,published_at,content_updated_at,reading_minutes,related_area_slug,sections,sources,meta_title,meta_description,noindex,status",
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
            "slug,title,summary,featured,sort_order,heading,intro,scope,processes,situations,process_note,image_url,image_alt,meta_title,meta_description",
          )
          .eq("is_active", true)
          .order("sort_order", { ascending: true }),
      ]);

      const areaRows = (areasRes.data ?? []) as PracticeAreaRow[];
      if (areaRows.length === 0) return fallback;

      const areaImages: Record<string, { url: string; alt: string }> = { ...staticAreaImages };
      for (const row of areaRows) {
        if (row.image_url) {
          areaImages[row.slug] = { url: row.image_url, alt: row.image_alt ?? row.title };
        }
      }

      return {
        articles: ((articlesRes.data ?? []) as ArticleRow[]).map(mapArticle),
        categories:
          (categoriesRes.data ?? []).length > 0
            ? ((categoriesRes.data ?? []) as CategoryRow[]).map(mapCategory)
            : staticCategories,
        areas: areaRows.map(mapPracticeArea),
        areaImages,
      };
    } catch {
      return fallback;
    }
  },
);
