/* ═══════════════════════════════════════════════════════════════
   Avenzo — Example site config using the reusable theme system.
   This file reproduces the original Payline concept exactly.
   ═══════════════════════════════════════════════════════════════ */

import type { SiteConfig } from "../site-config.types";
import { PhoneSteuer, PhoneVersicherung, BrowserTreuhand, AvenzoStoreButtons, AvenzoComingSoon } from "./avenzo-mockups";

export const avenzo: SiteConfig = {
  brand: {
    name: "AVENZO",
    iconSrc: "/avenzo_icon.svg",
    email: "hallo@avenzo.ch",
  },

  nav: {
    links: [
      { label: "Funktionen", sectionId: "services" },
      { label: "So funktioniert's", sectionId: "how-it-works" },
      { label: "Hilfe", sectionId: "faq" },
    ],
    pageLinks: [
      { label: "Preise", href: "pricing" },
      { label: "Über uns", href: "about" },
      { label: "Blog", href: "blog" },
      { label: "Kontakt", href: "contact" },
    ],
    signInLabel: "Anmelden",
    signInHref: "#signin",
    ctaLabel: "Konto erstellen",
    ctaHref: "#signup",
  },

  hero: {
    headline: (
      <>
        Finanzen neu gedacht — <br className="hidden sm:block" />
        für eine bessere Zukunft.
      </>
    ),
    subheadline:
      "Steuern, Versicherungen und Buchhaltung — in drei Apps, die dir sofort mehr Geld zurückholen und Stunden an Aufwand ersparen.",
    tabs: [
      {
        id: "steuer",
        pill: "Steuer App",
        appName: "Avenzo Steuererklärung",
        heading: (
          <>
            Maximale Steuerabzüge.
            <br />
            <span style={{ color: "var(--color-accent-dark)" }}>Null Aufwand.</span>
          </>
        ),
        mobileHeading: "Maximale Steuerabzüge. Null Aufwand.",
        mobileTagline: "KI findet versteckte Abzüge in Sekunden.",
        description:
          "Lade deine Dokumente hoch — unsere KI findet in Sekunden versteckte Abzüge, die du sonst verpasst hättest.",
        available: true,
        color: "var(--color-accent-dark)",
        bgFrom: "from-[#f0fce4]",
        bgTo: "to-[#e8f9d4]",
        mockup: <PhoneSteuer />,
        ctaButtons: <AvenzoStoreButtons />,
      },
      {
        id: "versicherung",
        pill: "Versicherung App",
        appName: "Avenzo Insurance",
        heading: (
          <>
            Überversichert? Unterversichert?
            <br />
            <span className="text-app-secondary">Jetzt Klarheit.</span>
          </>
        ),
        mobileHeading: "Über- oder unterversichert? Jetzt Klarheit.",
        mobileTagline: "Portfolio-Check deckt Lücken auf, senkt Prämien.",
        description:
          "Unser Portfolio-Check analysiert deine Policen, deckt Lücken auf und senkt deine Prämien — transparent und unabhängig.",
        available: false,
        color: "var(--color-app-secondary)",
        bgFrom: "from-[#eef1ff]",
        bgTo: "to-[#e4e9ff]",
        mockup: <PhoneVersicherung />,
        comingSoonContent: <AvenzoComingSoon />,
      },
      {
        id: "treuhand",
        pill: "Treuhand App",
        appName: "Avenzo Treuhand",
        heading: (
          <>
            Buchhaltung, die
            <br />
            <span className="text-app-tertiary">für dich arbeitet.</span>
          </>
        ),
        mobileHeading: "Buchhaltung, die für dich arbeitet.",
        mobileTagline: "Vom Beleg bis zur Bilanz — alles automatisiert.",
        description:
          "Vom Beleg bis zur Bilanz — alles automatisiert. Echtzeit-Dashboard und persönlicher Experte für KMU.",
        available: false,
        color: "var(--color-app-tertiary)",
        bgFrom: "from-[#f3eeff]",
        bgTo: "to-[#ece4ff]",
        mockup: <BrowserTreuhand />,
        comingSoonContent: <AvenzoComingSoon />,
      },
    ],
    detailLinkLabel: "Alle Details anzeigen",
    detailLinkHref: "#services",
    mobileCtaAvailableLabel: "Jetzt starten",
    mobileCtaUnavailableLabel: "Mehr erfahren",
  },

  partners: {
    label: "Vertraut & zertifiziert",
    items: [
      { name: "Swiss Finance", abbr: "SF" },
      { name: "FINMA", abbr: "FINMA" },
      { name: "SIX Group", abbr: "SIX" },
      { name: "SwissSign", abbr: "SS" },
      { name: "ISO 27001", abbr: "ISO" },
      { name: "Swiss Made", abbr: "CH" },
    ],
  },

  services: {
    headline: (
      <>
        Ganzheitliche Kontrolle <br />über deine Zukunft
      </>
    ),
    subheadline:
      "Ein Konto für alle deine Finanzen. Wir verbinden Steuern, Versicherungen und Treuhand in einer modernen Experience ohne versteckte Gebühren.",
    cards: [
      {
        icon: (
          <svg className="w-6 h-6 sm:w-7 sm:h-7 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        ),
        title: "Steuererklärung",
        description: "Stressfrei und maximal optimiert. Komplett digital ohne Papierkrieg.",
        features: ["100% digitaler Upload", "Fristverlängerung inklusive", "Höchste Rückzahlung"],
        ctaLabel: "Details ansehen",
      },
      {
        icon: (
          <svg className="w-6 h-6 sm:w-7 sm:h-7 text-app-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        ),
        title: "Versicherungen",
        description: "Wir durchleuchten dein Portfolio, reduzieren Prämien und optimieren.",
        features: ["Expertenprüfung", "Steuerliche Optimierung", "Automatische Wechsel"],
        ctaLabel: "Policen checken",
      },
      {
        icon: (
          <svg className="w-6 h-6 sm:w-7 sm:h-7 text-app-tertiary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        ),
        title: "Treuhand",
        description: "Exklusiv für KMU. Buchhaltung, Lohnwesen und Abschlussgestaltung.",
        features: ["Digitale Buchhaltung", "MWST- & Lohnadmin", "Gründungsberatung"],
        ctaLabel: "Für Business",
      },
    ],
  },

  features: {
    headline: (
      <>
        Warum unsere Kunden
        <br />
        Avenzo wählen
      </>
    ),
    subheadline:
      "Steuern und Versicherungen ohne Verzögerung oder Komplexität. Avenzo beseitigt versteckte Gebühren, lange Wartezeiten und unnötige Hürden.",
    leftColumn: [
      {
        icon: (
          <svg className="w-6 h-6 sm:w-8 sm:h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
          </svg>
        ),
        title: "Geschwindigkeit",
        description: "Sofortige Steuererklärung und Policenwechsel am selben Tag.",
      },
      {
        icon: (
          <svg className="w-6 h-6 sm:w-8 sm:h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
          </svg>
        ),
        title: "Sicherheit",
        description: "Bankniveau-Verschlüsselung & Dokumentenschutz.",
      },
    ],
    rightColumn: [
      {
        icon: (
          <svg className="w-6 h-6 sm:w-8 sm:h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>
        ),
        title: "Transparenz",
        description: "Keine versteckten Gebühren oder unvorhersehbare Kosten.",
      },
      {
        icon: (
          <svg className="w-6 h-6 sm:w-8 sm:h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
          </svg>
        ),
        title: "Einfachheit",
        description: "Intuitives Dashboard, auch ohne technische Vorkenntnisse.",
      },
    ],
    bottomText:
      "Dieses Konzept zeigt, wie ein Finanzprodukt leichtgewichtig, zugänglich und menschlich wirken kann — ohne Vertrauen oder Sicherheit zu opfern.",
  },

  howItWorks: {
    badge: "Der Weg",
    headline: (
      <>
        In 3 simplen Schritten <br />zum Maximum.
      </>
    ),
    subheadline: "Ein Prozess, der sich dir anpasst – nicht umgekehrt.",
    steps: [
      { num: 1, title: "App laden & verbinden", description: "Lade die Avenzo App, scanne deinen Lohnausweis oder verbinde deine Bank via OpenBanking." },
      { num: 2, title: "KI Analyse", description: "Unsere KI durchsucht hunderte Abzugsmöglichkeiten und optimiert live deine Policen.", active: true },
      { num: 3, title: "Auszahlung & Profit", description: "Wir reichen alles ein, kündigen teure Policen und sichern dir dein Geld zurück." },
    ],
  },

  calculator: {
    badge: "Live Rechner",
    headline: (
      <>
        Dein Potenzial,
        <br />
        <span className="text-accent">in Zahlen.</span>
      </>
    ),
    subheadline:
      "Finde in Sekunden heraus, wie viel Geld du durch unsere KI-gestützte Steuer- und Versicherungsoptimierung sparen kannst.",
    inputLabel: "Dein Bruttojahreseinkommen",
    currency: "CHF",
    locale: "de-CH",
    min: 40000,
    max: 250000,
    step: 5000,
    defaultValue: 80000,
    compute: (income: number) => {
      const tSav = Math.round(income * 0.015);
      const iSav = income > 40000 ? 530 + Math.round((income - 80000) * 0.002) : 530;
      return [
        { label: "Steuerersparnis", value: tSav },
        { label: "Versicherungs-Opt.", value: iSav },
      ];
    },
    benefits: [
      "Kostenlos & unverbindlich",
      "Basierend auf echten Daten",
      "Sofortiges Resultat",
    ],
    disclaimer: "* Geschätzte Werte. Die tatsächliche Ersparnis kann je nach Situation variieren.",
  },

  testimonials: {
    headline: (
      <>
        Über 10'000<br />zufriedene Nutzer.
      </>
    ),
    subheadline:
      "Erfahre, was unsere Kunden über Avenzo sagen. Keine leeren Versprechen — nur echte Ergebnisse.",
    items: [
      {
        quote: "Noch nie war die Steuererklärung so einfach. Lohnausweis fotografiert, App hat alles erkannt. Habe 800 CHF mehr zurückbekommen.",
        name: "Michael S.",
        location: "Zürich",
        initials: "MS",
        colors: "from-blue-500 to-indigo-600",
      },
      {
        quote: "Die automatische Versicherungsoptimierung hat mir 1.200 CHF im Jahr eingespart. Ich musste mich um nichts kümmern.",
        name: "Sarah M.",
        location: "Basel",
        initials: "SM",
        colors: "from-accent to-accent-dark",
        highlight: true,
      },
      {
        quote: "Als Selbstständiger war Treuhand immer ein Albtraum. Mit Avenzo habe ich endlich alles an einem Ort.",
        name: "David K.",
        location: "Bern",
        initials: "DK",
        colors: "from-emerald-500 to-teal-600",
      },
    ],
  },

  faq: {
    badge: "FAQ",
    headline: <>Häufig gestellte Fragen</>,
    subheadline: "Alles, was du über Avenzo wissen musst — kurz und klar beantwortet.",
    items: [
      { question: "Was kostet Avenzo?", answer: "Die Steuer-App ist ab 49 CHF pro Jahr erhältlich. Die Versicherungsoptimierung und der Treuhand-Service haben eigene Preismodelle — du zahlst nur, wenn du tatsächlich sparst." },
      { question: "Wie sicher sind meine Daten?", answer: "Alle Daten werden mit AES-256 verschlüsselt und auf Schweizer Servern gespeichert. Wir sind FINMA-konform und erfüllen die strengsten Datenschutzstandards der Schweiz." },
      { question: "Kann ich meine Steuererklärung wirklich in wenigen Minuten erledigen?", answer: "Ja. Unsere KI erkennt automatisch die relevanten Informationen aus deinen Dokumenten. Die meisten Nutzer sind in unter 15 Minuten fertig — inklusive aller Abzüge." },
      { question: "Was passiert, wenn ich bereits einen Treuhänder habe?", answer: "Kein Problem. Du kannst Avenzo parallel nutzen oder deinen bestehenden Treuhänder einladen, direkt auf der Plattform mitzuarbeiten." },
      { question: "Für welche Kantone ist Avenzo verfügbar?", answer: "Avenzo unterstützt alle 26 Kantone der Schweiz. Die Steueroptimierung berücksichtigt automatisch die kantonsspezifischen Abzugsmöglichkeiten." },
      { question: "Wie funktioniert die Versicherungsoptimierung?", answer: "Lade einfach deine bestehenden Policen hoch. Unsere KI vergleicht sie mit über 50 Anbietern und zeigt dir, wo du sparen kannst — inklusive automatischer Kündigung und Wechsel." },
    ],
  },

  ctaFooter: {
    headline: "Bereit loszulegen?",
    ctaHeading: <>Jetzt die App<br />herunterladen</>,
    contactLabel: "Kontakt",
    subheadline: "Erstelle dein Konto in 30 Sekunden und starte sofort mit der Steueroptimierung.",
    primaryCtaLabel: "Kostenlos starten",
    primaryCtaHref: "#",
    secondaryCtaLabel: "Mehr erfahren",
    secondaryCtaHref: "#",
    socialProofText: (
      <>
        <span className="text-gray-900 font-bold">10'000+</span> zufriedene Nutzer
      </>
    ),
    socialProofAvatars: [
      { initials: "MS", colors: "from-blue-500 to-indigo-600" },
      { initials: "SM", colors: "from-accent to-accent-dark" },
      { initials: "DK", colors: "from-emerald-500 to-teal-600" },
    ],
    footerDescription:
      "Drei spezialisierte Apps für Steuern, Versicherungen und Treuhand — jede entwickelt, um dir Zeit und Geld zu sparen.",
    socialLinks: [
      {
        label: "LinkedIn",
        href: "#",
        icon: (
          <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
        ),
      },
      {
        label: "Instagram",
        href: "#",
        icon: (
          <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
          </svg>
        ),
      },
      {
        label: "X / Twitter",
        href: "#",
        icon: (
          <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        ),
      },
    ],
    linkGroups: [
      {
        title: "Produkt",
        links: [
          { label: "Steuern", href: "#" },
          { label: "Versicherungen", href: "#" },
          { label: "Treuhand", href: "#" },
          { label: "Preise", href: "#" },
        ],
      },
      {
        title: "Rechtliches",
        links: [
          { label: "Datenschutz", href: "#" },
          { label: "AGB", href: "#" },
          { label: "Impressum", href: "#" },
          { label: "Cookie-Richtlinie", href: "#" },
        ],
      },
    ],
    bottomLinks: [
      { label: "Datenschutz", href: "#" },
      { label: "AGB", href: "#" },
      { label: "Impressum", href: "#" },
    ],
    copyright: "© 2026 Avenzo AG. Alle Rechte vorbehalten.",
  },

  cookieBanner: {
    storageKey: "avenzo-cookies",
    title: "Cookie-Einstellungen",
    description: "Wir verwenden Cookies, um dein Erlebnis zu verbessern. Du kannst deine Einstellungen jederzeit anpassen.",
    acceptLabel: "Alle akzeptieren",
    declineLabel: "Nur notwendige",
  },

  /* ── Pages ── */

  pricing: {
    headline: <>Transparente Preise</>,
    subheadline: "Keine versteckten Gebühren. Du zahlst nur, wenn du tatsächlich sparst.",
    tiers: [
      {
        name: "Starter",
        price: "49",
        period: "CHF / Jahr",
        description: "Für Einzelpersonen mit einfacher Steuersituation.",
        features: ["Steuererklärung", "Automatische Abzüge", "Digitaler Upload", "E-Mail Support"],
        ctaLabel: "Kostenlos testen",
      },
      {
        name: "Plus",
        price: "99",
        period: "CHF / Jahr",
        description: "Für Personen mit komplexerer Steuersituation.",
        features: ["Alles in Starter", "Versicherungsoptimierung", "Persönlicher Berater", "Prioritäts-Support", "Fristverlängerung"],
        ctaLabel: "Jetzt starten",
        highlighted: true,
        badge: "Beliebteste Wahl",
      },
      {
        name: "Business",
        price: "249",
        period: "CHF / Monat",
        description: "Für KMU mit Treuhand- und Buchhaltungsbedarf.",
        features: ["Alles in Plus", "Treuhand-Dashboard", "MWST-Abrechnung", "Lohnadministration", "Dedizierter Experte", "API-Zugang"],
        ctaLabel: "Demo buchen",
      },
    ],
  },

  about: {
    headline: <>Die Menschen hinter Avenzo</>,
    subheadline: "Wir glauben, dass Finanzen für alle zugänglich, transparent und stressfrei sein sollten.",
    story: "Avenzo entstand aus einer einfachen Frustration: Warum ist die Steuererklärung in der Schweiz so kompliziert? Als Team von Finanzexperten und Technologen haben wir uns zusammengetan, um die erste wirklich digitale Lösung für Schweizer Steuern, Versicherungen und Treuhand zu bauen.",
    mission: "Unsere Mission ist es, jedem in der Schweiz die bestmögliche finanzielle Beratung zugänglich zu machen — durch Technologie, die komplexe Prozesse vereinfacht, ohne die persönliche Beratung zu ersetzen.",
    values: [
      {
        title: "Transparenz",
        description: "Keine versteckten Gebühren, keine Überraschungen. Du siehst immer, was du zahlst und was du sparst.",
        icon: <svg className="w-5 h-5 sm:w-6 sm:h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
      },
      {
        title: "Sicherheit",
        description: "AES-256 Verschlüsselung, Schweizer Server, FINMA-konform. Deine Daten sind bei uns sicher.",
        icon: <svg className="w-5 h-5 sm:w-6 sm:h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" /></svg>,
      },
      {
        title: "Einfachheit",
        description: "Komplexe Finanzen, einfach gemacht. Unsere KI erledigt die Arbeit, du geniesst das Ergebnis.",
        icon: <svg className="w-5 h-5 sm:w-6 sm:h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" /></svg>,
      },
    ],
    team: [
      { name: "Denis M.", role: "CEO & Gründer", initials: "DM", colors: "from-accent to-accent-dark" },
      { name: "Sarah K.", role: "CTO", initials: "SK", colors: "from-blue-500 to-indigo-600" },
      { name: "Marco R.", role: "Head of Tax", initials: "MR", colors: "from-emerald-500 to-teal-600" },
      { name: "Lisa W.", role: "Head of Design", initials: "LW", colors: "from-pink-500 to-rose-600" },
    ],
    stats: [
      { value: "10'000+", label: "Zufriedene Nutzer" },
      { value: "CHF 2M+", label: "Ersparnisse erzielt" },
      { value: "26", label: "Kantone abgedeckt" },
      { value: "4.9★", label: "App Store Bewertung" },
    ],
  },

  contact: {
    headline: <>Wir sind für dich da</>,
    subheadline: "Hast du Fragen? Unser Team hilft dir gerne weiter.",
    email: "hallo@avenzo.ch",
    phone: "+41 44 123 45 67",
    address: "Avenzo AG\nBahnhofstrasse 42\n8001 Zürich\nSchweiz",
    formFields: [
      { label: "Name", type: "text" as const, placeholder: "Dein vollständiger Name" },
      { label: "E-Mail", type: "email" as const, placeholder: "deine@email.ch" },
      { label: "Nachricht", type: "textarea" as const, placeholder: "Wie können wir dir helfen?" },
    ],
    submitLabel: "Nachricht senden",
  },

  blog: {
    headline: <>Wissen & Tipps</>,
    subheadline: "Aktuelle Artikel rund um Steuern, Versicherungen und Finanzen in der Schweiz.",
    categories: ["Steuern", "Versicherungen", "Treuhand", "Tipps"],
    posts: [
      {
        slug: "steuererklaerung-2026",
        title: "Steuererklärung 2026: Die 10 wichtigsten Abzüge",
        excerpt: "Viele Steuerzahler verschenken jedes Jahr Geld, weil sie diese Abzüge nicht kennen. Hier sind die Top 10.",
        date: "28. März 2026",
        author: "Denis M.",
        authorInitials: "DM",
        authorColors: "from-accent to-accent-dark",
        category: "Steuern",
        readTime: "5 Min.",
      },
      {
        slug: "krankenkasse-wechseln",
        title: "Krankenkasse wechseln: So sparst du bis zu CHF 1'200",
        excerpt: "Der Wechsel der Grundversicherung ist einfacher als du denkst. Unser Guide zeigt dir wie.",
        date: "25. März 2026",
        author: "Sarah K.",
        authorInitials: "SK",
        authorColors: "from-blue-500 to-indigo-600",
        category: "Versicherungen",
        readTime: "4 Min.",
      },
      {
        slug: "saeule-3a-tipps",
        title: "Säule 3a: 5 Fehler, die dich Tausende kosten",
        excerpt: "Die dritte Säule ist eines der besten Steuerspar-Instrumente — wenn man sie richtig nutzt.",
        date: "20. März 2026",
        author: "Marco R.",
        authorInitials: "MR",
        authorColors: "from-emerald-500 to-teal-600",
        category: "Steuern",
        readTime: "6 Min.",
      },
      {
        slug: "kmu-buchhaltung",
        title: "Digitale Buchhaltung für KMU: Der komplette Leitfaden",
        excerpt: "Von der Belegerfassung bis zum Jahresabschluss — wie du deine Buchhaltung automatisierst.",
        date: "15. März 2026",
        author: "Lisa W.",
        authorInitials: "LW",
        authorColors: "from-pink-500 to-rose-600",
        category: "Treuhand",
        readTime: "8 Min.",
      },
      {
        slug: "steuertipps-freelancer",
        title: "Steuertipps für Freelancer und Selbstständige",
        excerpt: "Als Selbstständiger in der Schweiz gibt es besondere Abzugsmöglichkeiten. Nutze sie alle.",
        date: "10. März 2026",
        author: "Denis M.",
        authorInitials: "DM",
        authorColors: "from-accent to-accent-dark",
        category: "Tipps",
        readTime: "7 Min.",
      },
      {
        slug: "homeoffice-abzug",
        title: "Homeoffice-Abzug 2026: Was du wissen musst",
        excerpt: "Die Regeln für den Homeoffice-Abzug haben sich geändert. So holst du das Maximum raus.",
        date: "5. März 2026",
        author: "Marco R.",
        authorInitials: "MR",
        authorColors: "from-emerald-500 to-teal-600",
        category: "Steuern",
        readTime: "4 Min.",
      },
    ],
  },
};
