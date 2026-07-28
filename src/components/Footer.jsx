import { profile } from "../data/content";

export default function Footer() {
  const year = new Date().getFullYear();
  const waLink = `https://wa.me/${profile.whatsappNumber}`;

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p className="footer-copy">
          © {year} {profile.name}. All rights reserved.
        </p>
        <nav className="footer-links" aria-label="Footer">
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
          <a href={waLink} target="_blank" rel="noopener noreferrer">
            WhatsApp
          </a>
          <span>{profile.location}</span>
        </nav>
      </div>
    </footer>
  );
}
