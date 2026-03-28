import { useScrollReveal } from "../../hooks/useScrollReveal";

export function PaylineCtaFooter() {
  const cta = useScrollReveal({ threshold: 0.2 });

  return (
    <footer className="mt-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* CTA Card */}
        <div ref={cta.ref} className={`bg-white rounded-[var(--radius-card-lg)] px-8 py-20 md:px-12 md:py-28 relative overflow-hidden flex flex-col items-center text-center group shadow-[0_0_0_1px_rgba(0,0,0,0.03),0_8px_40px_-8px_rgba(0,0,0,0.06),0_40px_80px_-20px_rgba(0,0,0,0.04)] sr-scale ${cta.isVisible ? "sr-visible" : ""}`}>
          {/* Accent glow — top */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/3 w-[600px] h-[400px] bg-accent/[0.06] rounded-full blur-[100px] pointer-events-none" />
          {/* Secondary glow — bottom right for depth */}
          <div className="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4 w-[300px] h-[300px] bg-accent/[0.04] rounded-full blur-[80px] pointer-events-none" />

          <h2 className="text-4xl md:text-[4.5rem] font-medium tracking-tight text-gray-900 mb-5 relative z-10 leading-[1.05]">
            Bereit loszulegen?
          </h2>
          <p className="text-gray-400 font-medium mb-10 relative z-10 max-w-md leading-relaxed">
            Erstelle dein Konto in 30 Sekunden und starte sofort mit der Steueroptimierung.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-3 relative z-10">
            <a href="#" className="group/btn bg-dark text-white px-8 py-3.5 rounded-full font-bold hover:bg-gray-800 transition-all shadow-lg text-sm flex items-center gap-2">
              Kostenlos starten
              <svg className="w-4 h-4 transition-transform duration-200 group-hover/btn:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-900 px-6 py-3.5 font-semibold transition-colors text-sm">
              Mehr erfahren &rarr;
            </a>
          </div>

          {/* Social proof */}
          <div className="flex items-center gap-3 mt-12 relative z-10">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-500 to-indigo-600 border-2 border-white text-white text-[10px] font-bold flex items-center justify-center">MS</div>
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-accent to-accent-dark border-2 border-white text-accent-text text-[10px] font-bold flex items-center justify-center">SM</div>
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-emerald-500 to-teal-600 border-2 border-white text-white text-[10px] font-bold flex items-center justify-center">DK</div>
            </div>
            <p className="text-xs text-gray-400 font-medium">
              <span className="text-gray-900 font-bold">10'000+</span> zufriedene Nutzer
            </p>
          </div>
        </div>

        {/* Footer Links Area */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 py-20 px-4 md:px-8 border-b border-gray-100">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img
                src="/avenzo_icon.svg"
                className="w-10 h-10 object-contain"
                alt="Avenzo"
              />
              <span className="text-2xl font-bold tracking-widest uppercase text-gray-900">
                AVENZO
              </span>
            </div>
            <p className="text-gray-500 font-medium leading-relaxed max-w-sm mb-8">
              Drei spezialisierte Apps für Steuern, Versicherungen und Treuhand — jede entwickelt, um dir Zeit und Geld zu sparen.
            </p>

            <h4 className="font-bold text-gray-900 mb-4 uppercase tracking-wider text-sm">
              Kontakt
            </h4>
            <p className="text-xl md:text-2xl font-medium text-gray-900 hover:text-accent transition-colors cursor-pointer inline-block mb-6">
              hallo@avenzo.ch
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 mt-2">
              <a href="#" className="w-10 h-10 rounded-full bg-surface-alt border border-gray-100 flex items-center justify-center text-gray-400 hover:text-gray-900 hover:border-gray-300 transition-all" aria-label="LinkedIn">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-surface-alt border border-gray-100 flex items-center justify-center text-gray-400 hover:text-gray-900 hover:border-gray-300 transition-all" aria-label="Instagram">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-surface-alt border border-gray-100 flex items-center justify-center text-gray-400 hover:text-gray-900 hover:border-gray-300 transition-all" aria-label="X / Twitter">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-6 uppercase tracking-wider text-sm">
              Produkt
            </h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-500 hover:text-gray-900 transition-colors font-medium">Steuern</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-900 transition-colors font-medium">Versicherungen</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-900 transition-colors font-medium">Treuhand</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-900 transition-colors font-medium">Preise</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-6 uppercase tracking-wider text-sm">
              Rechtliches
            </h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-500 hover:text-gray-900 transition-colors font-medium">Datenschutz</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-900 transition-colors font-medium">AGB</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-900 transition-colors font-medium">Impressum</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-900 transition-colors font-medium">Cookie-Richtlinie</a></li>
            </ul>

            <h4 className="font-bold text-gray-900 mt-10 mb-6 uppercase tracking-wider text-sm">
              Support
            </h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-500 hover:text-gray-900 transition-colors font-medium">Hilfe-Center</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-900 transition-colors font-medium">Sicherheit</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-900 transition-colors font-medium">Kontakt</a></li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between py-8 text-sm text-gray-400 font-medium">
          <div className="flex gap-6 mb-4 md:mb-0">
            <a href="#" className="hover:text-gray-900 transition-colors">Datenschutz</a>
            <a href="#" className="hover:text-gray-900 transition-colors">AGB</a>
            <a href="#" className="hover:text-gray-900 transition-colors">Impressum</a>
          </div>
          <p>&copy; 2026 Avenzo AG. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
}
