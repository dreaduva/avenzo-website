/* ═══════════════════════════════════════════════════════════════
   Avenzo-specific mockups and CTAs for the hero section.
   ═══════════════════════════════════════════════════════════════ */

export { PhoneSteuer, PhoneVersicherung, BrowserTreuhand } from "../../components/payline/PaylineHeroMockups";

export function AvenzoStoreButtons() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <a href="#" className="inline-flex items-center gap-2.5 bg-dark text-white pl-4 pr-5 py-2.5 rounded-xl hover:bg-gray-800 transition-colors duration-200 cursor-pointer shadow-sm">
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.19 2.31-.88 3.5-.8 1.54.11 2.8.76 3.65 1.95-3.05 1.81-2.55 5.76.32 6.84-1.28 2.87-2.68 4.29-2.55 4.18zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
        </svg>
        <div className="text-left">
          <div className="text-[8px] font-medium text-gray-400 leading-none">Download on the</div>
          <div className="text-[13px] font-bold leading-tight">App Store</div>
        </div>
      </a>
      <a href="#" className="inline-flex items-center gap-2.5 bg-dark text-white pl-4 pr-5 py-2.5 rounded-xl hover:bg-gray-800 transition-colors duration-200 cursor-pointer shadow-sm">
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.302 2.302a1 1 0 010 1.38l-2.302 2.302L15.396 12l2.302-3.492zM5.864 3.458L16.8 9.791 14.5 12.093 5.864 3.458z" />
        </svg>
        <div className="text-left">
          <div className="text-[8px] font-medium text-gray-400 leading-none">GET IT ON</div>
          <div className="text-[13px] font-bold leading-tight">Google Play</div>
        </div>
      </a>
      <a href="#" className="inline-flex items-center gap-2 bg-white text-gray-900 border border-gray-200 pl-4 pr-5 py-2.5 rounded-xl hover:border-gray-300 hover:shadow-sm transition-colors duration-200 cursor-pointer">
        <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5a17.92 17.92 0 01-8.716-2.247m0 0A8.966 8.966 0 013 12c0-1.264.26-2.466.733-3.559" />
        </svg>
        <div className="text-left">
          <div className="text-[8px] font-medium text-gray-400 leading-none">Im Browser nutzen</div>
          <div className="text-[13px] font-bold leading-tight">Web App</div>
        </div>
      </a>
    </div>
  );
}

export function AvenzoComingSoon() {
  return (
    <div className="flex flex-wrap items-center gap-4">
      <div className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white border border-gray-200 text-sm font-semibold text-gray-400">
        <div className="w-1.5 h-1.5 rounded-full bg-status-pending animate-pulse" />
        Bald verfügbar
      </div>
      <a href="#" className="group inline-flex items-center gap-2 bg-dark text-white px-6 py-3 rounded-full font-bold text-sm hover:bg-gray-800 transition-colors duration-200 cursor-pointer shadow-sm">
        Berater kontaktieren
        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </a>
    </div>
  );
}
