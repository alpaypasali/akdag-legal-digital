import { createFileRoute } from "@tanstack/react-router";
import { useCallback, useEffect, useState } from "react";
import { toast } from "sonner";

import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Field } from "@/components/admin/admin-form";
import { normalizeSiteUrl, siteUrl } from "@/data/site";

export const Route = createFileRoute("/_authenticated/admin/alan-adi")({
  component: AdminDomain,
});

const BASE_KEY = "site_base_url";

type Probe = { label: string; path: string; status: number | null; ok: boolean };

function AdminDomain() {
  const [rowId, setRowId] = useState<string | null>(null);
  const [saved, setSaved] = useState("");
  const [draft, setDraft] = useState("");
  const [saving, setSaving] = useState(false);
  const [probes, setProbes] = useState<Probe[] | null>(null);
  const [testing, setTesting] = useState(false);

  const load = useCallback(async () => {
    const { data, error } = await supabase
      .from("site_settings")
      .select("id,value")
      .eq("key", BASE_KEY)
      .maybeSingle();
    if (error) {
      toast.error("Alan adı ayarı okunamadı");
      return;
    }
    setRowId(data?.id ?? null);
    setSaved(data?.value ?? "");
    setDraft(data?.value ?? "");
  }, []);

  useEffect(() => {
    void load();
  }, [load]);

  const normalized = normalizeSiteUrl(draft);
  const effective = normalized ?? siteUrl;

  async function save() {
    if (draft.trim() && !normalized) {
      toast.error("Geçerli bir adres girin. Örn: https://www.akdaghukuk.com.tr");
      return;
    }
    setSaving(true);
    const value = normalized ?? "";
    const { error } = rowId
      ? await supabase.from("site_settings").update({ value }).eq("id", rowId)
      : await supabase.from("site_settings").insert({
          key: BASE_KEY,
          value,
          label: "Site adresi (alan adı)",
          group_name: "genel",
          is_public: true,
        });
    setSaving(false);
    if (error) {
      toast.error(error.message);
      return;
    }
    toast.success("Alan adı kaydedildi. Canonical, og:url ve sitemap otomatik güncellenir.");
    void load();
  }

  async function test() {
    setTesting(true);
    const base = effective.replace(/\/$/, "");
    const targets: { label: string; path: string }[] = [
      { label: "Ana sayfa", path: "/" },
      { label: "Sitemap", path: "/sitemap.xml" },
      { label: "robots.txt", path: "/robots.txt" },
    ];
    const results = await Promise.all(
      targets.map(async (t) => {
        try {
          const res = await fetch(`${base}${t.path}`, { method: "GET" });
          return { ...t, status: res.status, ok: res.ok };
        } catch {
          return { ...t, status: null, ok: false };
        }
      }),
    );
    setProbes(results);
    setTesting(false);
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-serif text-3xl text-foreground">Alan adı</h1>
        <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
          Buraya kaydedilen adres site genelinde otomatik olarak senkronlanır:
          canonical etiketleri, og:url değerleri ve sitemap.xml içindeki tüm
          adresler bu değerden üretilir. Boş bırakılırsa varsayılan Lovable
          adresi kullanılır.
        </p>
      </div>

      <div className="max-w-xl space-y-4 rounded-lg border border-border bg-card p-6">
        <Field
          label="Site adresi"
          htmlFor="base-url"
          hint="Örn: https://www.akdaghukuk.com.tr — protokol yazmazsanız https:// eklenir."
        >
          <Input
            id="base-url"
            value={draft}
            placeholder="https://www.akdaghukuk.com.tr"
            onChange={(e) => setDraft(e.target.value)}
          />
        </Field>

        <dl className="space-y-1 text-sm">
          <div className="flex gap-2">
            <dt className="text-muted-foreground">Kayıtlı:</dt>
            <dd className="text-foreground">{saved || "— (varsayılan)"}</dd>
          </div>
          <div className="flex gap-2">
            <dt className="text-muted-foreground">Yürürlükte:</dt>
            <dd className="text-foreground">{effective}</dd>
          </div>
          <div className="flex gap-2">
            <dt className="text-muted-foreground">Örnek canonical:</dt>
            <dd className="text-foreground">{`${effective.replace(/\/$/, "")}/makaleler`}</dd>
          </div>
        </dl>

        <div className="flex gap-2">
          <Button onClick={save} disabled={saving}>
            {saving ? "Kaydediliyor…" : "Kaydet ve senkronla"}
          </Button>
          <Button variant="outline" onClick={test} disabled={testing}>
            {testing ? "Test ediliyor…" : "Bağlantıyı test et"}
          </Button>
        </div>
      </div>

      {probes ? (
        <div className="max-w-xl overflow-hidden rounded-lg border border-border">
          <table className="w-full text-sm">
            <thead className="bg-muted/50 text-left text-muted-foreground">
              <tr>
                <th className="px-4 py-3 font-medium">Kontrol</th>
                <th className="px-4 py-3 font-medium">Durum</th>
              </tr>
            </thead>
            <tbody>
              {probes.map((p) => (
                <tr key={p.path} className="border-t border-border">
                  <td className="px-4 py-3 text-foreground">
                    {p.label}
                    <span className="ml-2 text-xs text-muted-foreground">{p.path}</span>
                  </td>
                  <td className="px-4 py-3">
                    <span className={p.ok ? "text-primary" : "text-destructive"}>
                      {p.status === null ? "Erişilemedi" : `${p.status} ${p.ok ? "✓" : "✕"}`}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : null}
    </div>
  );
}
