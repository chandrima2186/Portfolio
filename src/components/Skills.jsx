import "../styles/Skills.css";

function Skills() {
  const skills = [
    {
      name: "HTML",
      icon: "HTML",
      category: "Frontend",
      level: 70,
      description: "Building structured and semantic web pages."
    },
    {
      name: "CSS",
      icon: "CSS",
      category: "Frontend",
      level: 65,
      description: "Creating responsive and attractive user interfaces."
    },
    {
      name: "JavaScript",
      icon: "JS",
      category: "Frontend",
      level: 70,
      description: "Adding interaction and dynamic functionality."
    },
    {
      name: "C / C++",
      icon: "C++",
      category: "Programming",
      level: 90,
      description: "Problem solving and fundamental programming."
    },
    {
      name: "Java",
      icon: "JV",
      category: "Programming",
      level: 80,
      description: "Object-oriented programming and application development."
    },
    {
      name: "MySQL",
      icon: "SQL",
      category: "Database",
      level: 95,
      description: "Designing and managing relational databases."
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

            <div className="skill-icon">
              {skill.icon}
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