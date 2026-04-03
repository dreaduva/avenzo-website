import { useScrollReveal } from "../../hooks/useScrollReveal";
import { useSiteConfig } from "../../config/SiteConfigContext";

export function ThemePartners() {
  const { partners } = useSiteConfig();
  const section = useScrollReveal();

  return (
    <section className="py-10 sm:py-16 px-3 sm:px-4 max-w-7xl mx-auto">
      <div ref={section.ref} className={`${section.isVisible ? "sr-visible" : "sr-hidden"}`}>
        <p className="text-center text-[10px] sm:text-sm font-semibold text-gray-400 uppercase tracking-widest mb-6 sm:mb-10">
          {partners.label}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 md:gap-14">
          {partners.items.map((p) => (
            <div
              key={p.name}
              className="flex items-center gap-2 text-gray-300 hover:text-gray-500 transition-colors duration-300 cursor-default"
            >
              {p.logoSrc ? (
                <img src={p.logoSrc} alt={p.name} className="h-8 sm:h-10 object-contain" />
              ) : (
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl theme-badge flex items-center justify-center text-[8px] sm:text-[10px] font-extrabold tracking-wider text-gray-400">
                  {p.abbr}
                </div>
              )}
              <span className="text-xs sm:text-sm font-semibold hidden sm:block">{p.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
