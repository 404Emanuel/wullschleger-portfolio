# Übergabe an das App-Repository `ced-buddy`: Support- und Datenschutz-URLs

Stand: 23.10.2026. Erstellt im Website-Repository (Branch `feat/app-privacy-finalization`); im
App-Repository wurde nichts geändert. Diese Datei kann als Notiz ins App-Repository übernommen werden.

## Status

**Nur lokal vorbereitet.** Nicht gepusht, nicht auf einer Vorschau-URL, nicht veröffentlicht. Die
Datenschutzerklärung ist weiterhin als **Entwurf** gekennzeichnet (vier offene Punkte, siehe unten).
Live ist bis zu einem Deployment die ältere Entwurfsfassung vom 22.10.2026.

## URLs

| Seite | Deutsch | Englisch |
| --- | --- | --- |
| Support | https://wullschleger.dev/apps/ced-buddy/support | https://wullschleger.dev/en/apps/ced-buddy/support |
| Datenschutz | https://wullschleger.dev/apps/ced-buddy/privacy | https://wullschleger.dev/en/apps/ced-buddy/privacy |

- Die URLs sind stabil; bei der Finalisierung ändert sich nur der Inhalt.
- `PUBLIC_PAGES.support` kann nach dem Deployment gesetzt werden. `PUBLIC_PAGES.privacyPolicy` und die
  Datenschutz-URL in App Store Connect erst, wenn die Erklärung final ist (kein Entwurfshinweis mehr).
- Sprachwahl wie bisher vorgeschlagen: App-Sprache Deutsch → DE-URLs, sonst EN-URLs.
- Die Erklärung gilt jetzt gemeinsam für App, Support-Mails und die ganze Website wullschleger.dev
  (getrennte Abschnitte). Anker für direkte Verweise: `#email` (Support-Mails), `#app-daten` /
  `#app-data`, `#rechte` / `#rights`.

## Bestätigte Betreiber- und Mailangaben (im Text verwendet)

- Verantwortlich: Emanuel Wullschleger, Winkelstrasse 21, 4665 Oftringen, Schweiz; Privatperson.
- Support und Datenschutzkontakt: `apps@wullschleger.dev`.
- Postfach bei Infomaniak Network SA, Genf; keine automatische Weiterleitung; kein Newsletter, keine
  Werbung; Support bearbeitet Emanuel selbst.
- Laut Infomaniak-Mail-Service-Bedingungen (27.05.2026): Speicherung nur in eigenen Rechenzentren in der
  Schweiz; tägliche Sicherung, sieben Tage aufbewahrt.
- Aufbewahrung: offen so lange nötig; erledigte Anfragen gelöscht, sobald nicht mehr nötig, spätestens
  sechs Monate nach Abschluss; längere Aufbewahrung nur einzelner Nachrichten bei gesetzlicher Pflicht
  oder konkretem Rechtsanspruch; anonymisierte Fehler/Ideen dürfen bleiben; Umsetzung von Hand, keine
  Automatik.

## Abweichungen von `docs/release/privacy-facts.md` und den bisherigen Texten

1. **„Nie dabei“ ersetzt.** Website sagt jetzt: Die App fügt Spitzname, Tagebuch, Fotos,
   Gesundheitsangaben, Kaufdaten, Gerätekennungen und Standort *nicht automatisch* hinzu; was Nutzende
   selbst schreiben, kommt an. Vorschlag für `privacy-facts.md` und App-Texte: gleiche Formulierung.
2. **Foto-Entwurf erwähnt.** Die Website nennt jetzt die Ausnahme aus ADR 0006 / `backup-and-local-media.md`:
   verkleinertes Foto unverschlüsselt im Cache, solange ein Mahlzeit-Entwurf offen ist; gelöscht beim
   Speichern/Verwerfen, spätestens beim nächsten Start.
3. **Schlüssel:** „an dieses Gerät gebunden, gehen nicht auf ein anderes Gerät über“ (Keychain-Klasse
   `AFTER_FIRST_UNLOCK_THIS_DEVICE_ONLY`) statt „nicht in Geräte-Backups“.
4. **Temporäre Dateien:** PDF „beim Schliessen der Ansicht, spätestens beim nächsten Start“ gelöscht;
   Sicherungsdatei beim Teilen verschlüsselt und danach gelöscht.
5. **Import:** Datei wird mit Passwort geöffnet, geprüft, Inhalt angezeigt; ersetzt erst nach Bestätigung;
   nur CED-Buddy-Sicherungen. Kein ZIP-Format behauptet.
6. **Gespeicherte Mahlzeiten** (seit `8a5903e`) als lokale Daten in der Liste ergänzt.
7. **App-Löschung:** „iOS entfernt die App mit ihren gespeicherten Einträgen“; keine Aussage zu
   physischem Überschreiben und keine Aussage zum Schlüsselbund-Eintrag.

## Offene Fragen an den App-Auftrag

- **Schlüsselbund nach Deinstallation:** Bleibt der Keychain-Eintrag nach dem Löschen der App bestehen,
  und wird er bei einer Neuinstallation verwendet oder verworfen? Die Website sagt dazu nichts; bitte
  nur klären, falls die App-Texte etwas dazu sagen sollen.
- **Backup-Ausschluss auf echtem Gerät** ist laut `privacy-facts.md` noch nicht geprüft
  (Gerätecheckliste Abschnitt 8). Die Website sagt „markiert … als ‚nicht sichern‘“, nicht „ist
  ausgeschlossen“.
- **„Alle Daten löschen“** gibt es in der App nicht; die Website nennt nur Einzellöschung und App-Löschung.
  Falls eine Gesamtlöschung kommt, Website-Text anpassen.
- **App Store Connect „App-Datenschutz“:** Der Vorschlag „Keine Daten erhoben“ ist weiterhin ungeprüft.
  Neu: Die Website beschreibt jetzt, wie Support-Mails aufbewahrt werden. Ob Apple das als
  „Kontaktinformationen“/„Kundensupport“ zählt, mit Apples aktueller Definition entscheiden.
- In-App-Datenschutzseite (`settings.privacy*`): passt inhaltlich. Optional ein Satz zur Aufbewahrung
  der Mails oder ein Link auf `#email`, sobald die URL final ist.

## Offene Punkte der Erklärung (blockieren die Datenschutz-URL)

Details und Dashboard-Pfade: `docs/apps/privacy-operations.md`, Abschnitt 4.

1. Cloudflare Web Analytics: tatsächliche Einrichtung und Region-Option bestätigen (Dashboard), Logpush
   bestätigen. *Handlung:* Emanuel sieht im Cloudflare-Dashboard nach; dann einen Satz ergänzen.
2. DSGVO-Anwendbarkeit, Art.-27-Vertretung, Grundlage für ungefragte Gesundheitsangaben, Einwilligung
   für Messung aus EU/EWR. *Handlung:* Fachperson fragen; Ergebnis in Text übernehmen.
3. Persönliche Mailadresse auf der Startseite (iCloud): Zweck und Aufbewahrung festlegen oder Adresse
   ändern. *Handlung:* Emanuel entscheidet.
4. Empfehlung ohne Blockade: Cloudflare E-Mail-Verschleierung ausschalten (verursacht live einen
   Hydrierungsfehler auf den Datenschutzseiten).

## Quellen und Datum

Technische Prüfung (live und lokal) sowie Quellen vom 23.10.2026: siehe
`docs/apps/privacy-operations.md`, Abschnitte 2, 3 und 5. App-Fakten aus `ced-buddy` `main` @ `1c93127`
(nur gelesen).
