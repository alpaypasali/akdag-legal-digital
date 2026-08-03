ALTER TABLE public.articles
  ADD COLUMN IF NOT EXISTS schema_type text NOT NULL DEFAULT 'BlogPosting',
  ADD COLUMN IF NOT EXISTS og_image_url text NOT NULL DEFAULT '',
  ADD COLUMN IF NOT EXISTS faq jsonb NOT NULL DEFAULT '[]'::jsonb;

CREATE TABLE IF NOT EXISTS public.seo_checks (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  kind text NOT NULL DEFAULT 'audit',
  status text NOT NULL DEFAULT 'ok',
  base_url text NOT NULL DEFAULT '',
  checked_count integer NOT NULL DEFAULT 0,
  issue_count integer NOT NULL DEFAULT 0,
  issues jsonb NOT NULL DEFAULT '[]'::jsonb,
  created_at timestamptz NOT NULL DEFAULT now()
);

GRANT SELECT ON public.seo_checks TO authenticated;
GRANT ALL ON public.seo_checks TO service_role;

ALTER TABLE public.seo_checks ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Editors can read seo checks" ON public.seo_checks;
CREATE POLICY "Editors can read seo checks"
ON public.seo_checks FOR SELECT TO authenticated
USING (public.can_edit_content(auth.uid()));

INSERT INTO public.site_settings (key, value, label, description, group_name, placeholder, sort_order, is_public)
VALUES ('site_base_url', '', 'Site adresi (alan adı)', 'Örn: https://www.akdaghukuk.com.tr — canonical, og:url ve sitemap adresleri bu değerden üretilir.', 'genel', 'https://www.akdaghukuk.com.tr', 1, true)
ON CONFLICT (key) DO NOTHING;