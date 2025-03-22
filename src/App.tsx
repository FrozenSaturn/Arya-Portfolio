import React, { useState, useEffect, useRef } from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import "./index.css";

const App: React.FC = () => {
  const [scrollPos, setScrollPos] = useState(0);
  const [showNav, setShowNav] = useState(false);
  const aboutMeRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setScrollPos(currentScroll);

      // Show nav bar once we scroll beyond 70% of the hero's height
      if (currentScroll > window.innerHeight * 0.7) {
        setShowNav(true);
      } else {
        setShowNav(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToAboutMe = () => {
    if (aboutMeRef.current) {
      aboutMeRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="App">
      {showNav && <NavBar />}
      <Hero scrollPos={scrollPos} scrollToNext={scrollToAboutMe} />
      <section ref={aboutMeRef}>
        <AboutMe />
      </section>
    </div>
  );
};

export default App;
