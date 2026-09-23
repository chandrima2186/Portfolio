function Contact() {
  return (
    <section className="section contact-section" id="contact">
      <div className="section-title">
        <p>GET IN TOUCH</p>
        <h2>Contact Me</h2>
      </div>

      <div className="contact-content">
        <div className="contact-text">
          <span className="contact-label">LET'S CONNECT</span>

          <h3>Have a project in mind?</h3>

          <p>
            If you have a project, question or just want to
            say hello, feel free to send me a message.
          </p>

          <div className="contact-info">
            <div className="contact-info-item">
              <span>✉</span>
              <div>
                <small>Email</small>
                <p>Send me a message through the form</p>
              </div>
            </div>

            <div className="contact-info-item">
              <span>⌖</span>
              <div>
                <small>Location</small>
                <p>Sylhet, Bangladesh</p>
              </div>
            </div>

            <div className="contact-info-item">
              <span>↗</span>
              <div>
                <small>Open to</small>
                <p>Projects & Learning Opportunities</p>
              </div>
            </div>
          </div>
        </div>

        <form
          className="contact-form"
          action="https://formspree.io/f/xaenjllr"
          method="POST"
        >
          <div className="form-group">
            <label htmlFor="name">Your Name</label>

            <input
              id="name"
              type="text"
              name="name"
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Your Email</label>

            <input
              id="email"
              type="email"
              name="email"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Your Message</label>

            <textarea
              id="message"
              name="message"
              placeholder="Write your message..."
              required
            ></textarea>
          </div>

          <button type="submit" className="btn">
            Send Message ↗
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;