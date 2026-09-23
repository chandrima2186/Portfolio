import "../styles/Projects.css";
function Projects() {
  const projects = [
    {
      number: "01",
      title: "CampusEventHub",
      description:
        "A university event management platform where students can explore and register for academic and cultural events.",
      technologies: ["React", "Node.js", "MySQL"],
      github: "https://github.com/chandrima2186/Campus_event_hub",
      live: ""
    },
    {
      number: "02",
      title: "Personal Portfolio",
      description:
        "A responsive personal portfolio website designed to showcase my skills, projects and academic journey.",
      technologies: ["React", "JavaScript", "CSS"],
      github: "https://github.com/chandrima2186/portfolio",
      live: "https://portfolio-flame-phi-60.vercel.app/"
    }
  ];

  return (
    <section className="section projects-section" id="projects">
      <div className="section-title">
        <p>MY RECENT WORK</p>
        <h2>Projects</h2>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <div className="project-card" key={project.number}>
            <div className="project-top">
              <span className="project-number">
                {project.number}
              </span>

              <span className="project-label">
                PROJECT
              </span>
            </div>

            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <div className="technologies">
              {project.technologies.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>

            <div className="project-buttons">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="project-btn"
              >
                GitHub ↗
              </a>

              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-btn live-btn"
                >
                  Live Demo ↗
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;