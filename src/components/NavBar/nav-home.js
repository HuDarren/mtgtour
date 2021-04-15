import React from "react";
import "./nav-z.css";
// import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="nav-container">
      <nav className="nav-container1">
        <div className="nav-container2">
          <a href="/">Home</a>
          <a href="/">About</a>
          <a href="/">Gameplay</a>
          <a href="/">Events</a>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
