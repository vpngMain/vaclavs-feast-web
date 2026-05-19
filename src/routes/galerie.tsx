import { createFileRoute } from "@tanstack/react-router";
import originalImg from "@/assets/restaurace-original.jpg";
import heroImg from "@/assets/hero-interior.jpg";
import salonekImg from "@/assets/salonek.jpg";
import terasaImg from "@/assets/terasa.jpg";
import svickovaImg from "@/assets/dish-svickova.jpg";
import kolenoImg from "@/assets/dish-koleno.jpg";
import pivoImg from "@/assets/cepovane-pivo.jpg";

export const Route = createFileRoute("/galerie")({
  head: () => ({
    meta: [
      { title: "Galerie — Restaurace U Václava" },
      { name: "description", content: "Fotografie interiéru, terasy a jídel z naší kuchyně." },
    ],
  }),
  component: GaleriePage,
});

const photos = [
  { src: originalImg, alt: "Bar restaurace U Václava", span: "md:col-span-2 md:row-span-2" },
  { src: heroImg, alt: "Interiér restaurace", span: "" },
  { src: salonekImg, alt: "Salonek pro oslavy", span: "" },
  { src: terasaImg, alt: "Venkovní terasa", span: "md:col-span-2" },
  { src: svickovaImg, alt: "Svíčková na smetaně", span: "" },
  { src: kolenoImg, alt: "Pečené vepřové koleno", span: "" },
  { src: pivoImg, alt: "Čepované pivo", span: "" },
];

function GaleriePage() {
  return (
    <div>
      <section className="bg-secondary/60 py-20">
        <div className="mx-auto max-w-4xl px-5 text-center">
          <span className="text-xs uppercase tracking-[0.3em] text-accent">Galerie</span>
          <h1 className="mt-4 font-serif text-5xl text-primary md:text-6xl">
            Nahlédněte k nám
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-foreground/80">
            Atmosféra restaurace, salonky, terasa a ukázky z naší kuchyně.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="grid auto-rows-[220px] grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
          {photos.map((p) => (
            <figure
              key={p.alt}
              className={`overflow-hidden rounded-sm shadow-sm ${p.span}`}
            >
              <img
                src={p.src}
                alt={p.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </figure>
          ))}
        </div>
      </section>
    </div>
  );
}