import PageShell from "./PageShell.jsx";
import Screenshot from "./Screenshot.jsx";
import { AppIcon, AppStoreBadge, StatusLabel } from "./AppIdentity.jsx";
import { cedBuddyFooterLinks, cedBuddyLinks } from "./cedBuddyLinks.js";
import {
  ArrowRightIcon,
  CheckIcon,
  ChevronDownIcon,
  DocumentIcon,
  PhoneIcon,
  UserOffIcon,
} from "../components/Icons.jsx";
import { cedBuddy, isAvailable } from "../apps/apps.js";
import { appsContent } from "../apps/content.js";
import { cedBuddyContent, screens } from "../apps/ced-buddy/content.js";

const FACT_ICONS = [UserOffIcon, PhoneIcon, DocumentIcon];
const FLOW_ID = { de: "ablauf", en: "how-it-works" };

export default function CedBuddyPage({ route }) {
  const { lang } = route;
  const c = cedBuddyContent[lang];
  const links = cedBuddyLinks(lang);
  const available = isAvailable(cedBuddy);
  const flowId = FLOW_ID[lang];

  return (
    <PageShell route={route} current="apps" className="ced ced-page" extraLinks={cedBuddyFooterLinks(lang)}>
      {/* Hero */}
      <section className="ced-hero" aria-labelledby="ced-title">
        <div className="ced-hero-glow" aria-hidden="true"></div>
        <Breadcrumb lang={lang} />
        <div className="container ced-hero-layout">
          <div className="ced-hero-copy">
            <div className="app-identity fade-up">
              <AppIcon size={64} eager />
              <div>
                <p className="app-name">CED Buddy</p>
                <StatusLabel lang={lang} />
              </div>
            </div>

            <h1 id="ced-title" className="ced-title fade-up" style={{ animationDelay: "60ms" }}>
              {c.hero.title.split(/(?<=\.)\s+/).map((part) => (
                <span key={part}>{part}</span>
              ))}
            </h1>
            <p className="ced-lead fade-up" style={{ animationDelay: "120ms" }}>
              {c.hero.lead}
            </p>
            <p className="ced-audience fade-up" style={{ animationDelay: "160ms" }}>
              {c.hero.audience}
            </p>

            <div className="app-actions fade-up" style={{ animationDelay: "200ms" }}>
              {available ? (
                <AppStoreBadge lang={lang} label={c.hero.store} />
              ) : (
                <a className="btn btn-ced" href={`#${flowId}`}>
                  {c.hero.primary}
                  <ArrowRightIcon />
                </a>
              )}
              <a className="btn btn-ghost" href={links.support}>
                {c.hero.secondary}
              </a>
            </div>

            <ul className="ced-facts fade-up" style={{ animationDelay: "240ms" }}>
              {c.hero.facts.map((fact, i) => {
                const Icon = FACT_ICONS[i];
                return (
                  <li key={fact}>
                    <span className="ced-fact-icon" aria-hidden="true">
                      <Icon />
                    </span>
                    {fact}
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="ced-hero-visual fade-up" style={{ animationDelay: "180ms" }}>
            <Screenshot
              set={screens.today}
              lang={lang}
              alt={c.alt.today}
              sizes="(max-width: 860px) 270px, 320px"
              eager
              caption={c.shotCaption}
            />
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section ced-flow" id={flowId} aria-labelledby="ced-flow-title">
        <div className="container">
          <header className="ced-section-head">
            <p className="ced-eyebrow">{c.flow.eyebrow}</p>
            <h2 id="ced-flow-title">{c.flow.title}</h2>
          </header>

          <ol className="flow-steps">
            {c.flow.steps.map((step, i) => {
              const otherUi = step.images.some((key) => screens[key][lang].lang !== lang);
              return (
                <li key={step.id} id={step.id} className={`flow-step flow-step--${i + 1}`}>
                  <div className="flow-copy">
                    <p className="flow-label">
                      <span className="flow-num">{step.num}</span>
                      {step.label}
                    </p>
                    <h3>{step.title}</h3>
                    <p className="flow-text">{step.text}</p>
                    <ul className="flow-points">
                      {step.points.map((point) => (
                        <li key={point}>
                          <CheckIcon />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={`flow-visual flow-visual--${i + 1}`}>
                    {step.images.map((key, n) => (
                      <Screenshot
                        key={key}
                        set={screens[key]}
                        lang={lang}
                        alt={c.alt[key]}
                        sizes="(max-width: 640px) 50vw, 330px"
                        className={n === 0 ? "device--front" : "device--back"}
                      />
                    ))}
                    {otherUi && c.otherUiLang && <p className="flow-ui-note">{c.otherUiLang}</p>}
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      {/* Reports and price */}
      <section className="section ced-reports" id={lang === "de" ? "berichte" : "reports"} aria-labelledby="ced-reports-title">
        <div className="container ced-reports-layout">
          <div className="ced-reports-copy">
            <p className="ced-eyebrow">{c.reports.eyebrow}</p>
            <h2 id="ced-reports-title">{c.reports.title}</h2>
            <p className="ced-section-text">{c.reports.text}</p>
            <ol className="report-steps">
              {c.reports.steps.map((step, i) => (
                <li key={step.title}>
                  <span className="report-step-num" aria-hidden="true">
                    {i + 1}
                  </span>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className="price-card">
            <div className="price-col">
              <h3>{c.reports.freeTitle}</h3>
              <ul>
                {c.reports.free.map((item) => (
                  <li key={item}>
                    <CheckIcon />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="price-col price-col--paid">
              <h3>{c.reports.paidTitle}</h3>
              <ul>
                {c.reports.paid.map((item) => (
                  <li key={item}>
                    <CheckIcon />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="price-note">{c.reports.price}</p>
            </div>
            <p className="price-foot">{c.reports.priceNote}</p>
          </div>
        </div>
      </section>

      {/* Data */}
      <section className="section ced-data" id={lang === "de" ? "daten" : "data"} aria-labelledby="ced-data-title">
        <div className="container">
          <header className="ced-section-head">
            <p className="ced-eyebrow">{c.data.eyebrow}</p>
            <h2 id="ced-data-title">{c.data.title}</h2>
          </header>
          <ul className="data-grid">
            {c.data.items.map((item) => (
              <li key={item.title} className="data-item">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </li>
            ))}
          </ul>
          <p className="ced-more">
            <a className="text-link" href={links.privacy}>
              {c.data.link}
              <ArrowRightIcon />
            </a>
          </p>
          <p className="ced-disclaimer">{c.data.disclaimer}</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="section ced-faq" id="faq" aria-labelledby="ced-faq-title">
        <div className="container ced-faq-layout">
          <header className="ced-section-head">
            <p className="ced-eyebrow">{c.faq.eyebrow}</p>
            <h2 id="ced-faq-title">{c.faq.title}</h2>
            <p className="ced-more">
              <a className="text-link" href={links.support}>
                {c.faq.more}
                <ArrowRightIcon />
              </a>
            </p>
          </header>
          <div className="faq-list">
            {c.faq.items.map((item) => (
              <details key={item.q} className="faq-item">
                <summary>
                  <h3>{item.q}</h3>
                  <ChevronDownIcon />
                </summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="section ced-closing" aria-labelledby="ced-closing-title">
        <div className="container">
          <div className="closing-panel">
            <img
              className="closing-buddy"
              src={`${cedBuddy.assets}/buddy-240.webp`}
              srcSet={`${cedBuddy.assets}/buddy-240.webp 240w, ${cedBuddy.assets}/buddy-480.webp 480w`}
              sizes="120px"
              width="120"
              height="120"
              alt=""
              loading="lazy"
              decoding="async"
            />
            <div className="closing-copy">
              <h2 id="ced-closing-title">{available ? c.closing.availableTitle : c.closing.comingSoonTitle}</h2>
              <p>{available ? c.closing.availableText : c.closing.comingSoonText}</p>
              <div className="app-actions">
                {available && <AppStoreBadge lang={lang} label={c.hero.store} />}
                <a className="btn btn-ghost" href={links.support}>
                  {c.closing.support}
                </a>
                <a className="text-link" href={links.privacy}>
                  {c.closing.privacy}
                </a>
              </div>
              <p className="closing-dev">{appsContent[lang].developer}</p>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}

export function Breadcrumb({ lang, trail = [] }) {
  const links = cedBuddyLinks(lang);
  const c = appsContent[lang];
  const items = [
    { href: lang === "en" ? "/en/apps" : "/apps", label: "Apps" },
    { href: links.product, label: "CED Buddy" },
    ...trail,
  ];
  return (
    <nav className="breadcrumb container" aria-label={c.breadcrumb}>
      <ol>
        {items.map((item, i) => (
          <li key={item.href}>
            {i === items.length - 1 ? (
              <span aria-current="page">{item.label}</span>
            ) : (
              <a href={item.href}>{item.label}</a>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
