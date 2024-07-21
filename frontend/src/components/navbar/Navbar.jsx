import React, { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleReload = () => {
    window.location.reload();
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="Navbar" id="home">
      <div className="Title" onClick={handleReload} style={{ cursor: "pointer" }}>
        <p>Awais Murtaza</p>
      </div>
      <div className={`Nav-List ${menuOpen ? "open" : ""}`}>
        <li><a href="#home">Home</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>     
      </div>
      <div className="Hamburger" onClick={toggleMenu}>
        <div className="Bar"></div>
        <div className="Bar"></div>
        <div className="Bar"></div>
      </div>
    </div>
  );
}

export default Navbar;
