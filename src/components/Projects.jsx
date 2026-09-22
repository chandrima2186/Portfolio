
function Projects() {
  const projects = [
    {
      number: "01",
      title: "CampusEventHub",
      description:
        "A university event management platform where students can explore and register for academic and cultural events.",
      technologies: "React • Node.js • MySQL"
    },
    {
      number: "02",
      title: "Personal Portfolio",
      description:
        "A responsive personal portfolio website designed to showcase my skills, projects and academic journey.",
      technologies: "React • JavaScript • CSS"
    },
    {
      number: "03",
      title: "Student Management System",
      description:
        "A simple system designed to manage student information and academic records.",
      technologies: "Java • OOP • MySQL"
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

            <button className="project-btn">
              View Project →
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
