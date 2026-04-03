import { useScrollReveal } from "../../hooks/useScrollReveal";
import { useSiteConfig } from "../../config/SiteConfigContext";

export function ThemeServices() {
  const { services } = useSiteConfig();
  const header = useScrollReveal();
  const cards = useScrollReveal({ rootMargin: "0px 0px -40px 0px" });

  return (
    <section id="services" className="py-16 sm:py-24 px-3 sm:px-4 max-w-7xl mx-auto">
      <div ref={header.ref} className={`text-center mb-12 sm:mb-20 ${header.isVisible ? "sr-visible" : "sr-hidden"}`}>
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-medium tracking-tight text-gray-900 mb-4 sm:mb-6">
          {services.headline}
        </h2>
        <p className="text-sm sm:text-base text-gray-500 max-w-2xl mx-auto font-medium leading-relaxed px-2 sm:px-0">
          {services.subheadline}
        </p>
      </div>

      <div ref={cards.ref} className={`grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8 max-w-6xl mx-auto sr-stagger ${cards.isVisible ? "sr-visible" : ""}`}>
        {services.cards.map((card, i) => (
          <div key={i} className="theme-card rounded-[1.5rem] sm:rounded-[var(--radius-card)] p-6 sm:p-10 transition-all duration-500 transform hover:-translate-y-2 relative overflow-hidden group flex flex-col">
            <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mb-5 sm:mb-8 group-hover:scale-110 transition-transform duration-300 relative z-10 theme-inner">
              {card.icon}
            </div>
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-gray-900 relative z-10">{card.title}</h3>
            <p className="text-sm sm:text-base text-gray-500 mb-6 sm:mb-8 font-medium leading-relaxed relative z-10 flex-1">{card.description}</p>
            <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-10 relative z-10">
              {card.features.map((feat, j) => (
                <li key={j} className="flex items-center text-sm font-semibold text-gray-700">
                  <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center mr-3 sm:mr-4 text-xs text-gray-900 font-bold theme-inner">✓</span>
                  {feat}
                </li>
              ))}
            </ul>
            <button className="w-full py-3 sm:py-4 text-gray-900 font-bold rounded-xl sm:rounded-2xl transition-all duration-300 text-sm relative z-10 theme-inner">
              {card.ctaLabel}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
