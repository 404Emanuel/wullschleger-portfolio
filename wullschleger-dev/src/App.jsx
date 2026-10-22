import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import TechnicalFocus from "./components/TechnicalFocus.jsx";
import Experience from "./components/Experience.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import { translations } from "./translations.js";

/** Start page ("/" in German, "/en" in English), pre-rendered like the app pages. */
export default function App({ route }) {
  const { lang, alternates } = route;
  const t = translations[lang];

  return (
    <>
      <a className="skip-link" href="#main">
        {t.skipLink}
      </a>
      <Header lang={lang} t={t} langLinks={alternates} onHome />
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
