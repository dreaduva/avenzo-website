import { Routes, Route } from "react-router-dom";
import { SiteConfigProvider } from "../config/SiteConfigContext";
import type { SiteConfig } from "../config/site-config.types";
import {
  ThemeNavbar,
  ThemeHero,
  ThemePartners,
  ThemeServices,
  ThemeFeatures,
  ThemeHowItWorks,
  ThemeCalculator,
  ThemePricingSection,
  ThemeTestimonials,
  ThemeFaq,
  ThemeCtaFooter,
  ThemeCookieBanner,
  ThemeScrollToTop,
  ThemeSwitcher,
} from "../components/theme";
import { ThemePricing } from "../components/theme/pages/ThemePricing";
import { ThemeAbout } from "../components/theme/pages/ThemeAbout";
import { ThemeContact } from "../components/theme/pages/ThemeContact";
import { ThemeBlog } from "../components/theme/pages/ThemeBlog";

function LandingContent() {
  return (
    <>
      <ThemeHero />
      <ThemePartners />
      <ThemeServices />
      <ThemeFeatures />
      <ThemeHowItWorks />
      <ThemeCalculator />
      <ThemePricingSection />
      <ThemeTestimonials />
      <ThemeFaq />
      <ThemeCtaFooter />
    </>
  );
}

export function ThemePage({ config }: { config: SiteConfig }) {
  const hasPages = !!(config.pricing || config.about || config.contact || config.blog);

  return (
    <SiteConfigProvider config={config}>
      <div className="bg-white min-h-screen font-sans text-gray-900 selection:bg-accent selection:text-accent-text relative transition-colors duration-500">
        <ThemeSwitcher />
        <ThemeNavbar />

        {hasPages ? (
          <Routes>
            <Route index element={<LandingContent />} />
            {config.pricing && <Route path="pricing" element={<ThemePricing />} />}
            {config.about && <Route path="about" element={<ThemeAbout />} />}
            {config.contact && <Route path="contact" element={<ThemeContact />} />}
            {config.blog && <Route path="blog" element={<ThemeBlog />} />}
          </Routes>
        ) : (
          <LandingContent />
        )}

        <ThemeCookieBanner />
        <ThemeScrollToTop />
      </div>
    </SiteConfigProvider>
  );
}
