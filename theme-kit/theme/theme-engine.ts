/* ═══════════════════════════════════════════════════════════════
   THEME ENGINE — Mix & match: Style × Palette × Font × Radius
   Each axis is independent. Pick a visual style, then customize
   colors, typography, and roundness separately.
   ═══════════════════════════════════════════════════════════════ */

/* ─── STYLES ─── */
/* Fundamental visual language — changes how every card/surface looks */

export interface VisualStyle {
  id: string;
  name: string;
  icon: string; // emoji for compact display
  css: {
    cardBg: string;
    cardBgHover: string;
    cardBorder: string;
    cardBorderHover: string;
    cardBackdrop: string;
    cardShadow: string;
    cardShadowHover: string;
    navBg: string;
    navBorder: string;
    navBackdrop: string;
    sectionBg: string;           // e.g. how-it-works section
    surfaceOnDark: string;       // card-like elements on dark bg (calculator)
    surfaceOnDarkBorder: string;
    inputBg: string;
    badgeBg: string;
    badgeBorder: string;
    innerBg: string;             // elements inside cards (icon boxes, checkmarks)
    innerBorder: string;
    innerShadow: string;
    navText: string;             // navbar text color (white on dark bg, dark on transparent)
    navTextMuted: string;        // navbar secondary text
    cardOnDarkBg: string;        // card sitting on a dark section (calculator widget)
    cardOnDarkBorder: string;
  };
}

export const visualStyles: VisualStyle[] = [
  {
    id: "solid",
    name: "Solid",
    icon: "■",
    css: {
      cardBg: "var(--color-surface)",
      cardBgHover: "#FFFFFF",
      cardBorder: "transparent",
      cardBorderHover: "rgba(0,0,0,0.06)",
      cardBackdrop: "none",
      cardShadow: "0 2px 8px rgba(0,0,0,0.03)",
      cardShadowHover: "0 20px 40px rgba(0,0,0,0.06)",
      navBg: "var(--color-dark)",
      navBorder: "rgba(255,255,255,0.1)",
      navBackdrop: "blur(12px)",
      sectionBg: "var(--color-surface)",
      surfaceOnDark: "rgba(255,255,255,0.05)",
      surfaceOnDarkBorder: "rgba(255,255,255,0.1)",
      inputBg: "var(--color-surface)",
      badgeBg: "var(--color-surface)",
      badgeBorder: "rgba(0,0,0,0.06)",
      innerBg: "#FFFFFF",
      innerBorder: "rgba(0,0,0,0.05)",
      innerShadow: "0 1px 3px rgba(0,0,0,0.04)",
      navText: "#FFFFFF",
      navTextMuted: "rgba(255,255,255,0.65)",
      cardOnDarkBg: "#FFFFFF",
      cardOnDarkBorder: "rgba(255,255,255,0.2)",
    },
  },
  {
    id: "glass",
    name: "Glass",
    icon: "◇",
    css: {
      cardBg: "rgba(255,255,255,0.45)",
      cardBgHover: "rgba(255,255,255,0.65)",
      cardBorder: "rgba(255,255,255,0.5)",
      cardBorderHover: "rgba(255,255,255,0.7)",
      cardBackdrop: "blur(20px) saturate(1.4)",
      cardShadow: "0 8px 32px rgba(0,0,0,0.04), inset 0 1px 0 rgba(255,255,255,0.6)",
      cardShadowHover: "0 16px 48px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.8)",
      navBg: "rgba(17,17,17,0.6)",
      navBorder: "rgba(255,255,255,0.12)",
      navBackdrop: "blur(24px) saturate(1.5)",
      sectionBg: "rgba(255,255,255,0.35)",
      surfaceOnDark: "rgba(255,255,255,0.08)",
      surfaceOnDarkBorder: "rgba(255,255,255,0.12)",
      inputBg: "rgba(255,255,255,0.5)",
      badgeBg: "rgba(255,255,255,0.4)",
      badgeBorder: "rgba(255,255,255,0.5)",
      innerBg: "rgba(255,255,255,0.5)",
      innerBorder: "rgba(255,255,255,0.4)",
      innerShadow: "0 2px 8px rgba(0,0,0,0.04), inset 0 1px 0 rgba(255,255,255,0.5)",
      navText: "#FFFFFF",
      navTextMuted: "rgba(255,255,255,0.65)",
      cardOnDarkBg: "rgba(255,255,255,0.9)",
      cardOnDarkBorder: "rgba(255,255,255,0.3)",
    },
  },
  {
    id: "outline",
    name: "Outline",
    icon: "□",
    css: {
      cardBg: "transparent",
      cardBgHover: "rgba(0,0,0,0.02)",
      cardBorder: "rgba(0,0,0,0.10)",
      cardBorderHover: "rgba(0,0,0,0.20)",
      cardBackdrop: "none",
      cardShadow: "none",
      cardShadowHover: "none",
      navBg: "rgba(255,255,255,0.85)",
      navBorder: "rgba(0,0,0,0.10)",
      navBackdrop: "blur(16px) saturate(1.2)",
      sectionBg: "transparent",
      surfaceOnDark: "transparent",
      surfaceOnDarkBorder: "rgba(255,255,255,0.2)",
      inputBg: "transparent",
      badgeBg: "transparent",
      badgeBorder: "rgba(0,0,0,0.12)",
      innerBg: "transparent",
      innerBorder: "rgba(0,0,0,0.12)",
      innerShadow: "none",
      navText: "var(--color-dark)",
      navTextMuted: "rgba(0,0,0,0.5)",
      cardOnDarkBg: "#FFFFFF",
      cardOnDarkBorder: "rgba(0,0,0,0.12)",
    },
  },
  {
    id: "elevated",
    name: "Elevated",
    icon: "▣",
    css: {
      cardBg: "#FFFFFF",
      cardBgHover: "#FFFFFF",
      cardBorder: "transparent",
      cardBorderHover: "transparent",
      cardBackdrop: "none",
      cardShadow: "0 4px 24px -2px rgba(0,0,0,0.06), 0 1px 3px rgba(0,0,0,0.04)",
      cardShadowHover: "0 24px 48px -8px rgba(0,0,0,0.1), 0 2px 6px rgba(0,0,0,0.04)",
      navBg: "var(--color-dark)",
      navBorder: "transparent",
      navBackdrop: "none",
      sectionBg: "#FFFFFF",
      surfaceOnDark: "rgba(255,255,255,0.06)",
      surfaceOnDarkBorder: "transparent",
      inputBg: "#FFFFFF",
      badgeBg: "#FFFFFF",
      badgeBorder: "transparent",
      innerBg: "var(--color-surface)",
      innerBorder: "transparent",
      innerShadow: "0 2px 8px rgba(0,0,0,0.06)",
      navText: "#FFFFFF",
      navTextMuted: "rgba(255,255,255,0.65)",
      cardOnDarkBg: "#FFFFFF",
      cardOnDarkBorder: "transparent",
    },
  },
  {
    id: "flat",
    name: "Flat",
    icon: "▭",
    css: {
      cardBg: "var(--color-surface)",
      cardBgHover: "var(--color-surface-alt)",
      cardBorder: "transparent",
      cardBorderHover: "transparent",
      cardBackdrop: "none",
      cardShadow: "none",
      cardShadowHover: "none",
      navBg: "var(--color-dark)",
      navBorder: "transparent",
      navBackdrop: "none",
      sectionBg: "var(--color-surface)",
      surfaceOnDark: "rgba(255,255,255,0.06)",
      surfaceOnDarkBorder: "transparent",
      inputBg: "var(--color-surface)",
      badgeBg: "var(--color-surface)",
      badgeBorder: "transparent",
      innerBg: "#FFFFFF",
      innerBorder: "transparent",
      innerShadow: "none",
      navText: "#FFFFFF",
      navTextMuted: "rgba(255,255,255,0.65)",
      cardOnDarkBg: "var(--color-surface)",
      cardOnDarkBorder: "transparent",
    },
  },
  {
    id: "brutal",
    name: "Brutal",
    icon: "▧",
    css: {
      cardBg: "#FFFFFF",
      cardBgHover: "#FFFFFF",
      cardBorder: "var(--color-dark)",
      cardBorderHover: "var(--color-dark)",
      cardBackdrop: "none",
      cardShadow: "4px 4px 0 var(--color-dark)",
      cardShadowHover: "6px 6px 0 var(--color-dark)",
      navBg: "var(--color-dark)",
      navBorder: "var(--color-dark)",
      navBackdrop: "none",
      sectionBg: "#FFFFFF",
      surfaceOnDark: "rgba(255,255,255,0.08)",
      surfaceOnDarkBorder: "rgba(255,255,255,0.3)",
      inputBg: "#FFFFFF",
      badgeBg: "#FFFFFF",
      badgeBorder: "var(--color-dark)",
      innerBg: "#FFFFFF",
      innerBorder: "var(--color-dark)",
      innerShadow: "2px 2px 0 var(--color-dark)",
      navText: "#FFFFFF",
      navTextMuted: "rgba(255,255,255,0.65)",
      cardOnDarkBg: "#FFFFFF",
      cardOnDarkBorder: "var(--color-dark)",
    },
  },
];


/* ─── COLOR PALETTES ─── */

export interface ColorPalette {
  id: string;
  name: string;
  accent: string;
  accentHover: string;
  accentDark: string;
  accentText: string;
  accentRgb: string;
  accentTint1: string;
  accentTint2: string;
  accentTint3: string;
  accentTint4: string;
  accentDeep: string;
  surface: string;
  surfaceAlt: string;
  surfaceSubtle: string;
  dark: string;
  darker: string;
  /** Marks this palette as a research-backed recommendation for Steuer products */
  recommended?: boolean;
  /** Short reason why this palette is recommended */
  recommendedNote?: string;
}

/*
 * Color harmony rules:
 * - Warm accents (lime, amber, coral, gold) → warm-tinted surfaces, warm-tinted darks
 * - Cool accents (blue, violet, teal, indigo) → cool-tinted surfaces, cool-tinted darks
 * - Neutral accents (mono, slate) → pure neutral surfaces
 * - Each surface carries a whisper of the accent hue at ~2-4% saturation
 * - Each dark carries the accent hue at ~10-20% saturation for cohesion
 * - Tint ramp: tint1 (95% white) → tint4 (60% white) → accentDeep (darkest usable)
 */

export const colorPalettes: ColorPalette[] = [
  /* ══════════════════════════════════════════════════════════════
     RECOMMENDED — Research-backed for Steuer/Fintech products
     ══════════════════════════════════════════════════════════════ */

  /* Teal Green — Vibrant teal-green. Sits between blue (trust) and green (money). */
  {
    id: "teal-green",
    name: "Teal Green",
    accent: "#0D9488", accentHover: "#0F766E", accentDark: "#115E59",
    accentText: "#FFFFFF", accentRgb: "13, 148, 136",
    accentTint1: "#CCFBF1", accentTint2: "#99F6E4", accentTint3: "#5EEAD4", accentTint4: "#2DD4BF", accentDeep: "#134E4A",
    surface: "#F2FDFB", surfaceAlt: "#E6F9F6", surfaceSubtle: "#F7FEFD",
    dark: "#0A1F1D", darker: "#061413",
    recommended: true,
    recommendedNote: "Trust + money. Vibrant & unique in DACH.",
  },

  /* Electric Blue — Bold, high-energy blue. Tech-forward.
     Used by fintechs like Revolut, Linear. Strong contrast, modern feel. */
  {
    id: "electric-blue",
    name: "Electric Blue",
    accent: "#0066FF", accentHover: "#0052CC", accentDark: "#003D99",
    accentText: "#FFFFFF", accentRgb: "0, 102, 255",
    accentTint1: "#E0EDFF", accentTint2: "#B8D4FF", accentTint3: "#80B3FF", accentTint4: "#4D94FF", accentDeep: "#002966",
    surface: "#F5F8FE", surfaceAlt: "#ECF1FD", surfaceSubtle: "#F9FBFF",
    dark: "#081428", darker: "#040C1C",
    recommended: true,
    recommendedNote: "High-energy trust. Tech-forward fintech.",
  },

  /* Ramp Strategy — Deep teal dark + lime accent CTA.
     Proven dual-color approach: trust base + high-conversion accent.
     Used by Ramp ($E4F222 on $1A3731). Maximum contrast = maximum conversion. */
  {
    id: "ramp-strategy",
    name: "Teal + Lime",
    accent: "#B4FF29", accentHover: "#a1e624", accentDark: "#8ebd1e",
    accentText: "#0a1200", accentRgb: "180, 255, 41",
    accentTint1: "#edfcc6", accentTint2: "#ddf9a4", accentTint3: "#c8f55a", accentTint4: "#b8f038", accentDeep: "#6a8f14",
    surface: "#F6FAF9", surfaceAlt: "#EFF5F3", surfaceSubtle: "#F9FCFB",
    dark: "#122A24", darker: "#0A1C17",
    recommended: true,
    recommendedNote: "Ramp-proven. Teal trust + lime conversion.",
  },

  /* Tax Emerald — H&R Block territory. Proven for tax products.
     Rich green = "you get money back". More trust than lime.
     Clear differentiation from Taxfix's warm lime. */
  {
    id: "tax-emerald",
    name: "Tax Emerald",
    accent: "#059669", accentHover: "#047857", accentDark: "#065F46",
    accentText: "#FFFFFF", accentRgb: "5, 150, 105",
    accentTint1: "#D1FAE5", accentTint2: "#A7F3D0", accentTint3: "#6EE7B7", accentTint4: "#34D399", accentDeep: "#064E3B",
    surface: "#F5FAF8", surfaceAlt: "#EDF5F1", surfaceSubtle: "#F8FCFA",
    dark: "#0B1F18", darker: "#06140F",
    recommended: true,
    recommendedNote: "Proven for tax apps. \"Money back\" signal.",
  },

  /* Fintech Blue — Most trusted color in finance (33% of global brands).
     Blue activates parasympathetic nervous system = reduces tax anxiety.
     Stripe-adjacent positioning. */
  {
    id: "fintech-blue",
    name: "Fintech Blue",
    accent: "#2563EB", accentHover: "#1D4ED8", accentDark: "#1E40AF",
    accentText: "#FFFFFF", accentRgb: "37, 99, 235",
    accentTint1: "#DBEAFE", accentTint2: "#BFDBFE", accentTint3: "#93C5FD", accentTint4: "#60A5FA", accentDeep: "#1E3A8A",
    surface: "#F7F9FD", surfaceAlt: "#EFF3FB", surfaceSubtle: "#FAFBFE",
    dark: "#0B1528", darker: "#060D1C",
    recommended: true,
    recommendedNote: "Most trusted color in finance. Reduces anxiety.",
  },

  /* Action Orange — Data-backed #2 converting CTA color (29% of top CTAs).
     Completely unique in tax app space. No competitor uses it.
     Strong contrast, urgency without the negative signals of red. */
  {
    id: "action-orange",
    name: "Action Orange",
    accent: "#EA580C", accentHover: "#C2410C", accentDark: "#9A3412",
    accentText: "#FFFFFF", accentRgb: "234, 88, 12",
    accentTint1: "#FFF1E6", accentTint2: "#FDDCB5", accentTint3: "#FDBA74", accentTint4: "#FB923C", accentDeep: "#7C2D12",
    surface: "#FEFAF6", surfaceAlt: "#FDF5ED", surfaceSubtle: "#FFFCF8",
    dark: "#241408", darker: "#1A0E04",
    recommended: true,
    recommendedNote: "#2 converting CTA color. Unique in tax space.",
  },

  /* ══════════════════════════════════════════════════════════════
     ALL PALETTES
     ══════════════════════════════════════════════════════════════ */

  /* ── WARM SPECTRUM ── */
  {
    id: "lime",
    name: "Lime",
    accent: "#B4FF29", accentHover: "#a1e624", accentDark: "#8ebd1e",
    accentText: "#0a1200", accentRgb: "180, 255, 41",
    accentTint1: "#edfcc6", accentTint2: "#ddf9a4", accentTint3: "#c8f55a", accentTint4: "#b8f038", accentDeep: "#6a8f14",
    surface: "#F9FAF7", surfaceAlt: "#F4F6F0", surfaceSubtle: "#FBFCF9",   // warm green-grey
    dark: "#111211", darker: "#0a0b0a",                                      // green-black
  },
  {
    id: "amber",
    name: "Amber",
    accent: "#F59E0B", accentHover: "#D97706", accentDark: "#B45309",
    accentText: "#1A1000", accentRgb: "245, 158, 11",
    accentTint1: "#FEF3C7", accentTint2: "#FDE68A", accentTint3: "#FCD34D", accentTint4: "#FBBF24", accentDeep: "#7C3A06",
    surface: "#FDFAF2", surfaceAlt: "#FAF5E8", surfaceSubtle: "#FEFCF6",   // warm cream
    dark: "#201A0E", darker: "#161008",                                      // warm brown-black
  },
  {
    id: "coral",
    name: "Coral",
    accent: "#F97066", accentHover: "#EF5350", accentDark: "#DC2626",
    accentText: "#FFFFFF", accentRgb: "249, 112, 102",
    accentTint1: "#FEE2E0", accentTint2: "#FECDC8", accentTint3: "#FCA5A0", accentTint4: "#FB8A83", accentDeep: "#9B1C1C",
    surface: "#FEFAF9", surfaceAlt: "#FDF4F2", surfaceSubtle: "#FFFBFB",   // warm rose-white
    dark: "#1E1312", darker: "#150C0B",                                      // warm dark
  },
  {
    id: "gold",
    name: "Gold",
    accent: "#D4A847", accentHover: "#C49A3A", accentDark: "#A88024",
    accentText: "#1A1508", accentRgb: "212, 168, 71",
    accentTint1: "#F8F0DA", accentTint2: "#F0E3C0", accentTint3: "#E4D08E", accentTint4: "#DABD66", accentDeep: "#7A5C14",
    surface: "#FAF8F3", surfaceAlt: "#F5F2EB", surfaceSubtle: "#FCFBF7",   // ivory
    dark: "#1A1814", darker: "#12110C",                                      // warm charcoal
  },
  {
    id: "rose",
    name: "Rose",
    accent: "#E11D48", accentHover: "#BE123C", accentDark: "#9F1239",
    accentText: "#FFFFFF", accentRgb: "225, 29, 72",
    accentTint1: "#FFE4E8", accentTint2: "#FECDD4", accentTint3: "#FDA4B0", accentTint4: "#FB7190", accentDeep: "#6E0C28",
    surface: "#FEF8F9", surfaceAlt: "#FCF1F3", surfaceSubtle: "#FFFAFB",   // blush white
    dark: "#231015", darker: "#190A0F",                                      // deep rose-black
  },

  /* ── COOL SPECTRUM ── */
  {
    id: "blue",
    name: "Blue",
    accent: "#3B82F6", accentHover: "#2563EB", accentDark: "#1D4ED8",
    accentText: "#FFFFFF", accentRgb: "59, 130, 246",
    accentTint1: "#DBEAFE", accentTint2: "#BFDBFE", accentTint3: "#93C5FD", accentTint4: "#60A5FA", accentDeep: "#153080",
    surface: "#F7F9FC", surfaceAlt: "#F0F4FA", surfaceSubtle: "#FAFBFD",   // cool blue-grey
    dark: "#0C1424", darker: "#060C1A",                                      // navy
  },
  {
    id: "indigo",
    name: "Indigo",
    accent: "#6366F1", accentHover: "#4F46E5", accentDark: "#4338CA",
    accentText: "#FFFFFF", accentRgb: "99, 102, 241",
    accentTint1: "#E0E0FE", accentTint2: "#C7C8FD", accentTint3: "#A5A7FC", accentTint4: "#8184F8", accentDeep: "#2E2F8A",
    surface: "#F8F8FE", surfaceAlt: "#F2F2FC", surfaceSubtle: "#FAFAFF",   // cool indigo-white
    dark: "#111130", darker: "#0A0A22",                                      // deep indigo
  },
  {
    id: "violet",
    name: "Violet",
    accent: "#8B5CF6", accentHover: "#7C3AED", accentDark: "#6D28D9",
    accentText: "#FFFFFF", accentRgb: "139, 92, 246",
    accentTint1: "#EDE9FE", accentTint2: "#DDD6FE", accentTint3: "#C4B5FD", accentTint4: "#A78BFA", accentDeep: "#44218A",
    surface: "#FAF8FE", surfaceAlt: "#F5F1FC", surfaceSubtle: "#FCFAFF",   // violet-tinted white
    dark: "#18102E", darker: "#100A22",                                      // deep purple
  },
  {
    id: "teal",
    name: "Teal",
    accent: "#0891B2", accentHover: "#0E7490", accentDark: "#155E75",
    accentText: "#FFFFFF", accentRgb: "8, 145, 178",
    accentTint1: "#CFFAFE", accentTint2: "#A5F3FC", accentTint3: "#67E8F9", accentTint4: "#22D3EE", accentDeep: "#0E4554",
    surface: "#F5FCFD", surfaceAlt: "#EEF9FB", surfaceSubtle: "#F8FDFE",   // cool aqua-white
    dark: "#0E2E32", darker: "#081E22",                                      // deep teal
  },
  {
    id: "emerald",
    name: "Emerald",
    accent: "#10B981", accentHover: "#059669", accentDark: "#047857",
    accentText: "#FFFFFF", accentRgb: "16, 185, 129",
    accentTint1: "#D1FAE5", accentTint2: "#A7F3D0", accentTint3: "#6EE7B7", accentTint4: "#34D399", accentDeep: "#034D38",
    surface: "#F6FBF9", surfaceAlt: "#EFF7F3", surfaceSubtle: "#F9FCFA",   // cool mint-white
    dark: "#0E201A", darker: "#081510",                                      // forest-black
  },

  /* ── NEUTRAL ── */
  {
    id: "mono",
    name: "Mono",
    accent: "#18181B", accentHover: "#27272A", accentDark: "#09090B",
    accentText: "#FFFFFF", accentRgb: "24, 24, 27",
    accentTint1: "#F4F4F5", accentTint2: "#E4E4E7", accentTint3: "#D4D4D8", accentTint4: "#A1A1AA", accentDeep: "#000000",
    surface: "#FAFAFA", surfaceAlt: "#F5F5F5", surfaceSubtle: "#FCFCFC",   // true neutral
    dark: "#09090B", darker: "#000000",
  },
  {
    id: "slate",
    name: "Slate",
    accent: "#475569", accentHover: "#334155", accentDark: "#1E293B",
    accentText: "#FFFFFF", accentRgb: "71, 85, 105",
    accentTint1: "#F1F5F9", accentTint2: "#E2E8F0", accentTint3: "#CBD5E1", accentTint4: "#94A3B8", accentDeep: "#0F172A",
    surface: "#F8FAFC", surfaceAlt: "#F1F5F9", surfaceSubtle: "#FAFBFC",   // cool grey
    dark: "#0F172A", darker: "#020617",
  },
];


/* ─── FONTS ─── */

export interface FontOption {
  id: string;
  name: string;
  family: string;
  importUrl: string;
  category: "sans" | "serif";
}

export const fontOptions: FontOption[] = [
  /* ── Geometric Sans — modern fintech staples ── */
  { id: "jakarta",    name: "Jakarta",        family: '"Plus Jakarta Sans", sans-serif',  importUrl: "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap",  category: "sans" },
  { id: "geist",      name: "Geist",          family: '"Geist", sans-serif',              importUrl: "https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600;700&display=swap",                  category: "sans" },
  { id: "inter",      name: "Inter",          family: '"Inter", sans-serif',              importUrl: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap",              category: "sans" },
  { id: "onest",      name: "Onest",          family: '"Onest", sans-serif',              importUrl: "https://fonts.googleapis.com/css2?family=Onest:wght@400;500;600;700&display=swap",                  category: "sans" },
  { id: "outfit",     name: "Outfit",         family: '"Outfit", sans-serif',             importUrl: "https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700&display=swap",                 category: "sans" },
  { id: "albert",     name: "Albert Sans",    family: '"Albert Sans", sans-serif',        importUrl: "https://fonts.googleapis.com/css2?family=Albert+Sans:wght@400;500;600;700;800&display=swap",        category: "sans" },
  { id: "figtree",    name: "Figtree",        family: '"Figtree", sans-serif',            importUrl: "https://fonts.googleapis.com/css2?family=Figtree:wght@400;500;600;700;800&display=swap",            category: "sans" },
  /* ── Humanist Sans — trustworthy, approachable ── */
  { id: "dm",         name: "DM Sans",        family: '"DM Sans", sans-serif',            importUrl: "https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap",                category: "sans" },
  { id: "manrope",    name: "Manrope",        family: '"Manrope", sans-serif',            importUrl: "https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap",            category: "sans" },
  { id: "instrument", name: "Instrument",     family: '"Instrument Sans", sans-serif',    importUrl: "https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@400;500;600;700&display=swap",        category: "sans" },
  /* ── Technical / Monospaced feel — data-forward ── */
  { id: "space",      name: "Space Grotesk",  family: '"Space Grotesk", sans-serif',      importUrl: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap",         category: "sans" },
  { id: "sora",       name: "Sora",           family: '"Sora", sans-serif',               importUrl: "https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700&display=swap",                   category: "sans" },
  /* ── Serif — premium / wealth management ── */
  { id: "dmserif",    name: "DM Serif",       family: '"DM Serif Display", "DM Sans", serif', importUrl: "https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=DM+Serif+Display&display=swap", category: "serif" },
  { id: "playfair",   name: "Playfair",       family: '"Playfair Display", serif',        importUrl: "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&display=swap",       category: "serif" },
  { id: "fraunces",   name: "Fraunces",       family: '"Fraunces", serif',                importUrl: "https://fonts.googleapis.com/css2?family=Fraunces:wght@400;500;600;700&display=swap",               category: "serif" },
  { id: "source",     name: "Source Serif",   family: '"Source Serif 4", serif',          importUrl: "https://fonts.googleapis.com/css2?family=Source+Serif+4:wght@400;500;600;700&display=swap",         category: "serif" },
];


/* ─── RADIUS ─── */

export interface RadiusOption {
  id: string;
  name: string;
  card: string;
  cardLg: string;
  phone: string;
}

export const radiusOptions: RadiusOption[] = [
  { id: "sharp",   name: "Sharp",   card: "0.75rem", cardLg: "1rem",  phone: "1.2rem" },
  { id: "rounded", name: "Rounded", card: "1.5rem",  cardLg: "2rem",  phone: "2rem" },
  { id: "pill",    name: "Pill",    card: "2.5rem",  cardLg: "3rem",  phone: "2.8rem" },
];


/* ─── ANIMATION ─── */

export interface AnimationOption {
  id: string;
  name: string;
  icon: string;
}

export const animationOptions: AnimationOption[] = [
  { id: "none",   name: "None",   icon: "—" },
  { id: "subtle", name: "Subtle", icon: "~" },
  { id: "full",   name: "Full",   icon: "≈" },
];


/* ═══════════════════════════════════════════════════════════════
   APPLY — Sets all CSS custom properties from current selections
   ═══════════════════════════════════════════════════════════════ */

export interface ThemeState {
  styleId: string;
  paletteId: string;
  fontId: string;
  radiusId: string;
  animationId: string;
}

export const defaultTheme: ThemeState = {
  styleId: "solid",
  paletteId: "emerald",
  fontId: "jakarta",
  radiusId: "pill",
  animationId: "full",
};

export function applyThemeState(state: ThemeState) {
  const style = visualStyles.find((s) => s.id === state.styleId) ?? visualStyles[0];
  const palette = colorPalettes.find((p) => p.id === state.paletteId) ?? colorPalettes[0];
  const font = fontOptions.find((f) => f.id === state.fontId) ?? fontOptions[0];
  const radius = radiusOptions.find((r) => r.id === state.radiusId) ?? radiusOptions[2];

  const s = document.documentElement.style;

  // Colors
  s.setProperty("--color-accent", palette.accent);
  s.setProperty("--color-accent-hover", palette.accentHover);
  s.setProperty("--color-accent-dark", palette.accentDark);
  s.setProperty("--color-accent-text", palette.accentText);
  s.setProperty("--accent-rgb", palette.accentRgb);
  s.setProperty("--color-accent-tint-1", palette.accentTint1);
  s.setProperty("--color-accent-tint-2", palette.accentTint2);
  s.setProperty("--color-accent-tint-3", palette.accentTint3);
  s.setProperty("--color-accent-tint-4", palette.accentTint4);
  s.setProperty("--color-accent-deep", palette.accentDeep);
  s.setProperty("--color-surface", palette.surface);
  s.setProperty("--color-surface-alt", palette.surfaceAlt);
  s.setProperty("--color-surface-subtle", palette.surfaceSubtle);
  s.setProperty("--color-dark", palette.dark);
  s.setProperty("--color-darker", palette.darker);

  // Card style
  s.setProperty("--card-bg", style.css.cardBg);
  s.setProperty("--card-bg-hover", style.css.cardBgHover);
  s.setProperty("--card-border", style.css.cardBorder);
  s.setProperty("--card-border-hover", style.css.cardBorderHover);
  s.setProperty("--card-backdrop", style.css.cardBackdrop);
  s.setProperty("--card-shadow", style.css.cardShadow);
  s.setProperty("--card-shadow-hover", style.css.cardShadowHover);
  s.setProperty("--nav-bg", style.css.navBg);
  s.setProperty("--nav-border", style.css.navBorder);
  s.setProperty("--nav-backdrop", style.css.navBackdrop);
  s.setProperty("--section-bg", style.css.sectionBg);
  s.setProperty("--surface-on-dark", style.css.surfaceOnDark);
  s.setProperty("--surface-on-dark-border", style.css.surfaceOnDarkBorder);
  s.setProperty("--input-bg", style.css.inputBg);
  s.setProperty("--badge-bg", style.css.badgeBg);
  s.setProperty("--badge-border", style.css.badgeBorder);
  s.setProperty("--inner-bg", style.css.innerBg);
  s.setProperty("--inner-border", style.css.innerBorder);
  s.setProperty("--inner-shadow", style.css.innerShadow);
  s.setProperty("--nav-text", style.css.navText);
  s.setProperty("--nav-text-muted", style.css.navTextMuted);
  s.setProperty("--card-on-dark-bg", style.css.cardOnDarkBg);
  s.setProperty("--card-on-dark-border", style.css.cardOnDarkBorder);

  // Font
  s.setProperty("--font-sans", font.family);
  loadFont(font.importUrl);

  // Radius
  s.setProperty("--radius-card", radius.card);
  s.setProperty("--radius-card-lg", radius.cardLg);
  s.setProperty("--radius-phone", radius.phone);

  // Data attributes for CSS targeting
  document.documentElement.setAttribute("data-style", state.styleId);
  document.documentElement.setAttribute("data-animation", state.animationId);
  document.documentElement.removeAttribute("data-theme");
}

/* ─── Font Loader ─── */
const loadedFonts = new Set<string>();
function loadFont(url: string) {
  if (loadedFonts.has(url)) return;
  loadedFonts.add(url);
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = url;
  document.head.appendChild(link);
}
