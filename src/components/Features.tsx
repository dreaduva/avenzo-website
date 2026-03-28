export function Features() {
  return (
    <>
      {/* Logos Section */}
      <section className="py-10 border-b border-gray-200 dark:border-white/5 relative z-10 bg-white/50 dark:bg-[#020302]/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-gray-400 dark:text-gray-500 font-bold mb-6">Technologie & Daten geschützt durch Standards von</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 dark:opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
            <span className="text-2xl font-black tracking-tighter text-gray-800 dark:text-white">PostFinance</span>
            <span className="text-2xl font-bold tracking-tight text-gray-800 dark:text-white">★ UBS</span>
            <span className="text-2xl font-extrabold italic text-gray-800 dark:text-white">ZKB</span>
            <span className="text-2xl font-bold text-gray-800 dark:text-white">SwissLife</span>
          </div>
        </div>
      </section>

      {/* App / Feature Split Section */}
      <section id="features" className="py-24 relative z-10 overflow-hidden bg-gray-50/50 dark:bg-transparent">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            {/* Text Left */}
            <div className="w-full lg:w-1/2 reveal">
              <div className="text-[0.75rem] uppercase tracking-[0.25em] font-bold text-brand-green dark:text-brand-green-light mb-4">Avenzo Plattform</div>
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-6">Transparenz in <br/>absoluter <span className="text-brand-green dark:text-brand-green-light">Echtzeit.</span></h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                Verfolge den Bearbeitungsstatus deiner Dokumente sofort. Unsere intelligente Dashboard-Architektur gibt dir 24/7 Einblick in potenzielle Rückzahlungen, offene To-Dos und direkte Chats mit deinem Finanzexperten.
              </p>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-green/10 dark:bg-brand-green/20 text-brand-green dark:text-brand-green-light flex items-center justify-center font-bold">1</div>
                  <div className="ml-4">
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white">Upload & KI-Scan</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mt-1 font-medium">Fotografiere Dokumente; wir lesen sie automatisch ein.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-green/10 dark:bg-brand-green/20 text-brand-green dark:text-brand-green-light flex items-center justify-center font-bold">2</div>
                  <div className="ml-4">
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white">Experten-Review</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mt-1 font-medium">Unsere Schweizer Spezialisten optimieren live im Hintergrund.</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Mockup Right */}
            <div className="w-full lg:w-1/2 reveal perspective-1000">
              <div className="relative w-full aspect-square md:aspect-[4/3] transform rotate-y-[-10deg] rotate-x-[5deg] hover:rotate-y-0 hover:rotate-x-0 transition-transform duration-700 ease-out">
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-green to-blue-500 opacity-20 blur-3xl rounded-full"></div>
                <div className="glass-card absolute inset-4 border border-gray-200 dark:border-white/10 rounded-3xl bg-white dark:bg-[#0a0f0d] shadow-2xl overflow-hidden flex flex-col">
                  <div className="h-12 border-b border-gray-100 dark:border-white/5 flex items-center px-6">
                    <span className="font-bold text-gray-900 dark:text-white">Avenzo Mobile</span>
                  </div>
                  <div className="p-6 flex-grow flex flex-col gap-4 bg-gray-50/50 dark:bg-transparent">
                    <div className="w-full h-1/2 rounded-2xl bg-white dark:bg-white/5 border border-gray-100 dark:border-white/5 p-4 flex flex-col justify-end relative overflow-hidden">
                      <div className="absolute inset-0 opacity-10 dark:opacity-20" style={{ background: 'repeating-linear-gradient(45deg, transparent, transparent 10px, #ccc 10px, #ccc 20px)' }}></div>
                      <div className="h-32 w-full flex items-end gap-2 z-10">
                        {/* fake bar chart */}
                        <div className="w-full bg-gray-200 dark:bg-white/10 rounded-t-sm h-1/4"></div>
                        <div className="w-full bg-gray-200 dark:bg-white/10 rounded-t-sm h-2/4"></div>
                        <div className="w-full bg-gray-200 dark:bg-white/10 rounded-t-sm h-1/3"></div>
                        <div className="w-full bg-brand-green rounded-t-sm h-[80%] relative shadow-[0_0_15px_rgba(28,90,75,0.5)]"></div>
                        <div className="w-full bg-gray-200 dark:bg-white/10 rounded-t-sm h-1/2"></div>
                      </div>
                      <div className="mt-4 z-10 font-bold text-gray-900 dark:text-white">Historische Steuer-Einsparungen</div>
                    </div>
                    <div className="w-full h-1/2 rounded-2xl bg-white dark:bg-white/5 border border-gray-100 dark:border-white/5 p-4 flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full border-[3px] border-brand-green flex items-center justify-center p-1">
                        <img 
                          src="/denis-whitebg-removebg-preview.png" 
                          className="w-full h-full rounded-full object-cover bg-gray-200 dark:bg-gray-800" 
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iI2NjYyI+PHBhdGggZD0iTTEyIDJDMiAyIDIuOTUgMTQgMTQgMTVzLTEyIDEzLTEyIDEzem0tMSAxNWwtNS01IDEuNDEtMS40MUwxMSAxNC4xN2w3LjU5LTcuNTlMMjAgOGwtOSA5eiIvPjwvc3ZnPg==';
                          }} 
                        />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-gray-900 dark:text-white">Denis S. (Dein Berater)</div>
                        <div className="text-xs text-brand-green font-semibold">"Die Frist wurde erfolgreich gewahrt."</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
