import { useState } from "react";

export function PaylineNavbar({ theme: _theme }: { theme: "neon" | "original" }) {
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
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
      <nav className="bg-dark text-white rounded-full px-4 py-2.5 flex items-center justify-between w-full max-w-6xl shadow-nav border border-white/10 backdrop-blur-md relative">
        <div className="flex items-center gap-2 pl-4">
          <div
            className="h-5 w-8.5"
            style={{
              backgroundColor: "var(--color-accent)",
              WebkitMaskImage: "url(/avenzo_icon.svg)",
              WebkitMaskSize: "contain",
              WebkitMaskRepeat: "no-repeat",
              WebkitMaskPosition: "center",
              maskImage: "url(/avenzo_icon.svg)",
              maskSize: "contain",
              maskRepeat: "no-repeat",
              maskPosition: "center",
            }}
            title="Avenzo"
          ></div>
          <span className="font-bold text-lg tracking-[0.2em] uppercase mt-0.5">
            AVENZO
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
          <a href="#services" onClick={(e) => handleNavClick(e, "services")} className="hover:text-white transition-colors">
            Funktionen
          </a>
          <a href="#calculator" onClick={(e) => handleNavClick(e, "calculator")} className="hover:text-white transition-colors">
            Preise
          </a>
          <a href="#how-it-works" onClick={(e) => handleNavClick(e, "how-it-works")} className="hover:text-white transition-colors">
            So funktioniert's
          </a>
          <a href="#faq" onClick={(e) => handleNavClick(e, "faq")} className="hover:text-white transition-colors">
            Hilfe
          </a>
        </div>

        <div className="flex items-center gap-3 text-sm font-bold">
          <a
            href="#signin"
            className="hidden md:block hover:text-white transition-colors px-2"
          >
            Anmelden
          </a>
          <a
            href="#signup"
            className="hidden sm:block bg-accent text-accent-text px-6 py-2.5 rounded-full hover:bg-accent-hover transition-all transform hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(var(--accent-rgb),0.3)]"
          >
            Konto erstellen
          </a>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors"
            aria-label="Menu"
          >
            <div className="flex flex-col gap-1.5 w-5">
              <span className={`block h-[2px] bg-white rounded-full transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-[4px]" : ""}`} />
              <span className={`block h-[2px] bg-white rounded-full transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
              <span className={`block h-[2px] bg-white rounded-full transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-[4px]" : ""}`} />
            </div>
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileOpen && (
          <div className="absolute top-full left-0 right-0 mt-3 bg-dark/95 backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl p-6 flex flex-col gap-1 md:hidden animate-[fadeSlideDown_0.25s_ease-out]">
            <a href="#services" onClick={(e) => handleNavClick(e, "services")} className="text-gray-300 hover:text-white hover:bg-white/5 transition-colors font-medium py-3 px-4 rounded-xl">
              Funktionen
            </a>
            <a href="#calculator" onClick={(e) => handleNavClick(e, "calculator")} className="text-gray-300 hover:text-white hover:bg-white/5 transition-colors font-medium py-3 px-4 rounded-xl">
              Preise
            </a>
            <a href="#how-it-works" onClick={(e) => handleNavClick(e, "how-it-works")} className="text-gray-300 hover:text-white hover:bg-white/5 transition-colors font-medium py-3 px-4 rounded-xl">
              So funktioniert's
            </a>
            <a href="#faq" onClick={(e) => handleNavClick(e, "faq")} className="text-gray-300 hover:text-white hover:bg-white/5 transition-colors font-medium py-3 px-4 rounded-xl">
              Hilfe
            </a>
            <div className="border-t border-white/10 mt-3 pt-4 flex flex-col gap-2">
              <a href="#signin" className="text-gray-300 hover:text-white transition-colors font-medium py-3 px-4 rounded-xl text-center">
                Anmelden
              </a>
              <a href="#signup" className="bg-accent text-accent-text px-6 py-3 rounded-full font-bold text-center shadow-[0_0_20px_rgba(var(--accent-rgb),0.3)]">
                Konto erstellen
              </a>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}
