function Projects() {
  const projects = [
    {
      number: "01",
      title: "CampusEventHub",
      description:
        "A university event management platform where students can explore and register for academic and cultural events.",
      technologies: "React • Node.js • MySQL",
      link: "https://github.com/chandrima2186/Campus_event_hub"
    },
    {
      number: "02",
      title: "Personal Portfolio",
      description:
        "A responsive personal portfolio website designed to showcase my skills, projects and academic journey.",
      technologies: "React • JavaScript • CSS",
      link: "https://portfolio-flame-phi-60.vercel.app/"
    }
  ];

  return (
    <section className="section" id="projects">
      <div className="section-title">
        <p>MY RECENT WORK</p>
        <h2>Projects</h2>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <div className="project-card" key={project.number}>
            <span className="project-number">
              {project.number}
            </span>

            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <div className="technologies">
              {project.technologies}
            </div>

            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-btn"
            >
              View Project →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;