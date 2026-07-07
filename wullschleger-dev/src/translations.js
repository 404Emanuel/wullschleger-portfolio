// All visible website text lives here, in both languages.
// German is the default language.
// Tone rule: honest junior/student level — "working with", "learning",
// "supporting" — never expert or senior claims.

export const profile = {
  email: "emanuel.wullschleger@icloud.com",
  linkedin: "https://www.linkedin.com/in/emanuel-wullschleger/",
  github: "https://github.com/404Emanuel",
  gdev: "https://g.dev/404Emanuel",
  repo: "https://github.com/404Emanuel/wullschleger-portfolio",
};

export const translations = {
  de: {
    skipLink: "Zum Inhalt springen",
    langToggle: "Sprache wählen",
    nav: {
      label: "Hauptnavigation",
      about: "Über mich",
      focus: "Fokus",
      experience: "Erfahrung",
      projects: "Projekte",
      contact: "Kontakt",
      menuOpen: "Menü öffnen",
      menuClose: "Menü schliessen",
    },
    hero: {
      badge: "Junior Digital Integration Software Engineer",
      name: "Emanuel Wullschleger",
      headline: "Software Testing → Application Development",
      subheadline:
        "Ich arbeite im Software Testing und an der Testautomatisierung mit Python, Squish und Selenium – und baue dieses Fundament gezielt Richtung Application Development aus.",
      tags: ["Python", "Squish", "Selenium", "Jenkins", "QA", "Application Development"],
      terminal: {
        title: "emanuel@wullschleger.dev",
        lines: [
          { cmd: "whoami", out: "Junior Digital Integration Software Engineer" },
          { cmd: "current_focus", out: "Software Testing · QA · Testautomatisierung" },
          { cmd: "learning", out: "Application Development — Informatik HF (TEKO)" },
          { cmd: "status", out: "In Entwicklung: Testing → Application Development" },
        ],
      },
      linkedin: "LinkedIn",
      github: "GitHub",
      gdev: "Google Developer Profil",
      contact: "Kontakt aufnehmen",
    },
    about: {
      num: "01",
      title: "Über mich",
      paragraphs: [
        "Ich arbeite als Junior Digital Integration Software Engineer bei Franke Coffee Systems und studiere berufsbegleitend Dipl. Informatiker HF Applikationsentwicklung an der TEKO.",
        "Mein Hintergrund liegt im Testen komplexer Systeme: Qualitätssicherung, Testautomatisierung, Bug-Analyse und CI/CD-Workflows. Diese Arbeit lehrt mich täglich, Software wirklich zu verstehen – wie sie funktioniert, wo sie bricht und wie man sie besser macht.",
        "Auf diesem Fundament entwickle ich mich Schritt für Schritt Richtung Software Engineering und Application Development weiter.",
      ],
      highlights: [
        {
          label: "Heute",
          text: "Software Testing, QA und Mitarbeit an der Testautomatisierung bei Franke Coffee Systems.",
        },
        {
          label: "Studium",
          text: "Dipl. Informatiker HF Applikationsentwicklung an der TEKO, berufsbegleitend bis 2027.",
        },
        {
          label: "Richtung",
          text: "Application Development – über Studium, Lernprojekte und das eigene Homelab.",
        },
      ],
    },
    focus: {
      num: "02",
      title: "Technischer Fokus",
      groups: [
        {
          icon: "test",
          title: "Beruflicher Fokus",
          note: "Der Kern meiner täglichen Arbeit.",
          items: [
            "Software Testing",
            "Quality Assurance",
            "Bug Analysis",
            "Regression Testing",
            "Testdokumentation",
          ],
        },
        {
          icon: "tools",
          title: "Tools im Arbeitsalltag",
          note: "Damit arbeite ich – und vertiefe es laufend.",
          items: ["Python", "Squish", "Selenium", "Jenkins", "Jira / Xray", "Git / Bitbucket"],
        },
        {
          icon: "learn",
          title: "Aktuell am Lernen",
          note: "Aus Studium, Lernprojekten und Homelab – Grundlagen im Aufbau.",
          learning: true,
          items: ["FastAPI", "SQL / PostgreSQL", "React / Vite", "Docker", "Go", "Linux", "Cloudflare"],
        },
      ],
    },
    experience: {
      num: "03",
      title: "Erfahrung",
      entries: [
        {
          period: "07/2025 – heute",
          role: "Junior Digital Integration Software Engineer",
          org: "Franke Coffee Systems",
          bullets: [
            "Unterstütze die Validierung neuer Software-Builds",
            "Arbeite an Python-basierter Testautomatisierung mit Squish und Selenium mit",
            "Unterstütze Jenkins-Pipelines und Git/Bitbucket-Workflows",
            "Analysiere Bugs anhand von Logs, Testdaten und Systemverhalten",
          ],
        },
        {
          period: "05/2023 – 06/2025",
          role: "Software Test Engineer",
          org: "Bystronic Laser AG",
          bullets: [
            "Funktions-, Integrations- und Systemtests in der Biegezellen-Automation",
            "Testing rund um KUKA-Robotik und Automations-Workflows",
            "Bug-Reporting, Testdokumentation und 2nd-Level-Support",
          ],
        },
        {
          period: "10/2024 – 10/2027",
          role: "Dipl. Informatiker HF Applikationsentwicklung",
          org: "TEKO",
          tag: "Ausbildung",
          edu: true,
          bullets: [
            "Berufsbegleitendes Studium mit Fokus auf Software- und Applikationsentwicklung",
          ],
        },
      ],
      footnote: "Technischer Hintergrund: Ausbildung als Polymechaniker (2015–2019).",
    },
    projects: {
      num: "04",
      title: "Projekte & Lernfelder",
      intro:
        "Lernprojekte und Experimente neben Job und Studium – klein gehalten und zum Verstehen gebaut, keine Kundenprojekte.",
      items: [
        {
          kicker: "Lernprojekt",
          name: "FastAPI & SQL API",
          desc: "Kleine REST-API mit FastAPI und PostgreSQL. Hier lerne ich Datenmodellierung, CRUD-Endpoints und die Grundlagen von sauberem API-Design.",
          tags: ["Python", "FastAPI", "PostgreSQL"],
          status: "In Arbeit",
        },
        {
          kicker: "Lernprojekt",
          name: "React & Vite Frontend-Basics",
          desc: "Diese Website und kleine UI-Experimente – Komponenten, State und ein einfaches Design-Token-System in der Praxis.",
          tags: ["React", "Vite", "CSS"],
          status: "Laufend",
          repo: true,
          repoLabel: "Source ansehen",
        },
        {
          kicker: "Experiment",
          name: "Homelab & Self-Hosting",
          desc: "Eigenes kleines Lab mit Linux, Docker-Basics und Cloudflare – zum Ausprobieren von Deployments, Networking und Self-Hosted Services.",
          tags: ["Linux", "Docker", "Cloudflare"],
          status: "Laufend",
        },
      ],
    },
    contact: {
      num: "05",
      title: "Kontakt",
      lead: "Lass uns vernetzen!",
      text: "Ob Feedback, Austausch oder eine mögliche Zusammenarbeit – ich freue mich über deine Nachricht.",
      channels: {
        email: "E-Mail schreiben",
        linkedin: "Auf LinkedIn vernetzen",
        github: "Code auf GitHub",
      },
      cv: "CV herunterladen",
    },
    footer: {
      source: "Source",
      sourceLabel: "Quellcode dieser Website auf GitHub",
    },
  },

  en: {
    skipLink: "Skip to content",
    langToggle: "Choose language",
    nav: {
      label: "Main navigation",
      about: "About",
      focus: "Focus",
      experience: "Experience",
      projects: "Projects",
      contact: "Contact",
      menuOpen: "Open menu",
      menuClose: "Close menu",
    },
    hero: {
      badge: "Junior Digital Integration Software Engineer",
      name: "Emanuel Wullschleger",
      headline: "Software Testing → Application Development",
      subheadline:
        "I work in software testing and test automation with Python, Squish and Selenium — and I'm building on that foundation to grow into application development.",
      tags: ["Python", "Squish", "Selenium", "Jenkins", "QA", "Application Development"],
      terminal: {
        title: "emanuel@wullschleger.dev",
        lines: [
          { cmd: "whoami", out: "Junior Digital Integration Software Engineer" },
          { cmd: "current_focus", out: "Software Testing · QA · Test Automation" },
          { cmd: "learning", out: "Application Development — Computer Science HF (TEKO)" },
          { cmd: "status", out: "In progress: testing → application development" },
        ],
      },
      linkedin: "LinkedIn",
      github: "GitHub",
      gdev: "Google Developer profile",
      contact: "Get in touch",
    },
    about: {
      num: "01",
      title: "About",
      paragraphs: [
        "I work as a Junior Digital Integration Software Engineer at Franke Coffee Systems and study application development (Dipl. Informatiker HF) part-time at TEKO.",
        "My background is in testing complex systems: quality assurance, test automation, bug analysis and CI/CD workflows. That work teaches me every day to understand software in depth — how it works, where it breaks and how to make it better.",
        "On that foundation I'm growing step by step towards software engineering and application development.",
      ],
      highlights: [
        {
          label: "Today",
          text: "Software testing, QA and contributing to test automation at Franke Coffee Systems.",
        },
        {
          label: "Studies",
          text: "Dipl. Informatiker HF in application development at TEKO, part-time until 2027.",
        },
        {
          label: "Direction",
          text: "Application development — through my studies, learning projects and a personal homelab.",
        },
      ],
    },
    focus: {
      num: "02",
      title: "Technical Focus",
      groups: [
        {
          icon: "test",
          title: "Professional Focus",
          note: "The core of my day-to-day work.",
          items: [
            "Software Testing",
            "Quality Assurance",
            "Bug Analysis",
            "Regression Testing",
            "Test Documentation",
          ],
        },
        {
          icon: "tools",
          title: "Tools I Work With",
          note: "What I use at work — and keep getting deeper into.",
          items: ["Python", "Squish", "Selenium", "Jenkins", "Jira / Xray", "Git / Bitbucket"],
        },
        {
          icon: "learn",
          title: "Currently Learning",
          note: "From studies, learning projects and my homelab — building the basics.",
          learning: true,
          items: ["FastAPI", "SQL / PostgreSQL", "React / Vite", "Docker", "Go", "Linux", "Cloudflare"],
        },
      ],
    },
    experience: {
      num: "03",
      title: "Experience",
      entries: [
        {
          period: "07/2025 – present",
          role: "Junior Digital Integration Software Engineer",
          org: "Franke Coffee Systems",
          bullets: [
            "Supporting validation of new software builds",
            "Working with Python-based test automation using Squish and Selenium",
            "Supporting Jenkins pipeline and Git/Bitbucket workflows",
            "Analysing bugs using logs, test data and system behaviour",
          ],
        },
        {
          period: "05/2023 – 06/2025",
          role: "Software Test Engineer",
          org: "Bystronic Laser AG",
          bullets: [
            "Functional, integration and system testing in bending cell automation",
            "Testing around KUKA robotics and automation workflows",
            "Bug reporting, test documentation and 2nd-level support",
          ],
        },
        {
          period: "10/2024 – 10/2027",
          role: "HF Application Development Student",
          org: "TEKO",
          tag: "Education",
          edu: true,
          bullets: ["Part-time studies focused on software and application development"],
        },
      ],
      footnote: "Technical background: trained as a Polymechanic (mechanical engineering, 2015–2019).",
    },
    projects: {
      num: "04",
      title: "Projects & Learning",
      intro:
        "Learning projects and experiments alongside work and studies — kept small and built to understand, not client work.",
      items: [
        {
          kicker: "Learning project",
          name: "FastAPI & SQL API",
          desc: "A small REST API with FastAPI and PostgreSQL. This is where I learn data modelling, CRUD endpoints and the basics of clean API design.",
          tags: ["Python", "FastAPI", "PostgreSQL"],
          status: "In progress",
        },
        {
          kicker: "Learning project",
          name: "React & Vite Frontend Basics",
          desc: "This website and small UI experiments — components, state and a simple design-token system in practice.",
          tags: ["React", "Vite", "CSS"],
          status: "Ongoing",
          repo: true,
          repoLabel: "View source",
        },
        {
          kicker: "Experiment",
          name: "Homelab & Self-Hosting",
          desc: "A small personal lab with Linux, Docker basics and Cloudflare — for trying out deployments, networking and self-hosted services.",
          tags: ["Linux", "Docker", "Cloudflare"],
          status: "Ongoing",
        },
      ],
    },
    contact: {
      num: "05",
      title: "Contact",
      lead: "Let's connect!",
      text: "Whether it's feedback, a quick chat or a potential opportunity — I'm happy to hear from you.",
      channels: {
        email: "Write an email",
        linkedin: "Connect on LinkedIn",
        github: "Code on GitHub",
      },
      cv: "Download CV",
    },
    footer: {
      source: "Source",
      sourceLabel: "Source code of this website on GitHub",
    },
  },
};
