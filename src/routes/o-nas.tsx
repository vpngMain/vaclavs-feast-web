import { createFileRoute } from "@tanstack/react-router";
import { photos } from "@/data/place";

export const Route = createFileRoute("/o-nas")({
  head: () => ({
    meta: [
      { title: "O nás — Restaurace U Václava, Krupka" },
      { name: "description", content: "Rodinná restaurace v Krupce s českou kuchyní, čepovaným Březňákem a domácí atmosférou." },
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
          <h1 className="mt-4 font-serif text-5xl text-primary md:text-6xl">Naše restaurace</h1>
          <p className="mx-auto mt-6 max-w-2xl text-foreground/80">
            Místo, kde se snoubí poctivá česká kuchyně s domácí pohodou a osobním přístupem.
          </p>
        </div>
      </section>
      <section className="mx-auto max-w-5xl px-5 py-20">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <img src={photos.interior} alt="Interiér restaurace U Václava" loading="lazy" className="aspect-[4/5] w-full rounded-sm object-cover shadow-lg" />
          <div className="space-y-5 leading-relaxed text-foreground/85">
            <h2 className="font-serif text-3xl text-primary">Příjemné prostředí pro každou příležitost</h2>
            <p>V příjemném prostředí naší restaurace bude i pracovní oběd vždy příjemnou záležitostí a večeře s rodinou či přáteli radostným zážitkem.</p>
            <p>Uvítá Vás klidná atmosféra, vstřícný personál s profesionálním přístupem a ke každé objednávce přistupujeme s maximální pozorností a péčí.</p>
            <p>Více než 1 100 hostů nás na Google ohodnotilo průměrem 4,5 hvězdičky — díky za vaši přízeň.</p>
          </div>
        </div>
      </section>
      <section className="bg-secondary/60 py-20">
        <div className="mx-auto grid max-w-5xl gap-12 px-5 md:grid-cols-2 md:items-center">
          <div className="space-y-5 leading-relaxed text-foreground/85 md:order-2">
            <h2 className="font-serif text-3xl text-primary">Prostor pro vaše oslavy</h2>
            <p>Máme k dispozici dva salonky vhodné pro rodinné oslavy, firemní akce, svatby i smuteční hostiny. Postaráme se o vás od přípravy menu až po obsluhu.</p>
            <p>V letních měsících využijete také venkovní posezení, parkoviště je přímo u restaurace a Wi-Fi je samozřejmostí.</p>
          </div>
          <img src={photos.building} alt="Budova restaurace U Václava" loading="lazy" className="aspect-[4/3] w-full rounded-sm object-cover shadow-lg md:order-1" />
        </div>
      </section>
    </div>
  );
}