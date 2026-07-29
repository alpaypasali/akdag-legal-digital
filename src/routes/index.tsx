import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, ShieldCheck } from "lucide-react";
import { site } from "@/data/site";
import { featuredAreas, secondaryAreas } from "@/data/practice-areas";
import { publishedArticles, formatDate, getCategory } from "@/data/articles";
import { SectionLabel } from "@/components/section";
import { HeroBackdrop } from "@/components/hero-backdrop";
import logoMarkAsset from "@/assets/logo-footer.webp.asset.json";
import ilkelerAsset from "@/assets/ilkeler.jpg.asset.json";

const trustPoints: string[] = [
  "Bursa'da bireysel ve kurumsal danışmanlık",
  "Süreç boyunca yazılı ve düzenli bilgilendirme",
  "Meslek sırrı ve gizlilik esası",
  "Randevu ile ön görüşme imkânı",
];

const description =
  "Bursa'da avukatlık ve hukuki danışmanlık. Aile, ceza, iş, gayrimenkul ve ticaret hukuku alanlarında açık iletişim ve düzenli süreç takibi.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${site.name} | Bursa'da Avukatlık ve Hukuki Danışmanlık` },
      { name: "description", content: description },
      {
        property: "og:title",
        content: `${site.name} | Bursa'da Avukatlık ve Hukuki Danışmanlık`,
      },
      { property: "og:description", content: description },
      { property: "og:url", content: "/" },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "canonical", href: "/" },
      {
        rel: "preload",
        as: "image",
        href: heroBooksAsset.url,
        fetchpriority: "high",
      },
      {
        rel: "preload",
        as: "image",
        href: heroScalesAsset.url,
        fetchpriority: "high",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LegalService",
          name: site.name,
          description,
          url: "/",
          email: site.contact.email,
          areaServed: [
            { "@type": "City", name: "Bursa" },
            { "@type": "AdministrativeArea", name: "Osmangazi" },
          ],
          address: {
            "@type": "PostalAddress",
            addressLocality: site.contact.district,
            addressRegion: site.contact.city,
            addressCountry: "TR",
          },
          openingHours: "Mo-Fr 09:00-18:00",
          employee: {
            "@type": "Person",
            name: site.lawyer,
            jobTitle: "Avukat",
          },
        }),
      },
    ],
  }),
  component: Home,
});

const principles = [
  { title: "Gizlilik", text: "Paylaşılan her bilgi meslek sırrı kapsamında korunur." },
  { title: "Şeffaflık", text: "Sürecin aşamaları ve olası sonuçları açıkça aktarılır." },
  { title: "Bağımsızlık", text: "Değerlendirme yalnızca hukuki ölçütlere göre yapılır." },
  { title: "Dürüstlük", text: "Beklenti oluşturmadan, gerçekçi bir çerçeve sunulur." },
  { title: "Özen", text: "Dosya, belgeler ve süreler ayrıntılı biçimde takip edilir." },
  { title: "Saygı", text: "Karşı taraf dâhil tüm süjelerle ölçülü iletişim kurulur." },
];

const approach = [
  {
    title: "İlk görüşme ve ihtiyaç analizi",
    text: "Talebin kapsamı, tarafların durumu ve varsa süre baskısı birlikte değerlendirilir.",
  },
  {
    title: "Belge ve hukuki durum incelemesi",
    text: "Sözleşmeler, yazışmalar ve resmî kayıtlar incelenerek dosyanın çerçevesi çıkarılır.",
  },
  {
    title: "İzlenecek yolun açıklanması",
    text: "Olası seçenekler, öngörülen aşamalar ve dikkate alınması gereken riskler aktarılır.",
  },
  {
    title: "Sürecin düzenli takibi",
    text: "Duruşma, tebligat ve süreler takip edilir; gelişmeler düzenli olarak bildirilir.",
  },
];

function Home() {
  const latest = publishedArticles.slice(0, 3);

  return (
    <>
      {/* 1 — Hero */}
      <section className="relative overflow-hidden border-b border-hairline-invert bg-ink text-ink-foreground">
        <HeroBackdrop />
        <div className="container-editorial relative grid gap-12 pb-16 pt-28 md:pb-24 md:pt-36 lg:grid-cols-12 lg:gap-16 lg:pb-28 lg:pt-44">
          <div className="lg:col-span-7">
            <p className="eyebrow text-gold">{site.tagline}</p>
            <h1 className="mt-6 font-serif text-[2.15rem] leading-[1.1] sm:text-5xl lg:text-[3.85rem]">
              Hukuki süreçlerde açık iletişim, özenli hazırlık ve kararlı
              temsil.
            </h1>
            <span aria-hidden="true" className="rule-gold mt-7 block" />
            <p className="measure mt-6 text-base text-ink-foreground/75 sm:text-lg">
              {site.description}
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/calisma-alanlari"
                className="inline-flex min-h-12 items-center justify-center gap-3 border border-gold bg-gold px-7 text-sm text-ink transition-colors hover:bg-transparent hover:text-gold"
              >
                Çalışma Alanlarını İncele
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
              <Link
                to="/iletisim"
                className="inline-flex min-h-12 items-center justify-center border border-ink-foreground/40 px-7 text-sm text-ink-foreground transition-colors hover:border-gold hover:text-gold"
              >
                Randevu ve İletişim
              </Link>
            </div>

            <ul className="mt-10 grid gap-x-8 gap-y-4 border-t border-hairline-invert pt-6 text-sm text-ink-foreground/75 sm:grid-cols-2">
              {trustPoints.map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <ShieldCheck
                    className="mt-0.5 size-4 shrink-0 text-gold"
                    aria-hidden="true"
                  />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-5 lg:border-l lg:border-hairline-invert lg:pl-10">
            <p className="eyebrow text-ink-foreground/55">Öne Çıkan Alanlar</p>
            <ul className="mt-5">
              {featuredAreas.map((area, i) => (
                <li
                  key={area.slug}
                  className="border-t border-hairline-invert last:border-b"
                >
                  <Link
                    to="/calisma-alanlari/$slug"
                    params={{ slug: area.slug }}
                    className="group flex min-h-14 items-center gap-4 py-3.5"
                  >
                    <span className="rule-number">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-serif text-lg transition-colors group-hover:text-gold">
                      {area.title}
                    </span>
                    <ArrowUpRight
                      className="ml-auto size-4 text-gold opacity-0 transition-opacity group-hover:opacity-100"
                      aria-hidden="true"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>



      {/* 2 — Öne çıkan çalışma alanları */}
      <section aria-labelledby="alanlar-baslik" className="border-b border-border py-16 md:py-24">
        <div className="container-editorial">
          <SectionLabel index="01">Çalışma Alanları</SectionLabel>
          <h2
            id="alanlar-baslik"
            className="mt-6 max-w-2xl font-serif text-2xl sm:text-3xl lg:text-4xl"
          >
            Öncelikli olarak takip edilen dosya grupları
          </h2>

          <div className="mt-12 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {featuredAreas.map((area, i) => (
              <Link
                key={area.slug}
                to="/calisma-alanlari/$slug"
                params={{ slug: area.slug }}
                className={`group flex flex-col justify-between bg-background p-7 transition-colors hover:bg-secondary ${
                  i === 0 ? "lg:col-span-2 lg:row-span-1" : ""
                }`}
              >
                <div>
                  <span className="rule-number">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3
                    className={`mt-5 font-serif ${
                      i === 0 ? "text-2xl lg:text-3xl" : "text-xl"
                    }`}
                  >
                    {area.title}
                  </h3>
                  <p className="measure mt-3 text-sm text-muted-foreground">
                    {area.summary}
                  </p>
                </div>
                <span className="link-underline mt-8 self-start text-sm">
                  Alanı incele
                  <ArrowUpRight className="size-3.5 text-gold" aria-hidden="true" />
                </span>
              </Link>
            ))}

            <div className="bg-background p-7">
              <span className="eyebrow">Diğer Alanlar</span>
              <ul className="mt-5 flex flex-wrap gap-x-4 gap-y-2 text-sm text-muted-foreground">
                {secondaryAreas.map((area) => (
                  <li key={area.slug}>
                    <Link
                      to="/calisma-alanlari/$slug"
                      params={{ slug: area.slug }}
                      className="py-1 transition-colors hover:text-foreground"
                    >
                      {area.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3 — Avukat tanıtımı */}
      <section
        aria-labelledby="avukat-baslik"
        className="border-b border-hairline-invert bg-ink py-16 text-ink-foreground md:py-24"
      >
        <div className="container-editorial grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-4">
              <span className="rule-number">02</span>
              <span className="eyebrow text-ink-foreground/50">Büro ve Avukat</span>
            </div>
            <div className="relative mt-10 flex justify-center py-6 lg:justify-start">
              <span
                aria-hidden="true"
                className="pointer-events-none absolute left-1/2 top-1/2 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,color-mix(in_oklab,var(--color-gold)_14%,transparent),transparent_70%)] lg:left-[140px]"
              />
              <img
                src={logoMarkAsset.url}
                alt="Akdağ Hukuk ve Danışmanlık logosu"
                width={1536}
                height={1215}
                loading="lazy"
                decoding="async"
                className="relative h-auto w-full max-w-[220px] object-contain opacity-95 transition-opacity duration-500 hover:opacity-100"
              />
            </div>
          </div>

          <div className="lg:col-span-7">
            <h2 id="avukat-baslik" className="font-serif text-3xl sm:text-4xl">
              Av. Kutay Onat Akdağ
            </h2>
            <div className="measure mt-6 space-y-5 text-ink-foreground/80">
              <p>
                Akdağ Hukuk ve Danışmanlık, Bursa'da bireylerin ve şirketlerin
                hukuki süreçlerini yürüten bir avukatlık bürosudur. Çalışma
                düzeni, dosyanın baştan doğru kurgulanması ve sürecin her
                aşamasında müvekkilin bilgilendirilmesi üzerine kuruludur.
              </p>
              <p>
                Mesleki yaklaşımın merkezinde, uyuşmazlığın hukuki olduğu kadar
                pratik sonuçlarının da değerlendirilmesi yer alır. Dava yolunun
                yanı sıra arabuluculuk ve sulh olanakları da her dosyada ayrıca
                gözden geçirilir.
              </p>
            </div>

            <dl className="mt-10 grid gap-px border border-hairline-invert bg-hairline-invert sm:grid-cols-3">
              {[
                { t: "Baro", d: "Bursa Barosu" },
                { t: "Eğitim", d: "Hukuk Fakültesi" },
                { t: "Faaliyet Bölgesi", d: "Bursa ve çevresi" },
              ].map((item) => (
                <div key={item.t} className="bg-ink p-5">
                  <dt className="eyebrow text-ink-foreground/50">{item.t}</dt>
                  <dd className="mt-2 font-serif text-lg">{item.d}</dd>
                </div>
              ))}
            </dl>

            <Link
              to="/avukat-kutay-onat-akdag"
              className="link-underline mt-9 text-sm text-gold"
            >
              Detaylı özgeçmiş
              <ArrowUpRight className="size-3.5" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4 — Çalışma yaklaşımı */}
      <section aria-labelledby="yaklasim-baslik" className="border-b border-border py-16 md:py-24">
        <div className="container-editorial">
          <SectionLabel index="03">Çalışma Yaklaşımı</SectionLabel>
          <h2
            id="yaklasim-baslik"
            className="mt-6 max-w-2xl font-serif text-2xl sm:text-3xl lg:text-4xl"
          >
            Dosyanın ilk günden itibaren izlediği yol
          </h2>

          <ol className="mt-12 grid gap-x-10 gap-y-10 md:grid-cols-2 lg:grid-cols-4">
            {approach.map((step, i) => (
              <li key={step.title} className="border-t border-border pt-5">
                <span className="rule-number">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 font-serif text-xl">{step.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{step.text}</p>
              </li>
            ))}
          </ol>

          <p className="measure mt-12 text-sm text-muted-foreground">
            Hukuki süreçlerin sonucu, dosyanın koşullarına ve yargı merciinin
            değerlendirmesine bağlıdır; belirli bir sonuç taahhüdünde
            bulunulmaz.
          </p>
        </div>
      </section>

      {/* 5 — Mesleki ilkeler */}
      <section
        aria-labelledby="ilkeler-baslik"
        className="relative isolate overflow-hidden border-b border-hairline-invert bg-ink py-16 text-ink-foreground md:py-24"
      >
        <img
          src={ilkelerAsset.url}
          alt=""
          aria-hidden="true"
          loading="lazy"
          decoding="async"
          className="absolute inset-0 -z-20 h-full w-full object-cover object-center [filter:saturate(0.45)_contrast(0.95)_brightness(0.7)_sepia(0.2)]"
        />
        <span
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,color-mix(in_oklab,var(--color-ink)_88%,transparent),color-mix(in_oklab,var(--color-ink)_78%,transparent))]"
        />
        <div className="container-editorial grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionLabel index="04">Mesleki İlkeler</SectionLabel>
            <h2
              id="ilkeler-baslik"
              className="mt-6 font-serif text-2xl sm:text-3xl lg:text-4xl"
            >
              Çalışmanın dayandığı altı ilke
            </h2>
          </div>
          <dl className="grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:col-span-8 lg:grid-cols-3">
            {principles.map((p) => (
              <div key={p.title} className="border-t border-hairline-invert pt-4">
                <dt className="font-serif text-lg text-gold">{p.title}</dt>
                <dd className="mt-2 text-sm text-ink-foreground/75">{p.text}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>


      {/* 6 — Son makaleler */}
      <section aria-labelledby="makaleler-baslik" className="border-b border-border py-16 md:py-24">
        <div className="container-editorial">
          <SectionLabel index="05">Makaleler</SectionLabel>
          <div className="mt-6 flex flex-wrap items-end justify-between gap-6">
            <h2
              id="makaleler-baslik"
              className="max-w-2xl font-serif text-2xl sm:text-3xl lg:text-4xl"
            >
              Güncel hukuki bilgilendirme yazıları
            </h2>
            <Link to="/makaleler" className="link-underline text-sm">
              Tüm makaleler
              <ArrowUpRight className="size-3.5 text-gold" aria-hidden="true" />
            </Link>
          </div>

          <div className="mt-12 grid gap-10 md:grid-cols-3">
            {latest.map((article) => (
              <article key={article.slug} className="border-t border-border pt-5">
                <p className="eyebrow">
                  {getCategory(article.categorySlug)?.title}
                </p>
                <h3 className="mt-3 font-serif text-xl leading-snug">
                  <Link
                    to="/makaleler/$slug"
                    params={{ slug: article.slug }}
                    className="transition-colors hover:text-accent"
                  >
                    {article.title}
                  </Link>
                </h3>
                <p className="mt-3 text-sm text-muted-foreground">
                  {article.excerpt}
                </p>
                <p className="mt-4 text-xs text-muted-foreground">
                  <time dateTime={article.updatedAt ?? article.publishedAt}>
                    {formatDate(article.updatedAt ?? article.publishedAt)}
                  </time>
                  <span aria-hidden="true"> · </span>
                  {article.readingMinutes} dk okuma
                </p>
                <Link
                  to="/makaleler/$slug"
                  params={{ slug: article.slug }}
                  className="link-underline mt-5 text-sm"
                >
                  Makaleyi oku
                  <ArrowUpRight className="size-3.5 text-gold" aria-hidden="true" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 7 — Bursa yerel bağlantı */}
      <section aria-labelledby="bursa-baslik" className="py-16 md:py-24">
        <div className="container-editorial grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionLabel index="06">Büro</SectionLabel>
            <h2
              id="bursa-baslik"
              className="mt-6 font-serif text-2xl sm:text-3xl lg:text-4xl"
            >
              Osmangazi'deki büromuzda görüşme
            </h2>
            <p className="measure mt-5 text-muted-foreground">
              Görüşmeler randevu ile yapılır. Bursa merkez ilçeleri ve çevre
              yerleşimlerdeki adliye ve icra dairelerindeki işlemler büro
              tarafından takip edilir.
            </p>
          </div>

          <div className="lg:col-span-7">
            <dl className="grid gap-px border border-border bg-border sm:grid-cols-2">
              <div className="bg-background p-6">
                <dt className="eyebrow">Adres</dt>
                <dd className="mt-2">
                  {site.contact.addressLine}
                  <br />
                  {site.contact.district} / {site.contact.city}
                </dd>
              </div>
              <div className="bg-background p-6">
                <dt className="eyebrow">Çalışma Saatleri</dt>
                <dd className="mt-2">{site.contact.hours}</dd>
              </div>
              <div className="bg-background p-6">
                <dt className="eyebrow">Telefon</dt>
                <dd className="mt-2">{site.contact.phoneLabel}</dd>
              </div>
              <div className="bg-background p-6">
                <dt className="eyebrow">E-posta</dt>
                <dd className="mt-2">
                  <a
                    href={`mailto:${site.contact.email}`}
                    className="link-underline text-base"
                  >
                    {site.contact.email}
                  </a>
                </dd>
              </div>
            </dl>

            <div className="mt-6 flex flex-wrap gap-4">
              <a
                href={site.contact.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center border border-foreground px-6 text-sm transition-colors hover:bg-secondary"
              >
                Haritada göster
              </a>
              <Link
                to="/iletisim"
                className="inline-flex min-h-12 items-center border border-foreground bg-foreground px-6 text-sm text-primary-foreground transition-colors hover:bg-transparent hover:text-foreground"
              >
                Randevu talebi
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
