import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Veelgestelde Vragen — Dilemma Creative",
  description:
    "Antwoorden op veelgestelde vragen over social media beheer en content creatie voor food & beauty ondernemers in Vlaanderen.",
};

const faqs = [
  {
    q: "Voor wie is Dilemma Creative?",
    a: "Wij werken exclusief met food & beauty ondernemers in Vlaanderen. Denk aan restaurants, bakkerijen, cafés, beauty salons, skincare merken en wellness centra.",
  },
  {
    q: "Wat kost social media beheer?",
    a: "Onze pakketten variëren op basis van je noden. We bieden maandelijkse pakketten aan met content creatie, planning en rapportage. Boek een gratis kennismakingsgesprek voor een offerte op maat.",
  },
  {
    q: "Moet ik zelf content aanleveren?",
    a: "Nee! Wij verzorgen alles: van fotografie en videografie tot copywriting en planning. Jij focust op je zaak, wij op je socials.",
  },
  {
    q: "Op welke platformen werken jullie?",
    a: "We beheren Instagram, TikTok, Facebook en LinkedIn. Afhankelijk van je doelgroep adviseren we welke platformen het meest zinvol zijn voor jouw business.",
  },
  {
    q: "Hoe snel zie ik resultaten?",
    a: "Social media is een marathon, geen sprint. De eerste verbeteringen in content kwaliteit en consistentie zie je meteen. Significante groei in bereik en engagement verwachten we binnen 2-3 maanden.",
  },
  {
    q: "Kan ik de content eerst goedkeuren?",
    a: "Absoluut. Je krijgt alles vooraf ter goedkeuring. Wij plannen niets in zonder jouw akkoord.",
  },
  {
    q: "Wat als ik niet tevreden ben?",
    a: "We werken zonder lange contracten. We geloven in de kwaliteit van ons werk en willen dat je bij ons blijft omdat je wilt, niet omdat je moet.",
  },
  {
    q: "Doen jullie ook advertenties (ads)?",
    a: "Ja, we beheren ook betaalde social media campagnes op Instagram en Facebook. Dit is een aparte dienst die we vaak combineren met organisch beheer voor het beste resultaat.",
  },
];

function FAQSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function FAQPage() {
  return (
    <>
      <FAQSchema />
      <Navbar />
      <main className="pt-32 pb-28 px-5 md:px-12">
        <div className="max-w-[800px] mx-auto">
          <div className="font-display text-[11px] font-extrabold tracking-[0.18em] uppercase text-muted mb-4 flex items-center gap-3">
            FAQ
            <span className="flex-1 max-w-[50px] h-0.5 bg-muted/30" />
          </div>
          <h1 className="font-display text-[clamp(36px,5vw,56px)] font-extrabold leading-none tracking-[-0.03em] mb-5">
            Veelgestelde{" "}
            <span className="font-serif italic font-normal text-turq">vragen.</span>
          </h1>
          <p className="text-lg text-muted leading-relaxed max-w-[560px] mb-14">
            Alles wat je wilt weten over samenwerken met Dilemma Creative.
          </p>

          <div className="space-y-6">
            {faqs.map((f) => (
              <details
                key={f.q}
                className="group bg-turq-bg border border-turq/10 rounded-2xl overflow-hidden"
              >
                <summary className="flex items-center justify-between cursor-pointer p-6 font-display font-bold text-deep text-[17px] list-none [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <span className="text-turq text-2xl font-light ml-4 group-open:rotate-45 transition-transform duration-300">
                    +
                  </span>
                </summary>
                <div className="px-6 pb-6 text-[15px] text-ink leading-relaxed -mt-1">
                  {f.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
