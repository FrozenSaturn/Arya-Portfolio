import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact-section">
      <h2 className="contact-title">
        <span>Conatct </span>Me
      </h2>
      <p className="contact-subtitle">
        Get in touch with me to get the ball rolling!
      </p>

      <div className="contact-icons">
        {/* Email */}
        <div className="contact-item">
          {/* Replace with an icon component or <img> as needed */}
          <div className="contact-icon">
            <i className="fa-solid fa-envelope"></i>
          </div>
          <h4>Email</h4>
          <a href="mailto:your.email@example.com">aryaa111000@gmail.com</a>
        </div>

        {/* Phone */}
        <div className="contact-item">
          <div className="contact-icon">
            <i className="fa-solid fa-phone"></i>
          </div>
          <h4>Phone</h4>
          <p>+91 62915 99419</p>
        </div>

        {/* Portfolio / GitHub */}
        <div className="contact-item">
          <div className="contact-icon">
            <i className="fa-brands fa-github"></i>
          </div>
          <h4>GitHub</h4>
          <a
            href="https://github.com/FrozenSaturn"
            target="_blank"
            rel="noreferrer"
          >
            Check out my projects
          </a>
        </div>

        {/* LinkedIn */}
        <div className="contact-item">
          <div className="contact-icon">
            <i className="fa-brands fa-linkedin"></i>
          </div>
          <h4>LinkedIn</h4>
          <a
            href="https://www.linkedin.com/in/arya-bhattacharjee/"
            target="_blank"
            rel="noreferrer"
          >
            Connect with me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
