import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Over Ons — Dilemma Creative",
  description:
    "Leer ons kennen. Dilemma Creative is het social media bureau voor food & beauty ondernemers in Vlaanderen. Jouw creatieve dilemma, opgelost.",
  openGraph: {
    title: "Over Ons — Dilemma Creative",
    description: "Het social media bureau voor food & beauty ondernemers in Vlaanderen.",
  },
};

const values = [
  {
    icon: "🎯",
    title: "Niche Focus",
    desc: "We werken enkel met food & beauty. Geen versnipperde aandacht, maar diepgaande kennis van jouw sector.",
  },
  {
    icon: "⚡",
    title: "Energie & Creativiteit",
    desc: "Geen saaie stockfoto's. Wij creëren content die stopt, boeit en converteert.",
  },
  {
    icon: "🤝",
    title: "Persoonlijk & Transparant",
    desc: "Geen jargon, geen lange contracten. Gewoon eerlijk advies en resultaten die je kunt zien.",
  },
  {
    icon: "📈",
    title: "Data-Gedreven",
    desc: "Maandelijkse rapportage en continue optimalisatie. We groeien samen met je merk.",
  },
];

export default function OverOnsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-28 px-5 md:px-12">
        <div className="max-w-[1280px] mx-auto">
          {/* Header */}
          <div className="max-w-[700px]">
            <div className="font-display text-[11px] font-extrabold tracking-[0.18em] uppercase text-muted mb-4 flex items-center gap-3">
              Over Ons
              <span className="flex-1 max-w-[50px] h-0.5 bg-muted/30" />
            </div>
            <h1 className="font-display text-[clamp(36px,5vw,56px)] font-extrabold leading-none tracking-[-0.03em] mb-6">
              Wij snappen je{" "}
              <span className="font-serif italic font-normal text-turq">dilemma.</span>
            </h1>
            <p className="text-lg text-ink leading-relaxed mb-6">
              Je bent gepassioneerd over je vak. Of je nu de perfecte latte art maakt of een
              flawless skin treatment geeft —{" "}
              <strong className="text-deep">social media voelt als een extra fulltime baan.</strong>
            </p>
            <p className="text-lg text-ink leading-relaxed mb-6">
              Wat moet je posten? Wanneer? Hoe vaak? En waarom groeit het niet? Dat is het dilemma
              waar zoveel food & beauty ondernemers mee worstelen.
            </p>
            <p className="text-lg text-ink leading-relaxed">
              <strong className="text-deep">Wij zijn de oplossing.</strong> Dilemma Creative neemt
              je bij de hand en gidst je door het social media doolhof. Met energie, creativiteit en
              een duidelijk plan.
            </p>
          </div>

          {/* Values */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-20">
            {values.map((v) => (
              <div
                key={v.title}
                className="bg-turq-bg border border-turq/10 rounded-3xl p-8 hover:translate-y-[-4px] hover:shadow-[0_16px_48px_rgba(0,201,183,0.1)] transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)]"
              >
                <div className="text-3xl mb-4">{v.icon}</div>
                <h3 className="font-display text-lg font-extrabold mb-2">{v.title}</h3>
                <p className="text-[15px] text-muted leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-14">
            {[
              { num: "100%", color: "text-turq", label: "Focus op food & beauty" },
              { num: "24/7", color: "text-pink-hot", label: "Content die werkt" },
              { num: "0", color: "text-grape", label: "Jargon & gedoe" },
              { num: "1", color: "text-sunny", label: "Creatieve partner" },
            ].map((s) => (
              <div
                key={s.label}
                className="bg-white rounded-3xl p-8 text-center border border-black/[0.04]"
              >
                <div
                  className={`font-display text-4xl md:text-5xl font-extrabold tracking-[-0.03em] leading-none mb-2 ${s.color}`}
                >
                  {s.num}
                </div>
                <div className="text-sm text-muted font-medium">{s.label}</div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-20 text-center">
            <a
              href="/contact"
              className="inline-flex items-center gap-2.5 bg-pink-hot text-white font-display text-base font-extrabold px-10 py-4 rounded-full hover:translate-y-[-2px] hover:scale-[1.04] transition-all duration-400 ease-[cubic-bezier(0.22,1.4,0.36,1)]"
            >
              Leer ons kennen
              <span className="text-xl">→</span>
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
