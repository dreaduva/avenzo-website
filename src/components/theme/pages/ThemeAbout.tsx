import { useScrollReveal } from "../../../hooks/useScrollReveal";
import { useSiteConfig } from "../../../config/SiteConfigContext";

export function ThemeAbout() {
  const { about, brand } = useSiteConfig();
  const header = useScrollReveal();
  const stats = useScrollReveal();
  const values = useScrollReveal();
  const team = useScrollReveal();

  if (!about) return null;

  return (
    <section className="pt-28 sm:pt-36 pb-16 sm:pb-24 px-3 sm:px-4 max-w-7xl mx-auto">
      {/* Hero */}
      <div ref={header.ref} className={`text-center mb-16 sm:mb-24 ${header.isVisible ? "sr-visible" : "sr-hidden"}`}>
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-medium tracking-tight text-gray-900 mb-4 sm:mb-6">
          {about.headline}
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-gray-500 max-w-2xl mx-auto font-medium leading-relaxed">
          {about.subheadline}
        </p>
      </div>

      {/* Stats */}
      <div ref={stats.ref} className={`grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto mb-16 sm:mb-24 sr-stagger ${stats.isVisible ? "sr-visible" : ""}`}>
        {about.stats.map((stat, i) => (
          <div key={i} className="theme-card rounded-[var(--radius-card)] p-5 sm:p-8 text-center">
            <div className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-gray-900 mb-1 sm:mb-2">{stat.value}</div>
            <div className="text-xs sm:text-sm font-medium text-gray-500">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Story + Mission */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10 max-w-5xl mx-auto mb-16 sm:mb-24">
        <div className="theme-card rounded-[var(--radius-card)] p-6 sm:p-10">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Unsere Geschichte</h2>
          <p className="text-sm sm:text-base text-gray-500 font-medium leading-relaxed">{about.story}</p>
        </div>
        <div className="theme-card rounded-[var(--radius-card)] p-6 sm:p-10">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Unsere Mission</h2>
          <p className="text-sm sm:text-base text-gray-500 font-medium leading-relaxed">{about.mission}</p>
        </div>
      </div>

      {/* Values */}
      <div ref={values.ref} className={`mb-16 sm:mb-24 ${values.isVisible ? "sr-visible" : "sr-hidden"}`}>
        <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-gray-900 text-center mb-10 sm:mb-14">Unsere Werte</h2>
        <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto sr-stagger ${values.isVisible ? "sr-visible" : ""}`}>
          {about.values.map((val, i) => (
            <div key={i} className="theme-card-soft rounded-[var(--radius-card)] p-6 sm:p-8 text-center">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl theme-inner flex items-center justify-center mx-auto mb-4 sm:mb-5">
                {val.icon}
              </div>
              <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">{val.title}</h3>
              <p className="text-xs sm:text-sm text-gray-500 font-medium leading-relaxed">{val.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Team */}
      <div ref={team.ref} className={`${team.isVisible ? "sr-visible" : "sr-hidden"}`}>
        <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-gray-900 text-center mb-10 sm:mb-14">Das Team hinter {brand.name}</h2>
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto sr-stagger ${team.isVisible ? "sr-visible" : ""}`}>
          {about.team.map((member, i) => (
            <div key={i} className="theme-card rounded-[var(--radius-card)] p-5 sm:p-6 text-center">
              <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-tr ${member.colors} flex items-center justify-center text-white font-bold text-sm sm:text-base mx-auto mb-3 sm:mb-4 shadow-sm`}>
                {member.initials}
              </div>
              <h4 className="font-bold text-gray-900 text-sm sm:text-base">{member.name}</h4>
              <p className="text-xs sm:text-sm text-gray-500 font-medium">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
