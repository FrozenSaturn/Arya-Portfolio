import "./SkillsShowcase.css"; // or wherever you keep your styles

const SkillsShowcase = () => {
  return (
    <section className="skills-section">
      <h2 className="skills-title">Skills & Technologies</h2>
      <p className="skills-subtitle">
        A quick glance at the tools and expertise I bring to each project.
      </p>

      <div className="skills-grid">
        {/* Example skill block #1 */}
        <div className="skill-block large-block">
          <h3>React</h3>
          <p>Building interactive UIs and SPAs</p>
        </div>

        {/* Example skill block #2 */}
        <div className="skill-block medium-block">
          <h3>Node.js</h3>
          <p>Scalable backend services</p>
        </div>

        {/* Example skill block #3 */}
        <div className="skill-block small-block">
          <h3>Python</h3>
          <p>AI/ML, scripting, data processing</p>
        </div>

        {/* Example skill block #4 */}
        <div className="skill-block medium-block">
          <h3>AI/ML</h3>
          <p>Model training & deployment</p>
        </div>

        {/* Example skill block #5 */}
        <div className="skill-block small-block">
          <h3>Database</h3>
          <p>MongoDB, Firebase</p>
        </div>

        {/* Example skill block #6 */}
        <div className="skill-block large-block">
          <h3>Web Design</h3>
          <p>Responsive layouts & UX</p>
        </div>
      </div>
    </section>
  );
};

export default SkillsShowcase;
