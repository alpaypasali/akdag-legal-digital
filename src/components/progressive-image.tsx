import { useEffect, useRef, useState } from "react";
import { srcSetsFor } from "@/lib/responsive-assets";

type Props = React.ImgHTMLAttributes<HTMLImageElement> & {
  src: string;
  alt: string;
};

/**
 * Kademeli (progressive) + duyarlı görsel yükleme.
 * - Varyant üretilmiş görsellerde AVIF/WebP `srcset` ile cihaza uygun,
 *   çok daha küçük dosya indirilir (mobilde ~5-10 KB).
 * - Görsel çözülene kadar koyu mürekkep zemin görünür (CLS yok, sıçrama yok)
 * - Çözüldüğünde yumuşak opaklık geçişi ile belirir
 * - `prefers-reduced-motion` durumunda geçiş devre dışı kalır
 */
export function ProgressiveImage({ className = "", style, sizes, src, ...props }: Props) {
  const ref = useRef<HTMLImageElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // SSR sonrası önbellekten gelen görselleri de yakala
    if (ref.current?.complete) setLoaded(true);
  }, []);

  const sets = srcSetsFor(src);

  const img = (
    <img
      ref={ref}
      src={src}
      sizes={sizes}
      srcSet={sets?.webp ?? undefined}
      onLoad={() => setLoaded(true)}
      data-loaded={loaded ? "true" : "false"}
      className={`img-progressive ${className}`}
      style={style}
      {...props}
    />
  );

  if (!sets) return img;

  return (
    // `display: contents` sayesinde <img> üst kabın yerleşimini korur.
    <picture className="contents">
      {sets.avif ? <source type="image/avif" srcSet={sets.avif} sizes={sizes} /> : null}
      {sets.webp ? <source type="image/webp" srcSet={sets.webp} sizes={sizes} /> : null}
      {img}
    </picture>
  );
}
