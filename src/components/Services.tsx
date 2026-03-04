import { RevealSection, Reveal } from "./RevealSection";

const services = [
  {
    icon: "📱",
    iconBg: "bg-turq-light",
    title: "Social Media Beheer",
    desc: "Wij beheren je kanalen van A tot Z. Planning, posting, community management en rapportage. Jij focust op je zaak, wij op je feed.",
    tags: [
      { label: "Instagram", cls: "bg-turq-light text-turq-dark" },
      { label: "TikTok", cls: "bg-turq-light text-turq-dark" },
      { label: "Facebook", cls: "bg-turq-light text-turq-dark" },
    ],
    accent: "bg-turq",
  },
  {
    icon: "🎨",
    iconBg: "bg-pink-bg",
    title: "Content Creatie",
    desc: "Scroll-stopping visuals, reels en stories die je merk tot leven brengen. Authentiek, on-brand en altijd met smaak.",
    tags: [
      { label: "Fotografie", cls: "bg-[#FFE5F1] text-pink-brand" },
      { label: "Video", cls: "bg-[#FFE5F1] text-pink-brand" },
      { label: "Design", cls: "bg-[#FFE5F1] text-pink-brand" },
    ],
    accent: "bg-pink-hot",
  },
  {
    icon: "🧭",
    iconBg: "bg-[#F0E8FF]",
    title: "Strategie & Advies",
    desc: "Geen random posten meer. Wij bouwen een strategie die past bij jouw doelen, doelgroep en branche. Data-gedreven, creatief uitgevoerd.",
    tags: [
      { label: "Contentplan", cls: "bg-[#F0E8FF] text-grape" },
      { label: "Analyse", cls: "bg-[#F0E8FF] text-grape" },
      { label: "Groei", cls: "bg-[#F0E8FF] text-grape" },
    ],
    accent: "bg-grape",
  },
];

export function Services() {
  return (
    <RevealSection id="diensten" className="py-28 md:py-32 px-5 md:px-12">
      <div className="max-w-[1280px] mx-auto">
        <Reveal>
          <div className="font-display text-[11px] font-extrabold tracking-[0.18em] uppercase text-muted mb-4 flex items-center gap-3">
            Diensten
            <span className="flex-1 max-w-[50px] h-0.5 bg-muted/30" />
          </div>
        </Reveal>
        <Reveal delay={1}>
          <h2 className="font-display text-[clamp(36px,5vw,64px)] font-extrabold leading-none tracking-[-0.03em] mb-5">
            Alles wat je nodig hebt,<br />
            <span className="font-serif italic font-normal text-pink-hot">onder een dak.</span>
          </h2>
        </Reveal>
        <Reveal delay={2}>
          <p className="text-lg text-muted leading-relaxed max-w-[560px]">
            Van strategie tot uitvoering. Wij regelen het zodat jij kunt focussen op wat je het beste doet.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-14">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i + 2}>
              <div className="group bg-white border border-black/[0.06] rounded-[28px] p-11 hover:translate-y-[-6px] hover:shadow-[0_24px_64px_rgba(0,0,0,0.08)] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] relative overflow-hidden">
                <div className={`absolute top-0 left-0 right-0 h-1 rounded-t-[28px] ${s.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-400`} />
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-[28px] mb-6 ${s.iconBg}`}>
                  {s.icon}
                </div>
                <h3 className="font-display text-[22px] font-extrabold tracking-[-0.02em] mb-3.5">{s.title}</h3>
                <p className="text-[15px] text-muted leading-relaxed mb-5">{s.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {s.tags.map((t) => (
                    <span key={t.label} className={`px-3.5 py-1.5 rounded-full font-display text-[11px] font-bold tracking-wide ${t.cls}`}>
                      {t.label}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </RevealSection>
  );
}
