import { RevealSection, Reveal } from "./RevealSection";

const stats = [
  {
    num: "100%",
    color: "text-turq",
    label: "Focus op food & beauty",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" /></svg>
    ),
  },
  {
    num: "24/7",
    color: "text-pink-hot",
    label: "Content die werkt",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
    ),
  },
  {
    num: "0",
    color: "text-grape",
    label: "Jargon & gedoe",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18.36 6.64a9 9 0 1 1-12.73 0" /><line x1="12" y1="2" x2="12" y2="12" /></svg>
    ),
  },
  {
    num: "1",
    color: "text-sunny",
    label: "Creatieve partner",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>
    ),
  },
];

export function About() {
  return (
    <RevealSection id="over-ons" className="py-28 md:py-36 px-5 md:px-12 bg-turq-bg">
      <div className="max-w-[1280px] mx-auto">
        <Reveal>
          <div className="font-display text-[11px] font-extrabold tracking-[0.18em] uppercase text-muted mb-4 flex items-center gap-3">
            Over Ons
            <span className="flex-1 max-w-[50px] h-0.5 bg-muted/30" />
          </div>
        </Reveal>
        <Reveal delay={1}>
          <h2 className="font-display text-[clamp(36px,5vw,64px)] font-extrabold leading-none tracking-[-0.03em] mb-5">
            Wij snappen je<br />
            <span className="font-serif italic font-normal text-turq">dilemma.</span>
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mt-14">
          <Reveal delay={2}>
            <div className="space-y-6">
              <p className="text-[17px] text-ink leading-[1.75]">
                Je bent gepassioneerd over je vak. Of je nu de perfecte latte art maakt of een flawless skin treatment geeft —{" "}
                <strong className="text-deep">social media voelt als een extra fulltime baan.</strong>
              </p>
              <p className="text-[17px] text-ink leading-[1.75]">
                Wat moet je posten? Wanneer? Hoe vaak? En waarom groeit het niet? Dat is het dilemma waar zoveel food & beauty ondernemers mee worstelen.
              </p>
              <p className="text-[17px] text-ink leading-[1.75]">
                <strong className="text-deep">Wij zijn de oplossing.</strong> Dilemma Creative neemt je bij de hand en gidst je door het social media doolhof. Met energie, creativiteit en een duidelijk plan.
              </p>
              <a
                href="/over-ons"
                className="inline-flex items-center gap-2 font-display text-sm font-bold text-turq-dark hover:text-turq transition-colors duration-300 cursor-pointer mt-2"
              >
                Meer over ons
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14m-7-7 7 7-7 7" /></svg>
              </a>
            </div>
          </Reveal>

          <Reveal delay={3}>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="bg-white rounded-3xl p-7 text-center border border-black/[0.04] hover:translate-y-[-4px] hover:shadow-[0_16px_48px_rgba(0,0,0,0.06)] transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] cursor-default group"
                >
                  <div className={`w-10 h-10 rounded-xl mx-auto mb-3 flex items-center justify-center ${s.color} bg-current/5 opacity-30 group-hover:opacity-50 transition-opacity duration-300`}>
                    {s.icon}
                  </div>
                  <div className={`font-display text-[44px] font-extrabold tracking-[-0.03em] leading-none mb-2 ${s.color}`}>
                    {s.num}
                  </div>
                  <div className="text-sm text-muted font-medium">{s.label}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </RevealSection>
  );
}
