import { createFileRoute } from "@tanstack/react-router";
import { useCallback, useEffect, useState } from "react";
import { toast } from "sonner";

import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const Route = createFileRoute("/_authenticated/admin/ayarlar")({
  component: AdminSettings,
});

type SettingRow = {
  id: string;
  key: string;
  value: string;
  label: string;
  description: string;
  group_name: string;
  placeholder: string;
  sort_order: number;
};

const groupTitles: Record<string, string> = {
  google: "Google entegrasyonları",
  genel: "Genel",
};

function AdminSettings() {
  const [rows, setRows] = useState<SettingRow[]>([]);
  const [draft, setDraft] = useState<Record<string, string>>({});
  const [saving, setSaving] = useState(false);

  const load = useCallback(async () => {
    const { data, error } = await supabase
      .from("site_settings")
      .select("id,key,value,label,description,group_name,placeholder,sort_order")
      .order("group_name", { ascending: true })
      .order("sort_order", { ascending: true });
    if (error) {
      toast.error("Ayarlar yüklenemedi");
      return;
    }
    const list = (data ?? []) as SettingRow[];
    setRows(list);
    setDraft(Object.fromEntries(list.map((r) => [r.id, r.value ?? ""])));
  }, []);

  useEffect(() => {
    void load();
  }, [load]);

  async function save() {
    setSaving(true);
    const changed = rows.filter((r) => (draft[r.id] ?? "") !== (r.value ?? ""));
    if (changed.length === 0) {
      setSaving(false);
      toast.info("Değişiklik yok");
      return;
    }
    for (const row of changed) {
      const { error } = await supabase
        .from("site_settings")
        .update({ value: (draft[row.id] ?? "").trim() })
        .eq("id", row.id);
      if (error) {
        setSaving(false);
        toast.error(`${row.label} kaydedilemedi: ${error.message}`);
        return;
      }
    }
    setSaving(false);
    toast.success("Ayarlar kaydedildi. Site birkaç saniye içinde güncellenir.");
    void load();
  }

  const groups = Array.from(new Set(rows.map((r) => r.group_name)));

  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-serif text-3xl text-foreground">Ayarlar</h1>
        <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
          Google Analytics, Search Console doğrulaması, harita ve işletme
          profili bağlantıları buradan yönetilir. Boş bıraktığınız ayarlar
          sitede hiç kullanılmaz — örneğin ölçüm kimliği boşken hiçbir analiz
          kodu yüklenmez.
        </p>
      </div>

      {groups.map((group) => (
        <section key={group} className="space-y-5">
          <h2 className="text-xs uppercase tracking-widest text-muted-foreground">
            {groupTitles[group] ?? group}
          </h2>
          {rows
            .filter((r) => r.group_name === group)
            .map((row) => (
              <div key={row.id} className="space-y-1.5">
                <label
                  htmlFor={`setting-${row.id}`}
                  className="block text-sm font-medium text-foreground"
                >
                  {row.label || row.key}
                </label>
                {row.description ? (
                  <p className="text-xs text-muted-foreground">{row.description}</p>
                ) : null}
                <Input
                  id={`setting-${row.id}`}
                  value={draft[row.id] ?? ""}
                  placeholder={row.placeholder}
                  onChange={(e) =>
                    setDraft((d) => ({ ...d, [row.id]: e.target.value }))
                  }
                />
              </div>
            ))}
        </section>
      ))}

      <div className="sticky bottom-4">
        <Button onClick={save} disabled={saving}>
          {saving ? "Kaydediliyor…" : "Kaydet"}
        </Button>
      </div>
    </div>
  );
}
