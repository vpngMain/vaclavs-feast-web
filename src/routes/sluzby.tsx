import { createFileRoute } from "@tanstack/react-router";
import { Utensils, Beer, PartyPopper, Users, Trees, Wifi, Car, CigaretteOff } from "lucide-react";
import svickovaImg from "@/assets/dish-svickova.jpg";
import kolenoImg from "@/assets/dish-koleno.jpg";
import pivoImg from "@/assets/cepovane-pivo.jpg";
import terasaImg from "@/assets/terasa.jpg";

export const Route = createFileRoute("/sluzby")({
  head: () => ({
    meta: [
      { title: "Služby — Restaurace U Václava" },
      {
        name: "description",
        content:
          "Pracovní obědy, večeře, oslavy a firemní akce. Dva salonky, terasa, Wi-Fi a parkoviště.",
      },
    ],
  }),
  component: SluzbyPage,
});

const services = [
  { icon: Utensils, title: "Česká kuchyně", desc: "Klasická česká jídla připravovaná z čerstvých surovin." },
  { icon: Beer, title: "Čepované pivo", desc: "Vždy čerstvě natočené, pečlivě ošetřená pípa." },
  { icon: PartyPopper, title: "Oslavy a akce", desc: "Svatby, narozeniny, firemní akce i smuteční hostiny." },
  { icon: Users, title: "Dva salonky", desc: "Soukromý prostor pro menší i větší skupiny." },
  { icon: Trees, title: "Venkovní terasa", desc: "Letní posezení pod širým nebem." },
  { icon: CigaretteOff, title: "Nekuřácký prostor", desc: "Příjemné prostředí bez cigaretového kouře." },
  { icon: Wifi, title: "Wi-Fi zdarma", desc: "Připojení k internetu pro všechny hosty." },
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
            <div
              key={s.title}
              className="rounded-sm border border-border bg-card p-6 transition-shadow hover:shadow-md"
            >
              <s.icon className="h-7 w-7 text-accent" />
              <h3 className="mt-5 font-serif text-xl text-primary">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-secondary/60 py-20">
        <div className="mx-auto max-w-6xl px-5">
          <div className="mb-12 text-center">
            <span className="text-xs uppercase tracking-[0.3em] text-accent">Z naší nabídky</span>
            <h2 className="mt-3 font-serif text-4xl text-primary">Ochutnávka kuchyně</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { img: svickovaImg, name: "Svíčková na smetaně", desc: "S houskovým knedlíkem a brusinkami." },
              { img: kolenoImg, name: "Pečené vepřové koleno", desc: "S křenem, hořčicí a chlebem." },
              { img: pivoImg, name: "Čepované pivo", desc: "Vždy čerstvě natočené." },
            ].map((d) => (
              <div key={d.name} className="overflow-hidden rounded-sm bg-card shadow-sm">
                <img
                  src={d.img}
                  alt={d.name}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover"
                />
                <div className="p-6">
                  <h3 className="font-serif text-xl text-primary">{d.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{d.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-muted-foreground">
            Kompletní jídelní lístek se rád představí přímo v restauraci.
          </p>
        </div>
      </section>

      <section className="relative overflow-hidden">
        <img
          src={terasaImg}
          alt="Venkovní terasa"
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/75" />
        <div className="relative mx-auto max-w-3xl px-5 py-24 text-center text-primary-foreground">
          <h2 className="font-serif text-4xl md:text-5xl">Plánujete oslavu?</h2>
          <p className="mt-5 text-primary-foreground/85">
            Domluvte si s námi termín, menu i obsluhu. Postaráme se o vše ostatní.
          </p>
          <a
            href="tel:+420417861700"
            className="mt-8 inline-flex items-center gap-2 rounded-sm bg-accent px-7 py-3.5 text-sm font-semibold text-accent-foreground"
          >
            Zavolat — +420 417 861 700
          </a>
        </div>
      </section>
    </div>
  );
}