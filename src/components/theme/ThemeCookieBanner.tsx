import { useState, useEffect } from "react";
import { useSiteConfig } from "../../config/SiteConfigContext";

export function ThemeCookieBanner() {
  const { cookieBanner } = useSiteConfig();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem(cookieBanner.storageKey);
    if (!accepted) {
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, [cookieBanner.storageKey]);

  const accept = () => {
    localStorage.setItem(cookieBanner.storageKey, "all");
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem(cookieBanner.storageKey, "essential");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-3 sm:bottom-6 left-3 right-3 sm:left-auto sm:right-6 z-[90] sm:max-w-sm animate-[fadeSlideUp_0.4s_ease-out]">
      <div className="theme-card rounded-xl sm:rounded-2xl shadow-2xl p-4 sm:p-6">
        <div className="flex items-start gap-3 mb-3 sm:mb-4">
          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full theme-badge flex items-center justify-center flex-shrink-0 mt-0.5">
            <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 text-xs sm:text-sm mb-1">{cookieBanner.title}</h4>
            <p className="text-[11px] sm:text-xs text-gray-500 leading-relaxed">
              {cookieBanner.description}
            </p>
          </div>
        </div>
        <div className="flex gap-2">
          <button onClick={accept} className="flex-1 text-white text-xs sm:text-sm font-bold py-2.5 rounded-xl transition-colors" style={{ background: "var(--color-dark)" }}>
            {cookieBanner.acceptLabel}
          </button>
          <button onClick={decline} className="flex-1 text-gray-700 text-xs sm:text-sm font-bold py-2.5 rounded-xl transition-colors" style={{ background: "var(--card-bg)", border: "1px solid var(--card-border)" }}>
            {cookieBanner.declineLabel}
          </button>
        </div>
      </div>
    </div>
  );
}
