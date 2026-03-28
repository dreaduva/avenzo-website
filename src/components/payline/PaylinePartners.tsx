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
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <div ref={section.ref} className={`${section.isVisible ? "sr-visible" : "sr-hidden"}`}>
        <p className="text-center text-sm font-semibold text-gray-400 uppercase tracking-widest mb-10">
          Vertraut & zertifiziert
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14">
          {partners.map((p) => (
            <div
              key={p.name}
              className="flex items-center gap-2.5 text-gray-300 hover:text-gray-500 transition-colors duration-300 cursor-default"
            >
              <div className="w-10 h-10 rounded-xl bg-surface border border-gray-100 flex items-center justify-center text-[10px] font-extrabold tracking-wider text-gray-400">
                {p.abbr}
              </div>
              <span className="text-sm font-semibold hidden sm:block">{p.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
