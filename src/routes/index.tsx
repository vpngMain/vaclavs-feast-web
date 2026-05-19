import { createFileRoute, Link } from "@tanstack/react-router";
import { Wifi, Users, Trees, Car, Phone, MapPin, ArrowRight } from "lucide-react";
import heroImg from "@/assets/hero-interior.jpg";
import originalImg from "@/assets/restaurace-original.jpg";
import svickovaImg from "@/assets/dish-svickova.jpg";
import kolenoImg from "@/assets/dish-koleno.jpg";
import pivoImg from "@/assets/cepovane-pivo.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Restaurace U Václava — Krupka" },
      {
        name: "description",
        content:
          "Poctivá česká kuchyně, čepované pivo a domácí atmosféra v Krupce. Rezervace na +420 417 861 700.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div>
      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <img
          src={heroImg}
          alt="Interiér restaurace U Václava"
          width={1920}
          height={1080}
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/60 via-black/45 to-black/75" />
        <div className="mx-auto flex min-h-[88vh] max-w-5xl flex-col items-center justify-center px-5 py-32 text-center text-primary-foreground">
          <span className="mb-6 text-xs uppercase tracking-[0.35em] text-accent">
            Krupka · Revoluční 16
          </span>
          <h1 className="font-serif text-5xl leading-[1.05] sm:text-6xl md:text-7xl">
            Restaurace
            <br />
            <span className="italic text-accent">U Václava</span>
          </h1>
          <p className="mt-8 max-w-xl text-base text-primary-foreground/85 sm:text-lg">
            Poctivá česká kuchyně, čepované pivo a domácí atmosféra.
            Klidné prostředí, vstřícný personál a maximální pozornost ke každému hostovi.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href="tel:+420417861700"
              className="inline-flex items-center justify-center gap-2 rounded-sm bg-accent px-7 py-3.5 text-sm font-semibold tracking-wide text-accent-foreground transition-transform hover:scale-[1.02]"
            >
              <Phone className="h-4 w-4" />
              Rezervovat stůl
            </a>
            <Link
              to="/sluzby"
              className="inline-flex items-center justify-center gap-2 rounded-sm border border-primary-foreground/40 px-7 py-3.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-foreground/10"
            >
              Naše služby
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="mx-auto max-w-6xl px-5 py-24">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-accent">Vítejte</span>
            <h2 className="mt-4 font-serif text-4xl text-primary md:text-5xl">
              Místo, kam se rádi vracíte
            </h2>
            <div className="mt-6 space-y-4 text-foreground/80 leading-relaxed">
              <p>
                V příjemném prostředí naší restaurace bude i pracovní oběd vždy příjemnou
                záležitostí a večeře s rodinou či přáteli radostným zážitkem.
              </p>
              <p>
                Uvítá Vás klidná, příjemná atmosféra a vstřícný personál s profesionálním
                přístupem. Ke každé objednávce přistupujeme s maximální pozorností a péčí —
                a to jsou hlavní ingredience, díky kterým se k nám budete rádi vracet.
              </p>
            </div>
            <Link
              to="/o-nas"
              className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-accent"
            >
              Více o nás
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="relative">
            <img
              src={originalImg}
              alt="Restaurace U Václava — interiér"
              loading="lazy"
              className="aspect-[4/5] w-full rounded-sm object-cover shadow-xl"
            />
            <div className="absolute -bottom-6 -left-6 hidden bg-accent px-8 py-5 font-serif text-2xl italic text-accent-foreground shadow-lg md:block">
              od roku 2005
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="bg-secondary/60 py-20">
        <div className="mx-auto max-w-6xl px-5">
          <div className="mb-12 text-center">
            <span className="text-xs uppercase tracking-[0.3em] text-accent">K dispozici</span>
            <h2 className="mt-3 font-serif text-4xl text-primary">Co u nás najdete</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Wifi, title: "Wi-Fi zdarma", desc: "Připojení pro všechny hosty" },
              { icon: Users, title: "Dva salonky", desc: "Pro oslavy a soukromé akce" },
              { icon: Trees, title: "Venkovní terasa", desc: "Posezení v letních měsících" },
              { icon: Car, title: "Parkoviště", desc: "Vlastní parkování pro hosty" },
            ].map((f) => (
              <div
                key={f.title}
                className="rounded-sm border border-border bg-card p-7 transition-shadow hover:shadow-md"
              >
                <f.icon className="h-7 w-7 text-accent" />
                <h3 className="mt-5 font-serif text-xl text-primary">{f.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
              </div>
            ))}
          </div>
          <p className="mt-10 text-center text-sm text-muted-foreground">
            Nekuřácký prostor · vstřícný personál · domácí atmosféra
          </p>
        </div>
      </section>

      {/* MENU TEASER */}
      <section className="mx-auto max-w-6xl px-5 py-24">
        <div className="mb-12 flex items-end justify-between gap-6">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-accent">Z naší kuchyně</span>
            <h2 className="mt-3 font-serif text-4xl text-primary md:text-5xl">
              To nejlepší od nás
            </h2>
          </div>
          <Link
            to="/sluzby"
            className="hidden items-center gap-2 text-sm font-medium text-primary hover:text-accent md:inline-flex"
          >
            Vše o službách <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { img: svickovaImg, name: "Svíčková na smetaně", tag: "Klasika" },
            { img: kolenoImg, name: "Pečené vepřové koleno", tag: "Specialita" },
            { img: pivoImg, name: "Čepované pivo", tag: "Vždy čerstvé" },
          ].map((d) => (
            <div key={d.name} className="group overflow-hidden rounded-sm bg-card shadow-sm">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={d.img}
                  alt={d.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <span className="text-[10px] uppercase tracking-[0.25em] text-accent">{d.tag}</span>
                <h3 className="mt-2 font-serif text-xl text-primary">{d.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-20 text-primary-foreground">
        <div className="mx-auto max-w-3xl px-5 text-center">
          <h2 className="font-serif text-4xl md:text-5xl">Přijďte ochutnat</h2>
          <p className="mx-auto mt-5 max-w-xl text-primary-foreground/80">
            Přijďte ochutnat to nejlepší z naší kuchyně. Pokud si chcete rovnou rezervovat
            stůl, stačí zavolat — rádi vás přivítáme.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="tel:+420417861700"
              className="inline-flex items-center gap-2 rounded-sm bg-accent px-7 py-3.5 text-sm font-semibold text-accent-foreground"
            >
              <Phone className="h-4 w-4" /> +420 417 861 700
            </a>
            <Link
              to="/kontakt"
              className="inline-flex items-center gap-2 rounded-sm border border-primary-foreground/40 px-7 py-3.5 text-sm font-medium"
            >
              <MapPin className="h-4 w-4" /> Revoluční 16, Krupka
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
