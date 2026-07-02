export default function Header({ lang, onLangChange, t }) {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <a href="#hero" className="wordmark">
          wullschleger<span>.dev</span>
        </a>

        <nav className="site-nav" aria-label={t.nav.label}>
          <a href="#about">{t.nav.about}</a>
          <a href="#focus">{t.nav.focus}</a>
          <a href="#experience">{t.nav.experience}</a>
          <a href="#contact">{t.nav.contact}</a>
        </nav>

        <div className="lang-toggle" role="group" aria-label={t.langToggle}>
          <button
            type="button"
            aria-pressed={lang === "de"}
            aria-label="Deutsch"
            onClick={() => onLangChange("de")}
          >
            DE
          </button>
          <button
            type="button"
            aria-pressed={lang === "en"}
            aria-label="English"
            onClick={() => onLangChange("en")}
          >
            EN
          </button>
        </div>
      </div>
    </header>
  );
}
