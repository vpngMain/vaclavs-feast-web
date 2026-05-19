import { createFileRoute } from "@tanstack/react-router";
import { Utensils, Beer, PartyPopper, Users, Trees, Wifi, Car, CigaretteOff } from "lucide-react";
import { photos, place } from "@/data/place";

export const Route = createFileRoute("/sluzby")({
  head: () => ({
    meta: [
      { title: "Služby — Restaurace U Václava" },
      { name: "description", content: "Obědy, večeře, oslavy, svatby a smuteční hostiny. Dva salonky, terasa, parkoviště a Wi-Fi." },
    ],
  }),
  component: SluzbyPage,
});

const services = [
  { icon: Utensils, title: "Česká kuchyně", desc: "Klasická česká jídla z čerstvých surovin." },
  { icon: Beer, title: "Čepovaný Březňák", desc: "Pečlivě ošetřená pípa, vždy čerstvé pivo." },
  { icon: PartyPopper, title: "Oslavy a akce", desc: "Svatby, narozeniny, firemní akce i smuteční hostiny." },
  { icon: Users, title: "Dva salonky", desc: "Soukromý prostor pro menší i větší skupiny." },
  { icon: Trees, title: "Venkovní posezení", desc: "Letní posezení pod širým nebem." },
  { icon: CigaretteOff, title: "Nekuřácký prostor", desc: "Příjemné prostředí bez kouře." },
  { icon: Wifi, title: "Wi-Fi zdarma", desc: "Připojení k internetu pro hosty." },
  { icon: Car, title: "Parkoviště", desc: "Vlastní parkování přímo u restaurace." },
];

function SluzbyPage() {
  return (
    <div>
      <section className="bg-secondary/60 py-20">
        <div className="mx-auto max-w-4xl px-5 text-center">
          <span className="text-xs uppercase tracking-[0.3em] text-accent">Co nabízíme</span>
          <h1 className="mt-4 font-serif text-5xl text-primary md:text-6xl">Naše služby</h1>
          <p className="mx-auto mt-6 max-w-2xl text-foreground/80">
            Vše, co potřebujete pro příjemný oběd, večeři nebo oslavu — pod jednou střechou.
          </p>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <div key={s.title} className="rounded-sm border border-border bg-card p-6 transition-shadow hover:shadow-md">
              <s.icon className="h-7 w-7 text-accent" />
              <h3 className="mt-5 font-serif text-xl text-primary">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="relative overflow-hidden">
        <img src={photos.interior} alt="Interiér restaurace" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-primary/80" />
        <div className="relative mx-auto max-w-3xl px-5 py-24 text-center text-primary-foreground">
          <h2 className="font-serif text-4xl md:text-5xl">Plánujete oslavu?</h2>
          <p className="mt-5 text-primary-foreground/85">
            Domluvte si s námi termín, menu i obsluhu. Postaráme se o vše ostatní.
          </p>
          <a href={place.phoneHref} className="mt-8 inline-flex items-center gap-2 rounded-sm bg-accent px-7 py-3.5 text-sm font-semibold text-accent-foreground">
            Zavolat — {place.phone}
          </a>
        </div>
      </section>
    </div>
  );
}