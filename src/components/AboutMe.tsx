import { useRef, useEffect, useState } from "react";
import "../index.css"; // or a separate AboutMe.css if you prefer

const AboutMe = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (sectionRef.current) {
            observer.unobserve(sectionRef.current); // Stop observing after it becomes visible
          }
          console.log("AboutMe section is visible:", isVisible);
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of the section is visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section className="about-me" ref={sectionRef}>
      <h2 className={`about-me-title ${isVisible ? "animated" : ""}`}>
        <span>ABOUT ME</span>
      </h2>

      <div className="about-me-content">
        {/* Left Column */}
        <div className={`about-left ${isVisible ? "animated" : ""}`}>
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
        <div className={`about-center ${isVisible ? "animated" : ""}`}>
          <img src="/images/IMG_5794.JPG" alt="Profile" />
        </div>

        {/* Right Column: Skills */}
        <div className={`about-right ${isVisible ? "animated" : ""}`}>
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
