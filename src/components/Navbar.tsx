"use client";

import { useEffect, useState } from "react";
import { DilemmaIcon } from "./DilemmaIcon";

const links = [
  { href: "/over-ons", label: "Over Ons" },
  { href: "/#diensten", label: "Diensten" },
  { href: "/#niches", label: "Niches" },
  { href: "/werkwijze", label: "Werkwijze" },
  { href: "/faq", label: "FAQ" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none px-5 md:px-8">
      <nav
        className={`pointer-events-auto flex items-center justify-between transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          scrolled
            ? "mt-3.5 py-2.5 px-5 md:px-7 w-[min(920px,calc(100%-32px))] rounded-full bg-turq/95 shadow-[0_8px_32px_rgba(0,201,183,0.25),0_2px_8px_rgba(0,0,0,0.08)] backdrop-blur-xl"
            : "mt-0 py-5 px-0 w-full max-w-[1280px]"
        }`}
      >
        <a href="/" className="flex items-center gap-2.5 cursor-pointer">
          <div
            className={`w-9 h-9 rounded-[10px] flex items-center justify-center shrink-0 transition-colors duration-500 ${
              scrolled ? "bg-white/15" : "bg-turq"
            }`}
          >
            <DilemmaIcon className="w-5 h-5" fill="#FF1FA9" stroke="white" />
          </div>
          <span
            className={`font-display font-extrabold tracking-tight whitespace-nowrap transition-all duration-500 ${
              scrolled ? "text-white text-base" : "text-deep text-xl"
            }`}
          >
            dilemma creative
          </span>
        </a>

        <ul className={`hidden md:flex items-center transition-all duration-500 ${scrolled ? "gap-6" : "gap-9"}`}>
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`font-display text-sm font-semibold transition-colors duration-300 whitespace-nowrap cursor-pointer ${
                  scrolled
                    ? "text-white/80 hover:text-white"
                    : "text-ink hover:text-turq"
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="/contact"
          className={`hidden md:inline-flex font-display text-[13px] font-bold px-6 py-2.5 rounded-full transition-all duration-500 ease-[cubic-bezier(0.22,1.4,0.36,1)] hover:translate-y-[-2px] hover:scale-[1.04] whitespace-nowrap cursor-pointer ${
            scrolled
              ? "bg-white text-turq shadow-[0_2px_12px_rgba(0,0,0,0.1)]"
              : "bg-pink-hot text-white shadow-[0_4px_20px_rgba(255,31,169,0.25)]"
          }`}
        >
          Start Vandaag
        </a>

        <button
          className={`flex md:hidden flex-col justify-center gap-1.5 w-9 h-9 items-center rounded-lg cursor-pointer transition-colors duration-300 ${
            scrolled ? "hover:bg-white/10" : "hover:bg-black/5"
          }`}
          onClick={() => setOpen(!open)}
          aria-label="Menu openen"
        >
          <span
            className={`block h-0.5 rounded-sm transition-all duration-300 ${
              scrolled ? "bg-white" : "bg-deep"
            } ${open ? "w-5 rotate-45 translate-y-[4px]" : "w-6"}`}
          />
          <span
            className={`block h-0.5 rounded-sm transition-all duration-300 ${
              scrolled ? "bg-white" : "bg-deep"
            } ${open ? "w-5 -rotate-45 -translate-y-[4px]" : "w-4"}`}
          />
        </button>
      </nav>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm md:hidden transition-opacity duration-300 pointer-events-auto ${
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setOpen(false)}
      />

      {/* Mobile menu */}
      <div
        className={`fixed top-4 left-4 right-4 bg-white shadow-[0_24px_64px_rgba(0,0,0,0.12)] p-8 flex flex-col gap-1 md:hidden rounded-[28px] z-50 pointer-events-auto transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-[10px] bg-turq flex items-center justify-center">
              <DilemmaIcon className="w-5 h-5" fill="#FF1FA9" stroke="white" />
            </div>
            <span className="font-display font-extrabold text-deep text-lg tracking-tight">dilemma creative</span>
          </div>
          <button
            onClick={() => setOpen(false)}
            className="w-9 h-9 rounded-full bg-black/5 flex items-center justify-center cursor-pointer hover:bg-black/10 transition-colors"
            aria-label="Menu sluiten"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M18 6L6 18M6 6l12 12" /></svg>
          </button>
        </div>
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className="font-display text-[17px] font-semibold text-ink py-3 px-4 rounded-2xl hover:bg-turq-bg transition-colors cursor-pointer"
            onClick={() => setOpen(false)}
          >
            {l.label}
          </a>
        ))}
        <a
          href="/contact"
          className="font-display text-[15px] font-bold px-6 py-3.5 rounded-full bg-pink-hot text-white text-center mt-4 cursor-pointer hover:shadow-[0_8px_24px_rgba(255,31,169,0.3)] transition-all"
          onClick={() => setOpen(false)}
        >
          Start Vandaag
        </a>
      </div>
    </div>
  );
}
