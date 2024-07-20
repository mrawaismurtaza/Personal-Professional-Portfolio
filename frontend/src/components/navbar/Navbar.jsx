import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="Navbar">
      <div className="Title">
        <p>Awais Murtaza</p>
      </div>
      <ul className="Nav-List">
        <li><a href="#home">Home</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>     
      </ul>
    </div>
  );
}

export default Navbar;
