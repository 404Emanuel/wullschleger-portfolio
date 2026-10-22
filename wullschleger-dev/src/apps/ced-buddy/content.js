// Product and support texts for CED Buddy (DE/EN).
// Facts come from the app repository (feat/feedback @ 5f80835, docs/release/
// privacy-facts.md, docs/RELEASE.md, src/core/i18n/de.ts). Before changing a
// statement, check it against the app. Never claim: medical certification,
// clinical validation, "secure", cloud backup, sync, trigger or flare
// detection, AI analysis, App Store availability, user numbers or ratings.

const shot = (name, lang, width) => ({ name, lang, width });

// Screenshot sets. `lang` is the language of the app interface in the image;
// `width` the largest file written by scripts/ced-buddy-assets.sh.
export const screens = {
  today: { de: shot("today-de", "de", 644), en: shot("today-en", "en", 414), ratio: [644, 1400] },
  mood: { de: shot("check-in-mood-de", "de", 644), en: shot("check-in-mood-de", "de", 644), ratio: [644, 1400] },
  symptoms: {
    de: shot("check-in-symptoms-de", "de", 644),
    en: shot("check-in-symptoms-de", "de", 644),
    ratio: [644, 1400],
  },
  history: { de: shot("history-de", "de", 414), en: shot("history-en", "en", 414), ratio: [414, 900] },
  month: { de: shot("overview-month-de", "de", 414), en: shot("overview-month-de", "de", 414), ratio: [414, 900] },
  reportCard: {
    de: shot("overview-report-de", "de", 414),
    en: shot("overview-report-de", "de", 414),
    ratio: [414, 900],
  },
  reportOptions: {
    de: shot("report-options-de", "de", 720),
    en: shot("report-options-en", "en", 720),
    ratio: [1206, 2622],
  },
};

export const cedBuddyContent = {
  de: {
    meta: {
      title: "CED Buddy · Tagebuch für Morbus Crohn und Colitis ulcerosa",
      description:
        "CED Buddy ist ein persönliches Tagebuch für Menschen mit Morbus Crohn oder Colitis ulcerosa: Befinden, Beschwerden und Mahlzeiten festhalten und den Arzttermin vorbereiten. Für iPhone in Vorbereitung.",
    },
    shotCaption: "Ansichten aus der aktuellen Testversion, mit erfundenen Daten.",
    otherUiLang: "",
    alt: {
      today:
        "Ansicht „Heute“ mit erfundenen Daten: gespeicherter Check-in mit dem Buddy, Schnellaktionen für Mahlzeit, Beschwerden, Stuhlgang und Notiz sowie ein Hinweis zur Sicherungsdatei.",
      mood: "Erster Schritt des Check-ins: die Frage „Wie geht es deinem Darm heute?“ mit den Antworten Gut, Geht so und Nicht gut.",
      symptoms:
        "Zweiter Schritt des Check-ins: sechs Beschwerden zur Auswahl, etwa Bauchschmerzen oder Müdigkeit, oder „Keine Beschwerden“.",
      history:
        "Verlauf mit Suche, Filtern und Tagen mit Einträgen; einzelne Einträge sind für den Arzttermin markiert (erfundene Daten).",
      month: "Monatsübersicht: das festgehaltene Befinden pro Tag als Kalender (erfundene Daten).",
      reportCard:
        "Übersicht mit der Karte „Für deinen Arzttermin“, dem Knopf „Bericht erstellen“ und drei vorgemerkten Einträgen.",
      reportOptions:
        "Bericht für den Arzttermin: Vorschau der Kennzahlen, Hinweis, dass das PDF nicht passwortgeschützt ist, und der Knopf „Freischalten und PDF erstellen“.",
    },

    hero: {
      title: "Dein CED-Alltag. An einem Ort.",
      lead: "Halte dein Befinden, Beschwerden und Mahlzeiten fest und bereite deine Notizen für den nächsten Arzttermin vor.",
      audience: "Für Menschen mit Morbus Crohn oder Colitis ulcerosa.",
      primary: "App kennenlernen",
      secondary: "Fragen zur App",
      store: "Im App Store laden",
      facts: ["Ohne Konto", "Tagebuch auf deinem Gerät", "Einmaliger Kauf für PDF-Berichte"],
    },

    flow: {
      eyebrow: "So funktioniert’s",
      title: "Vom kurzen Eintrag bis zum Arztgespräch",
      steps: [
        {
          id: "festhalten",
          num: "01",
          label: "Festhalten",
          title: "Ein Check-in am Tag. Mit wenigen Tipps.",
          text: "Der geführte Check-in fragt zuerst nach deinem Befinden: gut, geht so oder nicht gut. Danach wählst du deine Beschwerden aus und ergänzt, wenn du willst, eine Notiz.",
          points: [
            "Mahlzeiten mit Foto oder kurzem Namen, häufige Mahlzeiten auf Wunsch zum Antippen",
            "Beschwerden, Stuhlgänge und Notizen separat erfassen, wann immer sie anfallen",
            "Optionale tägliche Erinnerung, auf Wunsch diskret formuliert",
          ],
          images: ["symptoms", "mood"],
        },
        {
          id: "zurueckblicken",
          num: "02",
          label: "Zurückblicken",
          title: "Deine Angaben wiederfinden.",
          text: "Der Verlauf zeigt alle Tage mit Einträgen, mit Suche und Filtern. Die Übersicht fasst einen Monat oder ein Jahr zusammen: welches Befinden du an welchen Tagen festgehalten hast und welche Beschwerden du notiert hast.",
          points: [
            "Suche im Tagebuch und Filter, etwa für Arzt-Markierungen",
            "Monats- und Jahresübersicht mit Tagen ohne Angabe",
            "Die App zählt nur, was du eingetragen hast. Sie bewertet und deutet nichts.",
          ],
          images: ["history", "month"],
        },
        {
          id: "arzttermin",
          num: "03",
          label: "Vorbereitet zum Arzttermin",
          title: "Mit deinen Fragen ins Gespräch.",
          text: "Einträge, die du besprechen möchtest, markierst du für den Arzttermin. Für den Termin stellt die App deine Angaben zu einem strukturierten PDF-Bericht zusammen.",
          points: [
            "Markierte Einträge auf einen Blick, direkt aus der Übersicht",
            "Bericht mit Kennzahlen, Verlauf und „Das möchte ich besprechen“",
            "Auf Wunsch mit Tageschronik als Anhang",
          ],
          images: ["reportOptions", "reportCard"],
        },
      ],
    },

    reports: {
      eyebrow: "Arztberichte",
      title: "Einmal freischalten, beliebig viele Berichte.",
      text: "Der Bericht fasst deine eigenen Angaben für das Arztgespräch zusammen. Er stellt keine Diagnose und leitet aus Mahlzeiten keine Ursachen ab.",
      steps: [
        { title: "Zeitraum wählen", text: "30 Tage, 90 Tage, 6 oder 12 Monate oder ein eigener Zeitraum." },
        {
          title: "Inhalte wählen",
          text: "Befinden, Beschwerden, Stuhlgang, Notizen und Mahlzeiten. Fotos von Mahlzeiten sind nicht enthalten.",
        },
        { title: "Markierte Punkte mitnehmen", text: "Deine markierten Einträge stehen unter „Das möchte ich besprechen“." },
        { title: "PDF ansehen und teilen", text: "Ob und an wen du das PDF weitergibst, entscheidest du im Teilen-Dialog." },
      ],
      freeTitle: "Kostenlos",
      free: [
        "Check-in, Mahlzeiten, Beschwerden, Stuhlgänge und Notizen",
        "Verlauf mit Suche, Monats- und Jahresübersicht",
        "Markierungen für den Arzttermin",
        "Sicherung und Wiederherstellung",
        "Zeitraum, Inhalte und Vorschau des Berichts",
      ],
      paidTitle: "Einmalig freischalten",
      paid: ["Persönliche PDF-Berichte erstellen, beliebig viele", "Kein Abo, keine Kosten pro Bericht"],
      price: "Einmaliger In-App-Kauf. Den aktuellen Preis siehst du vor dem Kauf in der App.",
      priceNote: "Kauf und Zahlung laufen über den App Store von Apple. Für den Kauf braucht die App eine Verbindung zum App Store.",
    },

    data: {
      eyebrow: "Deine Daten",
      title: "Was mit deinen Einträgen passiert",
      items: [
        {
          title: "Auf deinem iPhone",
          text: "Tagebucheinträge und Fotos werden lokal und verschlüsselt auf dem Gerät gespeichert.",
        },
        {
          title: "Kein eigener Server",
          text: "Die App lädt dein Tagebuch nicht auf einen Server hoch. Es gibt kein Konto und keine Synchronisation.",
        },
        {
          title: "Sicherung machst du selbst",
          text: "Für einen Gerätewechsel brauchst du eine Sicherungsdatei mit Passwort. Die App sichert nicht automatisch.",
        },
        {
          title: "PDF ohne Passwort",
          text: "Ein Bericht, den du weitergibst, ist nicht passwortgeschützt und enthält deine Angaben.",
        },
        {
          title: "E-Mail nur auf deinen Wunsch",
          text: "Support und Feedback schreibst und sendest du selbst über dein Mailprogramm. Die App hängt nichts aus dem Tagebuch an.",
        },
        {
          title: "Kauf über Apple",
          text: "Für den Kauf spricht die App mit dem App Store. Tagebuchdaten werden dabei nicht übertragen.",
        },
      ],
      link: "Datenschutzerklärung lesen",
      disclaimer:
        "CED Buddy ist ein persönliches Tagebuch, kein medizinisches Werkzeug. Die App stellt keine Diagnosen, misst keine Entzündungsaktivität und gibt keine Behandlungsempfehlungen.",
    },

    faq: {
      eyebrow: "Häufige Fragen",
      title: "Kurz beantwortet",
      items: [
        {
          q: "Für wen ist die App?",
          a: "Für Menschen mit Morbus Crohn oder Colitis ulcerosa, die ihren Alltag festhalten und den Arzttermin vorbereiten möchten. CED Buddy ist ein persönliches Tagebuch und ersetzt keine ärztliche Beratung.",
        },
        {
          q: "Brauche ich ein Konto?",
          a: "Nein. Du startest ohne Konto, ohne E-Mail-Adresse und ohne echten Namen. Ein Spitzname für die Begrüssung ist freiwillig.",
        },
        {
          q: "Was ist kostenlos?",
          a: "Tagebuch, Verlauf, Übersicht, Markierungen für den Arzttermin, Sicherung und Wiederherstellung. Auch Zeitraum, Inhalte und Vorschau eines Berichts siehst du ohne Kauf. Nur das Erstellen persönlicher PDF-Berichte schaltest du einmalig frei.",
        },
        {
          q: "Wie funktionieren die Arztberichte?",
          a: "In der Übersicht tippst du auf „Bericht erstellen“, wählst Zeitraum und Inhalte und siehst eine Vorschau. Nach der einmaligen Freischaltung erstellt die App das PDF. Ob und wohin du es weitergibst, entscheidest du selbst.",
        },
        {
          q: "Wie nehme ich mein Tagebuch auf ein neues iPhone mit?",
          a: "Mit einer Sicherungsdatei: Unter Einstellungen › Sicherung & Wiederherstellung erstellst du eine mit Passwort verschlüsselte Datei und legst sie ausserhalb des alten iPhones ab. Auf dem neuen iPhone wählst du beim Start „Sicherung wiederherstellen“. Ohne das Passwort lässt sich die Datei nicht öffnen, auch nicht durch den Entwickler.",
        },
        {
          q: "Gibt es eine Android-Version?",
          a: "Nein. CED Buddy entsteht zuerst für das iPhone. Ein Datum für Android gibt es nicht.",
        },
      ],
      more: "Weitere Fragen im Support",
    },

    closing: {
      comingSoonTitle: "Noch nicht im App Store",
      comingSoonText:
        "CED Buddy wird gerade für das iPhone vorbereitet. Sobald die App im App Store erhältlich ist, findest du den Link auf dieser Seite.",
      availableTitle: "Jetzt für das iPhone",
      availableText: "CED Buddy ist im App Store erhältlich.",
      support: "Support und Kontakt",
      privacy: "Datenschutz",
    },

    footerLinks: { label: "CED Buddy", product: "CED Buddy", support: "Support", privacy: "Datenschutz" },
  },

  en: {
    meta: {
      title: "CED Buddy · Journal for Crohn's disease and ulcerative colitis",
      description:
        "CED Buddy is a personal journal for people with Crohn's disease or ulcerative colitis (IBD): record how you feel, symptoms and meals, and prepare for your doctor's appointment. In preparation for iPhone.",
    },
    shotCaption: "Screens from the current test version, with made-up data.",
    otherUiLang: "Interface shown in German.",
    alt: {
      today:
        "Today screen with made-up data: a saved check-in with the Buddy, quick actions for meal, symptoms, bowel movement and note, and today's entries.",
      mood: "First check-in step (German interface): “How is your gut today?” with the answers good, okay and not good.",
      symptoms:
        "Second check-in step (German interface): six symptoms to choose from, such as abdominal pain or fatigue, or “no symptoms”.",
      history:
        "History with search, filters and days with entries; some entries are marked for the doctor's visit (made-up data).",
      month: "Month overview (German interface): the recorded wellbeing per day as a calendar (made-up data).",
      reportCard:
        "Overview (German interface) with the card “For your doctor's appointment”, the button “Create report” and three marked entries.",
      reportOptions:
        "Report for a doctor's visit: period options from 30 days to 12 months or a custom period, content switches and the button “Unlock and create PDF”.",
    },

    hero: {
      title: "Your life with IBD. In one place.",
      lead: "Record how you feel, your symptoms and meals, and prepare your notes for your next doctor's appointment.",
      audience: "For people with Crohn's disease or ulcerative colitis.",
      primary: "Get to know the app",
      secondary: "Questions about the app",
      store: "Download on the App Store",
      facts: ["No account", "Journal on your device", "One-time purchase for PDF reports"],
    },

    flow: {
      eyebrow: "How it works",
      title: "From a quick entry to the doctor's appointment",
      steps: [
        {
          id: "record",
          num: "01",
          label: "Record",
          title: "One check-in a day. Just a few taps.",
          text: "The guided check-in first asks how you feel: good, okay or not good. Then you pick your symptoms and, if you like, add a note.",
          points: [
            "Meals with a photo or a short name; frequent meals one tap away if you save them",
            "Symptoms, bowel movements and notes recorded separately, whenever they happen",
            "Optional daily reminder, worded discreetly if you prefer",
          ],
          images: ["symptoms", "mood"],
        },
        {
          id: "look-back",
          num: "02",
          label: "Look back",
          title: "Find your entries again.",
          text: "History shows every day with entries, with search and filters. The overview sums up a month or a year: which wellbeing you recorded on which days and which symptoms you noted.",
          points: [
            "Search your journal and filter, for example by doctor marks",
            "Month and year overview, including days without information",
            "The app only counts what you entered. It does not rate or interpret anything.",
          ],
          images: ["history", "month"],
        },
        {
          id: "doctor-visit",
          num: "03",
          label: "Ready for your appointment",
          title: "Bring your questions to the appointment.",
          text: "Mark the entries you want to discuss for the doctor's visit. For the appointment, the app compiles your information into a structured PDF report.",
          points: [
            "Marked entries at a glance, right from the overview",
            "Report with key figures, history and “What I want to discuss”",
            "Daily chronicle as an appendix if you want it",
          ],
          images: ["reportOptions", "reportCard"],
        },
      ],
    },

    reports: {
      eyebrow: "Doctor reports",
      title: "Unlock once, create as many reports as you like.",
      text: "The report summarises your own entries for the conversation with your doctor. It makes no diagnosis and does not infer causes from meals.",
      steps: [
        { title: "Choose a period", text: "30 days, 90 days, 6 or 12 months, or a custom period." },
        {
          title: "Choose contents",
          text: "Wellbeing, symptoms, bowel movements, notes and meals. Meal photos are not included.",
        },
        { title: "Bring marked points", text: "Your marked entries appear under “What I want to discuss”." },
        { title: "View and share the PDF", text: "Whether and with whom you share the PDF is up to you, in the share sheet." },
      ],
      freeTitle: "Free",
      free: [
        "Check-in, meals, symptoms, bowel movements and notes",
        "History with search, month and year overview",
        "Marks for the doctor's visit",
        "Backup and restore",
        "Period, contents and preview of the report",
      ],
      paidTitle: "Unlock once",
      paid: ["Create personal PDF reports, as many as you like", "No subscription, no cost per report"],
      price: "One-time in-app purchase. You see the current price in the app before you buy.",
      priceNote: "Purchase and payment are handled by Apple's App Store. The purchase needs a connection to the App Store.",
    },

    data: {
      eyebrow: "Your data",
      title: "What happens to your entries",
      items: [
        {
          title: "On your iPhone",
          text: "Journal entries and photos are stored locally and encrypted on the device.",
        },
        {
          title: "No server of our own",
          text: "The app does not upload your journal to a server. There is no account and no sync.",
        },
        {
          title: "You make the backup",
          text: "To move to a new device you need a backup file with a password. The app does not back up automatically.",
        },
        {
          title: "PDF without a password",
          text: "A report you share is not password-protected and contains your information.",
        },
        {
          title: "Email only if you want",
          text: "You write and send support and feedback emails yourself, from your mail app. The app attaches nothing from the journal.",
        },
        {
          title: "Purchase through Apple",
          text: "For the purchase, the app talks to the App Store. No journal data is transferred.",
        },
      ],
      link: "Read the privacy policy",
      disclaimer:
        "CED Buddy is a personal journal, not a medical tool. The app makes no diagnoses, does not measure inflammatory activity and gives no treatment recommendations.",
    },

    faq: {
      eyebrow: "FAQ",
      title: "Quick answers",
      items: [
        {
          q: "Who is the app for?",
          a: "For people with Crohn's disease or ulcerative colitis who want to keep track of their everyday life and prepare for doctor's appointments. CED Buddy is a personal journal and does not replace medical advice.",
        },
        {
          q: "Do I need an account?",
          a: "No. You start without an account, without an email address and without your real name. A nickname for the greeting is optional.",
        },
        {
          q: "What is free?",
          a: "The journal, history, overview, marks for the doctor's visit, backup and restore. You can also see a report's period, contents and preview without buying. Only creating personal PDF reports is unlocked once.",
        },
        {
          q: "How do the doctor reports work?",
          a: "In the overview, tap “Create report”, choose the period and contents and look at the preview. After the one-time unlock, the app creates the PDF. Whether and where you share it is up to you.",
        },
        {
          q: "How do I move my journal to a new iPhone?",
          a: "With a backup file: under Settings › Backup & restore you create a password-encrypted file and store it somewhere other than the old iPhone. On the new iPhone, choose “Restore a backup” at the start. Without the password the file cannot be opened, not even by the developer.",
        },
        {
          q: "Is there an Android version?",
          a: "No. CED Buddy is being built for iPhone first. There is no date for Android.",
        },
      ],
      more: "More questions in support",
    },

    closing: {
      comingSoonTitle: "Not on the App Store yet",
      comingSoonText:
        "CED Buddy is being prepared for iPhone. As soon as the app is available on the App Store, you will find the link on this page.",
      availableTitle: "Now on iPhone",
      availableText: "CED Buddy is available on the App Store.",
      support: "Support and contact",
      privacy: "Privacy",
    },

    footerLinks: { label: "CED Buddy", product: "CED Buddy", support: "Support", privacy: "Privacy" },
  },
};

// Mail subjects follow the in-app feedback ("[CED Buddy][BUG] Feedback"), so
// messages from the website and from the app look the same in the inbox.
export const supportContent = {
  de: {
    meta: {
      title: "Support · CED Buddy",
      description:
        "Hilfe und Kontakt für CED Buddy: Fragen, Fehler melden, Verbesserungen und Funktionswünsche per E-Mail an apps@wullschleger.dev. Mit Antworten zu Kauf, Sicherung und Gerätewechsel.",
    },
    eyebrow: "CED Buddy · Support",
    title: "Hilfe und Kontakt",
    intro:
      "Du hast eine Frage, einen Fehler gefunden oder einen Wunsch? Schreib mir eine E-Mail. Dafür brauchst du kein Konto, und die App muss nicht installiert sein.",
    addressLabel: "E-Mail-Adresse",
    write: "E-Mail schreiben",
    copy: "Adresse kopieren",
    copied: "Die Adresse ist kopiert.",
    copySelected:
      "Kopieren war nicht möglich. Die Adresse ist jetzt markiert: Kopiere sie mit Cmd+C oder Strg+C, oder halte sie auf dem Handy gedrückt.",
    draftNote:
      "Der Knopf öffnet einen Entwurf in deinem Mailprogramm. Gesendet wird erst, wenn du dort selbst auf Senden tippst. Öffnet sich nichts, kopiere die Adresse und schreib aus deinem Mailprogramm.",
    general: { subject: "CED Buddy: Frage" },
    reasonsTitle: "Worum geht es?",
    reasons: [
      {
        key: "bug",
        title: "Fehler melden",
        text: "Was ist passiert, und was hattest du erwartet?",
        subject: "[CED Buddy][BUG] Feedback",
        body: "Was ist passiert?\n\nWas hattest du erwartet?\n\nSchritte zum Nachstellen:\n1.\n2.\n\nApp-Version:\niOS-Version:\n",
      },
      {
        key: "improvement",
        title: "Verbesserung vorschlagen",
        text: "Was ist umständlich oder unklar?",
        subject: "[CED Buddy][IMPROVEMENT] Feedback",
        body: "",
      },
      {
        key: "feature",
        title: "Funktionswunsch",
        text: "Was fehlt dir, und wobei würde es helfen?",
        subject: "[CED Buddy][FEATURE] Feedback",
        body: "",
      },
    ],
    reasonCta: "E-Mail vorbereiten",
    bugHelpTitle: "Für Fehlermeldungen hilfreich",
    bugHelp: [
      "App-Version: in der App unter Einstellungen › Über die App",
      "iOS-Version: in den iPhone-Einstellungen unter Allgemein › Info",
      "Kurze Schritte, mit denen sich der Fehler wiederholen lässt",
    ],
    inAppHint:
      "In der App findest du unter Einstellungen › Hilfe & Feedback dasselbe. Dort kannst du technische Angaben (App-Version, iOS-Version, Sprache und Darstellung) auf Wunsch selbst hinzufügen; du siehst sie vor dem Senden.",
    privacyTitle: "Bitte nichts Sensibles mitsenden",
    privacyText:
      "Schick keine Sicherungsdateien, Berichte, Gesundheitsangaben oder ungeschwärzten Screenshots mit, wenn ich nicht ausdrücklich darum bitte. Deine E-Mail ist nicht anonym: Sie kommt mit deiner Absenderadresse an.",
    expectTitle: "Was du erwarten kannst",
    expectText:
      "Ich entwickle CED Buddy neben Arbeit und Studium und antworte, so bald ich kann. Eine feste Antwortzeit kann ich nicht zusagen. Medizinische Fragen kann ich nicht beantworten; wende dich dafür an deine Ärztin oder deinen Arzt.",
    warningTitle: "Bitte die App nicht löschen, um ein Problem zu lösen",
    warningText:
      "Wenn du die App löschst, entfernt iOS auch dein Tagebuch auf dem Gerät. Ohne aktuelle Sicherungsdatei ist es dann verloren. Schreib mir lieber zuerst.",
    faqTitle: "Häufige Fragen",
    faq: [
      {
        id: "kauf-wiederherstellen",
        q: "Wie stelle ich meinen Kauf der Arztberichte wieder her?",
        a: [
          "Öffne in der App die Freischaltung der Arztberichte, zum Beispiel über Einstellungen › Bericht für Arzttermin, und tippe auf „Käufe wiederherstellen“. Die App fragt dann den App Store für deinen Apple Account.",
          "Das stellt nur den Kauf wieder her, nicht dein Tagebuch. Erstattungen laufen über Apple.",
        ],
      },
      {
        id: "kauf-oder-tagebuch",
        q: "Käufe wiederherstellen oder Tagebuch wiederherstellen: Was ist der Unterschied?",
        a: [
          "„Käufe wiederherstellen“ fragt den App Store, ob du die Arztberichte schon freigeschaltet hast. Einträge kommen dabei nicht zurück.",
          "„Sicherung wiederherstellen“ holt dein Tagebuch aus einer Sicherungsdatei, die du selbst erstellt hast. Mit dem Kauf hat das nichts zu tun.",
        ],
      },
      {
        id: "sicherung",
        q: "Wie erstelle ich eine Sicherung?",
        a: [
          "Unter Einstellungen › Sicherung & Wiederherstellung › Sicherung erstellen. Du wählst ein Passwort mit mindestens 10 Zeichen und ob Fotos enthalten sein sollen. Danach legst du die Datei über das Teilen-Menü ab, am besten ausserhalb des iPhones, zum Beispiel in „Dateien“ in der iCloud oder auf einem Computer.",
          "Die App sichert nicht automatisch. Auf Wunsch erinnert sie dich auf „Heute“ an eine neue Sicherung.",
        ],
      },
      {
        id: "import",
        q: "Wie stelle ich eine Sicherung wieder her?",
        a: [
          "Unter Einstellungen › Sicherung & Wiederherstellung › Aus Sicherung wiederherstellen, oder auf einem neuen iPhone direkt beim Start mit „Sicherung wiederherstellen“. Wähle die Sicherungsdatei (.cedbackup) und gib ihr Passwort ein.",
          "Die App prüft die Datei zuerst und zeigt dir ihren Inhalt. Erst wenn du bestätigst, ersetzt sie alle Einträge und Fotos auf dem Gerät. Ein Zusammenführen gibt es nicht. Andere Dateien als CED-Buddy-Sicherungen kann die App nicht importieren.",
        ],
      },
      {
        id: "passwort",
        q: "Ich habe das Passwort meiner Sicherung vergessen.",
        a: [
          "Dann lässt sich diese Sicherungsdatei nicht mehr öffnen, auch nicht durch den Entwickler. Es gibt kein Zurücksetzen.",
          "Solange dein Tagebuch noch in der App ist, erstelle gleich eine neue Sicherung mit einem neuen Passwort und bewahre es getrennt von der Datei auf.",
        ],
      },
      {
        id: "geraetewechsel",
        q: "Ich wechsle auf ein neues iPhone. Was muss ich tun?",
        a: [
          "Erstelle auf dem alten iPhone eine aktuelle Sicherung und lege sie ausserhalb des Geräts ab. Verlass dich nicht auf ein iCloud- oder Computer-Backup des iPhones: Die App markiert ihre Daten dafür als „nicht sichern“.",
          "Auf dem neuen iPhone installierst du CED Buddy und wählst beim Start „Sicherung wiederherstellen“. Danach stellst du den Kauf der Arztberichte mit „Käufe wiederherstellen“ wieder her und schaltest Erinnerungen wieder ein; eine Wiederherstellung schaltet sie nicht selbst ein.",
        ],
      },
      {
        id: "erinnerungen",
        q: "Meine Erinnerungen kommen nicht.",
        a: [
          "Prüfe in der App unter Einstellungen › Erinnerungen, ob der tägliche Check-in eingeschaltet ist, und in den iPhone-Einstellungen, ob Mitteilungen für CED Buddy erlaubt sind.",
          "Hast du deinen Check-in schon gespeichert, entfällt die Erinnerung für diesen Tag. Die App plant Erinnerungen jeweils für die nächsten 30 Tage und füllt sie bei jedem Öffnen auf. Ob und wann eine Mitteilung erscheint, entscheidet zudem dein iPhone, etwa im Fokus-Modus.",
        ],
      },
      {
        id: "nicht-lesbar",
        q: "Die App meldet, dass das Tagebuch nicht lesbar ist oder ein Schlüssel fehlt.",
        a: [
          "Die App löscht in diesem Fall nichts. Wenn du eine Sicherungsdatei hast, kannst du sie wiederherstellen; das unlesbare Tagebuch bleibt dabei unverändert liegen.",
          "Lösche die App nicht und setze nichts zurück. Schreib mir, was die App anzeigt.",
        ],
      },
    ],
    privacyLink: "Datenschutzerklärung der App",
    productLink: "Zur Produktseite",
  },

  en: {
    meta: {
      title: "Support · CED Buddy",
      description:
        "Help and contact for CED Buddy: questions, bug reports, improvements and feature requests by email to apps@wullschleger.dev. With answers on purchases, backups and moving to a new device.",
    },
    eyebrow: "CED Buddy · Support",
    title: "Help and contact",
    intro:
      "Have a question, found a bug or have a wish? Send me an email. You don't need an account, and the app doesn't have to be installed.",
    addressLabel: "Email address",
    write: "Write an email",
    copy: "Copy address",
    copied: "Address copied.",
    copySelected:
      "Copying was not possible. The address is now selected: copy it with Cmd+C or Ctrl+C, or long-press it on your phone.",
    draftNote:
      "The button opens a draft in your mail app. Nothing is sent until you tap Send there yourself. If nothing opens, copy the address and write from your mail app.",
    general: { subject: "CED Buddy: Question" },
    reasonsTitle: "What is it about?",
    reasons: [
      {
        key: "bug",
        title: "Report a bug",
        text: "What happened, and what did you expect?",
        subject: "[CED Buddy][BUG] Feedback",
        body: "What happened?\n\nWhat did you expect?\n\nSteps to reproduce:\n1.\n2.\n\nApp version:\niOS version:\n",
      },
      {
        key: "improvement",
        title: "Suggest an improvement",
        text: "What is cumbersome or unclear?",
        subject: "[CED Buddy][IMPROVEMENT] Feedback",
        body: "",
      },
      {
        key: "feature",
        title: "Request a feature",
        text: "What are you missing, and how would it help?",
        subject: "[CED Buddy][FEATURE] Feedback",
        body: "",
      },
    ],
    reasonCta: "Prepare email",
    bugHelpTitle: "Helpful for bug reports",
    bugHelp: [
      "App version: in the app under Settings › About the app",
      "iOS version: in the iPhone Settings under General › About",
      "Short steps that make the bug happen again",
    ],
    inAppHint:
      "In the app you find the same under Settings › Help & feedback. There you can choose to add technical details (app version, iOS version, language and appearance) yourself; you see them before sending.",
    privacyTitle: "Please don't send anything sensitive",
    privacyText:
      "Don't attach backup files, reports, health information or unredacted screenshots unless I explicitly ask for them. Your email is not anonymous: it arrives with your sender address.",
    expectTitle: "What you can expect",
    expectText:
      "I build CED Buddy alongside work and studies and reply as soon as I can. I can't promise a fixed response time. I can't answer medical questions; please ask your doctor.",
    warningTitle: "Please don't delete the app to fix a problem",
    warningText:
      "If you delete the app, iOS also removes your journal from the device. Without a recent backup file it is lost. Write to me first instead.",
    faqTitle: "Frequently asked questions",
    faq: [
      {
        id: "restore-purchase",
        q: "How do I restore my purchase of the doctor reports?",
        a: [
          "In the app, open the unlock screen for doctor reports, for example via Settings › Report for a doctor's visit, and tap “Restore purchases”. The app then asks the App Store for your Apple Account.",
          "This only restores the purchase, not your journal. Refunds are handled by Apple.",
        ],
      },
      {
        id: "purchase-or-journal",
        q: "Restore purchases or restore the journal: what's the difference?",
        a: [
          "“Restore purchases” asks the App Store whether you have already unlocked the doctor reports. No entries come back.",
          "“Restore a backup” brings back your journal from a backup file you created yourself. It has nothing to do with the purchase.",
        ],
      },
      {
        id: "backup",
        q: "How do I create a backup?",
        a: [
          "Under Settings › Backup & restore › Create backup. You choose a password of at least 10 characters and whether photos are included. Then you store the file via the share sheet, ideally somewhere other than the iPhone, for example in Files on iCloud or on a computer.",
          "The app does not back up automatically. If you like, it reminds you on Today to make a new backup.",
        ],
      },
      {
        id: "import",
        q: "How do I restore a backup?",
        a: [
          "Under Settings › Backup & restore › Restore from backup, or on a new iPhone right at the start with “Restore a backup”. Choose the backup file (.cedbackup) and enter its password.",
          "The app checks the file first and shows you what it contains. Only when you confirm does it replace all entries and photos on the device. There is no merging. The app cannot import files other than CED Buddy backups.",
        ],
      },
      {
        id: "password",
        q: "I forgot the password of my backup.",
        a: [
          "Then this backup file can no longer be opened, not even by the developer. There is no reset.",
          "As long as your journal is still in the app, create a new backup right away with a new password, and keep it separate from the file.",
        ],
      },
      {
        id: "new-iphone",
        q: "I'm moving to a new iPhone. What do I need to do?",
        a: [
          "Create a current backup on the old iPhone and store it outside the device. Don't rely on an iCloud or computer backup of the iPhone: the app marks its data as “do not back up” for those.",
          "On the new iPhone, install CED Buddy and choose “Restore a backup” at the start. Then restore the doctor report purchase with “Restore purchases” and switch reminders on again; a restore does not switch them on by itself.",
        ],
      },
      {
        id: "reminders",
        q: "My reminders don't arrive.",
        a: [
          "In the app, check under Settings › Reminders that the daily check-in is switched on, and in the iPhone Settings that notifications are allowed for CED Buddy.",
          "If you have already saved your check-in, that day's reminder is skipped. The app schedules reminders for the next 30 days and tops them up each time you open it. Whether and when a notification appears is also up to your iPhone, for example in a Focus mode.",
        ],
      },
      {
        id: "not-readable",
        q: "The app says the journal can't be read or a key is missing.",
        a: [
          "The app deletes nothing in that case. If you have a backup file, you can restore it; the unreadable journal is left untouched.",
          "Don't delete the app and don't reset anything. Write to me with what the app shows.",
        ],
      },
    ],
    privacyLink: "Privacy policy of the app",
    productLink: "Go to the product page",
  },
};
