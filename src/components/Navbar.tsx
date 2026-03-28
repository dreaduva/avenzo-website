import { useState, useEffect } from "react";

export function Navbar() {
  const [isDark, setIsDark] = useState(() => {
    // Check local storage or system preference
    if (typeof window !== "undefined") {
      return document.documentElement.classList.contains("dark");
    }
    return true; // Default to dark as per original HTML
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 nav-glass">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#" className="flex items-center">
          <img
            src="/avenzo_icon.svg"
            alt="Avenzo Logo"
            className="logo-main h-8 object-contain transition-all duration-300"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              if (target.parentElement) {
                target.parentElement.innerHTML = '<span style="font-weight:800;letter-spacing:0.1em;font-size:1.2rem;">AVENZO</span>';
              }
            }}
          />
        </a>

        <div className="hidden md:flex items-center space-x-8 font-medium">
          <a href="#services" className="text-gray-600 dark:text-gray-300 hover:text-brand-green dark:hover:text-white transition">Expertise</a>
          <a href="#features" className="text-gray-600 dark:text-gray-300 hover:text-brand-green dark:hover:text-white transition">Plattform</a>
          <a href="#how-it-works" className="text-gray-600 dark:text-gray-300 hover:text-brand-green dark:hover:text-white transition">Ablauf</a>
          <a href="#testimonials" className="text-gray-600 dark:text-gray-300 hover:text-brand-green dark:hover:text-white transition">Kunden</a>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-white/5 dark:hover:bg-white/10 transition-colors text-gray-800 dark:text-white"
            aria-label="Toggle Dark Mode"
          >
            {!isDark ? (
              <svg className="w-5 h-5 block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>
              </svg>
            ) : (
              <svg className="w-5 h-5 block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
              </svg>
            )}
          </button>
          <a href="#contact" className="btn-primary bg-gray-900 text-white hover:bg-black dark:bg-white dark:text-brand-dark dark:hover:bg-gray-100 px-6 py-2.5 rounded-full font-bold shadow-lg">Login</a>
        </div>

        {/* Mobile Menu Btn */}
        <button className="md:hidden text-gray-800 dark:text-white focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
    </nav>
  );
}
