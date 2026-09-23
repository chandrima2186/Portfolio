import { useEffect } from "react";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

import "./styles/Common.css";
import "./styles/Theme.css";


function App() {
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      {
        threshold: 0.15,
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar />

      <div className="reveal">
        <Home />
      </div>

      <div className="reveal">
        <About />
      </div>

      <div className="reveal">
        <Skills />
      </div>

      <div className="reveal">
        <Projects />
      </div>

      <div className="reveal">
        <Contact />
      </div>

      <footer>
        <p>© 2026 Priya. All Rights Reserved.</p>
      </footer>
    </>
  );
}

export default App;