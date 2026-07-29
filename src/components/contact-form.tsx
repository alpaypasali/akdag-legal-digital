import { useState, type FormEvent } from "react";
import { z } from "zod";
import { site } from "@/data/site";

const schema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Lütfen ad ve soyadınızı yazın.")
    .max(100, "Ad soyad en fazla 100 karakter olabilir."),
  phone: z
    .string()
    .trim()
    .min(7, "Lütfen ulaşılabilir bir telefon numarası yazın.")
    .max(25, "Telefon numarası en fazla 25 karakter olabilir."),
  email: z
    .string()
    .trim()
    .email("Geçerli bir e-posta adresi yazın.")
    .max(255, "E-posta en fazla 255 karakter olabilir."),
  subject: z.string().trim().min(1, "Lütfen bir iletişim konusu seçin."),
  message: z
    .string()
    .trim()
    .min(20, "Mesajınız en az 20 karakter olmalıdır.")
    .max(2000, "Mesajınız en fazla 2000 karakter olabilir."),
  consent: z.literal(true, {
    errorMap: () => ({ message: "Devam etmek için KVKK metnini onaylayın." }),
  }),
  // Basit spam korumasi: gizli alan (honeypot) dolu ise gönderim yok sayılır.
  website: z.string().max(0).optional(),
});

const subjects = [
  "Aile Hukuku",
  "Ceza Hukuku",
  "İş Hukuku",
  "Gayrimenkul ve Kira Hukuku",
  "Ticaret ve Şirketler Hukuku",
  "Diğer",
];

type Errors = Partial<Record<string, string>>;

export function ContactForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const result = schema.safeParse({
      name: String(fd.get("name") ?? ""),
      phone: String(fd.get("phone") ?? ""),
      email: String(fd.get("email") ?? ""),
      subject: String(fd.get("subject") ?? ""),
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
      const first = document.getElementById(`alan-${Object.keys(next)[0]}`);
      first?.focus();
      return;
    }

    setErrors({});
    setSent(true);
    e.currentTarget.reset();
  }

  return (
    <div>
      <p className="measure border-l-2 border-gold bg-muted px-5 py-4 text-sm text-muted-foreground">
        {site.formNotice}
      </p>

      <form onSubmit={onSubmit} noValidate className="mt-8 space-y-6">
        <div aria-live="polite" className="sr-only">
          {sent ? "Mesajınız iletildi." : ""}
        </div>

        {sent ? (
          <p
            role="status"
            className="border border-gold bg-muted px-5 py-4 text-sm"
          >
            Mesajınız alındı. En kısa sürede tarafınıza dönüş yapılacaktır.
          </p>
        ) : null}

        <div className="grid gap-6 sm:grid-cols-2">
          <Field
            id="alan-name"
            name="name"
            label="Ad Soyad"
            autoComplete="name"
            error={errors.name}
          />
          <Field
            id="alan-phone"
            name="phone"
            type="tel"
            label="Telefon"
            autoComplete="tel"
            error={errors.phone}
          />
        </div>

        <Field
          id="alan-email"
          name="email"
          type="email"
          label="E-posta"
          autoComplete="email"
          error={errors.email}
        />

        <div>
          <label htmlFor="alan-subject" className="eyebrow block">
            İletişim Konusu
          </label>
          <select
            id="alan-subject"
            name="subject"
            defaultValue=""
            aria-invalid={Boolean(errors.subject)}
            aria-describedby={errors.subject ? "hata-subject" : undefined}
            className="mt-2 min-h-12 w-full border border-input bg-card px-4 text-base text-foreground"
          >
            <option value="">Seçiniz</option>
            {subjects.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
          <FieldError id="hata-subject" message={errors.subject} />
        </div>

        <div>
          <label htmlFor="alan-message" className="eyebrow block">
            Mesajınız
          </label>
          <textarea
            id="alan-message"
            name="message"
            rows={6}
            maxLength={2000}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? "hata-message" : "yardim-message"}
            className="mt-2 w-full border border-input bg-card px-4 py-3 text-base text-foreground"
          />
          <p id="yardim-message" className="mt-2 text-xs text-muted-foreground">
            Lütfen kişisel verilerinizi ve dosya ayrıntılarını bu aşamada
            paylaşmaktan kaçının.
          </p>
          <FieldError id="hata-message" message={errors.message} />
        </div>

        {/* Spam koruması: kullanıcıya görünmez alan */}
        <div className="hidden" aria-hidden="true">
          <label htmlFor="alan-website">Web sitesi</label>
          <input id="alan-website" name="website" tabIndex={-1} autoComplete="off" />
        </div>

        <div className="flex gap-3">
          <input
            id="alan-consent"
            name="consent"
            type="checkbox"
            aria-invalid={Boolean(errors.consent)}
            aria-describedby={errors.consent ? "hata-consent" : undefined}
            className="mt-1 size-5 shrink-0 accent-accent"
          />
          <div>
            <label htmlFor="alan-consent" className="text-sm text-muted-foreground">
              KVKK Aydınlatma Metni'ni okudum; iletişim amacıyla verilerimin
              işlenmesini kabul ediyorum.
            </label>
            <FieldError id="hata-consent" message={errors.consent} />
          </div>
        </div>

        <button
          type="submit"
          className="inline-flex min-h-12 items-center justify-center border border-foreground bg-foreground px-8 text-sm text-primary-foreground transition-colors hover:bg-transparent hover:text-foreground"
        >
          Mesajı Gönder
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

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} role="alert" className="mt-2 text-sm text-destructive">
      {message}
    </p>
  );
}
