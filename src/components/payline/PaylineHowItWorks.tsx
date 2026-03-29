import { useScrollReveal } from "../../hooks/useScrollReveal";

const steps = [
  { num: 1, title: "App laden & verbinden", desc: "Lade die Avenzo App, scanne deinen Lohnausweis oder verbinde deine Bank via OpenBanking." },
  { num: 2, title: "KI Analyse", desc: "Unsere KI durchsucht hunderte Abzugsmöglichkeiten und optimiert live deine Policen.", active: true },
  { num: 3, title: "Auszahlung & Profit", desc: "Wir reichen alles ein, kündigen teure Policen und sichern dir dein Geld zurück." },
];

export function PaylineHowItWorks() {
  const header = useScrollReveal();
  const stepsReveal = useScrollReveal();

  return (
    <section id="how-it-works" className="py-20 sm:py-32 px-3 sm:px-4 max-w-7xl mx-auto border-t border-gray-100 bg-surface rounded-[1.5rem] sm:rounded-[var(--radius-card-lg)] my-4 sm:my-10">
      <div ref={header.ref} className={`text-center mb-14 sm:mb-24 ${header.isVisible ? "sr-visible" : "sr-hidden"}`}>
        <div className="inline-block bg-dark text-accent px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-4 sm:mb-6 shadow-sm">
          Der Weg
        </div>
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-medium tracking-tight text-gray-900 mb-4 sm:mb-6">
          In 3 simplen Schritten <br />zum Maximum.
        </h2>
        <p className="text-sm sm:text-base text-gray-500 max-w-2xl mx-auto font-medium lg:text-lg px-2 sm:px-0">
          Ein Prozess, der sich dir anpasst – nicht umgekehrt.
        </p>
      </div>

      <div ref={stepsReveal.ref} className={`flex flex-col md:flex-row gap-6 sm:gap-8 md:gap-12 max-w-5xl mx-auto relative mt-6 sm:mt-10 sr-stagger ${stepsReveal.isVisible ? "sr-visible" : ""}`}>
        {/* Connecting Line — desktop */}
        <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-[2px] bg-gray-200 -z-10" />
        <div className="hidden md:block absolute top-12 left-[15%] right-[50%] h-[2px] bg-accent -z-10 shadow-[0_0_10px_rgba(var(--accent-rgb),0.5)]" />

        {steps.map((step, i) => (
          <div key={step.num} className="flex-1 flex flex-row md:flex-col items-center md:text-center group relative gap-4 md:gap-0">
            {/* Mobile connecting line */}
            {i < steps.length - 1 && (
              <div className="hidden md:hidden absolute left-[2.25rem] top-[3.5rem] w-[2px] h-6 bg-gray-200 -z-10" />
            )}

            <div
              className={`w-14 h-14 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center text-lg sm:text-xl md:text-2xl font-bold md:mb-8 group-hover:-translate-y-1 md:group-hover:-translate-y-2 transition-all duration-300 relative shrink-0 ${
                step.active
                  ? "bg-accent shadow-[0_10px_20px_rgba(var(--accent-rgb),0.3)] sm:shadow-[0_15px_30px_rgba(var(--accent-rgb),0.3)] border-[3px] sm:border-4 border-white transform md:scale-110"
                  : "bg-white border-2 border-gray-100 shadow-sm group-hover:border-gray-200"
              }`}
            >
              <span className={`relative z-10 ${step.active ? "text-accent-text" : "text-gray-900"}`}>
                {step.num}
              </span>
            </div>
            <div className="flex-1 md:flex-none">
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-1 sm:mb-4">{step.title}</h3>
              <p className="text-xs sm:text-sm md:text-[15px] text-gray-500 font-medium leading-relaxed">
                {step.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
