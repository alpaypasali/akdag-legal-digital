import { createFileRoute } from "@tanstack/react-router";
import { useCallback, useEffect, useState } from "react";
import { toast } from "sonner";

import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Field, arrayToLines, linesToArray, slugify } from "@/components/admin/admin-form";

export const Route = createFileRoute("/_authenticated/admin/calisma-alanlari")({
  component: AdminPracticeAreas,
});

type AreaRecord = {
  id: string;
  slug: string;
  title: string;
  summary: string;
  featured: boolean;
  sort_order: number;
  heading: string;
  intro: string;
  scope: unknown;
  processes: unknown;
  situations: unknown;
  process_note: string;
  image_url: string | null;
  image_alt: string | null;
  meta_title: string;
  meta_description: string;
  is_active: boolean;
};

const emptyArea = (order: number): AreaRecord => ({
  id: "",
  slug: "",
  title: "",
  summary: "",
  featured: false,
  sort_order: order,
  heading: "",
  intro: "",
  scope: [],
  processes: [],
  situations: [],
  process_note: "",
  image_url: "",
  image_alt: "",
  meta_title: "",
  meta_description: "",
  is_active: true,
});

function AdminPracticeAreas() {
  const [rows, setRows] = useState<AreaRecord[]>([]);
  const [editing, setEditing] = useState<AreaRecord | null>(null);
  const [saving, setSaving] = useState(false);

  const load = useCallback(async () => {
    const { data, error } = await supabase
      .from("practice_areas")
      .select("*")
      .order("sort_order", { ascending: true });
    if (error) toast.error(error.message);
    setRows((data ?? []) as AreaRecord[]);
  }, []);

  useEffect(() => {
    void load();
  }, [load]);

  async function save() {
    if (!editing) return;
    const payload = {
      slug: editing.slug || slugify(editing.title),
      title: editing.title.trim(),
      summary: editing.summary.trim(),
      featured: editing.featured,
      sort_order: Number(editing.sort_order) || 0,
      heading: editing.heading.trim(),
      intro: editing.intro.trim(),
      scope: Array.isArray(editing.scope) ? editing.scope : [],
      processes: Array.isArray(editing.processes) ? editing.processes : [],
      situations: Array.isArray(editing.situations) ? editing.situations : [],
      process_note: editing.process_note.trim(),
      image_url: editing.image_url || null,
      image_alt: editing.image_alt || null,
      meta_title: editing.meta_title.trim(),
      meta_description: editing.meta_description.trim(),
      is_active: editing.is_active,
    };

    if (!payload.title || !payload.slug) {
      toast.error("Başlık ve adres (slug) zorunludur.");
      return;
    }

    setSaving(true);
    const query = editing.id
      ? supabase.from("practice_areas").update(payload).eq("id", editing.id)
      : supabase.from("practice_areas").insert(payload);
    const { error } = await query;
    setSaving(false);

    if (error) {
      toast.error(error.message);
      return;
    }
    toast.success("Çalışma alanı kaydedildi.");
    setEditing(null);
    void load();
  }

  async function remove(record: AreaRecord) {
    if (!window.confirm(`"${record.title}" alanı silinsin mi?`)) return;
    const { error } = await supabase.from("practice_areas").delete().eq("id", record.id);
    if (error) {
      toast.error(error.message);
      return;
    }
    toast.success("Çalışma alanı silindi.");
    void load();
  }

  if (editing) {
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between gap-4">
          <h1 className="font-serif text-2xl text-foreground">
            {editing.id ? "Çalışma alanını düzenle" : "Yeni çalışma alanı"}
          </h1>
          <div className="flex gap-2">
            <Button variant="outline" onClick={() => setEditing(null)}>
              Vazgeç
            </Button>
            <Button onClick={save} disabled={saving}>
              {saving ? "Kaydediliyor…" : "Kaydet"}
            </Button>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Field label="Başlık" htmlFor="title" hint="Örn: Bursa Aile Hukuku Avukatı">
            <Input
              id="title"
              value={editing.title}
              onChange={(e) =>
                setEditing({
                  ...editing,
                  title: e.target.value,
                  slug: editing.id ? editing.slug : slugify(e.target.value),
                })
              }
            />
          </Field>
          <Field label="Adres (slug)" htmlFor="slug">
            <Input
              id="slug"
              value={editing.slug}
              onChange={(e) => setEditing({ ...editing, slug: e.target.value })}
            />
          </Field>
          <Field label="Detay sayfası başlığı (H1)" htmlFor="heading">
            <Input
              id="heading"
              value={editing.heading}
              onChange={(e) => setEditing({ ...editing, heading: e.target.value })}
            />
          </Field>
          <Field label="Sıra" htmlFor="order">
            <Input
              id="order"
              type="number"
              value={editing.sort_order}
              onChange={(e) => setEditing({ ...editing, sort_order: Number(e.target.value) })}
            />
          </Field>
        </div>
        <p className="text-sm text-muted-foreground">
          Görseller sabittir; her çalışma alanı için site içinde tanımlı görsel kullanılır.
        </p>

        <Field label="Kart özeti" htmlFor="summary">
          <Textarea
            id="summary"
            rows={2}
            value={editing.summary}
            onChange={(e) => setEditing({ ...editing, summary: e.target.value })}
          />
        </Field>

        <Field label="Giriş metni" htmlFor="intro">
          <Textarea
            id="intro"
            rows={4}
            value={editing.intro}
            onChange={(e) => setEditing({ ...editing, intro: e.target.value })}
          />
        </Field>

        <div className="grid gap-6 md:grid-cols-3">
          <Field label="Kapsam (her satıra bir madde)" htmlFor="scope">
            <Textarea
              id="scope"
              rows={8}
              value={arrayToLines(editing.scope)}
              onChange={(e) => setEditing({ ...editing, scope: linesToArray(e.target.value) })}
            />
          </Field>
          <Field label="Süreç adımları" htmlFor="processes">
            <Textarea
              id="processes"
              rows={8}
              value={arrayToLines(editing.processes)}
              onChange={(e) =>
                setEditing({ ...editing, processes: linesToArray(e.target.value) })
              }
            />
          </Field>
          <Field label="Tipik durumlar" htmlFor="situations">
            <Textarea
              id="situations"
              rows={8}
              value={arrayToLines(editing.situations)}
              onChange={(e) =>
                setEditing({ ...editing, situations: linesToArray(e.target.value) })
              }
            />
          </Field>
        </div>

        <Field label="Süreç notu" htmlFor="processNote">
          <Textarea
            id="processNote"
            rows={3}
            value={editing.process_note}
            onChange={(e) => setEditing({ ...editing, process_note: e.target.value })}
          />
        </Field>

        <div className="grid gap-6 md:grid-cols-2">
          <Field label="SEO başlığı" htmlFor="metaTitle">
            <Input
              id="metaTitle"
              value={editing.meta_title}
              onChange={(e) => setEditing({ ...editing, meta_title: e.target.value })}
            />
          </Field>
          <Field label="SEO açıklaması" htmlFor="metaDescription">
            <Textarea
              id="metaDescription"
              rows={3}
              value={editing.meta_description}
              onChange={(e) => setEditing({ ...editing, meta_description: e.target.value })}
            />
          </Field>
        </div>

        <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={editing.featured}
              onChange={(e) => setEditing({ ...editing, featured: e.target.checked })}
            />
            Ana sayfada öne çıkar
          </label>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={editing.is_active}
              onChange={(e) => setEditing({ ...editing, is_active: e.target.checked })}
            />
            Sitede yayında
          </label>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between gap-4">
        <h1 className="font-serif text-3xl text-foreground">Çalışma alanları</h1>
        <Button onClick={() => setEditing(emptyArea(rows.length + 1))}>Yeni alan</Button>
      </div>

      <div className="overflow-x-auto rounded-lg border border-border">
        <table className="w-full text-sm">
          <thead className="bg-muted/50 text-left text-muted-foreground">
            <tr>
              <th className="px-4 py-3 font-medium">Sıra</th>
              <th className="px-4 py-3 font-medium">Başlık</th>
              <th className="px-4 py-3 font-medium">Öne çıkan</th>
              <th className="px-4 py-3 font-medium">Durum</th>
              <th className="px-4 py-3" />
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.id} className="border-t border-border">
                <td className="px-4 py-3 text-muted-foreground">{row.sort_order}</td>
                <td className="px-4 py-3 text-foreground">{row.title}</td>
                <td className="px-4 py-3 text-muted-foreground">{row.featured ? "Evet" : "—"}</td>
                <td className="px-4 py-3">
                  <span className={row.is_active ? "text-primary" : "text-muted-foreground"}>
                    {row.is_active ? "Yayında" : "Gizli"}
                  </span>
                </td>
                <td className="px-4 py-3 text-right">
                  <div className="flex justify-end gap-2">
                    <Button variant="outline" size="sm" onClick={() => setEditing({ ...row })}>
                      Düzenle
                    </Button>
                    <Button variant="ghost" size="sm" onClick={() => remove(row)}>
                      Sil
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
            {rows.length === 0 ? (
              <tr>
                <td colSpan={5} className="px-4 py-8 text-center text-muted-foreground">
                  Henüz çalışma alanı yok.
                </td>
              </tr>
            ) : null}
          </tbody>
        </table>
      </div>
    </div>
  );
}
