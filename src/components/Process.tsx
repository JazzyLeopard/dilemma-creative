import { RevealSection, Reveal } from "./RevealSection";

const steps = [
  {
    num: "01",
    title: "Kennismaking",
    desc: "Gratis gesprek om je merk, doelen en uitdagingen te begrijpen. Geen verplichtingen.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Strategie",
    desc: "Wij bouwen een plan op maat: contentpijlers, planning en visuele richting.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 2 7 12 12 22 7 12 2" /><polyline points="2 17 12 22 22 17" /><polyline points="2 12 12 17 22 12" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Creatie",
    desc: "Content wordt gemaakt, goedgekeurd en gepland. Jij hoeft alleen maar te shinen.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
  {
    num: "04",
    title: "Groei",
    desc: "Maandelijkse rapportage, optimalisatie en bijsturing. Constant beter worden.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
];

export function Process() {
  return (
    <RevealSection id="werkwijze" className="py-28 md:py-36 px-5 md:px-12">
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
              <div className="group text-center p-9 rounded-3xl bg-turq-bg border border-turq/10 hover:translate-y-[-4px] hover:shadow-[0_16px_48px_rgba(0,201,183,0.1)] hover:border-turq/20 transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] cursor-default relative">
                {/* Step connector line (hidden on mobile) */}
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-2.5 w-5 h-[2px] bg-turq/20" />
                )}

                <div className="w-12 h-12 rounded-2xl bg-turq/10 text-turq mx-auto mb-4 flex items-center justify-center group-hover:bg-turq/15 transition-colors duration-300">
                  {s.icon}
                </div>
                <div className="font-display text-[42px] font-extrabold text-turq opacity-15 leading-none mb-3">{s.num}</div>
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
