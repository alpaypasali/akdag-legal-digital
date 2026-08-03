import { createServerFn } from "@tanstack/react-start";
import { createClient } from "@supabase/supabase-js";

import type { Database } from "@/integrations/supabase/types";

/**
 * Yönetim panelinden girilen site ayarları (Google entegrasyonları vb.).
 * Değerler veritabanındaki `site_settings` tablosundan okunur; tablo boşsa
 * ayar kullanılmıyor kabul edilir ve ilgili özellik devre dışı kalır.
 */
export type SiteSettings = Record<string, string>;

export const SETTING_KEYS = {
  gaId: "google_analytics_id",
  siteVerification: "google_site_verification",
  mapsUrl: "google_maps_url",
  mapsEmbedUrl: "google_maps_embed_url",
  businessProfileUrl: "google_business_profile_url",
  reviewUrl: "google_review_url",
  gtmId: "google_tag_manager_id",
  baseUrl: "site_base_url",
} as const;

export const fetchSiteSettings = createServerFn({ method: "GET" }).handler(
  async (): Promise<SiteSettings> => {
    try {
      const url = process.env.SUPABASE_URL;
      const key = process.env.SUPABASE_PUBLISHABLE_KEY;
      if (!url || !key) return {};

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

      const { data } = await supabase
        .from("site_settings")
        .select("key,value")
        .eq("is_public", true);

      const out: SiteSettings = {};
      for (const row of data ?? []) {
        const value = (row.value ?? "").trim();
        if (value) out[row.key] = value;
      }
      // Panelden kaydedilen alan adı, sunucu tarafında canonical/og:url
      // üretimine anında yansıtılır.
      setSiteUrlOverride(out[SETTING_KEYS.baseUrl]);
      return out;

    } catch {
      return {};
    }
  },
);
