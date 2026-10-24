# Übergabe an das App-Repository `ced-buddy`: Support- und Datenschutz-URLs

Stand: 24.10.2026. Erstellt im Website-Repository (Branch `fix/remove-analytics`); im App-Repository wurde nichts geändert. Diese Datei kann als Notiz ins
App-Repository übernommen werden.

## Status

**Nur lokal vorbereitet.** Nicht gepusht, nicht auf einer Vorschau-URL, nicht veröffentlicht. Die
Datenschutzerklärung ist weiterhin als **Entwurf** gekennzeichnet (ein offener Punkt, siehe unten).
Live ist bis zu einem Deployment die ältere Entwurfsfassung vom 22.10.2026.

## URLs

| Seite | Deutsch | Englisch |
| --- | --- | --- |
| Support | https://wullschleger.dev/apps/ced-buddy/support | https://wullschleger.dev/en/apps/ced-buddy/support |
| Datenschutz | https://wullschleger.dev/apps/ced-buddy/privacy | https://wullschleger.dev/en/apps/ced-buddy/privacy |

- Die URLs sind stabil; bei der Finalisierung ändert sich nur der Inhalt.
- **Stand im App-Repository (nur gelesen, `feat/privacy-support-alignment` @ `c8f2ed1`):** Beide Links
  sind bereits eingebaut (`PUBLIC_PAGES.de`/`.en` in `src/core/app-links.ts`, ADR 0019): Deutsch → DE-URLs,
  alle anderen App-Sprachen → EN-URLs, Öffnen nur auf Tipp im Standardbrowser. Die frühere Aussage hier,
  die Links seien erst nach dem Deployment zu setzen, ist damit überholt. Weiterhin gilt: Kein
  Release-Build und keine Datenschutz-URL in App Store Connect, solange die Seite Entwurf ist (so auch
  in ADR 0019 und `RELEASE.md` der App).
- Die Erklärung gilt gemeinsam für App, E-Mails an `apps@wullschleger.dev` (Support, Feedback, Kontakt)
  und die ganze Website. Anker: `#email`, `#app-daten` / `#app-data`,
  `#rechte` / `#rights`.

## Bestätigte Betreiber- und Mailangaben (im Text verwendet)

- Verantwortlich: Emanuel Wullschleger, Winkelstrasse 21, 4665 Oftringen, Schweiz; Privatperson.
- Support, Datenschutzkontakt und seit 24.10.2026 auch Kontaktadresse der Startseite: `apps@wullschleger.dev`.
- Postfach bei Infomaniak Network SA, Genf; keine automatische Weiterleitung; kein Newsletter, keine
  Werbung; Support bearbeitet Emanuel selbst.
- Laut Infomaniak-Mail-Service-Bedingungen (27.05.2026): Speicherung nur in eigenen Rechenzentren in der
  Schweiz; tägliche Sicherung, sieben Tage aufbewahrt.
- Aufbewahrung: offen so lange nötig; erledigte Anfragen gelöscht, sobald nicht mehr nötig, spätestens
  sechs Monate nach Abschluss; längere Aufbewahrung nur einzelner Nachrichten bei gesetzlicher Pflicht
  oder konkretem Rechtsanspruch; anonymisierte Fehler/Ideen dürfen bleiben; Umsetzung von Hand, keine
  Automatik.
- Unnötig mitgeschickte Gesundheitsangaben: nicht weiterverwenden, ohne Zitat antworten, möglichst rasch
  löschen (nicht bis zur Sechs-Monats-Frist).

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

## Änderungen vom 24.10.2026, die App-Texte betreffen können

Nur Vorschläge für den separaten App-Auftrag; Verschlüsselung, Bundle-ID, Apple-Team und Kauflogik sind
nicht betroffen.

1. **Keine Website-Statistik mehr.** Die Website nutzt seit 24.10.2026 keine Web-Analyse. Der App-Text
   `publicPages.websiteNote` sagt heute „die Website kann Besuche mit Cloudflare Web Analytics statistisch
   auswerten“. Vorschlag: diesen Satzteil streichen. DE: „Öffnet die Website des Entwicklers in deinem
   Browser. Beim Aufruf erhält Cloudflare, das die Website ausliefert, technische Angaben wie deine
   IP-Adresse. Die App gibt dabei nichts aus deinem Tagebuch oder zu deinem Kauf weiter.“ EN entsprechend,
   übrige App-Sprachen ebenso. `privacy-facts.md` der App (Zeile „Website … Cloudflare (Auslieferung, Web
   Analytics)“) ebenfalls anpassen.
2. **Support-Betreff mit App-Version.** Die Erklärung beschreibt jetzt genau, was die App vorbereitet:
   „Hilfe & Kontakt“ → Betreff `CED Buddy <Version>: Hilfe` (sonst nichts ausgefüllt), „Feedback geben“
   → `[CED Buddy][BUG] Feedback` usw., technische Angaben nur mit „Technische Angaben hinzufügen“.
   Ändert sich das in der App, bitte die Website (`privacy.js`, Abschnitt `email`) mitziehen.
3. **Links zur Website** sind in der Erklärung als eigener Absatz beschrieben (Abschnitt 3, „Links zur
   Website“): nur auf Tipp, Standardbrowser ausserhalb der App, URL nur mit Seite und Sprache.
4. **Unnötig mitgeschickte Gesundheitsangaben** werden laut Erklärung nicht weiterverwendet und möglichst
   rasch gelöscht. Der Hinweis im Feedback-Bildschirm („nichts Sensibles“) passt dazu; die App fügt nichts
   automatisch hinzu.
5. **App Store Connect „App-Datenschutz“:** separat prüfen. Website-Einwilligung und veröffentlichte
   Erklärung entscheiden nicht, ob freiwilliges Feedback von der Offenlegung ausgenommen ist
   (siehe `privacy-facts.md` der App).

## Offene Fragen an den App-Auftrag

- **Schlüsselbund nach Deinstallation:** Bleibt der Keychain-Eintrag nach dem Löschen der App bestehen,
  und wird er bei einer Neuinstallation verwendet oder verworfen? Die Website sagt dazu nichts.
- **Backup-Ausschluss auf echtem Gerät** ist laut `privacy-facts.md` noch nicht geprüft. Die Website sagt
  „markiert … als ‚nicht sichern‘“, nicht „ist ausgeschlossen“.
- **„Alle Daten löschen“** gibt es in der App nicht; die Website nennt nur Einzellöschung und App-Löschung.

## Offene Punkte der Erklärung (blockieren die Datenschutz-URL)

Details: `docs/apps/privacy-operations.md`, Abschnitte 2 und 5.

1. EU-Vertretung nach Art. 27 DSGVO bestellen oder Ausnahme qualifiziert bestätigen lassen
   (`docs/apps/eu-representative.md`). *Handlung:* Emanuel.

## Quellen und Datum

Technische Prüfungen und Quellen vom 23. und 24.10.2026: `docs/apps/privacy-operations.md`,
Abschnitte 3, 4 und 7. App-Fakten aus `ced-buddy` `feat/privacy-support-alignment` @ `c8f2ed1`
(nur gelesen).
