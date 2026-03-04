import { RevealSection, Reveal } from "./RevealSection";

const steps = [
  { num: "01", title: "Kennismaking", desc: "Gratis gesprek om je merk, doelen en uitdagingen te begrijpen. Geen verplichtingen." },
  { num: "02", title: "Strategie", desc: "Wij bouwen een plan op maat: contentpijlers, planning en visuele richting." },
  { num: "03", title: "Creatie", desc: "Content wordt gemaakt, goedgekeurd en gepland. Jij hoeft alleen maar te shinen." },
  { num: "04", title: "Groei", desc: "Maandelijkse rapportage, optimalisatie en bijsturing. Constant beter worden." },
];

export function Process() {
  return (
    <RevealSection id="werkwijze" className="py-28 md:py-32 px-5 md:px-12">
      <div className="max-w-[1280px] mx-auto">
        <Reveal>
          <div className="font-display text-[11px] font-extrabold tracking-[0.18em] uppercase text-muted mb-4 flex items-center gap-3">
            Werkwijze
            <span className="flex-1 max-w-[50px] h-0.5 bg-muted/30" />
          </div>
        </Reveal>
        <Reveal delay={1}>
          <h2 className="font-display text-[clamp(36px,5vw,64px)] font-extrabold leading-none tracking-[-0.03em] mb-5">
            Van dilemma naar<br />
            <span className="font-serif italic font-normal text-pink-hot">resultaat.</span>
          </h2>
        </Reveal>
        <Reveal delay={2}>
          <p className="text-lg text-muted leading-relaxed max-w-[560px]">
            In 4 stappen van chaos naar een feed waar je trots op bent.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-14">
          {steps.map((s, i) => (
            <Reveal key={s.num} delay={i + 1}>
              <div className="text-center p-10 rounded-3xl bg-turq-bg border border-turq/10 hover:translate-y-[-4px] hover:shadow-[0_16px_48px_rgba(0,201,183,0.1)] transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)]">
                <div className="font-display text-[52px] font-extrabold text-turq opacity-25 leading-none mb-4">{s.num}</div>
                <h3 className="font-display text-lg font-extrabold mb-2.5">{s.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </RevealSection>
  );
}
