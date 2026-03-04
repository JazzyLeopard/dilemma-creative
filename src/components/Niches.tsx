import { RevealSection, Reveal } from "./RevealSection";

const niches = [
  {
    label: "Food & Horeca",
    title: "Jouw gerechten\nverdienen beter.",
    desc: "Van restaurant tot bakkerij — wij maken content die je klanten het water laat lopen.",
    items: ["Foodfotografie & video", "Menu-highlights & specials", "Behind-the-kitchen content", "Review management"],
    gradient: "bg-gradient-to-br from-turq to-turq-dark",
  },
  {
    label: "Beauty & Wellness",
    title: "Laat je werk\nvoor zich spreken.",
    desc: "Salon, spa of skincare brand — wij vertalen je expertise naar een feed die straalt.",
    items: ["Before/after showcases", "Treatment tutorials & reels", "Product photography", "Klanten-testimonials"],
    gradient: "bg-gradient-to-br from-pink-hot to-grape",
  },
];

export function Niches() {
  return (
    <RevealSection id="niches" className="py-28 md:py-32 px-5 md:px-12 bg-pink-bg">
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
              <div className={`${n.gradient} rounded-[28px] p-14 text-white hover:translate-y-[-4px] hover:scale-[1.01] hover:shadow-[0_24px_64px_rgba(0,0,0,0.15)] transition-all duration-500 ease-[cubic-bezier(0.22,1.4,0.36,1)]`}>
                <div className="font-display text-[11px] font-extrabold uppercase tracking-[0.15em] opacity-70 mb-4">{n.label}</div>
                <h3 className="font-display text-[clamp(28px,3vw,40px)] font-extrabold tracking-[-0.02em] leading-[1.05] mb-5 whitespace-pre-line">{n.title}</h3>
                <p className="text-base leading-relaxed opacity-85 max-w-[400px]">{n.desc}</p>
                <ul className="mt-6 flex flex-col gap-2.5">
                  {n.items.map((item) => (
                    <li key={item} className="text-[15px] font-medium flex items-center gap-2.5 opacity-90">
                      <span className="w-2 h-2 rounded-full bg-white/50 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </RevealSection>
  );
}
