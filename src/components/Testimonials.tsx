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
    <RevealSection id="reviews" className="py-28 md:py-32 px-5 md:px-12 bg-deep text-white">
      <div className="max-w-[1280px] mx-auto">
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
              <div className="bg-white/[0.06] border border-white/[0.08] rounded-3xl p-9 hover:bg-white/10 hover:translate-y-[-3px] transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)]">
                <div className="text-sunny text-base tracking-widest mb-5">★★★★★</div>
                <p className="font-serif italic text-lg leading-relaxed mb-6 text-white/90">
                  &ldquo;{r.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full ${r.color} flex items-center justify-center font-display font-extrabold text-[15px]`}>
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
