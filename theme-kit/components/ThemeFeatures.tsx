import { useScrollReveal } from "../../hooks/useScrollReveal";
import { useSiteConfig } from "../../config/SiteConfigContext";
import type { FeatureItem } from "../../config/site-config.types";

export function ThemeFeatures() {
  const { features, brand } = useSiteConfig();
  const header = useScrollReveal();
  const grid = useScrollReveal();
  const bottom = useScrollReveal();

  const hasCenter = features.showCenter !== false;

  return (
    <section id="features" className="py-16 sm:py-24 px-3 sm:px-4 max-w-7xl mx-auto">
      <div ref={header.ref} className={`text-center mb-12 sm:mb-20 ${header.isVisible ? "sr-visible" : "sr-hidden"}`}>
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-medium tracking-tight text-gray-900 mb-3 sm:mb-4">
          {features.headline}
        </h2>
        <p className="text-sm sm:text-base text-gray-500 max-w-2xl mx-auto font-medium lg:text-lg px-2 sm:px-0">
          {features.subheadline}
        </p>
      </div>

      <div ref={grid.ref} className={`grid ${hasCenter ? "grid-cols-2 md:grid-cols-3" : "grid-cols-1 md:grid-cols-2"} gap-3 sm:gap-6 max-w-5xl mx-auto items-center sr-stagger ${grid.isVisible ? "sr-visible" : ""}`}>
        {/* Left Column */}
        <div className={`flex flex-col gap-3 sm:gap-6 ${hasCenter ? "md:translate-y-10" : ""}`}>
          {features.leftColumn.map((feat, i) => (
            <FeatureCard key={i} item={feat} />
          ))}
        </div>

        {/* Center — Phone mockup (optional) */}
        {hasCenter ? (
          <div className="hidden md:flex rounded-[var(--radius-card)] p-8 pb-0 justify-center items-end relative overflow-hidden group" style={{ background: "linear-gradient(160deg, var(--color-accent-tint-2) 0%, var(--color-accent) 30%, var(--color-accent-tint-3) 60%, var(--color-accent-tint-1) 100%)" }}>
            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 400 600" fill="none" preserveAspectRatio="none">
              <path d="M-50 300 Q100 200 200 300 T450 250" stroke="rgba(0,0,0,0.06)" strokeWidth="1.5" fill="none" />
              <path d="M-50 350 Q100 250 200 350 T450 300" stroke="rgba(0,0,0,0.04)" strokeWidth="1.5" fill="none" />
              <path d="M-50 400 Q100 300 200 400 T450 350" stroke="rgba(0,0,0,0.03)" strokeWidth="1.5" fill="none" />
            </svg>
            {features.centerElement ?? (
              <div className="relative w-full max-w-[220px] transform group-hover:-translate-y-3 transition-transform duration-500">
                <div className="w-full aspect-[1/2.05] bg-device-body rounded-[2.2rem] border-[5px] border-device-border shadow-device-lg relative overflow-hidden">
                  <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-[55px] h-[18px] bg-black rounded-full z-30" />
                  <div className="w-full h-full bg-device-screen flex flex-col items-center justify-center relative">
                    <div className="absolute inset-0 bg-gradient-to-b from-accent/10 via-transparent to-accent/5" />
                    <div
                      className="w-16 h-16 mb-3 relative z-10"
                      style={{
                        backgroundColor: "var(--color-accent)",
                        WebkitMaskImage: `url(${brand.iconSrc})`,
                        WebkitMaskSize: "contain",
                        WebkitMaskRepeat: "no-repeat",
                        WebkitMaskPosition: "center",
                        maskImage: `url(${brand.iconSrc})`,
                        maskSize: "contain",
                        maskRepeat: "no-repeat",
                        maskPosition: "center",
                      }}
                    />
                    <span className="text-white/90 text-[15px] font-bold tracking-[0.25em] relative z-10">{brand.name}</span>
                    <div className="mt-6 w-8 h-[2px] bg-white/10 rounded-full overflow-hidden relative z-10">
                      <div className="h-full w-1/2 bg-accent/60 rounded-full anim-slide-right" />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        ) : null}

        {/* Right Column */}
        <div className={`flex flex-col gap-3 sm:gap-6 ${hasCenter ? "md:-translate-y-10" : ""}`}>
          {features.rightColumn.map((feat, i) => (
            <FeatureCard key={i} item={feat} />
          ))}
        </div>
      </div>

      {/* Bottom Text */}
      {features.bottomText && (
        <div ref={bottom.ref} className={`mt-12 sm:mt-24 text-center max-w-4xl mx-auto px-2 sm:px-4 ${bottom.isVisible ? "sr-visible" : "sr-hidden"}`}>
          <p className="text-lg sm:text-2xl md:text-3xl text-gray-800 leading-snug sm:leading-tight font-medium">
            {features.bottomText}
          </p>
        </div>
      )}
    </section>
  );
}

function FeatureCard({ item }: { item: FeatureItem }) {
  return (
    <div className="theme-card-soft rounded-xl sm:rounded-[2rem] p-5 sm:p-8 flex flex-col items-center text-center justify-center hover:-translate-y-1 transition-transform duration-300">
      <div className="relative mb-4 sm:mb-6 w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center rounded-xl sm:rounded-2xl theme-inner">
        {item.icon}
      </div>
      <h3 className="text-base sm:text-xl font-bold text-gray-900 mb-1 sm:mb-2">{item.title}</h3>
      <p className="text-xs sm:text-sm text-gray-500 font-medium leading-relaxed">{item.description}</p>
    </div>
  );
}
