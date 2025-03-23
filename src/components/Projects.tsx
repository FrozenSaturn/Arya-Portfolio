import { useState, useEffect, useRef } from "react";
import "./Projects.css";
import pic1 from "/images/Screenshot 2025-03-23 at 1.47.12 PM.png";
import pic2 from "/images/Screenshot 2025-03-23 at 2.40.17 PM.png";
import pic3 from "/images/Screenshot 2025-03-23 at 12.52.10 AM.png";

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1, rootMargin: "0px" }
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
    <section
      ref={sectionRef}
      className={`projects-section ${isVisible ? "visible" : ""}`}
    >
      <h2 className="projects-title">
        My <span>Projects</span>
      </h2>

      <div className="projects-container">
        {/* Project 1 Card */}
        <div className="project-card">
          {/* Replace project-icon with an <img> */}
          <img src={pic3} alt="Project One" className="project-image" />
          <h3 className="project-card-title">ESG Sentiment</h3>
          <p className="project-description">
            Predict the stock market on basis of ESG News. Made using Streamlit,
            Python and HuggingFace Transformers
          </p>
          <a href="#" className="project-link">
            View Project
          </a>
        </div>

        {/* Project 2 Card */}
        <div className="project-card">
          <img src={pic1} alt="Project Two" className="project-image" />
          <h3 className="project-card-title">FitCoin</h3>
          <p className="project-description">
            Get rewarded for your hard workouts with discount coupons and
            supplements. Made using React and Firebase
          </p>
          <a href="#" className="project-link">
            View Project
          </a>
        </div>

        {/* Project 3 Card */}
        <div className="project-card">
          <img src={pic2} alt="Project Three" className="project-image" />
          <h3 className="project-card-title">ReportIt</h3>
          <p className="project-description">
            Report your workspace experience to help others and yourself. Made
            using HTML, CSS, JavaScript, and Firebase
          </p>
          <a href="#" className="project-link">
            View Project
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
