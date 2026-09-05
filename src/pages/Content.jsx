import { useState } from "react";
import Seo from "../components/Seo";
import Reveal from "../components/Reveal";
import Lightbox from "../components/Lightbox";
import { PlayIcon } from "../components/icons";
import { contentPosts } from "../data/content";
import "./Gallery.css";

export default function Content() {
  const [activeIndex, setActiveIndex] = useState(null);

  const activeItem = activeIndex === null ? null : contentPosts[activeIndex];

  const showPrev = () =>
    setActiveIndex((i) => (i - 1 + contentPosts.length) % contentPosts.length);
  const showNext = () => setActiveIndex((i) => (i + 1) % contentPosts.length);

  return (
    <>
      <Seo
        title="Content"
        description="Behind-the-scenes video content from events and protocol activities."
      />

      <section className="page-header container">
        <span className="eyebrow">Content</span>
        <h1>Behind the scenes</h1>
        <p className="lede" style={{ margin: "0 auto" }}>
          Video moments from events and protocol activities. Click any clip to watch.
        </p>
        <p className="content-credit">Shot and edited by Aisyah herself.</p>
      </section>

      <section className="section">
        <div className="container">
          <div className="gallery-grid">
            {contentPosts.map((item, i) => (
              <Reveal as="div" key={item.id} delay={(i % 3) * 90}>
                <button
                  type="button"
                  className="gallery-item"
                  onClick={() => setActiveIndex(i)}
                >
                  <div className="gallery-thumb">
                    <img src={item.image} alt={item.title} loading="lazy" />
                    {item.video && (
                      <span className="gallery-play-badge" aria-hidden="true">
                        <PlayIcon width={20} height={20} />
                      </span>
                    )}
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
