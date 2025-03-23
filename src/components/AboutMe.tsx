import "../index.css"; // or a separate AboutMe.css if you prefer

const AboutMe = () => {
  return (
    <section className="about-me">
      <h2 className="about-me-title">
        <span>ABOUT ME</span>
      </h2>

      <div className="about-me-content">
        {/* Left Column */}
        <div className="about-left">
          <h3>
            Arya <span>Bhattacharjee</span>
          </h3>
          <p>
            I am a full-stack web developer and a passionate AI/ML engineer. I
            am currently studying in University of Engineering and Managment,
            Kolkata.
          </p>
          <ul className="contact-info">
            <li>
              <i className="fa-solid fa-map"></i> D.K. Nivas, Green Park
            </li>
            <li>
              <i className="fa-solid fa-phone"></i> +91 6291599419
            </li>
            <li>
              <i className="fa-solid fa-envelope"></i> aryaa111000@gmail.com
            </li>
            <li>
              <i className="fa-solid fa-computer"></i> www.yourwebsite.com
            </li>
          </ul>
        </div>

        {/* Center Column: Circular Image */}
        <div className="about-center">
          <img src="src/components/IMG_5794.JPG" alt="Profile" />
        </div>

        {/* Right Column: Skills */}
        <div className="about-right">
          <h3>
            My <span className="Professional">Professional</span> Skills
          </h3>
          <p>
            I am a full-stack web developer and a passionate AI/ML engineer.
          </p>
          <div className="skill">
            <span>Web Development</span>
            <div className="skill-bar">
              <div className="skill-level" style={{ width: "95%" }}></div>
            </div>
          </div>
          <div className="skill">
            <span>AI/ML</span>
            <div className="skill-bar">
              <div className="skill-level" style={{ width: "90%" }}></div>
            </div>
          </div>
          <div className="skill">
            <span>Quantum Computing</span>
            <div className="skill-bar">
              <div className="skill-level" style={{ width: "95%" }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
