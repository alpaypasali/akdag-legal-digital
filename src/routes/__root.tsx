import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ContactDock } from "@/components/contact-dock";
import { CookieConsent } from "@/components/cookie-consent";
import { AnalyticsTracker } from "@/components/analytics-tracker";
import { absoluteUrl, setSiteUrlOverride, site } from "@/data/site";
import { fetchSiteSettings, SETTING_KEYS } from "@/lib/settings.functions";
import faviconAsset from "@/assets/favicon.png";
import logoFooterAsset from "@/assets/logo-footer.webp";

function NotFoundComponent() {
  return (
    <div className="container-editorial flex min-h-[60vh] flex-col justify-center py-20">
      <p className="rule-number">404</p>
      <h1 className="mt-4 font-serif text-4xl sm:text-5xl">Sayfa bulunamadı</h1>
      <p className="measure mt-4 text-muted-foreground">
        Aradığınız sayfa taşınmış veya kaldırılmış olabilir. Çalışma alanlarına
        ya da makalelere göz atabilirsiniz.
      </p>
      <div className="mt-8 flex flex-wrap gap-4">
        <Link
          to="/calisma-alanlari"
          className="inline-flex min-h-12 items-center border border-foreground bg-foreground px-6 text-sm text-primary-foreground"
        >
          Çalışma Alanları
        </Link>
        <Link
          to="/iletisim"
          className="inline-flex min-h-12 items-center border border-foreground px-6 text-sm"
        >
          İletişim
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="container-editorial flex min-h-[60vh] flex-col justify-center py-20">
      <p className="rule-number">500</p>
      <h1 className="mt-4 font-serif text-4xl sm:text-5xl">
        Bu sayfa yüklenemedi
      </h1>
      <p className="measure mt-4 text-muted-foreground">
        Beklenmeyen bir sorun oluştu. Sayfayı yeniden deneyebilir veya ana
        sayfaya dönebilirsiniz.
      </p>
      <div className="mt-8 flex flex-wrap gap-4">
        <button
          onClick={() => {
            router.invalidate();
            reset();
          }}
          className="inline-flex min-h-12 items-center border border-foreground bg-foreground px-6 text-sm text-primary-foreground"
        >
          Yeniden dene
        </button>
        <a
          href="/"
          className="inline-flex min-h-12 items-center border border-foreground px-6 text-sm"
        >
          Ana sayfa
        </a>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  loader: () => fetchSiteSettings(),
  head: ({ loaderData }) => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: `${site.name} | Bursa` },
      { name: "description", content: site.description },
      { name: "author", content: site.lawyer },
      { property: "og:site_name", content: site.name },
      { property: "og:locale", content: "tr_TR" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "theme-color", content: "#101114" },
      // Google Search Console doğrulaması yalnızca panelden girildiyse eklenir.
      ...(loaderData?.[SETTING_KEYS.siteVerification]
        ? [
            {
              name: "google-site-verification",
              content: loaderData[SETTING_KEYS.siteVerification],
            },
          ]
        : []),
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: faviconAsset, type: "image/png" },
      { rel: "apple-touch-icon", href: logoFooterAsset },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        // display=optional: webfont ilk boyamaya yetişmezse yedek metrik font
        // kullanılır; böylece geç gelen font düzen kaymasına (CLS) yol açmaz.
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300;9..144,400;9..144,500&family=Source+Sans+3:wght@400;500;600&display=optional&subset=latin,latin-ext",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LegalService",
          "@id": `${absoluteUrl("/")}#legalservice`,
          name: site.name,
          url: absoluteUrl("/"),
          areaServed: ["Bursa", "Osmangazi", "Türkiye"],
          email: site.contact.email,
          telephone: site.contact.phoneHref,
          address: {
            "@type": "PostalAddress",
            streetAddress: site.contact.addressLine,
            postalCode: site.contact.postalCode,
            addressLocality: site.contact.district,
            addressRegion: site.contact.city,
            addressCountry: "TR",
          },
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="tr">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const settings = Route.useLoaderData();

  // Panelde kayıtlı alan adı istemci tarafında da yürürlüğe girer.
  useEffect(() => {
    setSiteUrlOverride(settings?.[SETTING_KEYS.baseUrl]);
  }, [settings]);

  return (
    <QueryClientProvider client={queryClient}>
      <a
        href="#icerik"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:border focus:border-gold focus:bg-background focus:px-4 focus:py-3 focus:text-sm"
      >
        İçeriğe geç
      </a>
      <SiteHeader />
      <main id="icerik">
        {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
        <Outlet />
      </main>
      <SiteFooter />
      <ContactDock />
      <CookieConsent />
      <AnalyticsTracker measurementId={settings?.[SETTING_KEYS.gaId]} />
    </QueryClientProvider>
  );
}
