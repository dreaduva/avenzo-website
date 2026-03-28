export function Services() {
  return (
    <section id="services" className="py-24 md:py-32 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 md:mb-24 reveal">
          <div className="text-[0.75rem] uppercase tracking-[0.25em] font-bold text-brand-green dark:text-brand-green-light mb-4">Avenzo Premium</div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white">Ganzheitliche Kontrolle <br/>über deine <span className="text-brand-green dark:text-brand-green-light">Zukunft.</span></h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Service 1 */}
          <div className="glass-card rounded-[24px] p-8 md:p-10 border dark:border-white/10 border-gray-200 reveal bg-gray-50 dark:bg-[#0a0f0d]" style={{ transitionDelay: '0.1s' }}>
            <div className="w-16 h-16 rounded-2xl bg-brand-green/10 text-brand-green dark:bg-brand-green/20 dark:text-brand-green-light flex items-center justify-center mb-6 icon-bounce border border-brand-green/20">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Steuererklärung</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed font-medium">Stressfrei und maximal optimiert. Wir kennen jeden legalen Trick, um das Maximum für dich herauszuholen. Komplett digital ohne Papierkrieg.</p>
            <ul className="space-y-4">
              <li className="flex items-center text-sm font-semibold text-gray-700 dark:text-gray-300"><span className="text-brand-green dark:text-brand-green-light mr-3 text-lg">✓</span> 100% digitaler Upload</li>
              <li className="flex items-center text-sm font-semibold text-gray-700 dark:text-gray-300"><span className="text-brand-green dark:text-brand-green-light mr-3 text-lg">✓</span> Fristverlängerung kostenlos</li>
              <li className="flex items-center text-sm font-semibold text-gray-700 dark:text-gray-300"><span className="text-brand-green dark:text-brand-green-light mr-3 text-lg">✓</span> Höchste Rückzahlung</li>
            </ul>
          </div>

          {/* Service 2 */}
          <div className="glass-card rounded-[24px] p-8 md:p-10 border dark:border-white/10 border-gray-200 reveal bg-gray-50 dark:bg-[#0a0f0d]" style={{ transitionDelay: '0.2s' }}>
            <div className="w-16 h-16 rounded-2xl bg-brand-green/10 text-brand-green dark:bg-brand-green/20 dark:text-brand-green-light flex items-center justify-center mb-6 icon-bounce border border-brand-green/20">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Versicherungen</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed font-medium">Krankenkasse, Auto, Haushalt. Wir durchleuchten dein Portfolio, reduzieren Prämien und optimieren den steuerlichen Abzug. Automatisch.</p>
            <ul className="space-y-4">
              <li className="flex items-center text-sm font-semibold text-gray-700 dark:text-gray-300"><span className="text-brand-green dark:text-brand-green-light mr-3 text-lg">✓</span> Unabhängige Expertenprüfung</li>
              <li className="flex items-center text-sm font-semibold text-gray-700 dark:text-gray-300"><span className="text-brand-green dark:text-brand-green-light mr-3 text-lg">✓</span> Steuerliche Optimierung</li>
              <li className="flex items-center text-sm font-semibold text-gray-700 dark:text-gray-300"><span className="text-brand-green dark:text-brand-green-light mr-3 text-lg">✓</span> Automatische Wechselservices</li>
            </ul>
          </div>

          {/* Service 3 */}
          <div className="glass-card rounded-[24px] p-8 md:p-10 border dark:border-white/10 border-gray-200 reveal bg-gray-50 dark:bg-[#0a0f0d]" style={{ transitionDelay: '0.3s' }}>
            <div className="w-16 h-16 rounded-2xl bg-brand-green/10 text-brand-green dark:bg-brand-green/20 dark:text-brand-green-light flex items-center justify-center mb-6 icon-bounce border border-brand-green/20">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Treuhand</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed font-medium">Exklusiv für Selbstständige und KMU. Buchhaltung, Lohnwesen und Abschlussgestaltung aus einer Hand – via App übersichtlich gesteuert.</p>
            <ul className="space-y-4">
              <li className="flex items-center text-sm font-semibold text-gray-700 dark:text-gray-300"><span className="text-brand-green dark:text-brand-green-light mr-3 text-lg">✓</span> Moderne digitale Buchhaltung</li>
              <li className="flex items-center text-sm font-semibold text-gray-700 dark:text-gray-300"><span className="text-brand-green dark:text-brand-green-light mr-3 text-lg">✓</span> MWST- & Lohnadministration</li>
              <li className="flex items-center text-sm font-semibold text-gray-700 dark:text-gray-300"><span className="text-brand-green dark:text-brand-green-light mr-3 text-lg">✓</span> Strukturierte Gründungsberatung</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
