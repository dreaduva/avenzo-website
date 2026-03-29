import { useState } from "react";
import { useScrollReveal } from "../../hooks/useScrollReveal";

const faqs = [
  { q: "Was kostet Avenzo?", a: "Die Steuer-App ist ab 49 CHF pro Jahr erhältlich. Die Versicherungsoptimierung und der Treuhand-Service haben eigene Preismodelle — du zahlst nur, wenn du tatsächlich sparst." },
  { q: "Wie sicher sind meine Daten?", a: "Alle Daten werden mit AES-256 verschlüsselt und auf Schweizer Servern gespeichert. Wir sind FINMA-konform und erfüllen die strengsten Datenschutzstandards der Schweiz." },
  { q: "Kann ich meine Steuererklärung wirklich in wenigen Minuten erledigen?", a: "Ja. Unsere KI erkennt automatisch die relevanten Informationen aus deinen Dokumenten. Die meisten Nutzer sind in unter 15 Minuten fertig — inklusive aller Abzüge." },
  { q: "Was passiert, wenn ich bereits einen Treuhänder habe?", a: "Kein Problem. Du kannst Avenzo parallel nutzen oder deinen bestehenden Treuhänder einladen, direkt auf der Plattform mitzuarbeiten." },
  { q: "Für welche Kantone ist Avenzo verfügbar?", a: "Avenzo unterstützt alle 26 Kantone der Schweiz. Die Steueroptimierung berücksichtigt automatisch die kantonsspezifischen Abzugsmöglichkeiten." },
  { q: "Wie funktioniert die Versicherungsoptimierung?", a: "Lade einfach deine bestehenden Policen hoch. Unsere KI vergleicht sie mit über 50 Anbietern und zeigt dir, wo du sparen kannst — inklusive automatischer Kündigung und Wechsel." },
];

export function PaylineFaq() {
  const header = useScrollReveal();
  const content = useScrollReveal();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-16 sm:py-24 px-3 sm:px-4 max-w-7xl mx-auto my-4 sm:my-10">
      <div ref={header.ref} className={`text-center mb-10 sm:mb-16 ${header.isVisible ? "sr-visible" : "sr-hidden"}`}>
        <div className="inline-block bg-surface text-gray-600 px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-4 sm:mb-6 border border-gray-100">
          FAQ
        </div>
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-medium tracking-tight text-gray-900 mb-4 sm:mb-6">
          Häufig gestellte Fragen
        </h2>
        <p className="text-sm sm:text-base text-gray-500 max-w-2xl mx-auto font-medium lg:text-lg px-2 sm:px-0">
          Alles, was du über Avenzo wissen musst — kurz und klar beantwortet.
        </p>
      </div>

      <div ref={content.ref} className={`max-w-3xl mx-auto ${content.isVisible ? "sr-visible" : "sr-hidden"}`}>
        {faqs.map((faq, i) => {
          const isOpen = openIndex === i;
          return (
            <div key={i} className={`border-b border-gray-100 transition-colors ${isOpen ? "bg-white" : ""}`}>
              <button
                onClick={() => setOpenIndex(isOpen ? null : i)}
                className="w-full flex items-center justify-between py-4 sm:py-6 px-1 sm:px-2 text-left group cursor-pointer"
              >
                <span className={`font-semibold text-base sm:text-lg pr-4 sm:pr-8 transition-colors ${isOpen ? "text-gray-900" : "text-gray-700 group-hover:text-gray-900"}`}>
                  {faq.q}
                </span>
                <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex-shrink-0 flex items-center justify-center transition-all duration-300 ${isOpen ? "bg-accent text-accent-text rotate-45" : "bg-surface text-gray-400 group-hover:bg-gray-200"}`}>
                  <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                  </svg>
                </div>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-60 pb-4 sm:pb-6" : "max-h-0"}`}>
                <p className="text-sm sm:text-base text-gray-500 font-medium leading-relaxed px-1 sm:px-2 pr-12 sm:pr-16">
                  {faq.a}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
