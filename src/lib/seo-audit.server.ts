import { redirectRules } from "@/data/redirects";
import { siteUrl, normalizeSiteUrl } from "@/data/site";

/**
 * SEO denetim mantığı (yalnızca sunucuda çalışır).
 * - Yönlendirme kontrolü: eski adreslerin 301 ile doğru hedefe gitmesi.
 * - Sitemap + yapılandırılmış veri kontrolü: her adresin 200 dönmesi,
 *   canonical/title/description bulunması ve BlogPosting/FAQPage şemalarının
 *   geçerli JSON olması.
 */

export type SeoIssue = {
  url: string;
  severity: "error" | "warning";
  message: string;
};

export type SeoAuditResult = {
  baseUrl: string;
  checkedCount: number;
  issues: SeoIssue[];
  status: "ok" | "warning" | "error";
};

export type RedirectCheck = {
  from: string;
  expected: string;
  status: number;
  location: string | null;
  ok: boolean;
  message: string;
};

export type RedirectReport = {
  baseUrl: string;
  checks: RedirectCheck[];
  failed: number;
  status: "ok" | "error";
};

async function resolveBaseUrl(fallbackOrigin?: string): Promise<string> {
  try {
    const { fetchSiteSettings, SETTING_KEYS } = await import("@/lib/settings.functions");
    const settings = await fetchSiteSettings();
    const fromSettings = normalizeSiteUrl(settings[SETTING_KEYS.baseUrl]);
    if (fromSettings) return fromSettings;
  } catch {
    // ayarlar okunamadıysa varsayılana düşülür
  }
  return normalizeSiteUrl(fallbackOrigin) ?? siteUrl.replace(/\/$/, "");
}

function statusToSeverity(ok: boolean): "error" | "warning" {
  return ok ? "warning" : "error";
}

export async function runRedirectReport(fallbackOrigin?: string): Promise<RedirectReport> {
  const baseUrl = await resolveBaseUrl(fallbackOrigin);

  const checks: RedirectCheck[] = await Promise.all(
    redirectRules.map(async (rule) => {
      try {
        const res = await fetch(`${baseUrl}${rule.from}`, {
          redirect: "manual",
          headers: { "user-agent": "AkdagHukukSeoBot/1.0" },
        });
        const location = res.headers.get("location");
        const normalized = location
          ? location.replace(baseUrl, "").replace(/\/$/, "") || "/"
          : null;
        const expected = rule.to;
        const isPermanent = res.status === 301 || res.status === 308;
        const targetOk = normalized === expected;
        const ok = isPermanent && targetOk;
        let message = "301 yönlendirmesi doğru.";
        if (!isPermanent) message = `Beklenen 301 yerine ${res.status} döndü.`;
        else if (!targetOk) message = `Hedef ${normalized ?? "boş"} — beklenen ${expected}.`;
        return { from: rule.from, expected, status: res.status, location, ok, message };
      } catch (error) {
        return {
          from: rule.from,
          expected: rule.to,
          status: 0,
          location: null,
          ok: false,
          message: `İstek başarısız: ${(error as Error).message}`,
        };
      }
    }),
  );

  const failed = checks.filter((c) => !c.ok).length;
  return { baseUrl, checks, failed, status: failed > 0 ? "error" : "ok" };
}

function extractLocs(xml: string): string[] {
  return Array.from(xml.matchAll(/<loc>([^<]+)<\/loc>/g)).map((m) => m[1].trim());
}

function extractJsonLd(html: string): unknown[] {
  const blocks = Array.from(
    html.matchAll(
      /<script[^>]+type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi,
    ),
  );
  const parsed: unknown[] = [];
  for (const block of blocks) {
    try {
      parsed.push(JSON.parse(block[1]));
    } catch {
      parsed.push({ __invalid: true });
    }
  }
  return parsed;
}

function schemaTypes(nodes: unknown[]): string[] {
  const out: string[] = [];
  for (const node of nodes) {
    if (node && typeof node === "object") {
      const record = node as Record<string, unknown>;
      if (record.__invalid) out.push("__invalid");
      const type = record["@type"];
      if (typeof type === "string") out.push(type);
      if (Array.isArray(type)) out.push(...type.filter((t): t is string => typeof t === "string"));
      const graph = record["@graph"];
      if (Array.isArray(graph)) out.push(...schemaTypes(graph));
    }
  }
  return out;
}

export async function runSeoAudit(limit = 40, fallbackOrigin?: string): Promise<SeoAuditResult> {
  const baseUrl = await resolveBaseUrl(fallbackOrigin);
  const issues: SeoIssue[] = [];

  let locs: string[] = [];
  try {
    const res = await fetch(`${baseUrl}/sitemap.xml`, {
      headers: { "user-agent": "AkdagHukukSeoBot/1.0" },
    });
    if (!res.ok) {
      issues.push({
        url: `${baseUrl}/sitemap.xml`,
        severity: "error",
        message: `Sitemap ${res.status} döndü.`,
      });
    } else {
      locs = extractLocs(await res.text());
      if (locs.length === 0) {
        issues.push({
          url: `${baseUrl}/sitemap.xml`,
          severity: "error",
          message: "Sitemap içinde hiç adres yok.",
        });
      }
    }
  } catch (error) {
    issues.push({
      url: `${baseUrl}/sitemap.xml`,
      severity: "error",
      message: `Sitemap okunamadı: ${(error as Error).message}`,
    });
  }

  const targets = locs.slice(0, limit);

  await Promise.all(
    targets.map(async (loc) => {
      try {
        const res = await fetch(loc, {
          headers: { "user-agent": "AkdagHukukSeoBot/1.0" },
        });
        if (!res.ok) {
          issues.push({ url: loc, severity: "error", message: `Sayfa ${res.status} döndü.` });
          return;
        }
        const html = await res.text();

        const title = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1]?.trim() ?? "";
        if (!title) {
          issues.push({ url: loc, severity: "error", message: "Başlık (title) yok." });
        } else if (title.length > 65) {
          issues.push({
            url: loc,
            severity: "warning",
            message: `Başlık ${title.length} karakter (65 üstü).`,
          });
        }

        const hasDescription = /<meta[^>]+name="description"[^>]+content="[^"]+"/i.test(html);
        if (!hasDescription) {
          issues.push({ url: loc, severity: "error", message: "Meta description yok." });
        }

        const canonical = html.match(
          /<link[^>]+rel="canonical"[^>]+href="([^"]+)"/i,
        )?.[1];
        if (!canonical) {
          issues.push({ url: loc, severity: "error", message: "Canonical etiketi yok." });
        } else if (canonical.replace(/\/$/, "") !== loc.replace(/\/$/, "")) {
          issues.push({
            url: loc,
            severity: "warning",
            message: `Canonical farklı: ${canonical}`,
          });
        }

        const types = schemaTypes(extractJsonLd(html));
        if (types.includes("__invalid")) {
          issues.push({
            url: loc,
            severity: "error",
            message: "Geçersiz JSON-LD bloğu (ayrıştırılamadı).",
          });
        }

        const isArticle = /\/makaleler\/[^/]+$/.test(new URL(loc).pathname);
        if (isArticle) {
          if (!types.includes("BlogPosting") && !types.includes("Article")) {
            issues.push({
              url: loc,
              severity: statusToSeverity(false),
              message: "Makalede BlogPosting şeması bulunamadı.",
            });
          }
          const hasFaqBlock = /id="sss"|Sık(ça)? sorulan/i.test(html);
          if (hasFaqBlock && !types.includes("FAQPage")) {
            issues.push({
              url: loc,
              severity: "warning",
              message: "Sayfada SSS bölümü var ama FAQPage şeması yok.",
            });
          }
        }
      } catch (error) {
        issues.push({
          url: loc,
          severity: "error",
          message: `Sayfa okunamadı: ${(error as Error).message}`,
        });
      }
    }),
  );

  const status: SeoAuditResult["status"] = issues.some((i) => i.severity === "error")
    ? "error"
    : issues.length > 0
      ? "warning"
      : "ok";

  return { baseUrl, checkedCount: targets.length, issues, status };
}

/** Denetim sonucunu geçmişe kaydeder (panelde listelenir). */
export async function storeAudit(
  kind: "audit" | "redirects",
  payload: {
    baseUrl: string;
    checkedCount: number;
    issueCount: number;
    status: string;
    issues: unknown;
  },
) {
  const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
  await supabaseAdmin.from("seo_checks").insert({
    kind,
    status: payload.status,
    base_url: payload.baseUrl,
    checked_count: payload.checkedCount,
    issue_count: payload.issueCount,
    issues: payload.issues as never,
  });
}
