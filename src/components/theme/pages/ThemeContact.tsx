import { useScrollReveal } from "../../../hooks/useScrollReveal";
import { useSiteConfig } from "../../../config/SiteConfigContext";

export function ThemeContact() {
  const { contact, brand } = useSiteConfig();
  const header = useScrollReveal();
  const content = useScrollReveal();

  if (!contact) return null;

  return (
    <section className="pt-28 sm:pt-36 pb-16 sm:pb-24 px-3 sm:px-4 max-w-7xl mx-auto">
      <div ref={header.ref} className={`text-center mb-12 sm:mb-20 ${header.isVisible ? "sr-visible" : "sr-hidden"}`}>
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-medium tracking-tight text-gray-900 mb-4 sm:mb-6">
          {contact.headline}
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-gray-500 max-w-2xl mx-auto font-medium leading-relaxed">
          {contact.subheadline}
        </p>
      </div>

      <div ref={content.ref} className={`grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10 max-w-5xl mx-auto ${content.isVisible ? "sr-visible" : "sr-hidden"}`}>
        {/* Contact info */}
        <div className="flex flex-col gap-6">
          <div className="theme-card rounded-[var(--radius-card)] p-6 sm:p-8">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6">Kontaktinformationen</h3>
            <div className="space-y-4 sm:space-y-5">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl theme-inner flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-semibold text-gray-400 uppercase tracking-wider mb-1">E-Mail</div>
                  <div className="text-sm sm:text-base font-medium text-gray-900">{contact.email}</div>
                </div>
              </div>
              {contact.phone && (
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl theme-inner flex items-center justify-center shrink-0">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm font-semibold text-gray-400 uppercase tracking-wider mb-1">Telefon</div>
                    <div className="text-sm sm:text-base font-medium text-gray-900">{contact.phone}</div>
                  </div>
                </div>
              )}
              {contact.address && (
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl theme-inner flex items-center justify-center shrink-0">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm font-semibold text-gray-400 uppercase tracking-wider mb-1">Adresse</div>
                    <div className="text-sm sm:text-base font-medium text-gray-900 whitespace-pre-line">{contact.address}</div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Brand trust element */}
          <div className="theme-card-soft rounded-[var(--radius-card)] p-6 sm:p-8 text-center">
            <div className="w-12 h-12 rounded-xl mx-auto mb-3" style={{ backgroundColor: "var(--color-accent)", WebkitMaskImage: `url(${brand.iconSrc})`, WebkitMaskSize: "contain", WebkitMaskRepeat: "no-repeat", WebkitMaskPosition: "center", maskImage: `url(${brand.iconSrc})`, maskSize: "contain", maskRepeat: "no-repeat", maskPosition: "center" }} />
            <p className="text-sm text-gray-500 font-medium">Wir antworten in der Regel innerhalb von 24 Stunden.</p>
          </div>
        </div>

        {/* Contact form */}
        <div className="theme-card rounded-[var(--radius-card)] p-6 sm:p-8">
          <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-6 sm:mb-8">Nachricht senden</h3>
          <form onSubmit={(e) => e.preventDefault()} className="space-y-4 sm:space-y-5">
            {contact.formFields.map((field, i) => (
              <div key={i}>
                <label className="block text-[10px] sm:text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">
                  {field.label}
                </label>
                {field.type === "textarea" ? (
                  <textarea
                    placeholder={field.placeholder}
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl text-sm font-medium text-gray-900 placeholder-gray-300 outline-none transition-all focus:ring-2 focus:ring-accent/30"
                    style={{ background: "var(--input-bg, var(--color-surface))", border: "1px solid var(--card-border)" }}
                  />
                ) : (
                  <input
                    type={field.type}
                    placeholder={field.placeholder}
                    className="w-full px-4 py-3 rounded-xl text-sm font-medium text-gray-900 placeholder-gray-300 outline-none transition-all focus:ring-2 focus:ring-accent/30"
                    style={{ background: "var(--input-bg, var(--color-surface))", border: "1px solid var(--card-border)" }}
                  />
                )}
              </div>
            ))}
            <button
              type="submit"
              className="w-full py-3 sm:py-4 rounded-xl sm:rounded-2xl font-bold text-sm text-white transition-all hover:opacity-90 flex items-center justify-center gap-2"
              style={{ background: "var(--color-dark)" }}
            >
              {contact.submitLabel}
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
