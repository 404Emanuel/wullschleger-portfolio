import { useEffect } from "react";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import { translations } from "../translations.js";
import { storeLang } from "../lang.js";

/**
 * Frame of every pre-rendered page: skip link, header with language links,
 * main content and footer. The URL decides the language; the choice is also
 * remembered so the start page opens in the same language.
 */
export default function PageShell({ route, current, extraLinks, className = "", children }) {
  const { lang, alternates } = route;
  const t = translations[lang];

  useEffect(() => {
    storeLang(lang);
  }, [lang]);

  return (
    <>
      <a className="skip-link" href="#main">
        {t.skipLink}
      </a>
      <Header lang={lang} t={t} langLinks={alternates ?? undefined} current={current} />
      <main id="main" className={className}>
        {children}
      </main>
      <Footer t={t} extraLinks={extraLinks} />
    </>
  );
}
