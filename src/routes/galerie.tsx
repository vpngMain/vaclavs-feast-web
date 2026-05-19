import { createFileRoute } from "@tanstack/react-router";
import { photos } from "@/data/place";

export const Route = createFileRoute("/galerie")({
  head: () => ({
    meta: [
      { title: "Galerie — Restaurace U Václava, Krupka" },
      { name: "description", content: "Reálné fotografie interiéru, exteriéru a jídel z Restaurace U Václava v Krupce." },
    ],
  }),
  component: GaleriePage,
});

const items = [
  { src: photos.interior, alt: "Interiér s krbem a prostřenými stoly", span: "md:col-span-2 md:row-span-2" },
  { src: photos.building, alt: "Budova restaurace U Václava", span: "" },
  { src: photos.entrance, alt: "Vchod do restaurace", span: "" },
  { src: photos.beer, alt: "Čepovaný Březňák", span: "" },
  { src: photos.pork, alt: "Vepřová pečeně se špenátem a knedlíkem", span: "" },
  { src: photos.duckCabbage, alt: "Pečené maso s knedlíkem a zelím", span: "md:col-span-2" },
  { src: photos.schnitzel, alt: "Smažený kuřecí řízek s hranolky", span: "" },
  { src: photos.chickenCheese, alt: "Grilované kuře se sýrem", span: "" },
  { src: photos.liver, alt: "Drůbeží játra na cibulce", span: "" },
  { src: photos.goulashDumpling, alt: "Hovězí na divoko s knedlíkem", span: "" },
];

function GaleriePage() {
  return (
    <div>
      <section className="bg-secondary/60 py-20">
        <div className="mx-auto max-w-4xl px-5 text-center">
          <span className="text-xs uppercase tracking-[0.3em] text-accent">Galerie</span>
          <h1 className="mt-4 font-serif text-5xl text-primary md:text-6xl">Nahlédněte k nám</h1>
          <p className="mx-auto mt-6 max-w-2xl text-foreground/80">
            Atmosféra restaurace, vchod, terasa a ukázky z naší kuchyně —
            všechny fotografie jsou skutečné, pořízené přímo u nás.
          </p>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="grid auto-rows-[220px] grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
          {items.map((p) => (
            <figure key={p.alt} className={`overflow-hidden rounded-sm shadow-sm ${p.span}`}>
              <img src={p.src} alt={p.alt} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 hover:scale-105" />
            </figure>
          ))}
        </div>
      </section>
    </div>
  );
}