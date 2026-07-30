import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { slugify } from "@/components/admin/admin-form";

export type EditableSection = {
  id: string;
  heading: string;
  level: 2 | 3;
  paragraphs: string[];
  list: string[];
};

const linesToArray = (value: string): string[] =>
  value
    .split("\n")
    .map((l) => l.trim())
    .filter(Boolean);

/** Veritabanındaki JSON -> düzenlenebilir bölümler */
export function toEditableSections(value: unknown): EditableSection[] {
  if (!Array.isArray(value)) return [];
  return value.map((raw, index) => {
    const item = (raw ?? {}) as Record<string, unknown>;
    const heading = typeof item.heading === "string" ? item.heading : "";
    return {
      id: typeof item.id === "string" && item.id ? item.id : slugify(heading) || `bolum-${index + 1}`,
      heading,
      level: item.level === 3 ? 3 : 2,
      paragraphs: Array.isArray(item.paragraphs)
        ? item.paragraphs.filter((p): p is string => typeof p === "string")
        : [],
      list: Array.isArray(item.list) ? item.list.filter((p): p is string => typeof p === "string") : [],
    };
  });
}

/** Düzenlenebilir bölümler -> kaydedilecek JSON */
export function fromEditableSections(sections: EditableSection[]) {
  return sections
    .filter((s) => s.heading.trim() || s.paragraphs.length || s.list.length)
    .map((s, index) => ({
      id: s.id || slugify(s.heading) || `bolum-${index + 1}`,
      heading: s.heading.trim(),
      level: s.level,
      paragraphs: s.paragraphs,
      ...(s.list.length ? { list: s.list } : {}),
    }));
}

export function emptySection(index: number): EditableSection {
  return { id: `bolum-${index + 1}`, heading: "", level: 2, paragraphs: [], list: [] };
}

export function SectionsEditor({
  sections,
  onChange,
}: {
  sections: EditableSection[];
  onChange: (next: EditableSection[]) => void;
}) {
  const update = (index: number, patch: Partial<EditableSection>) => {
    onChange(sections.map((s, i) => (i === index ? { ...s, ...patch } : s)));
  };

  const move = (index: number, delta: number) => {
    const target = index + delta;
    if (target < 0 || target >= sections.length) return;
    const next = [...sections];
    [next[index], next[target]] = [next[target], next[index]];
    onChange(next);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between gap-4">
        <div>
          <Label>Makale bölümleri</Label>
          <p className="text-xs text-muted-foreground">
            Her bölüm için bir başlık ve metin yazın. Kod veya JSON yazmanıza gerek yok.
          </p>
        </div>
        <Button
          type="button"
          variant="outline"
          size="sm"
          onClick={() => onChange([...sections, emptySection(sections.length)])}
        >
          Bölüm ekle
        </Button>
      </div>

      {sections.length === 0 ? (
        <p className="rounded-md border border-dashed border-border px-4 py-8 text-center text-sm text-muted-foreground">
          Henüz bölüm yok. “Bölüm ekle” ile başlayın.
        </p>
      ) : null}

      {sections.map((section, index) => (
        <div key={index} className="space-y-4 rounded-lg border border-border p-4">
          <div className="flex items-center justify-between gap-3">
            <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
              Bölüm {index + 1}
            </span>
            <div className="flex gap-1">
              <Button type="button" variant="ghost" size="sm" onClick={() => move(index, -1)}>
                Yukarı
              </Button>
              <Button type="button" variant="ghost" size="sm" onClick={() => move(index, 1)}>
                Aşağı
              </Button>
              <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={() => onChange(sections.filter((_, i) => i !== index))}
              >
                Sil
              </Button>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-[1fr_180px]">
            <div className="space-y-2">
              <Label htmlFor={`heading-${index}`}>Bölüm başlığı</Label>
              <Input
                id={`heading-${index}`}
                value={section.heading}
                onChange={(e) =>
                  update(index, {
                    heading: e.target.value,
                    id: slugify(e.target.value) || `bolum-${index + 1}`,
                  })
                }
                placeholder="Örn: Boşanma davası nasıl açılır?"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor={`level-${index}`}>Başlık düzeyi</Label>
              <select
                id={`level-${index}`}
                className="h-10 w-full rounded-md border border-input bg-background px-3 text-sm"
                value={section.level}
                onChange={(e) => update(index, { level: e.target.value === "3" ? 3 : 2 })}
              >
                <option value={2}>Ana başlık</option>
                <option value={3}>Alt başlık</option>
              </select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor={`paragraphs-${index}`}>Metin</Label>
            <Textarea
              id={`paragraphs-${index}`}
              rows={6}
              value={section.paragraphs.join("\n\n")}
              onChange={(e) =>
                update(index, {
                  paragraphs: e.target.value
                    .split(/\n\s*\n/)
                    .map((p) => p.trim())
                    .filter(Boolean),
                })
              }
              placeholder="Paragraflarınızı normal şekilde yazın. Yeni paragraf için bir boş satır bırakın."
            />
            <p className="text-xs text-muted-foreground">
              Paragrafları ayırmak için aralarında bir boş satır bırakın.
            </p>
          </div>

          <div className="space-y-2">
            <Label htmlFor={`list-${index}`}>Madde listesi (isteğe bağlı)</Label>
            <Textarea
              id={`list-${index}`}
              rows={3}
              value={section.list.join("\n")}
              onChange={(e) => update(index, { list: linesToArray(e.target.value) })}
              placeholder="Her satıra bir madde yazın."
            />
          </div>
        </div>
      ))}
    </div>
  );
}
