import { useEffect, useState } from "react";

export type HeroSlide = { url: string; alt: string };

/**
 * Hero arka planında yavaş geçişli görsel dizisi.
 * İlk kare her zaman DOM'da ve eager yüklenir (LCP).
 * prefers-reduced-motion açıkken geçiş yapılmaz.
 */
export function HeroSlideshow({
  slides,
  intervalMs = 6500,
}: {
  slides: HeroSlide[];
  intervalMs?: number;
}) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (slides.length < 2) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const id = window.setInterval(
      () => setActive((i) => (i + 1) % slides.length),
      intervalMs,
    );
    return () => window.clearInterval(id);
  }, [slides.length, intervalMs]);

  return (
    <div aria-hidden="true" className="absolute inset-0 overflow-hidden bg-ink">
      {slides.map((slide, i) => (
        <img
          key={slide.url}
          src={slide.url}
          alt=""
          fetchPriority={i === 0 ? "high" : "low"}
          loading={i === 0 ? "eager" : "lazy"}
          decoding="async"
          className={`absolute inset-0 size-full object-cover transition-opacity duration-[1600ms] ease-in-out ${
            i === active ? "opacity-100" : "opacity-0"
          }`}
          style={{ transform: i === active ? "scale(1.04)" : "scale(1)", transition: "opacity 1600ms ease-in-out, transform 7000ms linear" }}
        />
      ))}
    </div>
  );
}
