import React from "react";
import "./Navbar.css"

function Navbar() {
  return (
    <div className="Navbar">
      <div className="Title">
        <p>Awais Murtaza</p>
      </div>
      <div className="Nav-List">
        <li>Home</li>
        <li>Skills</li>
        <li>Project</li>
        <li>About</li>
        <li>Contact</li>     
      </div>
    </div>
  );
}

export default Navbar;
