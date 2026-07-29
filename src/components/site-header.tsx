import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { LogoLink } from "@/components/brand";
import { mainNav } from "@/data/site";
import { isOverlayRoute } from "@/lib/hero-overlay";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const overlay = isOverlayRoute(pathname);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        requestAnimationFrame(() => toggleRef.current?.focus());
      }
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const transparent = overlay && !scrolled;

  return (
    <header
      className={`z-50 transition-[background-color,border-color,box-shadow] duration-500 ease-out ${
        overlay
          ? "fixed inset-x-0 top-0"
          : "sticky top-0 border-b border-border bg-background/92 backdrop-blur-sm"
      } ${
        overlay
          ? transparent
            ? "border-b border-transparent bg-transparent"
            : "border-b border-hairline-invert bg-ink/80 backdrop-blur-md"
          : ""
      }`}
    >
      <div
        className={`container-editorial grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 transition-[height] duration-500 ${
          transparent ? "h-20 md:h-24" : "h-16 md:h-20"
        }`}
      >
        <LogoLink />

        <nav aria-label="Ana menü" className="hidden items-center gap-8 lg:flex">
          {mainNav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              className={`relative py-1 text-sm transition-colors data-[status=active]:after:absolute data-[status=active]:after:inset-x-0 data-[status=active]:after:-bottom-0.5 data-[status=active]:after:h-px data-[status=active]:after:bg-gold ${
                overlay
                  ? "text-ink-foreground/75 hover:text-ink-foreground data-[status=active]:text-gold"
                  : "text-muted-foreground hover:text-foreground data-[status=active]:text-foreground"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/iletisim"
            className={`inline-flex min-h-11 items-center border px-5 text-sm transition-colors ${
              overlay
                ? "border-gold/70 text-gold hover:bg-gold hover:text-ink"
                : "border-foreground text-foreground hover:bg-foreground hover:text-primary-foreground"
            }`}
          >
            Randevu ve İletişim
          </Link>
        </nav>

        <button
          ref={toggleRef}
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Menüyü aç"
          aria-expanded={open}
          aria-controls="mobil-menu"
          className={`inline-flex size-11 items-center justify-center border lg:hidden ${
            overlay
              ? "border-hairline-invert text-ink-foreground"
              : "border-border"
          }`}
        >
          <Menu className="size-5" aria-hidden="true" />
        </button>
      </div>


      {/* Portal: header uses backdrop-blur, which creates a containing block
          and would trap a `fixed inset-0` overlay inside the header box. */}
      {open && mounted
        ? createPortal(
            <MobileMenu
              onClose={() => {
                setOpen(false);
                // Odağı menüyü açan butona geri ver (WCAG 2.4.3)
                requestAnimationFrame(() => toggleRef.current?.focus());
              }}
            />,
            document.body,
          )
        : null}
    </header>
  );
}

function MobileMenu({ onClose }: { onClose: () => void }) {
  const panelRef = useRef<HTMLDivElement>(null);

  // Odak tuzağı: Tab ile odak menü içinde döner
  const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key !== "Tab" || !panelRef.current) return;
    const items = panelRef.current.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled])',
    );
    if (items.length === 0) return;
    const first = items[0];
    const last = items[items.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  };

  return (
    <div
      ref={panelRef}
      onKeyDown={onKeyDown}
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
