import { DilemmaIcon } from "./DilemmaIcon";
import { RevealSection, Reveal } from "./RevealSection";

const floatCards = [
  { label: "Content Creatie", icon: "turq", pos: "bottom-[-18px] left-[-24px] md:left-[-30px]" },
  { label: "Social Media", icon: "pink", pos: "top-[-14px] right-[-24px] md:right-[-30px]", delay: "1.5s" },
  { label: "Strategie", icon: "grape", pos: "bottom-[65px] right-[-36px] md:right-[-50px]", delay: "2s" },
];

const iconColors: Record<string, string> = {
  turq: "bg-turq",
  pink: "bg-pink-hot",
  grape: "bg-grape",
};

export function Hero() {
  return (
    <RevealSection className="min-h-screen flex items-center relative overflow-hidden px-5 md:px-12 pt-28 pb-20">
      {/* Subtle dot grid background */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none z-0"
        style={{
          backgroundImage: "radial-gradient(circle, #1A1A2E 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Background watermark */}
      <DilemmaIcon
        className="absolute right-[-4%] top-1/2 -translate-y-1/2 w-[min(55vw,700px)] opacity-[0.04] pointer-events-none z-0"
        fill="#00C9B7"
      />

      <div className="max-w-[1280px] mx-auto w-full grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center relative z-10">
        <div>
          <Reveal>
            <div className="inline-flex items-center gap-2.5 bg-turq-bg border border-turq/15 px-5 py-2.5 rounded-full font-display text-xs font-bold text-turq-dark tracking-wide uppercase mb-8">
              <span className="w-2 h-2 rounded-full bg-turq animate-[blink_2s_ease-in-out_infinite]" />
              Social Media Bureau — Vlaanderen
            </div>
          </Reveal>

          <Reveal delay={1}>
            <h1 className="font-display text-[clamp(44px,6vw,80px)] font-extrabold leading-[0.93] tracking-[-0.04em] mb-7">
              Jouw creatieve<br />
              dilemma,<br />
              <span className="font-serif italic font-normal tracking-[-0.02em] bg-gradient-to-r from-turq to-pink-hot bg-clip-text text-transparent">
                Opgelost.
              </span>
            </h1>
          </Reveal>

          <Reveal delay={2}>
            <p className="font-serif italic text-[clamp(18px,2.2vw,26px)] text-muted leading-relaxed mb-10 max-w-[520px]">
              Social media beheer & content creatie<br className="hidden sm:block" />
              voor <em className="not-italic text-pink-hot font-display font-bold">food</em> &{" "}
              <em className="not-italic text-pink-hot font-display font-bold">beauty</em> ondernemers.
            </p>
          </Reveal>

          <Reveal delay={3}>
            <div className="flex gap-4 flex-wrap">
              <a
                href="/contact"
                className="group font-display text-[15px] font-bold px-9 py-4 rounded-full bg-pink-hot text-white shadow-[0_6px_28px_rgba(255,31,169,0.25)] hover:shadow-[0_14px_36px_rgba(255,31,169,0.35)] hover:translate-y-[-3px] active:scale-[0.97] transition-all duration-400 ease-[cubic-bezier(0.22,1.4,0.36,1)] cursor-pointer flex items-center gap-2.5"
              >
                Gratis Kennismaking
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14m-7-7 7 7-7 7" /></svg>
              </a>
              <a
                href="/#diensten"
                className="font-display text-[15px] font-bold px-9 py-4 rounded-full bg-transparent text-deep border-[2.5px] border-deep/15 hover:border-deep hover:bg-deep hover:text-white hover:translate-y-[-3px] active:scale-[0.97] transition-all duration-400 ease-[cubic-bezier(0.22,1.4,0.36,1)] cursor-pointer"
              >
                Bekijk Diensten
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={2} className="flex items-center justify-center relative lg:order-none order-first">
          <div className="w-full max-w-[420px] aspect-square bg-gradient-to-br from-turq to-turq-dark rounded-[40px] flex items-center justify-center relative shadow-[0_32px_80px_rgba(0,201,183,0.2)]">
            {/* Inner glow ring */}
            <div className="absolute inset-3 rounded-[32px] border border-white/15" />
            <DilemmaIcon className="w-[52%] drop-shadow-[0_8px_32px_rgba(255,31,169,0.3)]" fill="#FF1FA9" stroke="white" />

            {floatCards.map((card) => (
              <div
                key={card.label}
                className={`absolute glass border border-black/[0.04] rounded-2xl px-5 py-3.5 shadow-[0_12px_40px_rgba(0,0,0,0.08)] font-display font-bold text-sm flex items-center gap-2.5 animate-[float_4s_ease-in-out_infinite] hidden lg:flex cursor-default ${card.pos}`}
                style={card.delay ? { animationDelay: card.delay } : undefined}
              >
                <span className={`w-2.5 h-2.5 rounded-full ${iconColors[card.icon]} shrink-0`} />
                {card.label}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </RevealSection>
  );
}
