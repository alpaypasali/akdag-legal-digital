import { createFileRoute } from "@tanstack/react-router";
import { Breadcrumbs, breadcrumbJsonLd } from "@/components/breadcrumbs";
import { PageHeader, SectionLabel } from "@/components/section";
import { faqJsonLd } from "@/data/faqs";
import { site } from "@/data/site";
import {
  hubFaqs,
  hubNotice,
  hubSections,
  hubStartSteps,
  hubTrustPoints,
} from "@/data/gurbetci-hub";
import {
  HubQuickNav,
  HubServiceSection,
  HubSteps,
} from "@/components/gurbetci/hub-sections";
import { HubCtaButtons } from "@/components/gurbetci/hub-cta";
import { HubAppointmentForm } from "@/components/gurbetci/hub-appointment-form";
import heroImage from "@/assets/hero-books.webp";

const title =
  "Yurt Dışında Yaşayan Türkler için Hukuki Danışmanlık | Akdağ Hukuk";
const description =
  "Avrupa'da yaşayan Türk vatandaşları için vekaletname, miras, boşanma ve askerlik konularında Türkiye'ye gelmeden hukuki destek. WhatsApp üzerinden ön görüşme.";
const path = "/gurbetci-hub";

export const Route = createFileRoute("/gurbetci-hub")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: path },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: path }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbJsonLd([{ name: "Gurbetçi Hub", item: path }]),
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
          name: site.name,
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
        eyebrow="Yurt Dışındaki Türk Vatandaşlarına Özel"
        title="Yurt Dışında Yaşayan Türkler için Hukuki Danışmanlık"
        image={heroImage}
        imageAlt=""
        imagePosition="center 40%"
      >
        <Breadcrumbs items={[{ label: "Gurbetçi Hub" }]} />
      </PageHeader>

      <section
        aria-labelledby="hub-giris"
        className="border-b border-border bg-card py-14 md:py-20"
      >
        <div className="container-editorial grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <h2
              id="hub-giris"
              className="font-serif text-2xl leading-tight sm:text-3xl"
            >
              Türkiye'ye gelmenize gerek yok.
            </h2>
            <p className="measure mt-6 text-muted-foreground">
              Avrupa'da yaşayan birçok vatandaşımız, Türkiye'deki hukuki bir
              işlemi yalnızca Türkiye'ye gelemediği için erteliyor. Miras,
              boşanma, tapu işlemleri veya dava takibi gibi süreçleri,
              konsolosluktan düzenlenecek uygun bir vekâletnameyle Türkiye'ye
              gelmeden bizimle birlikte yürütebilirsiniz.
            </p>
            <p className="measure mt-4 text-muted-foreground">
              Süreç boyunca WhatsApp üzerinden düzenli olarak
              bilgilendirilirsiniz.
            </p>
            <div className="mt-8">
              <HubCtaButtons location="hero" />
            </div>
          </div>

          <div className="lg:col-span-5">
            <h3 className="eyebrow">Çalışma Esaslarımız</h3>
            <ul className="mt-5 border-t border-border">
              {hubTrustPoints.map((point, i) => (
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
