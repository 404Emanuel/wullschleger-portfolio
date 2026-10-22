// Privacy policy of CED Buddy and its web pages (DE/EN). DRAFT.
//
// Built from the data flows in the app repository (feat/feedback @ 5f80835:
// docs/release/privacy-facts.md, ADR 0006/0007/0016/0017, src/core/i18n) and
// the website code and hosting (Cloudflare Pages). Not a legal review.
//
// Block types: { p }, { ul: [] }, { table: { head: [], rows: [[]] } },
// { pending } (an open point; rendered as a visible note while the policy is
// a draft). The build refuses `privacyStatus: "final"` while any `pending`
// block is left (scripts/prerender.mjs).

export const privacyContent = {
  de: {
    meta: {
      title: "Datenschutz · CED Buddy",
      description:
        "Datenschutzerklärung der App CED Buddy und ihrer Webseiten: was lokal bleibt, wann Daten das Gerät verlassen, Kauf über Apple, Support-E-Mails und Website-Besuch.",
    },
    eyebrow: "CED Buddy · Datenschutz",
    title: "Datenschutzerklärung",
    updated: "Stand",
    draftTitle: "Entwurf",
    draftText:
      "Diese Datenschutzerklärung ist noch nicht abgeschlossen und noch nicht gültig. Offene Punkte sind markiert.",
    pendingLabel: "Offen",
    tocLabel: "Inhalt",
    summaryTitle: "Kurz gesagt",
    summary: [
      "Dein Tagebuch bleibt auf deinem iPhone. Es gibt kein Konto und keinen eigenen Server; der Entwickler hat keinen Zugriff auf deine Einträge.",
      "Tagebuchdaten verlassen das Gerät nur, wenn du selbst eine Sicherungsdatei oder ein Bericht-PDF teilst.",
      "Den Kauf der Arztberichte wickelt Apple ab. Die App erfährt nur, ob der Kauf gilt.",
      "Support- und Feedback-E-Mails schreibst und sendest du freiwillig über dein eigenes Mailprogramm.",
      "Die App enthält keine Werbung und keine Analyse-, Absturz- oder Tracking-Bibliothek.",
    ],
    sections: [
      {
        id: "geltung",
        title: "Worum es geht",
        blocks: [
          {
            p: "Diese Erklärung beschreibt, welche Personendaten bei der Nutzung der iPhone-App CED Buddy und beim Besuch der zugehörigen Seiten unter wullschleger.dev/apps bearbeitet werden. Für die übrigen Seiten von wullschleger.dev gilt sie nicht automatisch.",
          },
          {
            p: "CED Buddy ist ein persönliches Tagebuch für Menschen mit Morbus Crohn oder Colitis ulcerosa. Die App stellt keine Diagnosen und gibt keine Behandlungsempfehlungen.",
          },
        ],
      },
      {
        id: "verantwortlich",
        title: "Verantwortlich und Kontakt",
        blocks: [
          { p: "Emanuel Wullschleger, Privatperson, Schweiz." },
          { p: "E-Mail: apps@wullschleger.dev" },
          {
            pending:
              "Angaben zum Verantwortlichen vervollständigen (z. B. Postanschrift) und prüfen lassen, welche Angaben für Schweiz und EU nötig sind, einschliesslich einer allfälligen Vertretung in der EU.",
          },
        ],
      },
      {
        id: "app-daten",
        title: "Daten in der App",
        blocks: [
          { p: "In der App hältst du selbst fest:" },
          {
            ul: [
              "einen freiwilligen Spitznamen für die Begrüssung,",
              "dein tägliches Befinden, Beschwerden und Stuhlgänge,",
              "Notizen und Markierungen „für den Arzttermin“,",
              "Mahlzeiten mit Namen und auf Wunsch mit Foto,",
              "Einstellungen wie Sprache, Erscheinungsbild und Erinnerungszeit.",
            ],
          },
          {
            p: "Diese Angaben sind Gesundheitsdaten und damit besonders schützenswert. Die App verlangt kein Konto, keine E-Mail-Adresse und keinen echten Namen und erhebt keine Gerätekennung.",
          },
          {
            p: "Die Daten liegen nur auf deinem Gerät, in einer verschlüsselten Datenbank (SQLCipher); Fotos sind einzeln verschlüsselt (AES-256-GCM). Die Schlüssel liegen im Schlüsselbund des iPhones. Für iCloud- und Computer-Backups des Geräts markiert die App ihre Daten als „nicht sichern“.",
          },
          {
            p: "Die App lädt nichts auf einen Server des Entwicklers hoch; es gibt keinen solchen Server und keine Synchronisation. Der Entwickler kann deine Einträge deshalb weder einsehen noch wiederherstellen.",
          },
          { p: "Löschen: Mahlzeiten, Beschwerden, Stuhlgänge und Notizen löschst du einzeln in der App; Check-ins kannst du bearbeiten, den Spitznamen jederzeit entfernen. Wenn du die App löschst, entfernt iOS die App und die darin gespeicherten Einträge vom Gerät." },
        ],
      },
      {
        id: "berechtigungen",
        title: "Berechtigungen und Erinnerungen",
        blocks: [
          {
            table: {
              head: ["Berechtigung", "Wann gefragt", "Wozu"],
              rows: [
                ["Kamera", "beim ersten Foto einer Mahlzeit", "Foto aufnehmen; es wird verkleinert und verschlüsselt lokal gespeichert"],
                ["Fotos", "beim ersten Auswählen eines Fotos", "ein gewähltes Foto übernehmen"],
                ["Mitteilungen", "erst wenn du eine Erinnerung einschaltest", "lokale tägliche Erinnerung"],
              ],
            },
          },
          {
            p: "Erinnerungen sind lokale Mitteilungen des iPhones mit festen Texten, ohne Namen und ohne Gesundheitsangaben. Es gibt keine Push-Mitteilungen über einen Server.",
          },
        ],
      },
      {
        id: "sicherung",
        title: "Sicherungsdatei",
        blocks: [
          {
            p: "Eine Sicherungsdatei entsteht nur, wenn du sie selbst erstellst. Sie enthält deine Einträge und auf Wunsch die Fotos und ist mit einem Passwort verschlüsselt, das du wählst. Wohin du sie über das Teilen-Menü legst (zum Beispiel „Dateien“, AirDrop oder Mail), bestimmst du.",
          },
          {
            p: "Wer die Datei und das Passwort hat, kann dein Tagebuch lesen. Ein vergessenes Passwort lässt sich nicht zurücksetzen, auch nicht durch den Entwickler. Beim Wiederherstellen ersetzt der Inhalt der Datei alle Einträge auf dem Gerät.",
          },
        ],
      },
      {
        id: "bericht",
        title: "Bericht-PDF",
        blocks: [
          {
            p: "Ein PDF-Bericht für den Arzttermin entsteht nur auf deinen Wunsch. Er enthält die Gesundheitsangaben, die du für Zeitraum und Inhalte auswählst, ist nicht passwortgeschützt und ohne Fotos von Mahlzeiten. Den Spitznamen enthält er nur, wenn du das einschaltest.",
          },
          {
            p: "Ob und an wen du das PDF weitergibst, entscheidest du im Teilen-Dialog. Für die weitere Bearbeitung durch die Empfängerin oder den Empfänger oder durch die gewählte App ist der Entwickler nicht verantwortlich. Die App löscht ihre temporäre PDF-Datei, wenn du die Ansicht schliesst.",
          },
        ],
      },
      {
        id: "kauf",
        title: "Kauf der Arztberichte über Apple",
        blocks: [
          {
            p: "Die PDF-Berichte schaltest du mit einem einmaligen In-App-Kauf frei. Die App nutzt dafür Apples StoreKit direkt, ohne Bibliothek eines Dritten und ohne eigenen Server.",
          },
          {
            p: "Kauf, Zahlung, Apple Account, Familienfreigabe und Erstattungen wickelt Apple nach seinen eigenen Bedingungen ab. Die App sieht dabei weder Zahlungsmittel noch Account-Daten. StoreKit verbindet sich mit dem App Store, wenn die App den Preis lädt, du kaufst oder Käufe wiederherstellst und wenn das System Transaktionen abgleicht.",
          },
          {
            p: "Die App kennt nur während sie läuft, ob ein von Apple bestätigter Kauf besteht, dessen Transaktionsnummer (zum Abschliessen des Kaufs) und den Preistext. Davon speichert, protokolliert oder versendet die App nichts. Tagebuchdaten werden für den Kauf weder verwendet noch übertragen.",
          },
          { p: "Wie Apple Daten bearbeitet, beschreibt die Datenschutzrichtlinie von Apple: https://www.apple.com/legal/privacy/" },
        ],
      },
      {
        id: "email",
        title: "Support- und Feedback-E-Mails",
        blocks: [
          {
            p: "Wenn du in der App „Support kontaktieren“ oder „Feedback geben“ wählst oder auf dieser Website einen E-Mail-Link öffnest, entsteht ein Entwurf in deinem Mailprogramm. Gesendet wird nur, wenn du selbst sendest. Die Nachricht geht dann von deiner Absenderadresse über deinen Mailanbieter an apps@wullschleger.dev; sie ist nicht anonym.",
          },
          {
            p: "Die Nachricht enthält, was du schreibst, deine Absenderadresse und die üblichen technischen Angaben einer E-Mail. Beim Feedback aus der App kommen nur dann App-Version und Build, Betriebssystem mit Version, App-Sprache und Darstellung dazu, wenn du „Technische Angaben hinzufügen“ einschaltest; du siehst sie vorher. Nie dabei: Spitzname, Tagebucheinträge, Fotos, Kaufdaten, Gerätekennungen, Standort oder Protokolle.",
          },
          {
            p: "Die E-Mails nutzt der Entwickler, um deine Anfrage zu beantworten und die App zu verbessern. Bitte schicke keine Gesundheitsdaten oder Dateien mit, wenn nicht ausdrücklich danach gefragt wird.",
          },
          { pending: "E-Mail-Anbieter für apps@wullschleger.dev nennen (und wo er die Daten bearbeitet)." },
          { pending: "Aufbewahrungsdauer der Support- und Feedback-E-Mails festlegen." },
        ],
      },
      {
        id: "website",
        title: "Besuch dieser Website",
        blocks: [
          {
            p: "Die Website wird über Cloudflare Pages (Cloudflare, Inc.) ausgeliefert. Beim Aufruf überträgt dein Browser technisch nötige Angaben an Cloudflare, etwa IP-Adresse, Zeitpunkt, aufgerufene Seite und Browserangaben, damit die Seite ausgeliefert und vor Missbrauch geschützt werden kann. Cloudflare kann Daten auch ausserhalb der Schweiz bearbeiten. Mehr dazu: https://www.cloudflare.com/privacypolicy/",
          },
          {
            p: "Die Seiten laden Schriften und Bilder von wullschleger.dev selbst und binden keine Analyse-, Werbe-, Tracking- oder Social-Media-Dienste ein. Sie setzen keine Cookies und speichern nichts in deinem Browser; die Sprache steht in der Adresse (/en für Englisch).",
          },
          {
            pending:
              "Einstellungen im Cloudflare-Konto bestätigen: Web Analytics, Protokolle und Network Error Logging (Cloudflare sendet den Header „NEL“, mit dem Browser Verbindungsfehler an Cloudflare melden können).",
          },
        ],
      },
      {
        id: "rechte",
        title: "Deine Rechte",
        blocks: [
          {
            p: "Nach dem Schweizer Datenschutzgesetz kannst du Auskunft über deine Personendaten verlangen und die Berichtigung, Löschung oder Herausgabe deiner Daten verlangen. Schreib dafür an apps@wullschleger.dev. Beim Eidgenössischen Datenschutz- und Öffentlichkeitsbeauftragten (EDÖB) kannst du eine Anzeige einreichen: https://www.edoeb.admin.ch/",
          },
          {
            p: "Deine Tagebucheinträge liegen nur auf deinem Gerät. Du verwaltest und löschst sie selbst in der App; der Entwickler kann darüber keine Auskunft geben, weil er sie nicht hat.",
          },
          {
            pending:
              "Prüfen lassen, ob und in welchem Umfang die DSGVO anwendbar ist; dann Rechtsgrundlagen, weitere Rechte und die zuständigen Aufsichtsbehörden ergänzen.",
          },
        ],
      },
      {
        id: "aenderungen",
        title: "Änderungen",
        blocks: [
          {
            p: "Ändert sich die App oder diese Website so, dass andere Daten bearbeitet werden, wird diese Erklärung angepasst. Es gilt die Fassung mit dem neuesten Datum.",
          },
        ],
      },
    ],
  },

  en: {
    meta: {
      title: "Privacy · CED Buddy",
      description:
        "Privacy policy of the CED Buddy app and its web pages: what stays on the device, when data leaves it, purchases through Apple, support emails and visits to the website.",
    },
    eyebrow: "CED Buddy · Privacy",
    title: "Privacy policy",
    updated: "Last updated",
    draftTitle: "Draft",
    draftText: "This privacy policy is not finished and not yet in effect. Open points are marked.",
    pendingLabel: "Open",
    tocLabel: "Contents",
    summaryTitle: "In short",
    summary: [
      "Your journal stays on your iPhone. There is no account and no server of our own; the developer has no access to your entries.",
      "Journal data only leaves the device when you share a backup file or a report PDF yourself.",
      "Apple handles the purchase of the doctor reports. The app only learns whether the purchase is valid.",
      "You write and send support and feedback emails voluntarily, from your own mail app.",
      "The app contains no advertising and no analytics, crash reporting or tracking library.",
    ],
    sections: [
      {
        id: "scope",
        title: "What this covers",
        blocks: [
          {
            p: "This policy describes which personal data is processed when you use the iPhone app CED Buddy and when you visit its pages under wullschleger.dev/apps. It does not automatically apply to the other pages of wullschleger.dev.",
          },
          {
            p: "CED Buddy is a personal journal for people with Crohn's disease or ulcerative colitis. The app makes no diagnoses and gives no treatment recommendations.",
          },
        ],
      },
      {
        id: "controller",
        title: "Controller and contact",
        blocks: [
          { p: "Emanuel Wullschleger, private individual, Switzerland." },
          { p: "Email: apps@wullschleger.dev" },
          {
            pending:
              "Complete the controller details (e.g. postal address) and have it checked which details Switzerland and the EU require, including a possible EU representative.",
          },
        ],
      },
      {
        id: "app-data",
        title: "Data in the app",
        blocks: [
          { p: "In the app you record yourself:" },
          {
            ul: [
              "an optional nickname for the greeting,",
              "your daily wellbeing, symptoms and bowel movements,",
              "notes and marks “for the doctor's visit”,",
              "meals with a name and, if you like, a photo,",
              "settings such as language, appearance and reminder time.",
            ],
          },
          {
            p: "This information is health data and therefore particularly sensitive. The app asks for no account, no email address and no real name, and collects no device identifier.",
          },
          {
            p: "The data is stored only on your device, in an encrypted database (SQLCipher); photos are encrypted individually (AES-256-GCM). The keys are kept in the iPhone keychain. The app marks its data as “do not back up” for iCloud and computer backups of the device.",
          },
          {
            p: "The app uploads nothing to a server of the developer; there is no such server and no sync. The developer therefore can neither see nor recover your entries.",
          },
          { p: "Deleting: you delete meals, symptoms, bowel movements and notes one by one in the app; you can edit check-ins and remove the nickname at any time. If you delete the app, iOS removes the app and the entries stored in it from the device." },
        ],
      },
      {
        id: "permissions",
        title: "Permissions and reminders",
        blocks: [
          {
            table: {
              head: ["Permission", "When asked", "What for"],
              rows: [
                ["Camera", "when you take the first meal photo", "take a photo; it is resized and stored locally, encrypted"],
                ["Photos", "when you pick a photo for the first time", "use a photo you choose"],
                ["Notifications", "only when you switch a reminder on", "local daily reminder"],
              ],
            },
          },
          {
            p: "Reminders are local iPhone notifications with fixed texts, without names or health information. There are no push notifications through a server.",
          },
        ],
      },
      {
        id: "backup",
        title: "Backup file",
        blocks: [
          {
            p: "A backup file is only created when you create it. It contains your entries and, if you choose, the photos, and is encrypted with a password you choose. Where you put it via the share sheet (for example Files, AirDrop or Mail) is up to you.",
          },
          {
            p: "Anyone with the file and the password can read your journal. A forgotten password cannot be reset, not even by the developer. Restoring replaces all entries on the device with the content of the file.",
          },
        ],
      },
      {
        id: "report",
        title: "Report PDF",
        blocks: [
          {
            p: "A PDF report for a doctor's visit is only created at your request. It contains the health information you select for the period and contents, is not password-protected and contains no meal photos. It only includes your nickname if you switch that on.",
          },
          {
            p: "Whether and with whom you share the PDF is your decision, in the share sheet. The developer is not responsible for further processing by recipients or by the app you choose. The app deletes its temporary PDF file when you close the view.",
          },
        ],
      },
      {
        id: "purchase",
        title: "Purchasing doctor reports through Apple",
        blocks: [
          {
            p: "You unlock the PDF reports with a one-time in-app purchase. The app uses Apple's StoreKit directly, without a third-party library and without a server of its own.",
          },
          {
            p: "Apple handles the purchase, payment, Apple Account, Family Sharing and refunds under its own terms. The app sees neither payment methods nor account data. StoreKit connects to the App Store when the app loads the price, when you buy or restore purchases, and when the system syncs transactions.",
          },
          {
            p: "Only while it runs does the app know whether a purchase confirmed by Apple exists, its transaction number (to complete the purchase) and the price text. The app stores, logs or sends none of this. Journal data is neither used nor transferred for the purchase.",
          },
          { p: "How Apple processes data is described in Apple's privacy policy: https://www.apple.com/legal/privacy/" },
        ],
      },
      {
        id: "email",
        title: "Support and feedback emails",
        blocks: [
          {
            p: "When you choose “Contact support” or “Give feedback” in the app, or open an email link on this website, a draft opens in your mail app. It is only sent if you send it. The message then goes from your sender address through your mail provider to apps@wullschleger.dev; it is not anonymous.",
          },
          {
            p: "The message contains what you write, your sender address and the usual technical information of an email. Feedback from the app only includes app version and build, operating system and version, app language and appearance if you switch on “Add technical details”; you see them beforehand. Never included: nickname, journal entries, photos, purchase data, device identifiers, location or logs.",
          },
          {
            p: "The developer uses these emails to answer your request and to improve the app. Please don't send health data or files unless explicitly asked.",
          },
          { pending: "Name the email provider for apps@wullschleger.dev (and where it processes data)." },
          { pending: "Decide how long support and feedback emails are kept." },
        ],
      },
      {
        id: "website",
        title: "Visiting this website",
        blocks: [
          {
            p: "The website is delivered through Cloudflare Pages (Cloudflare, Inc.). When you open it, your browser sends technically necessary information to Cloudflare, such as IP address, time, requested page and browser details, so the page can be delivered and protected against abuse. Cloudflare may process data outside Switzerland. More: https://www.cloudflare.com/privacypolicy/",
          },
          {
            p: "The pages load fonts and images from wullschleger.dev itself and embed no analytics, advertising, tracking or social media services. They set no cookies and store nothing in your browser; the language is part of the address (/en for English).",
          },
          {
            pending:
              "Confirm the settings in the Cloudflare account: Web Analytics, logs and Network Error Logging (Cloudflare sends the “NEL” header, which lets browsers report connection errors to Cloudflare).",
          },
        ],
      },
      {
        id: "rights",
        title: "Your rights",
        blocks: [
          {
            p: "Under the Swiss Federal Act on Data Protection you can request information about your personal data and ask for it to be corrected, deleted or handed over. Write to apps@wullschleger.dev. You can file a report with the Federal Data Protection and Information Commissioner (FDPIC): https://www.edoeb.admin.ch/en",
          },
          {
            p: "Your journal entries are only on your device. You manage and delete them yourself in the app; the developer cannot provide information about them because he does not have them.",
          },
          {
            pending:
              "Have it checked whether and to what extent the GDPR applies; then add legal bases, further rights and the competent supervisory authorities.",
          },
        ],
      },
      {
        id: "changes",
        title: "Changes",
        blocks: [
          {
            p: "If the app or this website changes in a way that other data is processed, this policy will be updated. The version with the latest date applies.",
          },
        ],
      },
    ],
  },
};

export function countPending(content) {
  return content.sections.reduce(
    (sum, section) => sum + section.blocks.filter((block) => block.pending).length,
    0
  );
}
