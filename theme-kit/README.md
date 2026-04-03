# Theme Kit — Ready-to-Use Website

A complete, working website you can drop into any React + Tailwind v4 + React Router project.
Change the texts in the config file and you're live.

## Quick Start

### 1. Copy into your project's `src/`

```bash
cp -r theme-kit/theme       src/theme
cp -r theme-kit/components  src/components/theme
cp -r theme-kit/config      src/config
cp -r theme-kit/mockups     src/mockups
cp -r theme-kit/assets      src/assets
cp    theme-kit/ThemePage.tsx src/pages/ThemePage.tsx
```

### 2. Add CSS imports to your `src/index.css`

```css
@import "./theme/tokens.css";
@import "./theme/base.css";
@import "./theme/components.css";
@import "./theme/animations.css";

/* Your brand animations (copy from config/example/) */
@import "./config/example/avenzo-animations.css";
```

### 3. Wire up in your router

```tsx
import { ThemePage } from "./pages/ThemePage";
import { myBrand } from "./config/example/avenzo.config";

<Route path="/*" element={<ThemePage config={myBrand} />} />
```

### 4. Edit the config

Open `src/config/example/avenzo.config.tsx` and change the texts:

- `brand.name` — your brand name
- `brand.iconSrc` — path to your logo SVG
- `brand.email` — your email
- `hero.headline` — main heading
- `hero.subheadline` — subtitle
- `hero.tabs[].heading` — tab headings
- `hero.tabs[].description` — tab descriptions
- `nav.links` — navigation items
- `services`, `features`, `howItWorks` — all section content
- `testimonials` — review cards
- `faq` — questions and answers
- `ctaFooter` — CTA section, footer links, social links, copyright

That's it. Everything else (layout, animations, theme switcher, responsive design) works automatically.

## What's Included

```
theme-kit/
  theme/                  # CSS engine — tokens, styles, animations
  components/             # 20 UI components (all config-driven)
  config/
    site-config.types.ts  # TypeScript interface (the contract)
    SiteConfigContext.tsx  # React context provider
    example/              # Working example config (edit this)
      avenzo.config.tsx   # <-- EDIT THIS FILE
      avenzo-mockups.tsx  # Hero mockups (phone screens)
      avenzo-animations.css # Mockup animations
  mockups/                # Phone/browser mockup components
  assets/                 # Example images
  ThemePage.tsx           # Drop-in page component
```

## Dependencies

- React 18+
- React Router v6+
- Tailwind CSS v4

## Customization Beyond Text

- **Colors** — The live theme switcher (bottom-right corner) lets you pick from 10+ palettes
- **Visual style** — Solid, Glass, Outline, Elevated, Flat, Brutal
- **Fonts & radius** — Configurable in the switcher
- **Mockups** — Replace the phone screen components in `mockups/` with your own
- **Animations** — Edit or replace `avenzo-animations.css`
