import { useEffect, useState } from "react";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import TechnicalFocus from "./components/TechnicalFocus.jsx";
import Experience from "./components/Experience.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import { translations } from "./translations.js";
import { readStoredLang, storeLang } from "./lang.js";

export default function App() {
  const [lang, setLang] = useState(() => readStoredLang() ?? "de");
  const t = translations[lang];

  useEffect(() => {
    document.documentElement.lang = lang;
    storeLang(lang);
  }, [lang]);

  // This page renders in the browser, after the browser has already tried to
  // jump to the #section of the URL (e.g. "/#contact" from an app page).
  // Jump once more now that the section exists.
  useEffect(() => {
    const id = decodeURIComponent(window.location.hash.slice(1));
    if (!id) return;
    const frame = requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView();
    });
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <>
      <a className="skip-link" href="#main">
        {t.skipLink}
      </a>
      <Header lang={lang} onLangChange={setLang} t={t} onHome />
      <main id="main">
        <Hero t={t} />
        <About t={t} />
        <TechnicalFocus t={t} />
        <Experience t={t} />
        <Projects t={t} lang={lang} />
        <Contact t={t} />
      </main>
      <Footer t={t} />
    </>
  );
}
