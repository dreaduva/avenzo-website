import { useState } from "react";

type TabId = 'steuer' | 'versicherung' | 'treuhand';

interface TabData {
  id: TabId;
  label: string;
  subtitle: string;
  badge: string;
  heading: React.ReactNode;
  description: string;
  ctas: { label: string; style: string; href?: string }[];
  bg: string;
  dotColor: string;
  badgeColor: string;
}

const tabs: TabData[] = [
  {
    id: 'steuer',
    label: 'Avenzo Steuern',
    subtitle: 'Smart AI Tax Scan',
    badge: 'AI TECHNOLOGY',
    heading: (
      <>
        Maximale<br />
        Abzüge,<br />
        <span className="text-[#8B9A2B]">minimaler<br />Aufwand.</span>
      </>
    ),
    description: 'Unser KI-basierter Steuer-Scan findet automatisch versteckte Sparpotenziale in Sekunden.',
    ctas: [
      { label: 'Scan starten', style: 'dark' },
      { label: 'Preise ansehen', style: 'outline' },
    ],
    bg: 'from-[#f5f7e6]/80 via-[#f9faf0]/40 to-[#f0f3d8]/60',
    dotColor: '#8B9A2B',
    badgeColor: '#8B9A2B',
  },
  {
    id: 'versicherung',
    label: 'Avenzo Insurance',
    subtitle: 'Policy Checkup',
    badge: 'SMART PORTFOLIO',
    heading: (
      <>
        Sicherheit<br />
        neu<br />
        <span className="text-[#3B5BDB]">durchdacht.</span>
      </>
    ),
    description: 'Lückenlose Absicherung und optimierte Prämien durch unseren intelligenten Portfolio-Check.',
    ctas: [
      { label: 'Checkup starten', style: 'blue' },
    ],
    bg: 'from-blue-50/50 via-white/30 to-indigo-50/30',
    dotColor: '#3B5BDB',
    badgeColor: '#3B5BDB',
  },
  {
    id: 'treuhand',
    label: 'Avenzo Treuhand',
    subtitle: 'Business Dashboard',
    badge: 'BUSINESS ENGINE',
    heading: (
      <>
        Echtzeit<br />
        Finanzen<br />
        <span className="text-[#7C3AED]">für KMU.</span>
      </>
    ),
    description: 'Vom Beleg bis zur Bilanz – vollautomatisierte Treuhand-Services für dein Unternehmen.',
    ctas: [
      { label: 'Portal öffnen', style: 'purple' },
    ],
    bg: 'from-purple-50/40 via-white/20 to-fuchsia-50/30',
    dotColor: '#7C3AED',
    badgeColor: '#7C3AED',
  },
];

/* ─── CTA Button ─── */
function CtaButton({ label, style }: { label: string; style: string }) {
  const base = "inline-flex items-center justify-center px-8 py-4 rounded-full font-bold text-[0.95rem] transition-all duration-300 hover:-translate-y-0.5 cursor-pointer";
  const variants: Record<string, string> = {
    dark:    `${base} bg-gray-900 text-white hover:bg-gray-800 shadow-lg shadow-gray-900/10`,
    blue:    `${base} bg-[#3B5BDB] text-white hover:bg-[#3350c4] shadow-lg shadow-blue-600/20`,
    purple:  `${base} bg-[#7C3AED] text-white hover:bg-[#6d31d4] shadow-lg shadow-purple-600/20`,
    outline: `${base} bg-white text-gray-900 border border-gray-200 hover:border-gray-300 hover:shadow-md`,
  };
  return <button className={variants[style] ?? variants.outline}>{label}</button>;
}

/* ─── Main Hero ─── */
export function Hero() {
  const [activeTab, setActiveTab] = useState<TabId>('versicherung');
  const current = tabs.find(t => t.id === activeTab)!;

  return (
    <header className="relative min-h-screen overflow-hidden">
      {/* Animated background tint */}
      <div
        className={`absolute inset-0 bg-gradient-to-br transition-all duration-700 ease-out ${current.bg}`}
      />

      {/* Subtle radial glow behind mockup area */}
      <div
        className="absolute top-1/2 right-0 w-[600px] h-[600px] -translate-y-1/2 rounded-full blur-[120px] opacity-20 transition-colors duration-700 pointer-events-none"
        style={{ backgroundColor: current.dotColor }}
      />

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pt-32 md:pt-40 lg:pt-44 pb-16 lg:pb-24">
        {/* Grid: tabs | content | mockup */}
        <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr_420px] xl:grid-cols-[240px_1fr_460px] gap-6 lg:gap-4 items-center min-h-[70vh]">

          {/* ── LEFT: Tab Navigation ── */}
          <nav className="flex lg:flex-col gap-2 lg:gap-1 justify-center lg:justify-start lg:self-center order-2 lg:order-1">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`group flex items-center gap-3 px-4 py-3.5 rounded-2xl text-left transition-all duration-300 w-full cursor-pointer ${
                    isActive
                      ? 'bg-white/90 dark:bg-white/10 shadow-[0_2px_12px_rgba(0,0,0,0.06)] border border-gray-200/70 dark:border-white/10'
                      : 'bg-transparent hover:bg-white/50 dark:hover:bg-white/5 border border-transparent'
                  }`}
                >
                  <div
                    className="w-3 h-3 rounded-full shrink-0 transition-all duration-300"
                    style={{
                      backgroundColor: isActive ? tab.dotColor : undefined,
                    }}
                  >
                    {!isActive && (
                      <div className="w-full h-full rounded-full bg-gray-300 dark:bg-gray-600" />
                    )}
                  </div>
                  <div className="min-w-0">
                    <div className={`text-sm font-bold leading-tight transition-colors duration-300 whitespace-nowrap ${
                      isActive ? 'text-gray-900 dark:text-white' : 'text-gray-400 dark:text-gray-500'
                    }`}>
                      {tab.label}
                    </div>
                    <div className={`text-xs leading-tight mt-0.5 transition-colors duration-300 ${
                      isActive ? 'text-gray-500 dark:text-gray-400' : 'text-gray-300 dark:text-gray-600'
                    }`}>
                      {tab.subtitle}
                    </div>
                  </div>
                </button>
              );
            })}
          </nav>

          {/* ── CENTER: Hero Content ── */}
          <div className="text-center lg:self-center order-1 lg:order-2 lg:px-4 xl:px-8">
            {/* Badge */}
            <div className="flex justify-center mb-8 lg:mb-10">
              <span
                className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full border text-[0.7rem] font-bold uppercase tracking-[0.18em] transition-all duration-500"
                style={{
                  color: current.badgeColor,
                  borderColor: `${current.badgeColor}30`,
                }}
              >
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: current.badgeColor }}
                />
                {current.badge}
              </span>
            </div>

            {/* Heading */}
            <h1
              key={activeTab}
              className="text-[2.8rem] sm:text-5xl md:text-6xl xl:text-[4.2rem] font-extrabold text-gray-900 dark:text-white leading-[1.08] tracking-tight mb-8 animate__animated animate__fadeIn"
              style={{ animationDuration: '0.4s' }}
            >
              {current.heading}
            </h1>

            {/* Description */}
            <p
              key={`desc-${activeTab}`}
              className="text-[1.05rem] text-gray-500 dark:text-gray-400 max-w-md mx-auto mb-10 leading-relaxed font-medium animate__animated animate__fadeIn"
              style={{ animationDuration: '0.4s', animationDelay: '0.05s' }}
            >
              {current.description}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row justify-center gap-3">
              {current.ctas.map((cta) => (
                <CtaButton key={cta.label} label={cta.label} style={cta.style} />
              ))}
            </div>
          </div>

          {/* ── RIGHT: Device Mockup ── */}
          <div className="relative order-3 flex justify-center lg:justify-end lg:self-center min-h-[400px] lg:min-h-[560px]">
            {/* Steuer Phone */}
            <MockupWrapper active={activeTab === 'steuer'}>
              <PhoneSteuer />
            </MockupWrapper>

            {/* Versicherung Phone */}
            <MockupWrapper active={activeTab === 'versicherung'}>
              <PhoneVersicherung />
            </MockupWrapper>

            {/* Treuhand Browser */}
            <MockupWrapper active={activeTab === 'treuhand'}>
              <BrowserTreuhand />
            </MockupWrapper>
          </div>

        </div>
      </div>
    </header>
  );
}

/* ─── Mockup transition wrapper ─── */
function MockupWrapper({ active, children }: { active: boolean; children: React.ReactNode }) {
  return (
    <div
      className={`transition-all duration-500 ease-out w-full flex justify-center lg:justify-end ${
        active
          ? 'relative opacity-100 translate-y-0 scale-100'
          : 'absolute inset-0 opacity-0 translate-y-6 scale-[0.97] pointer-events-none'
      }`}
    >
      {children}
    </div>
  );
}

/* ─── Phone: Steuer (dark frame, scan animation) ─── */
function PhoneSteuer() {
  return (
    <div className="relative w-[270px] sm:w-[290px] h-[540px] sm:h-[580px] bg-[#1a1a2e] rounded-[2.8rem] border-[7px] border-gray-800 shadow-[0_25px_50px_rgba(0,0,0,0.25),_0_0_60px_rgba(139,154,43,0.08)] overflow-hidden">
      <DynamicIsland />
      <div className="w-full h-full bg-white dark:bg-[#0a0f0d] pt-14 pb-8 flex flex-col">
        {/* Top bar */}
        <div className="px-5 py-3 flex justify-between items-center border-b border-gray-100 dark:border-white/5">
          <img src="/avenzo_icon.svg" className="h-4 logo-main object-contain" alt="Avenzo" />
          <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-800 overflow-hidden border-2 border-white dark:border-gray-700">
            <img src="/denis-whitebg-removebg-preview.png" className="w-full h-full object-cover" alt="" />
          </div>
        </div>
        {/* Scan content */}
        <div className="flex-grow flex flex-col items-center justify-center text-center px-6 relative overflow-hidden">
          <div className="relative w-28 h-36 bg-white dark:bg-[#111] border border-gray-200 dark:border-white/10 rounded-lg shadow-2xl mb-6 flex flex-col p-3 overflow-hidden">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-4 h-4 bg-[#8B9A2B]/20 rounded-sm" />
              <div className="w-12 h-2 bg-gray-200 dark:bg-gray-700 rounded-full" />
            </div>
            <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full mb-2" />
            <div className="w-3/4 h-2 bg-gray-200 dark:bg-gray-700 rounded-full mb-2" />
            <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full mb-2" />
            <div className="w-5/6 h-2 bg-gray-200 dark:bg-gray-700 rounded-full mt-auto" />
            {/* Scan laser */}
            <div className="absolute left-0 right-0 h-[2px] bg-[#8B9A2B] shadow-[0_0_12px_2px_rgba(139,154,43,0.8)] anim-scan z-10 w-full" />
            <div className="absolute left-0 right-0 h-16 bg-gradient-to-b from-transparent to-[#8B9A2B]/20 anim-scan -translate-y-full z-0 w-full" />
          </div>
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1.5">Dokumentenscan</h3>
          <p className="text-sm text-gray-500 font-medium">Lohnausweis 2025 wird extrahiert...</p>
        </div>
      </div>
    </div>
  );
}

/* ─── Phone: Versicherung (light frame, portfolio) ─── */
function PhoneVersicherung() {
  return (
    <div className="relative w-[270px] sm:w-[290px] h-[540px] sm:h-[580px] bg-white rounded-[2.8rem] border-[7px] border-gray-200 shadow-[0_25px_50px_rgba(59,130,246,0.12),_0_0_60px_rgba(59,130,246,0.06)] overflow-hidden">
      <DynamicIsland />
      <div className="w-full h-full bg-[#F8FAFC] pt-14 pb-4 flex flex-col overflow-y-auto no-scrollbar">
        {/* Navbar */}
        <div className="flex justify-between items-center px-5 mb-4 shrink-0">
          <div className="flex items-center gap-2">
            <img src="/avenzo_icon.svg" className="h-4 object-contain" alt="Avenzo" />
            <span className="font-bold text-slate-900 text-[13px] tracking-tight">AVENZO</span>
          </div>
          <div className="w-7 h-7 rounded-full bg-[#3B5BDB] flex items-center justify-center text-white text-xs font-bold">A</div>
        </div>

        <div className="px-4 flex flex-col gap-3">
          {/* Blue Hero Card */}
          <div className="bg-gradient-to-br from-[#3B5BDB] to-[#4338CA] rounded-[1.2rem] p-4 text-white shadow-xl relative overflow-hidden shrink-0">
            <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
            <div className="relative z-10">
              <div className="text-[8px] font-bold uppercase tracking-[0.15em] text-blue-100/80 mb-1">VERMÖGEN (65J)</div>
              <div className="text-[22px] font-bold tracking-tight mb-3 leading-none">CHF 418.420</div>
              <div className="inline-flex items-center gap-1.5 bg-white/20 backdrop-blur-md px-2 py-0.5 rounded-full text-[9px] font-bold">
                <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                + CHF 182.000 <span className="opacity-70 font-semibold ml-0.5">+77%</span>
              </div>
            </div>
          </div>

          {/* Chart Card */}
          <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100 shrink-0">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-[10px] font-bold text-slate-900 tracking-tight uppercase">Vermögensentwicklung</h3>
              <div className="bg-slate-50 px-2 py-0.5 rounded-lg text-[8px] font-bold text-slate-500">30 Jahre</div>
            </div>
            <div className="relative h-20 w-full flex items-end mb-3">
              <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between text-[7px] text-slate-400 font-medium py-1 w-6">
                <span>418k</span><span>300k</span><span>150k</span><span>0</span>
              </div>
              <div className="w-full h-full pl-7 overflow-hidden relative">
                <svg className="w-full h-full" viewBox="0 0 200 100" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="heroChartFill" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#3B5BDB" stopOpacity="0.15" />
                      <stop offset="100%" stopColor="#3B5BDB" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path d="M0 85 Q 60 70, 120 40 T 200 15 L 200 100 L 0 100 Z" fill="url(#heroChartFill)" />
                  <path d="M0 85 Q 60 75, 120 65 T 200 55" fill="none" stroke="#94A3B8" strokeWidth="1.5" strokeDasharray="4 4" />
                  <path d="M0 85 Q 60 70, 120 40 T 200 15" fill="none" stroke="#3B5BDB" strokeWidth="2.5" />
                </svg>
              </div>
            </div>
            <div className="flex items-center gap-4 text-[8px] font-semibold text-slate-500 pl-7">
              <div className="flex items-center gap-1.5"><div className="w-1.5 h-1.5 rounded-full bg-[#3B5BDB]" />Avenzo</div>
              <div className="flex items-center gap-1.5"><div className="w-1.5 h-1.5 rounded-full bg-slate-400" />Bank 3a</div>
            </div>
          </div>

          {/* Protection Status */}
          <div className="bg-emerald-50 rounded-xl p-3 border border-emerald-100 shrink-0">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <svg className="w-3.5 h-3.5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                <h4 className="text-[11px] font-bold text-emerald-900">Voll Abgesichert</h4>
              </div>
              <div className="w-4 h-4 rounded-full bg-emerald-500 flex items-center justify-center text-white">
                <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
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
        </div>
      </div>
    </div>
  );
}

/* ─── Browser: Treuhand (portal mockup) ─── */
function BrowserTreuhand() {
  return (
    <div className="relative w-full max-w-[380px] sm:max-w-[420px] bg-white dark:bg-[#0f1211] rounded-xl border border-gray-200 dark:border-white/10 shadow-[0_25px_50px_rgba(124,58,237,0.1),_0_0_60px_rgba(124,58,237,0.05)] overflow-hidden">
      {/* Browser Chrome */}
      <div className="h-8 bg-gray-50 dark:bg-[#1a1f1d] border-b border-gray-200 dark:border-white/5 flex items-center px-3 gap-1.5 shrink-0">
        <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
        <div className="mx-auto flex items-center gap-1.5 text-[10px] font-medium text-gray-400">
          <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
          portal.avenzo.ch
        </div>
      </div>

      {/* Browser Content */}
      <div className="flex" style={{ minHeight: 360 }}>
        {/* Sidebar */}
        <div className="w-[34%] border-r border-gray-100 dark:border-white/5 p-3 flex flex-col gap-1.5 bg-gray-50/60 dark:bg-transparent">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-5 h-5 rounded bg-[#7C3AED] flex items-center justify-center text-white text-[7px] font-bold">A</div>
            <span className="text-[10px] font-bold text-gray-900 dark:text-white">Business Pro</span>
          </div>
          <div className="text-[7px] font-bold text-gray-400 uppercase tracking-widest mt-1 mb-1">WORKSPACE</div>
          <div className="bg-purple-50 dark:bg-purple-500/10 text-[#7C3AED] p-2 rounded-lg text-[9px] font-bold flex items-center gap-1.5">
            <span>🌙</span> Jahresabschluss
          </div>
          <div className="text-gray-500 p-2 rounded-lg text-[9px] font-medium flex items-center gap-1.5">
            <svg className="w-3 h-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
            Dokumente
          </div>
          <div className="text-gray-500 p-2 rounded-lg text-[9px] font-medium flex items-center gap-1.5 mt-auto">
            <svg className="w-3 h-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
            Experten-Chat
          </div>
        </div>

        {/* Main area */}
        <div className="w-[66%] p-4 flex flex-col gap-3 bg-white dark:bg-[#0a0f0d]">
          {/* Advisor message */}
          <div className="flex gap-2 mt-1">
            <div className="w-6 h-6 rounded-full bg-gray-200 dark:bg-gray-800 shrink-0 overflow-hidden">
              <img src="/denis-whitebg-removebg-preview.png" className="w-full h-full object-cover" alt="" />
            </div>
            <div className="bg-gray-100 dark:bg-white/5 p-2.5 rounded-xl rounded-tl-sm text-[9px] text-gray-700 dark:text-gray-200 font-medium leading-relaxed">
              Hallo! Ich habe die MWST-Abrechnung H1 2025 finalisiert. Die Zahlungsanweisung liegt im Portal bereit. Starten wir den Import in die Buchhaltung?
            </div>
          </div>

          {/* Reply bubble */}
          <div className="flex justify-end mt-1">
            <div className="bg-gray-900 dark:bg-gray-100 dark:text-gray-900 text-white p-2.5 rounded-xl rounded-tr-sm text-[9px] font-bold leading-relaxed max-w-[85%]">
              👍 Perfekt! Ich mache direkt den Sync. Danke für die schnelle Erledigung.
            </div>
          </div>

          {/* Revenue card */}
          <div className="mt-auto border border-gray-100 dark:border-white/10 rounded-xl p-3 flex justify-between items-center bg-gray-50/50 dark:bg-[#111]/50">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-purple-50 dark:bg-purple-500/10 text-[#7C3AED] flex items-center justify-center">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" /></svg>
              </div>
              <div>
                <div className="text-[9px] font-bold text-gray-900 dark:text-white uppercase tracking-wider">Q3 UMSATZ</div>
                <div className="text-[8px] font-semibold text-emerald-600">✓ Geprüft & Freigegeben</div>
              </div>
            </div>
            <div className="text-sm font-black text-gray-900 dark:text-white">45.200 <span className="text-[9px] text-gray-400 font-bold">CHF</span></div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Shared: Dynamic Island ─── */
function DynamicIsland() {
  return (
    <div className="absolute top-3 left-1/2 -translate-x-1/2 w-[80px] h-[26px] bg-black rounded-full z-30 flex items-center justify-end px-3">
      <div className="w-3 h-3 rounded-full bg-gray-800 border border-gray-700" />
    </div>
  );
}
