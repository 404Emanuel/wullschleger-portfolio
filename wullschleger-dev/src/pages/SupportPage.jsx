import PageShell from "./PageShell.jsx";
import CopyEmail from "./CopyEmail.jsx";
import { Breadcrumb } from "./CedBuddyPage.jsx";
import { AppIcon } from "./AppIdentity.jsx";
import { cedBuddyFooterLinks, cedBuddyLinks } from "./cedBuddyLinks.js";
import { AlertIcon, ArrowRightIcon, ChevronDownIcon, MailIcon } from "../components/Icons.jsx";
import { cedBuddy } from "../apps/apps.js";
import { supportContent } from "../apps/ced-buddy/content.js";

/** mailto: link that only opens a draft; nothing is sent automatically. */
export function mailto(subject, body = "") {
  const params = [`subject=${encodeURIComponent(subject)}`];
  if (body) params.push(`body=${encodeURIComponent(body)}`);
  return `mailto:${cedBuddy.supportEmail}?${params.join("&")}`;
}

export default function SupportPage({ route }) {
  const { lang } = route;
  const c = supportContent[lang];
  const links = cedBuddyLinks(lang);

  return (
    <PageShell route={route} current="apps" className="ced ced-subpage" extraLinks={cedBuddyFooterLinks(lang)}>
      <Breadcrumb lang={lang} trail={[{ href: links.support, label: "Support" }]} />

      <section className="subpage-hero">
        <div className="container subpage-hero-inner">
          <AppIcon size={56} eager />
          <div>
            <p className="ced-eyebrow">{c.eyebrow}</p>
            <h1 className="page-title">{c.title}</h1>
            <p className="page-lead">{c.intro}</p>
          </div>
        </div>
      </section>

      <div className="container subpage-body">
        <section className="contact-box" aria-labelledby="support-address-label">
          <p id="support-address-label" className="contact-box-label">
            {c.addressLabel}
          </p>
          <p className="contact-box-address" id="support-address">
            {cedBuddy.supportEmail}
          </p>
          <div className="app-actions">
            <a className="btn btn-ced" href={mailto(c.general.subject)}>
              <MailIcon />
              {c.write}
            </a>
            <CopyEmail
              address={cedBuddy.supportEmail}
              targetId="support-address"
              label={c.copy}
              copied={c.copied}
              fallback={c.copySelected}
            />
          </div>
          <p className="contact-box-note">{c.draftNote}</p>
        </section>

        <section className="support-reasons" aria-labelledby="reasons-title">
          <h2 id="reasons-title">{c.reasonsTitle}</h2>
          <ul className="reason-grid">
            {c.reasons.map((reason) => (
              <li key={reason.key} className="reason-card">
                <h3>{reason.title}</h3>
                <p>{reason.text}</p>
                <a className="text-link" href={mailto(reason.subject, reason.body)}>
                  {c.reasonCta}
                  <ArrowRightIcon />
                </a>
              </li>
            ))}
          </ul>

          <div className="support-columns">
            <div className="support-note">
              <h3>{c.bugHelpTitle}</h3>
              <ul className="plain-list">
                {c.bugHelp.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p>{c.inAppHint}</p>
            </div>
            <div className="support-note">
              <h3>{c.privacyTitle}</h3>
              <p>{c.privacyText}</p>
              <h3>{c.expectTitle}</h3>
              <p>{c.expectText}</p>
            </div>
          </div>
        </section>

        <aside className="support-warning" aria-labelledby="warning-title">
          <span className="support-warning-icon" aria-hidden="true">
            <AlertIcon />
          </span>
          <div>
            <h2 id="warning-title">{c.warningTitle}</h2>
            <p>{c.warningText}</p>
          </div>
        </aside>

        <section className="support-faq" aria-labelledby="support-faq-title">
          <h2 id="support-faq-title">{c.faqTitle}</h2>
          <div className="faq-list">
            {c.faq.map((item) => (
              <details key={item.id} id={item.id} className="faq-item">
                <summary>
                  <h3>{item.q}</h3>
                  <ChevronDownIcon />
                </summary>
                {item.a.map((paragraph) => (
                  <p key={paragraph.slice(0, 32)}>{paragraph}</p>
                ))}
              </details>
            ))}
          </div>
        </section>

        <nav className="subpage-links" aria-label="CED Buddy">
          <a className="text-link" href={links.privacy}>
            {c.privacyLink}
            <ArrowRightIcon />
          </a>
          <a className="text-link" href={links.product}>
            {c.productLink}
            <ArrowRightIcon />
          </a>
        </nav>
      </div>
    </PageShell>
  );
}
