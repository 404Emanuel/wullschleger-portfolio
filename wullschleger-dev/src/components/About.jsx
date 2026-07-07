import Reveal from "./Reveal.jsx";

export default function About({ t }) {
  const { about } = t;
  return (
    <section className="section" id="about">
      <div className="container">
        <Reveal>
          <header className="section-head">
            <span className="section-num">{about.num}</span>
            <h2>{about.title}</h2>
            <span className="section-line" aria-hidden="true"></span>
          </header>
        </Reveal>

        <div className="about-layout">
          <Reveal delay={80}>
            <div className="about-text">
              {about.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 24)}>{paragraph}</p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={160}>
            <div className="about-facts">
              {about.highlights.map((fact) => (
                <div className="fact" key={fact.label}>
                  <span className="fact-label">{fact.label}</span>
                  <p>{fact.text}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
