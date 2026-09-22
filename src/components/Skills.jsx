
function Skills() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "C / C++",
    "Java",
    "MySQL",
    "Git"
  ];

  return (
    <section className="section skills-section" id="skills">
      <div className="section-title">
        <p>WHAT I KNOW</p>
        <h2>My Skills</h2>
      </div>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <div className="skill-number">
              {String(index + 1).padStart(2, "0")}
            </div>

            <h3>{skill}</h3>

            <div className="skill-line"></div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
