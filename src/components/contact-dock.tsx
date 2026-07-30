import { useEffect, useRef, useState } from "react";
import { MessageCircle, Phone, X, Send } from "lucide-react";
import { site } from "@/data/site";
import { trackEvent } from "@/lib/analytics";

const DEFAULT_MESSAGE =
  "Merhaba, hukuki bir konu hakkında görüşme talep etmek istiyorum.";

/**
 * Her sayfada görünen sabit iletişim çubuğu:
 * - Ara: telefon numarasını doğrudan arar
 * - WhatsApp: küçük bir pencere açar, yazılan mesaj wa.me üzerinden gönderilir
 */
export function ContactDock() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState(DEFAULT_MESSAGE);
  const panelRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        requestAnimationFrame(() => toggleRef.current?.focus());
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const send = () => {
    trackEvent("click_appointment", { button_location: "contact_dock" });
    const text = encodeURIComponent(message.trim() || DEFAULT_MESSAGE);
    window.open(
      `https://wa.me/${site.contact.whatsapp}?text=${text}`,
      "_blank",
      "noopener,noreferrer",
    );
    setOpen(false);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end gap-3 print:hidden">
      {open ? (
        <div
          ref={panelRef}
          role="dialog"
          aria-modal="false"
          aria-label="WhatsApp mesajı"
          className="w-[min(21rem,calc(100vw-2rem))] border border-border bg-card shadow-xl"
        >
          <div className="flex items-center justify-between border-b border-border px-4 py-3">
            <p className="font-serif text-base">WhatsApp ile yazın</p>
            <button
              type="button"
              onClick={() => {
                setOpen(false);
                requestAnimationFrame(() => toggleRef.current?.focus());
              }}
              aria-label="WhatsApp penceresini kapat"
              className="inline-flex size-9 items-center justify-center border border-border"
            >
              <X className="size-4" aria-hidden="true" />
            </button>
          </div>
          <div className="p-4">
            <label htmlFor="wa-mesaj" className="eyebrow">
              Mesajınız
            </label>
            <textarea
              id="wa-mesaj"
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="mt-2 w-full resize-none border border-border bg-background p-3 text-sm text-foreground outline-none focus-visible:ring-2 focus-visible:ring-gold"
            />
            <p className="mt-2 text-xs text-muted-foreground">
              {site.formNotice}
            </p>
            <button
              type="button"
              onClick={send}
              className="mt-4 inline-flex min-h-11 w-full items-center justify-center gap-2 bg-gold px-5 text-sm font-medium text-ink transition-opacity hover:opacity-90"
            >
              <Send className="size-4" aria-hidden="true" />
              WhatsApp'tan gönder
            </button>
          </div>
        </div>
      ) : null}

      <div className="flex items-center gap-2">
        <a
          href={`tel:${site.contact.phoneHref}`}
          aria-label={`Telefonla ara: ${site.contact.phoneLabel}`}
          onClick={() =>
            trackEvent("click_phone", { button_location: "contact_dock" })
          }
          className="inline-flex min-h-12 items-center gap-2 border border-gold bg-ink px-4 text-sm text-ink-foreground shadow-lg transition-colors hover:bg-gold hover:text-ink"
        >
          <Phone className="size-4" aria-hidden="true" />
          <span className="hidden sm:inline">Ara</span>
        </a>
        <button
          ref={toggleRef}
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="WhatsApp ile mesaj gönder"
          className="inline-flex min-h-12 items-center gap-2 bg-[#128C7E] px-4 text-sm text-white shadow-lg transition-opacity hover:opacity-90"
        >
          <MessageCircle className="size-4" aria-hidden="true" />
          <span className="hidden sm:inline">WhatsApp</span>
        </button>
      </div>
    </div>
  );
}
