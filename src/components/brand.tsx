import { Link } from "@tanstack/react-router";

export function Wordmark({ tone = "ink" }: { tone?: "ink" | "invert" }) {
  return (
    <span className="flex items-baseline gap-2.5">
      <span
        aria-hidden="true"
        className={`grid size-8 shrink-0 place-items-center border font-serif text-sm ${
          tone === "invert"
            ? "border-gold/60 text-gold"
            : "border-gold text-accent"
        }`}
      >
        A
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={`font-serif text-base tracking-tight ${
            tone === "invert" ? "text-ink-foreground" : "text-foreground"
          }`}
        >
          Akdağ Hukuk
        </span>
        <span className="eyebrow mt-1 text-[0.6rem]">ve Danışmanlık</span>
      </span>
    </span>
  );
}

export function LogoLink({ tone = "ink" }: { tone?: "ink" | "invert" }) {
  return (
    <Link to="/" aria-label="Akdağ Hukuk ve Danışmanlık — ana sayfa">
      <Wordmark tone={tone} />
    </Link>
  );
}
