// Texts shared by the app pages: apps overview, status labels, 404 page.
// German uses umlauts and ss; no dashes as sentence breaks in German prose.

export const appsContent = {
  de: {
    meta: {
      title: "Apps · Emanuel Wullschleger",
      description:
        "Apps, die Emanuel Wullschleger neben Arbeit und Studium entwickelt. Als Erstes: CED Buddy, ein persönliches Tagebuch für Menschen mit Morbus Crohn oder Colitis ulcerosa.",
    },
    status: {
      coming_soon: "Für iPhone in Vorbereitung",
      available: "Für iPhone im App Store",
    },
    breadcrumb: "Brotkrümelnavigation",
    eyebrow: "Eigene Apps",
    title: "Apps",
    intro:
      "Neben Arbeit und Studium entwickle ich eigene Apps. Hier stelle ich sie vor, mit ihrem aktuellen Stand.",
    card: {
      kicker: "Erste App",
      desc: "Ein persönliches Tagebuch für Menschen mit Morbus Crohn oder Colitis ulcerosa. Halte Befinden, Beschwerden und Mahlzeiten fest und bereite deine Notizen für den nächsten Arzttermin vor.",
      facts: [
        { label: "Plattform", value: "iPhone (iOS)" },
        { label: "Stand", value: "In Vorbereitung, noch nicht im App Store" },
        { label: "Preis", value: "Tagebuch kostenlos, PDF-Berichte per einmaligem In-App-Kauf" },
      ],
      cta: "App ansehen",
      support: "Support",
      privacy: "Datenschutz",
    },
    developer: "Entwickelt von Emanuel Wullschleger.",
  },
  en: {
    meta: {
      title: "Apps · Emanuel Wullschleger",
      description:
        "Apps Emanuel Wullschleger builds alongside work and studies. First up: CED Buddy, a personal journal for people with Crohn's disease or ulcerative colitis.",
    },
    status: {
      coming_soon: "In preparation for iPhone",
      available: "On the App Store for iPhone",
    },
    breadcrumb: "Breadcrumb",
    eyebrow: "My apps",
    title: "Apps",
    intro:
      "Alongside work and studies I build my own apps. This is where I present them, with their current status.",
    card: {
      kicker: "First app",
      desc: "A personal journal for people with Crohn's disease or ulcerative colitis (IBD). Record how you feel, your symptoms and meals, and prepare your notes for your next doctor's appointment.",
      facts: [
        { label: "Platform", value: "iPhone (iOS)" },
        { label: "Status", value: "In preparation, not yet on the App Store" },
        { label: "Price", value: "Journal free, PDF reports with a one-time in-app purchase" },
      ],
      cta: "View the app",
      support: "Support",
      privacy: "Privacy",
    },
    developer: "Developed by Emanuel Wullschleger.",
  },
};

export const notFoundContent = {
  de: {
    title: "Seite nicht gefunden",
    text: "Diese Adresse gibt es auf wullschleger.dev nicht (mehr).",
    home: "Zur Startseite",
    apps: "Zu den Apps",
  },
  en: {
    title: "Page not found",
    text: "This address does not exist on wullschleger.dev (anymore).",
    home: "Go to the start page",
    apps: "Go to the apps",
  },
};
