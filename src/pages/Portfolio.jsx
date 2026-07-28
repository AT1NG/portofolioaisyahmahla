import { useState } from "react";
import Seo from "../components/Seo";
import Reveal from "../components/Reveal";
import Lightbox from "../components/Lightbox";
import { gallery } from "../data/content";
import "./Portfolio.css";

export default function Portfolio() {
  const [activeIndex, setActiveIndex] = useState(null);

  const activeItem = activeIndex === null ? null : gallery[activeIndex];

  const showPrev = () =>
    setActiveIndex((i) => (i - 1 + gallery.length) % gallery.length);
  const showNext = () => setActiveIndex((i) => (i + 1) % gallery.length);

  return (
    <>
      <Seo
        title="Portfolio"
        description="A gallery of coordinated events — from government ceremonial protocol to large-scale public activations."
      />

      <section className="page-header container">
        <span className="eyebrow">Portfolio</span>
        <h1>Events I've helped bring to life</h1>
        <p className="lede" style={{ margin: "0 auto" }}>
          A selection of events across government protocol, community activations, and
          organizational programs. Click any photo for a closer look.
        </p>
      </section>

      <section className="section">
        <div className="container">
          <div className="gallery-grid">
            {gallery.map((item, i) => (
              <Reveal as="div" key={item.id} delay={(i % 3) * 90}>
                <button
                  type="button"
                  className="gallery-item"
                  onClick={() => setActiveIndex(i)}
                >
                  <div className="gallery-thumb">
                    <img src={item.image} alt={item.title} loading="lazy" />
                  </div>
                  <div className="gallery-caption">
                    <h3>{item.title}</h3>
                    <p className="gallery-role">{item.role}</p>
                    <p className="gallery-desc">{item.description}</p>
                  </div>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Lightbox
        item={activeItem}
        onClose={() => setActiveIndex(null)}
        onPrev={showPrev}
        onNext={showNext}
      />
    </>
  );
}
