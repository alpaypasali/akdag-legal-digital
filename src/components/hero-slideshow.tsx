import { useCallback, useEffect, useState } from "react";

export type HeroSlide = { url: string; alt: string };

const STORAGE_KEY = "akdag:hero-banner";

/**
 * Hero arka planında yavaş geçişli görsel dizisi.
 * İlk kare her zaman DOM'da ve eager yüklenir (LCP).
 * prefers-reduced-motion açıkken geçiş yapılmaz.
 *
 * `picker` açıkken altta küçük görselli bir radio grubu çıkar:
 * hangi banner'ın öne çıkacağı seçilebilir ve seçim tarayıcıda saklanır.
 */
export function HeroSlideshow({
  slides,
  intervalMs = 6500,
  picker = false,
}: {
  slides: HeroSlide[];
  intervalMs?: number;
  picker?: boolean;
}) {
  const [active, setActive] = useState(0);
  const [pinned, setPinned] = useState<number | null>(null);

  // Saklanan tercihi hidrasyondan sonra uygula (SSR uyumsuzluğu olmasın).
  useEffect(() => {
    if (!picker) return;
    const raw = window.localStorage.getItem(STORAGE_KEY);
    const idx = raw === null ? Number.NaN : Number(raw);
    if (Number.isInteger(idx) && idx >= 0 && idx < slides.length) {
      setPinned(idx);
      setActive(idx);
    }
  }, [picker, slides.length]);

  useEffect(() => {
    if (slides.length < 2 || pinned !== null) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const id = window.setInterval(
      () => setActive((i) => (i + 1) % slides.length),
      intervalMs,
    );
    return () => window.clearInterval(id);
  }, [slides.length, intervalMs, pinned]);

  const choose = useCallback((i: number) => {
    setPinned(i);
    setActive(i);
    try {
      window.localStorage.setItem(STORAGE_KEY, String(i));
    } catch {
      /* storage kapalı olabilir */
    }
  }, []);

  const onKeyDown = (e: React.KeyboardEvent, i: number) => {
    const last = slides.length - 1;
    let next: number | null = null;
    if (e.key === "ArrowRight" || e.key === "ArrowDown") next = i === last ? 0 : i + 1;
    if (e.key === "ArrowLeft" || e.key === "ArrowUp") next = i === 0 ? last : i - 1;
    if (next === null) return;
    e.preventDefault();
    choose(next);
    document.getElementById(`hero-banner-${next}`)?.focus();
  };

  return (
    <>
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
            style={{
              transform: i === active ? "scale(1.04)" : "scale(1)",
              transition: "opacity 1600ms ease-in-out, transform 7000ms linear",
            }}
          />
        ))}
      </div>

      {picker && slides.length > 1 ? (
        <div
          role="radiogroup"
          aria-label="Ana sayfa banner görseli seçimi"
          className="absolute bottom-5 right-4 z-20 flex items-center gap-2 border border-hairline-invert bg-ink/70 p-2 backdrop-blur-sm sm:right-6 lg:right-[max(1.5rem,calc((100vw-72rem)/2))]"
        >
          <span className="hidden pl-1 pr-2 text-[0.65rem] uppercase tracking-[0.18em] text-ink-foreground/60 sm:inline">
            Banner
          </span>
          {slides.map((slide, i) => {
            const selected = i === active;
            return (
              <button
                key={slide.url}
                id={`hero-banner-${i}`}
                type="button"
                role="radio"
                aria-checked={selected}
                aria-label={`${i + 1}. banner: ${slide.alt}`}
                tabIndex={selected ? 0 : -1}
                onClick={() => choose(i)}
                onKeyDown={(e) => onKeyDown(e, i)}
                className={`relative h-10 w-16 overflow-hidden border transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-ink ${
                  selected
                    ? "border-gold opacity-100"
                    : "border-hairline-invert opacity-55 hover:opacity-90"
                }`}
              >
                <img
                  src={slide.url}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  className="size-full object-cover"
                />
              </button>
            );
          })}
        </div>
      ) : null}
    </>
  );
}
