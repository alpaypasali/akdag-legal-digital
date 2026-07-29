import type { ReactNode } from "react";
import { PageHeader } from "@/components/section";
import { Breadcrumbs } from "@/components/breadcrumbs";

export interface LegalSection {
  heading: string;
  paragraphs?: string[];
  list?: string[];
}

export function LegalPage({
  eyebrow,
  title,
  intro,
  sections,
  footer,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  sections: LegalSection[];
  footer?: ReactNode;
}) {
  return (
    <>
      <PageHeader eyebrow={eyebrow} title={title} intro={intro}>
        <Breadcrumbs items={[{ label: title }]} />
      </PageHeader>

      <div className="container-editorial py-12 md:py-16">
        <div className="measure">
          {sections.map((section, i) => (
            <section key={section.heading} className="mb-10">
              <h2 className="font-serif text-xl sm:text-2xl">
                <span className="mr-3 text-sm text-gold tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {section.heading}
              </h2>
              {section.paragraphs?.map((p) => (
                <p key={p} className="mt-4 text-muted-foreground">
                  {p}
                </p>
              ))}
              {section.list ? (
                <ul className="mt-4 space-y-2">
                  {section.list.map((li) => (
                    <li key={li} className="flex gap-4">
                      <span
                        aria-hidden="true"
                        className="mt-2.5 h-px w-4 shrink-0 bg-gold"
                      />
                      <span className="text-muted-foreground">{li}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </section>
          ))}
          {footer}
        </div>
      </div>
    </>
  );
}
