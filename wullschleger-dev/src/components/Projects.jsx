import Reveal from "./Reveal.jsx";
import { ExternalIcon } from "./Icons.jsx";
import { profile } from "../translations.js";

export default function Projects({ t }) {
  const { projects } = t;
  return (
    <section className="section" id="projects">
      <div className="container">
        <Reveal>
          <header className="section-head">
            <span className="section-num">{projects.num}</span>
            <h2>{projects.title}</h2>
            <span className="section-line" aria-hidden="true"></span>
          </header>
        </Reveal>

        <Reveal delay={60}>
          <p className="section-intro">{projects.intro}</p>
        </Reveal>

        <div className="project-grid">
          {projects.items.map((project, i) => (
            <Reveal key={project.name} delay={i * 80}>
              <article className="card project-card">
                <div className="project-top">
                  <span className="project-kicker">{project.kicker}</span>
                  <span className="project-status">
                    <span className="dot" aria-hidden="true"></span>
                    {project.status}
                  </span>
                </div>
                <h3>{project.name}</h3>
                <p className="project-desc">{project.desc}</p>
                <div className="project-foot">
                  <ul className="tag-list">
                    {project.tags.map((tag) => (
                      <li key={tag} className="tag">
                        {tag}
                      </li>
                    ))}
                  </ul>
                  {project.repo && (
                    <a
                      className="project-link"
                      href={profile.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {project.repoLabel}
                      <ExternalIcon />
                    </a>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
