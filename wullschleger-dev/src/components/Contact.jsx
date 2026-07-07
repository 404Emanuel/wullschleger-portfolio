import Reveal from "./Reveal.jsx";
import { DownloadIcon, GitHubIcon, GoogleDevIcon, LinkedInIcon, MailIcon } from "./Icons.jsx";
import { profile } from "../translations.js";

// CV download is a placeholder for now.
// To enable it: put the PDF into /public (e.g. /public/cv-emanuel-wullschleger.pdf)
// and set CV_URL to "/cv-emanuel-wullschleger.pdf".
const CV_URL = "";

export default function Contact({ t }) {
  const { contact } = t;
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

            <a className="contact-email" href={`mailto:${profile.email}`}>
              <MailIcon />
              {profile.email}
            </a>

            <div className="contact-actions">
              <a
                className="btn btn-ghost"
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedInIcon />
                LinkedIn
              </a>
              <a
                className="btn btn-ghost"
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHubIcon />
                GitHub
              </a>
              <a
                className="btn btn-ghost"
                href={profile.gdev}
                target="_blank"
                rel="noopener noreferrer"
              >
                <GoogleDevIcon />
                Google Dev
              </a>
              {CV_URL ? (
                <a className="btn btn-ghost" href={CV_URL} download>
                  <DownloadIcon />
                  {contact.cv}
                </a>
              ) : (
                <button type="button" className="btn btn-ghost" disabled>
                  <DownloadIcon />
                  {contact.cv} <span className="cv-soon">({contact.cvSoon})</span>
                </button>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
