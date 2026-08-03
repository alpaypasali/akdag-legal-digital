import { createFileRoute, Link, Outlet, useNavigate, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useQueryClient } from "@tanstack/react-query";

import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/_authenticated/admin")({
  head: () => ({
    meta: [
      { title: "Yönetim Paneli | Akdağ Hukuk ve Danışmanlık" },
      { name: "description", content: "Makale ve çalışma alanı içerik yönetimi." },
      { name: "robots", content: "noindex, nofollow" },
      { property: "og:title", content: "Yönetim Paneli | Akdağ Hukuk" },
      { property: "og:description", content: "Makale ve çalışma alanı içerik yönetimi." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: AdminLayout,
});

const nav = [
  { to: "/admin", label: "Genel bakış", exact: true },
  { to: "/admin/makaleler", label: "Makaleler", exact: false },
  { to: "/admin/calisma-alanlari", label: "Çalışma alanları", exact: false },
  { to: "/admin/alan-adi", label: "Alan adı", exact: false },
  { to: "/admin/yonlendirmeler", label: "Yönlendirmeler", exact: false },
  { to: "/admin/seo", label: "SEO kontrolleri", exact: false },
  { to: "/admin/ayarlar", label: "Ayarlar", exact: false },
] as const;


function AdminLayout() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [email, setEmail] = useState<string | null>(null);

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => setEmail(data.user?.email ?? null));
  }, []);

  async function signOut() {
    await queryClient.cancelQueries();
    queryClient.clear();
    await supabase.auth.signOut();
    navigate({ to: "/admin/giris", replace: true });
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-4 px-6 py-4">
          <Link to="/" className="font-serif text-lg text-foreground">
            Akdağ Hukuk
          </Link>
          <span className="text-xs uppercase tracking-widest text-muted-foreground">Yönetim</span>
          <div className="ml-auto flex items-center gap-3 text-sm text-muted-foreground">
            {email ? <span className="hidden sm:inline">{email}</span> : null}
            <Button variant="outline" size="sm" onClick={signOut}>
              Çıkış
            </Button>
          </div>
        </div>
        <nav className="mx-auto flex max-w-6xl gap-1 overflow-x-auto px-4 pb-3">
          {nav.map((item) => {
            const active = item.exact ? pathname === item.to : pathname.startsWith(item.to);
            return (
              <Link
                key={item.to}
                to={item.to}
                className={`rounded-md px-3 py-2 text-sm transition-colors ${
                  active
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </header>
      <main className="mx-auto max-w-6xl px-6 py-10">
        <Outlet />
      </main>
    </div>
  );
}
