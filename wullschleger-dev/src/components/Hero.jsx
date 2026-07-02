import { GitHubIcon, LinkedInIcon } from "./Icons.jsx";
import { profile } from "../translations.js";

export default function Hero({ t }) {
  return (
    <section className="hero" id="hero">
      <div className="hero-glow" aria-hidden="true"></div>
      <div className="hero-grid-bg" aria-hidden="true"></div>

      <div className="container">
        <p className="hero-badge fade-up">
          <span className="dot" aria-hidden="true"></span>
          {t.hero.badge}
        </p>

        <h1 className="hero-title fade-up" style={{ animationDelay: "90ms" }}>
          <span className="hero-name">{t.hero.name}</span>
          <span className="hero-role">{t.hero.headline}</span>
        </h1>

        <p className="hero-sub fade-up" style={{ animationDelay: "180ms" }}>
          {t.hero.subheadline}
        </p>

        <div className="hero-actions fade-up" style={{ animationDelay: "270ms" }}>
          <a
            className="btn btn-ghost"
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon />
            {t.hero.linkedin}
          </a>
          <a
            className="btn btn-ghost"
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon />
            {t.hero.github}
          </a>
          <a className="btn btn-primary" href="#contact">
            {t.hero.contact}
          </a>
        </div>
      </div>
    </section>
  );
}
