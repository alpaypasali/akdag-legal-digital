import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/_authenticated")({
  ssr: false,
  beforeLoad: async () => {
    // Kimlik istemcisi yalnızca yönetim paneline girilirken yüklenir;
    // herkese açık sayfaların ana paketi küçük kalır.
    const { supabase } = await import("@/integrations/supabase/client");
    const { data, error } = await supabase.auth.getUser();
    if (error || !data.user) throw redirect({ to: "/admin/giris" });
    return { user: data.user };
  },

  component: () => <Outlet />,
});
