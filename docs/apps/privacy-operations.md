# Datenschutz wullschleger.dev und CED Buddy: Betrieb, Technik, offene Punkte

Stand: 24.10.2026, Branch `fix/remove-analytics` (nach `feat/privacy-consent`, PR #4).
Interne Projektdoku, nicht öffentlich. Der öffentliche Text steht in
`wullschleger-dev/src/apps/ced-buddy/privacy.js` und ist unter `/apps/ced-buddy/privacy` und
`/en/apps/ced-buddy/privacy` erreichbar.

**Veröffentlichungsstatus: Entwurf.** `privacyStatus` bleibt `"draft"` (Seite `noindex`, nicht in der
Sitemap, sichtbarer Entwurfshinweis). Grund: der eine offene Punkt in Abschnitt 5 (EU-Vertretung). Der
Build verweigert `"final"`, solange im Text `pending`-Blöcke stehen.

Keine Rechtsprüfung. Grundlage: die tatsächlichen Datenflüsse, die Recherche „Datenschutz vor dem
Launch“ vom 24.10.2026 (EDPB, CNIL, EDÖB, Cloudflare) und die Quellen in Abschnitt 7. Das ist keine
Bescheinigung umfassender Rechtskonformität.

## 1. Betreiberanleitung: Postfach apps@wullschleger.dev

Gilt für alles, was an `apps@wullschleger.dev` (Infomaniak) kommt: App-Support, Feedback und seit diesem
Branch auch allgemeine Kontaktanfragen über die Startseite. Eine automatische Löschung ist **nicht**
eingerichtet; die Regeln werden von Hand eingehalten.

### Ordnung im Postfach

1. Zwei Ordner: `Anfragen/Offen` und `Anfragen/Erledigt` (bestehende Ordner `CED Buddy/…` umbenennen
   oder weiterverwenden; wichtig ist nur die Trennung offen/erledigt).
2. Neue Anfrage: in `Offen` lassen, bis sie beantwortet und abgeschlossen ist.
3. Abschluss: den ganzen Verlauf nach `Erledigt` verschieben. **Abschlussdatum = Datum der letzten
   Nachricht im Verlauf.** Kommt später eine neue Nachricht dazu, ist die Anfrage wieder offen.

### Unnötig mitgeschickte Gesundheitsangaben (sofort, nicht monatlich)

Gilt für Gesundheitsangaben, Befunde, Arztberichte, Sicherungsdateien (`.cedbackup`), Bericht-PDFs und
ungeschwärzte Screenshots mit Tagebuchinhalten, die für die Anfrage nicht nötig sind.

1. Nicht weiterverwenden: nicht in Issues, Notizen, Tickets, Produktanalyse oder KI-Werkzeuge
   übernehmen, nicht weiterleiten, Anhänge nicht öffnen oder speichern, wenn es sich vermeiden lässt.
2. Antworten **ohne Zitat** (zitierten Text in der Antwort löschen) und die Gesundheitsangaben nicht
   wiederholen. Braucht es für einen Fehler mehr, um eine neue Beschreibung mit erfundenen Daten bitten.
3. Danach die eingegangene Nachricht mit Anhängen löschen, **Papierkorb leeren**, eigene Kopien (Mac,
   iPhone, Downloads, Screenshots) löschen. Nicht bis zur Sechs-Monats-Frist liegen lassen.
4. Die technischen Sicherungen von Infomaniak halten gelöschte Nachrichten noch bis zu sieben Tage
   (Mail-Service-Bedingungen Art. 7.2). Das steht so in der Erklärung; mehr wird nicht versprochen.
5. Ausnahme nur, wenn ein weiterer Umgang mit diesen Angaben tatsächlich nötig ist: **vorher** die
   konkrete Rechtsgrundlage (bei DSGVO auch eine Ausnahme nach Art. 9 Abs. 2) und Schutzmassnahmen
   bestimmen und kurz festhalten. Nicht nachträglich behaupten, ein Hinweis oder das Senden der Mail
   habe den Empfang legitimiert.

Der Warnhinweis auf der Support-Seite und in der App verringert solche Eingänge, verhindert sie aber nicht.
Die Regel ist keine neue Art.-9-Grundlage, sondern beendet die unnötige Bearbeitung.

### Monatliche Prüfung (zum Beispiel am ersten Arbeitstag im Monat)

1. In `Erledigt` alle Nachrichten suchen, die älter als sechs Monate sind (Webmail-Suche mit Datumsfilter
   „vor …“), und löschen. Früher löschen, wenn eine Anfrage schon vorher nicht mehr gebraucht wird.
2. Im Ordner **Gesendet** die eigenen Antworten zu diesen Anfragen ebenfalls löschen.
3. **Papierkorb leeren.** Infomaniak leert Papierkorb und Spam selbst nach 30 Tagen (Art. 2.3); ohne
   manuelles Leeren läge eine Nachricht aber bis zu 30 Tage über der Frist.
4. In `Offen` nachsehen, ob dort Verläufe liegen, die eigentlich erledigt sind, und sie verschieben.
5. Lokale Kopien prüfen: Anhänge oder Screenshots auf Mac oder iPhone ebenfalls löschen.

### Ausnahmen von der Sechs-Monats-Frist (nur einzelne Nachrichten, nie pauschal)

- Nur bei gesetzlicher Aufbewahrungspflicht oder wenn eine Nachricht für einen konkreten Rechtsanspruch
  gebraucht wird. In eine kurze Liste ausserhalb des Postfachs eintragen: Datum, Betreff, Grund,
  „aufbewahren bis“. Keinen Inhalt kopieren. Nach Wegfall des Grundes löschen.

### Für die Produktentwicklung

- Fehlerbeschreibungen und Ideen ohne Namen, Adressen, Mailadresse und Gesundheitsangaben in eigene
  Worte übertragen (zum Beispiel in ein Issue). Keine Mail weiterleiten oder als Datei ablegen.

### Anfragen zu Datenschutzrechten

- Auskunft nach DSG innert 30 Tagen (Art. 25 Abs. 7 DSG); nach DSGVO innert eines Monats.
- Löschbegehren: Verlauf, gesendete Antworten und Papierkorb löschen und kurz bestätigen. Die
  Bestätigung selbst wird nach der normalen Regel gelöscht.
- Keine Gesundheitsdaten oder Tagebuchdateien für den Support anfordern.

## 2. Website: keine Web-Analyse

Entscheid Emanuel, 24.10.2026: keine Statistik auf der Website. Die zwischenzeitlich gebaute
Einwilligungslösung (Commit `c743797`) ist mit diesem Branch wieder entfernt; es gibt kein
Analyse-Skript, keine Frage, keinen Knopf „Datenschutzeinstellungen“ und nichts im Browserspeicher.

**Befund live am 24.10.2026 vor dem Entfernen:** Cloudflare fügte über die Web-Analytics-Integration des
Pages-Projekts selbst ein Skript in jede Seite ein (`<!-- Cloudflare Pages Analytics -->`, `beacon.min.js`
mit Token), also ohne Zustimmung und unabhängig vom Code. Emanuel hat Web Analytics im Pages-Projekt am
24.10.2026 deaktiviert; laut Dashboard greift das beim nächsten Deployment.

### Cloudflare (Betreiber, im Dashboard)

1. *Workers & Pages → Pages-Projekt → Metrics → Web Analytics*: deaktiviert (erledigt 24.10.2026).
2. *Account → Analytics & Logs → Web Analytics*: Steht `wullschleger.dev` dort als Site mit
   automatischer Einrichtung, ebenfalls „Disable“ wählen oder die Site entfernen. Sonst kann Cloudflare das
   Skript weiter über die Zone einfügen.
3. *Zone → Scrape Shield → Email Address Obfuscation*: aus. Im HTML stehen zusätzlich
   `<!--email_off-->…<!--/email_off-->`. Live am 24.10.2026 waren die Mail-Links bereits unverschlüsselt.
4. *Zone → Analytics & Logs → Logpush*: nachsehen und hier notieren. Kein Logpush heisst nicht, dass
   Cloudflare keine Logs hat; die Erklärung behauptet das auch nicht.
5. Nachweise ablegen (ausserhalb des Repos): Cloudflare-DPA (cloudflare.com/dpa) und
   Infomaniak-Auftragsbearbeitungsvertrag; im Infomaniak Manager bestätigen, dass `apps@wullschleger.dev`
   den zitierten Mail-Service nutzt.

### Prüfung nach dem Deployment

1. `curl -s https://wullschleger.dev/ | grep -c cloudflareinsights` ergibt `0`, ebenso für
   `/apps/ced-buddy/privacy` und `/en`.
2. Browser mit Netzwerk-Tab: keine Anfrage an `cloudflareinsights.com`, kein `/cdn-cgi/rum`, kein
   `email-decode.min.js`; `localStorage` leer; keine Konsolenfehler.
3. Findet sich doch ein Beacon: Schritt 2 oben prüfen. Die Erklärung sagt „keine Web-Analyse“; ein
   Beacon wäre dann ein Fehler, der sofort behoben werden muss.

## 3. Technische Prüfungen

### 24.10.2026, lokal, ohne Analytics (`fix/remove-analytics`)

`wrangler pages dev` 4.140.0, Chrome headless, 375 px, alle 10 Seiten je mit Neuladen: HTTP 200, keine
Anfrage ausserhalb der Website, `localStorage`/`sessionStorage` leer, keine Cookies, kein horizontales
Scrollen, keine Konsolenfehler, Kontakt `mailto:apps@wullschleger.dev`. Im Build kommt
`cloudflareinsights` nicht mehr vor.

### 24.10.2026, lokal, Einwilligungslösung (`feat/privacy-consent`, inzwischen entfernt)

`wrangler pages dev` 4.140.0 mit zwei Builds: wie er heute baut (ohne Token) und ein Testbuild mit
erfundenem Token `0123456789abcdef0123456789abcdef`. Google Chrome headless über `playwright-core`
1.55.0. Der echte Cloudflare-Beacon (`beacon.min.js`, Version `2026.10.1`, am 24.10.2026 geladen) wurde
aus einer lokalen Kopie ausgeliefert, seine Berichte lokal beantwortet; **nichts ging an Cloudflare**.
60 Prüfungen, alle bestanden:

| Fall | Ergebnis |
| --- | --- |
| Ohne Token, alle 10 Seiten und 404 | keine Frage, kein Knopf, keine Anfrage ausserhalb der Website, nichts gespeichert |
| Frischer Browser | Frage sichtbar, gleiche Knopf-Klassen, kein Skript, kein Bericht, nichts gespeichert, kein Fokuswechsel |
| Ablehnen, Seitenwechsel, Neuladen | gespeichert nur `v`, `analytics: false`, `date`; keine Frage mehr; kein Skript und kein Bericht, auch nicht beim Verlassen |
| Zustimmen | genau ein Skript pro Seitenaufruf (3 Aufrufe, 3 Skripte, 3 Berichte); Konfiguration mit `"spa":false`; Ankerwechsel `#contact`/`#about` ohne zusätzlichen Bericht |
| Widerruf über Footer | Frage öffnet, Fokus auf Überschrift, Status „Aktuell erlaubt.“; Seite lädt neu ohne Skript; **0 Berichte** beim Neuladen, danach keine mehr |
| Abgelaufene (7 Monate), ungültige, alte Version | neu gefragt, kein Skript |
| Speicher gesperrt | Frage, Zustimmung gilt nur für die Seite, keine Fehler |
| JavaScript aus | keine Frage, kein Knopf; Startseite `mailto:apps@wullschleger.dev`, Support-Seite 4 echte `mailto:`-Links |
| 375 px, alle Seiten mit offener Frage | kein horizontales Scrollen, keine Konsolenfehler (Hydrierung) |
| Tastatur | Antworten mit Tab erreichbar, Enter wirkt |
| Anker `#web-analytics` | landet unter der Kopfzeile |

Nicht lokal prüfbar: automatische Einbindung durch Cloudflare, E-Mail-Verschleierung und `email_off`,
NEL-Header, Verhalten mit dem echten Token. Dafür Abschnitt 2, „Prüfung nach dem Deployment“.

### 23.10.2026, live (Stand vor beiden Branches)

Alle Abrufe aus der Schweiz (`loc=CH`, `colo=ZRH`), `curl` und Chrome headless:

| Prüfung | Ergebnis |
| --- | --- |
| Alle 10 DE/EN-Pfade inkl. Neuladen | 200 |
| Browseranfragen | nur `wullschleger.dev`, keine Drittanbieter |
| Web-Analytics-Beacon | **nicht** vorhanden, weder im HTML noch als Anfrage |
| Cookies / `localStorage` / `sessionStorage` | keine / leer |
| Header `NEL` / `Report-To` | `cf-nel`, `success_fraction` 0.0, `max_age` 604800 |
| E-Mail-Verschleierung | **aktiv** (`/cdn-cgi/l/email-protection…`, `email-decode.min.js` von der eigenen Domain) |
| Konsole | auf beiden Datenschutzseiten React-Fehler #418 (Hydrierung) |

**Korrektur zur früheren Fassung dieses Dokuments:** Hier stand, Cloudflares Option „Enable, excluding
visitor data in the EU“ erfasse Schweiz, Vereinigtes Königreich, Norwegen, Island und Liechtenstein nicht.
Das ist falsch. Laut der aktuellen RUM-Beacon-Dokumentation (abgerufen 24.10.2026) stehen `CH`, `GB`,
`NO`, `IS` und `LI` ausdrücklich auf der Ausschlussliste. Die Option wird nicht mehr verwendet; die
Website misst nur mit Einwilligung, für alle Besuche gleich. Für das Konto wird keine regionale
Einschränkung behauptet.

Dass live aus der Schweiz kein Beacon kam, beweist nicht, dass Web Analytics aus ist (Ausschluss-Option
oder kein neues Deployment seit dem Einschalten würden gleich aussehen). Deshalb Abschnitt 2, Schritte 1
und 2.

**React-Fehler #418:** Ursache sehr wahrscheinlich die E-Mail-Verschleierung (ersetzt `mailto:`-Links im
vorgerenderten HTML). Behandelt als technischer Fehler: `email_off` im HTML und Abschalten in der Zone
(Abschnitt 2, Schritt 3). Der Absatz zur Verschleierung ist aus der Erklärung entfernt.

**Code:** keine Analyse-, Werbe- oder Tracking-Bibliothek, kein `fetch`. Browser-APIs:
`navigator.clipboard.writeText` („Adresse kopieren“) und `localStorage` nur für `wd-privacy-choice`.
Keine Tagebuchinhalte, Mailadressen, Spitznamen oder Kaufdaten in Website-URLs.

## 4. Was der Text über Cloudflare sagt und woher es stammt

Alles „nach Angaben von Cloudflare“ ist Anbieterangabe, nicht selbst geprüft.

| Funktion | Inhalt im Text | Quelle |
| --- | --- | --- |
| Auslieferung, Sicherheit, Edge-Statistik | Verbindungsdaten bei jedem Aufruf; zusammengefasste Statistik im Konto; keine feste Frist | Cloudflare Privacy Policy (4.11.2025); Web Analytics FAQ |
| Separate Logs | nicht behauptet; Logpush offen (Abschnitt 2, Schritt 4) | – |
| Web Analytics | nicht genutzt; nur zusammengefasste Zahlen aus den Verbindungsdaten der Auslieferung | Entscheid 24.10.2026; Abschnitt 2 |
| NEL | Bericht nur bei Fehlern; Felder; IP nur kurz; `max_age` ist keine Aufbewahrungsfrist | Live-Header; Cloudflare NEL-Doku |
| Sicherheits-Cookies | nur bei Sicherheitsprüfung (`cf_clearance`) | Cloudflare Cookie-Doku |
| Ausland | DPF und SCC laut Cloudflare; Bundesrat: DPF-zertifizierte US-Firmen angemessen seit 15.9.2024 | Cloudflare Privacy Policy; admin.ch |
| Auftragsbearbeitung | Cloudflare DPA 6.4; Annahme für dieses Konto nicht geprüft (Abschnitt 2, Schritt 5) | cloudflare.com/dpa |

## 5. Offene Punkte (blockieren `privacyStatus: "final"`)

Im Text als `pending` markiert (je DE und EN, 1 je Sprache).

1. **EU-Vertretung nach Art. 27 DSGVO (Betreiber, Entscheidung und gegebenenfalls Vertrag).** Separat
   dokumentiert in [eu-representative.md](eu-representative.md). Keine Ausnahme und keine Vertretung in
   den Text schreiben, bevor das schriftlich geklärt ist.

Nicht im Text blockierend, aber vor „final“ erledigen: Abschnitt 2, Cloudflare-Schritte 2 bis 5 und die
Prüfung nach dem Deployment.

Erledigt:

- Web-Analyse entfernt (Abschnitt 2); damit entfällt die Einwilligungsfrage.
- Private iCloud-Adresse im Kontaktbereich ersetzt durch `apps@wullschleger.dev`; die Erklärung deckt
  allgemeine Kontaktanfragen über dieses Postfach ab (gleiche Aufbewahrungsregel).
- Ungefragte Gesundheitsangaben: keine Einwilligung und keine Art.-9-Ausnahme behauptet; Löschregel in
  Abschnitt 8 der Erklärung und oben in Abschnitt 1.
- E-Mail-Verschleierung: als technischer Fehler behandelt (Abschnitt 3).

Ausserhalb der Erklärung, nicht blockierend:

- **CV-PDF** (`public/cv-emanuel-wullschleger.pdf`) enthält weiterhin `emanuel.wullschleger@icloud.com`
  und eine Telefonnummer. Wenn die Kontaktadresse überall gleich sein soll: CV neu exportieren.
- **App-Text** `publicPages.websiteNote` (App-Repository) erwähnt Cloudflare Web Analytics; der Satz
  sollte entfallen. Siehe [ced-buddy-privacy-handover.md](ced-buddy-privacy-handover.md).

Bei Schliessen des Punkts `privacyUpdated` in `src/apps/apps.js` auf das Datum der Fassung setzen.

## 6. Sicht der Recherche vom 24.10.2026 (Kurzfassung)

- Lokales Tagebuch: Bei ausschliesslich nutzergesteuerter Verarbeitung auf dem Gerät kann der Anbieter
  nur Software bereitstellen (CNIL, Empfehlung zu mobilen Apps, Abschnitt 3.3). Die Erklärung sagt
  deshalb „Deine Tagebuchdaten bearbeite ich nicht“, behauptet aber nicht, die DSGVO gelte nicht, und
  trennt Kauf, E-Mails und Website.
- Analytics: EDPB-Leitlinien 2/2023 (v2) erfassen auch skriptbasierte Zugriffe ohne Cookie. Statt einer
  Einwilligungslösung wird keine Web-Analyse genutzt.
- Art. 27: Die Ausnahme verlangt unter anderem „gelegentliche“ Verarbeitung; laufender Support und
  Websitebetrieb machen eine pauschale Ausnahme unsicher (EDPB-Leitlinien 3/2018, Abschnitt 4).

## 7. Quellen

Abgerufen 23. und 24.10.2026.

- CNIL, Recommandation applications mobiles, Abschnitt 3.3:
  https://www.cnil.fr/sites/cnil/files/2024-09/recommandation-applications-mobiles.pdf
- EDPB Guidelines 3/2018 (räumlicher Anwendungsbereich, Art. 27):
  https://www.edpb.europa.eu/system/files/documents/files/file1/edpb_guidelines_3_2018_territorial_scope_after_public_consultation_en_1.pdf
- EDPB Leitlinien 2/2023, Version 2 (Art. 5 Abs. 3 ePrivacy):
  https://www.edpb.europa.eu/system/files/2025-02/edpb_guidelines_202302_technical_scope_art_53_eprivacydirective_v2_de.pdf
- CNIL, FAQ Cookies und Tracker (Frage 11, Messung):
  https://www.cnil.fr/fr/cookies-et-autres-traceurs/regles/cookies/FAQ
- CNIL, sensible Daten und Art. 6/9: https://www.cnil.fr/fr/definition/donnee-sensible
- EDPB, ausdrückliche Einwilligung: https://www.edpb.europa.eu/system/files/2026-04/edpb-summary-consent_en.pdf
- EDÖB Datenschutzerklärungen: https://www.edoeb.admin.ch/de/datenschutzerklaerungen-im-internet
- EDÖB Informationspflicht: https://www.edoeb.admin.ch/de/informationspflicht
- DSG (SR 235.1): https://www.fedlex.admin.ch/eli/cc/2022/491/de
- Bundesrat, Angemessenheit USA (DPF):
  https://www.admin.ch/gov/de/start/dokumentation/medienmitteilungen.msg-id-102054.html
- Infomaniak Mail-Service-Bedingungen, „Review of 27/05/2026“ (Art. 2.3, 7.1, 7.2):
  https://welcome.infomaniak.com/api/components/cgu/latest?id=38&locale=en_GB
- Infomaniak DPA: https://www.infomaniak.com/documents/privacy/DPA/Data_Processing_Agreement_(DPA).pdf
- Cloudflare RUM-Beacon (Felder, Ausschlussliste inkl. CH/GB/NO/IS/LI):
  https://developers.cloudflare.com/speed/observatory/rum-beacon/
- Cloudflare Web Analytics FAQ (Snippet, Berichtsziel, CSP): https://developers.cloudflare.com/web-analytics/faq/
- Cloudflare Web Analytics Einrichtung: https://developers.cloudflare.com/web-analytics/get-started/
- Cloudflare E-Mail-Verschleierung (`email_off`, Configuration Rules):
  https://developers.cloudflare.com/waf/tools/scrape-shield/email-address-obfuscation/
- Cloudflare NEL: https://developers.cloudflare.com/network-error-logging/
- Cloudflare Cookies: https://developers.cloudflare.com/fundamentals/reference/policies-compliances/cloudflare-cookies/
- Cloudflare Privacy Policy: https://www.cloudflare.com/privacypolicy/ · DPA: https://www.cloudflare.com/dpa
- Beacon-Quelltext: https://static.cloudflareinsights.com/beacon.min.js (Version `2026.10.1`, Optionen
  `token`, `spa`; nur gelesen und lokal im Test ausgeliefert)
- App-Fakten: `~/Documents/GitHub/ced-buddy`, Branch `feat/privacy-support-alignment` @ `c8f2ed1`, nur
  gelesen: `src/core/app-links.ts`, `src/features/settings/public-page.ts`,
  `src/features/settings/support-screen.tsx`, `src/domain/feedback.ts`, `src/core/i18n/de.ts`/`en.ts`,
  ADR 0019, `docs/release/privacy-facts.md`
