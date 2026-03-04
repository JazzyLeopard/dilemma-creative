import { DilemmaIcon } from "./DilemmaIcon";

const footerCols = [
  {
    title: "Diensten",
    links: [
      { label: "Social Media Beheer", href: "/#diensten" },
      { label: "Content Creatie", href: "/#diensten" },
      { label: "Strategie & Advies", href: "/#diensten" },
    ],
  },
  {
    title: "Bedrijf",
    links: [
      { label: "Over Ons", href: "/over-ons" },
      { label: "Werkwijze", href: "/werkwijze" },
      { label: "FAQ", href: "/faq" },
    ],
  },
  {
    title: "Contact",
    links: [
      { label: "hello@dilemmacreative.be", href: "mailto:hello@dilemmacreative.be" },
      { label: "Gratis Kennismaking", href: "/contact" },
    ],
  },
];

const socials = [
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    label: "TikTok",
    href: "#",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1 0-5.78 2.92 2.92 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 3 15.57 6.33 6.33 0 0 0 9.37 22a6.33 6.33 0 0 0 6.38-6.22V9.4a8.16 8.16 0 0 0 3.84.96V7.08a4.84 4.84 0 0 1 0-.39z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "#",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
];

export function Footer() {
  return (
    <footer className="bg-deep text-white px-5 md:px-12 pt-20 pb-10">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr] gap-12 pb-12 border-b border-white/[0.08]">
          <div>
            <a href="/" className="flex items-center gap-2.5 mb-5 cursor-pointer">
              <div className="w-9 h-9 rounded-[10px] bg-white/10 flex items-center justify-center shrink-0">
                <DilemmaIcon className="w-5 h-5" fill="#FF1FA9" stroke="white" />
              </div>
              <span className="font-display font-extrabold text-xl tracking-tight">
                dilemma <span className="text-turq">creative</span>
              </span>
            </a>
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
                    <a href={l.href} className="text-sm text-white/60 hover:text-turq transition-colors duration-200 cursor-pointer">
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
          <div className="flex gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                className="w-9 h-9 rounded-full bg-white/[0.06] flex items-center justify-center text-white/50 hover:bg-turq hover:text-white transition-all duration-200 cursor-pointer"
                aria-label={s.label}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
