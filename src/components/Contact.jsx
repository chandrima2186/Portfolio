function Contact() {
  return (
    <section className="section contact-section" id="contact">
      <div className="section-title">
        <p>GET IN TOUCH</p>
        <h2>Contact Me</h2>
      </div>

      <div className="contact-content">
        <div className="contact-text">
          <h3>Let's work together.</h3>

          <p>
            If you have a project, question or just want to
            say hello, feel free to contact me.
          </p>

          <div className="contact-info">
            <p>📧 Contact me through this form</p>
            <p>📍 Sylhet, Bangladesh</p>
          </div>
        </div>

        <form
          className="contact-form"
          action="https://formspree.io/f/xaenjllr"
          method="POST"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            required
          ></textarea>

          <button type="submit" className="btn">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;