import React from "react";
import "./nav-z.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <Link className="nav-home" to="/">
        MTGTOUR
      </Link>
      <div className="dropdown">
        <button className="dropdown-button">
          Gameplay
          <i class="fa fa-caret-down"></i>
        </button>
        <div className="dropdown-content">
          <Link className="dropdown-contenta" to="/tournament">
            Tournaments
          </Link>
          <Link className="dropdown-contenta" to="/banlist">
            Rules
          </Link>
          <Link className="dropdown-contenta" to="/">
            About
          </Link>
        </div>
      </div>
      <div className="dropdown">
        <button className="dropdown-button">
          Ranks
          <i class="fa fa-caret-down"></i>
        </button>
        <div className="dropdown-content">
          <Link className="dropdown-contenta" to="/singles">
            Singles
          </Link>
          <Link className="dropdown-contenta" to="/doubles">
            Doubles
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
