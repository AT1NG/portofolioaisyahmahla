import Seo from "../components/Seo";
import Reveal from "../components/Reveal";
import { experience } from "../data/content";
import "./Experience.css";

export default function Experience() {
  return (
    <>
      <Seo
        title="Experience"
        description="Event coordination and public relations experience spanning government protocol, large-scale public activations, and organizational leadership."
      />

      <section className="page-header container">
        <span className="eyebrow">Experience</span>
        <h1>Where I've put it into practice</h1>
        <p className="lede" style={{ margin: "0 auto" }}>
          A track record of coordinating events at every scale — from intimate ceremonial
          protocol to activations with thousands of participants.
        </p>
      </section>

      <section className="section">
        <div className="container">
          <ol className="timeline">
            {experience.map((item, i) => (
              <li className="timeline-item" key={`${item.org}-${item.period}`}>
                <span className="timeline-dot" aria-hidden="true" />
                <Reveal as="div" className="card timeline-card" delay={i * 90}>
                  <span className="timeline-period">{item.period}</span>
                  <h3 className="timeline-role">{item.role}</h3>
                  <p className="timeline-org">{item.org}</p>
                  <ul className="timeline-bullets">
                    {item.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
