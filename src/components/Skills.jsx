function Skills() {
  const skills = [
    {
      name: "HTML",
      category: "Frontend",
      level: 70,
      description: "Building structured and semantic web pages."
    },
    {
      name: "CSS",
      category: "Frontend",
      level: 65,
      description: "Creating responsive and attractive user interfaces."
    },
    {
      name: "JavaScript",
      category: "Frontend",
      level: 70,
      description: "Adding interaction and dynamic functionality."
    },
    {
      name: "React",
      category: "Frontend",
      level: 60,
      description: "Building component-based web applications."
    },
    {
      name: "C / C++",
      category: "Programming",
      level: 90,
      description: "Problem solving and fundamental programming."
    },
    {
      name: "Java",
      category: "Programming",
      level: 80,
      description: "Object-oriented programming and application development."
    },
    {
      name: "MySQL",
      category: "Database",
      level: 95,
      description: "Designing and managing relational databases."
    },
    {
      name: "Git",
      category: "Tools",
      level: 70,
      description: "Managing and tracking project code."
    }
  ];

  return (
    <section className="section skills-section" id="skills">
      <div className="section-title">
        <p>WHAT I WORK WITH</p>
        <h2>My Skills</h2>
      </div>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-card" key={skill.name}>
            <div className="skill-top">
              <span className="skill-number">
                {String(index + 1).padStart(2, "0")}
              </span>

              <span className="skill-category">
                {skill.category}
              </span>
            </div>

            <h3>{skill.name}</h3>

            <p>{skill.description}</p>

            <div className="skill-progress">
              <div
                className="skill-progress-bar"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>

            <div className="skill-bottom">
              <span>Proficiency</span>
              <span>{skill.level}%</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;