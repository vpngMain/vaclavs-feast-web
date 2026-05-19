import { createFileRoute, Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import {
  Wifi,
  Users,
  Trees,
  Car,
  Phone,
  MapPin,
  ArrowRight,
  Star,
  CigaretteOff,
  Clock,
} from "lucide-react";
import { photos, dishes, place, stats } from "@/data/place";
import { getGoogleReviews } from "@/lib/reviews.functions";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Restaurace U Václava — Krupka | Česká kuchyně & Březňák" },
      {
        name: "description",
        content:
          "Restaurace U Václava v Krupce: poctivá česká kuchyně, čepovaný Březňák, salonky pro oslavy a venkovní terasa. Hodnocení 4,5★ / 1 100 recenzí. Rezervace +420 417 861 700.",
      },
      { property: "og:title", content: "Restaurace U Václava — Krupka" },
      {
        property: "og:description",
        content:
          "Česká kuchyně, čepovaný Březňák, salonky a terasa. Revoluční 16, Krupka.",
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
          src={photos.interior}
          alt="Interiér restaurace U Václava s krbem a prostřenými stoly"
          width={1600}
          height={1067}
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/55 via-black/45 to-black/80" />
        <div className="mx-auto flex min-h-[88vh] max-w-5xl flex-col items-center justify-center px-5 py-32 text-center text-primary-foreground">
          <span className="mb-6 text-xs uppercase tracking-[0.35em] text-accent">
            Krupka · Revoluční 16
          </span>
          <h1 className="font-serif text-5xl leading-[1.05] sm:text-6xl md:text-7xl">
            Restaurace
            <br />
            <span className="italic text-accent">U Václava</span>
          </h1>
          <p className="mt-8 max-w-xl text-base text-primary-foreground/90 sm:text-lg">
            Poctivá česká kuchyně, čepovaný Březňák a domácí atmosféra.
            Více než 1 100 hostů nás na Google ohodnotilo 4,5 hvězdičkami.
          </p>
          <div className="mt-6 flex items-center gap-2 text-sm text-accent">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className="h-4 w-4 fill-current"
                fill="currentColor"
              />
            ))}
            <span className="ml-2 text-primary-foreground/85">
              {place.rating} / 5 · {place.reviewCount}+ recenzí
            </span>
          </div>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href={place.phoneHref}
              className="inline-flex items-center justify-center gap-2 rounded-sm bg-accent px-7 py-3.5 text-sm font-semibold tracking-wide text-accent-foreground transition-transform hover:scale-[1.02]"
            >
              <Phone className="h-4 w-4" />
              Rezervovat stůl
            </a>
            <Link
              to="/jidla"
              className="inline-flex items-center justify-center gap-2 rounded-sm border border-primary-foreground/40 px-7 py-3.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-foreground/10"
            >
              Prohlédnout jídla
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="mx-auto max-w-6xl px-5 py-24">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-accent">
              Vítejte
            </span>
            <h2 className="mt-4 font-serif text-4xl text-primary md:text-5xl">
              Místo, kam se rádi vracíte
            </h2>
            <div className="mt-6 space-y-4 leading-relaxed text-foreground/80">
              <p>
                V příjemném prostředí naší restaurace bude i pracovní oběd
                vždy příjemnou záležitostí a večeře s rodinou či přáteli
                radostným zážitkem.
              </p>
              <p>
                Uvítá Vás klidná atmosféra, vstřícný personál a poctivá česká
                kuchyně. Ke každému hostovi přistupujeme s maximální péčí —
                proto se k nám hosté opakovaně vracejí.
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
              src={photos.building}
              alt="Budova restaurace U Václava, Revoluční 16, Krupka"
              loading="lazy"
              className="aspect-[4/5] w-full rounded-sm object-cover shadow-xl"
            />
            <div className="absolute -bottom-6 -left-6 hidden bg-accent px-8 py-5 font-serif text-2xl italic text-accent-foreground shadow-lg md:block">
              4,5 ★ na Google
            </div>
          </div>
        </div>
      </section>

      {/* DISHES */}
      <section className="bg-secondary/60 py-24">
        <div className="mx-auto max-w-6xl px-5">
          <div className="mb-12 flex items-end justify-between gap-6">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-accent">
                Ukázka jídel
              </span>
              <h2 className="mt-3 font-serif text-4xl text-primary md:text-5xl">
                Z naší kuchyně
              </h2>
              <p className="mt-3 max-w-xl text-sm text-muted-foreground">
                Fotografie pořízené přímo v naší restauraci — bez retuše a
                bez stock obrázků.
              </p>
            </div>
            <Link
              to="/jidla"
              className="hidden items-center gap-2 text-sm font-medium text-primary hover:text-accent md:inline-flex"
            >
              Celá nabídka <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {dishes.slice(0, 3).map((d) => (
              <article
                key={d.name}
                className="group overflow-hidden rounded-sm bg-card shadow-sm"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={d.img}
                    alt={d.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-accent">
                    {d.tag}
                  </span>
                  <h3 className="mt-2 font-serif text-xl text-primary">
                    {d.name}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {d.desc}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="mx-auto max-w-6xl px-5 py-24">
        <div className="mb-12 text-center">
          <span className="text-xs uppercase tracking-[0.3em] text-accent">
            K dispozici
          </span>
          <h2 className="mt-3 font-serif text-4xl text-primary">
            Co u nás najdete
          </h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Wifi, title: "Wi-Fi zdarma", desc: "Připojení pro všechny hosty" },
            { icon: Users, title: "Dva salonky", desc: "Pro oslavy a soukromé akce" },
            { icon: Trees, title: "Venkovní terasa", desc: "Posezení v letních měsících" },
            { icon: Car, title: "Parkoviště", desc: "Vlastní parkování přímo u restaurace" },
            { icon: CigaretteOff, title: "Nekuřácký prostor", desc: "Příjemně pro rodiny i páry" },
            { icon: Clock, title: "Otevřeno denně", desc: "Po–Ne 10:00 – 22:00" },
            { icon: Star, title: "Hodnocení 4,5★", desc: "1 100+ recenzí na Google" },
            { icon: MapPin, title: "Centrum Krupky", desc: "Revoluční 16, snadno dostupné" },
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
      </section>

      {/* REVIEWS */}
      <section className="bg-primary py-24 text-primary-foreground">
        <div className="mx-auto max-w-6xl px-5">
          <div className="mb-12 text-center">
            <span className="text-xs uppercase tracking-[0.3em] text-accent">
              Reference
            </span>
            <h2 className="mt-3 font-serif text-4xl md:text-5xl">
              Co o nás říkají hosté
            </h2>
            <p className="mt-4 text-sm text-primary-foreground/70">
              {stats.ratingLabel} · {stats.reviewLabel}
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {reviews.map((r) => (
              <figure
                key={r.author}
                className="flex h-full flex-col rounded-sm border border-primary-foreground/10 bg-primary-foreground/5 p-6 backdrop-blur"
              >
                <div className="flex items-center gap-1 text-accent">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4"
                      fill={i < r.rating ? "currentColor" : "none"}
                    />
                  ))}
                </div>
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-primary-foreground/90">
                  &ldquo;{r.text}&rdquo;
                </blockquote>
                <figcaption className="mt-5 border-t border-primary-foreground/10 pt-4 text-xs text-primary-foreground/70">
                  <span className="block font-medium text-primary-foreground">
                    {r.author}
                  </span>
                  <span>{r.time} · Google</span>
                </figcaption>
              </figure>
            ))}
          </div>
          <div className="mt-10 text-center">
            <a
              href={place.googleMapsUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 text-sm text-accent hover:underline"
            >
              Zobrazit všechny recenze na Google
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative isolate overflow-hidden py-24 text-primary-foreground">
        <img
          src={photos.beer}
          alt="Čepovaný Březňák"
          loading="lazy"
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-primary/85" />
        <div className="mx-auto max-w-3xl px-5 text-center">
          <h2 className="font-serif text-4xl md:text-5xl">Přijďte ochutnat</h2>
          <p className="mx-auto mt-5 max-w-xl text-primary-foreground/85">
            Stůl si rezervujte telefonicky — rádi vás přivítáme. Otevřeno
            každý den 10:00 – 22:00.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={place.phoneHref}
              className="inline-flex items-center gap-2 rounded-sm bg-accent px-7 py-3.5 text-sm font-semibold text-accent-foreground"
            >
              <Phone className="h-4 w-4" /> {place.phone}
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