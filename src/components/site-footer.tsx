import { Link } from "@tanstack/react-router";
import { Wordmark } from "@/components/brand";
import { site } from "@/data/site";
import { featuredAreas, secondaryAreas } from "@/data/practice-areas";

const legalLinks = [
  { label: "KVKK Aydınlatma Metni", to: "/kvkk" as const },
  { label: "Gizlilik Politikası", to: "/gizlilik" as const },
  { label: "Çerez Politikası", to: "/cerez-politikasi" as const },
];

const quickLinks = [
  { label: "Hakkımızda", to: "/hakkimizda" as const },
  { label: "Av. Kutay Onat Akdağ", to: "/avukat-kutay-onat-akdag" as const },
  { label: "Çalışma Alanları", to: "/calisma-alanlari" as const },
  { label: "Makaleler", to: "/makaleler" as const },
  { label: "Sıkça Sorulan Sorular", to: "/sikca-sorulan-sorular" as const },
  { label: "İletişim", to: "/iletisim" as const },

];

export function SiteFooter() {
  return (
    <footer className="border-t border-hairline-invert bg-ink text-ink-foreground">
      <div className="container-editorial grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-4">
          <Wordmark tone="invert" />
          <p className="measure mt-6 text-sm text-ink-foreground/70">
            {site.description}
          </p>
        </div>

        <nav aria-label="Hızlı bağlantılar" className="lg:col-span-2">
          <h2 className="eyebrow text-ink-foreground/50">Hızlı Bağlantılar</h2>
          <ul className="mt-5 space-y-3 text-sm">
            {quickLinks.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="inline-block py-1 text-ink-foreground/80 transition-colors hover:text-gold"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Çalışma alanları" className="lg:col-span-3">
          <h2 className="eyebrow text-ink-foreground/50">Çalışma Alanları</h2>
          <ul className="mt-5 space-y-3 text-sm">
            {[...featuredAreas, ...secondaryAreas.slice(0, 3)].map((a) => (
              <li key={a.slug}>
                <Link
                  to="/calisma-alanlari/$slug"
                  params={{ slug: a.slug }}
                  className="inline-block py-1 text-ink-foreground/80 transition-colors hover:text-gold"
                >
                  {a.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="lg:col-span-3">
          <h2 className="eyebrow text-ink-foreground/50">İletişim</h2>
          <address className="mt-5 space-y-3 text-sm not-italic text-ink-foreground/80">
            <p>
              {site.contact.addressLine}
              <br />
              {site.contact.district} / {site.contact.city}
            </p>
            <p>{site.contact.phoneLabel}</p>
            <p>
              <a
                href={`mailto:${site.contact.email}`}
                className="transition-colors hover:text-gold"
              >
                {site.contact.email}
              </a>
            </p>
            <p>{site.contact.hours}</p>
          </address>
        </div>
      </div>

      <div className="container-editorial border-t border-hairline-invert py-8">
        <p className="measure text-xs leading-relaxed text-ink-foreground/55">
          {site.legalNotice}
        </p>
        <div className="mt-6 flex flex-col gap-4 border-t border-hairline-invert pt-6 text-xs text-ink-foreground/55 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}. Tüm hakları saklıdır.
          </p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {legalLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="py-1 transition-colors hover:text-gold">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
