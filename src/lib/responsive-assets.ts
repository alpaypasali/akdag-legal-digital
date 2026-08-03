/**
 * Duyarlı görsel varyantları için merkezi kayıt.
 *
 * `scripts/gen-responsive.py` her kaynak görsel için `src/assets/rw/`
 * altında `<ad>-<genislik>.avif` ve `.webp` dosyaları üretir. Burada bu
 * dosyalar derleme anında toplanır ve `srcset` dizeleri hazırlanır.
 */

const files = import.meta.glob("../assets/rw/*.{avif,webp}", {
  eager: true,
  query: "?url",
  import: "default",
}) as Record<string, string>;

type Variant = { width: number; url: string };
type Entry = { avif: Variant[]; webp: Variant[]; maxWidth: number };

const registry: Record<string, Entry> = {};

for (const [path, url] of Object.entries(files)) {
  const file = path.split("/").pop() ?? "";
  const match = file.match(/^(.+)-(\d+)\.(avif|webp)$/);
  if (!match) continue;
  const [, name, widthText, format] = match;
  const width = Number(widthText);
  const entry = (registry[name] ??= { avif: [], webp: [], maxWidth: 0 });
  entry[format as "avif" | "webp"].push({ width, url });
  entry.maxWidth = Math.max(entry.maxWidth, width);
}

for (const entry of Object.values(registry)) {
  entry.avif.sort((a, b) => a.width - b.width);
  entry.webp.sort((a, b) => a.width - b.width);
}

const names = Object.keys(registry).sort((a, b) => b.length - a.length);

/** Verilen görsel adresinden (hash'li olabilir) varyant kaydını bulur. */
export function findVariants(src: string): Entry | null {
  const file = src.split("?")[0].split("/").pop() ?? "";
  const base = file.replace(/\.[a-z0-9]+$/i, "");
  const name = names.find((n) => base === n || base.startsWith(`${n}-`) || base.startsWith(n));
  return name ? registry[name] : null;
}

function toSrcSet(variants: Variant[]) {
  return variants.map((v) => `${v.url} ${v.width}w`).join(", ");
}

/** `<source>` etiketleri için avif/webp srcset dizeleri. */
export function srcSetsFor(src: string) {
  const entry = findVariants(src);
  if (!entry) return null;
  return {
    avif: entry.avif.length ? toSrcSet(entry.avif) : null,
    webp: entry.webp.length ? toSrcSet(entry.webp) : null,
    maxWidth: entry.maxWidth,
  };
}

/**
 * LCP görselleri için ön yükleme (preload) bilgisi: en küçük mobil
 * varyant tarayıcıya erkenden bildirilir.
 */
export function preloadFor(src: string, sizes: string) {
  const entry = findVariants(src);
  if (!entry || entry.avif.length === 0) return null;
  return {
    href: entry.avif[0].url,
    imageSrcSet: toSrcSet(entry.avif),
    imageSizes: sizes,
    type: "image/avif",
  };
}

/**
 * `head().links` içinde kullanılan LCP ön yükleme etiketleri.
 * Varyant varsa AVIF srcset ile mobilde yalnızca küçük dosya indirilir.
 */
export function imagePreloadLinks(src: string, sizes = "100vw") {
  const preload = preloadFor(src, sizes);
  if (!preload) {
    return [
      { rel: "preload", as: "image", href: src, fetchPriority: "high" as const },
    ];
  }
  return [
    {
      rel: "preload",
      as: "image",
      href: preload.href,
      imageSrcSet: preload.imageSrcSet,
      imageSizes: preload.imageSizes,
      type: preload.type,
      fetchPriority: "high" as const,
    },
  ];
}
