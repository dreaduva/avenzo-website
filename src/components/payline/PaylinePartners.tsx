import { useScrollReveal } from "../../hooks/useScrollReveal";

const partners = [
  { name: "Swiss Finance", abbr: "SF" },
  { name: "FINMA", abbr: "FINMA" },
  { name: "SIX Group", abbr: "SIX" },
  { name: "SwissSign", abbr: "SS" },
  { name: "ISO 27001", abbr: "ISO" },
  { name: "Swiss Made", abbr: "CH" },
];

export function PaylinePartners() {
  const section = useScrollReveal();

  return (
    <section className="py-10 sm:py-16 px-3 sm:px-4 max-w-7xl mx-auto">
      <div ref={section.ref} className={`${section.isVisible ? "sr-visible" : "sr-hidden"}`}>
        <p className="text-center text-[10px] sm:text-sm font-semibold text-gray-400 uppercase tracking-widest mb-6 sm:mb-10">
          Vertraut & zertifiziert
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 md:gap-14">
          {partners.map((p) => (
            <div
              key={p.name}
              className="flex items-center gap-2 text-gray-300 hover:text-gray-500 transition-colors duration-300 cursor-default"
            >
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-surface border border-gray-100 flex items-center justify-center text-[8px] sm:text-[10px] font-extrabold tracking-wider text-gray-400">
                {p.abbr}
              </div>
              <span className="text-xs sm:text-sm font-semibold hidden sm:block">{p.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
