import { createFileRoute } from "@tanstack/react-router";

/**
 * Periyodik SEO denetimi (sitemap + yapılandırılmış veri) için harici uç.
 * Yalnızca `x-seo-check-token` başlığı SEO_CHECK_TOKEN ile eşleşirse çalışır.
 * Sonuç `seo_checks` tablosuna yazılır; panelde "SEO kontrolleri" ekranında
 * hata uyarısı olarak görünür.
 */
export const Route = createFileRoute("/api/public/seo-check")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const expected = process.env["SEO_CHECK_TOKEN"];
        if (!expected) {
          return new Response(JSON.stringify({ error: "not_configured" }), {
            status: 503,
            headers: { "content-type": "application/json" },
          });
        }
        if (request.headers.get("x-seo-check-token") !== expected) {
          return new Response(JSON.stringify({ error: "unauthorized" }), {
            status: 401,
            headers: { "content-type": "application/json" },
          });
        }

        const { runSeoAudit, runRedirectReport, storeAudit } = await import(
          "@/lib/seo-audit.server"
        );

        const [audit, redirects] = await Promise.all([runSeoAudit(), runRedirectReport()]);

        await Promise.all([
          storeAudit("audit", {
            baseUrl: audit.baseUrl,
            checkedCount: audit.checkedCount,
            issueCount: audit.issues.length,
            status: audit.status,
            issues: audit.issues,
          }),
          storeAudit("redirects", {
            baseUrl: redirects.baseUrl,
            checkedCount: redirects.checks.length,
            issueCount: redirects.failed,
            status: redirects.status,
            issues: redirects.checks.filter((c) => !c.ok),
          }),
        ]);

        return new Response(
          JSON.stringify({
            audit: { status: audit.status, issues: audit.issues.length },
            redirects: { status: redirects.status, failed: redirects.failed },
          }),
          { headers: { "content-type": "application/json" } },
        );
      },
    },
  },
});
