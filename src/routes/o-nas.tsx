import { createFileRoute } from "@tanstack/react-router";
import originalImg from "@/assets/restaurace-original.jpg";
import salonekImg from "@/assets/salonek.jpg";

export const Route = createFileRoute("/o-nas")({
  head: () => ({
    meta: [
      { title: "O nás — Restaurace U Václava" },
      {
        name: "description",
        content:
          "Rodinná restaurace v Krupce s domácí atmosférou, českou kuchyní a vstřícným personálem.",
      },
    ],
  }),
  component: ONasPage,
});

function ONasPage() {
  return (
    <div>
      <section className="bg-secondary/60 py-20">
        <div className="mx-auto max-w-4xl px-5 text-center">
          <span className="text-xs uppercase tracking-[0.3em] text-accent">O nás</span>
          <h1 className="mt-4 font-serif text-5xl text-primary md:text-6xl">
            Naše restaurace
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-foreground/80">
            Místo, kde se snoubí poctivá česká kuchyně s domácí pohodou a osobním přístupem.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-20">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <img
            src={originalImg}
            alt="Náš personál za barem"
            loading="lazy"
            className="aspect-[4/5] w-full rounded-sm object-cover shadow-lg"
          />
          <div className="space-y-5 text-foreground/85 leading-relaxed">
            <h2 className="font-serif text-3xl text-primary">Příjemné prostředí pro každou příležitost</h2>
            <p>
              V příjemném prostředí naší restaurace bude i pracovní oběd vždy příjemnou
              záležitostí a večeře s rodinou či přáteli radostným zážitkem.
            </p>
            <p>
              Uvítá Vás klidná, příjemná atmosféra a vstřícný personál s profesionálním
              přístupem. Ke každé objednávce přistupujeme s maximální pozorností a péčí.
            </p>
            <p>
              To jsou hlavní ingredience, díky kterým se k nám budete rádi znovu a znovu vracet.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-secondary/60 py-20">
        <div className="mx-auto grid max-w-5xl gap-12 px-5 md:grid-cols-2 md:items-center">
          <div className="space-y-5 text-foreground/85 leading-relaxed md:order-2">
            <h2 className="font-serif text-3xl text-primary">Prostor pro vaše oslavy</h2>
            <p>
              Máme k dispozici dva salonky vhodné pro rodinné oslavy, firemní akce, svatby
              i smuteční hostiny. Postaráme se o vás od přípravy menu až po obsluhu.
            </p>
            <p>
              V letních měsících využijete také venkovní terasu, parkoviště máme přímo u
              restaurace a Wi-Fi je samozřejmostí.
            </p>
          </div>
          <img
            src={salonekImg}
            alt="Salonek pro soukromé akce"
            loading="lazy"
            className="aspect-[4/3] w-full rounded-sm object-cover shadow-lg md:order-1"
          />
        </div>
      </section>
    </div>
  );
}