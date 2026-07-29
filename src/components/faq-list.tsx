import { useId } from "react";
import type { Faq } from "@/data/faqs";

export function FaqList({
  items,
  headingId,
}: {
  items: Faq[];
  headingId?: string;
}) {
  const base = useId();

  return (
    <div className="mt-6 border-t border-border" aria-labelledby={headingId}>
      {items.map((item, i) => (
        <details
          key={item.question}
          name={base}
          className="group border-b border-border"
        >
          <summary className="flex cursor-pointer list-none items-baseline gap-4 py-4 text-left marker:hidden">
            <span className="rule-number pt-1">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="font-serif text-lg leading-snug">
              {item.question}
            </span>
            <span
              aria-hidden="true"
              className="ml-auto mt-1 shrink-0 text-gold transition-transform group-open:rotate-45"
            >
              +
            </span>
          </summary>
          <p className="measure pb-5 pl-12 text-muted-foreground">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
