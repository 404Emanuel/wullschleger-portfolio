import { useEffect, useState } from "react";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import TechnicalFocus from "./components/TechnicalFocus.jsx";
import Experience from "./components/Experience.jsx";
import CurrentlyExploring from "./components/CurrentlyExploring.jsx";
import Contact from "./components/Contact.jsx";
import { translations } from "./translations.js";

function getInitialLang() {
  try {
    const saved = localStorage.getItem("lang");
    if (saved === "de" || saved === "en") return saved;
  } catch {
    /* localStorage unavailable — fall back to default */
  }
  return "de";
}

export default function App() {
  const [lang, setLang] = useState(getInitialLang);
  const t = translations[lang];

  useEffect(() => {
    document.documentElement.lang = lang;
    try {
      localStorage.setItem("lang", lang);
    } catch {
      /* ignore */
    }
  }, [lang]);

  return (
    <>
      <a className="skip-link" href="#main">
        {t.skipLink}
      </a>
      <Header lang={lang} onLangChange={setLang} t={t} />
      <main id="main">
        <Hero t={t} />
        <About t={t} />
        <TechnicalFocus t={t} />
        <Experience t={t} />
        <CurrentlyExploring t={t} />
        <Contact t={t} />
      </main>
      <footer className="site-footer">
        <div className="container footer-inner">
          <p>© {new Date().getFullYear()} Emanuel Wullschleger · wullschleger.dev</p>
          <p className="footer-tech">{t.footer.built}</p>
        </div>
      </footer>
    </>
  );
}
