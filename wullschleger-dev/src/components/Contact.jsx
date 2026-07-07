import Reveal from "./Reveal.jsx";
import {
  ArrowRightIcon,
  DownloadIcon,
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
} from "./Icons.jsx";
import { profile } from "../translations.js";

// CV download is a placeholder for now.
// To enable it: put the PDF into /public (e.g. /public/cv-emanuel-wullschleger.pdf)
// and set CV_URL to "/cv-emanuel-wullschleger.pdf".
const CV_URL = "";

export default function Contact({ t }) {
  const { contact } = t;

  const channels = [
    {
      key: "email",
      href: `mailto:${profile.email}`,
      label: contact.channels.email,
      value: profile.email,
      Icon: MailIcon,
      external: false,
    },
    {
      key: "linkedin",
      href: profile.linkedin,
      label: contact.channels.linkedin,
      value: "emanuel-wullschleger",
      Icon: LinkedInIcon,
      external: true,
    },
    {
      key: "github",
      href: profile.github,
      label: contact.channels.github,
      value: "404Emanuel",
      Icon: GitHubIcon,
      external: true,
    },
  ];

  return (
    <section className="section" id="contact">
      <div className="container">
        <Reveal>
          <header className="section-head">
            <span className="section-num">{contact.num}</span>
            <h2>{contact.title}</h2>
            <span className="section-line" aria-hidden="true"></span>
          </header>
        </Reveal>

        <Reveal delay={80}>
          <div className="contact-panel">
            <p className="contact-lead">{contact.lead}</p>
            <p className="contact-text">{contact.text}</p>

            <div className="contact-cards">
              {channels.map(({ key, href, label, value, Icon, external }) => (
                <a
                  key={key}
                  className="contact-card"
                  href={href}
                  {...(external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                >
                  <span className="contact-card-icon" aria-hidden="true">
                    <Icon />
                  </span>
                  <span className="contact-card-body">
                    <span className="contact-card-label">{label}</span>
                    <span className="contact-card-value">{value}</span>
                  </span>
                  <span className="contact-card-arrow" aria-hidden="true">
                    <ArrowRightIcon />
                  </span>
                </a>
              ))}
            </div>

            {CV_URL && (
              <div className="contact-actions">
                <a className="btn btn-ghost" href={CV_URL} download>
                  <DownloadIcon />
                  {contact.cv}
                </a>
              </div>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
