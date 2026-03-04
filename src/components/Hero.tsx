import { DilemmaIcon } from "./DilemmaIcon";
import { RevealSection, Reveal } from "./RevealSection";

const floatCards = [
  { label: "Content Creatie", color: "bg-turq", pos: "bottom-[-20px] left-[-30px]" },
  { label: "Social Media", color: "bg-pink-hot", pos: "top-[-16px] right-[-30px]", delay: "1.5s" },
  { label: "Strategie", color: "bg-grape", pos: "bottom-[60px] right-[-50px]", delay: "2s" },
];

export function Hero() {
  return (
    <RevealSection className="min-h-screen flex items-center relative overflow-hidden px-5 md:px-12 pt-28 pb-20">
      {/* Background watermark */}
      <DilemmaIcon
        className="absolute right-[-4%] top-1/2 -translate-y-1/2 w-[min(55vw,700px)] opacity-[0.07] pointer-events-none z-0"
        fill="#00C9B7"
      />

      <div className="max-w-[1280px] mx-auto w-full grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center relative z-10">
        <div>
          <Reveal>
            <div className="inline-flex items-center gap-2 bg-turq-bg px-4.5 py-2 rounded-full font-display text-xs font-bold text-turq-dark tracking-wide uppercase mb-7">
              <span className="w-1.5 h-1.5 rounded-full bg-turq animate-[blink_2s_ease-in-out_infinite]" />
              Social Media Bureau — Vlaanderen
            </div>
          </Reveal>

          <Reveal delay={1}>
            <h1 className="font-display text-[clamp(44px,6vw,80px)] font-extrabold leading-[0.95] tracking-[-0.04em] mb-6">
              Jouw creatieve<br />
              dilemma,<br />
              <span className="font-serif italic font-normal tracking-[-0.02em]">Opgelost.</span>
            </h1>
          </Reveal>

          <Reveal delay={2}>
            <p className="font-serif italic text-[clamp(18px,2.2vw,26px)] text-muted leading-relaxed mb-9">
              Social media beheer & content creatie<br />
              voor <em className="not-italic text-pink-hot font-display font-bold">food</em> &{" "}
              <em className="not-italic text-pink-hot font-display font-bold">beauty</em> ondernemers.
            </p>
          </Reveal>

          <Reveal delay={3}>
            <div className="flex gap-3.5 flex-wrap">
              <a
                href="#contact"
                className="font-display text-[15px] font-bold px-9 py-4 rounded-full bg-pink-hot text-white shadow-[0_6px_28px_rgba(255,31,169,0.3)] hover:shadow-[0_14px_36px_rgba(255,31,169,0.4)] hover:translate-y-[-3px] hover:scale-[1.03] active:scale-[0.97] transition-all duration-400 ease-[cubic-bezier(0.22,1.4,0.36,1)]"
              >
                Gratis Kennismaking
              </a>
              <a
                href="#diensten"
                className="font-display text-[15px] font-bold px-9 py-4 rounded-full bg-transparent text-deep border-[2.5px] border-deep hover:bg-deep hover:text-white hover:translate-y-[-3px] hover:scale-[1.03] active:scale-[0.97] transition-all duration-400 ease-[cubic-bezier(0.22,1.4,0.36,1)]"
              >
                Bekijk Diensten
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={2} className="flex items-center justify-center relative lg:order-none order-first">
          <div className="w-full max-w-[420px] aspect-square bg-turq rounded-[40px] flex items-center justify-center relative shadow-[0_32px_80px_rgba(0,201,183,0.25)]">
            <DilemmaIcon className="w-[55%]" fill="#FF1FA9" stroke="white" />

            {floatCards.map((card) => (
              <div
                key={card.label}
                className={`absolute bg-white rounded-[20px] px-5.5 py-4 shadow-[0_12px_40px_rgba(0,0,0,0.1)] font-display font-bold text-sm flex items-center gap-2.5 animate-[float_4s_ease-in-out_infinite] hidden lg:flex ${card.pos}`}
                style={card.delay ? { animationDelay: card.delay } : undefined}
              >
                <span className={`w-2.5 h-2.5 rounded-full ${card.color} shrink-0`} />
                {card.label}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </RevealSection>
  );
}
