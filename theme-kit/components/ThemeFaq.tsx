import { useState } from "react";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import { useSiteConfig } from "../../config/SiteConfigContext";

export function ThemeFaq() {
  const { faq } = useSiteConfig();
  const header = useScrollReveal();
  const content = useScrollReveal();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-16 sm:py-24 px-3 sm:px-4 max-w-7xl mx-auto my-4 sm:my-10">
      <div ref={header.ref} className={`text-center mb-10 sm:mb-16 ${header.isVisible ? "sr-visible" : "sr-hidden"}`}>
        <div className="inline-block theme-badge text-gray-600 px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-4 sm:mb-6">
          {faq.badge}
        </div>
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-medium tracking-tight text-gray-900 mb-4 sm:mb-6">
          {faq.headline}
        </h2>
        <p className="text-sm sm:text-base text-gray-500 max-w-2xl mx-auto font-medium lg:text-lg px-2 sm:px-0">
          {faq.subheadline}
        </p>
      </div>

      <div ref={content.ref} className={`max-w-3xl mx-auto ${content.isVisible ? "sr-visible" : "sr-hidden"}`}>
        {faq.items.map((item, i) => {
          const isOpen = openIndex === i;
          return (
            <div key={i} className="transition-colors" style={{ borderBottom: "1px solid var(--card-border)", background: isOpen ? "var(--card-bg-hover)" : "transparent" }}>
              <button
                onClick={() => setOpenIndex(isOpen ? null : i)}
                className="w-full flex items-center justify-between py-4 sm:py-6 px-1 sm:px-2 text-left group cursor-pointer"
              >
                <span className={`font-semibold text-base sm:text-lg pr-4 sm:pr-8 transition-colors ${isOpen ? "text-gray-900" : "text-gray-700 group-hover:text-gray-900"}`}>
                  {item.question}
                </span>
                <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex-shrink-0 flex items-center justify-center transition-all duration-300 ${isOpen ? "bg-accent text-accent-text rotate-45" : "text-gray-400"}`} style={isOpen ? undefined : { background: "var(--card-bg)", border: "1px solid var(--card-border)" }}>
                  <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                  </svg>
                </div>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-60 pb-4 sm:pb-6" : "max-h-0"}`}>
                <p className="text-sm sm:text-base text-gray-500 font-medium leading-relaxed px-1 sm:px-2 pr-12 sm:pr-16">
                  {item.answer}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
