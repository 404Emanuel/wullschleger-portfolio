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
        <Reveal delay={80}>
          <div className="about-text">
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
