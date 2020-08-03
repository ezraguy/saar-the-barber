import React from "react";
import "../scss/header.scss";
const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark  header ">
      <a className="navbar-brand" href="#">
        SAAR TAL
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item ">
            <a className="nav-link" href="#home">
              HOME
            </a>
          </li>
          <li className="nav-item middleLink">
            <a className="nav-link" href="#">
              ABOUT ME
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              PRICING
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              PRICING
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
