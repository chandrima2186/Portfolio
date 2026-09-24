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

  return (
    <nav className="navbar">
      <a href="#home" className="logo">
        Priya<span>.</span>
      </a>

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

      <div className={menuOpen ? "nav-links active" : "nav-links"}>
        <a
          href="#home"
          className={active === "home" ? "active-link" : ""}
          onClick={() => setMenuOpen(false)}
        >
          Home
        </a>

        <a
          href="#about"
          className={active === "about" ? "active-link" : ""}
          onClick={() => setMenuOpen(false)}
        >
          About
        </a>

        <a
          href="#skills"
          className={active === "skills" ? "active-link" : ""}
          onClick={() => setMenuOpen(false)}
        >
        <a
  href="#education"
  className={active === "education" ? "active-link" : ""}
  onClick={() => setMenuOpen(false)}
>
  Education
</a>

          Skills
        </a>

        <a
          href="#projects"
          className={active === "projects" ? "active-link" : ""}
          onClick={() => setMenuOpen(false)}
        >
          Projects
        </a>

        <a
          href="#contact"
          className={active === "contact" ? "active-link" : ""}
          onClick={() => setMenuOpen(false)}
        >
          Contact
        </a>
      </div>
    </nav>
  );
}

export default Navbar;