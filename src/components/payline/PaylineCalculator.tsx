import { useState } from "react";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import { useAnimatedNumber } from "../../hooks/useAnimatedNumber";

export function PaylineCalculator() {
  const section = useScrollReveal({ threshold: 0.1 });
  const [income, setIncome] = useState(80000);

  // Calculation Simulation Formulas
  const tSav = Math.round(income * 0.015);
  const iSav =
    income > 40000 ? 530 + Math.round((income - 80000) * 0.002) : 530;
  const total = tSav + iSav;

  // Animated values
  const animIncome = useAnimatedNumber(income, 300);
  const animTSav = useAnimatedNumber(tSav, 400);
  const animISav = useAnimatedNumber(iSav, 400);
  const animTotal = useAnimatedNumber(total, 500);

  return (
    <section id="calculator" className="py-24 px-4 max-w-7xl mx-auto my-10">
      <div ref={section.ref} className={`bg-dark rounded-[var(--radius-card-lg)] p-10 md:p-20 relative overflow-hidden text-white flex flex-col md:flex-row items-center gap-16 shadow-2xl sr-scale ${section.isVisible ? "sr-visible" : ""}`}>
        {/* Abstract Background Element */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-accent/30 via-transparent to-transparent rounded-full blur-3xl pointer-events-none transform translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-app-insurance/10 via-transparent to-transparent rounded-full blur-3xl pointer-events-none transform -translate-x-1/3 translate-y-1/3"></div>

        {/* Text Content */}
        <div className="w-full md:w-1/2 relative z-10">
          <div className="inline-block bg-accent/10 text-accent px-4 py-2 rounded-full text-[10px] font-extrabold uppercase tracking-[0.2em] mb-8 border border-accent/20">
            Live Rechner
          </div>
          <h2 className="text-4xl md:text-6xl font-medium tracking-tight mb-6 leading-[1.1]">
            Dein Potenzial,
            <br />
            <span className="text-accent">in Zahlen.</span>
          </h2>
          <p className="text-gray-400 font-medium mb-10 text-lg leading-relaxed max-w-md">
            Finde in Sekunden heraus, wie viel Geld du durch unsere KI-gestützte
            Steuer- und Versicherungsoptimierung sparen kannst.
          </p>
          <ul className="space-y-5">
            <li className="flex items-center gap-4 text-gray-300 font-medium">
              <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-sm font-bold border border-white/10">
                1
              </div>
              Kostenlos & unverbindlich
            </li>
            <li className="flex items-center gap-4 text-gray-300 font-medium">
              <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-sm font-bold border border-white/10">
                2
              </div>
              Basierend auf echten Daten
            </li>
            <li className="flex items-center gap-4 text-gray-300 font-medium">
              <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-sm font-bold border border-white/10">
                3
              </div>
              Sofortiges Resultat
            </li>
          </ul>
        </div>

        {/* Calculator Widget */}
        <div className="w-full md:w-1/2 relative z-10">
          <div className="bg-white text-gray-900 rounded-[2rem] p-8 md:p-12 shadow-widget relative border border-white/20">
            {/* Floating badge */}
            <div className="absolute -top-5 -left-5 bg-accent text-accent-text text-xs font-bold px-5 py-2.5 rounded-2xl shadow-xl transform -rotate-6 hover:rotate-0 transition-transform duration-300">
              ROI Simulator
            </div>

            <label className="block text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-4">
              Dein Bruttojahreseinkommen
            </label>

            <div className="text-5xl md:text-6xl font-medium tracking-tight mb-10 tabular-nums">
              {animIncome.toLocaleString("de-CH")}{" "}
              <span className="text-2xl text-gray-400 font-medium ml-1">CHF</span>
            </div>

            <div className="relative mb-12">
              <div
                className="absolute left-0 top-1/2 -translate-y-1/2 h-2 bg-accent rounded-l-lg pointer-events-none"
                style={{
                  width: `${((income - 40000) / (250000 - 40000)) * 100}%`,
                }}
              ></div>
              <input
                type="range"
                min="40000"
                max="250000"
                step="5000"
                value={income}
                onChange={(e) => setIncome(parseInt(e.target.value))}
                className="w-full h-2 bg-gray-100 rounded-lg appearance-none cursor-pointer relative z-10 bg-transparent
                  [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-8 [&::-webkit-slider-thumb]:h-8
                  [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:cursor-pointer
                  [&::-webkit-slider-thumb]:border-[6px] [&::-webkit-slider-thumb]:border-dark [&::-webkit-slider-thumb]:shadow-lg
                  [&::-webkit-slider-runnable-track]:bg-gray-100 [&::-webkit-slider-runnable-track]:h-2 [&::-webkit-slider-runnable-track]:rounded-lg"
              />
            </div>

            <div className="bg-gray-50/80 rounded-2xl p-6 border border-gray-100 mb-8 space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm font-semibold text-gray-500">
                  Steuerersparnis
                </span>
                <span className="font-bold text-gray-900 text-lg tabular-nums">
                  {animTSav.toLocaleString("de-CH")} CHF
                </span>
              </div>
              <div className="w-full h-px bg-gray-200 border-dashed"></div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-semibold text-gray-500">
                  Versicherungs-Opt.
                </span>
                <span className="font-bold text-gray-900 text-lg tabular-nums">
                  {animISav.toLocaleString("de-CH")} CHF
                </span>
              </div>
            </div>

            <div className="flex justify-between items-center pt-8 border-t border-gray-100">
              <span className="font-bold text-gray-900 text-lg">Total pro Jahr</span>
              <span className="text-3xl font-bold tracking-tight text-white bg-dark px-5 py-3 rounded-2xl shadow-lg border border-gray-800">
                <span className="text-accent tabular-nums">{animTotal.toLocaleString("de-CH")}</span> CHF
              </span>
            </div>

            {/* Estimate disclaimer */}
            <p className="text-[11px] text-gray-400 text-center mt-6 font-medium">
              * Geschätzte Werte basierend auf Durchschnittsdaten. Die tatsächliche Ersparnis kann je nach individueller Situation variieren.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
