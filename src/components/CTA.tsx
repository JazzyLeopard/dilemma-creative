import { RevealSection, Reveal } from "./RevealSection";

export function CTA() {
  return (
    <RevealSection id="contact" className="py-28 md:py-32 px-5 md:px-12 bg-gradient-to-br from-turq to-pink-hot text-white text-center">
      <div className="max-w-[700px] mx-auto">
        <Reveal>
          <h2 className="font-display text-[clamp(36px,5vw,64px)] font-extrabold leading-none tracking-[-0.03em] mb-5">
            Klaar om je dilemma<br />op te lossen?
          </h2>
        </Reveal>
        <Reveal delay={1}>
          <p className="font-serif italic text-xl opacity-85 leading-relaxed mb-10">
            Boek een gratis kennismakingsgesprek en ontdek wat wij voor jouw merk kunnen betekenen.
          </p>
        </Reveal>
        <Reveal delay={2}>
          <a
            href="mailto:hello@dilemmacreative.be"
            className="inline-flex items-center gap-2.5 bg-white text-deep font-display text-base font-extrabold px-11 py-4.5 rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.15)] hover:translate-y-[-3px] hover:scale-[1.04] hover:shadow-[0_16px_48px_rgba(0,0,0,0.2)] transition-all duration-400 ease-[cubic-bezier(0.22,1.4,0.36,1)]"
          >
            Plan een Gesprek
            <span className="text-xl">→</span>
          </a>
        </Reveal>
      </div>
    </RevealSection>
  );
}
