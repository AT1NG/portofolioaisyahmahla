import Seo from "../components/Seo";
import Reveal from "../components/Reveal";
import { bio, education, skills } from "../data/content";
import "./About.css";

export default function About() {
  return (
    <>
      <Seo
        title="About"
        description="Communication Science graduate specializing in Event Management and Public Relations, with hands-on protocol and logistics experience."
      />

      <section className="page-header container">
        <span className="eyebrow">About Me</span>
        <h1>Behind every smooth event</h1>
      </section>

      <section className="section">
        <div className="container bio-block">
          <Reveal>
            <p className="lede" style={{ margin: "0 auto", textAlign: "center" }}>
              {bio}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Skills</span>
            <h2>What I bring to the table</h2>
          </div>

          <div className="skills-grid">
            <Reveal as="div" className="card skill-card">
              <h3>Hard Skills</h3>
              <ul className="skill-list">
                {skills.hard.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </Reveal>

            <Reveal as="div" className="card skill-card" delay={120}>
              <h3>Soft Skills</h3>
              <ul className="skill-list">
                {skills.soft.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Education</span>
            <h2>Academic Background</h2>
          </div>

          <Reveal as="div" className="card education-card">
            <span className="education-period">{education.period}</span>
            <span className="education-degree">{education.degree}</span>
            <span className="education-institution">{education.institution}</span>
            <span className="education-gpa">GPA {education.gpa}</span>
          </Reveal>
        </div>
      </section>
    </>
  );
}
