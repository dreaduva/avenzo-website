import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useSiteConfig } from "../../config/SiteConfigContext";

export function ThemeNavbar() {
  const { brand, nav } = useSiteConfig();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setMobileOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="fixed top-3 sm:top-6 left-0 right-0 z-50 flex justify-center px-3 sm:px-4">
      <nav
        className="rounded-full px-3 sm:px-4 py-2 sm:py-2.5 flex items-center justify-between w-full max-w-6xl shadow-nav relative"
        style={{
          background: "var(--nav-bg)",
          color: "var(--nav-text)",
          borderWidth: "1px", borderStyle: "solid", borderColor: "var(--nav-border)",
          backdropFilter: "var(--nav-backdrop)", WebkitBackdropFilter: "var(--nav-backdrop)",
        }}
      >
        {/* Logo */}
        <div className="flex items-center gap-1.5 sm:gap-2 pl-2 sm:pl-4">
          <div
            className="h-4 w-7 sm:h-5 sm:w-8.5"
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
            title={brand.name}
          />
          <span className="font-bold text-sm sm:text-lg tracking-[0.2em] uppercase">
            {brand.name}
          </span>
        </div>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium" style={{ color: "var(--nav-text-muted)" }}>
          {nav.links.map((link) =>
            link.href ? (
              <Link key={link.href} to={link.href} className="hover:opacity-100 transition-opacity opacity-80">
                {link.label}
              </Link>
            ) : (
              <a
                key={link.sectionId}
                href={`#${link.sectionId}`}
                onClick={(e) => handleNavClick(e, link.sectionId!)}
                className="hover:opacity-100 transition-opacity opacity-80"
              >
                {link.label}
              </a>
            )
          )}
          {nav.pageLinks?.map((link) => (
            <Link key={link.href} to={link.href!} className="hover:opacity-100 transition-opacity opacity-80">
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-2 sm:gap-3 text-sm font-bold">
          <a href={nav.signInHref} className="hidden md:block transition-opacity opacity-80 hover:opacity-100 px-2">
            {nav.signInLabel}
          </a>
          <a href={nav.ctaHref} className="hidden sm:block bg-accent text-accent-text px-4 sm:px-6 py-2 sm:py-2.5 rounded-full hover:bg-accent-hover transition-all transform hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(var(--accent-rgb),0.3)] text-xs sm:text-sm">
            {nav.ctaLabel}
          </a>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-full hover:opacity-70 transition-opacity"
            aria-label="Menu"
          >
            <div className="flex flex-col gap-1.5 w-5">
              <span className="block h-[2px] rounded-full transition-all duration-300" style={{ backgroundColor: "var(--nav-text)", transform: mobileOpen ? "rotate(45deg) translateY(4px)" : "none" }} />
              <span className="block h-[2px] rounded-full transition-all duration-300" style={{ backgroundColor: "var(--nav-text)", opacity: mobileOpen ? 0 : 1 }} />
              <span className="block h-[2px] rounded-full transition-all duration-300" style={{ backgroundColor: "var(--nav-text)", transform: mobileOpen ? "rotate(-45deg) translateY(-4px)" : "none" }} />
            </div>
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileOpen && (
          <div
            className="absolute top-full left-0 right-0 mt-2 rounded-2xl shadow-2xl p-4 flex flex-col gap-0.5 md:hidden animate-[fadeSlideDown_0.25s_ease-out] max-h-[70vh] overflow-y-auto"
            style={{
              background: "var(--nav-bg)",
              color: "var(--nav-text)",
              borderWidth: "1px", borderStyle: "solid", borderColor: "var(--nav-border)",
              backdropFilter: "var(--nav-backdrop)", WebkitBackdropFilter: "var(--nav-backdrop)",
            }}
          >
            {nav.links.map((link) =>
              link.href ? (
                <Link key={link.href} to={link.href} onClick={() => setMobileOpen(false)} className="hover:opacity-100 opacity-70 transition-opacity font-medium py-3 px-4 rounded-xl text-[15px]">
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.sectionId}
                  href={`#${link.sectionId}`}
                  onClick={(e) => handleNavClick(e, link.sectionId!)}
                  className="hover:opacity-100 opacity-70 transition-opacity font-medium py-3 px-4 rounded-xl text-[15px]"
                >
                  {link.label}
                </a>
              )
            )}
            {nav.pageLinks?.map((link) => (
              <Link key={link.href} to={link.href!} onClick={() => setMobileOpen(false)} className="hover:opacity-100 opacity-70 transition-opacity font-medium py-3 px-4 rounded-xl text-[15px]">
                {link.label}
              </Link>
            ))}
            <div className="mt-2 pt-3 flex flex-col gap-2" style={{ borderTop: "1px solid var(--nav-border)" }}>
              <a href={nav.signInHref} className="opacity-70 hover:opacity-100 transition-opacity font-medium py-3 px-4 rounded-xl text-center text-[15px]">
                {nav.signInLabel}
              </a>
              <a href={nav.ctaHref} className="bg-accent text-accent-text px-6 py-3 rounded-full font-bold text-center shadow-[0_0_20px_rgba(var(--accent-rgb),0.3)] text-sm">
                {nav.ctaLabel}
              </a>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}
