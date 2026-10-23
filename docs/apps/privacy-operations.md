# Datenschutz wullschleger.dev und CED Buddy: Betrieb, Technik, offene Punkte

Stand: 23.10.2026, Branch `feat/app-privacy-finalization`. Interne Projektdoku, nicht öffentlich.
Der öffentliche Text steht in `wullschleger-dev/src/apps/ced-buddy/privacy.js` und ist unter
`/apps/ced-buddy/privacy` und `/en/apps/ced-buddy/privacy` erreichbar.

**Veröffentlichungsstatus: Entwurf.** `privacyStatus` bleibt `"draft"` (Seite `noindex`, nicht in der
Sitemap, sichtbarer Entwurfshinweis). Grund: die vier offenen Punkte in Abschnitt 4. Der Build verweigert
`"final"`, solange im Text `pending`-Blöcke stehen. Nichts davon ist gepusht oder deployt.

Keine Rechtsprüfung. Der Text ist aus den tatsächlichen Datenflüssen und den unten genannten Quellen
abgeleitet.

## 1. Betreiberanleitung: Support-Mails nach spätestens sechs Monaten löschen

Gilt nur für das Postfach `apps@wullschleger.dev` (Infomaniak), also für App-Support und Feedback. Nicht
für private Postfächer. Eine automatische Löschung ist **nicht** eingerichtet; die Regel wird von Hand
eingehalten.

**Ordnung im Postfach**

1. Zwei Ordner anlegen: `CED Buddy/Offen` und `CED Buddy/Erledigt`.
2. Neue Anfrage: in `Offen` lassen, bis sie beantwortet und abgeschlossen ist.
3. Abschluss: den ganzen Verlauf nach `Erledigt` verschieben. **Abschlussdatum = Datum der letzten
   Nachricht im Verlauf.** Kommt später eine neue Nachricht dazu, ist die Anfrage wieder offen und das
   Datum beginnt neu.

**Monatliche Prüfung** (zum Beispiel am ersten Arbeitstag im Monat)

1. In `Erledigt` alle Nachrichten suchen, die älter als sechs Monate sind (Webmail-Suche mit Datumsfilter
   „vor …“), und löschen. Früher löschen, wenn eine Anfrage schon vorher nicht mehr gebraucht wird.
2. Im Ordner **Gesendet** die eigenen Antworten zu diesen Anfragen ebenfalls löschen (Suche nach
   „CED Buddy“ im Betreff und nach der Absenderadresse, älter als sechs Monate).
3. **Papierkorb leeren.** Infomaniak leert Papierkorb und Spam zwar selbst nach 30 Tagen
   (Mail-Service-Bedingungen Art. 2.3); ohne manuelles Leeren läge eine Nachricht aber bis zu 30 Tage über
   der Frist.
4. In `Offen` nachsehen, ob dort Verläufe liegen, die eigentlich erledigt sind, und sie verschieben.
5. Lokale Kopien prüfen: Anhänge oder Screenshots, die auf Mac oder iPhone gespeichert wurden, ebenfalls
   löschen. Mail-Apps mit IMAP übernehmen das Löschen aus dem Postfach; exportierte Dateien nicht.

Nach dem Löschen bleiben Nachrichten bis zu sieben Tage in den täglichen Sicherungen von Infomaniak
(Art. 7.2). Das steht so in der Erklärung; mehr wird nicht versprochen.

**Ausnahmen** (nur einzelne Nachrichten, nie pauschal)

- Nur wenn eine gesetzliche Aufbewahrungspflicht greift oder eine Nachricht für einen konkreten
  Rechtsanspruch gebraucht wird. In eine kurze Liste ausserhalb des Postfachs eintragen: Datum, Betreff,
  Grund, „aufbewahren bis“. Keinen Inhalt kopieren. Nach Wegfall des Grundes löschen.

**Für die Produktentwicklung**

- Fehlerbeschreibungen und Ideen ohne Namen, Adresse, Mailadresse und Gesundheitsangaben in eigene
  Worte übertragen (zum Beispiel in ein Issue). Keine Mail weiterleiten oder als Datei ablegen.

**Anfragen zu Datenschutzrechten**

- Auskunft nach DSG innert 30 Tagen beantworten (Art. 25 Abs. 7 DSG); nach DSGVO innert eines Monats.
- Bei Löschbegehren: Verlauf, gesendete Antworten und Papierkorb löschen und kurz bestätigen. Die
  Bestätigung selbst wird nach der normalen Regel gelöscht.
- Keine Gesundheitsdaten oder Tagebuchdateien für den Support anfordern. Kommt so etwas trotzdem, nur für
  die Anfrage verwenden, Anhänge nicht lokal speichern, Verlauf nach Abschluss wie oben löschen.

## 2. Technische Prüfung vom 23.10.2026

Alle Abrufe aus der Schweiz (`/cdn-cgi/trace`: `loc=CH`, `colo=ZRH`). Werkzeuge: `curl` und Google Chrome
headless über `playwright-core` 1.55.0 (Anfragen, Cookies, `localStorage`/`sessionStorage`, Konsole).

**Live, https://wullschleger.dev (Stand vor diesem Branch):**

| Prüfung | Ergebnis |
| --- | --- |
| Alle 10 DE/EN-Pfade inkl. Neuladen | 200 |
| Browseranfragen | nur `wullschleger.dev`, keine Drittanbieter |
| Web-Analytics-Beacon (`static.cloudflareinsights.com`, `/cdn-cgi/rum`) | **nicht** vorhanden, weder im HTML noch als Anfrage |
| Cookies / `Set-Cookie` | keine |
| `localStorage` / `sessionStorage` | leer |
| Header `NEL` | `{"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}` |
| Header `Report-To` | Gruppe `cf-nel`, Endpunkt `https://a.nel.cloudflare.com/report/v4?…`, `max_age` 604800 |
| `Link: <https://fonts.googleapis.com>` (aus der Launch-Doku) | nicht mehr vorhanden |
| E-Mail-Verschleierung | **aktiv**: Cloudflare ersetzt Adressen durch `/cdn-cgi/l/email-protection…` und lädt `/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js` (gleiche Domain) |
| Konsole | auf beiden Datenschutzseiten React-Fehler #418 (Hydrierung, Text weicht ab) |

Kein Beacon aus der Schweiz beweist **nicht**, dass Web Analytics global aus ist: Mit „Enable,
excluding visitor data in the EU“ oder bei einem Pages-Projekt, das seit dem Einschalten nicht neu
deployt wurde, sähe der Abruf genauso aus. Andere Regionen waren von hier aus nicht prüfbar.

**React-Fehler #418:** Lokal (ohne Cloudflare) tritt er nicht auf. Ursache ist sehr wahrscheinlich die
E-Mail-Verschleierung: Sie ersetzt in den vorgerenderten Absätzen den Link
`<a href="mailto:…">apps@…</a>` durch einen verschlüsselten Link mit `<span class="__cf_email__">`, den das
Skript danach umbaut; React findet beim Hydrieren anderes Markup und rendert die Seite im Browser neu.
Die Seite funktioniert, aber ohne JavaScript zeigen Support- und Datenschutzseite statt der Adresse
„[email protected]“, und `mailto:`-Links führen zu einer Cloudflare-Seite. **Empfehlung:** Email Address
Obfuscation für die Zone ausschalten (Abschnitt 4, Punkt 2). Dann den Absatz „Cloudflare verschlüsselt
beim Ausliefern die E-Mail-Adressen …“ (DE und EN) aus `privacy.js` entfernen.

**Lokal, Branch, `wrangler pages dev` (4.140.0):** alle 10 Pfade 200 inkl. Neuladen, keine
Drittanfragen, keine Cookies, kein Browserspeicher, keine Konsolenfehler, kein horizontales Scrollen bei
1280 px und 375 px, sichtbarer Fokus (2 px Outline) beim Tabben, Sprachlinks je Seite korrekt, 4 offene
Punkte je Sprache sichtbar, `noindex` auf den Datenschutzseiten. Der Build bricht mit
`privacyStatus: "final"` ab („open points remain (de 4, en 4)“).

**Code:** keine Analyse-, Werbe- oder Tracking-Bibliothek, kein `fetch`, kein Cookie- oder Storage-Zugriff.
Einziger Browser-API-Zugriff: `navigator.clipboard.writeText` beim Knopf „Adresse kopieren“. Keine
Tagebuchinhalte, Mailadressen, Spitznamen oder Kaufdaten in Website-URLs; `mailto:`-Links enthalten nur
Betreff und Vorlage (die Vorlage für Fehlermeldungen enthält leere Felder für App- und iOS-Version).
Referrer-Policy live: `strict-origin-when-cross-origin`.

## 3. Was der Text über Cloudflare sagt und woher es stammt

Getrennt nach Funktion. Alles „nach Angaben von Cloudflare“ ist Anbieterangabe, nicht selbst geprüft.

| Funktion | Inhalt im Text | Quelle |
| --- | --- | --- |
| Auslieferung, Sicherheit, Edge-Statistik | Verbindungsdaten bei jedem Aufruf; zusammengefasste Statistik im Konto; keine feste Frist genannt | Cloudflare Privacy Policy (gültig ab 4.11.2025); Web Analytics FAQ („edge analytics“) |
| Separate Logs | nicht behauptet; offen (Logpush) | – |
| Web Analytics (RUM) | Skript von `static.cloudflareinsights.com`; Felder Seite, Referrer, Lade-/Leistungswerte, `pageloadId`; Land, Gerätetyp, Browser, OS abgeleitet; keine Cookies/Local Storage/Fingerprinting; IP im nächsten Rechenzentrum verworfen; keine Query-Strings; 7 Tage vollständig, dann ~10 % Stichprobe, 6 Monate im Konto; keine Gesamtfrist | cloudflare.com/web-analytics; developers.cloudflare.com/speed/observatory/rum-beacon; …/web-analytics/faq; …/web-analytics/data-metrics/dimensions |
| NEL | Bericht nur bei Fehlern (`success_fraction` 0); Felder; IP nur kurz für Land/ASN; `max_age` = Gültigkeit im Browser, keine Aufbewahrungsfrist | Live-Header; developers.cloudflare.com/network-error-logging |
| Sicherheits-Cookies | nur möglich bei Sicherheitsprüfung (`cf_clearance`); live keine Cookies gesehen | developers.cloudflare.com/fundamentals/reference/policies-compliances/cloudflare-cookies |
| Ausland | Swiss-U.S./EU-U.S. DPF und SCC laut Cloudflare; Speicherung v. a. USA/EWR; Bundesrat: DPF-zertifizierte US-Firmen angemessen seit 15.9.2024 | Cloudflare Privacy Policy; admin.ch Medienmitteilung 14.8.2024 |
| Auftragsbearbeitung | Cloudflare DPA (Version 6.4, gültig ab 3.4.2026) gilt für Self-Serve-Verträge; ob und wie er für dieses Konto angenommen wurde, ist nicht geprüft | cloudflare.com/dpa |

## 4. Offene Punkte

Im Text als `pending` markiert (je DE und EN). Erst wenn alle erledigt sind: `pending`-Blöcke entfernen,
`privacyStatus: "final"`, `privacyUpdated` auf das Datum der Fassung, bauen, prüfen, deployen.

1. **Cloudflare Web Analytics: tatsächliche Einrichtung (blockiert).**
   Im Dashboard ansehen und mitteilen:
   - *Account → Analytics & Logs → Web Analytics*: Ist `wullschleger.dev` dort aufgeführt? Unter
     *Manage site*: welche Option ist gewählt („Enable“, „Enable, excluding visitor data in the EU“,
     „Enable with JS Snippet installation“ oder „Disable“)?
   - *Workers & Pages → Pages-Projekt → Metrics → Web Analytics*: ein- oder ausgeschaltet?
   - Zone `wullschleger.dev` → *Analytics & Logs → Logpush*: Ist ein Job eingerichtet?

   Empfehlung: **eine** Messung, und zwar die automatische Einrichtung der Zone mit „Enable, excluding
   visitor data in the EU“; die Pages-Projekt-Messung aus (sonst kämen zwei Skripte). Kein zweites
   Analytics-Skript im Code. Nach Bestätigung in `privacy.js` im Abschnitt Web Analytics ergänzen:
   - DE: „Für Besuche, die über Rechenzentren von Cloudflare in der EU laufen, fügt Cloudflare das Skript
     nicht ein; diese Besuche werden nicht gemessen.“
   - EN: „For visits handled by Cloudflare data centres in the EU, Cloudflare does not add the script;
     these visits are not measured.“

   Laut Cloudflare betrifft die Option „die EU“ bzw. Metriken aus EU-Rechenzentren. Schweiz, Norwegen,
   Island, Liechtenstein und Vereinigtes Königreich sind davon nicht ausdrücklich erfasst und werden dann
   gemessen. Werden Besuche aus der EU gemessen (Pages-Projekt-Messung oder „Enable“), braucht es die
   Klärung in Punkt 3 vor der Freigabe; eine Einwilligungslösung müsste das Skript bis zur Zustimmung
   zurückhalten (manuelles Snippet plus Einwilligungsabfrage), was die Website heute nicht kann.
   Nach einer Änderung neu deployen und mit dem Browser prüfen, dass genau ein Beacon geladen wird.

2. **Cloudflare E-Mail-Verschleierung (Empfehlung, kein Blocker für die Rechtslage).**
   Zone → *Scrape Shield → Email Address Obfuscation* (je nach Dashboard-Version unter *Security →
   Settings*). Ausschalten behebt den Hydrierungsfehler und macht `mailto:`-Links ohne JavaScript nutzbar.
   Danach den Absatz zur Verschleierung im Text löschen (DE/EN). Bleibt sie an, bleibt der Absatz.

3. **DSGVO, Einwilligung und EU-Vertretung (Fachperson).** Offene Fragen, exakt formuliert:
   - Ist die DSGVO nach Art. 3 Abs. 2 lit. a anwendbar, weil die App mit Kauf in EU-Storefronts angeboten
     wird und EU-Nutzende Support-Mails schicken? Für die Website: lit. b (Beobachtung des Verhaltens) bei
     zusammengefasster Messung ohne Kennung?
   - Muss nach Art. 27 eine Vertretung in der EU benannt werden, oder greift die Ausnahme nach Art. 27
     Abs. 2 lit. a („gelegentlich“, keine umfangreiche Bearbeitung besonderer Kategorien)? Support-Mails
     können ungefragt Gesundheitsdaten enthalten. *Praktische Auswirkung:* Ist eine Vertretung nötig,
     muss sie vertraglich bestellt und mit Name und Anschrift in der Erklärung genannt werden (Kosten);
     sonst kann der Punkt ersatzlos entfallen.
   - Welche Grundlage gilt für Gesundheitsangaben, die jemand ungefragt in eine Mail schreibt (Art. 9
     Abs. 2)? Der Text behauptet heute keine Einwilligung.
   - Braucht die Messung von Besuchen aus EU/EWR eine Einwilligung nach Art. 5 Abs. 3 ePrivacy-Richtlinie
     bzw. nationalem Recht (EDPB Guidelines 2/2023, Version 2.0 vom 7.10.2024, behandeln auch
     skriptbasierte Übermittlungen)? Nur relevant, wenn Punkt 1 ergibt, dass EU-Besuche gemessen werden.
   - Schweiz: Art. 45c FMG verlangt Information über Bearbeitung auf dem Endgerät und Hinweis auf die
     Ablehnungsmöglichkeit; beides steht im Text (JavaScript aus oder Blocker). Bestätigen lassen.

4. **Persönliche Kontaktadresse auf der Startseite (Betreiberangabe).** Der Kontaktbereich der Startseite
   verlinkt `emanuel.wullschleger@icloud.com` (`src/translations.js`, `profile.email`). Das ist ein anderes
   Postfach (Apple iCloud Mail). Die bestätigte Aufbewahrungsregel gilt nur für App-Support. Nötig: Zweck
   und Aufbewahrung für dieses Postfach festlegen (oder im Kontaktbereich auf `apps@wullschleger.dev`
   bzw. eine andere Infomaniak-Adresse wechseln). Danach Abschnitt 8 oder 9 um einen kurzen Absatz
   ergänzen und den `pending`-Block in „Worum es geht“ entfernen.

Weitere Hinweise ohne Blockade:

- Infomaniak: Die zitierten Bedingungen sind die für den **Mail-Service** (Fassung 27.05.2026). Kurz im
  Infomaniak Manager bestätigen, dass `apps@wullschleger.dev` dieses Produkt nutzt (nicht kSuite oder ein
  Gratis-Postfach mit anderen Bedingungen). Den Auftragsbearbeitungsvertrag (DPA) dort als PDF erzeugen
  und ablegen (Infomaniak Manager, nur für Organisations-Besitzer/Admins).
- Cloudflare: Prüfen, ob der DPA für das Konto akzeptiert ist (cloudflare.com/dpa).
- Bei Schliessen der Punkte das Datum `privacyUpdated` setzen; die Erklärung nennt die Infomaniak-Fassung
  vom 27.05.2026 ausdrücklich, bei einer neuen Fassung anpassen.

## 5. Quellen (abgerufen 23.10.2026)

- Apple App Review Guidelines 1.5 und 5.1.1(i): https://developer.apple.com/app-store/review/guidelines/
- DSG (SR 235.1): https://www.fedlex.admin.ch/eli/cc/2022/491/de (Fedlex lieferte ohne JavaScript keinen
  Text; Artikelverweise aus dem bekannten Gesetzestext: Art. 19 Information, Art. 25 Auskunft, Art. 28
  Herausgabe, Art. 32 Rechtsansprüche, Art. 16 Ausland, Art. 49 EDÖB)
- EDÖB Informationspflicht: https://www.edoeb.admin.ch/de/informationspflicht
- Bundesrat, Angemessenheit USA (DPF), 14.08.2024, in Kraft 15.09.2024:
  https://www.admin.ch/gov/de/start/dokumentation/medienmitteilungen.msg-id-102054.html
- EDPB Guidelines 3/2018 (räumlicher Anwendungsbereich, Art. 27):
  https://www.edpb.europa.eu/sites/default/files/files/file1/edpb_guidelines_3_2018_territorial_scope_after_public_consultation_en.pdf
  (nur referenziert, nicht neu ausgewertet)
- EDPB Guidelines 2/2023 (Art. 5 Abs. 3 ePrivacy), Version 2.0:
  https://www.edpb.europa.eu/documents/guideline/guidelines-22023-on-technical-scope-of-art-53-of-eprivacy-directive_en
- Infomaniak Mail-Service-Bedingungen, „Review of 27/05/2026“ (Art. 2.3, 7.1, 7.2):
  https://welcome.infomaniak.com/api/components/cgu/latest?id=38&locale=en_GB
- Infomaniak DPA: https://www.infomaniak.com/documents/privacy/DPA/Data_Processing_Agreement_(DPA).pdf
  (Datenschutzseite https://www.infomaniak.com/en/legal/confidentiality-policy war nicht abrufbar)
- Cloudflare Web Analytics: https://www.cloudflare.com/web-analytics/
- RUM-Beacon: https://developers.cloudflare.com/speed/observatory/rum-beacon/
- Web Analytics FAQ: https://developers.cloudflare.com/web-analytics/faq/
- Web Analytics Einrichtung: https://developers.cloudflare.com/web-analytics/get-started/ und
  https://developers.cloudflare.com/pages/how-to/web-analytics/
- EU-Ausschluss (Changelog): https://developers.cloudflare.com/changelog/post/2025-02-25-rum-exclude-eu/
- Dimensionen/Metriken: https://developers.cloudflare.com/web-analytics/data-metrics/dimensions/,
  https://developers.cloudflare.com/web-analytics/data-metrics/high-level-metrics/
- NEL: https://developers.cloudflare.com/network-error-logging/
- Cookies: https://developers.cloudflare.com/fundamentals/reference/policies-compliances/cloudflare-cookies/
- Cloudflare Privacy Policy (gültig ab 04.11.2025): https://www.cloudflare.com/privacypolicy/
- Cloudflare DPA: https://www.cloudflare.com/dpa
- App-Fakten: `~/Documents/GitHub/ced-buddy`, Branch `main` @ `1c93127`, nur gelesen:
  `docs/release/privacy-facts.md`, ADR 0006, `docs/decisions/backup-and-local-media.md`,
  `src/core/i18n/de.ts`/`en.ts`, `src/core/app-links.ts`
