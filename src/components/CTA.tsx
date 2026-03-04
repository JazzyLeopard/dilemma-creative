import { RevealSection, Reveal } from "./RevealSection";
import { DilemmaIcon } from "./DilemmaIcon";

export function CTA() {
  return (
    <RevealSection id="contact" className="py-28 md:py-36 px-5 md:px-12 bg-gradient-to-br from-turq via-turq-dark to-pink-hot text-white text-center relative overflow-hidden">
      {/* Background pattern */}
      <DilemmaIcon
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(60vw,500px)] opacity-[0.06] pointer-events-none"
        fill="white"
      />

      <div className="max-w-[700px] mx-auto relative z-10">
        <Reveal>
          <h2 className="font-display text-[clamp(36px,5vw,64px)] font-extrabold leading-none tracking-[-0.03em] mb-6">
            Klaar om je dilemma<br />op te lossen?
          </h2>
        </Reveal>
        <Reveal delay={1}>
          <p className="font-serif italic text-xl opacity-85 leading-relaxed mb-11">
            Boek een gratis kennismakingsgesprek en ontdek wat wij voor jouw merk kunnen betekenen.
          </p>
        </Reveal>
        <Reveal delay={2}>
          <a
            href="mailto:hello@dilemmacreative.be"
            className="group inline-flex items-center gap-3 bg-white text-deep font-display text-base font-extrabold px-11 py-5 rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.15)] hover:translate-y-[-3px] hover:shadow-[0_16px_48px_rgba(0,0,0,0.2)] transition-all duration-400 ease-[cubic-bezier(0.22,1.4,0.36,1)] cursor-pointer"
          >
            Plan een Gesprek
            <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14m-7-7 7 7-7 7" /></svg>
          </a>
        </Reveal>
      </div>
    </RevealSection>
  );
}
