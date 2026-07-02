import Reveal from "./Reveal.jsx";

export default function Experience({ t }) {
  const { experience } = t;
  return (
    <section className="section" id="experience">
      <div className="container">
        <Reveal>
          <header className="section-head">
            <span className="section-num">{experience.num}</span>
            <h2>{experience.title}</h2>
            <span className="section-line" aria-hidden="true"></span>
          </header>
        </Reveal>

        <div className="xp-list">
          {experience.entries.map((entry, i) => (
            <Reveal key={`${entry.role}-${entry.org}`} delay={i * 80}>
              <article className="xp-item">
                <p className="xp-period">{entry.period}</p>
                <div className="xp-body">
                  <div className="xp-role-row">
                    <h3 className="xp-role">{entry.role}</h3>
                    {entry.tag && <span className="xp-tag">{entry.tag}</span>}
                  </div>
                  <p className="xp-org">{entry.org}</p>
                  <p className="xp-note">{entry.note}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={240}>
          <p className="xp-footnote">{experience.footnote}</p>
        </Reveal>
      </div>
    </section>
  );
}
