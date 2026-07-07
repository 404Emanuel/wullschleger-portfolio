import Reveal from "./Reveal.jsx";
import { FlaskIcon, SproutIcon, WrenchIcon } from "./Icons.jsx";

const groupIcons = {
  test: FlaskIcon,
  tools: WrenchIcon,
  learn: SproutIcon,
};

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
          {focus.groups.map((group, i) => {
            const Icon = groupIcons[group.icon];
            return (
              <Reveal key={group.title} delay={i * 90}>
                <div className="card focus-card">
                  <div className="focus-card-head">
                    <span
                      className={`focus-icon${group.learning ? " focus-icon--learning" : ""}`}
                      aria-hidden="true"
                    >
                      <Icon />
                    </span>
                    <div>
                      <h3>{group.title}</h3>
                      <p className="card-note">{group.note}</p>
                    </div>
                  </div>
                  <ul className="chip-list">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className={`chip${group.learning ? " chip--building" : ""}`}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
