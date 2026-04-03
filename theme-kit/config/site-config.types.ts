/* ═══════════════════════════════════════════════════════════════
   Site Config — Type definitions for the reusable theme system.
   Every section of the landing page is driven by this config.
   ═══════════════════════════════════════════════════════════════ */

import type { ReactNode } from "react";

/* ─── Brand / Identity ─── */

export interface SiteBrand {
  name: string;
  /** Path to icon SVG (used in navbar, mockups, footer) */
  iconSrc: string;
  /** Path to full logo image (optional, falls back to icon + name) */
  logoSrc?: string;
  /** Contact email shown in footer */
  email: string;
}

/* ─── Navigation ─── */

export interface NavLink {
  label: string;
  /** Section ID to scroll to on landing page (e.g. "services") */
  sectionId?: string;
  /** Route path for page navigation (e.g. "/pricing") */
  href?: string;
}

export interface NavConfig {
  links: NavLink[];
  /** Additional page links shown in navbar (e.g. Pricing, About) */
  pageLinks?: NavLink[];
  signInLabel: string;
  signInHref: string;
  ctaLabel: string;
  ctaHref: string;
}

/* ─── Pages ─── */

export interface PricingTier {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  ctaLabel: string;
  highlighted?: boolean;
  badge?: string;
}

export interface PricingConfig {
  headline: ReactNode;
  subheadline: string;
  tiers: PricingTier[];
  faqItems?: { question: string; answer: string }[];
}

export interface TeamMember {
  name: string;
  role: string;
  initials: string;
  colors: string;
  bio?: string;
}

export interface AboutConfig {
  headline: ReactNode;
  subheadline: string;
  story: string;
  mission: string;
  values: { title: string; description: string; icon: ReactNode }[];
  team: TeamMember[];
  stats: { label: string; value: string }[];
}

export interface ContactConfig {
  headline: ReactNode;
  subheadline: string;
  email: string;
  phone?: string;
  address?: string;
  formFields: { label: string; type: "text" | "email" | "textarea"; placeholder: string }[];
  submitLabel: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  authorInitials: string;
  authorColors: string;
  category: string;
  readTime: string;
}

export interface BlogConfig {
  headline: ReactNode;
  subheadline: string;
  posts: BlogPost[];
  categories: string[];
}

/* ─── Hero ─── */

export interface HeroTab {
  id: string;
  pill: string;
  appName: string;
  heading: ReactNode;
  mobileHeading: string;
  mobileTagline: string;
  description: string;
  available: boolean;
  color: string;
  bgFrom: string;
  bgTo: string;
  /** The phone/browser mockup rendered for this tab */
  mockup?: ReactNode;
  /** CTA buttons when available */
  ctaButtons?: ReactNode;
  /** Content shown when not yet available */
  comingSoonContent?: ReactNode;
}

export interface HeroConfig {
  headline: ReactNode;
  subheadline: string;
  tabs: HeroTab[];
  detailLinkLabel: string;
  detailLinkHref: string;
  mobileCtaAvailableLabel: string;
  mobileCtaUnavailableLabel: string;
}

/* ─── Partners / Trust bar ─── */

export interface Partner {
  name: string;
  abbr: string;
  /** Optional logo image src — falls back to abbr text */
  logoSrc?: string;
}

export interface PartnersConfig {
  label: string;
  items: Partner[];
}

/* ─── Services ─── */

export interface ServiceCard {
  icon: ReactNode;
  title: string;
  description: string;
  features: string[];
  ctaLabel: string;
}

export interface ServicesConfig {
  headline: ReactNode;
  subheadline: string;
  cards: ServiceCard[];
}

/* ─── Features ─── */

export interface FeatureItem {
  icon: ReactNode;
  title: string;
  description: string;
}

export interface FeaturesConfig {
  headline: ReactNode;
  subheadline: string;
  leftColumn: FeatureItem[];
  rightColumn: FeatureItem[];
  /** Center element (e.g. phone mockup). If omitted, a default phone mockup is shown */
  centerElement?: ReactNode;
  /** Set to false to hide the center column entirely (2-col layout). Defaults to true */
  showCenter?: boolean;
  bottomText?: string;
}

/* ─── How It Works ─── */

export interface Step {
  num: number;
  title: string;
  description: string;
  active?: boolean;
}

export interface HowItWorksConfig {
  badge: string;
  headline: ReactNode;
  subheadline: string;
  steps: Step[];
}

/* ─── Calculator ─── */

export interface CalculatorConfig {
  badge: string;
  headline: ReactNode;
  subheadline: string;
  inputLabel: string;
  currency: string;
  locale: string;
  min: number;
  max: number;
  step: number;
  defaultValue: number;
  /** Given an income value, return breakdown rows */
  compute: (income: number) => CalculatorRow[];
  benefits: string[];
  disclaimer: string;
}

export interface CalculatorRow {
  label: string;
  value: number;
}

/* ─── Testimonials ─── */

export interface Testimonial {
  quote: string;
  name: string;
  location: string;
  initials: string;
  colors: string;
  highlight?: boolean;
}

export interface TestimonialsConfig {
  headline: ReactNode;
  subheadline: string;
  items: Testimonial[];
}

/* ─── FAQ ─── */

export interface FaqItem {
  question: string;
  answer: string;
}

export interface FaqConfig {
  badge: string;
  headline: ReactNode;
  subheadline: string;
  items: FaqItem[];
}

/* ─── CTA + Footer ─── */

export interface SocialLink {
  label: string;
  href: string;
  icon: ReactNode;
}

export interface FooterLinkGroup {
  title: string;
  links: { label: string; href: string }[];
}

export interface CtaFooterConfig {
  headline: string;
  subheadline: string;
  /** Main CTA heading (e.g. "Download the app"). Supports ReactNode for line breaks. */
  ctaHeading?: ReactNode;
  /** Custom phone mockup for the CTA card. If omitted, a default is rendered. */
  ctaMockup?: ReactNode;
  /** Label for the contact section heading */
  contactLabel?: string;
  primaryCtaLabel: string;
  primaryCtaHref: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
  socialProofText: ReactNode;
  socialProofAvatars: { initials: string; colors: string }[];
  footerDescription: string;
  socialLinks: SocialLink[];
  linkGroups: FooterLinkGroup[];
  bottomLinks: { label: string; href: string }[];
  copyright: string;
}

/* ─── Cookie Banner ─── */

export interface CookieBannerConfig {
  storageKey: string;
  title: string;
  description: string;
  acceptLabel: string;
  declineLabel: string;
}

/* ─── Master Config ─── */

export interface SiteConfig {
  brand: SiteBrand;
  nav: NavConfig;
  hero: HeroConfig;
  partners: PartnersConfig;
  services: ServicesConfig;
  features: FeaturesConfig;
  howItWorks: HowItWorksConfig;
  calculator: CalculatorConfig;
  testimonials: TestimonialsConfig;
  faq: FaqConfig;
  ctaFooter: CtaFooterConfig;
  cookieBanner: CookieBannerConfig;
  /** Optional page configs — enables multi-page mode */
  pricing?: PricingConfig;
  about?: AboutConfig;
  contact?: ContactConfig;
  blog?: BlogConfig;
}
