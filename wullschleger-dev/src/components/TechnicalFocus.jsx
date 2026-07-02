import Reveal from "./Reveal.jsx";

export default function TechnicalFocus({ t }) {
  const { focus } = t;
  return (
    <section className="section" id="focus">
      <div className="container">
        <Reveal>
          <header className="section-head">
            <span className="section-num">{focus.num}</span>
            <h2>{focus.title}</h2>
            <span className="section-line" aria-hidden="true"></span>
          </header>
        </Reveal>

        <div className="focus-grid">
          {focus.groups.map((group, i) => (
            <Reveal key={group.title} delay={i * 90}>
              <div className="card">
                <h3>{group.title}</h3>
                <p className="card-note">{group.note}</p>
                <ul className="chip-list">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className={`chip${group.building ? " chip--building" : ""}`}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
