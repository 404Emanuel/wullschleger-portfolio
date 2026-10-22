// The language chosen on the start page is remembered in this browser only
// (localStorage "lang"). Pre-rendered pages take their language from the URL
// and only update this value, so the start page opens in the same language.

export function readStoredLang() {
  try {
    const saved = localStorage.getItem("lang");
    if (saved === "de" || saved === "en") return saved;
  } catch {
    /* localStorage unavailable */
  }
  return null;
}

export function storeLang(lang) {
  try {
    localStorage.setItem("lang", lang);
  } catch {
    /* ignore */
  }
}
