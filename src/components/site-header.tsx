import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { LogoLink } from "@/components/brand";
import { mainNav } from "@/data/site";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/92 backdrop-blur-sm">
      <div className="container-editorial grid h-16 grid-cols-[minmax(0,1fr)_auto] items-center gap-4 md:h-20">
        <LogoLink />

        <nav aria-label="Ana menü" className="hidden items-center gap-8 lg:flex">
          {mainNav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              className="relative py-1 text-sm text-muted-foreground transition-colors hover:text-foreground data-[status=active]:text-foreground data-[status=active]:after:absolute data-[status=active]:after:inset-x-0 data-[status=active]:after:-bottom-0.5 data-[status=active]:after:h-px data-[status=active]:after:bg-gold"
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/iletisim"
            className="inline-flex min-h-11 items-center border border-foreground px-5 text-sm text-foreground transition-colors hover:bg-foreground hover:text-primary-foreground"
          >
            Randevu ve İletişim
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Menüyü aç"
          aria-expanded={open}
          aria-controls="mobil-menu"
          className="inline-flex size-11 items-center justify-center border border-border lg:hidden"
        >
          <Menu className="size-5" aria-hidden="true" />
        </button>
      </div>

      {open ? <MobileMenu onClose={() => setOpen(false)} /> : null}
    </header>
  );
}

function MobileMenu({ onClose }: { onClose: () => void }) {
  return (
    <div
      id="mobil-menu"
      role="dialog"
      aria-modal="true"
      aria-label="Site menüsü"
      className="fixed inset-0 z-50 flex flex-col bg-ink text-ink-foreground lg:hidden"
    >
      <div className="container-editorial flex h-16 items-center justify-between border-b border-hairline-invert">
        <LogoLink tone="invert" />
        <button
          type="button"
          autoFocus
          onClick={onClose}
          aria-label="Menüyü kapat"
          className="inline-flex size-11 items-center justify-center border border-hairline-invert"
        >
          <X className="size-5" aria-hidden="true" />
        </button>
      </div>

      <nav
        aria-label="Mobil menü"
        className="container-editorial flex-1 overflow-y-auto py-8"
      >
        <ul className="flex flex-col">
          {mainNav.map((item, i) => (
            <li key={item.to} className="border-b border-hairline-invert">
              <Link
                to={item.to}
                activeOptions={{ exact: item.to === "/" }}
                className="flex min-h-14 items-baseline gap-4 py-4 font-serif text-2xl data-[status=active]:text-gold"
              >
                <span className="rule-number">{String(i + 1).padStart(2, "0")}</span>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          to="/iletisim"
          className="mt-8 inline-flex min-h-12 w-full items-center justify-center border border-gold px-6 text-sm text-gold"
        >
          Randevu ve İletişim
        </Link>
      </nav>
    </div>
  );
}
