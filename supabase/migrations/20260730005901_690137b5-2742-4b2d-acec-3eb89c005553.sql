CREATE TABLE public.site_settings (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  key text NOT NULL UNIQUE,
  value text NOT NULL DEFAULT '',
  label text NOT NULL DEFAULT '',
  description text NOT NULL DEFAULT '',
  group_name text NOT NULL DEFAULT 'genel',
  placeholder text NOT NULL DEFAULT '',
  is_public boolean NOT NULL DEFAULT true,
  sort_order integer NOT NULL DEFAULT 0,
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  updated_at timestamp with time zone NOT NULL DEFAULT now()
);

GRANT SELECT ON public.site_settings TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.site_settings TO authenticated;
GRANT ALL ON public.site_settings TO service_role;

ALTER TABLE public.site_settings ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public settings are readable"
  ON public.site_settings FOR SELECT TO anon
  USING (is_public = true);

CREATE POLICY "Editors read all settings"
  ON public.site_settings FOR SELECT TO authenticated
  USING (is_public = true OR public.can_edit_content(auth.uid()));

CREATE POLICY "Editors manage settings"
  ON public.site_settings FOR ALL TO authenticated
  USING (public.can_edit_content(auth.uid()))
  WITH CHECK (public.can_edit_content(auth.uid()));

CREATE TRIGGER update_site_settings_updated_at
  BEFORE UPDATE ON public.site_settings
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

INSERT INTO public.site_settings (key, label, description, group_name, placeholder, is_public, sort_order) VALUES
  ('google_analytics_id', 'Google Analytics 4 Ölçüm Kimliği', 'GA4 mülkünüzden alınan G- ile başlayan kimlik. Boş bırakılırsa hiçbir ölçüm kodu yüklenmez.', 'google', 'G-XXXXXXXXXX', true, 10),
  ('google_site_verification', 'Google Search Console Doğrulama Kodu', 'Search Console HTML etiketi doğrulamasındaki content değeri. Site <head> bölümüne eklenir.', 'google', 'abc123...', true, 20),
  ('google_maps_url', 'Google Haritalar Bağlantısı', 'Büro konumunun Google Haritalar bağlantısı. İletişim sayfasında kullanılır.', 'google', 'https://maps.app.goo.gl/...', true, 30),
  ('google_maps_embed_url', 'Google Haritalar Gömme Bağlantısı', 'İletişim sayfasındaki harita çerçevesi için embed URL (Paylaş > Harita yerleştir).', 'google', 'https://www.google.com/maps/embed?pb=...', true, 40),
  ('google_business_profile_url', 'Google İşletme Profili Bağlantısı', 'İşletme profiliniz. Yapılandırılmış veride ve iletişim sayfasında kullanılır.', 'google', 'https://www.google.com/maps/place/...', true, 50),
  ('google_review_url', 'Google Yorum Yazma Bağlantısı', 'Ziyaretçilerin yorum bırakabileceği bağlantı.', 'google', 'https://g.page/r/.../review', true, 60),
  ('google_tag_manager_id', 'Google Tag Manager Kimliği', 'İsteğe bağlı. Kullanılmayacaksa boş bırakın.', 'google', 'GTM-XXXXXXX', true, 70),
  ('site_base_url', 'Site Adresi (Alan Adı)', 'Örn. https://akdaghukuk.com.tr — sitemap.xml ve canonical adreslerinde kullanılır.', 'genel', 'https://ornek.com.tr', true, 100);