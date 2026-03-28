const fs = require('fs');

const path = '/Users/leonardduva/Workspace/Clients/active/Avenzo/website-concept/src/components/payline/PaylineHero.tsx';
let content = fs.readFileSync(path, 'utf8');

const newInteractiveSection = `
      {/* Interactive Container Layout (Tabs on Left + Content on Right) */}
      <div className="w-full max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-6 items-stretch mt-12 relative z-20">
        {/* Left Side Vertical Tabs */}
        <div className="flex flex-row lg:flex-col justify-start gap-2 bg-[#FAFAFA] p-4 rounded-[2rem] w-full lg:w-[260px] shrink-0 h-fit border border-gray-100 shadow-sm">
          <button
            onClick={() => setActiveTab("steuer")}
            className={\`px-5 py-4 rounded-2xl text-sm font-bold transition-all duration-300 flex items-center justify-start gap-4 w-full text-left \${activeTab === "steuer" ? "bg-white shadow-sm border border-gray-100 text-gray-900" : "text-gray-500 hover:text-gray-900 hover:bg-white/50 border border-transparent"}\`}
          >
            <div
              className={\`w-2.5 h-2.5 rounded-full shrink-0 transition-colors \${activeTab === "steuer" ? "bg-[var(--color-payline-accent)]" : "bg-gray-300"}\`}
            ></div>
            Avenzo Steuern
          </button>
          <button
            onClick={() => setActiveTab("versicherung")}
            className={\`px-5 py-4 rounded-2xl text-sm font-bold transition-all duration-300 flex items-center justify-start gap-4 w-full text-left \${activeTab === "versicherung" ? "bg-white shadow-sm border border-gray-100 text-gray-900" : "text-gray-500 hover:text-gray-900 hover:bg-white/50 border border-transparent"}\`}
          >
            <div
              className={\`w-2.5 h-2.5 rounded-full shrink-0 transition-colors \${activeTab === "versicherung" ? "bg-[var(--color-payline-accent)]" : "bg-gray-300"}\`}
            ></div>
            Avenzo Insurance
          </button>
          <button
            onClick={() => setActiveTab("treuhand")}
            className={\`px-5 py-4 rounded-2xl text-sm font-bold transition-all duration-300 flex items-center justify-start gap-4 w-full text-left \${activeTab === "treuhand" ? "bg-white shadow-sm border border-gray-100 text-gray-900" : "text-gray-500 hover:text-gray-900 hover:bg-white/50 border border-transparent"}\`}
          >
            <div
              className={\`w-2.5 h-2.5 rounded-full shrink-0 transition-colors \${activeTab === "treuhand" ? "bg-[var(--color-payline-accent)]" : "bg-gray-300"}\`}
            ></div>
            Avenzo Treuhand
          </button>
        </div>

        {/* Right Side Content Container (Mind Map & Mockups) */}
        <div className="relative w-full flex-grow rounded-[3rem] bg-[#FAFAFA] border border-gray-100 flex items-center justify-center overflow-hidden min-h-[700px] shadow-sm">
          
          {/* Connecting Line */}
          <div className="hidden lg:block absolute left-[30%] right-[30%] top-1/2 -translate-y-1/2 h-0 border-t-[1.5px] border-dashed border-gray-300 z-10"></div>

          <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-5xl gap-12 lg:gap-20 px-6 lg:px-16 py-12 relative z-20">
            {/* Left Info Boxes Area */}
            <div className="relative w-full lg:w-[320px] h-[400px] shrink-0 flex items-center">
              {/* Steuer Info */}
              <div
                className={\`absolute inset-0 flex flex-col justify-center transition-all duration-500 \${activeTab === "steuer" ? "opacity-100 translate-x-0 pointer-events-auto z-20" : "opacity-0 -translate-x-8 pointer-events-none z-0"}\`}
              >
                <div className="bg-[#111111] text-white p-8 rounded-[2rem] shadow-[0_20px_40px_rgba(0,0,0,0.15)] relative border border-gray-800 text-left w-full">
                  <div className="w-12 h-12 bg-[var(--color-payline-accent)]/10 rounded-xl flex items-center justify-center text-[var(--color-payline-accent)] mb-6 shadow-[0_0_20px_rgba(var(--color-payline-accent-rgb),0.15)] border border-[var(--color-payline-accent)]/20">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h4 className="text-2xl font-medium tracking-tight mb-3">
                    KI-Steuer-Scan
                  </h4>
                  <p className="text-gray-400 font-medium text-[13px] mb-8 leading-relaxed">
                    Fotografiere deine Dokumente und unsere KI maximiert vollautomatisch deine Steuerabzüge in unter 3 Minuten.
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-center gap-3 text-sm font-medium text-gray-200">
                      <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center text-gray-400 text-xs shrink-0">✓</div>
                      Dokumente scannen
                    </li>
                    <li className="flex items-center gap-3 text-sm font-medium text-gray-200">
                      <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center text-gray-400 text-xs shrink-0">✓</div>
                      Abzüge maximieren
                    </li>
                    <li className="flex items-center gap-3 text-sm font-medium text-gray-200">
                      <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center text-gray-400 text-xs shrink-0">✓</div>
                      Direkt einreichen
                    </li>
                  </ul>
                </div>
              </div>

              {/* Versicherung Info */}
              <div
                className={\`absolute inset-0 flex flex-col justify-center transition-all duration-500 \${activeTab === "versicherung" ? "opacity-100 translate-x-0 pointer-events-auto z-20" : "opacity-0 -translate-x-8 pointer-events-none z-0"}\`}
              >
                <div className="bg-[#111111] text-white p-8 rounded-[2rem] shadow-[0_20px_40px_rgba(0,0,0,0.15)] relative border border-gray-800 text-left w-full">
                  <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-400 mb-6 shadow-[0_0_20px_rgba(59,130,246,0.15)] border border-blue-500/20">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h4 className="text-2xl font-medium tracking-tight mb-3">
                    Policen-Check
                  </h4>
                  <p className="text-gray-400 font-medium text-[13px] mb-8 leading-relaxed">
                    Wir analysieren deine Verträge, decken Deckungslücken auf und wechseln dich mit einem Klick in den besten Tarif.
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-center gap-3 text-sm font-medium text-gray-200">
                      <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center text-gray-400 text-xs shrink-0">✓</div>
                      Lücken erkennen
                    </li>
                    <li className="flex items-center gap-3 text-sm font-medium text-gray-200">
                      <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center text-gray-400 text-xs shrink-0">✓</div>
                      Prämien vergleichen
                    </li>
                    <li className="flex items-center gap-3 text-sm font-medium text-gray-200">
                      <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center text-gray-400 text-xs shrink-0">✓</div>
                      1-Klick Wechsel
                    </li>
                  </ul>
                </div>
              </div>

              {/* Treuhand Info */}
              <div
                className={\`absolute inset-0 flex flex-col justify-center transition-all duration-500 \${activeTab === "treuhand" ? "opacity-100 translate-x-0 pointer-events-auto z-20" : "opacity-0 -translate-x-8 pointer-events-none z-0"}\`}
              >
                <div className="bg-[#111111] text-white p-8 rounded-[2rem] shadow-[0_20px_40px_rgba(0,0,0,0.15)] relative border border-gray-800 text-left w-full">
                  <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center text-purple-400 mb-6 shadow-[0_0_20px_rgba(168,85,247,0.15)] border border-purple-500/20">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h4 className="text-2xl font-medium tracking-tight mb-3">
                    Business Portal
                  </h4>
                  <p className="text-gray-400 font-medium text-[13px] mb-8 leading-relaxed">
                    Dein gesamtes Finanzwesen an einem Ort. Von der Buchhaltung bis zum MWST-Abschluss, exklusiv für KMU.
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-center gap-3 text-sm font-medium text-gray-200">
                      <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center text-gray-400 text-xs shrink-0">✓</div>
                      Buchhaltung Live
                    </li>
                    <li className="flex items-center gap-3 text-sm font-medium text-gray-200">
                      <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center text-gray-400 text-xs shrink-0">✓</div>
                      MWST & Abschlüsse
                    </li>
                    <li className="flex items-center gap-3 text-sm font-medium text-gray-200">
                      <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center text-gray-400 text-xs shrink-0">✓</div>
                      Experten-Chat
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Right Mockups Area */}
            <div className="relative w-full lg:w-[280px] h-[580px] flex items-center justify-center shrink-0 z-20">
              
              {/* MOCKUP 1: STEUER (iPhone) */}
              <div
                className={\`absolute transition-all duration-700 pointer-events-auto \${activeTab === "steuer" ? "opacity-100 translate-y-0 scale-100 z-20" : "opacity-0 translate-y-12 scale-95 z-0"}\`}
              >
                <div className="relative w-[280px] h-[580px] bg-white rounded-[3rem] border-[8px] border-[#111111] shadow-[0_30px_60px_rgba(0,0,0,0.12)] overflow-hidden flex flex-col transform hover:-translate-y-2 transition-transform duration-500 cursor-pointer">
                  {/* Dynamic Island */}
                  <div className="absolute top-3 left-1/2 -translate-x-1/2 w-[90px] h-[28px] bg-[#111111] rounded-full z-30 flex items-center justify-end px-3">
                    <div className="w-3 h-3 rounded-full bg-gray-800 border border-gray-700"></div>
                  </div>

                  {/* App UI */}
                  <div className="w-full h-full bg-gray-50 pt-14 pb-8 flex flex-col relative z-10">
                    <div className="px-5 py-3 flex justify-between items-center bg-white shadow-[0_2px_10px_rgba(0,0,0,0.02)] z-20">
                      {theme === "original" ? (
                        <img
                          src="/avenzo-svg.svg"
                          className="h-4 object-contain filter brightness-0"
                          alt="Avenzo"
                        />
                      ) : (
                        <div
                          className="h-4 w-4"
                          style={{
                            backgroundColor: "#111111",
                            WebkitMaskImage: "url(/avenzo-svg.svg)",
                            WebkitMaskSize: "contain",
                            WebkitMaskRepeat: "no-repeat",
                            WebkitMaskPosition: "center",
                            maskImage: "url(/avenzo-svg.svg)",
                            maskSize: "contain",
                            maskRepeat: "no-repeat",
                            maskPosition: "center",
                          }}
                          title="Avenzo"
                        ></div>
                      )}
                      <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden border border-gray-100">
                        <img
                          src="/denis-whitebg-removebg-preview.png"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>

                    <div className="relative flex-grow overflow-hidden px-5 py-6 flex flex-col no-scrollbar">
                      {/* Analysis UI */}
                      <div className="absolute inset-x-5 top-1/2 -translate-y-1/2 flex flex-col items-center justify-center text-center">
                        <div className="relative w-28 h-28 flex items-center justify-center mb-8">
                          <div className="absolute inset-0 border-[1.5px] border-dashed border-gray-300 rounded-full anim-spin-slow"></div>
                          <div className="absolute inset-2 border-[1.5px] border-dashed border-[var(--color-payline-accent)] rounded-full anim-spin-slow-rev"></div>
                          <div className="w-16 h-16 bg-[#111111] rounded-full flex items-center justify-center shadow-lg z-10">
                            <svg className="w-8 h-8 text-[var(--color-payline-accent)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                            </svg>
                          </div>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          Avenzo AI Analyse
                        </h3>
                        <div className="space-y-3 w-full mt-6">
                          <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden relative">
                            <div className="absolute left-0 top-0 h-full bg-[var(--color-payline-accent)] rounded-full w-[80%]"></div>
                          </div>
                          <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest text-gray-500">
                            <span>Steuerabzüge</span>
                            <span className="text-[var(--color-payline-accent-dark)]">Kalkuliert</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* MOCKUP 2: VERSICHERUNG (iPhone) */}
              <div
                className={\`absolute transition-all duration-700 pointer-events-auto \${activeTab === "versicherung" ? "opacity-100 translate-y-0 scale-100 z-20" : "opacity-0 translate-y-12 scale-95 z-0"}\`}
              >
                <div className="relative w-[280px] h-[580px] bg-white rounded-[3rem] border-[8px] border-[#111111] shadow-[0_30px_60px_rgba(0,0,0,0.12)] overflow-hidden flex flex-col transform hover:-translate-y-2 transition-transform duration-500 cursor-pointer">
                  {/* Dynamic Island */}
                  <div className="absolute top-3 left-1/2 -translate-x-1/2 w-[90px] h-[28px] bg-[#111111] rounded-full z-30"></div>

                  {/* App UI */}
                  <div className="w-full h-full bg-[#F8FAFC] flex flex-col relative z-10 pt-14 pb-6 overflow-y-auto no-scrollbar">
                    <div className="px-5 mb-5 flex justify-between items-center shrink-0">
                      <div className="flex items-center gap-2">
                        {theme === "original" ? (
                          <img
                            src="/avenzo-svg.svg"
                            className="h-4 object-contain filter brightness-0"
                            alt="Avenzo"
                          />
                        ) : (
                          <div
                            className="h-4 w-4"
                            style={{
                              backgroundColor: "#111111",
                              WebkitMaskImage: "url(/avenzo-svg.svg)",
                              WebkitMaskSize: "contain",
                              WebkitMaskRepeat: "no-repeat",
                              WebkitMaskPosition: "center",
                              maskImage: "url(/avenzo-svg.svg)",
                              maskSize: "contain",
                              maskRepeat: "no-repeat",
                              maskPosition: "center",
                            }}
                            title="Avenzo"
                          ></div>
                        )}
                        <span className="font-bold tracking-widest uppercase text-sm text-gray-900">
                          AVENZO
                        </span>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-xs shadow-sm">
                        A
                      </div>
                    </div>

                    <div className="px-4 flex flex-col gap-4">
                      {/* Vermögen Card */}
                      <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-5 text-white shadow-lg relative overflow-hidden shrink-0">
                        <div className="absolute -right-10 -bottom-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
                        <div className="relative z-10">
                          <div className="text-[9px] font-bold uppercase tracking-[0.15em] text-blue-100/80 mb-1.5">
                            VERMÖGEN (65J)
                          </div>
                          <div className="text-2xl font-bold tracking-tight mb-3">
                            CHF 418.420
                          </div>
                          <div className="inline-flex items-center gap-1.5 bg-white/20 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-bold">
                            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                            </svg>
                            + CHF 182.000 <span className="opacity-70 font-semibold ml-0.5">+77%</span>
                          </div>
                        </div>
                      </div>

                      {/* Protection Card */}
                      <div className="bg-emerald-50 rounded-2xl p-4 border border-emerald-100 shrink-0">
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-2">
                            <svg className="w-4 h-4 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                            </svg>
                            <h4 className="text-xs font-bold text-emerald-900">Voll Abgesichert</h4>
                          </div>
                        </div>
                        <div className="flex flex-col gap-2">
                          <div className="flex justify-between items-center text-[9px]">
                            <span className="text-emerald-700 font-medium">Todesfallkapital</span>
                            <span className="font-bold text-emerald-900">CHF 400.000</span>
                          </div>
                          <div className="flex justify-between items-center text-[9px]">
                            <span className="text-emerald-700 font-medium">Erwerbsunfähigkeit</span>
                            <span className="font-bold text-emerald-900">Gedeckt</span>
                          </div>
                        </div>
                      </div>

                      {/* Action Button */}
                      <div className="mt-auto pt-4 shrink-0 w-full">
                        <button className="w-full bg-[#111111] text-white font-bold text-xs py-3.5 rounded-xl flex items-center justify-center gap-2 shadow-md hover:bg-gray-800 transition-colors">
                          Jetzt wechseln
                          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* MOCKUP 3: TREUHAND (Dashboard wrapped in mobile for consistency or centered) */}
              <div
                className={\`absolute transition-all duration-700 pointer-events-auto \${activeTab === "treuhand" ? "opacity-100 translate-y-0 scale-100 z-20" : "opacity-0 translate-y-12 scale-95 z-0"}\`}
              >
                <div className="relative w-[280px] h-[580px] bg-white rounded-[3rem] border-[8px] border-[#111111] shadow-[0_30px_60px_rgba(0,0,0,0.12)] overflow-hidden flex flex-col transform hover:-translate-y-2 transition-transform duration-500 cursor-pointer">
                  {/* Dynamic Island */}
                  <div className="absolute top-3 left-1/2 -translate-x-1/2 w-[90px] h-[28px] bg-[#111111] rounded-full z-30"></div>

                  {/* App UI */}
                  <div className="w-full h-full bg-gray-50 flex flex-col relative z-10 pt-14 pb-6 overflow-hidden">
                    <div className="px-5 mb-4 flex justify-between items-center shrink-0">
                      <span className="font-bold tracking-widest uppercase text-sm text-gray-900">
                        PORTAL
                      </span>
                      <div className="w-8 h-8 bg-black rounded-md flex items-center justify-center text-[var(--color-payline-accent)] font-bold text-xs shadow-sm">
                        A
                      </div>
                    </div>

                    <div className="px-4 flex flex-col gap-4 overflow-y-auto no-scrollbar pb-10">
                      <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
                         <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Q3 Umsatz</div>
                         <div className="text-2xl font-black text-gray-900 mb-1">45.200 <span className="text-sm text-gray-500">CHF</span></div>
                         <div className="text-[10px] font-semibold text-green-500 flex items-center gap-1">
                           <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
                           Geprüft & Freigegeben
                         </div>
                      </div>

                      <div className="bg-purple-50 p-4 rounded-2xl border border-purple-100 flex flex-col gap-3">
                        <div className="flex gap-3 relative z-10 w-full">
                          <div className="w-6 h-6 rounded-full bg-gray-200 shrink-0 overflow-hidden shadow-sm">
                            <img src="/denis-whitebg-removebg-preview.png" className="w-full h-full object-cover" />
                          </div>
                          <div className="bg-white p-2.5 rounded-xl rounded-tl-sm text-[10px] text-gray-800 font-medium shadow-sm w-full leading-relaxed border border-gray-100">
                            Hallo! Die MWST-Abrechnung ist bereit.
                          </div>
                        </div>
                        <div className="flex justify-end relative z-10 w-full">
                          <div className="bg-[#111111] text-white p-2.5 rounded-xl rounded-tr-sm text-[10px] font-medium shadow-sm max-w-[85%]">
                            Perfekt! Mache den Sync.
                          </div>
                        </div>
                      </div>

                      {/* Action Button */}
                      <div className="mt-2 shrink-0 w-full">
                        <button className="w-full bg-white border border-gray-200 text-gray-900 font-bold text-xs py-3.5 rounded-xl flex items-center justify-center gap-2 shadow-sm hover:bg-gray-50 transition-colors">
                          Zum Web Portal
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
`;

const startIndex = content.indexOf('{/* Interactive Container Layout (Tabs on Left + Content on Right) */}');
if (startIndex !== -1) {
  content = content.substring(0, startIndex) + newInteractiveSection;
  fs.writeFileSync(path, content, 'utf8');
  console.log('Successfully updated the interactive section.');
} else {
  console.error('Could not find the start index.');
}
