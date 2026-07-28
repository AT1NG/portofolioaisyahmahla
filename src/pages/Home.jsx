import { NavLink } from "react-router-dom";
import Seo from "../components/Seo";
import Reveal from "../components/Reveal";
import { profile, skills } from "../data/content";
import "./Home.css";

const STATS = [
  { number: "10+", label: "Official government-level events coordinated" },
  { number: "2,000+", label: "Participants managed at a single event" },
  { number: "3.80", label: "GPA — Bachelor of Communication" },
];

export default function Home() {
  return (
    <>
      <Seo
        title="Home"
        description="Aisyah Mahla Nurussalamah — Event Coordination & Public Relations professional delivering seamless, high-impact events in Bandung, West Java."
      />

      <section className="hero container">
        <div className="hero-inner">
          <span className="eyebrow">Event Coordination &amp; Public Relations</span>
          <h1>{profile.name}</h1>
          <p className="hero-title">{profile.title}</p>
          <p className="hero-tagline">{profile.tagline}</p>
          <div className="btn-row">
            <NavLink to="/portfolio" className="btn btn-primary">
              View Portfolio
            </NavLink>
            <NavLink to="/contact" className="btn btn-outline">
              Get in Touch
            </NavLink>
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className="stats-grid">
            {STATS.map((stat, i) => (
              <Reveal key={stat.label} className="card stat-card" delay={i * 90}>
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="intro-grid">
            <Reveal>
              <span className="eyebrow">A little about me</span>
              <h2>Grounded in protocol, driven by people</h2>
              <p className="lede">
                A Communication Science graduate with hands-on experience coordinating
                official government-level events and community activations — comfortable
                managing logistics, media relations, and formal communication under
                pressure.
              </p>
              <NavLink to="/about" className="btn btn-outline">
                More about me
              </NavLink>
            </Reveal>
            <Reveal delay={120}>
              <div className="intro-tags">
                {[...skills.hard, ...skills.soft].map((skill) => (
                  <span className="tag-pill" key={skill}>
                    {skill}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <Reveal className="cta-banner">
            <h2>Planning an event that needs to run flawlessly?</h2>
            <p>
              From ceremonial protocol to large-scale public activations, I coordinate the
              details so your event lands exactly as intended.
            </p>
            <div className="btn-row">
              <NavLink to="/contact" className="btn btn-primary">
                Start a Conversation
              </NavLink>
              <NavLink to="/experience" className="btn btn-outline">
                See My Experience
              </NavLink>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
