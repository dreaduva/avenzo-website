import { useScrollReveal } from "../../../hooks/useScrollReveal";
import { useSiteConfig } from "../../../config/SiteConfigContext";

export function ThemePricing() {
  const { pricing } = useSiteConfig();
  const header = useScrollReveal();
  const grid = useScrollReveal();

  if (!pricing) return null;

  return (
    <section className="pt-28 sm:pt-36 pb-16 sm:pb-24 px-3 sm:px-4 max-w-7xl mx-auto">
      <div ref={header.ref} className={`text-center mb-12 sm:mb-20 ${header.isVisible ? "sr-visible" : "sr-hidden"}`}>
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-medium tracking-tight text-gray-900 mb-4 sm:mb-6">
          {pricing.headline}
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-gray-500 max-w-2xl mx-auto font-medium leading-relaxed">
          {pricing.subheadline}
        </p>
      </div>

      <div ref={grid.ref} className={`grid grid-cols-1 md:grid-cols-${Math.min(pricing.tiers.length, 3)} gap-4 sm:gap-6 max-w-5xl mx-auto sr-stagger ${grid.isVisible ? "sr-visible" : ""}`}>
        {pricing.tiers.map((tier, i) => (
          <div
            key={i}
            className={`rounded-[var(--radius-card)] p-6 sm:p-8 flex flex-col relative ${
              tier.highlighted
                ? "bg-accent text-accent-text shadow-[0_20px_40px_rgba(var(--accent-rgb),0.2)]"
                : "theme-card"
            }`}
          >
            {tier.badge && (
              <div className={`absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider ${
                tier.highlighted ? "bg-white text-gray-900 shadow-lg" : "bg-accent text-accent-text"
              }`}>
                {tier.badge}
              </div>
            )}

            <h3 className={`text-lg sm:text-xl font-bold mb-2 ${tier.highlighted ? "" : "text-gray-900"}`}>
              {tier.name}
            </h3>
            <div className="flex items-baseline gap-1 mb-2">
              <span className={`text-3xl sm:text-4xl md:text-5xl font-black tracking-tight ${tier.highlighted ? "" : "text-gray-900"}`}>
                {tier.price}
              </span>
              <span className={`text-sm font-medium ${tier.highlighted ? "opacity-60" : "text-gray-400"}`}>
                {tier.period}
              </span>
            </div>
            <p className={`text-sm font-medium mb-6 sm:mb-8 ${tier.highlighted ? "opacity-70" : "text-gray-500"}`}>
              {tier.description}
            </p>

            <ul className="space-y-3 mb-8 flex-1">
              {tier.features.map((feat, j) => (
                <li key={j} className={`flex items-center gap-3 text-sm font-medium ${tier.highlighted ? "" : "text-gray-700"}`}>
                  <svg className={`w-4 h-4 shrink-0 ${tier.highlighted ? "" : "text-accent"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  {feat}
                </li>
              ))}
            </ul>

            <button className={`w-full py-3 sm:py-4 rounded-xl sm:rounded-2xl font-bold text-sm transition-all ${
              tier.highlighted
                ? "bg-white text-gray-900 hover:bg-gray-100"
                : "theme-inner hover:opacity-90"
            }`} style={tier.highlighted ? undefined : { background: "var(--color-dark)", color: "white", border: "none" }}>
              {tier.ctaLabel}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
