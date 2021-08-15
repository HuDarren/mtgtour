/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../store";
import "./nav-z.css";

const NavHome = ({ handleClick, isLoggedIn }) => (
  <div className="nav-container">
    <nav className="nav-container1">
      {isLoggedIn ? (
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
              <div className="nav-log">
                <a className="nav-log2" href="#" onClick={handleClick}>
                  Logout
                </a>
              </div>
            </div>
          </div>
        </nav>
      ) : (
        <header class="menu">
          <div class="menu-wrap">
            <img src="logo.png" class="logo-img" alt="Logo"></img>
            <input type="checkbox" id="checkbox"></input>
            <nav>
              <ul>
                <li>
                  <Link to="/">Planewalkers</Link>
                </li>
                <li>
                  <Link to="/banlist">Rules</Link>
                </li>
                <li>
                  <Link to="/login">Login</Link>
                </li>
              </ul>
            </nav>

            <label for="checkbox">
              <i class="fa fa-bars menu-icon"></i>
            </label>
          </div>
        </header>
      )}
    </nav>
  </div>
);

const mapState = (state) => {
  return {
    isLoggedIn: !!state.player.id,
  };
};

const mapDispatch = (dispatch) => {
  return {
    handleClick() {
      dispatch(logout());
    },
  };
};

export default connect(mapState, mapDispatch)(NavHome);

NavHome.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
};
