import { useScrollReveal } from "../../hooks/useScrollReveal";

export function PaylineFeatures() {
  const header = useScrollReveal();
  const grid = useScrollReveal();
  const bottom = useScrollReveal();

  return (
    <section id="features" className="py-16 sm:py-24 px-3 sm:px-4 max-w-7xl mx-auto">
      {/* Title */}
      <div ref={header.ref} className={`text-center mb-12 sm:mb-20 ${header.isVisible ? "sr-visible" : "sr-hidden"}`}>
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-medium tracking-tight text-gray-900 mb-3 sm:mb-4">
          Warum unsere Kunden
          <br />
          Avenzo wählen
        </h2>
        <p className="text-sm sm:text-base text-gray-500 max-w-2xl mx-auto font-medium lg:text-lg px-2 sm:px-0">
          Steuern und Versicherungen ohne Verzögerung oder Komplexität. Avenzo
          beseitigt versteckte Gebühren, lange Wartezeiten und unnötige Hürden.
        </p>
      </div>

      {/* 3-column grid */}
      <div ref={grid.ref} className={`grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-6 max-w-5xl mx-auto items-center sr-stagger ${grid.isVisible ? "sr-visible" : ""}`}>
        {/* Left Column */}
        <div className="flex flex-col gap-3 sm:gap-6 md:translate-y-10">
          <FeatureCard
            icon={<SpeedIcon />}
            title="Geschwindigkeit"
            description="Sofortige Steuererklärung und Policenwechsel am selben Tag."
          />
          <FeatureCard
            icon={<ShieldIcon />}
            title="Sicherheit"
            description="Bankniveau-Verschlüsselung & Dokumentenschutz."
          />
        </div>

        {/* Center — Phone mockup (hidden on small mobile, visible from sm up) */}
        <div className="hidden md:flex rounded-[var(--radius-card)] p-8 pb-0 justify-center items-end relative overflow-hidden group" style={{ background: "linear-gradient(160deg, var(--color-accent-tint-2) 0%, var(--color-accent) 30%, var(--color-accent-tint-3) 60%, var(--color-accent-tint-1) 100%)" }}>
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 400 600" fill="none" preserveAspectRatio="none">
            <path d="M-50 300 Q100 200 200 300 T450 250" stroke="rgba(0,0,0,0.06)" strokeWidth="1.5" fill="none" />
            <path d="M-50 350 Q100 250 200 350 T450 300" stroke="rgba(0,0,0,0.04)" strokeWidth="1.5" fill="none" />
            <path d="M-50 400 Q100 300 200 400 T450 350" stroke="rgba(0,0,0,0.03)" strokeWidth="1.5" fill="none" />
          </svg>
          <div className="relative w-full max-w-[220px] transform group-hover:-translate-y-3 transition-transform duration-500">
            <div className="w-full aspect-[1/2.05] bg-device-body rounded-[2.2rem] border-[5px] border-device-border shadow-device-lg relative overflow-hidden">
              <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-[55px] h-[18px] bg-black rounded-full z-30" />
              <div className="w-full h-full bg-device-screen flex flex-col items-center justify-center relative">
                <div className="absolute inset-0 bg-gradient-to-b from-accent/10 via-transparent to-accent/5" />
                <div
                  className="w-16 h-16 mb-3 relative z-10"
                  style={{
                    backgroundColor: "var(--color-accent)",
                    WebkitMaskImage: "url(/avenzo-website/avenzo_icon.svg)",
                    WebkitMaskSize: "contain",
                    WebkitMaskRepeat: "no-repeat",
                    WebkitMaskPosition: "center",
                    maskImage: "url(/avenzo-website/avenzo_icon.svg)",
                    maskSize: "contain",
                    maskRepeat: "no-repeat",
                    maskPosition: "center",
                  }}
                />
                <span className="text-white/90 text-[15px] font-bold tracking-[0.25em] relative z-10">AVENZO</span>
                <div className="mt-6 w-8 h-[2px] bg-white/10 rounded-full overflow-hidden relative z-10">
                  <div className="h-full w-1/2 bg-accent/60 rounded-full anim-slide-right" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-3 sm:gap-6 md:-translate-y-10">
          <FeatureCard
            icon={<TransparencyIcon />}
            title="Transparenz"
            description="Keine versteckten Gebühren oder unvorhersehbare Kosten."
          />
          <FeatureCard
            icon={<SimplicityIcon />}
            title="Einfachheit"
            description="Intuitives Dashboard, auch ohne technische Vorkenntnisse."
          />
        </div>
      </div>

      {/* Bottom Text */}
      <div ref={bottom.ref} className={`mt-12 sm:mt-24 text-center max-w-4xl mx-auto px-2 sm:px-4 ${bottom.isVisible ? "sr-visible" : "sr-hidden"}`}>
        <p className="text-lg sm:text-2xl md:text-3xl text-gray-800 leading-snug sm:leading-tight font-medium">
          Dieses Konzept zeigt, wie ein Finanzprodukt leichtgewichtig,
          zugänglich und menschlich wirken kann — ohne Vertrauen oder Sicherheit zu opfern.
        </p>
      </div>
    </section>
  );
}

/* ─── SVG Icons ─���─ */
function SpeedIcon() {
  return (
    <svg className="w-6 h-6 sm:w-8 sm:h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg className="w-6 h-6 sm:w-8 sm:h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    </svg>
  );
}

function TransparencyIcon() {
  return (
    <svg className="w-6 h-6 sm:w-8 sm:h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
    </svg>
  );
}

function SimplicityIcon() {
  return (
    <svg className="w-6 h-6 sm:w-8 sm:h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
    </svg>
  );
}

/* ─── Feature Card ─── */
function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-surface-alt rounded-xl sm:rounded-[2rem] p-5 sm:p-8 flex flex-col items-center text-center justify-center hover:-translate-y-1 transition-transform duration-300">
      <div className="relative mb-4 sm:mb-6 w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center bg-white rounded-xl sm:rounded-2xl shadow-sm border border-gray-100">
        {icon}
      </div>
      <h3 className="text-base sm:text-xl font-bold text-gray-900 mb-1 sm:mb-2">{title}</h3>
      <p className="text-xs sm:text-sm text-gray-500 font-medium leading-relaxed">{description}</p>
    </div>
  );
}
