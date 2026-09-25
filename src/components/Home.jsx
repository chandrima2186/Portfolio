import "../styles/Home.css";

function Home() {
  return (
    <section className="home" id="home">

      <div className="home-content">

        {/* LEFT CONTENT */}
        <div className="home-text">

          <p className="small-title">
            WELCOME TO MY PORTFOLIO
          </p>

          <h1>
            Hi, I'm <span>Priya</span>
          </h1>

          <h2>
            Computer Science Student
          </h2>

          <p className="home-description">
            I am passionate about programming, web development
            and creating simple, useful digital experiences.
          </p>

          <div className="home-buttons">

            <a href="#projects" className="btn">
              View My Work
            </a>

            <a href="#contact" className="btn outline">
              Contact Me
            </a>

          </div>

          <div className="home-social">

            <a
              href="https://github.com/chandrima2186"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>

            <span>•</span>

            <a href="#contact">
              Contact
            </a>

          </div>

        </div>

        {/* PROFILE CARD */}
        <div className="home-profile">

          <div className="profile-card">

            <div className="profile-top">

              <div className="profile-circle">
                <span>P</span>
              </div>

              <div className="available">
                <span></span>
                Available
              </div>

            </div>

            <h3>Priya</h3>

            <p className="profile-role">
              Computer Science Student
            </p>

            <div className="profile-line"></div>

            <div className="profile-details">

              <div>
                <span className="detail-icon">✉</span>
                <div>
                  <small>Email</small>
                  <p>Contact me</p>
                </div>
              </div>

              <div>
                <span className="detail-icon">⌂</span>
                <div>
                  <small>Location</small>
                  <p>Bangladesh</p>
                </div>
              </div>

              <div>
                <span className="detail-icon">◆</span>
                <div>
                  <small>Focus</small>
                  <p>Web Development</p>
                </div>
              </div>

            </div>

            <a href="#contact" className="profile-contact">
              Let's Connect →
            </a>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Home;