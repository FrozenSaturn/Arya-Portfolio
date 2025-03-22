import React from "react";
import "./NavBar.css"; // if you want separate styling

const NavBar = () => {
  return (
    <nav className="nav-bar">
      <nav className="navbar">
        <h2 className="nav-logo">My Portfolio</h2>
        <div className="nav-buttons">
          <button className="nav-btn proj">Projects</button>
          <button className="nav-btn cont">Contact Me</button>
        </div>
      </nav>
    </nav>
  );
};

export default NavBar;
