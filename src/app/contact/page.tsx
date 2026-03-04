"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <Navbar />
      <main className="pt-32 pb-28 px-5 md:px-12">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Left — Info */}
            <div>
              <div className="font-display text-[11px] font-extrabold tracking-[0.18em] uppercase text-muted mb-4 flex items-center gap-3">
                Contact
                <span className="flex-1 max-w-[50px] h-0.5 bg-muted/30" />
              </div>
              <h1 className="font-display text-[clamp(36px,5vw,56px)] font-extrabold leading-none tracking-[-0.03em] mb-6">
                Laten we{" "}
                <span className="font-serif italic font-normal text-turq">praten.</span>
              </h1>
              <p className="text-lg text-ink leading-relaxed mb-10">
                Klaar om je social media naar het volgende niveau te tillen? Boek een gratis
                kennismakingsgesprek of stuur ons een bericht.
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="font-display text-sm font-extrabold uppercase tracking-wide text-deep mb-1">
                    Email
                  </h3>
                  <a
                    href="mailto:hello@dilemmacreative.be"
                    className="text-turq font-medium hover:underline"
                  >
                    hello@dilemmacreative.be
                  </a>
                </div>
                <div>
                  <h3 className="font-display text-sm font-extrabold uppercase tracking-wide text-deep mb-1">
                    Locatie
                  </h3>
                  <p className="text-ink">Vlaanderen, België (remote)</p>
                </div>
                <div>
                  <h3 className="font-display text-sm font-extrabold uppercase tracking-wide text-deep mb-1">
                    Reactietijd
                  </h3>
                  <p className="text-ink">Binnen 24 uur op werkdagen</p>
                </div>
              </div>
            </div>

            {/* Right — Form */}
            <div className="bg-turq-bg border border-turq/10 rounded-3xl p-8 md:p-10">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="text-5xl mb-4">✓</div>
                  <h3 className="font-display text-2xl font-extrabold mb-2">Bericht verstuurd!</h3>
                  <p className="text-muted">We nemen zo snel mogelijk contact met je op.</p>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSubmitted(true);
                  }}
                  className="space-y-5"
                >
                  <div>
                    <label className="block font-display text-sm font-bold mb-1.5">Naam</label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white border border-black/[0.08] text-deep text-[15px] outline-none focus:border-turq focus:ring-2 focus:ring-turq/20 transition-all"
                      placeholder="Je naam"
                    />
                  </div>
                  <div>
                    <label className="block font-display text-sm font-bold mb-1.5">Email</label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white border border-black/[0.08] text-deep text-[15px] outline-none focus:border-turq focus:ring-2 focus:ring-turq/20 transition-all"
                      placeholder="je@email.be"
                    />
                  </div>
                  <div>
                    <label className="block font-display text-sm font-bold mb-1.5">
                      Type business
                    </label>
                    <select
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white border border-black/[0.08] text-deep text-[15px] outline-none focus:border-turq focus:ring-2 focus:ring-turq/20 transition-all"
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Kies je sector
                      </option>
                      <option value="restaurant">Restaurant / Café</option>
                      <option value="bakkerij">Bakkerij / Patisserie</option>
                      <option value="food-brand">Food Brand</option>
                      <option value="beauty-salon">Beauty Salon</option>
                      <option value="skincare">Skincare / Cosmetics</option>
                      <option value="wellness">Wellness / Spa</option>
                      <option value="anders">Anders</option>
                    </select>
                  </div>
                  <div>
                    <label className="block font-display text-sm font-bold mb-1.5">Bericht</label>
                    <textarea
                      rows={4}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white border border-black/[0.08] text-deep text-[15px] outline-none focus:border-turq focus:ring-2 focus:ring-turq/20 transition-all resize-none"
                      placeholder="Vertel ons over je zaak en wat je nodig hebt..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-pink-hot text-white font-display text-base font-extrabold py-4 rounded-full hover:translate-y-[-2px] hover:scale-[1.02] transition-all duration-400 ease-[cubic-bezier(0.22,1.4,0.36,1)]"
                  >
                    Verstuur Bericht →
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
