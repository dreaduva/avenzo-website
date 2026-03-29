import { useScrollReveal } from "../../hooks/useScrollReveal";

const testimonials = [
  {
    quote: "Noch nie war die Steuererklärung so einfach. Lohnausweis fotografiert, App hat alles erkannt. Habe 800 CHF mehr zurückbekommen.",
    name: "Michael S.",
    location: "Zürich",
    initials: "MS",
    colors: "from-blue-500 to-indigo-600",
  },
  {
    quote: "Die automatische Versicherungsoptimierung hat mir 1.200 CHF im Jahr eingespart. Ich musste mich um nichts kümmern.",
    name: "Sarah M.",
    location: "Basel",
    initials: "SM",
    colors: "from-accent to-accent-dark",
    highlight: true,
  },
  {
    quote: "Als Selbstständiger war Treuhand immer ein Albtraum. Mit Avenzo habe ich endlich alles an einem Ort.",
    name: "David K.",
    location: "Bern",
    initials: "DK",
    colors: "from-emerald-500 to-teal-600",
  },
];

export function PaylineTestimonials() {
  const header = useScrollReveal();
  const cards = useScrollReveal();

  return (
    <section id="testimonials" className="py-16 sm:py-24 px-3 sm:px-4 max-w-7xl mx-auto my-4 sm:my-10">
      <div ref={header.ref} className={`text-center mb-12 sm:mb-20 ${header.isVisible ? "sr-visible" : "sr-hidden"}`}>
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-medium tracking-tight text-gray-900 mb-4 sm:mb-6">
          Über 10'000<br />zufriedene Nutzer.
        </h2>
        <p className="text-sm sm:text-base text-gray-500 max-w-2xl mx-auto font-medium lg:text-lg leading-relaxed px-2 sm:px-0">
          Erfahre, was unsere Kunden über Avenzo sagen. Keine leeren Versprechen — nur echte Ergebnisse.
        </p>
      </div>

      <div ref={cards.ref} className={`grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8 max-w-6xl mx-auto sr-stagger ${cards.isVisible ? "sr-visible" : ""}`}>
        {testimonials.map((t, i) => (
          <div
            key={i}
            className={`rounded-xl sm:rounded-[2rem] p-6 sm:p-10 flex flex-col transition-all duration-300 group ${
              t.highlight
                ? "bg-accent shadow-[0_20px_40px_rgba(var(--accent-rgb),0.2)] transform md:-translate-y-6 relative overflow-hidden"
                : "bg-white shadow-card hover:shadow-card-hover border border-gray-100 transform hover:-translate-y-1"
            }`}
          >
            {t.highlight && (
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/20 rounded-full blur-3xl group-hover:scale-125 transition-transform duration-700" />
            )}

            <div className={`flex mb-5 sm:mb-8 relative z-10 ${t.highlight ? "text-accent-text" : "text-accent"}`}>
              {[...Array(5)].map((_, j) => (
                <svg key={j} className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>

            <p className={`font-medium leading-relaxed mb-6 sm:mb-10 flex-1 relative z-10 ${
              t.highlight ? "text-gray-900 font-bold text-base sm:text-lg" : "text-gray-600 text-sm sm:text-[15px]"
            }`}>
              "{t.quote}"
            </p>

            <div className="flex items-center gap-3 sm:gap-4 relative z-10">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden flex items-center justify-center text-white font-bold text-xs sm:text-sm shadow-sm">
                <div className={`w-full h-full bg-gradient-to-tr ${t.colors} flex items-center justify-center`}>
                  {t.initials}
                </div>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-sm sm:text-base">{t.name}</h4>
                <p className={`text-xs sm:text-[13px] font-medium ${t.highlight ? "text-gray-800" : "text-gray-500"}`}>{t.location}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
