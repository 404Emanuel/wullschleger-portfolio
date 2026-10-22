import PageShell from "./PageShell.jsx";
import Screenshot from "./Screenshot.jsx";
import { AppIcon, StatusLabel } from "./AppIdentity.jsx";
import { cedBuddyLinks } from "./cedBuddyLinks.js";
import { ArrowRightIcon } from "../components/Icons.jsx";
import { appsContent } from "../apps/content.js";
import { cedBuddyContent, screens } from "../apps/ced-buddy/content.js";

export default function AppsPage({ route }) {
  const { lang } = route;
  const c = appsContent[lang];
  const links = cedBuddyLinks(lang);

  return (
    <PageShell route={route} current="apps" className="apps-page">
      <section className="page-hero">
        <div className="hero-glow" aria-hidden="true"></div>
        <div className="container page-hero-inner">
          <p className="hero-eyebrow">{c.eyebrow}</p>
          <h1 className="page-title">{c.title}</h1>
          <p className="page-lead">{c.intro}</p>
        </div>
      </section>

      <section className="section section--tight" aria-labelledby="app-ced-buddy">
        <div className="container">
          <article className="app-showcase ced">
            <div className="app-showcase-copy">
              <div className="app-identity">
                <AppIcon size={72} eager />
                <div>
                  <p className="app-kicker">{c.card.kicker}</p>
                  <h2 id="app-ced-buddy" className="app-name">
                    CED Buddy
                  </h2>
                </div>
              </div>
              <StatusLabel lang={lang} />
              <p className="app-showcase-desc">{c.card.desc}</p>

              <dl className="app-facts">
                {c.card.facts.map(({ label, value }) => (
                  <div key={label}>
                    <dt>{label}</dt>
                    <dd>{value}</dd>
                  </div>
                ))}
              </dl>

              <div className="app-actions">
                <a className="btn btn-ced" href={links.product}>
                  {c.card.cta}
                  <ArrowRightIcon />
                </a>
                <a className="text-link" href={links.support}>
                  {c.card.support}
                </a>
                <a className="text-link" href={links.privacy}>
                  {c.card.privacy}
                </a>
              </div>
            </div>

            <div className="app-showcase-visual">
              <Screenshot
                set={screens.today}
                lang={lang}
                alt={cedBuddyContent[lang].alt.today}
                sizes="(max-width: 860px) 260px, 300px"
                eager
              />
            </div>
          </article>

          <p className="apps-developer">{c.developer}</p>
        </div>
      </section>
    </PageShell>
  );
}
