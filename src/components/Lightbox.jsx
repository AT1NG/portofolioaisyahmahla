import { useEffect } from "react";
import { createPortal } from "react-dom";
import { CloseIcon, ArrowIcon } from "./icons";

export default function Lightbox({ item, onClose, onPrev, onNext }) {
  useEffect(() => {
    if (!item) return;

    function handleKey(e) {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    }
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [item, onClose, onPrev, onNext]);

  if (!item) return null;

  return createPortal(
    <div
      className="lightbox-overlay"
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
      onClick={onClose}
    >
      <button type="button" className="lightbox-close" aria-label="Close" onClick={onClose}>
        <CloseIcon />
      </button>

      <button
        type="button"
        className="lightbox-nav lightbox-prev"
        aria-label="Previous image"
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
      >
        <ArrowIcon style={{ transform: "rotate(180deg)" }} />
      </button>

      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        {item.youtubeId ? (
          <div className="lightbox-youtube-wrap">
            <iframe
              className="lightbox-youtube"
              src={`https://www.youtube-nocookie.com/embed/${item.youtubeId}?autoplay=1&rel=0`}
              title={item.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        ) : item.video ? (
          <video
            className="lightbox-video"
            src={item.video}
            poster={item.image}
            controls
            playsInline
            autoPlay
          />
        ) : (
          <img src={item.image} alt={item.title} />
        )}
        <div className="lightbox-caption">
          <h3>{item.title}</h3>
          <p className="lightbox-role">{item.role}</p>
          <p>{item.description}</p>
        </div>
      </div>

      <button
        type="button"
        className="lightbox-nav lightbox-next"
        aria-label="Next image"
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
      >
        <ArrowIcon />
      </button>
    </div>,
    document.body
  );
}
