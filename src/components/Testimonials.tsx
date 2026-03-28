export function Testimonials() {
  return (
    <>
      {/* Infinite Social Marquee */}
      <section id="testimonials" className="py-24 border-t border-gray-200 dark:border-white/5 relative z-10 text-center overflow-hidden bg-white dark:bg-[#020302]">
        <div className="text-[0.75rem] uppercase tracking-[0.25em] font-bold text-brand-green dark:text-brand-green-light mb-12 reveal">Beliebt bei 10.000+ Schweizern</div>
        
        <div className="relative w-full flex overflow-x-hidden">
          {/* Repeated groups of cards to ensure perfect infinite seamless loop via CSS */}
          <div className="animate-marquee whitespace-nowrap flex items-center gap-6 py-4 hover:pause">
            {/* Block A */}
            <div className="inline-block w-80 whitespace-normal text-left glass-card bg-gray-50/80 dark:bg-[#0a0f0d]/90 p-6 rounded-2xl border border-gray-200 dark:border-white/10">
              <div className="flex text-yellow-500 text-sm mb-3">★★★★★</div>
              <p className="text-gray-700 dark:text-gray-300 font-medium mb-4 text-sm">"Endlich kein Papierkram mehr. Der Support ist extrem schnell und professionell."</p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-brand-green/20 flex items-center text-xs font-bold text-brand-green justify-center">MT</div>
                <div className="text-xs font-bold text-gray-900 dark:text-white">Michael T.</div>
              </div>
            </div>
            <div className="inline-block w-80 whitespace-normal text-left glass-card bg-gray-50/80 dark:bg-[#0a0f0d]/90 p-6 rounded-2xl border border-gray-200 dark:border-white/10">
              <div className="flex text-yellow-500 text-sm mb-3">★★★★★</div>
              <p className="text-gray-700 dark:text-gray-300 font-medium mb-4 text-sm">"Ich habe 1.200 CHF mehr zurückbekommen als die Jahre zuvor beim Treuhänder."</p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center text-xs font-bold text-blue-500 justify-center">SL</div>
                <div className="text-xs font-bold text-gray-900 dark:text-white">Sarah L.</div>
              </div>
            </div>
            <div className="inline-block w-80 whitespace-normal text-left glass-card bg-gray-50/80 dark:bg-[#0a0f0d]/90 p-6 rounded-2xl border border-gray-200 dark:border-white/10">
              <div className="flex text-yellow-500 text-sm mb-3">★★★★★</div>
              <p className="text-gray-700 dark:text-gray-300 font-medium mb-4 text-sm">"Die App ist unfassbar clean. Lade meine Belege einfach übers Jahr verteilt hoch."</p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center text-xs font-bold text-purple-500 justify-center">DK</div>
                <div className="text-xs font-bold text-gray-900 dark:text-white">Dennis K.</div>
              </div>
            </div>
            <div className="inline-block w-80 whitespace-normal text-left glass-card bg-gray-50/80 dark:bg-[#0a0f0d]/90 p-6 rounded-2xl border border-gray-200 dark:border-white/10">
              <div className="flex text-yellow-500 text-sm mb-3">★★★★★</div>
              <p className="text-gray-700 dark:text-gray-300 font-medium mb-4 text-sm">"Hervorragende Beratung. Überhaupt nicht aufdringlich, sehr transparent."</p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-orange-500/20 flex items-center text-xs font-bold text-orange-500 justify-center">AR</div>
                <div className="text-xs font-bold text-gray-900 dark:text-white">Anna R.</div>
              </div>
            </div>

            {/* Block B (Clone of A to enable continuous loop) */}
            <div className="inline-block w-80 whitespace-normal text-left glass-card bg-gray-50/80 dark:bg-[#0a0f0d]/90 p-6 rounded-2xl border border-gray-200 dark:border-white/10">
              <div className="flex text-yellow-500 text-sm mb-3">★★★★★</div>
              <p className="text-gray-700 dark:text-gray-300 font-medium mb-4 text-sm">"Endlich kein Papierkram mehr. Der Support ist extrem schnell und professionell."</p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-brand-green/20 flex items-center text-xs font-bold text-brand-green justify-center">MT</div>
                <div className="text-xs font-bold text-gray-900 dark:text-white">Michael T.</div>
              </div>
            </div>
            <div className="inline-block w-80 whitespace-normal text-left glass-card bg-gray-50/80 dark:bg-[#0a0f0d]/90 p-6 rounded-2xl border border-gray-200 dark:border-white/10">
              <div className="flex text-yellow-500 text-sm mb-3">★★★★★</div>
              <p className="text-gray-700 dark:text-gray-300 font-medium mb-4 text-sm">"Ich habe 1.200 CHF mehr zurückbekommen als die Jahre zuvor beim Treuhänder."</p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center text-xs font-bold text-blue-500 justify-center">SL</div>
                <div className="text-xs font-bold text-gray-900 dark:text-white">Sarah L.</div>
              </div>
            </div>
            <div className="inline-block w-80 whitespace-normal text-left glass-card bg-gray-50/80 dark:bg-[#0a0f0d]/90 p-6 rounded-2xl border border-gray-200 dark:border-white/10">
              <div className="flex text-yellow-500 text-sm mb-3">★★★★★</div>
              <p className="text-gray-700 dark:text-gray-300 font-medium mb-4 text-sm">"Die App ist unfassbar clean. Lade meine Belege einfach übers Jahr verteilt hoch."</p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center text-xs font-bold text-purple-500 justify-center">DK</div>
                <div className="text-xs font-bold text-gray-900 dark:text-white">Dennis K.</div>
              </div>
            </div>
            <div className="inline-block w-80 whitespace-normal text-left glass-card bg-gray-50/80 dark:bg-[#0a0f0d]/90 p-6 rounded-2xl border border-gray-200 dark:border-white/10">
              <div className="flex text-yellow-500 text-sm mb-3">★★★★★</div>
              <p className="text-gray-700 dark:text-gray-300 font-medium mb-4 text-sm">"Hervorragende Beratung. Überhaupt nicht aufdringlich, sehr transparent."</p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-orange-500/20 flex items-center text-xs font-bold text-orange-500 justify-center">AR</div>
                <div className="text-xs font-bold text-gray-900 dark:text-white">Anna R.</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Fading Edges overlay */}
        <div className="absolute top-0 right-0 w-16 md:w-32 h-full bg-gradient-to-l from-white dark:from-[#020302] to-transparent pointer-events-none z-10"></div>
        <div className="absolute top-0 left-0 w-16 md:w-32 h-full bg-gradient-to-r from-white dark:from-[#020302] to-transparent pointer-events-none z-10"></div>
      </section>

      {/* Final Huge CTA */}
      <section className="py-32 relative z-10 px-6">
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-brand-green/10 to-transparent dark:from-brand-green-light/10 border border-brand-green/20 dark:border-white/10 rounded-[40px] p-12 md:p-20 text-center relative overflow-hidden reveal">
          {/* decorative circles */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-green rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[80px] opacity-20 transform translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[80px] opacity-20 transform -translate-x-1/2 translate-y-1/2"></div>
          
          <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-6 relative z-10 tracking-tight">Bereit für die Zukunft?</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto font-medium relative z-10">Schließe dich hunderten zufriedenen Kunden an, die ihre Finanzen bereits automatisiert und optimiert haben.</p>
          <a href="#contact" className="btn-primary relative z-10 bg-brand-green text-white dark:bg-white dark:text-brand-dark px-10 py-5 rounded-full font-bold text-lg shadow-2xl hover:scale-105 inline-block">
            Konto erstellen — 100% Kostenlos
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-[#020302] pt-20 pb-12 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            {/* Brand Col */}
            <div className="md:col-span-1">
              <img src="/avenzo_icon.svg" alt="Avenzo Logo" className="logo-main h-8 object-contain mb-6" />
              <p className="text-sm text-gray-500 dark:text-gray-400 font-medium leading-relaxed">
                Die smarte Finanzlösung für die Schweiz. Steuer, Versicherung und Treuhand — vereint auf einer Plattform.
              </p>
            </div>
            {/* Links 1 */}
            <div>
              <h4 className="font-bold text-gray-900 dark:text-white mb-6 tracking-wide">Plattform</h4>
              <ul className="space-y-4 text-sm font-medium text-gray-500 dark:text-gray-400">
                <li><a href="#" className="hover:text-brand-green dark:hover:text-white transition">App Download</a></li>
                <li><a href="#" className="hover:text-brand-green dark:hover:text-white transition">Preise</a></li>
                <li><a href="#" className="hover:text-brand-green dark:hover:text-white transition">Sicherheit</a></li>
                <li><a href="#" className="hover:text-brand-green dark:hover:text-white transition">Updates</a></li>
              </ul>
            </div>
            {/* Links 2 */}
            <div>
              <h4 className="font-bold text-gray-900 dark:text-white mb-6 tracking-wide">Unternehmen</h4>
              <ul className="space-y-4 text-sm font-medium text-gray-500 dark:text-gray-400">
                <li><a href="#" className="hover:text-brand-green dark:hover:text-white transition">Über Avenzo</a></li>
                <li><a href="#" className="hover:text-brand-green dark:hover:text-white transition">Karriere</a></li>
                <li><a href="#" className="hover:text-brand-green dark:hover:text-white transition">Kontakt</a></li>
                <li><a href="#" className="hover:text-brand-green dark:hover:text-white transition">Presse</a></li>
              </ul>
            </div>
            {/* Newsletter */}
            <div>
              <h4 className="font-bold text-gray-900 dark:text-white mb-6 tracking-wide">Bleib informiert</h4>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 font-medium">Finanz-Tipps direkt in deinen Posteingang.</p>
              <form className="flex" onSubmit={(e) => { e.preventDefault(); alert('Angemeldet!'); }}>
                <input type="email" placeholder="E-Mail Adresse" className="w-full bg-white dark:bg-white/5 border border-gray-300 dark:border-white/10 rounded-l-lg px-4 py-2 text-sm text-gray-900 dark:text-white outline-none focus:border-brand-green transition" required />
                <button type="submit" className="bg-brand-green text-white px-4 py-2 rounded-r-lg font-bold text-sm hover:bg-[#1a4b40] transition">➔</button>
              </form>
            </div>
          </div>
          
          <div className="border-t border-gray-200 dark:border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between">
            <div className="text-sm text-gray-500 dark:text-gray-500 font-medium mb-4 md:mb-0">
              &copy; 2026 Avenzo GmbH. Alle Rechte vorbehalten.
            </div>
            <div className="flex space-x-6 text-sm font-medium text-gray-500 dark:text-gray-500">
              <a href="#" className="hover:text-gray-900 dark:hover:text-white transition">Datenschutz</a>
              <a href="#" className="hover:text-gray-900 dark:hover:text-white transition">AGB</a>
              <a href="#" className="hover:text-gray-900 dark:hover:text-white transition">Impressum</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
