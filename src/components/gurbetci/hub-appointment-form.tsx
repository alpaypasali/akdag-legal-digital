import { useState, type FormEvent } from "react";
import { z } from "zod";
import { Link } from "@tanstack/react-router";
import { MessageCircle, Mail } from "lucide-react";
import { site } from "@/data/site";
import { hubSubjects } from "@/data/gurbetci-hub";
import { trackEvent } from "@/lib/analytics";
import { whatsappHref } from "@/components/gurbetci/hub-cta";

const schema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Lütfen ad ve soyadınızı yazın.")
    .max(100, "Ad soyad en fazla 100 karakter olabilir."),
  country: z
    .string()
    .trim()
    .min(2, "Lütfen yaşadığınız ülkeyi yazın.")
    .max(60, "Ülke adı en fazla 60 karakter olabilir."),
  phone: z
    .string()
    .trim()
    .min(7, "Lütfen ulaşılabilir bir telefon veya WhatsApp numarası yazın.")
    .max(25, "Numara en fazla 25 karakter olabilir."),
  email: z
    .string()
    .trim()
    .email("Geçerli bir e-posta adresi yazın.")
    .max(255, "E-posta en fazla 255 karakter olabilir."),
  subject: z.string().trim().min(1, "Lütfen bir görüşme konusu seçin."),
  channel: z.string().trim().min(1, "Lütfen tercih ettiğiniz iletişim yöntemini seçin."),
  message: z
    .string()
    .trim()
    .min(20, "Kısa açıklama en az 20 karakter olmalıdır.")
    .max(2000, "Kısa açıklama en fazla 2000 karakter olabilir."),
  consent: z.literal(true, {
    errorMap: () => ({ message: "Devam etmek için KVKK metnini onaylayın." }),
  }),
  website: z.string().max(0).optional(),
});

type Draft = z.infer<typeof schema>;
type Errors = Partial<Record<string, string>>;

const channels = ["WhatsApp", "Telefon", "E-posta", "Zoom görüşmesi"];

function buildSummary(d: Draft) {
  return [
    "Yurt dışı hukuki danışmanlık randevu talebi",
    `Ad Soyad: ${d.name}`,
    `Yaşanılan ülke: ${d.country}`,
    `Telefon / WhatsApp: ${d.phone}`,
    `E-posta: ${d.email}`,
    `Görüşme konusu: ${d.subject}`,
    `Tercih edilen iletişim: ${d.channel}`,
    `Açıklama: ${d.message}`,
  ].join("\n");
}

/**
 * Sunucu tarafında form gönderim altyapısı bulunmadığı için talep, kullanıcının
 * kendi WhatsApp veya e-posta uygulaması üzerinden iletilir. Form içeriği hiçbir
 * yerde saklanmaz ve tarayıcıda tutulmaz.
 */
export function HubAppointmentForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [draft, setDraft] = useState<Draft | null>(null);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const result = schema.safeParse({
      name: String(fd.get("name") ?? ""),
      country: String(fd.get("country") ?? ""),
      phone: String(fd.get("phone") ?? ""),
      email: String(fd.get("email") ?? ""),
      subject: String(fd.get("subject") ?? ""),
      channel: String(fd.get("channel") ?? ""),
      message: String(fd.get("message") ?? ""),
      consent: fd.get("consent") === "on",
      website: String(fd.get("website") ?? ""),
    });

    if (!result.success) {
      const next: Errors = {};
      for (const issue of result.error.issues) {
        const key = String(issue.path[0]);
        if (!next[key]) next[key] = issue.message;
      }
      setErrors(next);
      setDraft(null);
      trackEvent("form_submit_error", {
        form_name: "gurbetci_hub_randevu",
        form_status: "error",
      });
      document.getElementById(`gh-${Object.keys(next)[0]}`)?.focus();
      return;
    }

    setErrors({});
    setDraft(result.data);
    trackEvent("form_submit_success", {
      form_name: "gurbetci_hub_randevu",
      form_status: "success",
    });
  }

  const summary = draft ? buildSummary(draft) : "";

  return (
    <div>
      <p className="measure border-l-2 border-gold bg-muted px-5 py-4 text-sm text-muted-foreground">
        {site.formNotice}
      </p>

      <form
        onSubmit={onSubmit}
        noValidate
        onFocusCapture={() =>
          trackEvent(
            "form_start",
            { form_name: "gurbetci_hub_randevu" },
            { once: "form_start:gurbetci_hub_randevu" },
          )
        }
        className="mt-8 space-y-6"
      >
        <div aria-live="polite" className="sr-only">
          {draft ? "Randevu talebiniz gönderime hazır." : ""}
        </div>

        {draft ? (
          <div role="status" className="border border-gold bg-muted p-5">
            <p className="text-sm">
              Talebiniz hazırlandı. Bilgiler yalnızca bu ekranda oluşturulur;
              göndermek için aşağıdaki kanallardan birini seçin.
            </p>
            <div className="mt-4 flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsappHref(summary)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() =>
                  trackEvent("gurbetci_hub_whatsapp_click", {
                    button_location: "randevu_formu",
                  })
                }
                className="inline-flex min-h-12 items-center justify-center gap-2 border border-gold bg-gold px-6 text-sm font-semibold text-ink transition-colors hover:bg-transparent hover:text-gold"
              >
                <MessageCircle className="size-4" aria-hidden="true" />
                WhatsApp ile gönder
              </a>
              <a
                href={`mailto:${site.contact.email}?subject=${encodeURIComponent(
                  "Yurt dışı randevu talebi",
                )}&body=${encodeURIComponent(summary)}`}
                onClick={() =>
                  trackEvent("click_email", { button_location: "randevu_formu" })
                }
                className="inline-flex min-h-12 items-center justify-center gap-2 border border-foreground px-6 text-sm transition-colors hover:bg-foreground hover:text-primary-foreground"
              >
                <Mail className="size-4" aria-hidden="true" />
                E-posta ile gönder
              </a>
            </div>
          </div>
        ) : null}

        <div className="grid gap-6 sm:grid-cols-2">
          <Field id="gh-name" name="name" label="Ad ve soyad" autoComplete="name" error={errors.name} />
          <Field
            id="gh-country"
            name="country"
            label="Yaşadığınız ülke"
            autoComplete="country-name"
            error={errors.country}
          />
          <Field
            id="gh-phone"
            name="phone"
            type="tel"
            label="Telefon veya WhatsApp numarası"
            autoComplete="tel"
            error={errors.phone}
          />
          <Field
            id="gh-email"
            name="email"
            type="email"
            label="E-posta"
            autoComplete="email"
            error={errors.email}
          />
          <Select
            id="gh-subject"
            name="subject"
            label="Görüşme konusu"
            options={[...hubSubjects]}
            error={errors.subject}
          />
          <Select
            id="gh-channel"
            name="channel"
            label="Tercih edilen iletişim yöntemi"
            options={channels}
            error={errors.channel}
          />
        </div>

        <div>
          <label htmlFor="gh-message" className="eyebrow block">
            Kısa açıklama
          </label>
          <textarea
            id="gh-message"
            name="message"
            rows={5}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? "hata-message" : undefined}
            className="mt-2 w-full border border-input bg-card p-4 text-base text-foreground"
          />
          <FieldError id="hata-message" message={errors.message} />
        </div>

        {/* Spam korumasi: gizli alan */}
        <div className="hidden" aria-hidden="true">
          <label htmlFor="gh-website">Web sitesi</label>
          <input id="gh-website" name="website" tabIndex={-1} autoComplete="off" />
        </div>

        <div>
          <label htmlFor="gh-consent" className="flex items-start gap-3 text-sm">
            <input
              id="gh-consent"
              name="consent"
              type="checkbox"
              aria-invalid={Boolean(errors.consent)}
              aria-describedby={errors.consent ? "hata-consent" : undefined}
              className="mt-1 size-5 shrink-0 accent-[color:var(--gold)]"
            />
            <span className="text-muted-foreground">
              <Link to="/kvkk" className="underline underline-offset-2 hover:text-gold">
                KVKK Aydınlatma Metni
              </Link>{" "}
              ve{" "}
              <Link to="/gizlilik" className="underline underline-offset-2 hover:text-gold">
                Gizlilik Politikası
              </Link>
              'nı okudum, bilgilerimin görüşme talebim kapsamında işlenmesini
              onaylıyorum.
            </span>
          </label>
          <FieldError id="hata-consent" message={errors.consent} />
        </div>

        <button
          type="submit"
          className="inline-flex min-h-12 items-center justify-center border border-gold bg-gold px-8 text-sm font-semibold text-ink transition-colors hover:bg-transparent hover:text-gold"
        >
          Randevu talebini hazırla
        </button>
      </form>
    </div>
  );
}

function Field({
  id,
  name,
  label,
  type = "text",
  autoComplete,
  error,
}: {
  id: string;
  name: string;
  label: string;
  type?: string;
  autoComplete?: string;
  error?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="eyebrow block">
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        autoComplete={autoComplete}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `hata-${name}` : undefined}
        className="mt-2 min-h-12 w-full border border-input bg-card px-4 text-base text-foreground"
      />
      <FieldError id={`hata-${name}`} message={error} />
    </div>
  );
}

function Select({
  id,
  name,
  label,
  options,
  error,
}: {
  id: string;
  name: string;
  label: string;
  options: string[];
  error?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="eyebrow block">
        {label}
      </label>
      <select
        id={id}
        name={name}
        defaultValue=""
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `hata-${name}` : undefined}
        className="mt-2 min-h-12 w-full border border-input bg-card px-4 text-base text-foreground"
      >
        <option value="">Seçiniz</option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
      <FieldError id={`hata-${name}`} message={error} />
    </div>
  );
}

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} role="alert" className="mt-2 text-sm text-destructive">
      ⚠ {message}
    </p>
  );
}
