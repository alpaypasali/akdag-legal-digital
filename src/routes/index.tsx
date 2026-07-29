import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, ShieldCheck } from "lucide-react";
import { site } from "@/data/site";
import {
  featuredAreas,
  secondaryAreas,
  getAreaImage,
} from "@/data/practice-areas";
import { publishedArticles, formatDate, getCategory } from "@/data/articles";
import { SectionLabel } from "@/components/section";
import { HeroBackdrop } from "@/components/hero-backdrop";
import heroBooksAsset from "@/assets/hero-books.webp.asset.json";
import heroScalesAsset from "@/assets/hero-scales.webp.asset.json";
import logoMarkAsset from "@/assets/logo-footer.webp.asset.json";
import ilkelerAsset from "@/assets/ilkeler.webp.asset.json";

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
      <section
        aria-labelledby="alanlar-baslik"
        className="paper-grain relative overflow-hidden bg-surface-1 py-16 md:py-24"
      >
        {/* Koyu hero'nun açık bölüme kontrollü taşması */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-[linear-gradient(to_bottom,color-mix(in_oklab,var(--color-ink)_18%,transparent),transparent)]"
        />
        <div className="container-editorial relative grid gap-y-12 lg:grid-cols-12 lg:gap-x-16">
          <div className="lg:col-span-4">
            <SectionLabel index="01">Çalışma Alanları</SectionLabel>
            <h2
              id="alanlar-baslik"
              className="mt-6 max-w-[15ch] font-serif text-3xl leading-[1.12] sm:text-4xl lg:text-[2.9rem]"
            >
              Öncelikli olarak takip edilen dosya grupları
            </h2>
            <p className="mt-6 max-w-[42ch] text-sm text-muted-foreground sm:text-base">
              Her alan; dosyanın kapsamı, izlenen aşamalar ve sık karşılaşılan
              durumlar başlıklarıyla ayrı olarak açıklanır.
            </p>
            <Link
              to="/calisma-alanlari"
              className="link-underline mt-8 min-h-11 text-sm"
            >
              Tüm çalışma alanları
              <ArrowUpRight className="size-4 text-gold" aria-hidden="true" />
            </Link>
          </div>

          <div className="lg:col-span-8">
            {/* Öne çıkan ilk alan — koyu yüzey, çerçevesiz */}
            {featuredAreas.slice(0, 1).map((area) => {
              const img = getAreaImage(area.slug);
              return (
                <Link
                  key={area.slug}
                  to="/calisma-alanlari/$slug"
                  params={{ slug: area.slug }}
                  className="group relative isolate block overflow-hidden bg-ink px-7 py-10 text-ink-foreground sm:px-10 sm:py-12"
                >
                  {img ? (
                    <img
                      src={img.url}
                      alt=""
                      aria-hidden="true"
                      loading="lazy"
                      decoding="async"
                      className="absolute inset-0 -z-20 size-full object-cover opacity-45 transition-transform duration-700 [filter:grayscale(0.8)_sepia(0.3)_saturate(0.8)_brightness(0.65)] group-hover:scale-105"
                    />
                  ) : null}
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 -z-10 bg-[linear-gradient(100deg,color-mix(in_oklab,var(--color-ink)_92%,transparent),color-mix(in_oklab,var(--color-ink)_58%,transparent))]"
                  />
                  <span
                    aria-hidden="true"
                    className="ghost-numeral absolute -right-2 -top-4 text-[7rem] sm:text-[9rem]"
                    style={{
                      WebkitTextStroke:
                        "1px color-mix(in oklab, var(--color-gold) 30%, transparent)",
                    }}
                  >
                    01
                  </span>
                  <span className="rule-number">01</span>
                  <h3 className="mt-4 max-w-[16ch] font-serif text-3xl leading-tight transition-colors group-hover:text-gold sm:text-4xl">
                    {area.title}
                  </h3>
                  <span className="mt-4 block max-w-[46ch] text-sm text-ink-foreground/75">
                    {area.summary}
                  </span>
                  <span className="link-underline mt-7 inline-flex min-h-11 text-sm text-gold">
                    Alanı incele
                    <ArrowUpRight className="size-4" aria-hidden="true" />
                  </span>
                </Link>
              );
            })}

            {/* Diğer öncelikli alanlar — numaralı satırlar, kutu yok */}
            <ul className="mt-2">
              {featuredAreas.slice(1).map((area, i) => (
                <li key={area.slug}>
                  <Link
                    to="/calisma-alanlari/$slug"
                    params={{ slug: area.slug }}
                    className="group grid min-h-14 grid-cols-[auto_1fr] items-baseline gap-x-5 gap-y-1 border-b border-hairline py-6 transition-[padding] duration-300 focus-visible:pl-2 hover:pl-2 sm:grid-cols-[auto_minmax(0,15rem)_1fr]"
                  >
                    <span className="rule-number">
                      {String(i + 2).padStart(2, "0")}
                    </span>
                    <span className="font-serif text-xl transition-colors group-focus-visible:text-accent group-hover:text-accent sm:text-2xl">
                      {area.title}
                    </span>
                    <span className="col-start-2 text-sm text-muted-foreground sm:col-start-3">
                      {area.summary}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Diğer alanlar — koyu yatay bağlantı bandı */}
        <div className="relative mt-16 bg-surface-3 py-8 text-ink-foreground md:mt-20">
          <div className="container-editorial">
            <p className="eyebrow text-gold">Diğer Alanlar</p>
            <ul className="mt-5 grid gap-x-10 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
              {secondaryAreas.map((area, i) => (
                <li key={area.slug}>
                  <Link
                    to="/calisma-alanlari/$slug"
                    params={{ slug: area.slug }}
                    className="group flex min-h-11 items-baseline gap-4 text-sm text-ink-foreground/80 transition-colors hover:text-gold focus-visible:text-gold"
                  >
                    <span className="rule-number text-gold">
                      {String(i + 6).padStart(2, "0")}
                    </span>
                    {area.title}
                  </Link>
                </li>
              ))}
            </ul>
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
      <section
        aria-labelledby="yaklasim-baslik"
        className="paper-grain relative overflow-hidden bg-surface-2 py-16 md:py-24"
      >
        <span
          aria-hidden="true"
          className="arch-lines pointer-events-none absolute inset-0 opacity-40"
        />
        <div className="container-editorial relative grid gap-y-12 lg:grid-cols-12 lg:gap-x-16">
          <div className="lg:col-span-4">
            <SectionLabel index="03">Çalışma Yaklaşımı</SectionLabel>
            <h2
              id="yaklasim-baslik"
              className="mt-6 max-w-[14ch] font-serif text-3xl leading-[1.12] sm:text-4xl lg:text-[2.9rem]"
            >
              Dosyanın ilk günden itibaren izlediği yol
            </h2>
            <span aria-hidden="true" className="rule-gold mt-8 block" />
          </div>

          <ol className="lg:col-span-8 lg:grid lg:grid-cols-4 lg:gap-x-8">
            {approach.map((step, i) => (
              <li
                key={step.title}
                className={`relative grid grid-cols-[auto_1fr] gap-x-5 pb-10 pl-1 last:pb-0 lg:block lg:pb-0 lg:pl-0 ${
                  i % 2 === 1 ? "lg:mt-16" : "lg:mt-0"
                }`}
              >
                {/* Mobil dikey altın çizgi */}
                <span
                  aria-hidden="true"
                  className="absolute bottom-0 left-[0.85rem] top-9 w-px bg-gradient-to-b from-gold/60 to-transparent lg:hidden"
                />
                <span className="ghost-numeral relative z-10 text-[2rem] leading-none [-webkit-text-stroke:1px_color-mix(in_oklab,var(--color-gold-ink)_60%,transparent)] lg:mb-4 lg:block lg:text-[3.5rem]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  {/* Masaüstünde adımları bağlayan ince çizgi */}
                  <span
                    aria-hidden="true"
                    className="mb-5 hidden h-px w-full bg-gradient-to-r from-gold-ink/50 to-transparent lg:block"
                  />
                  <h3 className="font-serif text-xl leading-snug">{step.title}</h3>
                  <p className="mt-3 max-w-[34ch] text-sm text-muted-foreground">
                    {step.text}
                  </p>
                </div>
              </li>
            ))}
          </ol>

          <div className="lg:col-span-12">
            <div className="footnote-band max-w-[76ch]">
              <span
                aria-hidden="true"
                className="mt-2 h-px w-6 shrink-0 bg-gold"
              />
              <p className="text-sm leading-relaxed">
                Hukuki süreçlerin sonucu, dosyanın koşullarına ve yargı
                merciinin değerlendirmesine bağlıdır; belirli bir sonuç
                taahhüdünde bulunulmaz.
              </p>
            </div>
          </div>
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
      <section
        aria-labelledby="makaleler-baslik"
        className="paper-grain relative overflow-hidden bg-surface-1 py-16 md:py-24"
      >
        <div className="container-editorial relative grid gap-y-10 lg:grid-cols-12 lg:gap-x-16">
          <div className="lg:col-span-4">
            <SectionLabel index="05">Makaleler</SectionLabel>
            <h2
              id="makaleler-baslik"
              className="mt-6 max-w-[14ch] font-serif text-3xl leading-[1.12] sm:text-4xl lg:text-[2.9rem]"
            >
              Güncel hukuki bilgilendirme yazıları
            </h2>
            <Link
              to="/makaleler"
              className="link-underline mt-8 min-h-11 text-sm"
            >
              Tüm makaleler
              <ArrowUpRight className="size-4 text-gold" aria-hidden="true" />
            </Link>
          </div>

          <div className="lg:col-span-8">
            {latest.map((article, i) => (
              <article
                key={article.slug}
                className={`grid gap-x-8 gap-y-2 border-b border-hairline py-7 first:pt-0 sm:grid-cols-[minmax(0,11rem)_1fr] ${
                  i === 0 ? "" : ""
                }`}
              >
                <div>
                  <p className="eyebrow">
                    {getCategory(article.categorySlug)?.title}
                  </p>
                  <p className="mt-2 text-xs text-muted-foreground">
                    <time dateTime={article.updatedAt ?? article.publishedAt}>
                      {formatDate(article.updatedAt ?? article.publishedAt)}
                    </time>
                    <span aria-hidden="true"> · </span>
                    {article.readingMinutes} dk okuma
                  </p>
                </div>
                <div>
                  <h3
                    className={`font-serif leading-snug ${
                      i === 0 ? "text-2xl sm:text-3xl" : "text-xl sm:text-2xl"
                    }`}
                  >
                    <Link
                      to="/makaleler/$slug"
                      params={{ slug: article.slug }}
                      className="transition-colors hover:text-accent"
                    >
                      {article.title}
                    </Link>
                  </h3>
                  <p className="mt-3 max-w-[62ch] text-sm text-muted-foreground">
                    {article.excerpt}
                  </p>
                  <Link
                    to="/makaleler/$slug"
                    params={{ slug: article.slug }}
                    className="link-underline mt-5 min-h-11 text-sm"
                  >
                    Makaleyi oku
                    <ArrowUpRight className="size-3.5 text-gold" aria-hidden="true" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 7 — Bursa yerel bağlantı */}
      <section
        aria-labelledby="bursa-baslik"
        className="paper-grain relative overflow-hidden bg-surface-2 py-16 md:py-24"
      >
        <div className="container-editorial relative grid gap-y-12 lg:grid-cols-12 lg:gap-x-16">
          <div className="lg:col-span-5">
            <SectionLabel index="06">Büro</SectionLabel>
            <h2
              id="bursa-baslik"
              className="mt-6 max-w-[14ch] font-serif text-3xl leading-[1.12] sm:text-4xl lg:text-[2.9rem]"
            >
              Osmangazi'deki büromuzda görüşme
            </h2>
            <p className="mt-6 max-w-[46ch] text-muted-foreground">
              Görüşmeler randevu ile yapılır. Bursa merkez ilçeleri ve çevre
              yerleşimlerdeki adliye ve icra dairelerindeki işlemler büro
              tarafından takip edilir.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                to="/iletisim"
                className="inline-flex min-h-12 items-center border border-foreground bg-foreground px-6 text-sm text-primary-foreground transition-colors hover:bg-transparent hover:text-foreground"
              >
                Randevu talebi
              </Link>
              <a
                href={site.contact.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center border border-foreground/40 px-6 text-sm transition-colors hover:border-foreground"
              >
                Haritada göster
              </a>
            </div>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <dl className="grid gap-x-10 gap-y-7 sm:grid-cols-2">
              {[
                {
                  t: "Adres",
                  d: (
                    <>
                      {site.contact.addressLine}
                      <br />
                      {site.contact.district} / {site.contact.city}
                    </>
                  ),
                },
                { t: "Çalışma Saatleri", d: site.contact.hours },
                { t: "Telefon", d: site.contact.phoneLabel },
                {
                  t: "E-posta",
                  d: (
                    <a
                      href={`mailto:${site.contact.email}`}
                      className="link-underline min-h-11 text-base"
                    >
                      {site.contact.email}
                    </a>
                  ),
                },
              ].map((item) => (
                <div key={item.t} className="border-t border-hairline pt-4">
                  <dt className="eyebrow">{item.t}</dt>
                  <dd className="mt-2">{item.d}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

    </>
  );
}
