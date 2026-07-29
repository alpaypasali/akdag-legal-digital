import { useEffect, useRef, useState } from "react";

type Props = React.ImgHTMLAttributes<HTMLImageElement> & {
  src: string;
  alt: string;
};

/**
 * Kademeli (progressive) görsel yükleme.
 * - Görsel çözülene kadar koyu mürekkep zemin görünür (CLS yok, sıçrama yok)
 * - Çözüldüğünde yumuşak opaklık geçişi ile belirir
 * - `prefers-reduced-motion` durumunda geçiş devre dışı kalır
 */
export function ProgressiveImage({ className = "", style, ...props }: Props) {
  const ref = useRef<HTMLImageElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // SSR sonrası önbellekten gelen görselleri de yakala
    if (ref.current?.complete) setLoaded(true);
  }, []);

  return (
    <img
      ref={ref}
      onLoad={() => setLoaded(true)}
      data-loaded={loaded ? "true" : "false"}
      className={`img-progressive ${className}`}
      style={style}
      {...props}
    />
  );
}
