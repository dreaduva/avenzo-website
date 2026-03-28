import { useState, useEffect } from "react";

export function PaylineCookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("avenzo-cookies");
    if (!accepted) {
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("avenzo-cookies", "all");
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem("avenzo-cookies", "essential");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-[90] max-w-sm animate-[fadeSlideUp_0.4s_ease-out] pointer-events-auto">
      <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-6">
        <div className="flex items-start gap-3 mb-4">
          <div className="w-8 h-8 rounded-full bg-surface flex items-center justify-center flex-shrink-0 mt-0.5">
            <svg className="w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 text-sm mb-1">Cookie-Einstellungen</h4>
            <p className="text-xs text-gray-500 leading-relaxed">
              Wir verwenden Cookies, um dein Erlebnis zu verbessern und unsere Dienste zu optimieren. Du kannst deine Einstellungen jederzeit anpassen.
            </p>
          </div>
        </div>
        <div className="flex gap-2">
          <button
            onClick={accept}
            className="flex-1 bg-dark text-white text-sm font-bold py-2.5 rounded-xl hover:bg-gray-800 transition-colors"
          >
            Alle akzeptieren
          </button>
          <button
            onClick={decline}
            className="flex-1 bg-surface text-gray-700 text-sm font-bold py-2.5 rounded-xl hover:bg-gray-200 transition-colors border border-gray-100"
          >
            Nur notwendige
          </button>
        </div>
      </div>
    </div>
  );
}
