import PageShell from "./PageShell.jsx";
import Linkify from "./Linkify.jsx";
import { Breadcrumb } from "./CedBuddyPage.jsx";
import { cedBuddyFooterLinks, cedBuddyLinks } from "./cedBuddyLinks.js";
import { cedBuddy } from "../apps/apps.js";
import { privacyContent } from "../apps/ced-buddy/privacy.js";

const DATE_LOCALE = { de: "de-CH", en: "en-GB" };

function formatDate(iso, lang) {
  const [y, m, d] = iso.split("-").map(Number);
  return new Intl.DateTimeFormat(DATE_LOCALE[lang], {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(Date.UTC(y, m - 1, d)));
}

function Block({ block, pendingLabel }) {
  if (block.p) {
    return (
      <p>
        <Linkify text={block.p} />
      </p>
    );
  }
  if (block.h3) {
    return (
      <h3 className="legal-subtitle" id={block.id}>
        {block.h3}
      </h3>
    );
  }
  if (block.address) {
    return (
      <address className="legal-address">
        {block.address.map((line, i) => (
          <span key={line}>
            {i > 0 && <br />}
            {line}
          </span>
        ))}
      </address>
    );
  }
  if (block.ul) {
    return (
      <ul className="plain-list">
        {block.ul.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    );
  }
  if (block.table) {
    // On narrow screens the rows are stacked (apps.css); the explicit roles keep
    // the table semantics for screen readers when CSS changes the display.
    const { head, rows } = block.table;
    return (
      <div className="table-wrap">
        <table role="table">
          <thead>
            <tr role="row">
              {head.map((cell) => (
                <th key={cell} scope="col" role="columnheader">
                  {cell}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row[0]} role="row">
                {row.map((cell, i) =>
                  i === 0 ? (
                    <th key={i} scope="row" role="rowheader">
                      {cell}
                    </th>
                  ) : (
                    <td key={i} role="cell" data-label={head[i]}>
                      {cell}
                    </td>
                  )
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  if (block.pending) {
    return (
      <p className="pending-note">
        <strong>{pendingLabel}:</strong> {block.pending}
      </p>
    );
  }
  return null;
}

export default function PrivacyPage({ route }) {
  const { lang } = route;
  const c = privacyContent[lang];
  const links = cedBuddyLinks(lang);
  const draft = cedBuddy.privacyStatus !== "final";

  return (
    <PageShell route={route} current="apps" className="ced ced-subpage" extraLinks={cedBuddyFooterLinks(lang)}>
      <Breadcrumb lang={lang} trail={[{ href: links.privacy, label: lang === "de" ? "Datenschutz" : "Privacy" }]} />

      <section className="subpage-hero">
        <div className="container subpage-hero-inner subpage-hero-inner--text">
          <div>
            <p className="ced-eyebrow">{c.eyebrow}</p>
            <h1 className="page-title">{c.title}</h1>
            <p className="legal-date">
              {c.updated}: <time dateTime={cedBuddy.privacyUpdated}>{formatDate(cedBuddy.privacyUpdated, lang)}</time>
              {draft && ` · ${c.draftTitle}`}
            </p>
          </div>
        </div>
      </section>

      <div className="container subpage-body legal">
        {draft && (
          <div className="draft-banner" role="note">
            <strong>{c.draftTitle}:</strong> {c.draftText}
          </div>
        )}

        <section className="legal-summary" aria-labelledby="summary-title">
          <h2 id="summary-title">{c.summaryTitle}</h2>
          <ul className="plain-list">
            {c.summary.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <nav className="legal-toc" aria-labelledby="toc-title">
          <h2 id="toc-title">{c.tocLabel}</h2>
          <ol>
            {c.sections.map((section) => (
              <li key={section.id}>
                <a href={`#${section.id}`}>{section.title}</a>
              </li>
            ))}
          </ol>
        </nav>

        {c.sections.map((section, i) => (
          <section key={section.id} id={section.id} className="legal-section" aria-labelledby={`${section.id}-title`}>
            <h2 id={`${section.id}-title`}>
              <span className="legal-num">{String(i + 1).padStart(2, "0")}</span>
              {section.title}
            </h2>
            {section.blocks.map((block, n) =>
              draft || !block.pending ? <Block key={n} block={block} pendingLabel={c.pendingLabel} /> : null
            )}
          </section>
        ))}
      </div>
    </PageShell>
  );
}
