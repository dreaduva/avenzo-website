import { useScrollReveal } from "../../hooks/useScrollReveal";
import { useSiteConfig } from "../../config/SiteConfigContext";

export function ThemeCtaFooter() {
  const { ctaFooter, brand } = useSiteConfig();
  const cta = useScrollReveal({ threshold: 0.15 });

  return (
    <footer className="mt-10 sm:mt-20">
      <div className="max-w-7xl mx-auto px-3 sm:px-4">
        {/* CTA Card — horizontal layout inspired by app download sections */}
        <div ref={cta.ref} className={`theme-card rounded-[1.5rem] sm:rounded-[var(--radius-card-lg)] relative overflow-hidden sr-scale ${cta.isVisible ? "sr-visible" : ""}`}>
          {/* Subtle accent glow */}
          <div className="absolute top-0 left-0 w-[300px] sm:w-[500px] h-[300px] sm:h-[400px] bg-accent/[0.04] rounded-full blur-[100px] pointer-events-none -translate-x-1/4 -translate-y-1/4" />
          <div className="absolute bottom-0 right-1/3 w-[200px] sm:w-[300px] h-[200px] sm:h-[300px] bg-accent/[0.03] rounded-full blur-[80px] pointer-events-none translate-y-1/3" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-0 items-center">
            {/* Left — Text + CTAs */}
            <div className="px-6 pt-10 pb-8 sm:px-10 sm:pt-14 sm:pb-12 lg:px-14 lg:py-20 relative z-10">
              <p className="text-xs sm:text-sm font-semibold text-gray-400 uppercase tracking-widest mb-4 sm:mb-5">
                {ctaFooter.headline}
              </p>

              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-medium tracking-tight text-gray-900 leading-[1.05] mb-5 sm:mb-6">
                {ctaFooter.ctaHeading ?? <>Download<br />the app</>}
              </h2>

              {/* Store badges */}
              <div className="flex items-center gap-2.5 sm:gap-3 mb-6 sm:mb-8">
                <a href={ctaFooter.primaryCtaHref} className="inline-flex items-center gap-2.5 pl-3.5 pr-5 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl text-white transition-all hover:opacity-90" style={{ background: "var(--color-dark)" }}>
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.19 2.31-.88 3.5-.8 1.54.11 2.8.76 3.65 1.95-3.05 1.81-2.55 5.76.32 6.84-1.28 2.87-2.68 4.29-2.55 4.18zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                  </svg>
                  <div className="text-left">
                    <div className="text-[7px] sm:text-[8px] font-medium opacity-60 leading-none">Download on the</div>
                    <div className="text-[12px] sm:text-sm font-bold leading-tight">App Store</div>
                  </div>
                </a>
                <a href={ctaFooter.primaryCtaHref} className="inline-flex items-center gap-2.5 pl-3.5 pr-5 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl text-white transition-all hover:opacity-90" style={{ background: "var(--color-dark)" }}>
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.302 2.302a1 1 0 010 1.38l-2.302 2.302L15.396 12l2.302-3.492zM5.864 3.458L16.8 9.791 14.5 12.093 5.864 3.458z" />
                  </svg>
                  <div className="text-left">
                    <div className="text-[7px] sm:text-[8px] font-medium opacity-60 leading-none">GET IT ON</div>
                    <div className="text-[12px] sm:text-sm font-bold leading-tight">Google Play</div>
                  </div>
                </a>
              </div>

              <p className="text-sm sm:text-base text-gray-400 font-medium leading-relaxed max-w-md">
                {ctaFooter.subheadline}
              </p>
            </div>

            {/* Right — Phone mockup (configurable or default) */}
            <div className="relative flex justify-center lg:justify-end items-end h-[300px] sm:h-[380px] lg:h-full lg:min-h-[460px] overflow-hidden">
              {ctaFooter.ctaMockup ? (
                <div className="absolute bottom-0 right-[5%] lg:right-[10%] transform rotate-[-6deg] translate-y-[6%]">
                  {ctaFooter.ctaMockup}
                </div>
              ) : (
              <div className="absolute bottom-0 right-[5%] lg:right-[10%] transform rotate-[-6deg] translate-y-[6%] group">
                {/* iPhone 15 Pro frame */}
                <div className="w-[210px] sm:w-[250px] lg:w-[280px] aspect-[1/2.08] rounded-[2.2rem] sm:rounded-[2.6rem] lg:rounded-[3rem] relative overflow-hidden transition-transform duration-700 group-hover:rotate-[3deg] group-hover:-translate-y-3"
                  style={{
                    background: "linear-gradient(145deg, #2a2a2e 0%, #1a1a1e 50%, #0a0a0c 100%)",
                    boxShadow: "0 30px 80px -10px rgba(0,0,0,0.35), 0 0 0 1px rgba(255,255,255,0.08), inset 0 0 0 1.5px rgba(255,255,255,0.06)",
                  }}
                >
                  {/* Titanium edge highlight */}
                  <div className="absolute inset-0 rounded-[inherit]" style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.12) 0%, transparent 30%, transparent 70%, rgba(255,255,255,0.05) 100%)", pointerEvents: "none" }} />

                  {/* Screen bezel */}
                  <div className="absolute inset-[3px] sm:inset-[4px] lg:inset-[5px] rounded-[2rem] sm:rounded-[2.3rem] lg:rounded-[2.6rem] overflow-hidden bg-black">
                    {/* Dynamic Island */}
                    <div className="absolute top-2 sm:top-2.5 left-1/2 -translate-x-1/2 w-[60px] sm:w-[72px] lg:w-[82px] h-[16px] sm:h-[18px] lg:h-[22px] bg-black rounded-full z-30 flex items-center justify-end pr-2">
                      <div className="w-[6px] h-[6px] sm:w-[7px] sm:h-[7px] rounded-full bg-[#1a1a2e] border border-[#2a2a3e]" />
                    </div>

                    {/* Status bar */}
                    <div className="absolute top-0 left-0 right-0 h-10 sm:h-12 z-20 flex items-end justify-between px-5 sm:px-6 pb-0.5">
                      <span className="text-white text-[8px] sm:text-[9px] font-semibold">9:41</span>
                      <div className="flex items-center gap-1">
                        <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3a4.237 4.237 0 00-6 0zm-4-4l2 2a7.074 7.074 0 0110 0l2-2C15.14 9.14 8.87 9.14 5 13z"/></svg>
                        <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v15.33C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V5.33C17 4.6 16.4 4 15.67 4z"/></svg>
                      </div>
                    </div>

                    {/* Steuererklärung App Screen */}
                    <div className="w-full h-full bg-white pt-11 sm:pt-13 flex flex-col">
                      {/* App header */}
                      <div className="px-4 sm:px-5 pt-2 pb-1.5 flex justify-between items-center">
                        <div className="flex items-center gap-1.5">
                          <div className="w-3 h-3 sm:w-3.5 sm:h-3.5 rounded" style={{ backgroundColor: "var(--color-accent)" }} />
                          <span className="text-[8px] sm:text-[9px] font-bold text-gray-900 tracking-tight">Steuererklärung</span>
                        </div>
                        <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gray-100" />
                      </div>

                      {/* Progress bar */}
                      <div className="px-4 sm:px-5 pt-0.5 pb-2">
                        <div className="flex items-center gap-[2px]">
                          <div className="h-[2px] flex-1 rounded-full" style={{ backgroundColor: "var(--color-accent)" }} />
                          <div className="h-[2px] flex-1 rounded-full" style={{ backgroundColor: "var(--color-accent)" }} />
                          <div className="h-[2px] flex-1 rounded-full" style={{ backgroundColor: "var(--color-accent)" }} />
                        </div>
                      </div>

                      {/* Result screen */}
                      <div className="flex-grow flex flex-col px-4 sm:px-5 bg-gray-50/50">
                        <div className="pt-3 sm:pt-4 pb-1.5">
                          <div className="text-[10px] sm:text-[12px] font-semibold text-gray-900 tracking-tight">Dein Ergebnis</div>
                          <div className="text-[6px] sm:text-[7px] text-gray-400 font-medium mt-0.5">Analyse abgeschlossen</div>
                        </div>

                        {/* Refund card */}
                        <div className="rounded-xl sm:rounded-2xl p-3 sm:p-4 text-center relative overflow-hidden mb-2.5" style={{ background: "linear-gradient(135deg, var(--color-accent) 0%, var(--color-accent-tint-4) 40%, var(--color-accent) 70%, var(--color-accent-deep) 100%)" }}>
                          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent" />
                          <div className="absolute inset-0 anim-shimmer" style={{ background: "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.2) 50%, transparent 60%)", backgroundSize: "200% 100%" }} />
                          <div className="text-[5px] sm:text-[6px] font-semibold uppercase tracking-[0.12em] relative z-10 mb-1.5" style={{ color: "var(--color-accent-text)", opacity: 0.5 }}>Geschätzte Rückerstattung</div>
                          <div className="relative z-10 mb-1">
                            <span className="text-[8px] sm:text-[9px] font-semibold align-top mr-0.5 inline-block mt-0.5" style={{ color: "var(--color-accent-text)", opacity: 0.5 }}>CHF</span>
                            <span className="text-[22px] sm:text-[28px] lg:text-[32px] font-black tracking-tighter leading-none" style={{ color: "var(--color-accent-text)", textShadow: "0 1px 4px rgba(0,0,0,0.06)" }}>1'450</span>
                          </div>
                          <div className="inline-flex items-center gap-1 text-[5px] sm:text-[6px] font-bold px-2 py-0.5 rounded-full relative z-10" style={{ backgroundColor: "rgba(0,0,0,0.06)", color: "var(--color-accent-text)" }}>
                            <svg className="w-1.5 h-1.5 sm:w-2 sm:h-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                            +380 more with {brand.name}
                          </div>
                        </div>

                        {/* Deductions breakdown */}
                        <div className="bg-white rounded-xl sm:rounded-2xl border border-gray-100 p-2.5 sm:p-3 mb-2.5">
                          <div className="text-[5px] sm:text-[6px] font-semibold text-gray-300 uppercase tracking-wider mb-2">Gefundene Abzüge</div>
                          <div className="space-y-1.5 sm:space-y-2">
                            <div className="flex justify-between items-center">
                              <div className="flex items-center gap-1.5">
                                <div className="w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: "var(--color-accent)" }}>
                                  <svg className="w-1.5 h-1.5 sm:w-2 sm:h-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3" style={{ color: "var(--color-accent-text)" }}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                                </div>
                                <span className="text-[7px] sm:text-[8px] font-medium text-gray-700">Pendlerabzug</span>
                              </div>
                              <span className="text-[7px] sm:text-[8px] font-bold text-gray-900">680</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <div className="flex items-center gap-1.5">
                                <div className="w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: "var(--color-accent)" }}>
                                  <svg className="w-1.5 h-1.5 sm:w-2 sm:h-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3" style={{ color: "var(--color-accent-text)" }}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                                </div>
                                <span className="text-[7px] sm:text-[8px] font-medium text-gray-700">Homeoffice</span>
                              </div>
                              <span className="text-[7px] sm:text-[8px] font-bold text-gray-900">420</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <div className="flex items-center gap-1.5">
                                <div className="w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: "var(--color-accent)" }}>
                                  <svg className="w-1.5 h-1.5 sm:w-2 sm:h-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3" style={{ color: "var(--color-accent-text)" }}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                                </div>
                                <span className="text-[7px] sm:text-[8px] font-medium text-gray-700">Säule 3a</span>
                              </div>
                              <span className="text-[7px] sm:text-[8px] font-bold text-gray-900">350</span>
                            </div>
                          </div>
                        </div>

                        {/* Submit CTA */}
                        <button className="w-full py-2 sm:py-2.5 rounded-lg sm:rounded-xl text-white font-bold text-[8px] sm:text-[9px] mt-auto mb-2" style={{ backgroundColor: "var(--color-dark)" }}>
                          Jetzt einreichen
                          <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 inline ml-1 -mt-px" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                        </button>
                      </div>

                      {/* Bottom tab bar */}
                      <div className="bg-white border-t border-gray-100 px-3 sm:px-4 pb-1 pt-1.5 flex items-center justify-around">
                        <div className="flex flex-col items-center">
                          <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" /></svg>
                          <div className="w-0.5 h-0.5 rounded-full bg-gray-900 mt-0.5" />
                        </div>
                        <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" /></svg>
                        <div className="w-7 h-7 sm:w-8 sm:h-8 -mt-3.5 rounded-full flex items-center justify-center ring-2 ring-white" style={{ backgroundColor: "var(--color-dark)" }}>
                          <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" /></svg>
                        </div>
                        <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" /></svg>
                        <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" /></svg>
                      </div>
                      {/* Home indicator */}
                      <div className="flex justify-center pb-1 bg-white">
                        <div className="w-8 sm:w-10 h-[3px] bg-gray-900/80 rounded-full" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              )}

              {/* Social proof */}
              <div className="absolute bottom-4 sm:bottom-6 left-6 sm:left-10 flex items-center gap-2.5 sm:gap-3 z-10">
                <div className="flex -space-x-2">
                  {ctaFooter.socialProofAvatars.map((a, i) => (
                    <div key={i} className={`w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-gradient-to-tr ${a.colors} border-2 border-white text-white text-[8px] sm:text-[9px] font-bold flex items-center justify-center`}>
                      {a.initials}
                    </div>
                  ))}
                </div>
                <p className="text-[10px] sm:text-xs text-gray-400 font-medium">
                  {ctaFooter.socialProofText}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 py-12 sm:py-20 px-2 sm:px-8" style={{ borderBottom: "1px solid var(--card-border)" }}>
          <div className="col-span-2">
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
              <img src={brand.iconSrc} className="w-8 h-8 sm:w-10 sm:h-10 object-contain" alt={brand.name} />
              <span className="text-xl sm:text-2xl font-bold tracking-widest uppercase text-gray-900">{brand.name}</span>
            </div>
            <p className="text-sm text-gray-500 font-medium leading-relaxed max-w-sm mb-6 sm:mb-8">
              {ctaFooter.footerDescription}
            </p>

            <h4 className="font-bold text-gray-900 mb-3 sm:mb-4 uppercase tracking-wider text-xs sm:text-sm">{ctaFooter.contactLabel ?? "Contact"}</h4>
            <p className="text-lg sm:text-xl font-medium text-gray-900 hover:text-accent transition-colors cursor-pointer inline-block mb-5 sm:mb-6">
              {brand.email}
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-2 sm:gap-3">
              {ctaFooter.socialLinks.map((social) => (
                <a key={social.label} href={social.href} className="w-9 h-9 sm:w-10 sm:h-10 rounded-full theme-badge flex items-center justify-center text-gray-400 hover:text-gray-900 transition-all" aria-label={social.label}>
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {ctaFooter.linkGroups.map((group) => (
            <div key={group.title}>
              <h4 className="font-bold text-gray-900 mb-4 sm:mb-6 uppercase tracking-wider text-xs sm:text-sm">{group.title}</h4>
              <ul className="space-y-3 sm:space-y-4">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-sm text-gray-500 hover:text-gray-900 transition-colors font-medium">{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between py-6 sm:py-8 text-xs sm:text-sm text-gray-400 font-medium gap-3 sm:gap-0">
          <div className="flex gap-4 sm:gap-6">
            {ctaFooter.bottomLinks.map((link) => (
              <a key={link.label} href={link.href} className="hover:text-gray-900 transition-colors">{link.label}</a>
            ))}
          </div>
          <p>{ctaFooter.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
