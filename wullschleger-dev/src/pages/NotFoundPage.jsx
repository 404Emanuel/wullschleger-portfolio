import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import { translations } from "../translations.js";
import { notFoundContent } from "../apps/content.js";

/**
 * 404 page. Served by Cloudflare Pages for every unknown path, so it cannot
 * know the language from the URL: it shows German and English.
 */
export default function NotFoundPage() {
  const t = translations.de;
  return (
    <>
      <a className="skip-link" href="#main">
        {t.skipLink}
      </a>
      <Header lang="de" t={t} current={null} showLang={false} />
      <main id="main" className="not-found">
        <div className="container not-found-inner">
          <p className="not-found-code">404</p>
          {["de", "en"].map((lang) => {
            const c = notFoundContent[lang];
            const Heading = lang === "de" ? "h1" : "h2";
            return (
              <section key={lang} lang={lang} className="not-found-block">
                <Heading className="page-title">{c.title}</Heading>
                <p className="page-lead">{c.text}</p>
                <div className="app-actions">
                  <a className="btn btn-ghost" href="/">
                    {c.home}
                  </a>
                  <a className="text-link" href={lang === "en" ? "/en/apps" : "/apps"}>
                    {c.apps}
                  </a>
                </div>
              </section>
            );
          })}
        </div>
      </main>
      <Footer t={t} />
    </>
  );
}
