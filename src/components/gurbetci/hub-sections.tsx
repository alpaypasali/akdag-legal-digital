import {
  FileSignature,
  ScrollText,
  HeartCrack,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";
import { FaqList } from "@/components/faq-list";
import { SectionLabel } from "@/components/section";
import type { HubSection, HubStep } from "@/data/gurbetci-hub";
import { whatsappHref } from "@/components/gurbetci/hub-cta";
import { trackEvent } from "@/lib/analytics";

const icons: Record<HubSection["icon"], LucideIcon> = {
  "file-signature": FileSignature,
  "scroll-text": ScrollText,
  "heart-crack": HeartCrack,
  "shield-check": ShieldCheck,
};

export function HubQuickNav({ sections }: { sections: HubSection[] }) {
  return (
    <nav
      id="hizmetler"
      aria-label="Hizmet bölümleri"
      className="container-editorial scroll-mt-28 py-12 md:py-16"
    >
      <SectionLabel index="01">Hızlı Geçiş</SectionLabel>
      <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {sections.map((s) => {
          const Icon = icons[s.icon];
          return (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                className="group flex min-h-24 items-start gap-4 border border-border bg-card p-5 transition-colors hover:border-gold"
              >
                <Icon
                  className="mt-0.5 size-5 shrink-0 text-gold"
                  aria-hidden="true"
                />
                <span className="font-serif text-lg leading-snug transition-colors group-hover:text-gold">
                  {s.navLabel}
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export function HubSteps({
  heading,
  steps,
  headingLevel = "h3",
}: {
  heading: string;
  steps: HubStep[];
  headingLevel?: "h3" | "h4";
}) {
  const Heading = headingLevel;
  const ItemHeading = headingLevel === "h3" ? "h4" : "h5";

  return (
    <div>
      <Heading className="font-serif text-xl sm:text-2xl">{heading}</Heading>
      <ol className="mt-6 border-t border-border">
        {steps.map((step, i) => (
          <li
            key={step.title}
            className="grid gap-2 border-b border-border py-5 sm:grid-cols-[auto_1fr] sm:gap-6"
          >
            <span className="rule-number pt-1">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div>
              <ItemHeading className="font-serif text-lg leading-snug">
                {step.title}
              </ItemHeading>
              <p className="measure mt-2 text-muted-foreground">{step.text}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

export function HubServiceSection({
  section,
  index,
}: {
  section: HubSection;
  index: number;
}) {
  const Icon = icons[section.icon];
  const headingId = `${section.id}-baslik`;
  const faqHeadingId = `${section.id}-sss`;

  return (
    <section
      id={section.id}
      aria-labelledby={headingId}
      className="scroll-mt-28 border-t border-border py-14 md:py-20"
    >
      <div className="container-editorial">
        <SectionLabel index={String(index + 2).padStart(2, "0")}>
          {section.navLabel}
        </SectionLabel>

        <div className="mt-8 grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Icon className="size-7 text-gold" aria-hidden="true" />
            <h2
              id={headingId}
              className="mt-5 font-serif text-2xl leading-tight sm:text-3xl lg:text-4xl"
            >
              {section.title}
            </h2>
            <p className="mt-4 text-base text-gold-ink sm:text-lg">
              {section.subtitle}
            </p>
            <p className="measure mt-6 text-muted-foreground">
              {section.description}
            </p>

            {section.serviceList ? (
              <div className="mt-8 border-l-2 border-gold pl-5">
                <h3 className="font-serif text-lg">
                  {section.serviceListTitle}
                </h3>
                <ul className="mt-4 space-y-3">
                  {section.serviceList.map((item) => (
                    <li key={item} className="flex gap-4">
                      <span
                        aria-hidden="true"
                        className="mt-2.5 h-px w-4 shrink-0 bg-gold"
                      />
                      <span className="text-sm text-muted-foreground">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>

          <div className="lg:col-span-7">
            <HubSteps heading={section.stepsTitle} steps={section.steps} />

            <div className="mt-12">
              <h3 id={faqHeadingId} className="font-serif text-xl sm:text-2xl">
                Sıkça sorulan sorular
              </h3>
              <FaqList items={section.faqs} headingId={faqHeadingId} />
            </div>

            <a
              href={whatsappHref(
                `Merhaba, yurt dışında yaşıyorum. ${section.navLabel} konusunda bilgi almak istiyorum.`,
              )}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() =>
                trackEvent("gurbetci_hub_whatsapp_click", {
                  button_location: section.id,
                })
              }
              className="mt-10 inline-flex min-h-12 items-center justify-center gap-2 border border-gold bg-gold px-7 text-sm font-semibold text-ink transition-colors hover:bg-transparent hover:text-gold"
            >
              WhatsApp'tan Bu Konuda Yazın
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
