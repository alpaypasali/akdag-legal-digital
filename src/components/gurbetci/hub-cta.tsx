import { site } from "@/data/site";
import { hubWhatsappMessage } from "@/data/gurbetci-hub";
import { trackEvent } from "@/lib/analytics";

/** Merkezi iletişim ayarından (src/data/site.ts) beslenen WhatsApp bağlantısı. */
export function whatsappHref(message: string = hubWhatsappMessage) {
  return `https://wa.me/${site.contact.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function HubCtaButtons({
  location,
  tone = "light",
}: {
  location: string;
  tone?: "light" | "dark";
}) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
      <a
        href={whatsappHref()}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() =>
          trackEvent("gurbetci_hub_whatsapp_click", {
            button_location: location,
          })
        }
        className="inline-flex min-h-12 items-center justify-center gap-2 border border-gold bg-gold px-7 text-sm font-semibold text-ink transition-colors hover:bg-transparent hover:text-gold"
      >
        WhatsApp'tan Yazın
      </a>
      <a
        href="#randevu"
        onClick={() =>
          trackEvent("click_appointment", { button_location: location })
        }
        className={`inline-flex min-h-12 items-center justify-center border px-7 text-sm transition-colors ${
          tone === "dark"
            ? "border-hairline-invert text-ink-foreground hover:border-gold hover:text-gold"
            : "border-foreground text-foreground hover:bg-foreground hover:text-primary-foreground"
        }`}
      >
        Randevu Talebi
      </a>
    </div>
  );
}
