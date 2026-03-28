import { useScrollReveal } from "../../hooks/useScrollReveal";

const steps = [
  {
    num: 1,
    title: "App laden & verbinden",
    desc: "Lade die Avenzo App, scanne deinen Lohnausweis oder verbinde deine Bank via OpenBanking.",
  },
  {
    num: 2,
    title: "KI Analyse",
    desc: "Unsere KI durchsucht hunderte Abzugsmöglichkeiten und optimiert live deine Policen.",
    active: true,
  },
  {
    num: 3,
    title: "Auszahlung & Profit",
    desc: "Wir reichen alles ein, kündigen teure Policen und sichern dir dein Geld zurück.",
  },
];

export function PaylineHowItWorks() {
  const header = useScrollReveal();
  const stepsReveal = useScrollReveal();

  return (
    <section id="how-it-works" className="py-32 px-4 max-w-7xl mx-auto border-t border-gray-100 bg-surface rounded-[var(--radius-card-lg)] my-10">
      <div ref={header.ref} className={`text-center mb-24 ${header.isVisible ? "sr-visible" : "sr-hidden"}`}>
        <div className="inline-block bg-dark text-accent px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-widest mb-6 shadow-sm">
          Der Weg
        </div>
        <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-gray-900 mb-6">
          In 3 simplen Schritten <br />zum Maximum.
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto font-medium text-lg">
          Ein Prozess, der sich dir anpasst – nicht umgekehrt.
        </p>
      </div>

      <div ref={stepsReveal.ref} className={`flex flex-col md:flex-row gap-8 md:gap-12 max-w-5xl mx-auto relative mt-10 sr-stagger ${stepsReveal.isVisible ? "sr-visible" : ""}`}>
        {/* Connecting Line — desktop */}
        <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-[2px] bg-gray-200 -z-10"></div>
        <div className="hidden md:block absolute top-12 left-[15%] right-[50%] h-[2px] bg-accent -z-10 shadow-[0_0_10px_rgba(var(--accent-rgb),0.5)]"></div>

        {steps.map((step, i) => (
          <div key={step.num} className="flex-1 flex flex-col items-center text-center group relative">
            {/* Mobile connecting line */}
            {i < steps.length - 1 && (
              <div className="md:hidden absolute top-24 left-1/2 -translate-x-1/2 w-[2px] h-8 bg-gray-200 -z-10" />
            )}

            <div
              className={`w-24 h-24 rounded-full flex items-center justify-center text-2xl font-bold mb-8 group-hover:-translate-y-2 transition-all duration-300 relative ${
                step.active
                  ? "bg-accent shadow-[0_15px_30px_rgba(var(--accent-rgb),0.3)] border-4 border-white transform scale-110"
                  : "bg-white border-2 border-gray-100 shadow-sm group-hover:border-gray-200"
              }`}
            >
              <span className={`relative z-10 ${step.active ? "text-accent-text" : "text-gray-900"}`}>
                {step.num}
              </span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
            <p className="text-gray-500 font-medium text-[15px] px-2 leading-relaxed">
              {step.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
