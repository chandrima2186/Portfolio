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
        threshold: 0.5,
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
    <nav className="navbar">

      <a href="#home" className="logo">
        Priya<span>.</span>
      </a>

      <div className={menuOpen ? "nav-links active" : "nav-links"}>

        <a href="#home" className={active === "home" ? "active-link" : ""} onClick={closeMenu}>
          Home
        </a>

        <a href="#about" className={active === "about" ? "active-link" : ""} onClick={closeMenu}>
          About
        </a>

        <a href="#education" className={active === "education" ? "active-link" : ""} onClick={closeMenu}>
          Education
        </a>

        <a href="#journey" className={active === "journey" ? "active-link" : ""} onClick={closeMenu}>
          Journey
        </a>

        <a href="#skills" className={active === "skills" ? "active-link" : ""} onClick={closeMenu}>
          Skills
        </a>

        <a href="#projects" className={active === "projects" ? "active-link" : ""} onClick={closeMenu}>
          Projects
        </a>

        <a href="#contact" className={active === "contact" ? "active-link" : ""} onClick={closeMenu}>
          Contact
        </a>

      </div>

      <button
        className="theme-btn"
        onClick={() => setLightMode(!lightMode)}
        aria-label="Toggle theme"
      >
        {lightMode ? "☀" : "☾"}
      </button>

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