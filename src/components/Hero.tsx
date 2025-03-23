import React from "react";
import "../index.css";

interface HeroProps {
  scrollPos: number;
  scrollToNext: () => void;
}

const Hero: React.FC<HeroProps> = ({ scrollPos, scrollToNext }) => {
  // Calculate hero opacity based on scroll position (if desired)
  const heroOpacity = Math.max(1 - scrollPos / 300, 0);

  const handleWheel = (e: React.WheelEvent<HTMLElement>) => {
    // Check if scrolling down (deltaY > 0)
    if (e.deltaY > 0) {
      scrollToNext();
    }
  };

  return (
    <section className="hero" onWheel={handleWheel}>
      <h1 className="hero-title" style={{ opacity: heroOpacity }}>
        ARYA
      </h1>
      {/* New line of text under your name */}
      <h2 className="hero-subtitle" style={{ opacity: heroOpacity }}>
        WEB DEVELOPER AND AIML ENGINEER
      </h2>
      <div className="scroll-down" style={{ opacity: heroOpacity }}>
        <span className="arrow">˅</span>
        scroll down to see more
        <span className="arrow">˅</span>
      </div>
    </section>
  );
};

export default Hero;
