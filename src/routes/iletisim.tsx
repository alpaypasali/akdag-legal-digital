import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone, Clock } from "lucide-react";
import { PageHeader } from "@/components/section";
import { Breadcrumbs, breadcrumbJsonLd } from "@/components/breadcrumbs";
import { ContactForm } from "@/components/contact-form";
import { trackEvent } from "@/lib/analytics";
import { site } from "@/data/site";
import { fetchSiteSettings, SETTING_KEYS } from "@/lib/settings.functions";
import headerAsset from "@/assets/hero-iletisim.webp";

const title = "İletişim | Akdağ Hukuk ve Danışmanlık — Bursa";
const description =
  "Akdağ Hukuk ve Danışmanlık ile Bursa'da görüşme talebi oluşturun. İletişim formu, e-posta ve büro çalışma saatleri.";

export const Route = createFileRoute("/iletisim")({
  loader: () => fetchSiteSettings(),
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/iletisim" },
    ],
    links: [
      { rel: "canonical", href: "/iletisim" },
      {
        rel: "preload",
        as: "image",
        href: headerAsset,
        fetchPriority: "high" as const,
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LegalService",
          name: site.name,
          areaServed: site.region,
          email: site.contact.email,
          telephone: site.contact.phoneHref,
          address: {
            "@type": "PostalAddress",
            streetAddress: site.contact.addressLine,
            postalCode: site.contact.postalCode,
            addressLocality: site.contact.district,
            addressRegion: site.contact.city,
            addressCountry: "TR",
          },
          openingHours: "Mo-Fr 09:00-18:00",
          url: "/iletisim",
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbJsonLd([{ name: "İletişim", item: "/iletisim" }]),
        ),
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const settings = Route.useLoaderData();
  // Harita ve işletme profili bağlantıları yönetim panelinden değiştirilebilir.
  const mapUrl =
    settings?.[SETTING_KEYS.mapsUrl] ??
    settings?.[SETTING_KEYS.businessProfileUrl] ??
    site.contact.mapUrl;
  const reviewUrl = settings?.[SETTING_KEYS.reviewUrl];
  return (
    <>
      <PageHeader
        eyebrow="İletişim"
        title="Görüşme talebi ve büro bilgileri"
        image={headerAsset}
        imageAlt="Adalet heykeli, defterler ve dolma kalemin bulunduğu koyu tonlu büro masası"
        imagePosition="78% center"
        intro="Aşağıdaki formu doldurarak ya da e-posta yoluyla büroya ulaşabilirsiniz. Talebiniz incelendikten sonra tarafınıza dönüş yapılır."
      >
        <Breadcrumbs items={[{ label: "İletişim" }]} />
      </PageHeader>

      <div className="container-editorial grid gap-14 py-12 md:py-16 lg:grid-cols-12 lg:gap-16">

        <section aria-labelledby="form-baslik" className="lg:col-span-7">
          <h2 id="form-baslik" className="font-serif text-2xl sm:text-3xl">
            İletişim formu
          </h2>
          <p className="measure mt-3 text-sm text-muted-foreground">
            {site.formNotice}
          </p>
          <div className="mt-8">
            <ContactForm />
          </div>
        </section>

        <aside className="lg:col-span-5">
          <h2 className="font-serif text-2xl sm:text-3xl">Büro</h2>
          <dl className="mt-6 border-t border-border">
            <div className="grid grid-cols-[auto_1fr] gap-x-4 border-b border-border py-5">
              <MapPin
                className="row-span-2 mt-1 size-5 shrink-0 text-gold-ink"
                aria-hidden="true"
              />
              <dt className="eyebrow">Adres</dt>
              <dd className="col-start-2 mt-1 text-sm text-muted-foreground">
                {site.contact.addressLine}
                <br />
                {site.contact.postalCode} {site.contact.district} / {site.contact.city}
              </dd>
            </div>
            <div className="grid grid-cols-[auto_1fr] gap-x-4 border-b border-border py-5">
              <Phone
                className="row-span-2 mt-1 size-5 shrink-0 text-gold-ink"
                aria-hidden="true"
              />
              <dt className="eyebrow">Telefon</dt>
              <dd className="col-start-2 mt-1 text-sm text-muted-foreground">
                {site.contact.phoneHref ? (
                  <a
                    href={`tel:${site.contact.phoneHref}`}
                    onClick={() => trackEvent("click_phone", { button_location: "contact_page" })}
                    className="link-underline"
                  >
                    {site.contact.phoneLabel}
                  </a>
                ) : (
                  site.contact.phoneLabel
                )}
              </dd>
            </div>
            <div className="grid grid-cols-[auto_1fr] gap-x-4 border-b border-border py-5">
              <Mail
                className="row-span-2 mt-1 size-5 shrink-0 text-gold-ink"
                aria-hidden="true"
              />
              <dt className="eyebrow">E-posta</dt>
              <dd className="col-start-2 mt-1 min-w-0 text-sm text-muted-foreground">
                <a
                  href={`mailto:${site.contact.email}`}
                  onClick={() => trackEvent("click_email", { button_location: "contact_page" })}
                  className="link-underline break-all"
                >
                  {site.contact.email}
                </a>
              </dd>
            </div>
            <div className="grid grid-cols-[auto_1fr] gap-x-4 border-b border-border py-5">
              <Clock
                className="row-span-2 mt-1 size-5 shrink-0 text-gold-ink"
                aria-hidden="true"
              />
              <dt className="eyebrow">Çalışma saatleri</dt>
              <dd className="col-start-2 mt-1 text-sm text-muted-foreground">
                {site.contact.hours}
              </dd>
            </div>
          </dl>

          <a
            href={mapUrl}
            onClick={() => trackEvent("click_map", { button_location: "contact_page" })}
            target="_blank"
            rel="noreferrer noopener"
            className="mt-6 inline-flex min-h-12 items-center border border-foreground px-6 text-sm transition-colors hover:bg-secondary"
          >
            Haritada görüntüle
          </a>

          {reviewUrl ? (
            <a
              href={reviewUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="mt-3 inline-flex min-h-12 items-center px-1 text-sm underline underline-offset-4 transition-colors hover:text-gold-ink"
            >
              Google'da yorum bırakın
            </a>
          ) : null}

        </aside>
      </div>
    </>
  );
}
