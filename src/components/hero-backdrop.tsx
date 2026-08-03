import { ProgressiveImage } from "@/components/progressive-image";
import scalesAsset from "@/assets/hero-scales.webp";
import booksAsset from "@/assets/hero-books.webp";

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
      <ProgressiveImage
        src={booksAsset}
        alt=""
        width={1600}
        height={1060}
        fetchPriority="high"
        decoding="async"
        sizes="100vw"
        className="absolute inset-0 size-full object-cover object-left"
        style={{
          filter: "saturate(0.78) contrast(1.04) brightness(0.9) sepia(0.06)",
          maskImage:
            "linear-gradient(100deg, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.8) 34%, rgba(0,0,0,0.25) 58%, rgba(0,0,0,0) 78%)",
          WebkitMaskImage:
            "linear-gradient(100deg, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.8) 34%, rgba(0,0,0,0.25) 58%, rgba(0,0,0,0) 78%)",
        }}
      />

      {/* Katman 2 — terazi (sağ odak) */}
      <ProgressiveImage
        src={scalesAsset}
        alt=""
        width={1600}
        height={854}
        fetchPriority="high"
        decoding="async"
        sizes="100vw"
        className="absolute inset-0 size-full object-cover object-[72%_center]"
        style={{
          filter: "saturate(0.86) contrast(1.04) brightness(1.02)",
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
            "linear-gradient(96deg, color-mix(in oklab, var(--ink) 80%, transparent) 0%, color-mix(in oklab, var(--ink) 58%, transparent) 42%, color-mix(in oklab, var(--ink) 16%, transparent) 70%, color-mix(in oklab, var(--ink) 30%, transparent) 100%)",
        }}
      />
      {/* Üst karartma: transparan header'ın okunabilirliği */}
      <div
        className="absolute inset-x-0 top-0 h-40"
        style={{
          background:
            "linear-gradient(to bottom, color-mix(in oklab, var(--ink) 62%, transparent), transparent)",
        }}
      />
      {/* Vignette + alt bölüme kesintisiz geçiş */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 90% at 50% 40%, transparent 46%, color-mix(in oklab, var(--ink) 38%, transparent) 100%)",
        }}
      />
      <div
        className="absolute inset-x-0 bottom-0 h-32"
        style={{
          background:
            "linear-gradient(to bottom, transparent, color-mix(in oklab, var(--ink) 72%, transparent))",
        }}
      />
    </div>
  );
}
