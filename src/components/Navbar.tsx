"use client";

import { useEffect, useState } from "react";
import { DilemmaIcon } from "./DilemmaIcon";

const links = [
  { href: "#over-ons", label: "Over Ons" },
  { href: "#diensten", label: "Diensten" },
  { href: "#niches", label: "Niches" },
  { href: "#werkwijze", label: "Werkwijze" },
  { href: "#reviews", label: "Reviews" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none px-5 md:px-8">
      <nav
        className={`pointer-events-auto flex items-center justify-between transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          scrolled
            ? "mt-3.5 py-2 px-4 md:px-6 w-[min(900px,calc(100%-32px))] rounded-full bg-turq/95 shadow-[0_8px_32px_rgba(0,201,183,0.25),0_2px_8px_rgba(0,0,0,0.08)] backdrop-blur-xl"
            : "mt-0 py-5 px-0 w-full max-w-[1280px]"
        }`}
      >
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5">
          <div
            className={`w-9 h-9 rounded-[10px] flex items-center justify-center shrink-0 transition-colors duration-500 ${
              scrolled ? "bg-white/15" : "bg-turq"
            }`}
          >
            <DilemmaIcon className="w-5 h-5" fill="#FF1FA9" stroke="white" />
          </div>
          <span
            className={`font-display font-extrabold tracking-tight whitespace-nowrap transition-colors duration-500 ${
              scrolled ? "text-white text-base" : "text-deep text-xl"
            }`}
          >
            dilemma creative
          </span>
        </a>

        {/* Nav links */}
        <ul className={`hidden md:flex items-center transition-all duration-500 ${scrolled ? "gap-6" : "gap-9"}`}>
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`font-display text-sm font-semibold transition-colors duration-300 whitespace-nowrap ${
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

        {/* CTA */}
        <a
          href="#contact"
          className={`hidden md:inline-flex font-display text-[13px] font-bold px-6 py-2.5 rounded-full transition-all duration-500 ease-[cubic-bezier(0.22,1.4,0.36,1)] hover:translate-y-[-2px] hover:scale-[1.04] whitespace-nowrap ${
            scrolled
              ? "bg-white text-turq shadow-[0_2px_12px_rgba(0,0,0,0.1)]"
              : "bg-pink-hot text-white"
          }`}
        >
          Start Vandaag
        </a>

        {/* Mobile toggle */}
        <button
          className="flex md:hidden flex-col justify-center gap-1.5 w-8 h-8"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className={`block w-full h-0.5 rounded-sm transition-colors duration-300 ${
                scrolled ? "bg-white" : "bg-deep"
              }`}
            />
          ))}
        </button>

        {/* Mobile menu */}
        {open && (
          <div className="absolute top-full left-4 right-4 bg-white shadow-lg p-6 flex flex-col gap-4 md:hidden mt-2 rounded-3xl z-20">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="font-display text-base font-semibold text-ink"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              className="font-display text-sm font-bold px-6 py-3 rounded-full bg-pink-hot text-white text-center"
              onClick={() => setOpen(false)}
            >
              Start Vandaag
            </a>
          </div>
        )}
      </nav>
    </div>
  );
}
