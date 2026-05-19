import { createFileRoute } from "@tanstack/react-router";
import { Phone, MapPin, Clock, Mail } from "lucide-react";

export const Route = createFileRoute("/kontakt")({
  head: () => ({
    meta: [
      { title: "Kontakt — Restaurace U Václava" },
      {
        name: "description",
        content:
          "Restaurace U Václava, Revoluční 16, Krupka. Rezervace na +420 417 861 700.",
      },
    ],
  }),
  component: KontaktPage,
});

function KontaktPage() {
  return (
    <div>
      <section className="bg-secondary/60 py-20">
        <div className="mx-auto max-w-4xl px-5 text-center">
          <span className="text-xs uppercase tracking-[0.3em] text-accent">Kontakt</span>
          <h1 className="mt-4 font-serif text-5xl text-primary md:text-6xl">
            Najdete nás v Krupce
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-foreground/80">
            Stůl si rezervujte telefonicky — rádi vás přivítáme.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="grid gap-10 md:grid-cols-2">
          <div className="space-y-6">
            <ContactRow
              icon={<MapPin className="h-5 w-5 text-accent" />}
              title="Adresa"
              lines={["Revoluční 16", "Krupka"]}
            />
            <ContactRow
              icon={<Phone className="h-5 w-5 text-accent" />}
              title="Telefon"
              lines={[
                <a key="tel" href="tel:+420417861700" className="hover:text-accent">
                  +420 417 861 700
                </a>,
              ]}
            />
            <ContactRow
              icon={<Clock className="h-5 w-5 text-accent" />}
              title="Otevírací doba"
              lines={["Otevřeno denně", "Volejte pro aktuální informace"]}
            />
            <ContactRow
              icon={<Mail className="h-5 w-5 text-accent" />}
              title="Rezervace"
              lines={["Rezervaci stolu prosím proveďte telefonicky."]}
            />
          </div>

          <div className="overflow-hidden rounded-sm border border-border shadow-sm">
            <iframe
              title="Mapa — Restaurace U Václava, Revoluční 16, Krupka"
              src="https://www.google.com/maps?q=Revolu%C4%8Dn%C3%AD+16,+Krupka&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[450px] w-full"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

function ContactRow({
  icon,
  title,
  lines,
}: {
  icon: React.ReactNode;
  title: string;
  lines: React.ReactNode[];
}) {
  return (
    <div className="flex gap-4 rounded-sm border border-border bg-card p-6">
      <div className="mt-1">{icon}</div>
      <div>
        <h3 className="font-serif text-lg text-primary">{title}</h3>
        <div className="mt-1 space-y-0.5 text-sm text-foreground/80">
          {lines.map((l, i) => (
            <div key={i}>{l}</div>
          ))}
        </div>
      </div>
    </div>
  );
}