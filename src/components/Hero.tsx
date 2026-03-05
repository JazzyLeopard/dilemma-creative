"use client"

import { ShaderBackground, ShaderHeader, ScrollPillNav, HeroContent } from "@/components/ui/shaders-hero-section"

export function Hero() {
  return (
    <>
      <ShaderBackground>
        <div className="flex flex-col min-h-screen">
          <ShaderHeader />
          <HeroContent />
        </div>
      </ShaderBackground>
      <ScrollPillNav />
    </>
  )
}
