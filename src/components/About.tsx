import { RevealSection, Reveal } from "./RevealSection";

const stats = [
  { num: "100%", color: "text-turq", label: "Focus op food & beauty" },
  { num: "24/7", color: "text-pink-hot", label: "Content die werkt" },
  { num: "0", color: "text-grape", label: "Jargon & gedoe" },
  { num: "1", color: "text-sunny", label: "Creatieve partner" },
];

export function About() {
  return (
    <RevealSection id="over-ons" className="py-28 md:py-32 px-5 md:px-12 bg-turq-bg">
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
            <div className="space-y-5">
              <p className="text-[17px] text-ink leading-[1.7]">
                Je bent gepassioneerd over je vak. Of je nu de perfecte latte art maakt of een flawless skin treatment geeft —{" "}
                <strong className="text-deep">social media voelt als een extra fulltime baan.</strong>
              </p>
              <p className="text-[17px] text-ink leading-[1.7]">
                Wat moet je posten? Wanneer? Hoe vaak? En waarom groeit het niet? Dat is het dilemma waar zoveel food & beauty ondernemers mee worstelen.
              </p>
              <p className="text-[17px] text-ink leading-[1.7]">
                <strong className="text-deep">Wij zijn de oplossing.</strong> Dilemma Creative neemt je bij de hand en gidst je door het social media doolhof. Met energie, creativiteit en een duidelijk plan.
              </p>
            </div>
          </Reveal>

          <Reveal delay={3}>
            <div className="grid grid-cols-2 gap-5">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="bg-white rounded-3xl p-8 text-center border border-black/[0.04] hover:translate-y-[-4px] hover:shadow-[0_16px_48px_rgba(0,0,0,0.06)] transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)]"
                >
                  <div className={`font-display text-5xl font-extrabold tracking-[-0.03em] leading-none mb-2 ${s.color}`}>
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
