import Reveal from "./Reveal.jsx";

export default function CurrentlyExploring({ t }) {
  const { exploring } = t;
  return (
    <section className="section" id="exploring">
      <div className="container">
        <Reveal>
          <header className="section-head">
            <span className="section-num">{exploring.num}</span>
            <h2>{exploring.title}</h2>
            <span className="section-line" aria-hidden="true"></span>
          </header>
        </Reveal>

        <Reveal delay={60}>
          <p className="section-intro">{exploring.intro}</p>
        </Reveal>

        <div className="explore-grid">
          {exploring.items.map((item, i) => (
            <Reveal key={item} delay={i * 70}>
              <div className="explore-item">
                <span className="explore-num" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p>{item}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
