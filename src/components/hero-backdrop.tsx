import scalesAsset from "@/assets/hero-scales.webp.asset.json";
import booksAsset from "@/assets/hero-books.webp.asset.json";

/**
 * İki banner görselinin tek kompozisyonda birleştirilmesi.
 * - Kitaplık görseli sol tarafta doku/derinlik katmanı (yumuşak maske ile söner)
 * - Terazi görseli sağ tarafta ana odak
 * Ortak color grading (düşük doygunluk, sıcak-koyu tonlama) her iki katmana da
 * uygulanır; böylece iki ayrı kaynak olduğu algılanmaz.
 */
export function HeroBackdrop() {
  return (
    <div aria-hidden="true" className="absolute inset-0 overflow-hidden bg-ink">
      {/* Katman 1 — kitaplık dokusu (sol) */}
      <img
        src={booksAsset.url}
        alt=""
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 size-full object-cover object-left"
        style={{
          filter: "saturate(0.62) contrast(1.02) brightness(0.72) sepia(0.12)",
          maskImage:
            "linear-gradient(100deg, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.8) 34%, rgba(0,0,0,0.25) 58%, rgba(0,0,0,0) 78%)",
          WebkitMaskImage:
            "linear-gradient(100deg, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.8) 34%, rgba(0,0,0,0.25) 58%, rgba(0,0,0,0) 78%)",
        }}
      />

      {/* Katman 2 — terazi (sağ odak) */}
      <img
        src={scalesAsset.url}
        alt=""
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 size-full object-cover object-[72%_center]"
        style={{
          filter: "saturate(0.7) contrast(1.02) brightness(0.86)",
          maskImage:
            "linear-gradient(100deg, rgba(0,0,0,0) 12%, rgba(0,0,0,0.35) 38%, rgba(0,0,0,0.85) 62%, rgba(0,0,0,1) 80%)",
          WebkitMaskImage:
            "linear-gradient(100deg, rgba(0,0,0,0) 12%, rgba(0,0,0,0.35) 38%, rgba(0,0,0,0.85) 62%, rgba(0,0,0,1) 80%)",
        }}
      />

      {/* Okunabilirlik katmanları — metin tarafı daha koyu, odak korunur */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(96deg, color-mix(in oklab, var(--ink) 92%, transparent) 0%, color-mix(in oklab, var(--ink) 78%, transparent) 42%, color-mix(in oklab, var(--ink) 34%, transparent) 70%, color-mix(in oklab, var(--ink) 52%, transparent) 100%)",
        }}
      />
      {/* Üst karartma: transparan header'ın okunabilirliği */}
      <div
        className="absolute inset-x-0 top-0 h-40"
        style={{
          background:
            "linear-gradient(to bottom, color-mix(in oklab, var(--ink) 82%, transparent), transparent)",
        }}
      />
      {/* Vignette + alt bölüme kesintisiz geçiş */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 90% at 50% 40%, transparent 40%, color-mix(in oklab, var(--ink) 55%, transparent) 100%)",
        }}
      />
      <div
        className="absolute inset-x-0 bottom-0 h-32"
        style={{
          background:
            "linear-gradient(to bottom, transparent, color-mix(in oklab, var(--ink) 90%, transparent))",
        }}
      />
    </div>
  );
}
