import { createFileRoute } from "@tanstack/react-router";
import { Phone, MapPin, Clock, Star, ExternalLink } from "lucide-react";
import { place } from "@/data/place";

export const Route = createFileRoute("/kontakt")({
  head: () => ({
    meta: [
      { title: "Kontakt — Restaurace U Václava, Krupka" },
      { name: "description", content: "Restaurace U Václava, Revoluční 16, Krupka. Rezervace na +420 417 861 700. Otevřeno denně 10:00–22:00." },
    ],
  }),
  component: KontaktPage,
});

function KontaktPage() {
  const embedSrc = `https://www.google.com/maps/embed/v1/place?key=${import.meta.env.VITE_GOOGLE_MAPS_KEY}&q=place_id:ChIJ1Y7NpCmQCUcRHzAsci1xVHI&language=cs`;

  return (
    <div>
      <section className="bg-secondary/60 py-20">
        <div className="mx-auto max-w-4xl px-5 text-center">
          <span className="text-xs uppercase tracking-[0.3em] text-accent">Kontakt</span>
          <h1 className="mt-4 font-serif text-5xl text-primary md:text-6xl">Najdete nás v Krupce</h1>
          <p className="mx-auto mt-6 max-w-2xl text-foreground/80">
            Stůl si rezervujte telefonicky — rádi vás přivítáme.
          </p>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="grid gap-10 md:grid-cols-2">
          <div className="space-y-4">
            <ContactRow icon={<MapPin className="h-5 w-5 text-accent" />} title="Adresa" lines={[place.address]} />
            <ContactRow icon={<Phone className="h-5 w-5 text-accent" />} title="Telefon" lines={[<a key="t" href={place.phoneHref} className="hover:text-accent">{place.phone}</a>]} />
            <ContactRow icon={<Clock className="h-5 w-5 text-accent" />} title="Otevírací doba" lines={place.hours.map((h) => `${h.day}: ${h.time}`)} />
            <ContactRow icon={<Star className="h-5 w-5 text-accent" />} title="Hodnocení" lines={[`${place.rating} / 5 · ${place.reviewCount}+ recenzí na Google`]} />
            <a href={place.googleMapsUrl} target="_blank" rel="noreferrer noopener" className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-accent">
              Otevřít v Google Mapách <ExternalLink className="h-4 w-4" />
            </a>
          </div>
          <div className="overflow-hidden rounded-sm border border-border shadow-sm">
            <iframe
              title="Mapa — Restaurace U Václava, Revoluční 16, Krupka"
              src={embedSrc}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
              className="h-[480px] w-full"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

function ContactRow({ icon, title, lines }: { icon: React.ReactNode; title: string; lines: React.ReactNode[] }) {
  return (
    <div className="flex gap-4 rounded-sm border border-border bg-card p-6">
      <div className="mt-1">{icon}</div>
      <div>
        <h2 className="font-serif text-lg text-primary">{title}</h2>
        <div className="mt-1 space-y-0.5 text-sm text-foreground/80">
          {lines.map((l, i) => (<div key={i}>{l}</div>))}
        </div>
      </div>
    </div>
  );
}