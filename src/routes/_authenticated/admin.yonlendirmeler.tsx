import { createFileRoute } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useState } from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { redirectRules } from "@/data/redirects";
import { checkRedirects } from "@/lib/seo-audit.functions";

export const Route = createFileRoute("/_authenticated/admin/yonlendirmeler")({
  component: AdminRedirects,
});

type Check = {
  from: string;
  expected: string;
  status: number;
  location: string | null;
  ok: boolean;
  message: string;
};

function AdminRedirects() {
  const run = useServerFn(checkRedirects);
  const [checks, setChecks] = useState<Check[] | null>(null);
  const [baseUrl, setBaseUrl] = useState("");
  const [loading, setLoading] = useState(false);

  async function test() {
    setLoading(true);
    try {
      const report = await run({ data: { origin: window.location.origin } });
      setChecks(report.checks);
      setBaseUrl(report.baseUrl);
      if (report.failed > 0) toast.error(`${report.failed} yönlendirme hatalı.`);
      else toast.success("Tüm 301 yönlendirmeleri doğru çalışıyor.");
    } catch (error) {
      toast.error((error as Error).message);
    } finally {
      setLoading(false);
    }
  }

  const rows = checks ?? redirectRules.map((r) => ({
    from: r.from,
    expected: r.to,
    status: 0,
    location: null,
    ok: false,
    message: "Henüz test edilmedi.",
  }));

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="font-serif text-3xl text-foreground">Yönlendirmeler</h1>
          <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
            Eski adreslerin yeni adreslere 301 (kalıcı) yönlendirilip
            yönlendirilmediğini canlı olarak test eder.
            {baseUrl ? ` Test adresi: ${baseUrl}` : ""}
          </p>
        </div>
        <Button onClick={test} disabled={loading}>
          {loading ? "Test ediliyor…" : "Yönlendirmeleri test et"}
        </Button>
      </div>

      <div className="overflow-x-auto rounded-lg border border-border">
        <table className="w-full text-sm">
          <thead className="bg-muted/50 text-left text-muted-foreground">
            <tr>
              <th className="px-4 py-3 font-medium">Eski adres</th>
              <th className="px-4 py-3 font-medium">Beklenen hedef</th>
              <th className="px-4 py-3 font-medium">Kod</th>
              <th className="px-4 py-3 font-medium">Sonuç</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.from} className="border-t border-border">
                <td className="px-4 py-3 text-foreground">{row.from}</td>
                <td className="px-4 py-3 text-muted-foreground">{row.expected}</td>
                <td className="px-4 py-3 text-muted-foreground">
                  {row.status ? row.status : "—"}
                </td>
                <td className="px-4 py-3">
                  <span
                    className={
                      checks ? (row.ok ? "text-primary" : "text-destructive") : "text-muted-foreground"
                    }
                  >
                    {row.message}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
