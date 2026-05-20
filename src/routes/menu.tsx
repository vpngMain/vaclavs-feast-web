import { createFileRoute, Link } from "@tanstack/react-router";
import { Download, FileText, Phone, UtensilsCrossed } from "lucide-react";
import { menuSections, weeklyMenu } from "@/data/menu";
import { place, photos } from "@/data/place";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Jídelní lístek a denní menu — Restaurace U Václava, Krupka" },
      { name: "description", content: "Stálý jídelní lístek a denní polední menu Restaurace U Václava v Krupce. Česká kuchyně, čepovaný Březňák, polední nabídka od 139 Kč." },
      { property: "og:title", content: "Jídelní lístek — Restaurace U Václava" },
      { property: "og:description", content: "Stálý lístek a denní polední menu v Krupce. Česká klasika a čepovaný Březňák." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://vaclavs-feast-web.vercel.app/menu" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Jídelní lístek — Restaurace U Václava" },
      { name: "twitter:description", content: "Stálý lístek a denní polední menu v Krupce." },
      { name: "keywords", content: "jídelní lístek Krupka, denní menu Krupka, polední menu Krupka, restaurace U Václava menu, česká kuchyně" },
    ],
    links: [
      { rel: "canonical", href: "https://vaclavs-feast-web.vercel.app/menu" },
    ],
  }),
  component: MenuPage,
});

function MenuPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative isolate overflow-hidden py-24 text-primary-foreground">
        <img src={photos.interior} alt="" loading="lazy" className="absolute inset-0 -z-10 h-full w-full object-cover" />
        <div className="absolute inset-0 -z-10 bg-primary/85" />
        <div className="mx-auto max-w-4xl px-5 text-center">
          <span className="text-xs uppercase tracking-[0.3em] text-accent">Jídelní lístek</span>
          <h1 className="mt-4 font-serif text-5xl md:text-6xl">Co u nás vaříme</h1>
          <p className="mx-auto mt-6 max-w-2xl text-primary-foreground/85">
            Poctivá česká kuchyně z čerstvých surovin. Polední menu vaříme každý všední den od 10:30.
            Stálý lístek si můžete prohlédnout níže nebo stáhnout jako PDF.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="/menu.pdf"
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 rounded-sm bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground"
            >
              <Download className="h-4 w-4" /> Stáhnout stálý lístek (PDF)
            </a>
            <a
              href="/denni-menu.pdf"
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 rounded-sm border border-primary-foreground/40 px-6 py-3 text-sm font-medium"
            >
              <FileText className="h-4 w-4" /> Denní menu (PDF)
            </a>
          </div>
          <p className="mt-3 text-xs text-primary-foreground/60">
            Nemůžete soubor otevřít? Zavolejte nám na {place.phone}.
          </p>
        </div>
      </section>

      {/* Denní polední menu */}
      <section className="bg-secondary/40 py-20">
        <div className="mx-auto max-w-6xl px-5">
          <div className="mb-10 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-accent">Polední menu</span>
              <h2 className="mt-2 font-serif text-3xl text-primary md:text-4xl">Denní nabídka tento týden</h2>
              <p className="mt-3 max-w-2xl text-foreground/75">
                Vaříme každý všední den od <strong>10:30 do 14:00</strong>. Polévka v ceně hlavního jídla.
              </p>
            </div>
            <a
              href="/denni-menu.pdf"
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-accent"
            >
              <Download className="h-4 w-4" /> Aktuální PDF
            </a>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            {weeklyMenu.map((d) => (
              <article key={d.day} className="rounded-sm border border-border bg-card p-5 shadow-sm">
                <h3 className="font-serif text-lg text-primary">{d.day}</h3>
                <p className="mt-1 text-xs uppercase tracking-[0.2em] text-accent">Polévka</p>
                <p className="mt-1 text-sm text-foreground/80">{d.soup}</p>
                <p className="mt-4 text-xs uppercase tracking-[0.2em] text-accent">Hlavní jídla</p>
                <ul className="mt-2 space-y-2 text-sm">
                  {d.meals.map((m) => (
                    <li key={m.name} className="flex items-baseline justify-between gap-3">
                      <span className="text-foreground/85">{m.name}</span>
                      <span className="shrink-0 font-medium text-primary">{m.price}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Stálý jídelní lístek */}
      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <UtensilsCrossed className="mx-auto h-8 w-8 text-accent" />
          <h2 className="mt-4 font-serif text-3xl text-primary md:text-4xl">Stálý jídelní lístek</h2>
          <p className="mt-3 text-sm text-foreground/70">
            Vybrané položky z naší kuchyně. Aktuální ceny a kompletní nabídku najdete v restauraci nebo v PDF.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-2">
          {menuSections.map((section) => (
            <section key={section.title}>
              <header className="mb-4 border-b border-border pb-2">
                <h3 className="font-serif text-2xl text-primary">{section.title}</h3>
                {section.note && (
                  <p className="mt-1 text-xs italic text-muted-foreground">{section.note}</p>
                )}
              </header>
              <ul className="space-y-4">
                {section.items.map((item) => (
                  <li key={item.name} className="flex items-baseline justify-between gap-4">
                    <div>
                      <div className="flex flex-wrap items-baseline gap-2">
                        <span className="font-medium text-foreground">{item.name}</span>
                        {item.tag && (
                          <span className="rounded-sm bg-accent/15 px-1.5 py-0.5 text-[10px] uppercase tracking-wider text-accent">
                            {item.tag}
                          </span>
                        )}
                      </div>
                      {item.desc && <p className="mt-0.5 text-xs text-muted-foreground">{item.desc}</p>}
                    </div>
                    <span className="shrink-0 font-serif text-lg text-primary">{item.price}</span>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <p className="mt-12 text-center text-xs text-muted-foreground">
          Ceny jsou orientační. Aktuální nabídka a alergeny v restauraci.
        </p>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16 text-primary-foreground">
        <div className="mx-auto max-w-3xl px-5 text-center">
          <h2 className="font-serif text-3xl md:text-4xl">Rezervujte si stůl</h2>
          <p className="mx-auto mt-3 max-w-xl text-primary-foreground/80">
            Rádi vás přivítáme. Stůl si zarezervujte telefonicky nebo se zastavte.
          </p>
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