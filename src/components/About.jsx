
function About() {
  return (
    <section className="section" id="about">
      <div className="section-title">
        <p>GET TO KNOW ME</p>
        <h2>About Me</h2>
      </div>

      <div className="about-content">
        <div className="about-card">
          <h3>Hello! I'm Priya</h3>

          <p>
            I am a Computer Science student interested in
            software development and modern web technologies.
          </p>

          <p>
            I enjoy learning new programming languages,
            building projects and solving technical problems.
          </p>

          <a href="#contact" className="btn">
            Let's Talk
          </a>
        </div>

        <div className="info-card">
          <div className="info-item">
            <h3>Education</h3>
            <p>Computer Science & Engineering</p>
          </div>

          <div className="info-item">
            <h3>Interest</h3>
            <p>Web Development & Programming</p>
          </div>

          <div className="info-item">
            <h3>Goal</h3>
            <p>Become a skilled software developer</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
