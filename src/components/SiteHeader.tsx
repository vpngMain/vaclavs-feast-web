import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Úvod" },
  { to: "/o-nas", label: "O nás" },
  { to: "/jidla", label: "Naše jídla" },
  { to: "/sluzby", label: "Služby" },
  { to: "/galerie", label: "Galerie" },
  { to: "/kontakt", label: "Kontakt" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link to="/" className="flex flex-col leading-tight">
          <span className="font-serif text-2xl font-semibold text-primary">U Václava</span>
          <span className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
            Restaurace · Krupka
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              activeProps={{ className: "text-primary" }}
              className="text-sm font-medium text-foreground/70 transition-colors hover:text-primary"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <a
          href="tel:+420417861700"
          className="hidden rounded-sm bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 md:inline-flex"
        >
          +420 417 861 700
        </a>

        <button
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
          className="rounded-sm p-2 text-foreground md:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col px-5 py-3">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: l.to === "/" }}
                activeProps={{ className: "text-primary" }}
                className="py-2 text-sm font-medium text-foreground/80"
              >
                {l.label}
              </Link>
            ))}
            <a
              href="tel:+420417861700"
              className="mt-2 rounded-sm bg-primary px-4 py-2 text-center text-sm font-medium text-primary-foreground"
            >
              Zavolat — +420 417 861 700
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}