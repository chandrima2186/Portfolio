import { useEffect, useState } from "react";
import "../styles/Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [lightMode, setLightMode] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        threshold: 0.4,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.classList.toggle("light-mode", lightMode);
  }, [lightMode]);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className={menuOpen ? "navbar mobile-open" : "navbar"}>

      {/* PROFILE */}

      <div className="sidebar-profile">

        <div className="sidebar-avatar">
          <img src="/profile.jpg" alt="Priya" />
        </div>

        <h2>Priya</h2>

        <p>Computer Science Student</p>

        <div className="sidebar-status">
          <span></span>
          Available for opportunities
        </div>

      </div>

      {/* NAVIGATION */}

      <div className="nav-heading">
        MENU
      </div>

      <div className="nav-links">

        <a
          href="#home"
          className={active === "home" ? "active-link" : ""}
          onClick={closeMenu}
        >
          <span>⌂</span>
          Home
        </a>

        <a
          href="#about"
          className={active === "about" ? "active-link" : ""}
          onClick={closeMenu}
        >
          <span>●</span>
          About
        </a>

        <a
          href="#education"
          className={active === "education" ? "active-link" : ""}
          onClick={closeMenu}
        >
          <span>🎓</span>
          Education
        </a>

        <a
          href="#journey"
          className={active === "journey" ? "active-link" : ""}
          onClick={closeMenu}
        >
          <span>↗</span>
          Journey
        </a>

        <a
          href="#skills"
          className={active === "skills" ? "active-link" : ""}
          onClick={closeMenu}
        >
          <span>◆</span>
          Skills
        </a>

        <a
          href="#projects"
          className={active === "projects" ? "active-link" : ""}
          onClick={closeMenu}
        >
          <span>▣</span>
          Projects
        </a>

        <a
          href="#contact"
          className={active === "contact" ? "active-link" : ""}
          onClick={closeMenu}
        >
          <span>✉</span>
          Contact
        </a>

      </div>

      {/* SIDEBAR FOOTER */}

      <div className="sidebar-footer">

        <a
          href="https://github.com/chandrima2186"
          target="_blank"
          rel="noopener noreferrer"
          className="sidebar-social"
        >
          GitHub ↗
        </a>

        <button
          className="theme-btn"
          onClick={() => setLightMode(!lightMode)}
          aria-label="Toggle theme"
        >
          {lightMode ? "☀" : "☾"}
        </button>

      </div>

      {/* MOBILE MENU */}

      <button
        className="menu-btn"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation menu"
      >
        ☰
      </button>

    </nav>
  );
}

export default Navbar;