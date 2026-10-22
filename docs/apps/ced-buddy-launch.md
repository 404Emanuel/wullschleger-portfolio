# CED Buddy auf wullschleger.dev – Übergabe für den Launch

Stand: 22.10.2026, Branch `feat/apps-section`. **Geplant, noch nicht veröffentlicht:** Nichts davon ist
gemergt, gepusht oder deployt. Die URLs unten existieren erst nach einem Deployment.

## 1. URLs

| Seite | Deutsch | Englisch | Status |
| --- | --- | --- | --- |
| Apps-Übersicht | https://wullschleger.dev/apps | https://wullschleger.dev/en/apps | fertig |
| Produktseite | https://wullschleger.dev/apps/ced-buddy | https://wullschleger.dev/en/apps/ced-buddy | fertig |
| Support | https://wullschleger.dev/apps/ced-buddy/support | https://wullschleger.dev/en/apps/ced-buddy/support | fertig |
| Datenschutz | https://wullschleger.dev/apps/ced-buddy/privacy | https://wullschleger.dev/en/apps/ced-buddy/privacy | **Entwurf** (siehe 4) |

- Die URL bestimmt die Sprache. Es gibt keine Weiterleitung nach Gerät, Land oder gespeicherter Sprache.
- Kanonisch ohne Schrägstrich am Ende. `…/support/` und `…/support.html` leiten mit 308 auf die
  kanonische URL um (Cloudflare Pages, lokal mit `wrangler pages dev` geprüft).
- Die Datenschutzseiten sind erreichbar, solange sie Entwurf sind aber `noindex`, nicht in der
  Sitemap und zeigen einen sichtbaren Entwurfshinweis.

## 2. Links für den App-Auftrag (`ced-buddy`)

In `src/core/app-links.ts` der App eintragen, **erst nach dem Deployment** (und den Datenschutz-Link erst,
wenn Abschnitt 4 erledigt ist):

```ts
export const PUBLIC_PAGES = {
  support: 'https://wullschleger.dev/apps/ced-buddy/support',
  privacyPolicy: 'https://wullschleger.dev/apps/ced-buddy/privacy',
};
```

- Die App hat 19 Sprachen, die Website nur Deutsch und Englisch. Vorschlag: Für App-Sprache Deutsch die
  deutschen URLs, für alle anderen die englischen (`/en/apps/ced-buddy/support`,
  `/en/apps/ced-buddy/privacy`). Das braucht in der App eine kleine Auswahl nach Sprache; mit einem
  einzelnen Wert die deutschen URLs nehmen (die Seiten verlinken die englische Fassung oben rechts).
- App Store Connect: Support-URL und Datenschutz-URL wie oben (Apple verlangt einen Support-Link mit
  aktuellen Kontaktangaben und eine öffentlich erreichbare Datenschutz-URL; Review Guidelines 5.1.1).
  Optional als Marketing-URL die Produktseite.
- Mail-Betreffzeilen der Website entsprechen denen des In-App-Feedbacks (`[CED Buddy][BUG] Feedback`,
  `[CED Buddy][IMPROVEMENT] Feedback`, `[CED Buddy][FEATURE] Feedback`); allgemeine Fragen kommen als
  `CED Buddy: Frage` / `CED Buddy: Question`.

## 3. Werte für den App-Store-Launch

Alles in `wullschleger-dev/src/apps/apps.js`:

| Wert | Heute | Beim Launch |
| --- | --- | --- |
| `status` | `"coming_soon"` | `"available"` |
| `appStoreUrl` | `""` | echter Link `https://apps.apple.com/…/id…` |
| `appStoreBadge` | Pfade, Dateien fehlen | offizielle Badges „Download on the App Store“ (DE/EN) aus Apples Marketing-Ressourcen unverändert nach `public/apps/badges/app-store-de.svg` und `…-en.svg` |
| `privacyStatus` | `"draft"` | `"final"`, sobald Abschnitt 4 erledigt ist |
| `privacyUpdated` | `"2026-10-22"` | Datum der finalen Fassung |

- Der Build bricht ab, wenn `status: "available"` ohne gültigen Link oder ohne Badge-Dateien gesetzt ist,
  und wenn `privacyStatus: "final"` gesetzt ist, solange im Datenschutztext noch offene Punkte stehen
  (`scripts/prerender.mjs`).
- Mit `available` zeigen Hero und Abschluss der Produktseite das Badge, der Status lautet „Für iPhone im
  App Store“. Texte, die „in Vorbereitung“ oder „noch nicht im App Store“ sagen, sind an den Status
  gebunden (Produktseite) oder stehen in `src/apps/content.js` (`card.facts` „Stand“) und in
  `src/translations.js` (`projects.featured.status`): diese zwei beim Launch von Hand anpassen.
- Preis: Die Website nennt bewusst keinen Betrag („Den aktuellen Preis siehst du vor dem Kauf in der
  App“). So bleibt es auch nach dem Launch richtig, wenn Apple je Land andere Preise zeigt.
- Kein Google-Play-Badge, kein Android-Datum.

## 4. Offene Angaben (blockieren nur die Datenschutz-URL)

Im Datenschutztext als „Offen“ markiert (`src/apps/ced-buddy/privacy.js`, Blöcke `pending`):

1. **Angaben zum Verantwortlichen:** heute nur Name, „Privatperson, Schweiz“ und E-Mail. Ob eine
   Postanschrift nötig ist (CH/EU) und ob eine Vertretung in der EU nötig ist, prüfen lassen.
2. **E-Mail-Anbieter** für `apps@wullschleger.dev` (wer, wo die Daten liegen).
3. **Aufbewahrungsdauer** der Support- und Feedback-E-Mails.
4. **Cloudflare-Einstellungen bestätigen:** Web Analytics aus? Welche Protokolle? Der Live-Server
   sendet heute die Header `NEL` und `Report-To` (Network Error Logging von Cloudflare); im HTML ist kein
   Analytics-Skript eingebunden, und es werden keine Cookies gesetzt (geprüft am 22.10.2026 per
   `curl` auf https://wullschleger.dev).
5. **DSGVO:** ob und wie weit sie anwendbar ist; dann Rechtsgrundlagen, weitere Rechte und
   Aufsichtsbehörden ergänzen. Fachperson.

Der Text ist aus den Datenflüssen abgeleitet, **keine Rechtsprüfung**. Rechte nach DSG (Auskunft
Art. 25, Datenherausgabe Art. 28, Anzeige beim EDÖB Art. 49) sind nach den Angaben des EDÖB
(edoeb.admin.ch, „Meine Rechte kennen und durchsetzen“) formuliert.

**Website als Ganzes:** Die App-Erklärung deckt nur die Seiten unter `/apps` ab. Für den Rest von
wullschleger.dev gibt es keine Datenschutzerklärung und kein Impressum. Ob das für eine private
Portfolio-Seite nötig ist, ist eine eigene Entscheidung; die technischen Fakten (Cloudflare Pages, keine
Cookies, Sprache in localStorage, Schriften lokal) stehen im Abschnitt „Besuch dieser Website“ und
liessen sich übernehmen.

## 5. Quelle der App-Fakten und Bilder

- App-Repository `~/Documents/GitHub/ced-buddy`, nur gelesen, Branch `feat/feedback`,
  Commit **`5f80835`** (22.10.2026). Während der Arbeit hatte das Repository uncommittete Änderungen
  aus dem parallelen App-Auftrag (Kauf-Walkthroughs, `report-unlock-screen.tsx`); davon ist nichts
  übernommen.
- Nachgeprüft bis `f8250fb` (spätere Commits desselben Tages): nur interne Korrekturen am Kaufablauf
  und Tests. Texte, `privacy-facts.md` und `app-links.ts` sind unverändert; die Website-Aussagen
  bleiben gültig.
- Fakten aus: `docs/release/privacy-facts.md`, `docs/RELEASE.md`, `docs/STATUS.md`, ADR 0006/0007/
  0015/0016/0017, `src/core/i18n/de.ts` und `en.ts` (Menübezeichnungen), `src/core/app-links.ts`,
  `src/ui/tokens.ts` (Farben Koralle `#F0907F` und Mint `#7FD1C4` aus dem dunklen App-Thema).
- Bilder, erzeugt mit `wullschleger-dev/scripts/ced-buddy-assets.sh` (WebP, 360 px und Originalbreite
  bis 720 px):

| Website-Datei | Quelle im App-Repo | UI-Sprache |
| --- | --- | --- |
| `icon-{96,192,384}.webp`, `og.jpg` | `assets/images/icon.png` | – |
| `buddy-{240,480}.webp` | `assets/mascot/buddy-good@3x.png` | – |
| `screens/today-de` | `docs/design/screenshots/iphone-t-light-04-today-top.png` | DE |
| `screens/today-en` | `…/iphone-l-en-ltr-after-ar-01-today.png` | EN |
| `screens/check-in-mood-de` | `…/iphone-t-light-01-check-in-mood.png` | DE |
| `screens/check-in-symptoms-de` | `…/iphone-t-light-02-check-in-symptoms.png` | DE |
| `screens/history-de` / `history-en` | `…/history-v2-01-days-many-years.png` / `…/history-v2-17-english.png` | DE / EN |
| `screens/overview-month-de` | `…/overview-v2-02-month-calendar.png` | DE |
| `screens/overview-report-de` | `…/overview-v2-01-report-card-month.png` | DE |
| `screens/report-options-de` / `-en` | `…/iphone-unlock-02-report-locked.png` / `…/iphone-en-purchase-report-locked.png` | DE / EN |

- Jedes Bild angesehen: nur erfundene Daten (Spitznamen „Lisa“/„Mia“, Notizen „Erfundene …“), keine
  Geräte-IDs, Kaufbelege oder Debug-Ausgaben. Der Hinweis „Testversion · Bitte nur erfundene Testdaten
  eingeben.“ ist in den Ansichten „Heute“ sichtbar und **bleibt drin**; die Bildunterschrift sagt
  „Ansichten aus der aktuellen Testversion, mit erfundenen Daten“.
- Bewusst nicht verwendet: Freischaltungsansichten mit Preis („Freischalten für 4,90 CHF“ stammt aus der
  lokalen StoreKit-Simulation), die Beispiel-PDFs (Testtexte darin, teils umfangreicher Jahresbericht),
  ältere Berichtsansichten aus der Zeit vor dem Kauf.

### Benötigte Aufnahmen (vor dem Launch ersetzen)

Die heutigen Bilder sind teils klein (414 px breit) und zeigen den Testversion-Hinweis. Für den Launch
nach dem Block „Testversion-Hinweis entfernen“ der App, mit erfundenen Daten, iPhone 17 (1206 px breit):

1. Heute nach dem Check-in, je DE und EN.
2. Check-in Schritt 1 (Befinden) und Schritt 2 (Beschwerden), je DE und EN (EN fehlt heute ganz).
3. Verlauf mit markierten Einträgen, je DE und EN (EN heute mit deutschen Beispielnotizen).
4. Übersicht Monat mit Kalender und die Karte „Für deinen Arzttermin“, je DE und EN.
5. Bericht für Arzttermin: Zeitraum/Inhalte und Vorschau, je DE und EN, **ohne Preis**.

Dann `APP_REPO=… npm run assets:ced-buddy` mit angepasster Liste und die Tabelle oben aktualisieren.

## 6. Hosting und Routing

- Hosting: Cloudflare Pages (Live-Header geprüft). Auf `main` liegt keine Pages- oder Wrangler-Konfiguration;
  der Branch `origin/cloudflare/workers-autoconfig` (Cloudflare-Autokonfiguration) ist nicht gemergt und
  wurde nicht angefasst. **Annahme:** Pages baut bei jedem Push auf `main` automatisch und veröffentlicht.
  Bitte im Cloudflare-Dashboard prüfen, bevor gepusht wird; ein Push dieses Branches könnte eine
  Vorschau-URL (`*.pages.dev`) erzeugen.
- Build-Befehl bleibt `npm run build` in `wullschleger-dev/`, Ausgabe `dist/`. Neu im Build: ein
  SSR-Build und `scripts/prerender.mjs`, das statisches HTML pro Seite schreibt
  (`dist/apps/ced-buddy/support.html` usw.), dazu `404.html` und `sitemap.xml`.
- **Verhaltensänderung:** Mit `404.html` beendet Cloudflare Pages den SPA-Modus. Unbekannte Pfade liefern
  jetzt 404 statt der Startseite. Die Startseite `/`, Anker wie `/#contact`, das CV-PDF und alle
  bestehenden Dateien funktionieren unverändert.
- `public/_redirects`: `/en` und `/en/` leiten auf `/` (302), weil es keine englische Startseite unter
  `/en` gibt.
- `public/robots.txt` mit Sitemap-Verweis. Cloudflare ergänzt live eine eigene verwaltete robots.txt
  („Content-Signal“); laut Cloudflare wird die verwaltete Fassung der eigenen Datei vorangestellt. Nach dem
  Deployment kontrollieren.
- Schriften: Inter und JetBrains Mono jetzt lokal (`@fontsource`, OFL 1.1, Lizenztexte unter `/fonts/`);
  Google-Fonts-Stylesheet und Preconnects sind entfernt. Hinweis: Der Live-Server sendet heute zusätzlich
  einen `Link: <https://fonts.googleapis.com>; rel=preconnect`-Header (vermutlich Cloudflare „Early Hints“
  aus dem alten HTML). Nach dem Deployment prüfen, ob er verschwindet.
- Keine strukturierten Daten (`SoftwareApplication`): ohne Angebot im Store und ohne Bewertungen kein
  Nutzen; beim Launch mit echtem Store-Link neu bewerten.

## 7. Lokal ansehen

```bash
cd wullschleger-dev
npm ci
npm run build
npx wrangler@4.140.0 pages dev dist --port 8788   # Cloudflare-Pages-Verhalten (Routing, 404, Redirects)
# oder: npm run preview                           # Vite-Vorschau, ohne _redirects/404-Verhalten
```

Dann http://127.0.0.1:8788/apps/ced-buddy öffnen.
