import { useState, useEffect } from "react";
import { PaylineNavbar } from "../components/payline/PaylineNavbar";
import { PaylineHero } from "../components/payline/PaylineHero";
import { PaylinePartners } from "../components/payline/PaylinePartners";
import { PaylineFeatures } from "../components/payline/PaylineFeatures";
import { PaylineServices } from "../components/payline/PaylineServices";
import { PaylineHowItWorks } from "../components/payline/PaylineHowItWorks";
import { PaylineCalculator } from "../components/payline/PaylineCalculator";
import { PaylineTestimonials } from "../components/payline/PaylineTestimonials";
import { PaylineFaq } from "../components/payline/PaylineFaq";
import { PaylineCtaFooter } from "../components/payline/PaylineCtaFooter";
import { PaylineCookieBanner } from "../components/payline/PaylineCookieBanner";
import { PaylineScrollToTop } from "../components/payline/PaylineScrollToTop";

export function PaylineConcept() {
  const [theme, setTheme] = useState<"neon" | "original">("neon");

  useEffect(() => {
    // Apply theme to the root HTML element
    if (theme === "original") {
      document.documentElement.setAttribute("data-theme", "original");
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
  }, [theme]);

  return (
    <div className="bg-white min-h-screen font-sans text-gray-900 selection:bg-accent selection:text-accent-text relative transition-colors duration-500">
      {/* Floating Theme Switcher */}
      <div className="fixed bottom-20 right-3 sm:bottom-6 sm:right-auto sm:left-6 z-[100] bg-white p-1.5 sm:p-2 rounded-full shadow-nav border border-gray-100 flex items-center gap-1.5 sm:gap-2">
        <button
          onClick={() => setTheme("neon")}
          className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center transition-all ${theme === "neon" ? "bg-dark shadow-md scale-110" : "bg-gray-100 text-gray-400 hover:bg-gray-200"}`}
          title="Neon Theme"
        >
          <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-accent"></div>
        </button>
        <button
          onClick={() => setTheme("original")}
          className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center transition-all ${theme === "original" ? "bg-dark shadow-md scale-110" : "bg-gray-100 text-gray-400 hover:bg-gray-200"}`}
          title="Original Theme"
        >
          <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-brand-green"></div>
        </button>
      </div>

      <PaylineNavbar theme={theme} />
      <PaylineHero theme={theme} />
      <PaylinePartners />
      <PaylineServices />
      <PaylineFeatures />
      <PaylineHowItWorks />
      <PaylineCalculator />
      <PaylineTestimonials />
      <PaylineFaq />
      <PaylineCtaFooter />
      <PaylineCookieBanner />
      <PaylineScrollToTop />
    </div>
  );
}
