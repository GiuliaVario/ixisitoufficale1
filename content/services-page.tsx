// src/content/services-page.tsx
import type { ServiceItem } from "@/components/shared/ServicesSection";

export const servicesPage: ServiceItem[] = [
  {
    id: "sviluppo-web",
    title: "SVILUPPO WEB",
    color: "var(--brand-accent-1)",
    icon: "/icons/sections/sviluppoweb.webp",
    align: "right",
    body: (
      <>
        <span className="font-extrabold">Realizziamo siti che rispondono alle tue esigenze:</span>{" "}
        e-commerce intuitivi, vetrine eleganti o portfolio dinamici. Ogni progetto è pensato
        per essere <span className="font-extrabold">funzionale</span>, facile da navigare e
        perfettamente <span className="font-extrabold">responsive</span>; sviluppiamo{" "}
        <span className="font-extrabold">soluzioni scalabili</span>, pensate per far crescere
        il tuo business. Codice solido, design funzionale e massima attenzione alla{" "}
        <span className="font-extrabold">user experience</span>.
      </>
    ),
  },
  {
    id: "social-media",
    title: "SOCIAL MEDIA",
    color: "var(--brand-primary)",
    icon: "/icons/sections/socialmedia.webp",
    align: "left",
    body: (
      <>
        Ci occupiamo della tua presenza social in modo completo:{" "}
        <span className="font-extrabold">strategia</span>,{" "}
        <span className="font-extrabold">pubblicazione</span> quotidiana,{" "}
        <span className="font-extrabold">gestione</span> dei profili e dialogo con la community.
        Creiamo contenuti originali – testi, grafiche, shooting, video – pensati per raccontarti
        con coerenza e raggiungere i tuoi <span className="font-extrabold">obiettivi</span>.{" "}
        Analizziamo i risultati e adattiamo ogni passo per garantire{" "}
        <span className="font-extrabold">continuità</span>,{" "}
        <span className="font-extrabold">qualità</span> e crescita nel tempo.
      </>
    ),
  },
  {
    id: "branding",
    title: "BRANDING",
    color: "var(--brand-accent-2)",
    icon: "/icons/sections/branding.webp",
    align: "right",
    body: (
      <>
        Definiamo l’identità visiva partendo da ciò che vuoi comunicare:{" "}
        <span className="font-extrabold">valori, tono, personalità</span>.{" "}
        Progettiamo <span className="font-extrabold">strategie visual</span>, palette colori,
        font e linee guida che rendano <span className="font-extrabold">riconoscibile</span>{" "}
        ogni elemento della tua comunicazione. Lavoriamo per costruire un’immagine coerente,{" "}
        <span className="font-extrabold">solida</span> e{" "}
        <span className="font-extrabold">distintiva</span>, che funzioni online e offline.
      </>
    ),
  },
];
