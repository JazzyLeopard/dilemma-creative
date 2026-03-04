const footerCols = [
  {
    title: "Diensten",
    links: [
      { label: "Social Media Beheer", href: "#diensten" },
      { label: "Content Creatie", href: "#diensten" },
      { label: "Strategie & Advies", href: "#diensten" },
    ],
  },
  {
    title: "Niches",
    links: [
      { label: "Food & Horeca", href: "#niches" },
      { label: "Beauty & Wellness", href: "#niches" },
    ],
  },
  {
    title: "Contact",
    links: [
      { label: "hello@dilemmacreative.be", href: "mailto:hello@dilemmacreative.be" },
      { label: "Gratis Kennismaking", href: "#contact" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-deep text-white px-5 md:px-12 pt-20 pb-10">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr] gap-12 pb-12 border-b border-white/[0.08]">
          <div>
            <div className="font-display font-extrabold text-2xl tracking-[-0.03em] mb-4">
              dilemma <span className="text-turq">creative</span>
            </div>
            <p className="text-sm text-white/40 leading-relaxed max-w-[280px]">
              Jouw creatieve dilemma, opgelost. Social media beheer & content creatie voor food & beauty ondernemers in Vlaanderen.
            </p>
          </div>
          {footerCols.map((col) => (
            <div key={col.title}>
              <h4 className="font-display text-xs font-extrabold uppercase tracking-[0.1em] text-white/30 mb-5">{col.title}</h4>
              <ul className="flex flex-col gap-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="text-sm text-white/60 hover:text-turq transition-colors">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-center pt-8 gap-4 text-[13px] text-white/25">
          <span>&copy; 2026 Dilemma Creative. Alle rechten voorbehouden.</span>
          <div className="flex gap-4">
            {["📸", "🎵", "💼"].map((emoji, i) => (
              <a
                key={i}
                href="#"
                className="w-9 h-9 rounded-full bg-white/[0.06] flex items-center justify-center text-base text-white/50 hover:bg-turq hover:text-white transition-all"
                aria-label="Social"
              >
                {emoji}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
