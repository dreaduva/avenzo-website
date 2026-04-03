import { useScrollReveal } from "../../hooks/useScrollReveal";
import { useSiteConfig } from "../../config/SiteConfigContext";

export function ThemePricingSection() {
  const { pricing } = useSiteConfig();
  const header = useScrollReveal();
  const grid = useScrollReveal();

  if (!pricing) return null;

  return (
    <section id="pricing" className="py-16 sm:py-24 px-3 sm:px-4 max-w-7xl mx-auto my-4 sm:my-10">
      <div ref={header.ref} className={`text-center mb-12 sm:mb-20 ${header.isVisible ? "sr-visible" : "sr-hidden"}`}>
        <div className="inline-block theme-badge text-gray-600 px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-4 sm:mb-6">
          Preise
        </div>
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-medium tracking-tight text-gray-900 mb-4 sm:mb-6">
          {pricing.headline}
        </h2>
        <p className="text-sm sm:text-base text-gray-500 max-w-2xl mx-auto font-medium leading-relaxed lg:text-lg px-2 sm:px-0">
          {pricing.subheadline}
        </p>
      </div>

      <div ref={grid.ref} className={`grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto sr-stagger ${grid.isVisible ? "sr-visible" : ""}`}>
        {pricing.tiers.map((tier, i) => (
          <div
            key={i}
            className={`rounded-[1.5rem] sm:rounded-[var(--radius-card)] p-6 sm:p-8 md:p-10 flex flex-col relative transition-all duration-300 ${
              tier.highlighted
                ? "bg-accent text-accent-text shadow-[0_20px_40px_rgba(var(--accent-rgb),0.2)] transform md:-translate-y-4"
                : "theme-card hover:-translate-y-1"
            }`}
          >
            {tier.badge && (
              <div className={`absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider shadow-sm ${
                tier.highlighted ? "bg-white text-gray-900" : "bg-accent text-accent-text"
              }`}>
                {tier.badge}
              </div>
            )}

            <h3 className={`text-lg sm:text-xl font-bold mb-3 ${tier.highlighted ? "" : "text-gray-900"}`}>
              {tier.name}
            </h3>

            <div className="flex items-baseline gap-1.5 mb-1">
              <span className={`text-4xl sm:text-5xl font-black tracking-tight ${tier.highlighted ? "" : "text-gray-900"}`}>
                {tier.price}
              </span>
              <span className={`text-sm font-medium ${tier.highlighted ? "opacity-60" : "text-gray-400"}`}>
                {tier.period}
              </span>
            </div>

            <p className={`text-sm font-medium mb-6 sm:mb-8 leading-relaxed ${tier.highlighted ? "opacity-70" : "text-gray-500"}`}>
              {tier.description}
            </p>

            <ul className="space-y-3 sm:space-y-4 mb-8 sm:mb-10 flex-1">
              {tier.features.map((feat, j) => (
                <li key={j} className={`flex items-center gap-3 text-sm font-medium ${tier.highlighted ? "" : "text-gray-700"}`}>
                  <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${
                    tier.highlighted ? "bg-white/20" : ""
                  }`} style={tier.highlighted ? undefined : { backgroundColor: "var(--color-accent-tint-1)" }}>
                    <svg className={`w-3 h-3 ${tier.highlighted ? "" : "text-accent-dark"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  {feat}
                </li>
              ))}
            </ul>

            <button className={`w-full py-3.5 sm:py-4 rounded-xl sm:rounded-2xl font-bold text-sm transition-all duration-300 ${
              tier.highlighted
                ? "bg-white text-gray-900 hover:bg-gray-100 shadow-lg"
                : "text-white hover:opacity-90"
            }`} style={tier.highlighted ? undefined : { background: "var(--color-dark)" }}>
              {tier.ctaLabel}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
