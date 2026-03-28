import { useScrollReveal } from "../../hooks/useScrollReveal";

export function PaylineServices() {
  const header = useScrollReveal();
  const cards = useScrollReveal({ rootMargin: "0px 0px -40px 0px" });

  return (
    <section id="services" className="py-24 px-4 max-w-7xl mx-auto">
      {/* Title Section */}
      <div ref={header.ref} className={`text-center mb-20 ${header.isVisible ? "sr-visible" : "sr-hidden"}`}>
        <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-gray-900 mb-6">
          Ganzheitliche Kontrolle <br/>über deine Zukunft
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto font-medium text-lg leading-relaxed">
          Ein Konto für alle deine Finanzen. Wir verbinden Steuern, Versicherungen und Treuhand in einer modernen Experience ohne versteckte Gebühren.
        </p>
      </div>

      {/* Grid Layout */}
      <div ref={cards.ref} className={`grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto sr-stagger ${cards.isVisible ? "sr-visible" : ""}`}>

        {/* Service 1: Steuern */}
        <div className="bg-surface rounded-[var(--radius-card)] p-10 hover:bg-white border border-transparent hover:border-gray-100 hover:shadow-card-lift transition-all duration-500 transform hover:-translate-y-2 relative overflow-hidden group flex flex-col">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform duration-300 relative z-10">
             <svg className="w-7 h-7 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
          </div>

          <h3 className="text-2xl font-bold mb-4 text-gray-900 relative z-10">Steuererklärung</h3>
          <p className="text-gray-500 mb-8 font-medium leading-relaxed relative z-10 flex-1">Stressfrei und maximal optimiert. Komplett digital ohne Papierkrieg.</p>

          <ul className="space-y-4 mb-10 relative z-10">
            <li className="flex items-center text-sm font-semibold text-gray-700">
              <span className="w-6 h-6 rounded-full bg-white flex items-center justify-center mr-4 shadow-sm text-xs text-gray-900 font-bold border border-gray-100">✓</span>
              100% digitaler Upload
            </li>
            <li className="flex items-center text-sm font-semibold text-gray-700">
              <span className="w-6 h-6 rounded-full bg-white flex items-center justify-center mr-4 shadow-sm text-xs text-gray-900 font-bold border border-gray-100">✓</span>
              Fristverlängerung inklusive
            </li>
            <li className="flex items-center text-sm font-semibold text-gray-700">
              <span className="w-6 h-6 rounded-full bg-white flex items-center justify-center mr-4 shadow-sm text-xs text-gray-900 font-bold border border-gray-100">✓</span>
              Höchste Rückzahlung
            </li>
          </ul>

          <button className="w-full py-4 bg-white border border-gray-200 group-hover:bg-dark group-hover:border-dark group-hover:text-white text-gray-900 font-bold rounded-2xl transition-all duration-300 text-sm relative z-10 shadow-sm">
            Details ansehen
          </button>
        </div>

        {/* Service 2: Versicherungen */}
        <div className="bg-surface rounded-[var(--radius-card)] p-10 hover:bg-white border border-transparent hover:border-gray-100 hover:shadow-card-lift transition-all duration-500 transform hover:-translate-y-2 relative overflow-hidden group flex flex-col">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform duration-300 relative z-10">
             <svg className="w-7 h-7 text-app-insurance" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
          </div>

          <h3 className="text-2xl font-bold mb-4 text-gray-900 relative z-10">Versicherungen</h3>
          <p className="text-gray-500 mb-8 font-medium leading-relaxed relative z-10 flex-1">Wir durchleuchten dein Portfolio, reduzieren Prämien und optimieren.</p>

          <ul className="space-y-4 mb-10 relative z-10">
            <li className="flex items-center text-sm font-semibold text-gray-700">
              <span className="w-6 h-6 rounded-full bg-white flex items-center justify-center mr-4 shadow-sm text-xs text-gray-900 font-bold border border-gray-100">✓</span>
              Expertenprüfung
            </li>
            <li className="flex items-center text-sm font-semibold text-gray-700">
              <span className="w-6 h-6 rounded-full bg-white flex items-center justify-center mr-4 shadow-sm text-xs text-gray-900 font-bold border border-gray-100">✓</span>
              Steuerliche Optimierung
            </li>
            <li className="flex items-center text-sm font-semibold text-gray-700">
              <span className="w-6 h-6 rounded-full bg-white flex items-center justify-center mr-4 shadow-sm text-xs text-gray-900 font-bold border border-gray-100">✓</span>
              Automatische Wechsel
            </li>
          </ul>

          <button className="w-full py-4 bg-white border border-gray-200 group-hover:bg-dark group-hover:border-dark group-hover:text-white text-gray-900 font-bold rounded-2xl transition-all duration-300 text-sm relative z-10 shadow-sm">
            Policen checken
          </button>
        </div>

        {/* Service 3: Treuhand */}
        <div className="bg-surface rounded-[var(--radius-card)] p-10 hover:bg-white border border-transparent hover:border-gray-100 hover:shadow-card-lift transition-all duration-500 transform hover:-translate-y-2 relative overflow-hidden group flex flex-col">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform duration-300 relative z-10">
             <svg className="w-7 h-7 text-app-treuhand" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
          </div>

          <h3 className="text-2xl font-bold mb-4 text-gray-900 relative z-10">Treuhand</h3>
          <p className="text-gray-500 mb-8 font-medium leading-relaxed relative z-10 flex-1">Exklusiv für KMU. Buchhaltung, Lohnwesen und Abschlussgestaltung.</p>

          <ul className="space-y-4 mb-10 relative z-10">
            <li className="flex items-center text-sm font-semibold text-gray-700">
              <span className="w-6 h-6 rounded-full bg-white flex items-center justify-center mr-4 shadow-sm text-xs text-gray-900 font-bold border border-gray-100">✓</span>
              Digitale Buchhaltung
            </li>
            <li className="flex items-center text-sm font-semibold text-gray-700">
              <span className="w-6 h-6 rounded-full bg-white flex items-center justify-center mr-4 shadow-sm text-xs text-gray-900 font-bold border border-gray-100">✓</span>
              MWST- & Lohnadmin
            </li>
            <li className="flex items-center text-sm font-semibold text-gray-700">
              <span className="w-6 h-6 rounded-full bg-white flex items-center justify-center mr-4 shadow-sm text-xs text-gray-900 font-bold border border-gray-100">✓</span>
              Gründungsberatung
            </li>
          </ul>

          <button className="w-full py-4 bg-white border border-gray-200 group-hover:bg-dark group-hover:border-dark group-hover:text-white text-gray-900 font-bold rounded-2xl transition-all duration-300 text-sm relative z-10 shadow-sm">
            Für Business
          </button>
        </div>

      </div>
    </section>
  );
}
