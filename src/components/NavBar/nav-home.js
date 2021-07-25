import React from "react";
import "./nav-z.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="dropdown">
        <button className="dropdown-button">
          Magic
          <i class="fa fa-caret-down"></i>
        </button>
        <div className="dropdown-content">
          <Link className="dropdown-contenta" to="/">
            Planewalkers
          </Link>
          <Link className="dropdown-contenta" to="/banlist">
            Rules
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
