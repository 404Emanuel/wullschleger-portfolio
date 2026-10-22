import Reveal from "./Reveal.jsx";
import { ArrowRightIcon } from "./Icons.jsx";
import { cedBuddy } from "../apps/apps.js";
import { localePath } from "../routes.js";

export default function Projects({ t, lang }) {
  const { projects } = t;
  const { featured } = projects;
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

        <Reveal delay={80}>
          <article className="app-teaser">
            <img
              className="app-teaser-icon app-icon"
              src={`${cedBuddy.assets}/icon-192.webp`}
              srcSet={`${cedBuddy.assets}/icon-96.webp 96w, ${cedBuddy.assets}/icon-192.webp 192w`}
              sizes="80px"
              width="80"
              height="80"
              alt=""
              loading="lazy"
              decoding="async"
            />
            <div className="app-teaser-body">
              <div className="project-top">
                <span className="project-kicker">{featured.kicker}</span>
                <span className="project-status">{featured.status}</span>
              </div>
              <h3>{featured.name}</h3>
              <p className="project-desc">{featured.desc}</p>
              <ul className="tag-list">
                {featured.tags.map((tag) => (
                  <li key={tag} className="tag">
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
            <a className="btn btn-ghost app-teaser-cta" href={localePath(`/apps/${cedBuddy.slug}`, lang)}>
              {featured.cta}
              <ArrowRightIcon />
            </a>
          </article>
        </Reveal>

        <div className="project-grid">
          {projects.items.map((project, i) => (
            <Reveal key={project.name} delay={i * 80}>
              <article className="card project-card">
                <div className="project-top">
                  <span className="project-kicker">{project.kicker}</span>
                  <span className="project-status">{project.status}</span>
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
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
