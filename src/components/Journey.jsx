import "../styles/Journey.css";

function Journey() {
  return (
    <section className="section journey-section" id="journey">
      <div className="section-title">
        <p>MY JOURNEY</p>
        <h2>My Journey</h2>
      </div>

      <div className="journey-timeline">

        <div className="journey-item">
          <div className="journey-dot">1</div>

          <div className="journey-card">
            <span>2024</span>
            <h3>Started University</h3>
            <p>
              Started my B.Sc. in Computer Science & Engineering
              at Metropolitan University, Sylhet.
            </p>
          </div>
        </div>

        <div className="journey-item">
          <div className="journey-dot">2</div>

          <div className="journey-card">
            <span>2025</span>
            <h3>Learning & Building</h3>
            <p>
              Started building academic projects and improving
              my programming, database and web development skills.
            </p>
          </div>
        </div>

        <div className="journey-item">
          <div className="journey-dot">3</div>

          <div className="journey-card">
            <span>2026</span>
            <h3>Growing Through Projects</h3>
            <p>
              Working on real-world inspired projects and
              developing my skills with modern web technologies.
            </p>
          </div>
        </div>

        <div className="journey-item">
          <div className="journey-dot">4</div>

          <div className="journey-card">
            <span>Future</span>
            <h3>Becoming a Software Developer</h3>
            <p>
              Continuing to learn, build meaningful projects and
              grow as a professional software developer.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Journey;