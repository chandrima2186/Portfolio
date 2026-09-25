import "../styles/Home.css";

function Home() {
  return (
    <section className="home" id="home">

      <div className="home-content">

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

      </div>

    </section>
  );
}

export default Home;