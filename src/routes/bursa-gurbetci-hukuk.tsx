import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown } from "lucide-react";
import { Breadcrumbs, breadcrumbJsonLd } from "@/components/breadcrumbs";
import { PageHeader } from "@/components/section";
import { faqJsonLd } from "@/data/faqs";
import { absoluteUrl, site } from "@/data/site";
import { trackEvent } from "@/lib/analytics";
import {
  hubFaqs,
  hubSections,
  hubStartSteps,
} from "@/data/gurbetci-hub";
import {
  HubQuickNav,
  HubServiceSection,
} from "@/components/gurbetci/hub-sections";
import { HubCtaButtons, whatsappHref } from "@/components/gurbetci/hub-cta";
import heroImage from "@/assets/hero-books.webp";

const heroTrustPoints: string[] = [
  "WhatsApp üzerinden ilk iletişim",
  "Zaman farkına uygun görüşme planlaması",
  "Yazılı ve düzenli dosya bilgilendirmesi",
  "Meslek sırrı ve gizlilik",
  "Türkiye'ye gelmeden takip edilebilen işlemler",
];


const title = "Bursa Gurbetçi Hukuk ve Gurbetçi Avukat | Akdağ Hukuk";
const description =
  "Bursa gurbetçi hukuk hizmetleri: Yurt dışından vekâletname, miras, boşanma, tapu ve dava takibi. Gurbetçi avukat Bursa hukuki danışmanlık.";
const ogTitle = "Bursa Gurbetçi Hukuk | Akdağ Hukuk";
const ogDescription =
  "Yurt dışında yaşayan vatandaşların Türkiye'deki miras, boşanma, vekâletname, tapu ve dava işlemlerine yönelik hukuki danışmanlık.";
const path = "/bursa-gurbetci-hukuk";
/** Canonical, merkezi site adresinden (src/data/site.ts) üretilir. */
const canonical = absoluteUrl(path);

export const Route = createFileRoute("/bursa-gurbetci-hukuk")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: ogTitle },
      { property: "og:description", content: ogDescription },
      { property: "og:url", content: canonical },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: canonical }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbJsonLd([{ name: "Bursa Gurbetçi Hukuk", item: path }]),
        ),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(faqJsonLd(hubFaqs)),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LegalService",
          name: `Bursa Gurbetçi Hukuk — ${site.name}`,
          url: path,
          areaServed: ["Bursa, Türkiye", "Avrupa"],
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
        }),
      },
    ],
  }),
  component: GurbetciHubPage,
});

function GurbetciHubPage() {
  return (
    <>
      <PageHeader
        eyebrow="Yurt Dışında Yaşayan Vatandaşlara Hukuki Destek"
        title="Bursa Gurbetçi Hukuk ve Yurt Dışı Hukuki Danışmanlık"
        image={heroImage}
        imageAlt=""
        imagePosition="center 40%"
      >
        <Breadcrumbs items={[{ label: "Bursa Gurbetçi Hukuk" }]} />
      </PageHeader>

      <section
        aria-labelledby="hub-giris"
        className="border-b border-border bg-card py-14 md:py-20"
      >
        <div className="container-editorial grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <h2 id="hub-giris" className="sr-only">
              Bursa gurbetçi hukuk hizmetimiz
            </h2>
            <p className="measure text-base text-foreground/85 sm:text-lg">
              Bursa gurbetçi hukuk hizmetimiz; Avrupa ve diğer ülkelerde yaşayan
              vatandaşların Türkiye'deki vekâletname, miras, boşanma, tapu ve
              dava takiplerine ilişkin hukuki ihtiyaçlarına yöneliktir. Bursa
              gurbetçi avukat desteğiyle, uygun işlemler Türkiye'ye gelmeden ve
              konsolosluk aracılığıyla düzenlenen vekâletname üzerinden takip
              edilebilir.
            </p>
            <span aria-hidden="true" className="rule-gold mt-7 block" />
            <p className="measure mt-6 text-muted-foreground">
              Gurbetçi hukuk Bursa hizmetleri kapsamında her dosya kendi
              belgeleri, süreleri ve hukuki koşulları çerçevesinde
              değerlendirilir. Gurbetçi avukat Bursa aramasıyla büromuza ulaşan
              vatandaşlara süreç, gerekli belgeler ve izlenebilecek hukuki
              yollar açık biçimde anlatılır.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href={whatsappHref()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() =>
                  trackEvent("gurbetci_hub_whatsapp_click", {
                    button_location: "hero",
                  })
                }
                className="inline-flex min-h-12 items-center justify-center gap-2 border border-gold bg-gold px-7 text-sm font-semibold text-ink transition-colors hover:bg-transparent hover:text-gold"
              >
                WhatsApp'tan Bilgi Alın
              </a>
              <a
                href="#hizmetler"
                className="inline-flex min-h-12 items-center justify-center gap-2 border border-foreground px-7 text-sm text-foreground transition-colors hover:bg-foreground hover:text-primary-foreground"
              >
                Hizmetleri İnceleyin
                <ArrowDown className="size-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <h3 className="eyebrow">Çalışma Esaslarımız</h3>
            <ul className="mt-5 border-t border-border">
              {heroTrustPoints.map((point, i) => (
                <li
                  key={point}
                  className="flex items-baseline gap-4 border-b border-border py-4"
                >
                  <span className="rule-number">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>


      <HubQuickNav sections={hubSections} />

      {hubSections.map((section, i) => (
        <HubServiceSection key={section.id} section={section} index={i} />
      ))}

      <section
        aria-labelledby="hub-nasil-baslariz"
        className="border-t border-hairline-invert bg-ink py-14 text-ink-foreground md:py-20"
      >
        <div className="container-editorial">
          <div className="flex items-center gap-4">
            <span aria-hidden="true" className="h-px w-8 bg-gold" />
            <p className="eyebrow text-gold">Nasıl Başlarız</p>
          </div>
          <h2
            id="hub-nasil-baslariz"
            className="mt-5 max-w-3xl font-serif text-2xl leading-tight sm:text-3xl lg:text-4xl"
          >
            Türkiye'ye Gelmeden Süreci Başlatın
          </h2>
          <p className="measure mt-5 text-ink-foreground/75">
            Durumunuzu kısaca paylaşın, gerekli belgeleri ve izlenecek yolu
            birlikte netleştirelim.
          </p>

          <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {hubStartSteps.map((step, i) => (
              <li
                key={step.title}
                className="border-t border-gold/50 pt-5"
              >
                <span className="rule-number text-gold">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 font-serif text-lg leading-snug">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-ink-foreground/70">
                  {step.text}
                </p>
              </li>
            ))}
          </ol>

          <div className="mt-10">
            <HubCtaButtons location="nasil_baslariz" tone="dark" />
          </div>
        </div>
      </section>

    </>
  );
}
