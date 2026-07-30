import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/_authenticated/admin/")({
  component: AdminDashboard,
});

function AdminDashboard() {
  const [stats, setStats] = useState({ published: 0, draft: 0, areas: 0 });
  const [role, setRole] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      const [published, draft, areas, roles] = await Promise.all([
        supabase.from("articles").select("id", { count: "exact", head: true }).eq("status", "published"),
        supabase.from("articles").select("id", { count: "exact", head: true }).eq("status", "draft"),
        supabase.from("practice_areas").select("id", { count: "exact", head: true }),
        supabase.from("user_roles").select("role").limit(1),
      ]);
      setStats({
        published: published.count ?? 0,
        draft: draft.count ?? 0,
        areas: areas.count ?? 0,
      });
      setRole(roles.data?.[0]?.role ?? null);
    })();
  }, []);

  const cards = [
    { label: "Yayındaki makale", value: stats.published, to: "/admin/makaleler" },
    { label: "Taslak makale", value: stats.draft, to: "/admin/makaleler" },
    { label: "Çalışma alanı", value: stats.areas, to: "/admin/calisma-alanlari" },
  ] as const;

  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-serif text-3xl text-foreground">Genel bakış</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Yetki: {role ? role : "tanımlı değil — düzenleme yapamazsınız"}
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        {cards.map((card) => (
          <Link
            key={card.label}
            to={card.to}
            className="rounded-lg border border-border bg-card p-6 transition-colors hover:border-primary/50"
          >
            <p className="text-sm text-muted-foreground">{card.label}</p>
            <p className="mt-3 font-serif text-4xl text-foreground">{card.value}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
