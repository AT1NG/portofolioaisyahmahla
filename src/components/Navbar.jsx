import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { profile } from "../data/content";

const NAV_ITEMS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/experience", label: "Experience" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/contact", label: "Contact" },
];

function initials(name) {
  return name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("");
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <NavLink to="/" className="brand" aria-label={`${profile.name} — Home`}>
          {initials(profile.name)}. {profile.name.split(" ").slice(0, 2).join(" ")}
          <span>{profile.title}</span>
        </NavLink>

        <nav className="nav-links" aria-label="Primary">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <NavLink to="/contact" className="btn btn-primary nav-cta nav-desktop-cta">
          Let's Connect
        </NavLink>

        <button
          type="button"
          className="nav-toggle"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((prev) => !prev)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div className="container">
        <nav className={`nav-mobile${open ? " open" : ""}`} aria-label="Mobile">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              {item.label}
            </NavLink>
          ))}
          <NavLink to="/contact" className="btn btn-primary">
            Let's Connect
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
