import { Link } from "@tanstack/react-router";
import { MapPin, Phone, Clock } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-3">
        <div>
          <h3 className="font-serif text-2xl">Restaurace U Václava</h3>
          <p className="mt-3 text-sm text-primary-foreground/70">
            Poctivá česká kuchyně, čepované pivo a domácí atmosféra v Krupce.
          </p>
        </div>

        <div className="space-y-3 text-sm">
          <div className="flex items-start gap-3">
            <MapPin className="mt-0.5 h-4 w-4 text-accent" />
            <span>Revoluční 16, Krupka</span>
          </div>
          <div className="flex items-start gap-3">
            <Phone className="mt-0.5 h-4 w-4 text-accent" />
            <a href="tel:+420417861700" className="hover:text-accent">
              +420 417 861 700
            </a>
          </div>
          <div className="flex items-start gap-3">
            <Clock className="mt-0.5 h-4 w-4 text-accent" />
            <span>Po–Ne — otevřeno denně</span>
          </div>
        </div>

        <div className="space-y-2 text-sm">
          <p className="mb-2 text-xs uppercase tracking-[0.25em] text-primary-foreground/60">
            Stránky
          </p>
          <Link to="/o-nas" className="block hover:text-accent">O nás</Link>
          <Link to="/jidla" className="block hover:text-accent">Naše jídla</Link>
          <Link to="/menu" className="block hover:text-accent">Jídelní lístek</Link>
          <Link to="/sluzby" className="block hover:text-accent">Služby</Link>
          <Link to="/galerie" className="block hover:text-accent">Galerie</Link>
          <Link to="/kontakt" className="block hover:text-accent">Kontakt</Link>
        </div>
      </div>
      <div className="border-t border-primary-foreground/15 py-5 text-center text-xs text-primary-foreground/60">
        © {new Date().getFullYear()} Restaurace U Václava
      </div>
    </footer>
  );
}