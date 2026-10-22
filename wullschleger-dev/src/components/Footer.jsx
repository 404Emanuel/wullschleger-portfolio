import { profile } from "../translations.js";

/** Site footer. `extraLinks` adds a row of page-specific links (e.g. app support). */
export default function Footer({ t, extraLinks }) {
  return (
    <footer className="site-footer">
      {extraLinks && (
        <div className="container footer-extra">
          <nav className="footer-app-links" aria-label={extraLinks.label}>
            {extraLinks.items.map(({ href, label }) => (
              <a key={href} href={href}>
                {label}
              </a>
            ))}
          </nav>
        </div>
      )}
      <div className="container footer-inner">
        {/* The year comes from the build on pre-rendered pages and from the
            browser after hydration; they only differ around New Year. */}
        <p suppressHydrationWarning>© {new Date().getFullYear()} Emanuel Wullschleger · wullschleger.dev</p>
        <nav className="footer-links" aria-label="Social">
          <a href={profile.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href={profile.gdev} target="_blank" rel="noopener noreferrer">
            g.dev
          </a>
        </nav>
        <a
          className="footer-source"
          href={profile.repo}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={t.footer.sourceLabel}
          title={t.footer.sourceLabel}
        >
          <span aria-hidden="true">{"</>"}</span> {t.footer.source}
        </a>
      </div>
    </footer>
  );
}
