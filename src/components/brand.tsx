import { Link } from "@tanstack/react-router";
import logoAsset from "@/assets/logo.webp.asset.json";

export function Wordmark({ tone = "ink" }: { tone?: "ink" | "invert" }) {
  return (
    <img
      src={logoAsset.url}
      alt="Akdağ Hukuk ve Danışmanlık — Av. Kutay Onat Akdağ"
      width={800}
      height={286}
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
