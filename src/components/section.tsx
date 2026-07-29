import type { ReactNode } from "react";
import { site } from "@/data/site";

export function SectionLabel({
  index,
  children,
}: {
  index?: string;
  children: ReactNode;
}) {
  return (
    <div className="flex items-center gap-4">
      {index ? <span className="rule-number">{index}</span> : null}
      <span className="eyebrow">{children}</span>
      <span aria-hidden="true" className="h-px flex-1 bg-border" />
    </div>
  );
}

export function PageHeader({
  eyebrow,
  title,
  intro,
  image,
  imageAlt,
  imagePosition = "center",
  children,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  image?: string;
  imageAlt?: string;
  /** Görselin önemli detaylarının başlık/menü arkasında kalmaması için. */
  imagePosition?: string;
  children?: ReactNode;
}) {
  const dark = Boolean(image);

  if (!dark) {
    return (
      <div className="relative overflow-hidden border-b border-border py-12 md:py-16">
        <div className="container-editorial relative">
          {children}
          <p className="eyebrow mt-6">{eyebrow}</p>
          <h1 className="mt-4 max-w-4xl font-serif text-3xl leading-[1.15] sm:text-4xl lg:text-5xl">
            {title}
          </h1>
          {intro ? (
            <p className="measure mt-6 text-base text-muted-foreground sm:text-lg">
              {intro}
            </p>
          ) : null}
        </div>
      </div>
    );
  }

  return (
    <div className="relative flex min-h-[440px] flex-col justify-end overflow-hidden bg-ink pb-12 pt-28 text-ink-foreground md:min-h-[600px] md:pb-16 md:pt-40">
      <img
        src={image}
        alt={imageAlt ?? ""}
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 size-full object-cover"
        style={{
          objectPosition: imagePosition,
          filter: "saturate(0.68) contrast(1.04) brightness(0.86) sepia(0.1)",
        }}
      />
      {/* Ortak grading + okunabilirlik katmanları */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(96deg, color-mix(in oklab, var(--ink) 93%, transparent) 0%, color-mix(in oklab, var(--ink) 80%, transparent) 44%, color-mix(in oklab, var(--ink) 42%, transparent) 74%, color-mix(in oklab, var(--ink) 58%, transparent) 100%)",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-40"
        style={{
          background:
            "linear-gradient(to bottom, color-mix(in oklab, var(--ink) 80%, transparent), transparent)",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 90% at 50% 40%, transparent 42%, color-mix(in oklab, var(--ink) 52%, transparent) 100%)",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-28"
        style={{
          background:
            "linear-gradient(to bottom, transparent, color-mix(in oklab, var(--ink) 78%, transparent))",
        }}
      />

      <div className="container-editorial relative">
        <div className="[&_a:hover]:text-gold [&_a]:text-ink-foreground/70 [&_li]:text-ink-foreground/70 [&_ol]:text-ink-foreground/70 [&_span[aria-current]]:text-ink-foreground">
          {children}
        </div>
        <div className="mt-7 flex items-center gap-4">
          <span aria-hidden="true" className="h-px w-8 bg-gold" />
          <p className="eyebrow text-gold">{eyebrow}</p>
        </div>
        <div className="relative mt-5 pl-6">
          <span
            aria-hidden="true"
            className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-gold via-gold/25 to-transparent"
          />
          <h1 className="max-w-4xl font-serif text-3xl leading-[1.12] sm:text-4xl lg:text-5xl">
            {title}
          </h1>
        </div>
        {intro ? (
          <p className="measure mt-6 pl-6 text-base text-ink-foreground/75 sm:text-lg">
            {intro}
          </p>
        ) : null}
      </div>

      {/* İçeriğe kontrollü geçiş: ince altın çizgi */}
      <span
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold/70 to-transparent"
      />
    </div>
  );
}

export function LegalDisclaimer({ text }: { text?: string }) {
  return (
    <div
      role="note"
      aria-label="Hukuki bilgilendirme"
      className="border-l-2 border-gold bg-muted px-5 py-4"
    >
      <p className="measure text-sm text-muted-foreground">
        {text ?? site.legalNotice}
      </p>
    </div>
  );
}
