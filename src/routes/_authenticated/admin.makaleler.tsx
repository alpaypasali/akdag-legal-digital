import { createFileRoute } from "@tanstack/react-router";
import { useCallback, useEffect, useState } from "react";
import { toast } from "sonner";

import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Field, arrayToLines, linesToArray, slugify } from "@/components/admin/admin-form";

export const Route = createFileRoute("/_authenticated/admin/makaleler")({
  component: AdminArticles,
});

type ArticleRecord = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category_slug: string;
  author: string;
  published_at: string;
  content_updated_at: string | null;
  reading_minutes: number;
  related_area_slug: string | null;
  sections: unknown;
  sources: unknown;
  meta_title: string;
  meta_description: string;
  noindex: boolean;
  status: string;
};

const emptyArticle = (): ArticleRecord => ({
  id: "",
  slug: "",
  title: "",
  excerpt: "",
  category_slug: "",
  author: "Av. Kutay Onat Akdağ",
  published_at: new Date().toISOString().slice(0, 10),
  content_updated_at: null,
  reading_minutes: 5,
  related_area_slug: "",
  sections: [],
  sources: [],
  meta_title: "",
  meta_description: "",
  noindex: false,
  status: "draft",
});

function AdminArticles() {
  const [rows, setRows] = useState<ArticleRecord[]>([]);
  const [categories, setCategories] = useState<{ slug: string; title: string }[]>([]);
  const [areas, setAreas] = useState<{ slug: string; title: string }[]>([]);
  const [editing, setEditing] = useState<ArticleRecord | null>(null);
  const [sectionsText, setSectionsText] = useState("[]");
  const [saving, setSaving] = useState(false);

  const load = useCallback(async () => {
    const [articlesRes, categoriesRes, areasRes] = await Promise.all([
      supabase.from("articles").select("*").order("published_at", { ascending: false }),
      supabase.from("article_categories").select("slug,title").order("sort_order"),
      supabase.from("practice_areas").select("slug,title").order("sort_order"),
    ]);
    if (articlesRes.error) toast.error(articlesRes.error.message);
    setRows((articlesRes.data ?? []) as ArticleRecord[]);
    setCategories(categoriesRes.data ?? []);
    setAreas(areasRes.data ?? []);
  }, []);

  useEffect(() => {
    void load();
  }, [load]);

  function startEdit(record: ArticleRecord) {
    setEditing({ ...record });
    setSectionsText(JSON.stringify(record.sections ?? [], null, 2));
  }

  async function save() {
    if (!editing) return;
    let sections: unknown;
    try {
      sections = JSON.parse(sectionsText || "[]");
      if (!Array.isArray(sections)) throw new Error("Bölümler bir liste olmalı.");
    } catch (error) {
      toast.error(
        error instanceof Error ? `Bölüm JSON hatası: ${error.message}` : "Bölüm JSON hatası",
      );
      return;
    }

    const payload = {
      slug: editing.slug || slugify(editing.title),
      title: editing.title.trim(),
      excerpt: editing.excerpt.trim(),
      category_slug: editing.category_slug,
      author: editing.author.trim(),
      published_at: editing.published_at,
      content_updated_at: editing.content_updated_at || null,
      reading_minutes: Number(editing.reading_minutes) || 5,
      related_area_slug: editing.related_area_slug || null,
      sections,
      sources: Array.isArray(editing.sources) ? editing.sources : [],
      meta_title: editing.meta_title.trim(),
      meta_description: editing.meta_description.trim(),
      noindex: editing.noindex,
      status: editing.status,
    };

    if (!payload.title || !payload.slug || !payload.category_slug) {
      toast.error("Başlık, adres (slug) ve kategori zorunludur.");
      return;
    }

    setSaving(true);
    const query = editing.id
      ? supabase.from("articles").update(payload).eq("id", editing.id)
      : supabase.from("articles").insert(payload);
    const { error } = await query;
    setSaving(false);

    if (error) {
      toast.error(error.message);
      return;
    }
    toast.success("Makale kaydedildi.");
    setEditing(null);
    void load();
  }

  async function remove(record: ArticleRecord) {
    if (!window.confirm(`"${record.title}" makalesi silinsin mi?`)) return;
    const { error } = await supabase.from("articles").delete().eq("id", record.id);
    if (error) {
      toast.error(error.message);
      return;
    }
    toast.success("Makale silindi.");
    void load();
  }

  if (editing) {
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between gap-4">
          <h1 className="font-serif text-2xl text-foreground">
            {editing.id ? "Makaleyi düzenle" : "Yeni makale"}
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
          <Field label="Başlık" htmlFor="title">
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
          <Field label="Adres (slug)" htmlFor="slug" hint="Örn: bosanma-davasi-sureci">
            <Input
              id="slug"
              value={editing.slug}
              onChange={(e) => setEditing({ ...editing, slug: e.target.value })}
            />
          </Field>
          <Field label="Kategori" htmlFor="category">
            <select
              id="category"
              className="h-10 w-full rounded-md border border-input bg-background px-3 text-sm"
              value={editing.category_slug}
              onChange={(e) => setEditing({ ...editing, category_slug: e.target.value })}
            >
              <option value="">Seçiniz</option>
              {categories.map((c) => (
                <option key={c.slug} value={c.slug}>
                  {c.title}
                </option>
              ))}
            </select>
          </Field>
          <Field label="İlgili çalışma alanı" htmlFor="area">
            <select
              id="area"
              className="h-10 w-full rounded-md border border-input bg-background px-3 text-sm"
              value={editing.related_area_slug ?? ""}
              onChange={(e) => setEditing({ ...editing, related_area_slug: e.target.value })}
            >
              <option value="">Yok</option>
              {areas.map((a) => (
                <option key={a.slug} value={a.slug}>
                  {a.title}
                </option>
              ))}
            </select>
          </Field>
          <Field label="Yayın tarihi" htmlFor="published">
            <Input
              id="published"
              type="date"
              value={editing.published_at}
              onChange={(e) => setEditing({ ...editing, published_at: e.target.value })}
            />
          </Field>
          <Field label="Güncelleme tarihi" htmlFor="updated">
            <Input
              id="updated"
              type="date"
              value={editing.content_updated_at ?? ""}
              onChange={(e) => setEditing({ ...editing, content_updated_at: e.target.value })}
            />
          </Field>
          <Field label="Okuma süresi (dk)" htmlFor="minutes">
            <Input
              id="minutes"
              type="number"
              min={1}
              value={editing.reading_minutes}
              onChange={(e) =>
                setEditing({ ...editing, reading_minutes: Number(e.target.value) })
              }
            />
          </Field>
          <Field label="Durum" htmlFor="status">
            <select
              id="status"
              className="h-10 w-full rounded-md border border-input bg-background px-3 text-sm"
              value={editing.status}
              onChange={(e) => setEditing({ ...editing, status: e.target.value })}
            >
              <option value="draft">Taslak</option>
              <option value="published">Yayında</option>
            </select>
          </Field>
        </div>

        <Field label="Özet" htmlFor="excerpt">
          <Textarea
            id="excerpt"
            rows={3}
            value={editing.excerpt}
            onChange={(e) => setEditing({ ...editing, excerpt: e.target.value })}
          />
        </Field>

        <Field
          label="Bölümler (JSON)"
          htmlFor="sections"
          hint='Örn: [{"id":"giris","heading":"Giriş","level":2,"paragraphs":["..."],"list":["..."]}]'
        >
          <Textarea
            id="sections"
            rows={16}
            className="font-mono text-xs"
            value={sectionsText}
            onChange={(e) => setSectionsText(e.target.value)}
          />
        </Field>

        <Field label="Kaynaklar (her satıra bir kaynak)" htmlFor="sources">
          <Textarea
            id="sources"
            rows={3}
            value={arrayToLines(editing.sources)}
            onChange={(e) => setEditing({ ...editing, sources: linesToArray(e.target.value) })}
          />
        </Field>

        <div className="grid gap-6 md:grid-cols-2">
          <Field label="SEO başlığı" htmlFor="metaTitle" hint="60 karakterin altında tutun.">
            <Input
              id="metaTitle"
              value={editing.meta_title}
              onChange={(e) => setEditing({ ...editing, meta_title: e.target.value })}
            />
          </Field>
          <Field
            label="SEO açıklaması"
            htmlFor="metaDescription"
            hint="160 karakterin altında tutun."
          >
            <Textarea
              id="metaDescription"
              rows={3}
              value={editing.meta_description}
              onChange={(e) => setEditing({ ...editing, meta_description: e.target.value })}
            />
          </Field>
        </div>

        <label className="flex items-center gap-2 text-sm text-muted-foreground">
          <input
            type="checkbox"
            checked={editing.noindex}
            onChange={(e) => setEditing({ ...editing, noindex: e.target.checked })}
          />
          Arama motorlarından gizle (noindex)
        </label>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between gap-4">
        <h1 className="font-serif text-3xl text-foreground">Makaleler</h1>
        <Button onClick={() => startEdit(emptyArticle())}>Yeni makale</Button>
      </div>

      <div className="overflow-x-auto rounded-lg border border-border">
        <table className="w-full text-sm">
          <thead className="bg-muted/50 text-left text-muted-foreground">
            <tr>
              <th className="px-4 py-3 font-medium">Başlık</th>
              <th className="px-4 py-3 font-medium">Kategori</th>
              <th className="px-4 py-3 font-medium">Tarih</th>
              <th className="px-4 py-3 font-medium">Durum</th>
              <th className="px-4 py-3" />
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.id} className="border-t border-border">
                <td className="px-4 py-3 text-foreground">{row.title}</td>
                <td className="px-4 py-3 text-muted-foreground">{row.category_slug}</td>
                <td className="px-4 py-3 text-muted-foreground">{row.published_at}</td>
                <td className="px-4 py-3">
                  <span
                    className={
                      row.status === "published" ? "text-primary" : "text-muted-foreground"
                    }
                  >
                    {row.status === "published" ? "Yayında" : "Taslak"}
                  </span>
                </td>
                <td className="px-4 py-3 text-right">
                  <div className="flex justify-end gap-2">
                    <Button variant="outline" size="sm" onClick={() => startEdit(row)}>
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
                  Henüz makale yok.
                </td>
              </tr>
            ) : null}
          </tbody>
        </table>
      </div>
    </div>
  );
}
