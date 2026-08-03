import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { formatDate, type Article } from "@/data/articles";

interface GuideCardsProps {
  articles: Article[];
  /** Koyu (ink) zeminde mi açık zeminde mi gösterileceği. */
  tone?: "light" | "dark";
}

/**
 * Gurbetçi hukuk rehber kartları: başlık, kısa açıklama, yayın tarihi ve
 * "Makaleyi oku" bağlantısı. Ana sayfa ve /bursa-gurbetci-hukuk sayfasında
 * aynı bileşen kullanılır.
 */
export function GuideCards({ articles, tone = "light" }: GuideCardsProps) {
  const dark = tone === "dark";

  return (
    <ul className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {articles.map((article) => (
        <li
          key={article.slug}
          className={
            dark
              ? "flex flex-col border-t border-gold/50 pt-5"
              : "flex flex-col border-t border-border pt-5"
          }
        >
          <p
            className={
              dark
                ? "text-xs text-ink-foreground/60"
                : "text-xs text-muted-foreground"
            }
          >
            <time dateTime={article.publishedAt}>
              {formatDate(article.publishedAt)}
            </time>
            <span aria-hidden="true"> · </span>
            {article.readingMinutes} dk okuma
          </p>
          <h3 className="mt-3 font-serif text-lg leading-snug sm:text-xl">
            <Link
              to="/makaleler/$slug"
              params={{ slug: article.slug }}
              className={
                dark
                  ? "transition-colors hover:text-gold"
                  : "transition-colors hover:text-accent"
              }
            >
              {article.title}
            </Link>
          </h3>
          <p
            className={
              dark
                ? "mt-3 flex-1 text-sm text-ink-foreground/70"
                : "mt-3 flex-1 text-sm text-muted-foreground"
            }
          >
            {article.excerpt}
          </p>
          <Link
            to="/makaleler/$slug"
            params={{ slug: article.slug }}
            className={dark ? "link-underline mt-5 text-sm" : "link-underline mt-5 text-sm"}
          >
            Makaleyi oku
            <ArrowUpRight className="size-3.5 text-gold" aria-hidden="true" />
          </Link>
        </li>
      ))}
    </ul>
  );
}
