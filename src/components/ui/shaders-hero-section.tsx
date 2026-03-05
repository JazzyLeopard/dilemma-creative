"use client"

import { MeshGradient } from "@paper-design/shaders-react"
import type React from "react"
import { useEffect, useRef, useState, useCallback } from "react"
import { DilemmaIcon } from "@/components/DilemmaIcon"

/* ─── Shader Background ─── */
export function ShaderBackground({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen w-full relative overflow-hidden">
      <div className="absolute inset-0 bg-deep" />
      <MeshGradient
        className="absolute inset-0 w-full h-full"
        colors={["#1A1A2E", "#00C9B7", "#FF1FA9", "#00A89A", "#8B5CF6"]}
        speed={0.3}
      />
      <MeshGradient
        className="absolute inset-0 w-full h-full opacity-50"
        colors={["#1A1A2E", "#ffffff", "#00C9B7", "#1A1A2E"]}
        speed={0.2}
      />
      {children}
    </div>
  )
}

/* ─── Initial Header (text-only logo, no icon) ─── */
const navLinks = [
  { href: "/over-ons", label: "Over Ons" },
  { href: "/#diensten", label: "Diensten" },
  { href: "/#niches", label: "Niches" },
  { href: "/werkwijze", label: "Werkwijze" },
  { href: "/faq", label: "FAQ" },
]

export function ShaderHeader() {
  return (
    <header className="relative z-20 flex items-center justify-between px-5 md:px-8 lg:px-12 py-5 md:py-6">
      <a href="/" className="font-display font-extrabold text-white tracking-tight text-lg md:text-xl whitespace-nowrap cursor-pointer">
        dilemma creative
      </a>

      <nav className="hidden md:flex items-center gap-1">
        {navLinks.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className="font-display text-sm font-semibold text-white/70 hover:text-white px-3 py-2 rounded-full hover:bg-white/10 transition-all duration-200 whitespace-nowrap cursor-pointer"
          >
            {l.label}
          </a>
        ))}
      </nav>

      <a
        href="/contact"
        className="font-display text-[13px] font-bold px-6 py-2.5 rounded-full bg-white text-deep transition-all duration-300 hover:translate-y-[-2px] hover:shadow-[0_8px_24px_rgba(255,255,255,0.15)] whitespace-nowrap cursor-pointer"
      >
        Start Vandaag
      </a>
    </header>
  )
}

/* ─── Scroll Pill Nav ─── */
export function ScrollPillNav() {
  const [visible, setVisible] = useState(false)
  const [open, setOpen] = useState(false)
  const lastScrollY = useRef(0)
  const ticking = useRef(false)

  const handleScroll = useCallback(() => {
    if (ticking.current) return
    ticking.current = true
    requestAnimationFrame(() => {
      const currentY = window.scrollY
      const isMobile = window.innerWidth < 768
      const pastHero = currentY > 300

      if (!pastHero) {
        setVisible(false)
      } else if (isMobile) {
        setVisible(currentY < lastScrollY.current)
      } else {
        setVisible(true)
      }

      lastScrollY.current = currentY
      ticking.current = false
    })
  }, [])

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [handleScroll])

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden"
    else document.body.style.overflow = ""
    return () => { document.body.style.overflow = "" }
  }, [open])

  return (
    <>
      <div
        className={`fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none px-5 md:px-8 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          visible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        }`}
      >
        <nav className="pointer-events-auto flex items-center justify-between mt-3.5 py-2.5 px-5 md:px-7 w-[min(920px,calc(100%-32px))] rounded-full bg-deep/95 shadow-[0_8px_32px_rgba(26,26,46,0.4),0_2px_8px_rgba(0,0,0,0.15)] backdrop-blur-xl border border-white/[0.06]">
          <a href="/" className="flex items-center gap-2.5 cursor-pointer">
            <div className="w-8 h-8 rounded-[8px] bg-turq/20 flex items-center justify-center shrink-0">
              <DilemmaIcon className="w-4 h-4" fill="#FF1FA9" stroke="white" />
            </div>
            <span className="font-display font-extrabold text-white text-base tracking-tight whitespace-nowrap">
              dilemma creative
            </span>
          </a>

          <ul className="hidden md:flex items-center gap-6">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="font-display text-sm font-semibold text-white/70 hover:text-white transition-colors duration-300 whitespace-nowrap cursor-pointer">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="/contact"
            className="hidden md:inline-flex font-display text-[13px] font-bold px-6 py-2.5 rounded-full bg-pink-hot text-white shadow-[0_2px_12px_rgba(255,31,169,0.3)] hover:translate-y-[-2px] hover:scale-[1.04] transition-all duration-500 ease-[cubic-bezier(0.22,1.4,0.36,1)] whitespace-nowrap cursor-pointer"
          >
            Start Vandaag
          </a>

          <button
            className="flex md:hidden flex-col justify-center gap-1.5 w-9 h-9 items-center rounded-lg cursor-pointer hover:bg-white/10 transition-colors duration-300"
            onClick={() => setOpen(!open)}
            aria-label="Menu openen"
          >
            <span className={`block h-0.5 rounded-sm bg-white transition-all duration-300 ${open ? "w-5 rotate-45 translate-y-[4px]" : "w-6"}`} />
            <span className={`block h-0.5 rounded-sm bg-white transition-all duration-300 ${open ? "w-5 -rotate-45 -translate-y-[4px]" : "w-4"}`} />
          </button>
        </nav>
      </div>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm md:hidden z-50 transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setOpen(false)}
      />

      {/* Mobile menu */}
      <div
        className={`fixed top-4 left-4 right-4 bg-white shadow-[0_24px_64px_rgba(0,0,0,0.12)] p-8 flex flex-col gap-1 md:hidden rounded-[28px] z-50 transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${
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
        {navLinks.map((l) => (
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
    </>
  )
}

/* ─── Service Cards + Hero Content (grid on desktop) ─── */
const services = [
  { title: "Social Media Beheer", desc: "Planning, posting & community management" },
  { title: "Content Creatie",     desc: "Scroll-stopping visuals, reels & stories" },
  { title: "Strategie & Advies",  desc: "Data-gedreven groeiplan voor jouw merk" },
]

export function HeroContent() {
  return (
    <main className="relative z-20 mt-auto px-5 md:px-8 lg:px-12 pb-10 md:pb-14">
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-16 items-start">
        {/* Left — copy */}
        <div>
          <div className="inline-flex items-center gap-2 md:gap-2.5 bg-white/[0.06] border border-white/[0.1] backdrop-blur-sm px-3 py-1.5 md:px-5 md:py-2.5 rounded-full font-display text-[10px] md:text-xs font-bold text-turq tracking-wide uppercase mb-5 md:mb-8">
            <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-turq animate-[blink_2s_ease-in-out_infinite]" />
            Social Media Bureau — Vlaanderen
          </div>

          <h1 className="font-display text-[clamp(40px,8vw,80px)] font-extrabold leading-[0.93] tracking-[-0.04em] mb-5 md:mb-7 text-white">
            Jouw creatieve<br />
            dilemma,<br />
            <span className="font-serif italic font-normal tracking-[-0.02em] bg-gradient-to-r from-turq to-pink-hot bg-clip-text text-transparent">
              Opgelost.
            </span>
          </h1>

          <p className="font-serif italic text-[clamp(18px,2.5vw,26px)] text-white/60 leading-relaxed mb-8 md:mb-10 max-w-[560px]">
            Social media beheer & content creatie{" "}
            <br className="hidden sm:block" />
            voor <em className="not-italic text-pink-hot font-display font-bold">food</em> &{" "}
            <em className="not-italic text-pink-hot font-display font-bold">beauty</em> ondernemers.
          </p>

          <div className="flex gap-4 flex-wrap">
            <a
              href="/contact"
              className="group font-display text-[15px] font-bold px-9 py-4 rounded-full bg-pink-hot text-white shadow-[0_6px_28px_rgba(255,31,169,0.25)] hover:shadow-[0_14px_36px_rgba(255,31,169,0.35)] hover:translate-y-[-3px] active:scale-[0.97] transition-all duration-400 ease-[cubic-bezier(0.22,1.4,0.36,1)] cursor-pointer flex items-center gap-2.5"
            >
              Gratis Kennismaking
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14m-7-7 7 7-7 7" /></svg>
            </a>
            <a
              href="/#diensten"
              className="font-display text-[15px] font-bold px-9 py-4 rounded-full bg-transparent text-white border-[2.5px] border-white/20 hover:border-white/50 hover:bg-white/10 hover:translate-y-[-3px] active:scale-[0.97] transition-all duration-400 ease-[cubic-bezier(0.22,1.4,0.36,1)] cursor-pointer"
            >
              Bekijk Diensten
            </a>
          </div>
        </div>

        {/* Right on desktop, top on mobile */}
        <div className="flex flex-col gap-3.5 lg:gap-4 lg:items-end order-first lg:order-last">
          {services.map((s) => (
            <div
              key={s.title}
              className="flex items-center gap-4 lg:gap-5 bg-white/[0.06] border border-white/[0.08] backdrop-blur-md rounded-2xl px-6 lg:px-7 py-4 lg:py-5 w-full lg:w-[440px] cursor-default"
            >
              <DilemmaIcon className="w-7 h-7 lg:w-8 lg:h-8 shrink-0" fill="#FF1FA9" stroke="white" />
              <div className="flex flex-col">
                <span className="font-display font-bold text-[15px] lg:text-[17px] text-white">{s.title}</span>
                <span className="text-white/40 text-xs lg:text-[13px] font-light">{s.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
