import { createServerFn } from "@tanstack/react-start";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";

/**
 * Panelden çalıştırılan SEO kontrolleri. Tüm mantık `seo-audit.server.ts`
 * içindedir; bu dosya yalnızca ince sunucu fonksiyonu sarmalayıcısıdır.
 */

export const checkRedirects = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .handler(async () => {
    const { runRedirectReport, storeAudit } = await import("@/lib/seo-audit.server");
    const report = await runRedirectReport();
    await storeAudit("redirects", {
      baseUrl: report.baseUrl,
      checkedCount: report.checks.length,
      issueCount: report.failed,
      status: report.status,
      issues: report.checks.filter((c) => !c.ok),
    });
    return report;
  });

export const runAudit = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .handler(async () => {
    const { runSeoAudit, storeAudit } = await import("@/lib/seo-audit.server");
    const result = await runSeoAudit();
    await storeAudit("audit", {
      baseUrl: result.baseUrl,
      checkedCount: result.checkedCount,
      issueCount: result.issues.length,
      status: result.status,
      issues: result.issues,
    });
    return result;
  });
