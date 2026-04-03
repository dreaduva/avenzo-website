import { useState, useRef, useEffect, useCallback } from "react";
import { useSiteConfig } from "../../config/SiteConfigContext";
import type { HeroTab } from "../../config/site-config.types";

export function ThemeHero() {
  const { hero } = useSiteConfig();
  const { tabs } = hero;
  const [activeTab, setActiveTab] = useState<string>(tabs[0]?.id ?? "");
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

  const handleScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = el.offsetWidth * 0.85;
    const idx = Math.round(el.scrollLeft / cardWidth);
    setMobileActiveIdx(Math.min(idx, tabs.length - 1));
  }, [tabs.length]);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", handleScroll, { passive: true });
    return () => el.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

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
      <div className="max-w-4xl mx-auto mb-6 sm:mb-16 mt-2 sm:mt-4 px-5 sm:px-0">
        <h1 className="text-[2.25rem] sm:text-4xl md:text-[5rem] font-medium tracking-tight text-gray-900 mb-3 sm:mb-6 leading-[1.1] sm:leading-[1.05]">
          {hero.headline}
        </h1>
        <p className="text-[13px] sm:text-base md:text-lg text-gray-500 max-w-2xl mx-auto font-medium leading-relaxed">
          {hero.subheadline}
        </p>
      </div>

      <MobileCards
        tabs={tabs}
        scrollRef={scrollRef}
        mobileActiveIdx={mobileActiveIdx}
        mobileCtaAvailableLabel={hero.mobileCtaAvailableLabel}
        mobileCtaUnavailableLabel={hero.mobileCtaUnavailableLabel}
      />

      <DesktopTabs
        tabs={tabs}
        activeTab={activeTab}
        current={current}
        setActiveTab={setActiveTab}
        goNext={goNext}
        goPrev={goPrev}
        detailLinkLabel={hero.detailLinkLabel}
        detailLinkHref={hero.detailLinkHref}
      />
    </section>
  );
}

/* ─── Mobile Cards ─── */

function MobileCards({
  tabs,
  scrollRef,
  mobileActiveIdx,
  mobileCtaAvailableLabel,
  mobileCtaUnavailableLabel,
}: {
  tabs: HeroTab[];
  scrollRef: React.RefObject<HTMLDivElement | null>;
  mobileActiveIdx: number;
  mobileCtaAvailableLabel: string;
  mobileCtaUnavailableLabel: string;
}) {
  return (
    <div className="sm:hidden w-full">
      <div
        ref={scrollRef}
        className="flex gap-3 overflow-x-auto snap-x snap-mandatory scroll-smooth pl-4 pr-4 pb-4"
        style={{ scrollbarWidth: "none", WebkitOverflowScrolling: "touch" }}
      >
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className="snap-center shrink-0 w-[85%] rounded-[var(--radius-card)] overflow-hidden flex flex-col theme-card"
          >
            {/* Mockup showcase */}
            <div className={`relative bg-gradient-to-b ${tab.bgFrom} ${tab.bgTo} flex justify-center items-start overflow-hidden`} style={{ height: `calc(500px * var(--phone-scale, 0.58) + 8px)` }}>
              <div className="flex justify-center pt-2" style={{ transform: "scale(var(--phone-scale, 0.58))", transformOrigin: "top center" }}>
                {tab.mockup}
              </div>
              {!tab.available && (
                <div className="absolute top-3.5 left-3.5 z-10 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full theme-badge text-[10px] font-bold text-gray-500 backdrop-blur-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-status-pending animate-pulse" />
                  Coming soon
                </div>
              )}
            </div>
            {/* Bottom strip */}
            <div className="px-5 pt-4 pb-5" style={{ background: "var(--card-bg-hover)" }}>
              <h3 className="text-[15px] font-semibold tracking-tight text-gray-900 leading-snug">
                {tab.mobileHeading}
              </h3>
              <p className="text-[12.5px] text-gray-500 mt-1 mb-4 leading-relaxed">
                {tab.mobileTagline}
              </p>
              <a href="#" className={`flex items-center justify-center gap-2 w-full py-3 rounded-xl font-semibold text-[13px] active:scale-[0.98] transition-transform`} style={{ background: tab.available ? "var(--color-dark)" : "var(--color-surface)", color: tab.available ? "white" : "var(--color-dark)" }}>
                {tab.available ? mobileCtaAvailableLabel : mobileCtaUnavailableLabel}
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center gap-2 mt-1 mb-1">
        {tabs.map((_, i) => (
          <div
            key={i}
            className={`h-[5px] rounded-full transition-all duration-300`}
            style={{ width: i === mobileActiveIdx ? "1.5rem" : "5px", background: i === mobileActiveIdx ? "var(--color-dark)" : "#e5e7eb" }}
          />
        ))}
      </div>
    </div>
  );
}

/* ─── Desktop Tabs ─── */

function DesktopTabs({
  tabs,
  activeTab,
  current,
  setActiveTab,
  goNext,
  goPrev,
  detailLinkLabel,
  detailLinkHref,
}: {
  tabs: HeroTab[];
  activeTab: string;
  current: HeroTab;
  setActiveTab: (id: string) => void;
  goNext: () => void;
  goPrev: () => void;
  detailLinkLabel: string;
  detailLinkHref: string;
}) {
  return (
    <div className="hidden sm:block w-full max-w-6xl mx-auto px-3 sm:px-0">
      <div className="theme-section rounded-[var(--radius-card-lg)] relative">
        {/* Arrows */}
        <button
          onClick={goPrev}
          className="hidden lg:flex absolute -left-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full theme-card items-center justify-center text-gray-300 hover:text-gray-900 hover:scale-110 transition-all duration-300 cursor-pointer"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={goNext}
          className="hidden lg:flex absolute -right-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full theme-card items-center justify-center text-gray-300 hover:text-gray-900 hover:scale-110 transition-all duration-300 cursor-pointer"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Tab pills */}
        <div className="flex justify-center pt-7 pb-1 px-6">
          <div className="inline-flex items-center rounded-full p-1 gap-0.5 theme-card">
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
                  {isActive && <div className="absolute inset-0 rounded-full shadow-sm" style={{ background: "var(--color-dark)" }} />}
                  <span className="relative z-10">{tab.pill}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-2 items-center p-8 lg:p-10 xl:p-12 lg:min-h-[620px]">
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
            {current.available
              ? (current.ctaButtons ?? null)
              : (current.comingSoonContent ?? (
                  <div className="flex flex-wrap items-center gap-4">
                    <div className="inline-flex items-center gap-2 px-5 py-3 rounded-full theme-badge text-sm font-semibold text-gray-400">
                      <div className="w-1.5 h-1.5 rounded-full bg-status-pending animate-pulse" />
                      Coming soon
                    </div>
                  </div>
                ))
            }
          </div>

          <div key={`mockup-${activeTab}`} className="flex items-center justify-center lg:justify-end h-[500px] lg:h-[585px] tab-mockup-in">
            {current.mockup}
          </div>
        </div>

        {/* Detail link */}
        <div className="mx-10 lg:mx-12" style={{ borderTop: "1px solid var(--card-border-hover, rgba(0,0,0,0.06))" }}>
          <a href={detailLinkHref} className="group flex items-center justify-center gap-2 py-5 text-[13px] font-semibold text-gray-400 hover:text-gray-900 transition-colors duration-300 cursor-pointer">
            {detailLinkLabel}
            <svg className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
