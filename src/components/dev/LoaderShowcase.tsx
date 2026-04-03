export function LoaderShowcase({ open, onClose }: { open: boolean; onClose: () => void }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-black/60 backdrop-blur-sm flex items-center justify-center p-6" onClick={onClose}>
      <div className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-8" onClick={(e) => e.stopPropagation()}>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-bold text-gray-900">Avenzo AI Loaders</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 text-xl">&times;</button>
        </div>
        <div className="space-y-5">
          {loaders.map((l, i) => (
            <div key={i} className="rounded-xl bg-gray-50 border border-gray-100 p-5">
              <div className="w-full h-8 flex items-center">{l.element}</div>
              <div className="text-xs text-gray-400 mt-3"><span className="font-semibold text-gray-600">{i + 1}. {l.name}</span> — {l.desc}</div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        /* 1 — Radial ripple (dense solid) */
        @keyframes lrRipple {
          0%, 100% { opacity: 0.04; transform: scale(0.85); }
          50% { opacity: 0.5; transform: scale(1); }
        }
        .lr-ripple { animation: lrRipple 2s ease-in-out infinite; transform-origin: center; }

        /* 2 — Single outline breathing */
        @keyframes lrBreathe {
          0%, 100% { opacity: 0.15; transform: scale(0.95); }
          50% { opacity: 0.7; transform: scale(1.05); }
        }
        .lr-breathe { animation: lrBreathe 2.5s ease-in-out infinite; transform-origin: center; }

        /* 3 — Conveyor scroll */
        @keyframes lrScroll { 0% { transform: translateX(0); } 100% { transform: translateX(-30px); } }
        .lr-scroll { animation: lrScroll 1s linear infinite; }

        /* 4 — Outline chase */
        @keyframes lrChase {
          0% { stroke-dashoffset: 40; opacity: 0.1; }
          50% { stroke-dashoffset: 0; opacity: 0.6; }
          100% { stroke-dashoffset: -40; opacity: 0.1; }
        }
        .lr-chase { animation: lrChase 2s ease-in-out infinite; }

        /* 5 — Sparse blink */
        @keyframes lrBlink {
          0%, 35%, 100% { opacity: 0.03; }
          15%, 20% { opacity: 0.55; }
        }
        .lr-blink { animation: lrBlink 3s ease-in-out infinite; }

        /* 6 — Growing left to right */
        @keyframes lrGrow {
          0%, 100% { opacity: 0.04; transform: scale(0.4); }
          50% { opacity: 0.5; transform: scale(1); }
        }
        .lr-grow { animation: lrGrow 2.5s ease-in-out infinite; transform-origin: center; }

        /* 7 — Outline wave scan */
        @keyframes lrScan {
          0%, 100% { opacity: 0.05; stroke-width: 0.15; }
          50% { opacity: 0.6; stroke-width: 0.4; }
        }
        .lr-scan { animation: lrScan 1.6s ease-in-out infinite; }

        /* 8 — Duo dance */
        @keyframes lrDanceA {
          0%, 100% { transform: translateY(0); opacity: 0.5; }
          50% { transform: translateY(-4px); opacity: 0.15; }
        }
        @keyframes lrDanceB {
          0%, 100% { transform: translateY(0); opacity: 0.15; }
          50% { transform: translateY(4px); opacity: 0.5; }
        }
        .lr-dance-a { animation: lrDanceA 1.4s ease-in-out infinite; }
        .lr-dance-b { animation: lrDanceB 1.4s ease-in-out infinite; }

        /* 9 — Fade cascade */
        @keyframes lrCascade {
          0%, 100% { opacity: 0.03; }
          20%, 30% { opacity: 0.45; }
        }
        .lr-cascade { animation: lrCascade 2s ease-in-out infinite; }

        /* 10 — Ping single */
        @keyframes lrPing {
          0%, 100% { transform: scale(1); opacity: 0.5; }
          50% { transform: scale(1.3); opacity: 0.1; }
        }
        @keyframes lrPingRing {
          0% { transform: scale(0.8); opacity: 0.5; }
          100% { transform: scale(2.5); opacity: 0; }
        }
        .lr-ping { animation: lrPing 2s ease-in-out infinite; transform-origin: center; }
        .lr-ping-ring { animation: lrPingRing 2s ease-out infinite; transform-origin: center; }

        /* 11 — Outline morph */
        @keyframes lrMorph {
          0%, 100% { stroke-dasharray: 0 100; opacity: 0.1; }
          50% { stroke-dasharray: 100 0; opacity: 0.5; }
        }
        .lr-morph { animation: lrMorph 3s ease-in-out infinite; }

        /* 12 — Matrix fall */
        @keyframes lrFall {
          0% { transform: translateY(-12px); opacity: 0; }
          30% { opacity: 0.4; }
          100% { transform: translateY(12px); opacity: 0; }
        }
        .lr-fall { animation: lrFall 1.8s ease-in infinite; }

        /* 13 — Ripple expand */
        @keyframes lrRipRing {
          0% { transform: scale(1); opacity: 0.45; }
          100% { transform: scale(4); opacity: 0; }
        }
        .lr-rip-ring { animation: lrRipRing 2.5s ease-out infinite; transform-origin: center; }
      `}</style>
    </div>
  );
}

const C = "#8ebd1e";

/* Avenzo icon paths — reused across loaders */
const SOLID_PATHS = (
  <>
    <path d="m1.52 4.1 1.99-4.08h1.54l1.18 2.44-1.16 1.29-0.77-1.84-0.89 1.87c-0.61-0.19-1.31-0.11-1.89 0.32z" />
    <path d="m7.11 4.1-0.97 1.32 0.71 1.86h1.79l-1.53-3.18z" />
    <path d="m0.18 7.29 0.98-2.26c0.41-0.91 1.66-1.17 2.36-0.54l0.8 0.65c0.1 0.08 0.2 0.07 0.29-0.04l2.61-3.28-0.52-0.6 2.23-0.47-0.19 2.39-0.59-0.55-3.7 4.29-0.11 0.01-1.55-1.79-0.98 2.19h-1.63z" />
  </>
);

const OUTLINE_PATHS = (
  <>
    <path d="m1.52 4.1 1.99-4.08h1.54l1.18 2.44-1.16 1.29-0.77-1.84-0.89 1.87c-0.61-0.19-1.31-0.11-1.89 0.32z" fill="none" stroke={C} strokeWidth="0.2" />
    <path d="m7.11 4.1-0.97 1.32 0.71 1.86h1.79l-1.53-3.18z" fill="none" stroke={C} strokeWidth="0.2" />
    <path d="m0.18 7.29 0.98-2.26c0.41-0.91 1.66-1.17 2.36-0.54l0.8 0.65c0.1 0.08 0.2 0.07 0.29-0.04l2.61-3.28-0.52-0.6 2.23-0.47-0.19 2.39-0.59-0.55-3.7 4.29-0.11 0.01-1.55-1.79-0.98 2.19h-1.63z" fill="none" stroke={C} strokeWidth="0.2" />
  </>
);

function seeded(seed: number) { return ((Math.sin(seed * 127.1) * 43758.5453) % 1 + 1) % 1; }

const loaders: { name: string; desc: string; element: React.ReactNode }[] = [
  {
    name: "Radial Ripple",
    desc: "Dense solid grid — pulse radiates from center like sonar",
    element: (
      <svg className="w-full h-8" viewBox="0 0 400 24" fill="none">
        <defs><g id="l1">{SOLID_PATHS}</g></defs>
        {Array.from({ length: 20 }, (_, col) =>
          [0, 1, 2].map((row) => {
            const x = col * 22 + (row === 1 ? 11 : 0);
            const y = row * 8;
            const dist = Math.sqrt((x - 200) ** 2 + (y - 12) ** 2);
            return <use key={`${col}-${row}`} className="lr-ripple" href="#l1" x={x} y={y} fill={C} style={{ animationDelay: `${(dist * 0.007).toFixed(2)}s` }} />;
          })
        )}
      </svg>
    ),
  },
  {
    name: "Lone Breath",
    desc: "Single large outline icon, gently breathing at center",
    element: (
      <div className="w-full h-8 flex items-center justify-center">
        <svg className="w-8 h-6 lr-breathe" viewBox="0 0 10 7.3" fill="none">
          {OUTLINE_PATHS}
        </svg>
      </div>
    ),
  },
  {
    name: "Outline Conveyor",
    desc: "Single row of outline icons scrolling left endlessly",
    element: (
      <div className="w-full h-8 overflow-hidden flex items-center">
        <svg className="w-[120%] h-4 lr-scroll" viewBox="0 0 480 10" fill="none">
          <defs><g id="l3">{OUTLINE_PATHS}</g></defs>
          {Array.from({ length: 18 }, (_, i) => (
            <use key={i} href="#l3" x={i * 30} y={1} opacity="0.3" />
          ))}
        </svg>
      </div>
    ),
  },
  {
    name: "Trace Chase",
    desc: "Outline icons with dashed strokes chasing around the paths",
    element: (
      <svg className="w-full h-8" viewBox="0 0 400 24" fill="none">
        {Array.from({ length: 8 }, (_, i) => {
          const x = i * 52 + 10;
          return (
            <g key={i} className="lr-chase" transform={`translate(${x}, 4) scale(2.2)`} style={{ animationDelay: `${i * 0.25}s` }}>
              <path d="m1.52 4.1 1.99-4.08h1.54l1.18 2.44-1.16 1.29-0.77-1.84-0.89 1.87c-0.61-0.19-1.31-0.11-1.89 0.32z" fill="none" stroke={C} strokeWidth="0.15" strokeDasharray="3 2" />
              <path d="m7.11 4.1-0.97 1.32 0.71 1.86h1.79l-1.53-3.18z" fill="none" stroke={C} strokeWidth="0.15" strokeDasharray="3 2" />
              <path d="m0.18 7.29 0.98-2.26c0.41-0.91 1.66-1.17 2.36-0.54l0.8 0.65c0.1 0.08 0.2 0.07 0.29-0.04l2.61-3.28-0.52-0.6 2.23-0.47-0.19 2.39-0.59-0.55-3.7 4.29-0.11 0.01-1.55-1.79-0.98 2.19h-1.63z" fill="none" stroke={C} strokeWidth="0.15" strokeDasharray="3 2" />
            </g>
          );
        })}
      </svg>
    ),
  },
  {
    name: "Sparse Fireflies",
    desc: "5 solid icons at random spots — blink independently like fireflies",
    element: (
      <svg className="w-full h-8" viewBox="0 0 400 24" fill="none">
        <defs><g id="l5">{SOLID_PATHS}</g></defs>
        {[
          { x: 30, y: 3, s: 1.2, d: 0 },
          { x: 120, y: 12, s: 0.9, d: 0.8 },
          { x: 200, y: 5, s: 1.5, d: 1.6 },
          { x: 290, y: 14, s: 1.1, d: 0.4 },
          { x: 360, y: 7, s: 0.8, d: 2.2 },
        ].map((p, i) => (
          <use key={i} className="lr-blink" href="#l5" x={p.x} y={p.y} fill={C} transform={`translate(${p.x},${p.y}) scale(${p.s}) translate(${-p.x},${-p.y})`} style={{ animationDelay: `${p.d}s` }} />
        ))}
      </svg>
    ),
  },
  {
    name: "Perspective Grow",
    desc: "Solid icons scale small→large L→R — approaching camera feel",
    element: (
      <svg className="w-full h-8" viewBox="0 0 400 24" fill="none">
        <defs><g id="l6">{SOLID_PATHS}</g></defs>
        {Array.from({ length: 8 }, (_, i) => {
          const s = 0.4 + i * 0.3;
          const x = 15 + i * 52;
          const y = 12 - (s * 7.3) / 2;
          return <use key={i} className="lr-grow" href="#l6" x={x} y={y} fill={C} transform={`translate(${x},${y}) scale(${s}) translate(${-x},${-y})`} style={{ animationDelay: `${i * 0.15}s` }} />;
        })}
      </svg>
    ),
  },
  {
    name: "Outline Wave",
    desc: "Row of outline icons — stroke thickness pulses in a wave L→R",
    element: (
      <svg className="w-full h-8" viewBox="0 0 400 24" fill="none">
        {Array.from({ length: 12 }, (_, i) => {
          const x = i * 34 + 5;
          return (
            <g key={i} className="lr-scan" transform={`translate(${x}, 4) scale(2)`} style={{ animationDelay: `${i * 0.12}s` }}>
              <path d="m1.52 4.1 1.99-4.08h1.54l1.18 2.44-1.16 1.29-0.77-1.84-0.89 1.87c-0.61-0.19-1.31-0.11-1.89 0.32z" fill="none" stroke={C} strokeWidth="0.2" />
              <path d="m7.11 4.1-0.97 1.32 0.71 1.86h1.79l-1.53-3.18z" fill="none" stroke={C} strokeWidth="0.2" />
              <path d="m0.18 7.29 0.98-2.26c0.41-0.91 1.66-1.17 2.36-0.54l0.8 0.65c0.1 0.08 0.2 0.07 0.29-0.04l2.61-3.28-0.52-0.6 2.23-0.47-0.19 2.39-0.59-0.55-3.7 4.29-0.11 0.01-1.55-1.79-0.98 2.19h-1.63z" fill="none" stroke={C} strokeWidth="0.2" />
            </g>
          );
        })}
      </svg>
    ),
  },
  {
    name: "Duo Dance",
    desc: "Pairs of solid + outline icons — one rises as the other falls",
    element: (
      <svg className="w-full h-8" viewBox="0 0 400 28" fill="none">
        <defs>
          <g id="l8s">{SOLID_PATHS}</g>
          <g id="l8o">{OUTLINE_PATHS}</g>
        </defs>
        {Array.from({ length: 7 }, (_, i) => {
          const x = i * 58 + 10;
          return (
            <g key={i}>
              <use className="lr-dance-a" href="#l8s" x={x} y={8} fill={C} style={{ animationDelay: `${i * 0.2}s` }} />
              <use className="lr-dance-b" href="#l8o" x={x + 14} y={10} style={{ animationDelay: `${i * 0.2}s` }} />
            </g>
          );
        })}
      </svg>
    ),
  },
  {
    name: "Fade Cascade",
    desc: "Solid icons light up one after another in sequence, then reset",
    element: (
      <svg className="w-full h-8" viewBox="0 0 400 12" fill="none">
        <defs><g id="l9">{SOLID_PATHS}</g></defs>
        {Array.from({ length: 15 }, (_, i) => (
          <use key={i} className="lr-cascade" href="#l9" x={i * 28 + 5} y={2} fill={C} style={{ animationDelay: `${i * 0.12}s` }} />
        ))}
      </svg>
    ),
  },
  {
    name: "Center Ping",
    desc: "Single solid icon at center with expanding outline rings",
    element: (
      <div className="w-full h-8 flex items-center justify-center relative">
        {[0, 0.7, 1.4].map((d, i) => (
          <svg key={i} className="w-8 h-6 lr-ping-ring absolute" viewBox="0 0 10 7.3" fill="none" style={{ animationDelay: `${d}s` }}>
            {OUTLINE_PATHS}
          </svg>
        ))}
        <svg className="w-8 h-6 lr-ping relative" viewBox="0 0 10 7.3" fill={C}>
          {SOLID_PATHS}
        </svg>
      </div>
    ),
  },
  {
    name: "Draw On",
    desc: "Outline icons — strokes gradually draw themselves in a wave",
    element: (
      <svg className="w-full h-8" viewBox="0 0 400 24" fill="none">
        {Array.from({ length: 10 }, (_, i) => {
          const x = i * 42 + 5;
          return (
            <g key={i} className="lr-morph" transform={`translate(${x}, 3) scale(2.5)`} style={{ animationDelay: `${i * 0.3}s` }}>
              <path d="m1.52 4.1 1.99-4.08h1.54l1.18 2.44-1.16 1.29-0.77-1.84-0.89 1.87c-0.61-0.19-1.31-0.11-1.89 0.32z" fill="none" stroke={C} strokeWidth="0.15" />
              <path d="m7.11 4.1-0.97 1.32 0.71 1.86h1.79l-1.53-3.18z" fill="none" stroke={C} strokeWidth="0.15" />
              <path d="m0.18 7.29 0.98-2.26c0.41-0.91 1.66-1.17 2.36-0.54l0.8 0.65c0.1 0.08 0.2 0.07 0.29-0.04l2.61-3.28-0.52-0.6 2.23-0.47-0.19 2.39-0.59-0.55-3.7 4.29-0.11 0.01-1.55-1.79-0.98 2.19h-1.63z" fill="none" stroke={C} strokeWidth="0.15" />
            </g>
          );
        })}
      </svg>
    ),
  },
  {
    name: "Matrix Rain",
    desc: "Tiny solid icons falling in columns at different speeds",
    element: (
      <div className="w-full h-8 overflow-hidden relative">
        <svg className="w-full h-full absolute inset-0" viewBox="0 0 400 32" fill="none">
          <defs><g id="l12">{SOLID_PATHS}</g></defs>
          {Array.from({ length: 20 }, (_, i) => {
            const x = seeded(i * 5) * 380;
            const delay = seeded(i * 7 + 1) * 1.8;
            const dur = 1.2 + seeded(i * 11 + 2) * 1;
            const s = 0.5 + seeded(i * 13) * 0.5;
            return <use key={i} className="lr-fall" href="#l12" x={x} y={10} fill={C} transform={`translate(${x},10) scale(${s}) translate(${-x},-10)`} style={{ animationDelay: `${delay.toFixed(1)}s`, animationDuration: `${dur.toFixed(1)}s` }} />;
          })}
        </svg>
      </div>
    ),
  },
  {
    name: "Ripple",
    desc: "Solid icon at center with outline copies expanding outward like a water drop",
    element: (
      <div className="w-full h-8 flex items-center justify-center relative">
        {[0, 0.8, 1.6].map((d, i) => (
          <svg key={i} className="w-8 h-6 lr-rip-ring absolute" viewBox="0 0 10 7.3" fill="none" style={{ animationDelay: `${d}s` }}>
            {OUTLINE_PATHS}
          </svg>
        ))}
        <svg className="w-8 h-6 relative" viewBox="0 0 10 7.3" fill={C} opacity="0.6">
          {SOLID_PATHS}
        </svg>
      </div>
    ),
  },
];
