function About() {
  return (
    <section className="section about-section" id="about">
      <div className="section-title">
        <p>GET TO KNOW ME</p>
        <h2>About Me</h2>
      </div>

      <div className="about-content">
        <div className="about-card">
          <h3>Hello! I'm Priya</h3>

          <p>
            I am a Computer Science student passionate about
            programming and web development. I enjoy turning
            ideas into simple, useful and responsive web
            applications.
          </p>

          <p>
            I like learning new technologies, building projects
            and improving my problem-solving skills through
            practical experience.
          </p>

          <a href="#contact" className="btn">
            Let's Talk
          </a>
        </div>

        <div className="info-card">
          <div className="info-item">
            <span className="info-icon">🎓</span>
            <div>
              <h3>Education</h3>
              <p>Computer Science & Engineering</p>
            </div>
          </div>

          <div className="info-item">
            <span className="info-icon">💻</span>
            <div>
              <h3>Focus</h3>
              <p>Web Development & Software Development</p>
            </div>
          </div>

          <div className="info-item">
            <span className="info-icon">📚</span>
            <div>
              <h3>Currently Learning</h3>
              <p>React, JavaScript & Backend Development</p>
            </div>
          </div>

          <div className="info-item">
            <span className="info-icon">🚀</span>
            <div>
              <h3>Goal</h3>
              <p>Become a skilled software developer</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;