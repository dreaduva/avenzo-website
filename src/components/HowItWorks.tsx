export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 relative z-10 bg-gray-50 dark:bg-brand-dark">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-20 reveal">
          <div className="text-[0.75rem] uppercase tracking-[0.25em] font-bold text-brand-green dark:text-brand-green-light mb-4">Der Weg</div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white">In 3 simplen Schritten <br/>zum Maximum.</h2>
        </div>
        
        <div className="relative wrap overflow-hidden p-4 md:p-10 h-full">
          {/* Center Line */}
          <div className="absolute border-opacity-20 border-gray-300 dark:border-white/10 h-full border-2 left-8 md:left-1/2 md:-translate-x-1/2"></div>
          
          {/* Step 1 */}
          <div className="mb-12 flex flex-col md:flex-row justify-between items-start md:items-center w-full reveal">
            <div className="order-1 md:w-5/12 ml-16 md:ml-0 md:text-right">
              <h4 className="mb-3 font-bold text-2xl text-gray-900 dark:text-white">1. App Load & Connect</h4>
              <p className="text-gray-600 dark:text-gray-400 font-medium text-sm leading-relaxed">Lade die Avenzo App, scanne deinen Lohnausweis oder verbinde deine Bank via OpenBanking sicher und verschlüsselt in unter 3 Minuten.</p>
            </div>
            <div className="z-20 absolute left-4 md:static md:left-auto flex items-center order-1 bg-white dark:bg-[#050706] shadow-[0_0_20px_rgba(28,90,75,0.3)] border-4 border-brand-green w-10 h-10 md:w-14 md:h-14 rounded-full">
              <h1 className="mx-auto font-black text-lg text-brand-green dark:text-brand-green-light">1</h1>
            </div>
            <div className="order-1 md:w-5/12"></div>
          </div>
          
          {/* Step 2 */}
          <div className="mb-12 flex flex-col md:flex-row justify-between items-start md:items-center w-full reveal">
            <div className="order-1 md:w-5/12"></div>
            <div className="z-20 absolute left-4 md:static md:left-auto flex items-center order-1 bg-brand-green shadow-[0_0_30px_rgba(28,90,75,0.6)] border-4 border-white dark:border-[#111] w-10 h-10 md:w-14 md:h-14 rounded-full transform scale-110">
              <h1 className="mx-auto font-black text-lg text-white">2</h1>
            </div>
            <div className="order-1 md:w-5/12 ml-16 md:ml-0 md:pl-8">
              <h4 className="mb-3 font-bold text-2xl text-gray-900 dark:text-white">2. KI Analyse</h4>
              <p className="text-gray-600 dark:text-gray-400 font-medium text-sm leading-relaxed">Unsere KI kombiniert mit echten Schweizer Steuerexperten durchsucht hunderte Abzugsmöglichkeiten und optimiert live deine Policen.</p>
            </div>
          </div>
          
          {/* Step 3 */}
          <div className="mb-12 flex flex-col md:flex-row justify-between items-start md:items-center w-full reveal">
            <div className="order-1 md:w-5/12 ml-16 md:ml-0 md:text-right">
              <h4 className="mb-3 font-bold text-2xl text-brand-green dark:text-brand-green-light">3. Auszahlung & Profit</h4>
              <p className="text-gray-600 dark:text-gray-400 font-medium text-sm leading-relaxed">Wir reichen alles fristgerecht beim Steueramt ein, kündigen teure Policen und sichern dir Jahr für Jahr dein Geld zurück.</p>
            </div>
            <div className="z-20 absolute left-4 md:static md:left-auto flex items-center order-1 bg-white dark:bg-[#050706] shadow-[0_0_20px_rgba(28,90,75,0.3)] border-4 border-brand-green w-10 h-10 md:w-14 md:h-14 rounded-full">
              <h1 className="mx-auto font-black text-lg text-brand-green dark:text-brand-green-light">3</h1>
            </div>
            <div className="order-1 md:w-5/12"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
