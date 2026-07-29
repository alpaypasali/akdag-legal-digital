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
  children,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  image?: string;
  imageAlt?: string;
  children?: ReactNode;
}) {
  const dark = Boolean(image);
  return (
    <div
      className={`relative overflow-hidden border-b py-12 md:py-16 ${
        dark
          ? "border-hairline-invert bg-ink text-ink-foreground"
          : "border-border"
      }`}
    >
      {image ? (
        <>
          <img
            src={image}
            alt={imageAlt ?? ""}
            fetchPriority="high"
            decoding="async"
            className="absolute inset-0 size-full object-cover"
          />
          <div aria-hidden="true" className="ink-veil" />
        </>
      ) : null}
      <div className="container-editorial relative">
        {children}
        <p className={`eyebrow mt-6 ${dark ? "text-gold" : ""}`}>{eyebrow}</p>
        <h1 className="mt-4 max-w-4xl font-serif text-3xl leading-[1.15] sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        {intro ? (
          <p
            className={`measure mt-6 text-base sm:text-lg ${
              dark ? "text-ink-foreground/75" : "text-muted-foreground"
            }`}
          >
            {intro}
          </p>
        ) : null}
      </div>
    </div>
  );
}

export function LegalDisclaimer({ text }: { text?: string }) {
  return (
    <aside
      aria-label="Hukuki bilgilendirme"
      className="border-l-2 border-gold bg-muted px-5 py-4"
    >
      <p className="measure text-sm text-muted-foreground">
        {text ?? site.legalNotice}
      </p>
    </aside>
  );
}
