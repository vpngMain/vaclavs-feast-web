import { createFileRoute, Link } from "@tanstack/react-router";
import { Phone } from "lucide-react";
import { dishes, place, photos } from "@/data/place";

export const Route = createFileRoute("/jidla")({
  head: () => ({
    meta: [
      { title: "Naše jídla — Restaurace U Václava, Krupka" },
      { name: "description", content: "Ukázka jídel z naší kuchyně: vepřová pečeně, řízek, hovězí na divoko, drůbeží játra a další česká klasika." },
      { property: "og:title", content: "Naše jídla — Restaurace U Václava, Krupka" },
      { property: "og:description", content: "Poctivá česká klasika: svíčková, řízek, koleno, hovězí na divoko a čepované pivo Březňák." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://vaclavs-feast-web.lovable.app/jidla" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Naše jídla — Restaurace U Václava" },
      { name: "twitter:description", content: "Poctivá česká klasika a čepované pivo Březňák v Krupce." },
      { name: "keywords", content: "restaurace Krupka, česká kuchyně, jídelní lístek, svíčková, řízek, koleno, Březňák, U Václava" },
    ],
    links: [
      { rel: "canonical", href: "https://vaclavs-feast-web.lovable.app/jidla" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Menu",
          name: "Jídelní lístek — Restaurace U Václava",
          inLanguage: "cs",
          provider: {
            "@type": "Restaurant",
            name: "Restaurace U Václava",
            address: "Revoluční 16, Unčín, 417 42 Krupka",
            telephone: "+420417861700",
            servesCuisine: "Czech",
          },
        }),
      },
    ],
  }),
  component: JidlaPage,
});

function JidlaPage() {
  return (
    <div>
      <section className="bg-secondary/60 py-20">
        <div className="mx-auto max-w-4xl px-5 text-center">
          <span className="text-xs uppercase tracking-[0.3em] text-accent">Ukázka jídel</span>
          <h1 className="mt-4 font-serif text-5xl text-primary md:text-6xl">Naše jídla</h1>
          <p className="mx-auto mt-6 max-w-2xl text-foreground/80">
            Skutečné fotografie talířů, které u nás dostanete. Kompletní jídelní lístek vám rádi předáme přímo v restauraci nebo po telefonu.
          </p>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {dishes.map((d) => (
            <article key={d.name} className="overflow-hidden rounded-sm bg-card shadow-sm">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={d.img} alt={d.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 hover:scale-105" />
              </div>
              <div className="p-6">
                <span className="text-[10px] uppercase tracking-[0.25em] text-accent">{d.tag}</span>
                <h2 className="mt-2 font-serif text-xl text-primary">{d.name}</h2>
                <p className="mt-2 text-sm text-muted-foreground">{d.desc}</p>
              </div>
            </article>
          ))}
        </div>
        <p className="mt-10 text-center text-sm text-muted-foreground">
          Točíme pivo <strong className="text-foreground">Březňák</strong> a další česká piva.
          Polední menu, dětské porce i bezlepkové úpravy na vyžádání.
        </p>
      </section>
      <section className="relative isolate overflow-hidden py-20 text-primary-foreground">
        <img src={photos.beer} alt="Čepované pivo Březňák" loading="lazy" className="absolute inset-0 -z-10 h-full w-full object-cover" />
        <div className="absolute inset-0 -z-10 bg-primary/85" />
        <div className="mx-auto max-w-3xl px-5 text-center">
          <h2 className="font-serif text-3xl md:text-4xl">Máte chuť? Zarezervujte si stůl.</h2>
          <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href={place.phoneHref} className="inline-flex items-center gap-2 rounded-sm bg-accent px-7 py-3.5 text-sm font-semibold text-accent-foreground">
              <Phone className="h-4 w-4" /> {place.phone}
            </a>
            <Link to="/kontakt" className="inline-flex items-center gap-2 rounded-sm border border-primary-foreground/40 px-7 py-3.5 text-sm font-medium">
              Kontakt a mapa
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}