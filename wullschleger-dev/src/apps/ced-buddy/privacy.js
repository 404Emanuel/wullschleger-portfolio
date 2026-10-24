// Privacy policy of CED Buddy and of the website wullschleger.dev (DE/EN).
//
// Built from the data flows in the app repository (main @ 1c93127:
// docs/release/privacy-facts.md, ADR 0006/0007/0016/0017, src/core/i18n),
// the website code, the live responses of wullschleger.dev and the provider
// documents listed in docs/apps/privacy-operations.md. Not a legal review.
//
// Block types: { p }, { h3, id? }, { address: [] }, { ul: [] }, { table: { head: [], rows: [[]] } },
// { pending } (an open point; rendered as a visible note while the policy is
// a draft). The build refuses `privacyStatus: "final"` while any `pending`
// block is left (scripts/prerender.mjs). Open points and how to close them:
// docs/apps/privacy-operations.md, section "Offene Punkte".

export const privacyContent = {
  de: {
    meta: {
      title: "Datenschutz · CED Buddy und wullschleger.dev",
      description:
        "Datenschutzerklärung der App CED Buddy und der Website wullschleger.dev: was in der App lokal bleibt, wie Support-E-Mails bearbeitet werden und was beim Besuch der Website über Cloudflare geschieht.",
    },
    eyebrow: "CED Buddy · wullschleger.dev",
    title: "Datenschutzerklärung",
    updated: "Stand",
    draftTitle: "Entwurf",
    draftText:
      "Diese Datenschutzerklärung ist noch nicht abgeschlossen und noch nicht gültig. Die verbleibenden offenen Punkte sind markiert.",
    pendingLabel: "Offen",
    tocLabel: "Inhalt",
    summaryTitle: "Kurz gesagt",
    summary: [
      "Dein Tagebuch bleibt auf deinem iPhone. Es gibt kein Konto und keinen eigenen Server; ich habe keinen Zugriff auf deine Einträge.",
      "Tagebuchdaten verlassen das Gerät nur, wenn du selbst eine Sicherungsdatei oder ein Bericht-PDF teilst.",
      "Den Kauf der Arztberichte wickelt Apple ab. Die App erfährt nur, ob der Kauf gilt.",
      "E-Mails für Support, Feedback und Kontakt sendest du freiwillig aus deinem eigenen Mailprogramm. Ich lösche erledigte Anfragen spätestens sechs Monate nach Abschluss, unnötig mitgeschickte Gesundheitsangaben möglichst rasch.",
      "Die App enthält keine Werbung und keine Analyse-, Absturz- oder Tracking-Bibliothek.",
      "Die Website wird über Cloudflare ausgeliefert. Nur wenn du zustimmst, misst Cloudflare Web Analytics Seitenaufrufe, Herkunftsseiten und Ladezeiten, ohne Cookies. Deine Wahl änderst du jederzeit unter „Datenschutzeinstellungen“ unten auf jeder Seite.",
    ],
    sections: [
      {
        id: "geltung",
        title: "Worum es geht",
        blocks: [
          { p: "Diese Erklärung hat drei getrennte Teile:" },
          {
            ul: [
              "die Nutzung der iPhone-App CED Buddy (Abschnitte 3 bis 7),",
              "E-Mails an apps@wullschleger.dev: Support, Feedback und Kontaktanfragen über die Website (Abschnitt 8),",
              "den Besuch der Website wullschleger.dev, also der Startseite, der App-Seiten und aller übrigen Seiten unter dieser Adresse (Abschnitt 9).",
            ],
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
          { p: "Verantwortlich für App und Website ist:" },
          { address: ["Emanuel Wullschleger", "Winkelstrasse 21", "4665 Oftringen", "Schweiz"] },
          {
            p: "E-Mail für Support und alle Fragen zum Datenschutz: apps@wullschleger.dev",
          },
          {
            p: "Ich betreibe App und Website als Privatperson. In dieser Erklärung bedeutet „ich“ diese verantwortliche Person.",
          },
          {
            pending:
              "Noch nicht entschieden ist, ob für Nutzende in der EU eine Vertretung nach Art. 27 DSGVO bestellt wird oder ob die Ausnahme nach Art. 27 Abs. 2 greift. Bis das schriftlich geklärt ist, nennt diese Erklärung weder eine Vertretung noch eine Ausnahme.",
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
              "Mahlzeiten mit Namen und auf Wunsch mit Foto, dazu gespeicherte Mahlzeiten zum Wiederverwenden,",
              "Einstellungen wie Sprache, Erscheinungsbild und Erinnerungszeit.",
            ],
          },
          {
            p: "Diese Angaben sind Gesundheitsdaten und damit besonders schützenswert. Die App verlangt kein Konto, keine E-Mail-Adresse und keinen echten Namen und erhebt keine Gerätekennung.",
          },
          {
            p: "Die Daten liegen nur auf deinem Gerät, in einer verschlüsselten Datenbank (SQLCipher); Fotos sind einzeln verschlüsselt (AES-256-GCM). Die Schlüssel liegen im Schlüsselbund des iPhones, sind an dieses Gerät gebunden und gehen nicht auf ein anderes Gerät über. Für iCloud- und Computer-Backups des Geräts markiert die App ihre Daten als „nicht sichern“.",
          },
          {
            p: "Ausnahme beim Erfassen eines Fotos: Solange du eine Mahlzeit mit einem neuen Foto bearbeitest, liegt eine verkleinerte Fassung unverschlüsselt im Zwischenspeicher der App. Die App löscht sie beim Speichern oder Verwerfen, spätestens beim nächsten Start.",
          },
          {
            p: "Die App lädt nichts auf einen Server von mir hoch; es gibt keinen solchen Server und keine Synchronisation. Ich kann deine Einträge deshalb weder einsehen noch wiederherstellen.",
          },
          {
            p: "Löschen: Mahlzeiten, Beschwerden, Stuhlgänge und Notizen löschst du einzeln in der App; Check-ins kannst du bearbeiten, den Spitznamen jederzeit entfernen. Wenn du die App löschst, entfernt iOS die App mit ihren gespeicherten Einträgen vom Gerät. Ob Speicherbereiche dabei physisch überschrieben werden, bestimmt iOS.",
          },
          { h3: "Links zur Website" },
          {
            p: "Unter Einstellungen öffnen „Hilfeseite im Web“ und „Datenschutzerklärung“ diese Website erst, wenn du darauf tippst, und zwar im Standardbrowser deines iPhones ausserhalb der App. Die Adresse enthält nur die Seite und die Sprache, nichts aus deinem Tagebuch und nichts zu deinem Kauf. Für den Besuch gilt dann Abschnitt 9.",
          },
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
            p: "Eine Sicherungsdatei entsteht nur, wenn du sie selbst erstellst. Sie enthält deine Einträge und auf Wunsch die Fotos und ist mit einem Passwort verschlüsselt, das du wählst. Wohin du sie über das Teilen-Menü legst (zum Beispiel „Dateien“, AirDrop oder Mail), bestimmst du. Die Kopie, die die App dafür kurz anlegt, ist ebenfalls verschlüsselt und wird danach gelöscht.",
          },
          {
            p: "Wer die Datei und das Passwort hat, kann dein Tagebuch lesen. Ein vergessenes Passwort lässt sich nicht zurücksetzen, auch nicht durch mich.",
          },
          {
            p: "Beim Wiederherstellen öffnet die App die gewählte Datei mit deinem Passwort, prüft sie und zeigt dir ihren Inhalt. Erst wenn du bestätigst, ersetzt der Inhalt der Datei alle Einträge auf dem Gerät. Die App importiert nur CED-Buddy-Sicherungen.",
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
            p: "Ob und an wen du das PDF weitergibst, entscheidest du im Teilen-Dialog. Nach der Weitergabe ist das PDF unverschlüsselt lesbar; für die weitere Bearbeitung durch Empfängerinnen und Empfänger oder durch die gewählte App bin ich nicht verantwortlich. Die App löscht ihre eigene temporäre PDF-Datei, wenn du die Ansicht schliesst, spätestens beim nächsten Start.",
          },
        ],
      },
      {
        id: "kauf",
        title: "Kauf der Arztberichte über Apple",
        blocks: [
          {
            p: "Die PDF-Berichte schaltest du mit einem einmaligen In-App-Kauf frei; es gibt kein Abo. Die App nutzt dafür Apples StoreKit direkt, ohne Bibliothek eines Dritten und ohne eigenen Server.",
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
        title: "E-Mails an apps@wullschleger.dev",
        blocks: [
          {
            p: "Wenn du in der App unter Einstellungen › Hilfe & Feedback „Hilfe & Kontakt“ oder „Feedback geben“ nutzt oder auf dieser Website einen E-Mail-Link öffnest (Support-Seite oder Kontaktbereich der Startseite), entsteht ein Entwurf in deinem Mailprogramm. Gesendet wird nur, wenn du selbst sendest. Die Nachricht geht dann von deiner Absenderadresse über deinen Mailanbieter an apps@wullschleger.dev. Wegen der Absenderadresse ist sie nicht anonym.",
          },
          {
            p: "Ich erhalte, was du schreibst und anhängst, deine Absenderadresse und den Namen, den dein Mailprogramm mitschickt, sowie die üblichen technischen Angaben einer E-Mail wie Zeitpunkt und beteiligte Mailserver. Was die App selbst vorbereitet, siehst du vor dem Senden:",
          },
          {
            ul: [
              "Eine E-Mail aus „Hilfe & Kontakt“ hat als Betreff den Namen und die Version der App, zum Beispiel „CED Buddy 1.0.0: Hilfe“. Sonst füllt die App nichts aus.",
              "Beim Feedback steht im Betreff die Art der Rückmeldung (zum Beispiel „[CED Buddy][BUG] Feedback“), im Text die Kategorie und was du geschrieben hast. App-Version und Build, Betriebssystem mit Version, App-Sprache und Darstellung kommen nur dazu, wenn du „Technische Angaben hinzufügen“ einschaltest.",
            ],
          },
          {
            p: "Die App fügt Spitzname, Tagebucheinträge, Fotos, Gesundheitsangaben, Kaufdaten, Gerätekennungen und Standort nicht automatisch hinzu. Was du selbst in die Nachricht schreibst oder anhängst, erreicht mich aber. Bitte verzichte auf persönliche Gesundheitsangaben, Befunde, Arztberichte, Sicherungsdateien und Bericht-PDFs. Für den Support brauche ich sie nicht und frage nicht danach.",
          },
          {
            p: "Ich verwende die Nachrichten, um dir zu antworten, Fehler zu beheben, sachliche Verbesserungsvorschläge auszuwerten und allgemeine Anfragen zu beantworten. Ich bearbeite den Support selbst, leite die Nachrichten nicht automatisch an andere Postfächer weiter und nutze die Kontaktdaten weder für einen Newsletter noch für Werbung.",
          },
          { h3: "Wenn trotzdem Gesundheitsangaben ankommen" },
          {
            p: "Gesundheitsangaben, Befunde, Arztberichte, Sicherungsdateien oder Berichte, die für deine Anfrage nicht nötig sind, verwende ich für nichts anderes: nicht für die Weiterentwicklung der App, nicht in Notizen oder Tickets und nicht in KI-Werkzeugen. Ich zitiere sie nicht in meiner Antwort. Sobald ich sie bemerke, beantworte ich die Anfrage ohne diese Angaben und lösche die Nachricht mit ihren Anhängen möglichst rasch, auch aus dem Papierkorb und aus eigenen Kopien. Ich bewahre sie nicht bis zur Frist von sechs Monaten auf. Brauche ich für einen Fehler weitere Angaben, bitte ich dich um eine neue Beschreibung mit erfundenen Daten.",
          },
          { h3: "Mailanbieter" },
          {
            p: "Das Postfach apps@wullschleger.dev liegt bei Infomaniak Network SA, Genf, Schweiz. Infomaniak bearbeitet die Nachrichten in meinem Auftrag. Laut den Bedingungen für den Mail-Service von Infomaniak (Fassung vom 27. Mai 2026) werden die Daten ausschliesslich in Rechenzentren in der Schweiz gespeichert, die Infomaniak gehören. Infomaniak sichert den Inhalt der Postfächer täglich und bewahrt diese Sicherungen sieben Tage auf.",
          },
          { h3: "Wie lange ich Nachrichten aufbewahre" },
          {
            ul: [
              "Solange eine Anfrage offen ist, bewahre ich die Nachrichten auf, die ich für die Bearbeitung brauche.",
              "Erledigte Anfragen (Support, Feedback und Kontakt) lösche ich, sobald ich sie nicht mehr brauche, spätestens sechs Monate nach Abschluss. Das gilt für deine Nachrichten und für meine Antworten. Für unnötig mitgeschickte Gesundheitsangaben gilt die kürzere Regel oben.",
              "Einzelne Nachrichten bewahre ich nur dann länger auf, wenn eine gesetzliche Aufbewahrungspflicht besteht oder ich sie für einen konkreten Rechtsanspruch brauche, und nur so lange wie dafür nötig.",
              "Sachliche Fehlerbeschreibungen und Ideen kann ich ohne Personenbezug, also ohne Namen, Adressen und Gesundheitsangaben, in eigenen Worten getrennt für die Weiterentwicklung der App behalten.",
            ],
          },
          {
            p: "Ich prüfe das Postfach dafür regelmässig von Hand; eine automatische Löschung ist nicht eingerichtet. Nach dem Löschen können Nachrichten noch bis zu sieben Tage in den technischen Sicherungen von Infomaniak enthalten sein.",
          },
        ],
      },
      {
        id: "website",
        title: "Besuch der Website",
        blocks: [
          {
            p: "Dieser Abschnitt gilt für alle Seiten unter wullschleger.dev. Die Website ist eine statische Website: Sie hat kein Kontaktformular, kein Konto und keine Kommentarfunktion.",
          },
          { h3: "Auslieferung und Sicherheit durch Cloudflare" },
          {
            p: "Die Website liegt bei Cloudflare Pages und wird über das Netzwerk von Cloudflare ausgeliefert (Cloudflare, Inc., USA). Bei jedem Aufruf erhält Cloudflare die technisch nötigen Angaben: IP-Adresse, Zeitpunkt, aufgerufene Adresse, Herkunftsseite (Referrer), Browser- und Systemangaben sowie weitere Verbindungsdaten. Cloudflare braucht sie, um die Seiten auszuliefern, Angriffe und Missbrauch abzuwehren und Störungen zu erkennen. Daraus erstellt Cloudflare zusammengefasste Statistiken, etwa Anzahl Anfragen, Länder und Statuscodes, die ich im Cloudflare-Konto sehe.",
          },
          {
            p: "Wie lange Cloudflare diese Verbindungsdaten aufbewahrt, legt Cloudflare fest; eine feste Frist nennt Cloudflare dafür nicht. Mehr dazu: https://www.cloudflare.com/privacypolicy/",
          },
          {
            p: "Die Seiten selbst setzen keine Cookies. Die Sprache steht in der Adresse (/en für Englisch). Damit die Website deine Wahl zur Statistik beachtet, speichert sie im lokalen Speicher deines Browsers (localStorage) einen Eintrag „wd-privacy-choice“: deine Wahl (erlaubt oder abgelehnt), eine Versionsnummer und das Datum der Wahl. Der Eintrag bleibt auf deinem Gerät und wird weder an mich noch an Cloudflare gesendet. Nach sechs Monaten fragt die Website neu; löschen kannst du den Eintrag jederzeit in den Einstellungen deines Browsers. Hält Cloudflare eine Anfrage für automatisiert, kann Cloudflare eine Sicherheitsprüfung zeigen und dafür ein Sicherheits-Cookie setzen (zum Beispiel „cf_clearance“). Solche Cookies dienen dem Schutz der Website, nicht der Analyse.",
          },
          { h3: "Cloudflare Web Analytics, nur mit deiner Zustimmung", id: "web-analytics" },
          {
            p: "Mit deiner Zustimmung nutze ich Cloudflare Web Analytics, um zu sehen, wie oft die Seiten aufgerufen werden, über welche Seiten Besucherinnen und Besucher kommen und wie schnell die Seiten laden. Die Website fragt dich danach, mit den gleichwertigen Knöpfen „Statistik erlauben“ und „Ohne Statistik fortfahren“. Solange du nicht zustimmst, lädt die Website das Skript nicht und baut keine Verbindung zu Cloudflare Web Analytics auf; alle Inhalte bleiben gleich nutzbar. Ohne JavaScript erscheint die Frage nicht, und es wird nichts gemessen.",
          },
          {
            p: "Nach deiner Zustimmung lädt dein Browser auf jeder Seite ein Skript von Cloudflare (static.cloudflareinsights.com). Es liest Leistungswerte aus deinem Browser aus und sendet Messwerte an Cloudflare (cloudflareinsights.com): die aufgerufene Seite, die Herkunftsseite, Lade- und Leistungswerte und eine zufällige Kennung für diesen einen Seitenaufruf. Aus der Anfrage leitet Cloudflare Land, Gerätetyp, Browser und Betriebssystem ab. Im Konto sehe ich nur zusammengefasste Zahlen, keine einzelnen Personen.",
          },
          {
            p: "Nach Angaben von Cloudflare verwendet Web Analytics keine Cookies und keinen lokalen Speicher im Browser, erstellt keine Fingerabdrücke aus IP-Adresse oder Browserangaben, speichert keine Abfrageparameter von Adressen und verwirft die IP-Adresse im nächsten Rechenzentrum. Die Messung dient nicht der Werbung und keinem Profil über dich.",
          },
          {
            p: "Aufbewahrung nach Angaben von Cloudflare: Die vollständigen Messdaten bleiben sieben Tage erhalten. Danach behält Cloudflare eine Stichprobe von rund 10 % für längerfristige Auswertungen; im Konto sind Daten der letzten sechs Monate abrufbar. Eine Frist, nach der alle Messdaten gelöscht sind, nennt Cloudflare nicht.",
          },
          {
            p: "Deine Zustimmung ist freiwillig. Du kannst sie jederzeit mit Wirkung für die Zukunft widerrufen: unten auf jeder Seite unter „Datenschutzeinstellungen“ mit „Ohne Statistik fortfahren“. War das Skript geladen, lädt die Website die Seite danach neu, damit es nicht weiter misst. Messwerte, die bis dahin gesendet wurden, werden dadurch nicht gelöscht; für sie gilt die Aufbewahrung bei Cloudflare.",
          },
          {
            pending:
              "Die Einbindung über die Zustimmung ist vorbereitet, aber noch nicht in Betrieb. Offen sind: im Cloudflare-Konto die automatische Einbindung von Web Analytics ausschalten (Pages-Projekt und Zone), damit Cloudflare das Skript nicht selbst einfügt, den Token der Website eintragen und auf der veröffentlichten Website prüfen, dass ohne Zustimmung keine Anfrage an Cloudflare Web Analytics entsteht und die E-Mail-Adressen unverändert ausgeliefert werden.",
          },
          { h3: "Fehlerberichte (Network Error Logging)" },
          {
            p: "Cloudflare sendet mit jeder Seite die Anweisungen „NEL“ und „Report-To“. Damit kann dein Browser Cloudflare melden, wenn eine Verbindung zu wullschleger.dev scheitert, zum Beispiel wegen eines DNS- oder Verbindungsfehlers. Erfolgreiche Aufrufe meldet er nicht. Ein solcher Bericht enthält unter anderem die betroffene Adresse, Herkunftsseite, Fehlerart, Dauer, Protokoll und die IP-Adresse des Servers. Nach Angaben von Cloudflare nutzt Cloudflare die IP-Adresse deines Browsers dabei nur kurz, um Land und Netzanbieter abzuleiten, und speichert sie nicht. Dein Browser befolgt die Anweisung bis zu sieben Tage lang; das ist keine Aufbewahrungsfrist bei Cloudflare.",
          },
          { h3: "Links und Downloads" },
          {
            p: "Schriften, Bilder und der Lebenslauf als PDF kommen von wullschleger.dev selbst. Links zu GitHub, LinkedIn, g.dev, Apple oder Behörden öffnen diese Seiten erst, wenn du sie anklickst; dort gilt der Datenschutz des jeweiligen Anbieters. „Adresse kopieren“ legt die Adresse nur in die Zwischenablage deines Geräts. Die Adressen der Website enthalten keine Tagebuchinhalte, E-Mail-Adressen oder Kaufdaten.",
          },
        ],
      },
      {
        id: "rechtsgrundlagen",
        title: "Zwecke und Rechtsgrundlagen",
        blocks: [
          {
            p: "Ich bearbeite Personendaten nach dem Schweizer Datenschutzgesetz (DSG) und nur für die in dieser Erklärung genannten Zwecke. Eine Einwilligung frage ich nur für die freiwillige Statistik der Website ab. Weder die Nutzung der App noch der Besuch der Website noch das Senden einer E-Mail gilt als Einwilligung. Ich treffe keine automatisierten Einzelentscheidungen und erstelle keine Profile über dich.",
          },
          {
            p: "Deine Tagebuchdaten bearbeite ich nicht. Sie liegen nur auf deinem Gerät und erreichen mich nur, wenn du sie mir selbst schickst.",
          },
          {
            p: "Die Statistik der Website läuft auch für Besuche aus der Schweiz nur mit deiner Zustimmung. Über die Bearbeitung auf deinem Gerät und wie du sie ablehnst, informiert Abschnitt 9 (Art. 45c Fernmeldegesetz).",
          },
          {
            p: "Soweit die Datenschutz-Grundverordnung der EU (DSGVO) auf eine Bearbeitung anwendbar ist, etwa wenn du in der EU lebst und mir schreibst, stütze ich mich auf diese Rechtsgrundlagen:",
          },
          {
            table: {
              head: ["Zweck", "Daten", "Rechtsgrundlage nach DSGVO"],
              rows: [
                [
                  "Anfragen beantworten (Support, Feedback, Kontakt), Fehler beheben, Vorschläge auswerten",
                  "Inhalt der E-Mail, Absenderadresse, Mail-Metadaten, freiwillige technische Angaben",
                  "Art. 6 Abs. 1 lit. b, soweit es um die Nutzung oder den Kauf der App geht; sonst Art. 6 Abs. 1 lit. f (Interesse, Anfragen zu beantworten und die App zu verbessern)",
                ],
                [
                  "Einzelne Nachrichten länger aufbewahren",
                  "betroffene Nachrichten",
                  "Art. 6 Abs. 1 lit. c (gesetzliche Pflicht) oder lit. f (konkreter Rechtsanspruch)",
                ],
                [
                  "Website ausliefern und schützen",
                  "Verbindungsdaten bei Cloudflare",
                  "Art. 6 Abs. 1 lit. f (sichere und funktionierende Website)",
                ],
                [
                  "Reichweite und Ladequalität messen",
                  "Messwerte von Web Analytics",
                  "Art. 6 Abs. 1 lit. a (deine Einwilligung); jederzeit widerrufbar unter „Datenschutzeinstellungen“",
                ],
                [
                  "Deine Wahl zur Statistik beachten",
                  "Eintrag im Browser (nur auf deinem Gerät)",
                  "Art. 6 Abs. 1 lit. f (Interesse, deine Wahl einzuhalten, ohne bei jedem Aufruf neu zu fragen)",
                ],
                [
                  "Verbindungsfehler erkennen",
                  "Fehlerberichte (NEL)",
                  "Art. 6 Abs. 1 lit. f (erreichbare Website)",
                ],
              ],
            },
          },
          {
            p: "Gesundheitsangaben, die du ungefragt in eine E-Mail schreibst, bearbeite ich nicht für eigene Zwecke weiter. Ich stütze mich dafür weder auf eine Einwilligung noch auf eine andere Ausnahme nach Art. 9 DSGVO, sondern beende die Bearbeitung, indem ich sie wie in Abschnitt 8 beschrieben lösche.",
          },
        ],
      },
      {
        id: "empfaenger",
        title: "Empfänger und Bearbeitung im Ausland",
        blocks: [
          {
            table: {
              head: ["Empfänger", "Wofür", "Wo"],
              rows: [
                [
                  "Infomaniak Network SA, Genf",
                  "Postfach apps@wullschleger.dev (Support, Feedback, Kontakt), in meinem Auftrag",
                  "Schweiz (nach Angaben von Infomaniak ausschliesslich eigene Rechenzentren in der Schweiz)",
                ],
                [
                  "Cloudflare, Inc., San Francisco, und mit Cloudflare verbundene Gesellschaften",
                  "Auslieferung und Schutz der Website, Fehlerberichte; Web Analytics nur mit deiner Einwilligung",
                  "Weltweites Netz von Rechenzentren; eine Anfrage wird meist im nächstgelegenen bearbeitet, das auch ausserhalb der Schweiz und der EU liegen kann. Gespeichert wird nach Angaben von Cloudflare vor allem in den USA und im EWR.",
                ],
                [
                  "Apple",
                  "Kauf der Arztberichte, nach Apples eigenen Bedingungen und in eigener Verantwortung",
                  "siehe Datenschutzrichtlinie von Apple",
                ],
              ],
            },
          },
          {
            p: "Für Übermittlungen in die USA gibt Cloudflare an, nach dem Swiss-U.S. und dem EU-U.S. Data Privacy Framework zertifiziert zu sein und ergänzend Standardvertragsklauseln zu verwenden. Der Bundesrat anerkennt seit dem 15. September 2024 ein angemessenes Datenschutzniveau für US-Unternehmen, die nach dem Swiss-U.S. Data Privacy Framework zertifiziert sind. Cloudflare beschreibt seine Rolle so: Für Inhalte, die über seine Dienste laufen, und für Kundenprotokolle bearbeitet Cloudflare Daten im Auftrag seiner Kunden; für bestimmte weitere Daten ist Cloudflare selbst verantwortlich.",
          },
          {
            p: "Ich verkaufe keine Personendaten und gebe sie nicht für Werbung weiter. Andere Empfänger gibt es nicht, ausser ich wäre gesetzlich zur Herausgabe verpflichtet.",
          },
        ],
      },
      {
        id: "rechte",
        title: "Deine Rechte",
        blocks: [
          {
            p: "Nach dem DSG kannst du Auskunft über deine Personendaten verlangen, die Herausgabe oder Übertragung deiner Daten, die Berichtigung unrichtiger Daten und die Löschung. Du kannst einer Bearbeitung auch widersprechen. Beim Eidgenössischen Datenschutz- und Öffentlichkeitsbeauftragten (EDÖB) kannst du eine Anzeige einreichen: https://www.edoeb.admin.ch/",
          },
          {
            p: "Soweit die DSGVO anwendbar ist, hast du ausserdem das Recht auf Einschränkung der Bearbeitung und auf Datenübertragbarkeit sowie das Recht, einer Bearbeitung aus berechtigtem Interesse jederzeit zu widersprechen. Du kannst dich bei einer Datenschutz-Aufsichtsbehörde beschweren, insbesondere in dem Land, in dem du lebst oder arbeitest.",
          },
          {
            p: "Deine Einwilligung zur Statistik kannst du jederzeit widerrufen, unten auf jeder Seite unter „Datenschutzeinstellungen“. Der Widerruf wirkt für die Zukunft; was bis dahin auf Grundlage der Einwilligung geschah, bleibt rechtmässig.",
          },
          {
            p: "Für alle diese Anliegen, auch wenn du die Löschung deiner E-Mails verlangen willst, schreib an apps@wullschleger.dev. Wenn ich nicht sicher bin, dass die Anfrage von dir kommt, kann ich um eine Bestätigung bitten, zum Beispiel eine Antwort von der Adresse, von der du geschrieben hast.",
          },
          {
            p: "Deine Tagebucheinträge liegen nur auf deinem Gerät. Du verwaltest und löschst sie selbst in der App; Auskunft darüber kann ich nicht geben, weil ich sie nicht habe.",
          },
        ],
      },
      {
        id: "aenderungen",
        title: "Änderungen",
        blocks: [
          {
            p: "Ändert sich die App oder die Website so, dass andere Daten bearbeitet werden, passe ich diese Erklärung an. Es gilt die Fassung mit dem neuesten Datum.",
          },
        ],
      },
    ],
  },

  en: {
    meta: {
      title: "Privacy · CED Buddy and wullschleger.dev",
      description:
        "Privacy policy of the CED Buddy app and the website wullschleger.dev: what stays local in the app, how support emails are handled and what happens through Cloudflare when you visit the website.",
    },
    eyebrow: "CED Buddy · wullschleger.dev",
    title: "Privacy policy",
    updated: "Last updated",
    draftTitle: "Draft",
    draftText: "This privacy policy is not finished and not yet in effect. The remaining open points are marked.",
    pendingLabel: "Open",
    tocLabel: "Contents",
    summaryTitle: "In short",
    summary: [
      "Your journal stays on your iPhone. There is no account and no server of my own; I have no access to your entries.",
      "Journal data only leaves the device when you share a backup file or a report PDF yourself.",
      "Apple handles the purchase of the doctor reports. The app only learns whether the purchase is valid.",
      "You send emails for support, feedback and contact voluntarily, from your own mail app. I delete completed requests no later than six months after they are closed, and health information sent unnecessarily as soon as possible.",
      "The app contains no advertising and no analytics, crash reporting or tracking library.",
      "The website is delivered through Cloudflare. Only if you agree does Cloudflare Web Analytics measure page views, referring pages and load times, without cookies. You can change your choice at any time under “Privacy settings” at the bottom of every page.",
    ],
    sections: [
      {
        id: "scope",
        title: "What this covers",
        blocks: [
          { p: "This policy has three separate parts:" },
          {
            ul: [
              "using the iPhone app CED Buddy (sections 3 to 7),",
              "emails to apps@wullschleger.dev: support, feedback and contact requests through the website (section 8),",
              "visiting the website wullschleger.dev, meaning the start page, the app pages and all other pages under this address (section 9).",
            ],
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
          { p: "The controller for the app and the website is:" },
          { address: ["Emanuel Wullschleger", "Winkelstrasse 21", "4665 Oftringen", "Switzerland"] },
          { p: "Email for support and all privacy questions: apps@wullschleger.dev" },
          {
            p: "I run the app and the website as a private individual. In this policy, “I” means this controller.",
          },
          {
            pending:
              "It has not yet been decided whether a representative in the EU under Art. 27 GDPR will be appointed for users in the EU or whether the exception in Art. 27(2) applies. Until this is settled in writing, this policy names neither a representative nor an exception.",
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
              "meals with a name and, if you like, a photo, plus saved meals to reuse,",
              "settings such as language, appearance and reminder time.",
            ],
          },
          {
            p: "This information is health data and therefore particularly sensitive. The app asks for no account, no email address and no real name, and collects no device identifier.",
          },
          {
            p: "The data is stored only on your device, in an encrypted database (SQLCipher); photos are encrypted individually (AES-256-GCM). The keys are kept in the iPhone keychain, tied to this device and do not move to another device. The app marks its data as “do not back up” for iCloud and computer backups of the device.",
          },
          {
            p: "One exception while taking a photo: as long as you are editing a meal with a new photo, a resized copy is stored unencrypted in the app's cache. The app deletes it when you save or discard, at the latest at the next start.",
          },
          {
            p: "The app uploads nothing to a server of mine; there is no such server and no sync. I therefore can neither see nor recover your entries.",
          },
          {
            p: "Deleting: you delete meals, symptoms, bowel movements and notes one by one in the app; you can edit check-ins and remove the nickname at any time. If you delete the app, iOS removes the app and the entries stored in it from the device. Whether storage is physically overwritten is up to iOS.",
          },
          { h3: "Links to the website" },
          {
            p: "In Settings, “Help page on the web” and “Privacy policy” only open this website when you tap them, in your iPhone's default browser outside the app. The address contains only the page and the language, nothing from your journal and nothing about your purchase. Section 9 then applies to the visit.",
          },
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
            p: "A backup file is only created when you create it. It contains your entries and, if you choose, the photos, and is encrypted with a password you choose. Where you put it via the share sheet (for example Files, AirDrop or Mail) is up to you. The copy the app briefly creates for this is encrypted too and deleted afterwards.",
          },
          {
            p: "Anyone with the file and the password can read your journal. A forgotten password cannot be reset, not even by me.",
          },
          {
            p: "When restoring, the app opens the chosen file with your password, checks it and shows you what it contains. Only when you confirm does the content of the file replace all entries on the device. The app only imports CED Buddy backups.",
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
            p: "Whether and with whom you share the PDF is your decision, in the share sheet. Once shared, the PDF is readable without encryption; I am not responsible for further processing by recipients or by the app you choose. The app deletes its own temporary PDF file when you close the view, at the latest at the next start.",
          },
        ],
      },
      {
        id: "purchase",
        title: "Purchasing doctor reports through Apple",
        blocks: [
          {
            p: "You unlock the PDF reports with a one-time in-app purchase; there is no subscription. The app uses Apple's StoreKit directly, without a third-party library and without a server of its own.",
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
        title: "Emails to apps@wullschleger.dev",
        blocks: [
          {
            p: "When you use “Help & contact” or “Give feedback” in the app under Settings › Help & feedback, or open an email link on this website (support page or contact section of the start page), a draft opens in your mail app. It is only sent if you send it. The message then goes from your sender address through your mail provider to apps@wullschleger.dev. Because of the sender address, it is not anonymous.",
          },
          {
            p: "I receive what you write and attach, your sender address and the name your mail app sends along, and the usual technical information of an email such as the time and the mail servers involved. You see what the app prepares itself before sending:",
          },
          {
            ul: [
              "An email from “Help & contact” has the app's name and version as its subject, for example “CED Buddy 1.0.0: help”. The app fills in nothing else.",
              "For feedback, the subject names the kind of feedback (for example “[CED Buddy][BUG] Feedback”), and the text contains the category and what you wrote. App version and build, operating system and version, app language and appearance are only added if you switch on “Add technical details”.",
            ],
          },
          {
            p: "The app does not automatically add your nickname, journal entries, photos, health information, purchase data, device identifiers or location. Whatever you write or attach yourself does reach me, though. Please leave out personal health information, findings, doctor's reports, backup files and report PDFs. I do not need them for support and do not ask for them.",
          },
          {
            p: "I use the messages to reply to you, fix bugs, evaluate factual suggestions for improvement and answer general requests. I handle support myself, do not automatically forward messages to other mailboxes and use contact details neither for a newsletter nor for advertising.",
          },
          { h3: "If health information arrives anyway" },
          {
            p: "Health information, findings, doctor's reports, backup files or reports that are not needed for your request are not used for anything else: not to develop the app, not in notes or tickets and not in AI tools. I do not quote them in my reply. As soon as I notice them, I answer the request without this information and delete the message with its attachments as soon as possible, including from the trash and from my own copies. I do not keep them until the six-month limit. If I need more details about a bug, I ask you for a new description with made-up data.",
          },
          { h3: "Mail provider" },
          {
            p: "The mailbox apps@wullschleger.dev is hosted by Infomaniak Network SA, Geneva, Switzerland. Infomaniak processes the messages on my behalf. According to Infomaniak's terms for its Mail Service (version of 27 May 2026), data is stored exclusively in data centres in Switzerland owned by Infomaniak. Infomaniak backs up mailbox content daily and keeps these backups for seven days.",
          },
          { h3: "How long I keep messages" },
          {
            ul: [
              "While a request is open, I keep the messages I need to handle it.",
              "I delete completed requests (support, feedback and contact) as soon as I no longer need them, no later than six months after they are closed. This applies to your messages and to my replies. Health information sent unnecessarily falls under the shorter rule above.",
              "I only keep individual messages longer if a statutory retention obligation applies or I need them for a specific legal claim, and only as long as necessary for that.",
              "I may keep factual bug descriptions and ideas separately, in my own words and without personal reference (no names, addresses or health information), to develop the app further.",
            ],
          },
          {
            p: "I check the mailbox for this manually at regular intervals; there is no automatic deletion in place. After deletion, messages may remain in Infomaniak's technical backups for up to seven days.",
          },
        ],
      },
      {
        id: "website",
        title: "Visiting the website",
        blocks: [
          {
            p: "This section applies to all pages under wullschleger.dev. The website is a static website: it has no contact form, no account and no comments.",
          },
          { h3: "Delivery and security by Cloudflare" },
          {
            p: "The website is hosted on Cloudflare Pages and delivered through Cloudflare's network (Cloudflare, Inc., USA). With every request, Cloudflare receives the technically necessary information: IP address, time, requested address, referring page (referrer), browser and system details and other connection data. Cloudflare needs it to deliver the pages, defend against attacks and abuse and detect faults. From it, Cloudflare creates aggregated statistics, such as number of requests, countries and status codes, which I see in the Cloudflare account.",
          },
          {
            p: "How long Cloudflare keeps this connection data is set by Cloudflare; Cloudflare does not state a fixed period for it. More: https://www.cloudflare.com/privacypolicy/",
          },
          {
            p: "The pages themselves set no cookies. The language is part of the address (/en for English). So that the website respects your choice about statistics, it stores an entry “wd-privacy-choice” in your browser's local storage (localStorage): your choice (allowed or declined), a version number and the date of the choice. The entry stays on your device and is sent neither to me nor to Cloudflare. After six months the website asks again; you can delete the entry at any time in your browser settings. If Cloudflare considers a request automated, it may show a security check and set a security cookie for it (for example “cf_clearance”). Such cookies protect the website; they are not used for analytics.",
          },
          { h3: "Cloudflare Web Analytics, only with your consent", id: "web-analytics" },
          {
            p: "With your consent, I use Cloudflare Web Analytics to see how often the pages are viewed, which pages visitors come from and how fast the pages load. The website asks you, with the equal buttons “Allow statistics” and “Continue without statistics”. As long as you do not agree, the website does not load the script and opens no connection to Cloudflare Web Analytics; all content remains just as usable. Without JavaScript the question does not appear and nothing is measured.",
          },
          {
            p: "After you agree, your browser loads a script from Cloudflare (static.cloudflareinsights.com) on every page. It reads performance values from your browser and sends measurements to Cloudflare (cloudflareinsights.com): the page viewed, the referring page, load and performance values and a random identifier for this one page view. From the request, Cloudflare derives country, device type, browser and operating system. In the account I only see aggregated figures, not individual people.",
          },
          {
            p: "According to Cloudflare, Web Analytics uses no cookies and no local storage in the browser, does not fingerprint visitors from their IP address or browser details, does not store query parameters of addresses and discards the IP address at the nearest data centre. The measurement is not used for advertising or to build a profile of you.",
          },
          {
            p: "Retention according to Cloudflare: the complete measurements are kept for seven days. After that, Cloudflare keeps a sample of about 10% for longer-term analysis; data for the last six months is available in the account. Cloudflare does not state a period after which all measurements are deleted.",
          },
          {
            p: "Your consent is voluntary. You can withdraw it at any time with effect for the future: at the bottom of every page under “Privacy settings”, with “Continue without statistics”. If the script was loaded, the website then reloads the page so that it stops measuring. Measurements sent until then are not deleted by this; Cloudflare's retention applies to them.",
          },
          {
            pending:
              "Consent-based loading is prepared but not yet in operation. Still to do: switch off the automatic Web Analytics setup in the Cloudflare account (Pages project and zone) so that Cloudflare does not add the script itself, enter the site token, and check on the published website that no request to Cloudflare Web Analytics happens without consent and that email addresses are delivered unchanged.",
          },
          { h3: "Error reports (Network Error Logging)" },
          {
            p: "With every page, Cloudflare sends the instructions “NEL” and “Report-To”. They let your browser report to Cloudflare when a connection to wullschleger.dev fails, for example because of a DNS or connection error. Successful requests are not reported. Such a report contains, among other things, the affected address, referring page, type of error, duration, protocol and the server's IP address. According to Cloudflare, it uses your browser's IP address only briefly to derive country and network provider and does not store it. Your browser follows the instruction for up to seven days; this is not a retention period at Cloudflare.",
          },
          { h3: "Links and downloads" },
          {
            p: "Fonts, images and the CV as a PDF come from wullschleger.dev itself. Links to GitHub, LinkedIn, g.dev, Apple or authorities only open those sites when you click them; their privacy policies apply there. “Copy address” only puts the address on your device's clipboard. The website's addresses contain no journal content, email addresses or purchase data.",
          },
        ],
      },
      {
        id: "legal-bases",
        title: "Purposes and legal bases",
        blocks: [
          {
            p: "I process personal data under the Swiss Federal Act on Data Protection (FADP) and only for the purposes named in this policy. I only ask for consent for the optional website statistics. Neither using the app, nor visiting the website, nor sending an email counts as consent. I make no automated individual decisions and build no profiles of you.",
          },
          {
            p: "I do not process your journal data. It is only on your device and only reaches me if you send it to me yourself.",
          },
          {
            p: "The website statistics also run for visits from Switzerland only with your consent. Section 9 explains the processing on your device and how to refuse it (Art. 45c Telecommunications Act).",
          },
          {
            p: "Where the EU General Data Protection Regulation (GDPR) applies to processing, for example when you live in the EU and write to me, I rely on these legal bases:",
          },
          {
            table: {
              head: ["Purpose", "Data", "Legal basis under the GDPR"],
              rows: [
                [
                  "Answer requests (support, feedback, contact), fix bugs, evaluate suggestions",
                  "Content of the email, sender address, mail metadata, optional technical details",
                  "Art. 6(1)(b) where it concerns using or buying the app; otherwise Art. 6(1)(f) (interest in answering requests and improving the app)",
                ],
                [
                  "Keep individual messages longer",
                  "the messages concerned",
                  "Art. 6(1)(c) (legal obligation) or (f) (specific legal claim)",
                ],
                [
                  "Deliver and protect the website",
                  "Connection data at Cloudflare",
                  "Art. 6(1)(f) (secure, working website)",
                ],
                [
                  "Measure reach and loading quality",
                  "Web Analytics measurements",
                  "Art. 6(1)(a) (your consent); can be withdrawn at any time under “Privacy settings”",
                ],
                [
                  "Respect your choice about statistics",
                  "Entry in the browser (only on your device)",
                  "Art. 6(1)(f) (interest in respecting your choice without asking on every visit)",
                ],
                [
                  "Detect connection errors",
                  "Error reports (NEL)",
                  "Art. 6(1)(f) (reachable website)",
                ],
              ],
            },
          },
          {
            p: "I do not process health information you write into an email unasked for any purpose of my own. I rely neither on consent nor on any other exception under Art. 9 GDPR for it; instead I end the processing by deleting it as described in section 8.",
          },
        ],
      },
      {
        id: "recipients",
        title: "Recipients and processing abroad",
        blocks: [
          {
            table: {
              head: ["Recipient", "What for", "Where"],
              rows: [
                [
                  "Infomaniak Network SA, Geneva",
                  "Mailbox apps@wullschleger.dev (support, feedback, contact), on my behalf",
                  "Switzerland (according to Infomaniak, exclusively its own data centres in Switzerland)",
                ],
                [
                  "Cloudflare, Inc., San Francisco, and Cloudflare affiliates",
                  "Delivery and protection of the website, error reports; Web Analytics only with your consent",
                  "Worldwide network of data centres; a request is usually handled by the nearest one, which may be outside Switzerland and the EU. According to Cloudflare, data is stored mainly in the USA and the EEA.",
                ],
                [
                  "Apple",
                  "Purchase of the doctor reports, under Apple's own terms and responsibility",
                  "see Apple's privacy policy",
                ],
              ],
            },
          },
          {
            p: "For transfers to the USA, Cloudflare states that it is certified under the Swiss-U.S. and EU-U.S. Data Privacy Framework and additionally uses standard contractual clauses. Since 15 September 2024, the Swiss Federal Council recognises an adequate level of data protection for US companies certified under the Swiss-U.S. Data Privacy Framework. Cloudflare describes its role as follows: for content passing through its services and for customer logs, Cloudflare processes data on behalf of its customers; for certain other data, Cloudflare is itself responsible.",
          },
          {
            p: "I do not sell personal data and do not pass it on for advertising. There are no other recipients, unless I were legally obliged to disclose data.",
          },
        ],
      },
      {
        id: "rights",
        title: "Your rights",
        blocks: [
          {
            p: "Under the FADP you can request information about your personal data, have your data handed over or transferred, have incorrect data corrected and have data deleted. You can also object to processing. You can file a report with the Federal Data Protection and Information Commissioner (FDPIC): https://www.edoeb.admin.ch/en",
          },
          {
            p: "Where the GDPR applies, you also have the right to restriction of processing and to data portability, and the right to object at any time to processing based on legitimate interests. You can lodge a complaint with a data protection supervisory authority, in particular in the country where you live or work.",
          },
          {
            p: "You can withdraw your consent to statistics at any time, at the bottom of every page under “Privacy settings”. The withdrawal applies to the future; processing based on the consent before that remains lawful.",
          },
          {
            p: "For all of these requests, including if you want your emails deleted, write to apps@wullschleger.dev. If I am not sure that a request comes from you, I may ask for confirmation, for example a reply from the address you wrote from.",
          },
          {
            p: "Your journal entries are only on your device. You manage and delete them yourself in the app; I cannot provide information about them because I do not have them.",
          },
        ],
      },
      {
        id: "changes",
        title: "Changes",
        blocks: [
          {
            p: "If the app or the website changes in a way that other data is processed, I will update this policy. The version with the latest date applies.",
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
