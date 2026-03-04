import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Werkwijze — Dilemma Creative",
  description:
    "In 4 stappen van social media chaos naar een feed waar je trots op bent. Ontdek hoe wij werken bij Dilemma Creative.",
  openGraph: {
    title: "Werkwijze — Dilemma Creative",
    description: "In 4 stappen van chaos naar resultaat.",
  },
};

const steps = [
  {
    num: "01",
    title: "Kennismaking",
    desc: "Gratis gesprek om je merk, doelen en uitdagingen te begrijpen. Geen verplichtingen, gewoon een eerlijk advies over hoe wij kunnen helpen.",
    details: [
      "30 minuten videocall of koffie",
      "We analyseren je huidige socials",
      "Je krijgt meteen eerste tips mee",
      "Geen verplichtingen, geen druk",
    ],
  },
  {
    num: "02",
    title: "Strategie",
    desc: "Wij bouwen een plan op maat: contentpijlers, planning, visuele richting en de juiste platformen voor jouw doelgroep.",
    details: [
      "Contentpijlers & thema's bepalen",
      "Visuele stijl & tone of voice",
      "Platformkeuze (Instagram, TikTok, ...)",
      "Contentkalender voor de eerste maand",
    ],
  },
  {
    num: "03",
    title: "Creatie",
    desc: "Content wordt gemaakt, goedgekeurd en gepland. Jij hoeft alleen maar te shinen terwijl wij je feed transformeren.",
    details: [
      "Fotografie & videografie",
      "Copywriting & hashtag research",
      "Goedkeuring voor publicatie",
      "Automatische planning & publicatie",
    ],
  },
  {
    num: "04",
    title: "Groei",
    desc: "Maandelijkse rapportage, optimalisatie en bijsturing. Constant beter worden op basis van data en resultaten.",
    details: [
      "Maandelijks performance rapport",
      "Engagement & community beheer",
      "Strategie bijsturing op basis van data",
      "Maandelijks check-in gesprek",
    ],
  },
];

function HowToSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Hoe werkt Dilemma Creative?",
    description:
      "In 4 stappen van social media chaos naar een feed waar je trots op bent.",
    step: steps.map((s) => ({
      "@type": "HowToStep",
      name: s.title,
      text: s.desc,
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function WerkwijzePage() {
  return (
    <>
      <HowToSchema />
      <Navbar />
      <main className="pt-32 pb-28 px-5 md:px-12">
        <div className="max-w-[1280px] mx-auto">
          <div className="font-display text-[11px] font-extrabold tracking-[0.18em] uppercase text-muted mb-4 flex items-center gap-3">
            Werkwijze
            <span className="flex-1 max-w-[50px] h-0.5 bg-muted/30" />
          </div>
          <h1 className="font-display text-[clamp(36px,5vw,56px)] font-extrabold leading-none tracking-[-0.03em] mb-5">
            Van dilemma naar{" "}
            <span className="font-serif italic font-normal text-pink-hot">resultaat.</span>
          </h1>
          <p className="text-lg text-muted leading-relaxed max-w-[560px] mb-16">
            In 4 stappen van chaos naar een feed waar je trots op bent.
          </p>

          <div className="space-y-8">
            {steps.map((s) => (
              <div
                key={s.num}
                className="bg-turq-bg border border-turq/10 rounded-3xl p-8 md:p-10"
              >
                <div className="flex items-start gap-6">
                  <div className="font-display text-[52px] font-extrabold text-turq opacity-25 leading-none shrink-0">
                    {s.num}
                  </div>
                  <div className="flex-1">
                    <h2 className="font-display text-xl font-extrabold mb-2">{s.title}</h2>
                    <p className="text-[15px] text-ink leading-relaxed mb-5">{s.desc}</p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {s.details.map((d) => (
                        <li key={d} className="flex items-start gap-2 text-sm text-muted">
                          <span className="text-turq mt-0.5">✓</span>
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <a
              href="/contact"
              className="inline-flex items-center gap-2.5 bg-pink-hot text-white font-display text-base font-extrabold px-10 py-4 rounded-full hover:translate-y-[-2px] hover:scale-[1.04] transition-all duration-400 ease-[cubic-bezier(0.22,1.4,0.36,1)]"
            >
              Start met Stap 1
              <span className="text-xl">→</span>
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
