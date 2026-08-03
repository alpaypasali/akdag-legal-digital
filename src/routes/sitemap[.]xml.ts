import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { siteUrl } from "@/data/site";
import { fetchSiteContent } from "@/lib/content.functions";
import { fetchSiteSettings, SETTING_KEYS } from "@/lib/settings.functions";

// Alan adı yönetim panelindeki "Site Adresi" ayarından okunur; boşsa göreli
// adresler kullanılır.

interface SitemapEntry {
  path: string;
  lastmod?: string;
  changefreq?:
    | "always"
    | "hourly"
    | "daily"
    | "weekly"
    | "monthly"
    | "yearly"
    | "never";
  priority?: string;
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const [content, settings] = await Promise.all([
          fetchSiteContent(),
          fetchSiteSettings(),
        ]);
        // Panelde adres tanımlı değilse merkezi site adresi kullanılır;
        // sitemap içindeki adresler her zaman mutlaktır.
        const BASE_URL = (settings[SETTING_KEYS.baseUrl]?.trim() || siteUrl).replace(
          /\/$/,
          "",
        );

        const entries: SitemapEntry[] = [
          { path: "/", changefreq: "weekly", priority: "1.0" },
          { path: "/hakkimizda", changefreq: "yearly", priority: "0.7" },
          {
            path: "/avukat-kutay-onat-akdag",
            changefreq: "yearly",
            priority: "0.7",
          },
          { path: "/calisma-alanlari", changefreq: "monthly", priority: "0.9" },
          ...content.areas.map<SitemapEntry>((a) => ({
            path: `/calisma-alanlari/${a.slug}`,
            changefreq: "monthly",
            priority: "0.8",
          })),
          { path: "/bursa-gurbetci-hukuk", changefreq: "monthly", priority: "0.9" },
          { path: "/makaleler", changefreq: "weekly", priority: "0.8" },
          ...content.categories.map<SitemapEntry>((c) => ({
            path: `/makaleler/kategori/${c.slug}`,
            changefreq: "weekly",
            priority: "0.6",
          })),
          ...content.articles
            .filter((a) => !a.noindex && a.status !== "draft")
            .map<SitemapEntry>((a) => ({
              path: `/makaleler/${a.slug}`,
              lastmod: a.updatedAt ?? a.publishedAt,
              changefreq: "yearly",
              priority: "0.7",
            })),
          {
            path: "/sikca-sorulan-sorular",
            changefreq: "monthly",
            priority: "0.7",
          },
          { path: "/iletisim", changefreq: "yearly", priority: "0.9" },

          { path: "/kvkk", changefreq: "yearly", priority: "0.3" },
          { path: "/gizlilik", changefreq: "yearly", priority: "0.3" },
          { path: "/cerez-politikasi", changefreq: "yearly", priority: "0.3" },
        ];

        const urls = entries.map((e) =>
          [
            `  <url>`,
            `    <loc>${BASE_URL}${e.path}</loc>`,
            e.lastmod ? `    <lastmod>${e.lastmod}</lastmod>` : null,
            e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
            e.priority ? `    <priority>${e.priority}</priority>` : null,
            `  </url>`,
          ]
            .filter(Boolean)
            .join("\n"),
        );

        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`,
        ].join("\n");

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
