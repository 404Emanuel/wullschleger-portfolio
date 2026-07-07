import { useState } from "react";
import { CloseIcon, MenuIcon } from "./Icons.jsx";

export default function Header({ lang, onLangChange, t }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    ["#about", t.nav.about],
    ["#focus", t.nav.focus],
    ["#experience", t.nav.experience],
    ["#contact", t.nav.contact],
  ];

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a href="#hero" className="wordmark" onClick={() => setMenuOpen(false)}>
          wullschleger<span>.dev</span>
        </a>

        <nav className="site-nav" aria-label={t.nav.label}>
          {links.map(([href, label]) => (
            <a key={href} href={href}>
              {label}
            </a>
          ))}
        </nav>

        <div className="header-tools">
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

          <button
            type="button"
            className="nav-toggle"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? t.nav.menuClose : t.nav.menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav id="mobile-nav" className="mobile-nav" aria-label={t.nav.label}>
          {links.map(([href, label]) => (
            <a key={href} href={href} onClick={() => setMenuOpen(false)}>
              {label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
