import archAsset from "@/assets/arch-columns.webp";

/**
 * Açık/beyaz bölümlerin ortak mimari arka planı.
 * Tek bir sabit (fixed) katman: sütun fotoğrafı sayfa boyunca kesilmeden,
 * tekrar etmeden yukarıdan aşağı uzanır. Üzerine sıcak kemik/taş beji
 * yüzey katmanı gelir; fotoğraf %12–25 yoğunlukta hissedilir.
 * Hafif dikey drift yalnızca masaüstünde ve hareket tercihi açıkken çalışır
 * (CSS scroll timeline; JS yok).
 */
export function ArchBackdrop() {
  return (
    <div aria-hidden="true" className="arch-backdrop">
      <img
        src={archAsset}
        alt=""
        width={1920}
        height={1280}
        loading="lazy"
        decoding="async"
        className="arch-backdrop__img"
      />
      <span className="arch-backdrop__veil" />
    </div>
  );
}
