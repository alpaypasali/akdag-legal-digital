import { Link } from "@tanstack/react-router";
import logoAsset from "@/assets/logo.webp";

export function Wordmark({ tone = "ink" }: { tone?: "ink" | "invert" }) {
  return (
    <img
      src={logoAsset}
      alt="Akdağ Hukuk ve Danışmanlık — Av. Kutay Onat Akdağ"
      width={560}
      height={200}
      className={`h-10 w-auto md:h-12 ${tone === "invert" ? "" : ""}`}
      loading="eager"
      decoding="async"
    />
  );
}

export function LogoLink({ tone = "ink" }: { tone?: "ink" | "invert" }) {
  return (
    <Link to="/" aria-label="Akdağ Hukuk ve Danışmanlık — ana sayfa">
      <Wordmark tone={tone} />
    </Link>
  );
}
