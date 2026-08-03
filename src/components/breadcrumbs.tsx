import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";
import { absoluteUrl } from "@/data/site";

export interface Crumb {
  label: string;
  to?: string;
  params?: Record<string, string>;
}

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Sayfa yolu" className="text-xs">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-muted-foreground">
        <li>
          <Link to="/" className="py-1 transition-colors hover:text-foreground">
            Ana Sayfa
          </Link>
        </li>
        {items.map((item, i) => (
          <li key={item.label} className="flex items-center gap-2">
            <ChevronRight className="size-3 text-gold" aria-hidden="true" />
            {item.to && i < items.length - 1 ? (
              <Link
                to={item.to}
                params={item.params as never}
                className="py-1 transition-colors hover:text-foreground"
              >
                {item.label}
              </Link>
            ) : (
              <span aria-current="page" className="text-foreground">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function breadcrumbJsonLd(items: { name: string; item: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { name: "Ana Sayfa", item: "/" },
      ...items,
    ].map((entry, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: entry.name,
      item: absoluteUrl(entry.item),
    })),
  };
}
