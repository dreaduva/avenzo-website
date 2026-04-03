# Migration Guide — Applying Theme Kit to an Existing Website

This theme kit produces an identical copy of the Avenzo website concept.
The design, layout, animations, logo, mockups, and colors are all included.
You only need to change the **text content** in the config file.
If your current site has sections the theme kit doesn't cover, tell Claude to create them.

## Step 1: Copy Theme Kit Files

```bash
# From your existing project root:
cp -r <path-to-theme-kit>/theme       src/theme
cp -r <path-to-theme-kit>/components  src/components/theme
cp -r <path-to-theme-kit>/config      src/config/theme-config
cp -r <path-to-theme-kit>/mockups     src/mockups
cp -r <path-to-theme-kit>/assets      src/assets/theme
cp    <path-to-theme-kit>/ThemePage.tsx src/pages/ThemePage.tsx
cp    <path-to-theme-kit>/assets/avenzo_icon.svg public/avenzo_icon.svg
```

## Step 2: Install Dependencies (if missing)

```bash
npm install react-router-dom
# Tailwind CSS v4 must be installed and configured
```

## Step 3: Add CSS Imports

Add these to your main CSS file (e.g. `src/index.css` or `src/globals.css`), AFTER your Tailwind import:

```css
/* Theme system */
@import "./theme/tokens.css";
@import "./theme/base.css";
@import "./theme/components.css";
@import "./theme/animations.css";

/* Brand animations (from example — edit or replace) */
@import "./config/theme-config/example/avenzo-animations.css";
```

## Step 4: Add the Route

In your router setup (e.g. `App.tsx`):

```tsx
import { ThemePage } from "./pages/ThemePage";
import { siteConfig } from "./config/theme-config/example/avenzo.config";

// Add this route (use your preferred path)
<Route path="/new/*" element={<ThemePage config={siteConfig} />} />
```

## Step 5: Edit the Config (Text Content Only)

The example config (`config/theme-config/example/avenzo.config.tsx`) already produces the full working website — identical design, layout, animations, logo, mockups, and colors.

**You only change text.** Open the config and replace the German/Avenzo copy with your site's content. Everything else stays as-is.

If you want to rename the file:
```bash
cp -r src/config/theme-config/example src/config/theme-config/my-brand
mv src/config/theme-config/my-brand/avenzo.config.tsx src/config/theme-config/my-brand/site.config.tsx
```

Then update the import in Step 4 accordingly.

### What to change — field reference:

### Brand
```tsx
brand: {
  name: "YOUR BRAND",        // Shown in navbar + footer (keep "AVENZO" to stay identical)
  iconSrc: "/avenzo_icon.svg", // Already included — logo stays the same
  email: "hello@you.com",    // Shown in footer
}
```

### Navigation
```tsx
nav: {
  links: [                          // Scroll-to sections on landing page
    { label: "Features", sectionId: "services" },
    { label: "How It Works", sectionId: "how-it-works" },
    { label: "FAQ", sectionId: "faq" },
  ],
  pageLinks: [                      // Separate pages (routing)
    { label: "Pricing", href: "pricing" },
    { label: "About", href: "about" },
    { label: "Contact", href: "contact" },
  ],
  signInLabel: "Sign In",
  signInHref: "#signin",
  ctaLabel: "Get Started",
  ctaHref: "#signup",
}
```

### Hero Section
```tsx
hero: {
  headline: <>Your Main<br />Headline Here</>,
  subheadline: "Your subtitle text goes here.",
  tabs: [
    {
      id: "tab1",
      pill: "Tab Label",
      appName: "Product Name",
      heading: <>Tab Heading</>,
      mobileHeading: "Mobile version of heading",
      mobileTagline: "Short mobile tagline",
      description: "Longer description for this tab.",
      available: true,
      color: "var(--color-accent-dark)",
      bgFrom: "from-[#f0fce4]",
      bgTo: "to-[#e8f9d4]",
      mockup: <YourMockupComponent />,   // React component or null
      ctaButtons: <YourCTAButtons />,     // React component or null
    },
  ],
}
```

### Partners / Logos
```tsx
partners: {
  headline: "Trusted by",
  items: [
    { name: "Partner 1", logo: <svg>...</svg> },
    // Add your partner logos
  ],
}
```

### Services (Card Grid)
```tsx
services: {
  sectionId: "services",
  headline: "What We Offer",
  subheadline: "Description of your services.",
  cards: [
    {
      title: "Service 1",
      description: "What this service does.",
      icon: <svg>...</svg>,        // Any React SVG icon
      color: "var(--color-accent)",
    },
  ],
}
```

### Features
```tsx
features: {
  sectionId: "features",
  headline: "Why Choose Us",
  items: [
    {
      title: "Feature Title",
      description: "Feature description.",
      highlight: "Key metric or stat",
    },
  ],
}
```

### How It Works
```tsx
howItWorks: {
  sectionId: "how-it-works",
  headline: "How It Works",
  steps: [
    { number: "01", title: "Step Title", description: "Step description." },
  ],
}
```

### Calculator (Interactive)
```tsx
calculator: {
  sectionId: "calculator",
  headline: "See Your Savings",
  subheadline: "Calculate how much you save.",
  rows: [
    { label: "Item name", defaultAmount: 1000 },
  ],
  resultLabel: "Total Savings",
  currency: "CHF",
  compute: (rows) => rows.reduce((sum, r) => sum + r.amount * 0.15, 0),
}
```

### Testimonials
```tsx
testimonials: {
  sectionId: "testimonials",
  headline: "What Our Users Say",
  items: [
    {
      quote: "This product changed everything for us.",
      name: "John D.",
      role: "CEO, Company",
      initials: "JD",
      colors: "from-accent to-accent-dark",
    },
  ],
}
```

### FAQ
```tsx
faq: {
  sectionId: "faq",
  headline: "Questions & Answers",
  items: [
    { question: "How does it work?", answer: "Explanation here." },
  ],
}
```

### Pricing (Optional — enables /pricing page)
```tsx
pricing: {
  headline: "Simple Pricing",
  subheadline: "No hidden fees.",
  tiers: [
    {
      name: "Free",
      price: "0",
      currency: "CHF",
      period: "/month",
      description: "Get started for free.",
      features: ["Feature 1", "Feature 2"],
      ctaLabel: "Start Free",
      ctaHref: "#",
    },
  ],
}
```

### CTA Footer
```tsx
ctaFooter: {
  headline: "Ready to start?",
  ctaHeading: <>Download<br />the app</>,
  contactLabel: "Contact",
  subheadline: "Get started in 30 seconds.",
  primaryCtaLabel: "Get Started",
  primaryCtaHref: "#",
  footerDescription: "Short company description for the footer.",
  socialLinks: [
    { platform: "twitter", href: "#", icon: <svg>...</svg> },
  ],
  linkGroups: [
    {
      title: "Product",
      links: [
        { label: "Features", href: "#" },
        { label: "Pricing", href: "#" },
      ],
    },
  ],
  bottomLinks: [
    { label: "Privacy", href: "#" },
    { label: "Terms", href: "#" },
  ],
  copyright: "© 2025 Your Brand. All rights reserved.",
  socialProofText: <>Trusted by <strong>1,000+</strong> users</>,
  socialProofAvatars: [
    { initials: "AB", colors: "from-accent to-accent-dark" },
  ],
}
```

### Cookie Banner
```tsx
cookieBanner: {
  storageKey: "my-brand-cookies",
  headline: "We use cookies",
  description: "We use cookies to improve your experience.",
  acceptLabel: "Accept",
  declineLabel: "Decline",
}
```

### About Page (Optional)
```tsx
about: {
  headline: "About Us",
  description: "Our story...",
  team: [
    { name: "Jane D.", role: "CEO", initials: "JD", colors: "from-accent to-accent-dark" },
  ],
}
```

### Contact Page (Optional)
```tsx
contact: {
  headline: "Get in Touch",
  description: "We'd love to hear from you.",
}
```

### Blog Page (Optional)
```tsx
blog: {
  headline: "Blog",
  posts: [
    {
      title: "Post Title",
      excerpt: "Short summary...",
      date: "2025-01-15",
      category: "News",
      slug: "post-title",
      author: "Author Name",
      authorColors: "from-accent to-accent-dark",
    },
  ],
}
```

## Step 6: Migrate Your Existing Content

The theme kit already has a complete working site. Your job is only to swap the text.

1. **Open your current site** side by side with `avenzo.config.tsx`
2. **For each section on your current site**, find the matching config key and paste your text in
3. **Preserve all SEO content** — your existing headings, descriptions, and meta content go into the config fields. The theme renders them with proper semantic HTML (h1, h2, p, etc.)
4. **If your current site has a section the theme doesn't** — see Step 7

### Theme sections included (landing page order):

| Order | Section | Config Key | Your current site has this? |
|-------|---------|------------|---------------------------|
| 1 | Navbar | `nav` | |
| 2 | Hero with tabs + mockups | `hero` | |
| 3 | Partner logos marquee | `partners` | |
| 4 | Service cards grid | `services` | |
| 5 | Feature list | `features` | |
| 6 | How it works steps | `howItWorks` | |
| 7 | Savings calculator | `calculator` | |
| 8 | Pricing tiers | `pricing` | |
| 9 | Testimonials | `testimonials` | |
| 10 | FAQ accordion | `faq` | |
| 11 | CTA + Footer | `ctaFooter` | |
| 12 | Cookie banner | `cookieBanner` | |

### Pages included in the theme kit:
- `/pricing` — pricing tiers page
- `/about` — about page with team
- `/blog` — blog listing
- `/contact` — contact page

These are basic starter pages. Your current site likely has more pages and content.

Fill in the checklist above. Any section you mark as missing on your current site — you can either skip it (remove from ThemePage.tsx) or keep it as-is (it'll show with the example text until you replace it).

## Step 7: Build Missing Pages and Sections

**IMPORTANT: The theme kit only includes the home page and 4 basic sub-pages.** Your existing website likely has additional pages, sections, and components that need to be created in the new theme's design language.

### How to request new pages:

Tell Claude which pages your current site has. Claude will:
1. Read your existing page content
2. Create new `Theme*.tsx` components matching the theme kit's design
3. Add config types so all text is editable from the config
4. Wire them into the router

**Example prompts:**

> "My current site has these pages: /, /about, /services, /services/tax, /services/insurance, /blog, /blog/[slug], /contact, /legal/privacy, /legal/terms. Create Theme components for all pages I'm missing. Use my existing page content for the text and follow the theme kit's design."

> "My current site has a comparison table section on the services page. Create a ThemeComparisonTable component for it."

> "I need individual service detail pages (/services/tax, /services/insurance, etc.) that don't exist in the theme kit. Create them matching the theme design."

### How to request new sections:

> "My current site has a [section name] between [section A] and [section B]. Here's what it contains: [describe content]. Create a new Theme component for it following the same config-driven pattern."

Claude will:
1. Create `ThemeYourSection.tsx` in `components/theme/`
2. Add the config interface to `site-config.types.ts`
3. Add it to `ThemePage.tsx` in the right position
4. You fill in the text in your config

### Workflow for full site migration:

1. **First**: Get the home page working (Steps 1-6)
2. **Then**: List ALL pages from your current site
3. **Claude audits**: Reads each page, identifies what exists vs what's missing
4. **Claude builds**: Creates new Theme components for every missing page/section
5. **You review**: Check each page matches your current content
6. **Iterate**: Request adjustments to layout, add/remove sections

### You can also mix theme kit components with your own:

```tsx
<SiteConfigProvider config={myConfig}>
  <ThemeNavbar />
  <ThemeHero />
  <YourExistingComponent />  {/* Your own component works here */}
  <ThemeServices />
  <ThemeCtaFooter />
</SiteConfigProvider>
```

## Step 8: Verify

After steps 1-7, your new site should look identical to the Avenzo concept but with your text content. The theme switcher (bottom-right corner) lets you experiment with:
- 10+ color palettes
- 6 visual styles (Solid, Glass, Outline, Elevated, Flat, Brutal)
- Multiple fonts and border radius options

Default is emerald green. To change it permanently, edit `theme-engine.ts`:
```tsx
export const defaultTheme: ThemeState = {
  styleId: "solid",
  paletteId: "emerald",
  fontId: "jakarta",
  radiusId: "pill",
  animationId: "full",
};
```

## Checklist

### Setup
- [ ] Theme kit files copied into `src/`
- [ ] `avenzo_icon.svg` copied to `public/`
- [ ] CSS imports added to main CSS file
- [ ] Route added to router
- [ ] Site loads and looks identical to Avenzo concept

### Home page
- [ ] Text content replaced in config for each section
- [ ] SEO headings and descriptions preserved in config
- [ ] Missing home page sections identified and created

### Other pages
- [ ] Listed ALL pages from current site
- [ ] Identified which pages exist in theme kit vs need creating
- [ ] Claude created Theme components for all missing pages
- [ ] All page text content migrated
- [ ] All pages accessible via navigation

### Final
- [ ] Default color palette set
- [ ] Tested on mobile
- [ ] All links working
- [ ] SEO content preserved across all pages

---

## First Prompt After Pasting the Theme Kit

Copy and paste this as your first message to Claude in the other project:

---

```
Read theme-kit/MIGRATE.md for full context. I've pasted a theme-kit folder into this project. It contains a complete, working website theme system (React + Tailwind v4 + React Router).

Do the following:

1. Read my current project structure, router, CSS setup, and all existing pages/components
2. Follow MIGRATE.md Steps 1-4 to integrate the theme kit into this project (copy files to src/, add CSS imports, add route)
3. Read the example config at config/theme-config/example/avenzo.config.tsx
4. Read ALL my existing pages and their content (headings, copy, sections, SEO text)
5. Create a new site config file that maps my existing content into the theme config — keep all my current text/SEO content, just restructure it into the config format
6. For every page and section my current site has that the theme kit doesn't — create new Theme components following the same design language and config-driven pattern
7. Wire everything into the router so all my current URLs still work
8. Show me what you've done and what I should review

My current site has these pages: [LIST YOUR PAGES HERE, e.g. /, /about, /services, /pricing, /blog, /contact, /legal/privacy]
```

---

Replace the page list at the end with your actual pages. Claude will handle the rest.
