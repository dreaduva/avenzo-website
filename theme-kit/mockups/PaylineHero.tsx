import { useState, useRef, useEffect, useCallback } from "react";
import lohnausweis from "../assets/lohnsteuerausweis.png";

type TabId = "steuer" | "versicherung" | "treuhand";

interface Tab {
  id: TabId;
  pill: string;
  appName: string;
  heading: React.ReactNode;
  mobileHeading: string;
  mobileTagline: string;
  description: string;
  available: boolean;
  color: string;
  bgFrom: string;
  bgTo: string;
}

const tabs: Tab[] = [
  {
    id: "steuer",
    pill: "Steuer App",
    appName: "Avenzo Steuererklärung",
    heading: (
      <>
        Maximale Steuerabzüge.
        <br />
        <span style={{ color: "var(--color-accent-dark)" }}>Null Aufwand.</span>
      </>
    ),
    mobileHeading: "Maximale Steuerabzüge. Null Aufwand.",
    mobileTagline: "KI findet versteckte Abzüge in Sekunden.",
    description:
      "Lade deine Dokumente hoch — unsere KI findet in Sekunden versteckte Abzüge, die du sonst verpasst hättest.",
    available: true,
    color: "var(--color-accent-dark)",
    bgFrom: "from-[#f0fce4]",
    bgTo: "to-[#e8f9d4]",
  },
  {
    id: "versicherung",
    pill: "Versicherung App",
    appName: "Avenzo Insurance",
    heading: (
      <>
        Überversichert? Unterversichert?
        <br />
        <span className="text-app-secondary">Jetzt Klarheit.</span>
      </>
    ),
    mobileHeading: "Über- oder unterversichert? Jetzt Klarheit.",
    mobileTagline: "Portfolio-Check deckt Lücken auf, senkt Prämien.",
    description:
      "Unser Portfolio-Check analysiert deine Policen, deckt Lücken auf und senkt deine Prämien — transparent und unabhängig.",
    available: false,
    color: "var(--color-app-secondary)",
    bgFrom: "from-[#eef1ff]",
    bgTo: "to-[#e4e9ff]",
  },
  {
    id: "treuhand",
    pill: "Treuhand App",
    appName: "Avenzo Treuhand",
    heading: (
      <>
        Buchhaltung, die
        <br />
        <span className="text-app-tertiary">für dich arbeitet.</span>
      </>
    ),
    mobileHeading: "Buchhaltung, die für dich arbeitet.",
    mobileTagline: "Vom Beleg bis zur Bilanz — alles automatisiert.",
    description:
      "Vom Beleg bis zur Bilanz — alles automatisiert. Echtzeit-Dashboard und persönlicher Experte für KMU.",
    available: false,
    color: "var(--color-app-tertiary)",
    bgFrom: "from-[#f3eeff]",
    bgTo: "to-[#ece4ff]",
  },
];

export function PaylineHero({ theme }: { theme: "neon" | "original" }) {
  const [activeTab, setActiveTab] = useState<TabId>("steuer");
  const current = tabs.find((t) => t.id === activeTab)!;
  const scrollRef = useRef<HTMLDivElement>(null);
  const [mobileActiveIdx, setMobileActiveIdx] = useState(0);

  const goNext = () => {
    const idx = tabs.findIndex((t) => t.id === activeTab);
    setActiveTab(tabs[(idx + 1) % tabs.length].id);
  };

  const goPrev = () => {
    const idx = tabs.findIndex((t) => t.id === activeTab);
    setActiveTab(tabs[(idx - 1 + tabs.length) % tabs.length].id);
  };

  // Sync mobile scroll position to active dot
  const handleScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = el.offsetWidth * 0.85;
    const idx = Math.round(el.scrollLeft / cardWidth);
    setMobileActiveIdx(Math.min(idx, tabs.length - 1));
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", handleScroll, { passive: true });
    return () => el.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Calculate phone scale to fill the mockup container
  useEffect(() => {
    const update = () => {
      document.documentElement.style.setProperty(
        "--phone-scale",
        String(Math.min((window.innerWidth * 0.85 - 32) / 285, (window.innerHeight * 0.65) / 600, 0.72))
      );
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <section className="pt-20 sm:pt-32 pb-6 sm:pb-10 sm:px-4 max-w-7xl mx-auto flex flex-col items-center text-center">
      {/* H1 */}
      <div className="max-w-4xl mx-auto mb-6 sm:mb-16 mt-2 sm:mt-4 px-5 sm:px-0">
        <h1 className="text-[2.25rem] sm:text-4xl md:text-[5rem] font-medium tracking-tight text-gray-900 mb-3 sm:mb-6 leading-[1.1] sm:leading-[1.05]">
          Finanzen neu gedacht — <br className="hidden sm:block" />für eine bessere Zukunft.
        </h1>
        <p className="text-[13px] sm:text-base md:text-lg text-gray-500 max-w-2xl mx-auto font-medium leading-relaxed">
          Steuern, Versicherungen und Buchhaltung — in drei Apps, die dir
          sofort mehr Geld zurückholen und Stunden an Aufwand ersparen.
        </p>
      </div>

      {/* ═══════════════════════════════════════════
          MOBILE: Horizontal snap-scroll cards
          ═══════════════════════════════════════════ */}
      <div className="sm:hidden w-full">
        {/* Scrollable card track */}
        <div
          ref={scrollRef}
          className="flex gap-3 overflow-x-auto snap-x snap-mandatory scroll-smooth pl-4 pr-4 pb-4"
          style={{ scrollbarWidth: "none", WebkitOverflowScrolling: "touch" }}
        >
          {tabs.map((tab) => (
            <div
              key={tab.id}
              className="snap-center shrink-0 w-[85%] rounded-[1.25rem] overflow-hidden flex flex-col shadow-[0_4px_24px_-2px_rgba(0,0,0,0.08),0_1px_3px_rgba(0,0,0,0.04)]"
            >
              {/* Mockup showcase — clipped tight to phone */}
              <div className={`relative bg-gradient-to-b ${tab.bgFrom} ${tab.bgTo} flex justify-center items-start overflow-hidden`} style={{ height: `calc(500px * var(--phone-scale, 0.58) + 8px)` }}>
                <div className="flex justify-center pt-2" style={{ transform: "scale(var(--phone-scale, 0.58))", transformOrigin: "top center" }}>
                  {tab.id === "steuer" && <PhoneSteuer theme={theme} />}
                  {tab.id === "versicherung" && <PhoneVersicherung theme={theme} />}
                  {tab.id === "treuhand" && <BrowserTreuhand />}
                </div>

                {/* Coming soon overlay */}
                {!tab.available && (
                  <div className="absolute top-3.5 left-3.5 z-10 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/80 backdrop-blur-sm text-[10px] font-bold text-gray-500 shadow-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-status-pending animate-pulse" />
                    Coming soon
                  </div>
                )}
              </div>

              {/* Bottom strip */}
              <div className="bg-white px-5 pt-4 pb-5">
                <h3 className="text-[15px] font-semibold tracking-tight text-gray-900 leading-snug">
                  {tab.mobileHeading}
                </h3>
                <p className="text-[12.5px] text-gray-500 mt-1 mb-4 leading-relaxed">
                  {tab.mobileTagline}
                </p>

                <a href="#" className={`flex items-center justify-center gap-2 w-full py-3 rounded-xl font-semibold text-[13px] active:scale-[0.98] transition-transform ${
                  tab.available
                    ? "bg-gray-900 text-white"
                    : "bg-gray-100 text-gray-900"
                }`}>
                  {tab.available ? "Jetzt starten" : "Mehr erfahren"}
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2 mt-1 mb-1">
          {tabs.map((_, i) => (
            <div
              key={i}
              className={`h-[5px] rounded-full transition-all duration-300 ${
                i === mobileActiveIdx ? "w-6 bg-dark" : "w-[5px] bg-gray-200"
              }`}
            />
          ))}
        </div>
      </div>

      {/* ═══════════════════════════════════════════
          DESKTOP: Original tabbed card (unchanged)
          ═══════════════════════════════════════════ */}
      <div className="hidden sm:block w-full max-w-6xl mx-auto px-3 sm:px-0">
        <div className="bg-surface rounded-[2.5rem] relative">
          {/* Arrows on card edges */}
          <button
            onClick={goPrev}
            className="hidden lg:flex absolute -left-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white border border-gray-200 items-center justify-center text-gray-300 hover:text-gray-900 hover:border-gray-300 hover:shadow-lg hover:scale-110 transition-all duration-300 cursor-pointer shadow-sm"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={goNext}
            className="hidden lg:flex absolute -right-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white border border-gray-200 items-center justify-center text-gray-300 hover:text-gray-900 hover:border-gray-300 hover:shadow-lg hover:scale-110 transition-all duration-300 cursor-pointer shadow-sm"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Tabs inside card */}
          <div className="flex justify-center pt-7 pb-1 px-6">
            <div className="inline-flex items-center bg-white rounded-full p-1 gap-0.5 border border-gray-100 shadow-sm">
              {tabs.map((tab) => {
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`relative px-6 py-2.5 rounded-full text-sm font-semibold cursor-pointer ${
                      isActive ? "text-white" : "text-gray-400 hover:text-gray-600"
                    }`}
                  >
                    {isActive && (
                      <div className="absolute inset-0 rounded-full bg-dark shadow-sm" />
                    )}
                    <span className="relative z-10">{tab.pill}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-2 items-center p-8 lg:p-10 xl:p-12 lg:min-h-[620px]">
            {/* Left: Info */}
            <div key={activeTab} className="text-left pl-2 lg:pl-6 min-h-[360px] flex flex-col justify-center tab-fade-in">
              <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-5">
                {current.appName}
              </div>
              <h2 className="text-4xl lg:text-[2.8rem] xl:text-5xl font-medium tracking-tight text-gray-900 leading-[1.1] mb-5">
                {current.heading}
              </h2>
              <p className="text-base lg:text-lg text-gray-500 font-medium leading-relaxed max-w-lg mb-8">
                {current.description}
              </p>

              {current.available ? (
                <div className="flex flex-wrap items-center gap-3">
                  <a href="#" className="inline-flex items-center gap-2.5 bg-dark text-white pl-4 pr-5 py-2.5 rounded-xl hover:bg-gray-800 transition-colors duration-200 cursor-pointer shadow-sm">
                    <AppleIcon />
                    <div className="text-left">
                      <div className="text-[8px] font-medium text-gray-400 leading-none">Download on the</div>
                      <div className="text-[13px] font-bold leading-tight">App Store</div>
                    </div>
                  </a>
                  <a href="#" className="inline-flex items-center gap-2.5 bg-dark text-white pl-4 pr-5 py-2.5 rounded-xl hover:bg-gray-800 transition-colors duration-200 cursor-pointer shadow-sm">
                    <PlayStoreIcon />
                    <div className="text-left">
                      <div className="text-[8px] font-medium text-gray-400 leading-none">GET IT ON</div>
                      <div className="text-[13px] font-bold leading-tight">Google Play</div>
                    </div>
                  </a>
                  <a href="#" className="inline-flex items-center gap-2 bg-white text-gray-900 border border-gray-200 pl-4 pr-5 py-2.5 rounded-xl hover:border-gray-300 hover:shadow-sm transition-colors duration-200 cursor-pointer">
                    <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5a17.92 17.92 0 01-8.716-2.247m0 0A8.966 8.966 0 013 12c0-1.264.26-2.466.733-3.559" />
                    </svg>
                    <div className="text-left">
                      <div className="text-[8px] font-medium text-gray-400 leading-none">Im Browser nutzen</div>
                      <div className="text-[13px] font-bold leading-tight">Web App</div>
                    </div>
                  </a>
                </div>
              ) : (
                <div className="flex flex-col gap-4">
                  <div className="flex flex-wrap items-center gap-4">
                    <div className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white border border-gray-200 text-sm font-semibold text-gray-400">
                      <div className="w-1.5 h-1.5 rounded-full bg-status-pending animate-pulse" />
                      Bald verfügbar
                    </div>
                    <a href="#" className="group inline-flex items-center gap-2 bg-dark text-white px-6 py-3 rounded-full font-bold text-sm hover:bg-gray-800 transition-colors duration-200 cursor-pointer shadow-sm">
                      Berater kontaktieren
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/* Right: Mockup */}
            <div key={`mockup-${activeTab}`} className="flex items-center justify-center lg:justify-end h-[500px] lg:h-[585px] tab-mockup-in">
              {activeTab === "steuer" && <PhoneSteuer theme={theme} />}
              {activeTab === "versicherung" && <PhoneVersicherung theme={theme} />}
              {activeTab === "treuhand" && <BrowserTreuhand />}
            </div>
          </div>

          {/* Detail link — card footer */}
          <div className="mx-10 lg:mx-12 border-t border-gray-200/60">
            <a href="#services" className="group flex items-center justify-center gap-2 py-5 text-[13px] font-semibold text-gray-400 hover:text-gray-900 transition-colors duration-300 cursor-pointer">
              Alle Details anzeigen
              <svg className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Phone: Steuer ─── */
function PhoneSteuer({ }: { theme: string }) {
  return (
    <div className="relative w-[220px] sm:w-[270px] md:w-[285px] h-[450px] sm:h-[555px] md:h-[585px] bg-device-body rounded-[2rem] sm:rounded-[2.8rem] border-[5px] sm:border-[6px] border-device-border shadow-device overflow-hidden">
      <DynamicIsland />
      <div className="w-full h-full bg-white pt-12 flex flex-col">
        {/* App header */}
        <div className="px-5 pt-2.5 pb-2 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img src="/avenzo-website/avenzo_icon.svg" className="h-[16px] w-auto object-contain" style={{ filter: "brightness(0)" }} alt="Avenzo" />
            <span className="text-[11px] font-semibold text-gray-900 tracking-tight">Steuererklärung</span>
          </div>
          <div className="w-7 h-7 rounded-full bg-gray-100 overflow-hidden">
            <img src="/avenzo-website/denis-whitebg-removebg-preview.png" className="w-full h-full object-cover object-top" alt="" />
          </div>
        </div>

        {/* Step progress — accent green fills as steps complete */}
        <div className="px-5 pt-0.5 pb-3">
          <div className="flex items-center gap-[3px]">
            <div className="h-[2.5px] flex-1 rounded-full bg-[var(--color-accent)]" />
            <div className="h-[2.5px] flex-1 rounded-full bg-gray-200 anim-fade-2-bar" />
            <div className="h-[2.5px] flex-1 rounded-full bg-gray-200 anim-fade-3-bar" />
          </div>
        </div>

        {/* Animated screens */}
        <div className="flex-grow flex flex-col relative overflow-hidden bg-surface-subtle">

          {/* ── Step 1: Document Scan ── */}
          <div className="absolute inset-0 flex flex-col anim-fade-1">
            <div className="px-5 pt-5 pb-3 st1-1">
              <div className="text-[15px] font-medium text-gray-900 tracking-tight leading-snug">Dokument scannen</div>
              <div className="text-[10px] text-gray-400 font-medium mt-1.5">Halte dein Dokument in die Kamera</div>
            </div>
            <div className="flex-grow flex flex-col items-center justify-center px-6 pb-14">
              <div className="relative w-[128px] h-[170px] mb-6 st1-2">
                <div className="absolute inset-0 bg-white rounded-2xl shadow-[0_8px_30px_-4px_rgba(0,0,0,0.1)] overflow-hidden border border-gray-100">
                  <img src={lohnausweis} className="w-full h-full object-cover object-top" alt="Lohnausweis" />
                </div>
                <div className="absolute left-0 right-0 h-[2px] bg-[var(--color-accent)] shadow-[0_0_12px_3px_rgba(var(--accent-rgb),0.4)] anim-scan z-10 rounded-full" />
              </div>
              <div className="bg-white rounded-2xl border border-gray-100 px-4 py-3 flex items-center gap-3 w-full shadow-soft st1-3">
                <div className="w-9 h-9 rounded-xl bg-gray-50 flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" /></svg>
                </div>
                <div className="flex-grow min-w-0">
                  <div className="text-[10px] font-semibold text-gray-900 truncate">Lohnausweis_2025.pdf</div>
                  <div className="text-[8px] text-gray-400 font-medium mt-0.5">245 KB · Wird erkannt...</div>
                </div>
                <div className="w-4 h-4 rounded-full border-[1.5px] border-[var(--color-accent-dark)] border-t-transparent anim-spin-slow shrink-0" />
              </div>
            </div>
          </div>

          {/* ── Step 2: AI Analysis ── */}
          <div className="absolute inset-0 flex flex-col anim-fade-2" style={{ opacity: 0 }}>
            <div className="px-5 pt-4 pb-1 st2-1">
              {/* AI Agent status — outline wave + text */}
              <div className="relative py-2">
                <div className="flex items-center gap-2 mb-1.5">
                  <svg className="w-[14px] h-[10px] shrink-0" viewBox="0 0 10 7.3" fill="none">
                    <path d="m1.52 4.1 1.99-4.08h1.54l1.18 2.44-1.16 1.29-0.77-1.84-0.89 1.87c-0.61-0.19-1.31-0.11-1.89 0.32z" fill="var(--color-accent-dark)" />
                    <path d="m7.11 4.1-0.97 1.32 0.71 1.86h1.79l-1.53-3.18z" fill="var(--color-accent-dark)" />
                    <path d="m0.18 7.29 0.98-2.26c0.41-0.91 1.66-1.17 2.36-0.54l0.8 0.65c0.1 0.08 0.2 0.07 0.29-0.04l2.61-3.28-0.52-0.6 2.23-0.47-0.19 2.39-0.59-0.55-3.7 4.29-0.11 0.01-1.55-1.79-0.98 2.19h-1.63z" fill="var(--color-accent-dark)" />
                  </svg>
                  <span className="text-[10px] font-medium text-gray-400 ai-cycle-text" />
                </div>
                <svg className="w-full h-[14px]" viewBox="0 0 300 16" fill="none" preserveAspectRatio="xMidYMid slice">
                  {Array.from({ length: 14 }, (_, i) => {
                    const x = i * 22 + 2;
                    return (
                      <g key={i} className="ai-outline-wave" style={{ animationDelay: `${i * 0.12}s` }}>
                        <path transform={`translate(${x}, 3) scale(1.4)`} d="m1.52 4.1 1.99-4.08h1.54l1.18 2.44-1.16 1.29-0.77-1.84-0.89 1.87c-0.61-0.19-1.31-0.11-1.89 0.32z" fill="none" stroke="var(--color-accent-dark)" strokeWidth="0.2" />
                        <path transform={`translate(${x}, 3) scale(1.4)`} d="m7.11 4.1-0.97 1.32 0.71 1.86h1.79l-1.53-3.18z" fill="none" stroke="var(--color-accent-dark)" strokeWidth="0.2" />
                        <path transform={`translate(${x}, 3) scale(1.4)`} d="m0.18 7.29 0.98-2.26c0.41-0.91 1.66-1.17 2.36-0.54l0.8 0.65c0.1 0.08 0.2 0.07 0.29-0.04l2.61-3.28-0.52-0.6 2.23-0.47-0.19 2.39-0.59-0.55-3.7 4.29-0.11 0.01-1.55-1.79-0.98 2.19h-1.63z" fill="none" stroke="var(--color-accent-dark)" strokeWidth="0.2" />
                      </g>
                    );
                  })}
                </svg>
              </div>
            </div>
            <div className="flex-grow flex flex-col px-5 pt-3 pb-14">
              {/* Live feed — AI findings stream */}
              <div className="space-y-2.5 mb-4">
                {/* Extracted data card */}
                <div className="bg-white rounded-2xl border border-gray-100 p-4 shadow-soft st2-2">
                  <div className="text-[8px] font-medium text-gray-300 uppercase tracking-[0.1em] mb-2.5">Erkannte Daten</div>
                  <div className="space-y-2.5">
                    <div className="flex justify-between items-center st2-r1">
                      <span className="text-[10px] text-gray-500 font-medium">Bruttolohn</span>
                      <span className="text-[10px] font-semibold text-gray-900">CHF 85'400</span>
                    </div>
                    <div className="flex justify-between items-center st2-r2">
                      <span className="text-[10px] text-gray-500 font-medium">Arbeitgeber</span>
                      <span className="text-[10px] font-semibold text-gray-900">Muster AG</span>
                    </div>
                    <div className="flex justify-between items-center st2-r3">
                      <span className="text-[10px] text-gray-500 font-medium">Quellensteuer</span>
                      <span className="text-[10px] font-semibold text-gray-900">CHF 12'340</span>
                    </div>
                  </div>
                </div>

                {/* Found deductions */}
                <div className="bg-white rounded-2xl border border-gray-100 p-4 shadow-soft st2-3">
                  <div className="text-[8px] font-medium text-gray-300 uppercase tracking-[0.1em] mb-2.5">Gefundene Abzüge</div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2.5 st2-d1">
                      <div className="w-5 h-5 rounded-full bg-[var(--color-accent)] flex items-center justify-center shrink-0">
                        <svg className="w-2.5 h-2.5 text-[var(--color-accent-text)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                      </div>
                      <span className="text-[10px] font-medium text-gray-900 flex-grow">Pendlerabzug</span>
                      <span className="text-[10px] font-semibold text-gray-900">CHF 680</span>
                    </div>
                    <div className="flex items-center gap-2.5 st2-d2">
                      <div className="w-5 h-5 rounded-full bg-[var(--color-accent)] flex items-center justify-center shrink-0">
                        <svg className="w-2.5 h-2.5 text-[var(--color-accent-text)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                      </div>
                      <span className="text-[10px] font-medium text-gray-900 flex-grow">Homeoffice</span>
                      <span className="text-[10px] font-semibold text-gray-900">CHF 420</span>
                    </div>
                    <div className="flex items-center gap-2.5 st2-d3">
                      <div className="w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center shrink-0">
                        <div className="w-2.5 h-2.5 rounded-full border-[1.5px] border-[var(--color-accent-dark)] border-t-transparent anim-spin-slow" />
                      </div>
                      <span className="text-[10px] font-medium text-gray-400 flex-grow">Säule 3a</span>
                      <span className="text-[10px] font-medium text-gray-300">wird geprüft...</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Running total — the payoff preview */}
              <div className="mt-auto rounded-xl p-3 text-center st2-total" style={{ background: "var(--color-accent)" }}>
                <div className="text-[8px] font-semibold text-[var(--color-accent-text)]/60 uppercase tracking-wider mb-0.5">Bisherige Ersparnis</div>
                <div className="text-[18px] font-black text-[var(--color-accent-text)] tracking-tight leading-none">CHF 1'100+</div>
              </div>
            </div>
          </div>

          {/* ── Step 3: Result ── */}
          <div className="absolute inset-0 flex flex-col anim-fade-3" style={{ opacity: 0 }}>
            <div className="px-5 pt-5 pb-3 st3-1">
              <div className="text-[15px] font-medium text-gray-900 tracking-tight leading-snug">Dein Ergebnis</div>
              <div className="text-[10px] text-gray-400 font-medium mt-1.5">Analyse abgeschlossen</div>
            </div>
            <div className="flex-grow flex flex-col px-5 pt-1 pb-14">
              {/* Result card — polished accent gradient */}
              <div className="rounded-2xl p-6 w-full text-center relative overflow-hidden mb-3 st3-1" style={{ background: "linear-gradient(135deg, var(--color-accent) 0%, var(--color-accent-tint-4) 40%, var(--color-accent) 70%, var(--color-accent-deep) 100%)" }}>
                {/* Glass highlight strip */}
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/60 to-transparent" />
                {/* Shimmer sweep */}
                <div className="absolute inset-0 anim-shimmer" style={{ background: "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.25) 50%, transparent 60%)", backgroundSize: "200% 100%" }} />
                <div className="text-[8px] font-semibold tracking-[0.15em] uppercase text-[var(--color-accent-text)]/50 mb-2.5 relative z-10">
                  Geschätzte Rückerstattung
                </div>
                <div className="relative z-10 mb-1.5 st3-num">
                  <span className="text-[13px] font-semibold text-[var(--color-accent-text)]/50 align-top mr-0.5 inline-block mt-1">CHF</span>
                  <span className="text-[2.8rem] font-black tracking-tighter leading-none text-[var(--color-accent-text)]" style={{ textShadow: "0 2px 8px rgba(0,0,0,0.08)" }}>1'450</span>
                </div>
                <div className="inline-flex items-center gap-1.5 text-[8px] font-bold bg-[var(--color-accent-text)]/10 text-[var(--color-accent-text)] px-3 py-1.5 rounded-full relative z-10 st3-2">
                  <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                  +380 mehr als ohne Avenzo
                </div>
              </div>
              {/* Breakdown */}
              <div className="bg-white rounded-2xl border border-gray-100 p-4 shadow-soft mb-3 st3-2">
                <div className="text-[8px] font-medium text-gray-300 uppercase tracking-[0.1em] mb-3">Gefundene Abzüge</div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] text-gray-500 font-medium">Pendlerabzug</span>
                    <span className="text-[10px] font-semibold text-gray-900">CHF 680</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] text-gray-500 font-medium">Homeoffice</span>
                    <span className="text-[10px] font-semibold text-gray-900">CHF 420</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] text-gray-500 font-medium">Säule 3a</span>
                    <span className="text-[10px] font-semibold text-gray-900">CHF 350</span>
                  </div>
                </div>
              </div>
              {/* CTA */}
              <button className="w-full bg-gray-900 text-white font-bold text-[11px] py-3.5 rounded-xl mt-auto st3-3">
                Jetzt einreichen
                <svg className="w-3.5 h-3.5 inline ml-1.5 -mt-px" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom tab bar */}
        <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-100 px-4 pb-1.5 pt-2 flex items-center justify-around z-20">
          <div className="flex flex-col items-center">
            <svg className="w-5 h-5 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" /></svg>
            <div className="w-1 h-1 rounded-full bg-gray-900 mt-0.5" />
          </div>
          <svg className="w-5 h-5 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" /></svg>
          <div className="w-10 h-10 -mt-5 rounded-full bg-gray-900 flex items-center justify-center ring-4 ring-white">
            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" /></svg>
          </div>
          <svg className="w-5 h-5 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" /></svg>
          <svg className="w-5 h-5 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" /></svg>
        </div>
      </div>
    </div>
  );
}

/* ─── Phone: Versicherung ─── */
function PhoneVersicherung({ }: { theme: string }) {
  return (
    <div className="relative w-[220px] sm:w-[270px] md:w-[285px] h-[450px] sm:h-[555px] md:h-[585px] bg-device-body rounded-[2rem] sm:rounded-[2.8rem] border-[5px] sm:border-[6px] border-device-border shadow-device overflow-hidden">
      <DynamicIsland />
      <div className="w-full h-full bg-white pt-12 flex flex-col">
        {/* App header */}
        <div className="px-5 pt-2.5 pb-2 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img src="/avenzo-website/avenzo_icon.svg" className="h-[16px] w-auto object-contain" style={{ filter: "brightness(0)" }} alt="Avenzo" />
            <span className="text-[11px] font-semibold text-gray-900 tracking-tight">Versicherung</span>
          </div>
          <div className="w-7 h-7 rounded-full bg-gray-100 overflow-hidden">
            <img src="/avenzo-website/denis-whitebg-removebg-preview.png" className="w-full h-full object-cover object-top" alt="" />
          </div>
        </div>

        {/* Page dots — animate active state */}
        <div className="flex justify-center gap-1.5 py-2">
          <div className="h-1 rounded-full anim-pagedot-1" />
          <div className="h-1 rounded-full anim-pagedot-2" />
        </div>

        {/* Animated screens */}
        <div className="flex-grow flex flex-col relative overflow-hidden bg-surface-subtle">

          {/* ── Screen 1: Insurance savings ── */}
          <div className="absolute inset-0 flex flex-col px-5 pt-4 pb-14 anim-2screen-1">
            <div className="mb-3 s1-stagger-1">
              <div className="text-[15px] font-medium text-gray-900 tracking-tight">Versicherungs-Check</div>
              <div className="text-[10px] text-gray-400 font-medium mt-1">3 Policen analysiert</div>
            </div>

            {/* Visual bar comparison — Aktuell vs Avenzo */}
            <div className="bg-white rounded-2xl border border-gray-100 p-4 mb-4 s1-stagger-2">
              {/* Current — full width bar */}
              <div className="mb-3">
                <div className="flex justify-between items-baseline mb-1.5">
                  <span className="text-[9px] font-medium text-gray-400">Aktuell</span>
                  <span className="text-[11px] font-semibold text-gray-900">CHF 4'680</span>
                </div>
                <div className="w-full h-[6px] bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-gray-300 rounded-full anim-bar-current" />
                </div>
              </div>
              {/* Avenzo — shorter bar, shows savings */}
              <div>
                <div className="flex justify-between items-baseline mb-1.5">
                  <span className="text-[9px] font-medium text-app-secondary">Mit Avenzo</span>
                  <span className="text-[11px] font-bold text-gray-900">CHF 3'840</span>
                </div>
                <div className="w-full h-[6px] bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-app-secondary rounded-full anim-bar-brand" />
                </div>
              </div>
              {/* Savings callout — reveals after bars finish */}
              <div className="flex items-center justify-end gap-1.5 mt-2.5 anim-savings-reveal">
                <svg className="w-3 h-3 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                <span className="text-[10px] font-bold text-emerald-600">−CHF 840 / Jahr gespart</span>
              </div>
            </div>

            {/* Policy details — clean rows with status icons */}
            <div className="space-y-0 flex-grow">
              <div className="flex items-center gap-3 py-2.5 border-b border-gray-100/80 s1-stagger-3">
                <div className="w-7 h-7 rounded-xl bg-emerald-50 flex items-center justify-center shrink-0">
                  <svg className="w-3.5 h-3.5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                </div>
                <div className="flex-grow min-w-0">
                  <div className="text-[10px] font-semibold text-gray-900">Krankenkasse</div>
                  <div className="text-[8px] text-gray-400 font-medium">Günstigerer Anbieter</div>
                </div>
                <span className="text-[9px] font-bold text-emerald-600 shrink-0">−540</span>
              </div>
              <div className="flex items-center gap-3 py-2.5 border-b border-gray-100/80 s1-stagger-4">
                <div className="w-7 h-7 rounded-xl bg-emerald-50 flex items-center justify-center shrink-0">
                  <svg className="w-3.5 h-3.5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                </div>
                <div className="flex-grow min-w-0">
                  <div className="text-[10px] font-semibold text-gray-900">Hausrat</div>
                  <div className="text-[8px] text-gray-400 font-medium">Überversichert, angepasst</div>
                </div>
                <span className="text-[9px] font-bold text-emerald-600 shrink-0">−180</span>
              </div>
              <div className="flex items-center gap-3 py-2.5 border-b border-gray-100/80 s1-stagger-4">
                <div className="w-7 h-7 rounded-xl bg-amber-50 flex items-center justify-center shrink-0">
                  <svg className="w-3.5 h-3.5 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" /></svg>
                </div>
                <div className="flex-grow min-w-0">
                  <div className="text-[10px] font-semibold text-gray-900">Rechtsschutz</div>
                  <div className="text-[8px] text-gray-400 font-medium">Lücke erkannt & gedeckt</div>
                </div>
                <span className="text-[9px] font-bold text-amber-500 shrink-0">Neu</span>
              </div>
              <div className="flex items-center gap-3 py-2.5 s1-stagger-5">
                <div className="w-7 h-7 rounded-xl bg-gray-50 flex items-center justify-center shrink-0">
                  <svg className="w-3.5 h-3.5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                </div>
                <div className="flex-grow min-w-0">
                  <div className="text-[10px] font-semibold text-gray-900">Haftpflicht</div>
                  <div className="text-[8px] text-gray-400 font-medium">Bereits optimal</div>
                </div>
                <span className="text-[9px] font-medium text-gray-300 shrink-0">OK</span>
              </div>
            </div>
          </div>

          {/* ── Screen 2: 3a Vorsorge ── */}
          <div className="absolute inset-0 flex flex-col px-5 pt-4 pb-14 anim-2screen-2" style={{ opacity: 0 }}>
            <div className="mb-3 s2-stagger-1">
              <div className="text-[15px] font-medium text-gray-900 tracking-tight">Säule 3a Vorsorge</div>
              <div className="text-[10px] text-gray-400 font-medium mt-1">Vermögensentwicklung bis 65</div>
            </div>

            {/* Two numbers side by side */}
            <div className="flex gap-4 mb-4 s2-stagger-2">
              <div>
                <div className="text-[8px] font-medium text-app-secondary uppercase tracking-wider mb-0.5">Avenzo</div>
                <div className="text-[24px] font-black text-gray-900 tracking-tighter leading-none">418'420</div>
                <div className="text-[8px] text-gray-400 font-medium mt-0.5">CHF mit 65</div>
              </div>
              <div className="border-l border-gray-100 pl-4">
                <div className="text-[8px] font-medium text-gray-400 uppercase tracking-wider mb-0.5">Bank</div>
                <div className="text-[24px] font-black text-gray-300 tracking-tighter leading-none">236'000</div>
                <div className="text-[8px] text-gray-300 font-medium mt-0.5">CHF mit 65</div>
              </div>
            </div>

            {/* Chart — lines draw in sequentially */}
            <div className="flex-grow relative mb-2 s2-stagger-3">
              <svg className="w-full h-full" viewBox="0 0 220 110" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="avzFill2" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="var(--color-app-secondary)" stopOpacity="0.08" />
                    <stop offset="100%" stopColor="var(--color-app-secondary)" stopOpacity="0" />
                  </linearGradient>
                </defs>
                {/* Subtle grid */}
                <line x1="0" y1="27" x2="220" y2="27" stroke="#f1f5f9" strokeWidth="0.5" />
                <line x1="0" y1="55" x2="220" y2="55" stroke="#f1f5f9" strokeWidth="0.5" />
                <line x1="0" y1="82" x2="220" y2="82" stroke="#f1f5f9" strokeWidth="0.5" />
                {/* Area fill — fades in with line */}
                <path d="M0 95 Q55 85,110 55 T220 12 L220 110 L0 110 Z" fill="url(#avzFill2)" className="anim-area-fill" />
                {/* Bank 3a — dashed, flat */}
                <path d="M0 95 Q55 90,110 80 T220 62" fill="none" stroke="#d1d5db" strokeWidth="1.5" strokeDasharray="4 3" />
                {/* Avenzo — draws in */}
                <path d="M0 95 Q55 85,110 55 T220 12" fill="none" stroke="var(--color-app-secondary)" strokeWidth="2.5" className="anim-draw-line" />
                {/* End dot — appears after line draws */}
                <circle cx="220" cy="12" r="3.5" fill="var(--color-app-secondary)" className="anim-chart-dot" />
                {/* Time labels */}
                <text x="2" y="106" fill="#d1d5db" fontSize="7" fontWeight="500" fontFamily="system-ui">Heute</text>
                <text x="198" y="106" fill="#d1d5db" fontSize="7" fontWeight="500" fontFamily="system-ui">65J</text>
              </svg>
            </div>

            {/* Legend */}
            <div className="flex items-center justify-center gap-5 mb-3 s2-stagger-3">
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-[2px] rounded-full bg-app-secondary" />
                <span className="text-[8px] font-medium text-gray-500">Avenzo 3a</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-[2px] bg-gray-300" style={{ borderTop: "1.5px dashed #d1d5db", height: 0 }} />
                <span className="text-[8px] font-medium text-gray-400">Bank 3a</span>
              </div>
            </div>

            {/* Difference — the payoff */}
            <div className="bg-app-secondary/[0.06] rounded-xl px-4 py-3 text-center s2-stagger-4">
              <div className="text-[10px] font-bold text-app-secondary">+CHF 182'000</div>
              <div className="text-[8px] text-gray-400 font-medium mt-0.5">mehr Vermögen mit Avenzo</div>
            </div>
          </div>
        </div>

        {/* Bottom tab bar */}
        <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-100 px-4 pb-1.5 pt-2 flex items-center justify-around z-20">
          <svg className="w-5 h-5 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" /></svg>
          <div className="flex flex-col items-center">
            <svg className="w-5 h-5 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" /></svg>
            <div className="w-1 h-1 rounded-full bg-gray-900 mt-0.5" />
          </div>
          <div className="w-10 h-10 -mt-5 rounded-full bg-gray-900 flex items-center justify-center ring-4 ring-white">
            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" /></svg>
          </div>
          <svg className="w-5 h-5 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" /></svg>
          <svg className="w-5 h-5 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" /></svg>
        </div>
      </div>
    </div>
  );
}

/* ─── Browser: Treuhand ─── */
function BrowserTreuhand() {
  return (
    <div className="w-full max-w-[520px] h-[420px] sm:h-[460px] bg-white rounded-2xl border border-gray-200/80 shadow-card-hover overflow-hidden flex flex-col">
      {/* Browser chrome */}
      <div className="h-9 bg-surface-subtle border-b border-gray-100 flex items-center px-4 gap-2 shrink-0">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-chrome-close" />
          <div className="w-2.5 h-2.5 rounded-full bg-chrome-minimize" />
          <div className="w-2.5 h-2.5 rounded-full bg-chrome-maximize" />
        </div>
        <div className="flex-grow flex justify-center">
          <div className="bg-white border border-gray-100 rounded-lg px-3 py-1 flex items-center gap-1.5">
            <svg className="w-2.5 h-2.5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
            <span className="text-[9px] font-medium text-gray-400">portal.avenzo.ch</span>
          </div>
        </div>
      </div>

      <div className="flex flex-grow overflow-hidden">
        {/* Sidebar */}
        <div className="hidden md:flex w-[200px] border-r border-gray-100 p-4 flex-col bg-surface-subtle shrink-0">
          {/* Logo */}
          <div className="flex items-center gap-2 mb-6">
            <img src="/avenzo-website/avenzo_icon.svg" className="h-[16px] w-auto object-contain" style={{ filter: "brightness(0)" }} alt="" />
            <span className="text-[11px] font-semibold text-gray-900 tracking-tight">Treuhand</span>
          </div>

          {/* Nav items */}
          <div className="space-y-1">
            <div className="bg-white text-gray-900 p-2.5 rounded-xl text-[9px] font-semibold flex items-center gap-2 shadow-soft border border-gray-100">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25a2.25 2.25 0 01-2.25-2.25v-2.25z" /></svg>
              Dashboard
            </div>
            <div className="text-gray-400 p-2.5 rounded-xl text-[9px] font-medium flex items-center gap-2">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" /></svg>
              Belege
            </div>
            <div className="text-gray-400 p-2.5 rounded-xl text-[9px] font-medium flex items-center gap-2">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" /></svg>
              Finanzen
            </div>
            <div className="text-gray-400 p-2.5 rounded-xl text-[9px] font-medium flex items-center gap-2">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" /></svg>
              Team
            </div>
          </div>

          {/* Expert chat shortcut */}
          <div className="mt-auto flex items-center gap-2 p-2.5 rounded-xl bg-white border border-gray-100">
            <div className="w-6 h-6 rounded-full bg-gray-200 overflow-hidden shrink-0">
              <img src="/avenzo-website/denis-whitebg-removebg-preview.png" className="w-full h-full object-cover object-top" alt="" />
            </div>
            <div>
              <div className="text-[8px] font-semibold text-gray-900">Denis M.</div>
              <div className="text-[7px] text-emerald-500 font-medium flex items-center gap-0.5">
                <div className="w-1 h-1 rounded-full bg-emerald-500" />
                Online
              </div>
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="flex-grow p-4 flex flex-col bg-white overflow-hidden">
          {/* Header row */}
          <div className="flex items-center justify-between mb-3">
            <div>
              <div className="text-[12px] font-medium text-gray-900 tracking-tight">Dashboard</div>
              <div className="text-[8px] text-gray-400 font-medium mt-0.5">Muster GmbH · März 2026</div>
            </div>
            <div className="w-6 h-6 rounded-full bg-gray-100 overflow-hidden">
              <img src="/avenzo-website/denis-whitebg-removebg-preview.png" className="w-full h-full object-cover object-top" alt="" />
            </div>
          </div>

          {/* KPI row */}
          <div className="flex gap-2 mb-3">
            <div className="flex-1 bg-surface-subtle rounded-xl p-2.5 border border-gray-100">
              <div className="text-[7px] font-medium text-gray-400 uppercase tracking-wider mb-1">Umsatz Q1</div>
              <div className="text-[13px] font-black text-gray-900 tracking-tight leading-none">142'800</div>
              <div className="text-[7px] text-emerald-500 font-semibold mt-1">+12%</div>
            </div>
            <div className="flex-1 bg-surface-subtle rounded-xl p-2.5 border border-gray-100">
              <div className="text-[7px] font-medium text-gray-400 uppercase tracking-wider mb-1">Belege</div>
              <div className="text-[13px] font-black text-gray-900 tracking-tight leading-none">3</div>
              <div className="text-[7px] text-amber-500 font-semibold mt-1">Offen</div>
            </div>
            <div className="flex-1 bg-surface-subtle rounded-xl p-2.5 border border-gray-100">
              <div className="text-[7px] font-medium text-gray-400 uppercase tracking-wider mb-1">MWST</div>
              <div className="text-[13px] font-black text-emerald-600 tracking-tight leading-none">OK</div>
              <div className="text-[7px] text-emerald-500 font-semibold mt-1">Eingereicht</div>
            </div>
          </div>

          {/* Chat with expert — brought back from original */}
          <div className="flex-grow flex flex-col">
            <div className="text-[8px] font-medium text-gray-300 uppercase tracking-[0.1em] mb-2">Experten-Chat</div>

            <div className="flex gap-2 mb-2">
              <div className="w-5 h-5 rounded-full bg-gray-100 shrink-0 overflow-hidden mt-0.5">
                <img src="/avenzo-website/denis-whitebg-removebg-preview.png" className="w-full h-full object-cover object-top" alt="" />
              </div>
              <div className="bg-surface-subtle p-2.5 rounded-xl rounded-tl-sm text-[8px] text-gray-600 font-medium leading-relaxed border border-gray-100 max-w-[85%]">
                MWST-Abrechnung H1 ist finalisiert. Zahlungsanweisung liegt bereit. Import starten?
              </div>
            </div>
            <div className="flex justify-end mb-2">
              <div className="bg-gray-900 text-white p-2.5 rounded-xl rounded-tr-sm text-[8px] font-medium leading-relaxed max-w-[75%]">
                Perfekt, Sync läuft. Danke!
              </div>
            </div>
          </div>

          {/* Revenue card — brought back from original */}
          <div className="border border-gray-100 rounded-xl p-2.5 flex justify-between items-center bg-surface-subtle">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-emerald-50 flex items-center justify-center">
                <svg className="w-3.5 h-3.5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
              </div>
              <div>
                <div className="text-[8px] font-semibold text-gray-900 uppercase tracking-wider">Q1 Umsatz</div>
                <div className="text-[7px] font-medium text-emerald-500">Geprüft & Freigegeben</div>
              </div>
            </div>
            <div className="text-[12px] font-black text-gray-900">45'200 <span className="text-[7px] text-gray-400 font-medium">CHF</span></div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Shared ─── */
function DynamicIsland() {
  return (
    <div className="absolute top-3 left-1/2 -translate-x-1/2 w-[76px] h-[24px] bg-black rounded-full z-30 flex items-center justify-end px-2.5">
      <div className="w-2.5 h-2.5 rounded-full bg-device-border border border-gray-800" />
    </div>
  );
}


function AppleIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.19 2.31-.88 3.5-.8 1.54.11 2.8.76 3.65 1.95-3.05 1.81-2.55 5.76.32 6.84-1.28 2.87-2.68 4.29-2.55 4.18zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
    </svg>
  );
}

function PlayStoreIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.302 2.302a1 1 0 010 1.38l-2.302 2.302L15.396 12l2.302-3.492zM5.864 3.458L16.8 9.791 14.5 12.093 5.864 3.458z" />
    </svg>
  );
}
