import { RevealSection, Reveal } from "./RevealSection";

const reviews = [
  {
    quote: "Eindelijk snapt iemand mijn brand. Onze feed is niet meer te herkennen — in de beste zin!",
    name: "Sarah D.",
    role: "Beauty Studio — Antwerpen",
    avatar: "S",
    color: "bg-pink-hot",
  },
  {
    quote: "Meer reserveringen via Instagram dan ooit. De content is precies wat we nodig hadden.",
    name: "Marco V.",
    role: "Restaurant — Gent",
    avatar: "M",
    color: "bg-turq",
  },
  {
    quote: "Ze denken mee, zijn creatief en leveren altijd op tijd. Echt een partner, geen leverancier.",
    name: "Lisa T.",
    role: "Skincare Brand — Brussel",
    avatar: "L",
    color: "bg-grape",
  },
];

export function Testimonials() {
  return (
    <RevealSection id="reviews" className="py-28 md:py-36 px-5 md:px-12 bg-deep text-white relative overflow-hidden">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-turq/5 pointer-events-none" />

      <div className="max-w-[1280px] mx-auto relative z-10">
        <Reveal>
          <div className="font-display text-[11px] font-extrabold tracking-[0.18em] uppercase text-white/40 mb-4 flex items-center gap-3">
            Wat Klanten Zeggen
            <span className="flex-1 max-w-[50px] h-0.5 bg-white/15" />
          </div>
        </Reveal>
        <Reveal delay={1}>
          <h2 className="font-display text-[clamp(36px,5vw,64px)] font-extrabold leading-none tracking-[-0.03em] mb-5">
            Het dilemma,<br />
            <span className="font-serif italic font-normal text-turq">opgelost.</span>
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-14">
          {reviews.map((r, i) => (
            <Reveal key={r.name} delay={i + 2}>
              <div className="bg-white/[0.06] border border-white/[0.08] rounded-3xl p-9 hover:bg-white/10 hover:translate-y-[-3px] hover:border-white/15 transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] cursor-default group">
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, si) => (
                    <svg key={si} className="w-4.5 h-4.5 text-sunny" viewBox="0 0 24 24" fill="currentColor">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>

                <blockquote className="font-serif italic text-lg leading-relaxed mb-7 text-white/90">
                  &ldquo;{r.quote}&rdquo;
                </blockquote>

                <div className="flex items-center gap-3 pt-5 border-t border-white/[0.06]">
                  <div className={`w-10 h-10 rounded-full ${r.color} flex items-center justify-center font-display font-extrabold text-[15px] shrink-0`}>
                    {r.avatar}
                  </div>
                  <div>
                    <div className="font-display font-bold text-sm">{r.name}</div>
                    <div className="text-xs text-white/40 mt-0.5">{r.role}</div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </RevealSection>
  );
}
