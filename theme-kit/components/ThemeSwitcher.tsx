import { useState, useEffect, useRef } from "react";
import { LoaderShowcase } from "../dev/LoaderShowcase";
import {
  visualStyles,
  colorPalettes,
  fontOptions,
  radiusOptions,
  animationOptions,
  applyThemeState,
  defaultTheme,
} from "../../theme/theme-engine";
import type { ThemeState } from "../../theme/theme-engine";

export function ThemeSwitcher() {
  const [open, setOpen] = useState(false);
  const [loadersOpen, setLoadersOpen] = useState(false);
  const [theme, setTheme] = useState<ThemeState>(defaultTheme);
  const panelRef = useRef<HTMLDivElement>(null);

  // Apply on mount
  useEffect(() => {
    applyThemeState(theme);
  }, []);

  // Apply on change
  const update = (partial: Partial<ThemeState>) => {
    const next = { ...theme, ...partial };
    setTheme(next);
    applyThemeState(next);
  };

  // Close on outside click
  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open]);

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [open]);

  return (
    <>
      {/* Trigger */}
      <button
        onClick={() => setOpen(!open)}
        className={`fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[200] w-11 h-11 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 cursor-pointer ${
          open ? "bg-white text-gray-900 border border-gray-200" : "bg-dark text-white border border-white/10"
        }`}
        aria-label="Theme switcher"
      >
        <svg className="w-[18px] h-[18px] sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
        </svg>
      </button>

      {/* Panel */}
      <div
        ref={panelRef}
        className={`fixed bottom-[4.5rem] sm:bottom-[5.5rem] right-4 sm:right-6 z-[199] w-[280px] sm:w-[300px] transition-all duration-300 ${
          open ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-3 pointer-events-none"
        }`}
        style={{ transitionTimingFunction: "cubic-bezier(0.2, 1, 0.2, 1)" }}
      >
        <div className="bg-white rounded-2xl shadow-[0_24px_64px_-12px_rgba(0,0,0,0.2),0_0_0_1px_rgba(0,0,0,0.05)] overflow-hidden max-h-[calc(100vh-7rem)] overflow-y-auto no-scrollbar">

          {/* ── Style Row ── */}
          <div className="px-4 pt-4 pb-2">
            <Label text="Style" />
            <div className="flex gap-1.5">
              {visualStyles.map((s) => (
                <button
                  key={s.id}
                  onClick={() => update({ styleId: s.id })}
                  className={`flex-1 py-2 rounded-lg text-center cursor-pointer transition-all text-[10px] sm:text-[11px] font-semibold ${
                    theme.styleId === s.id
                      ? "bg-dark text-white shadow-sm"
                      : "bg-gray-50 text-gray-400 hover:bg-gray-100 hover:text-gray-600"
                  }`}
                  title={s.name}
                >
                  <div className="text-sm leading-none mb-0.5">{s.icon}</div>
                  <div className="leading-none">{s.name}</div>
                </button>
              ))}
            </div>
          </div>

          <Divider />

          {/* ── Recommended Colors ── */}
          <div className="px-4 py-2">
            <div className="flex items-center gap-1.5 mb-2">
              <Label text="Recommended" />
              <span className="text-[7px] sm:text-[8px] font-bold uppercase tracking-wider text-emerald-500 bg-emerald-50 px-1.5 py-0.5 rounded">Data-backed</span>
            </div>
            <div className="flex flex-col gap-1.5">
              {colorPalettes.filter((p) => p.recommended).map((p) => (
                <button
                  key={p.id}
                  onClick={() => update({ paletteId: p.id })}
                  className={`flex items-center gap-2.5 px-2.5 py-1.5 rounded-lg cursor-pointer transition-all text-left ${
                    theme.paletteId === p.id
                      ? "ring-2 ring-gray-900 bg-gray-50"
                      : "hover:bg-gray-50"
                  }`}
                >
                  <div
                    className="w-5 h-5 sm:w-6 sm:h-6 rounded-full shrink-0 shadow-sm"
                    style={{ backgroundColor: p.accent }}
                  />
                  <div className="min-w-0">
                    <div className="text-[10px] sm:text-[11px] font-semibold text-gray-900 leading-tight">{p.name}</div>
                    <div className="text-[8px] sm:text-[9px] text-gray-400 font-medium leading-tight truncate">{p.recommendedNote}</div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <Divider />

          {/* ── All Colors ── */}
          <div className="px-4 py-2">
            <Label text="All Colors" />
            <div className="flex gap-1.5 flex-wrap">
              {colorPalettes.filter((p) => !p.recommended).map((p) => (
                <button
                  key={p.id}
                  onClick={() => update({ paletteId: p.id })}
                  className={`w-6 h-6 sm:w-7 sm:h-7 rounded-full cursor-pointer transition-all ${
                    theme.paletteId === p.id
                      ? "ring-2 ring-offset-2 ring-gray-900 scale-110"
                      : "hover:scale-110"
                  }`}
                  style={{ backgroundColor: p.accent }}
                  title={p.name}
                />
              ))}
            </div>
          </div>

          <Divider />

          {/* ── Font Row ── */}
          <div className="px-4 py-2">
            <Label text="Font" />
            <div className="max-h-[84px] overflow-y-auto no-scrollbar">
              <div className="flex gap-1 flex-wrap">
                {fontOptions.map((f) => (
                  <button
                    key={f.id}
                    onClick={() => update({ fontId: f.id })}
                    className={`px-2 py-1 rounded-md cursor-pointer transition-all text-[9px] sm:text-[10px] font-medium whitespace-nowrap ${
                      theme.fontId === f.id
                        ? "bg-dark text-white"
                        : f.category === "serif"
                          ? "bg-amber-50 text-gray-400 hover:bg-amber-100 hover:text-gray-600"
                          : "bg-gray-50 text-gray-400 hover:bg-gray-100 hover:text-gray-600"
                    }`}
                  >
                    {f.name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <Divider />

          {/* ── Radius Row ── */}
          <div className="px-4 pt-2 pb-3">
            <Label text="Radius" />
            <div className="flex gap-1.5">
              {radiusOptions.map((r) => (
                <button
                  key={r.id}
                  onClick={() => update({ radiusId: r.id })}
                  className={`flex-1 py-1.5 rounded-lg cursor-pointer transition-all text-[10px] sm:text-[11px] font-semibold flex items-center justify-center gap-1.5 ${
                    theme.radiusId === r.id
                      ? "bg-dark text-white"
                      : "bg-gray-50 text-gray-400 hover:bg-gray-100 hover:text-gray-600"
                  }`}
                >
                  <RadiusPreview id={r.id} active={theme.radiusId === r.id} />
                  {r.name}
                </button>
              ))}
            </div>
          </div>

          <Divider />

          {/* ── Animation Row ── */}
          <div className="px-4 pt-2 pb-3">
            <Label text="Animation" />
            <div className="flex gap-1.5">
              {animationOptions.map((a) => (
                <button
                  key={a.id}
                  onClick={() => update({ animationId: a.id })}
                  className={`flex-1 py-1.5 rounded-lg cursor-pointer transition-all text-[10px] sm:text-[11px] font-semibold flex items-center justify-center gap-1 ${
                    theme.animationId === a.id
                      ? "bg-dark text-white"
                      : "bg-gray-50 text-gray-400 hover:bg-gray-100 hover:text-gray-600"
                  }`}
                >
                  <span className="text-xs opacity-60">{a.icon}</span>
                  {a.name}
                </button>
              ))}
            </div>
          </div>

          {/* ── Loaders ── */}
          <div className="px-4 pb-1">
            <button
              onClick={() => setLoadersOpen(true)}
              className="w-full py-1.5 text-[10px] sm:text-[11px] font-medium text-gray-500 hover:text-gray-700 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors cursor-pointer"
            >
              AI Loaders
            </button>
          </div>

          {/* ── Reset ── */}
          <div className="px-4 pb-3">
            <button
              onClick={() => { setTheme(defaultTheme); applyThemeState(defaultTheme); }}
              className="w-full py-1.5 text-[10px] sm:text-[11px] font-medium text-gray-300 hover:text-gray-500 transition-colors cursor-pointer"
            >
              Reset to default
            </button>
          </div>
        </div>
      </div>
      <LoaderShowcase open={loadersOpen} onClose={() => setLoadersOpen(false)} />
    </>
  );
}

/* ─── Tiny helpers ─── */

function Label({ text }: { text: string }) {
  return (
    <div className="text-[9px] sm:text-[10px] font-bold text-gray-300 uppercase tracking-widest mb-2">{text}</div>
  );
}

function Divider() {
  return <div className="mx-4 h-px bg-gray-100" />;
}

function RadiusPreview({ id, active }: { id: string; active: boolean }) {
  const r = id === "sharp" ? "1px" : id === "rounded" ? "4px" : "8px";
  return (
    <div
      className={`w-3 h-3 border-2 ${active ? "border-white/60" : "border-gray-300"}`}
      style={{ borderRadius: r }}
    />
  );
}
