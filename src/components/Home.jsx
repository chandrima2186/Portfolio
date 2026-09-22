
function Home() {
  return (
    <section className="home" id="home">
      <div className="home-text">
        <p className="small-title">WELCOME TO MY PORTFOLIO</p>

        <h1>
          Hi, I'm <span>Priya</span>
        </h1>

        <h2>Computer Science Student</h2>

        <p>
          I am passionate about programming, web development
          and creating simple and useful digital experiences.
        </p>

        <div className="home-buttons">
          <a href="#projects" className="btn">
            View My Work
          </a>

          <a href="#contact" className="btn outline">
            Contact Me
          </a>
        </div>
      </div>

      <div className="home-image">
        <div className="profile-circle">
          <span>P</span>
        </div>
      </div>
    </section>
  );
}

export default Home;
