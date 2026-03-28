import { useState } from "react";

export function Calculator() {
  const [income, setIncome] = useState(80000);

  // Calculation Simulation Formulas
  const tSav = Math.round(income * 0.015);
  const iSav = income > 40000 ? 530 + Math.round((income - 80000) * 0.002) : 530;
  const total = tSav + iSav;

  return (
    <section id="calculator" className="py-24 relative z-10 overflow-hidden bg-white dark:bg-[#020302]">
      <div className="max-w-4xl mx-auto px-6 reveal">
        <div className="text-center mb-12">
          <div className="text-[0.75rem] uppercase tracking-[0.25em] font-bold text-brand-green dark:text-brand-green-light mb-4">Live Rechner</div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white">Berechne dein <br/>Sparpotenzial.</h2>
        </div>
        
        <div className="glass-card bg-gray-50/80 dark:bg-[#0a0f0d]/80 rounded-[32px] p-8 md:p-12 border border-gray-200 dark:border-white/10 shadow-2xl backdrop-blur-xl">
          <div className="mb-10 text-center">
            <label className="block text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-6">Dein Bruttojahreseinkommen</label>
            <div className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white mb-8" id="incomeDisplay">
              {income.toLocaleString('de-CH')} CHF
            </div>
            <input 
              type="range" 
              id="incomeSlider" 
              min="40000" 
              max="250000" 
              step="5000" 
              value={income}
              onChange={(e) => setIncome(parseInt(e.target.value))}
              className="w-full h-3 bg-gray-200 dark:bg-gray-800 rounded-lg cursor-pointer accent-brand-green"
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-gray-200 dark:border-white/10">
            <div className="text-center mb-6 md:mb-0">
              <div className="text-xs font-bold text-gray-500 uppercase mb-2">Steuerersparnis</div>
              <div className="text-2xl font-extrabold text-brand-green dark:text-brand-green-light" id="taxSavings">
                {tSav.toLocaleString('de-CH')} CHF
              </div>
            </div>
            <div className="text-center mb-6 md:mb-0">
              <div className="text-xs font-bold text-gray-500 uppercase mb-2">Versicherungs-Optimierung</div>
              <div className="text-2xl font-extrabold text-brand-green dark:text-brand-green-light" id="insSavings">
                {iSav.toLocaleString('de-CH')} CHF
              </div>
            </div>
            <div className="text-center md:border-l border-gray-200 dark:border-white/10 md:pl-6">
              <div className="text-xs font-bold text-gray-500 uppercase mb-2">Total ROI pro Jahr</div>
              <div className="text-3xl font-black text-gray-900 dark:text-white" id="totalSavings">
                {total.toLocaleString('de-CH')} CHF
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
