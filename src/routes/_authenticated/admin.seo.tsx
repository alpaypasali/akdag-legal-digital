import { createFileRoute } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useCallback, useEffect, useState } from "react";
import { toast } from "sonner";

import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { runAudit } from "@/lib/seo-audit.functions";

export const Route = createFileRoute("/_authenticated/admin/seo")({
  component: AdminSeoChecks,
});

type CheckRow = {
  id: string;
  kind: string;
  status: string;
  base_url: string;
  checked_count: number;
  issue_count: number;
  issues: unknown;
  created_at: string;
};

type Issue = { url: string; severity: string; message: string };

const kindLabels: Record<string, string> = {
  audit: "Sitemap + yapılandırılmış veri",
  redirects: "301 yönlendirmeleri",
};

function statusClass(status: string) {
  if (status === "error") return "text-destructive";
  if (status === "warning") return "text-gold";
  return "text-primary";
}

function statusLabel(status: string) {
  if (status === "error") return "Hata";
  if (status === "warning") return "Uyarı";
  return "Sorunsuz";
}

function AdminSeoChecks() {
  const run = useServerFn(runAudit);
  const [rows, setRows] = useState<CheckRow[]>([]);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState<string | null>(null);

  const load = useCallback(async () => {
    const { data, error } = await supabase
      .from("seo_checks")
      .select("id,kind,status,base_url,checked_count,issue_count,issues,created_at")
      .order("created_at", { ascending: false })
      .limit(25);
    if (error) {
      toast.error("Kontrol geçmişi okunamadı");
      return;
    }
    setRows((data ?? []) as CheckRow[]);
  }, []);

  useEffect(() => {
    void load();
  }, [load]);

  async function runNow() {
    setLoading(true);
    try {
      const result = await run({ data: { origin: window.location.origin } });
      if (result.status === "error") toast.error(`${result.issues.length} sorun bulundu.`);
      else if (result.status === "warning") toast.warning(`${result.issues.length} uyarı bulundu.`);
      else toast.success("Sitemap ve şemalar sorunsuz.");
      await load();
    } catch (error) {
      toast.error((error as Error).message);
    } finally {
      setLoading(false);
    }
  }

  const latestFailing = rows.find((r) => r.status !== "ok");

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="font-serif text-3xl text-foreground">SEO kontrolleri</h1>
          <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
            Sitemap adresleri, canonical etiketleri ve BlogPosting / FAQPage
            şemaları düzenli olarak taranır. Kontrolü buradan elle
            başlatabilirsiniz; periyodik tarama için{" "}
            <code className="text-xs">/api/public/seo-check</code> ucu
            <code className="text-xs"> x-seo-check-token</code> başlığıyla
            çağrılır.
          </p>
        </div>
        <Button onClick={runNow} disabled={loading}>
          {loading ? "Taranıyor…" : "Şimdi tara"}
        </Button>
      </div>

      {latestFailing ? (
        <div className="rounded-lg border border-destructive/40 bg-destructive/5 p-5">
          <p className="text-sm font-medium text-destructive">
            Son taramada sorun bulundu: {kindLabels[latestFailing.kind] ?? latestFailing.kind} —{" "}
            {latestFailing.issue_count} kayıt
          </p>
          <p className="mt-1 text-xs text-muted-foreground">
            {new Date(latestFailing.created_at).toLocaleString("tr-TR")}
          </p>
        </div>
      ) : rows.length > 0 ? (
        <div className="rounded-lg border border-border bg-card p-5 text-sm text-muted-foreground">
          Son taramalarda sorun yok.
        </div>
      ) : null}

      <div className="space-y-3">
        {rows.map((row) => {
          const issues = (Array.isArray(row.issues) ? row.issues : []) as Issue[];
          const expanded = open === row.id;
          return (
            <div key={row.id} className="rounded-lg border border-border bg-card">
              <button
                type="button"
                onClick={() => setOpen(expanded ? null : row.id)}
                className="flex w-full flex-wrap items-center gap-3 px-5 py-4 text-left"
              >
                <span className="text-sm text-foreground">
                  {kindLabels[row.kind] ?? row.kind}
                </span>
                <span className={`text-sm ${statusClass(row.status)}`}>
                  {statusLabel(row.status)}
                </span>
                <span className="text-xs text-muted-foreground">
                  {row.checked_count} kontrol · {row.issue_count} sorun
                </span>
                <span className="ml-auto text-xs text-muted-foreground">
                  {new Date(row.created_at).toLocaleString("tr-TR")}
                </span>
              </button>
              {expanded ? (
                <div className="border-t border-border px-5 py-4">
                  {issues.length === 0 ? (
                    <p className="text-sm text-muted-foreground">Kayıtlı sorun yok.</p>
                  ) : (
                    <ul className="space-y-2 text-sm">
                      {issues.map((issue, index) => (
                        <li key={`${issue.url}-${index}`} className="space-y-0.5">
                          <p className="break-all text-foreground">
                            {issue.url ?? (issue as unknown as { from: string }).from}
                          </p>
                          <p className="text-xs text-muted-foreground">{issue.message}</p>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ) : null}
            </div>
          );
        })}
        {rows.length === 0 ? (
          <p className="text-sm text-muted-foreground">
            Henüz tarama yapılmadı. “Şimdi tara” ile başlayabilirsiniz.
          </p>
        ) : null}
      </div>
    </div>
  );
}
