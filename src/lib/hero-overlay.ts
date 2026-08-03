/**
 * Header'ın hero görselinin üzerine bindiği (transparan başlayan) rotalar.
 * Bu rotalarda sayfa girişi koyu, görselli bir hero ile başlar.
 */
const OVERLAY_ROUTES = new Set([
  "/",
  "/hakkimizda",
  "/avukat-kutay-onat-akdag",
  "/calisma-alanlari",
  "/makaleler",
  "/gurbetci-hub",
  "/iletisim",
]);

export function isOverlayRoute(pathname: string): boolean {
  const path =
    pathname.length > 1 && pathname.endsWith("/")
      ? pathname.slice(0, -1)
      : pathname;
  if (OVERLAY_ROUTES.has(path)) return true;
  // Çalışma alanı detay sayfaları da koyu görselli hero kullanır.
  return path.startsWith("/calisma-alanlari/");
}
