import { useRef, useState } from "react";
import { CloseIcon, MenuIcon } from "./Icons.jsx";
import { homeHref, localePath } from "../routes.js";

/**
 * Site header for the start page and the pre-rendered pages.
 *
 * - On the start page the language toggle switches the text in place
 *   (`onLangChange`). On other pages it is a pair of real links to the same
 *   page in the other language (`langLinks`), so the URL decides the language.
 * - The mobile menu is a <details> element: it opens without JavaScript, and
 *   with JavaScript it also closes on a link tap and on Escape.
 */
export default function Header({ lang, t, onHome = false, onLangChange, langLinks, current, showLang = true }) {
  const menuRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { key: "about", href: homeHref("about", onHome), label: t.nav.about },
    { key: "focus", href: homeHref("focus", onHome), label: t.nav.focus },
    { key: "experience", href: homeHref("experience", onHome), label: t.nav.experience },
    { key: "projects", href: homeHref("projects", onHome), label: t.nav.projects },
    { key: "apps", href: localePath("/apps", lang), label: t.nav.apps },
    { key: "contact", href: homeHref("contact", onHome), label: t.nav.contact },
  ];

  const closeMenu = () => {
    if (menuRef.current) menuRef.current.open = false;
  };

  const onMenuKeyDown = (event) => {
    if (event.key === "Escape" && menuRef.current?.open) {
      closeMenu();
      menuRef.current.querySelector("summary")?.focus();
    }
  };

  const navLinks = (onClick) =>
    links.map(({ key, href, label }) => (
      <a
        key={key}
        href={href}
        onClick={onClick}
        aria-current={current === key ? "page" : undefined}
      >
        {label}
      </a>
    ));

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a href={onHome ? "#hero" : "/"} className="wordmark" title={onHome ? undefined : t.nav.home}>
          wullschleger<span>.dev</span>
        </a>

        <nav className="site-nav" aria-label={t.nav.label}>
          {navLinks()}
        </nav>

        <div className="header-tools">
          {showLang && (
          <div className="lang-toggle" role="group" aria-label={t.langToggle}>
            {langLinks ? (
              <>
                <a
                  href={langLinks.de}
                  hrefLang="de"
                  lang="de"
                  aria-label="Deutsch"
                  aria-current={lang === "de" ? "true" : undefined}
                >
                  DE
                </a>
                <a
                  href={langLinks.en}
                  hrefLang="en"
                  lang="en"
                  aria-label="English"
                  aria-current={lang === "en" ? "true" : undefined}
                >
                  EN
                </a>
              </>
            ) : (
              <>
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
              </>
            )}
          </div>
          )}

          <details
            className="nav-menu"
            ref={menuRef}
            onToggle={(event) => setMenuOpen(event.currentTarget.open)}
            onKeyDown={onMenuKeyDown}
          >
            <summary className="nav-toggle" aria-label={menuOpen ? t.nav.menuClose : t.nav.menuOpen}>
              <span className="nav-toggle-icon nav-toggle-icon--open">
                <MenuIcon />
              </span>
              <span className="nav-toggle-icon nav-toggle-icon--close">
                <CloseIcon />
              </span>
            </summary>
            <nav className="mobile-nav" aria-label={t.nav.label}>
              {navLinks(closeMenu)}
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}
