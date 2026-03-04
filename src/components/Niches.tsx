import { RevealSection, Reveal } from "./RevealSection";

const niches = [
  {
    label: "Food & Horeca",
    title: "Jouw gerechten\nverdienen beter.",
    desc: "Van restaurant tot bakkerij — wij maken content die je klanten het water laat lopen.",
    items: ["Foodfotografie & video", "Menu-highlights & specials", "Behind-the-kitchen content", "Review management"],
    gradient: "bg-gradient-to-br from-turq to-turq-dark",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8h1a4 4 0 0 1 0 8h-1" /><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" /><line x1="6" y1="1" x2="6" y2="4" /><line x1="10" y1="1" x2="10" y2="4" /><line x1="14" y1="1" x2="14" y2="4" />
      </svg>
    ),
  },
  {
    label: "Beauty & Wellness",
    title: "Laat je werk\nvoor zich spreken.",
    desc: "Salon, spa of skincare brand — wij vertalen je expertise naar een feed die straalt.",
    items: ["Before/after showcases", "Treatment tutorials & reels", "Product photography", "Klanten-testimonials"],
    gradient: "bg-gradient-to-br from-pink-hot to-grape",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
];

export function Niches() {
  return (
    <RevealSection id="niches" className="py-28 md:py-36 px-5 md:px-12 bg-pink-bg">
      <div className="max-w-[1280px] mx-auto">
        <Reveal>
          <div className="font-display text-[11px] font-extrabold tracking-[0.18em] uppercase text-muted mb-4 flex items-center gap-3">
            Onze Niches
            <span className="flex-1 max-w-[50px] h-0.5 bg-muted/30" />
          </div>
        </Reveal>
        <Reveal delay={1}>
          <h2 className="font-display text-[clamp(36px,5vw,64px)] font-extrabold leading-none tracking-[-0.03em] mb-5">
            Gespecialiseerd in<br />
            <span className="font-serif italic font-normal text-turq">smaak & stijl.</span>
          </h2>
        </Reveal>
        <Reveal delay={2}>
          <p className="text-lg text-muted leading-relaxed max-w-[560px]">
            Wij kennen de food & beauty wereld door en door. Geen generieke aanpak, maar content die jouw klanten echt aanspreekt.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-14">
          {niches.map((n, i) => (
            <Reveal key={n.label} delay={i + 3}>
              <div className={`${n.gradient} rounded-[28px] p-12 md:p-14 text-white hover:translate-y-[-4px] hover:shadow-[0_24px_64px_rgba(0,0,0,0.15)] transition-all duration-500 ease-[cubic-bezier(0.22,1.4,0.36,1)] relative overflow-hidden cursor-pointer group`}>
                {/* Decorative circle */}
                <div className="absolute -right-16 -top-16 w-48 h-48 rounded-full bg-white/[0.06] group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute -right-8 -top-8 w-32 h-32 rounded-full bg-white/[0.04] group-hover:scale-110 transition-transform duration-700 delay-75" />

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center">
                      {n.icon}
                    </div>
                    <div className="font-display text-[11px] font-extrabold uppercase tracking-[0.15em] opacity-70">{n.label}</div>
                  </div>
                  <h3 className="font-display text-[clamp(28px,3vw,40px)] font-extrabold tracking-[-0.02em] leading-[1.05] mb-5 whitespace-pre-line">{n.title}</h3>
                  <p className="text-base leading-relaxed opacity-85 max-w-[400px]">{n.desc}</p>
                  <ul className="mt-7 flex flex-col gap-3">
                    {n.items.map((item) => (
                      <li key={item} className="text-[15px] font-medium flex items-center gap-3 opacity-90">
                        <svg className="w-4 h-4 shrink-0 opacity-60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 12 2 2 4-4" /></svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </RevealSection>
  );
}
