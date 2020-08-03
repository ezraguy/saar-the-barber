import React, { useEffect } from "react";
import "../scss/header.scss";
import { useState } from "react";
const Header = () => {
  let [headerClass, setHeaderClass] = useState(
    "navbar navbar-expand-lg navbar-dark  header"
  );
  const handleHeader = () => {
    if (window.pageYOffset > 20) {
      setHeaderClass(
        "navbar navbar-expand-lg navbar-dark  header shadow sticky"
      );
    } else {
      setHeaderClass("navbar navbar-expand-lg navbar-dark  header");
    }
  };
  useEffect(() => {
    function handleScroll() {
      window.addEventListener("scroll", handleHeader);
    }
    handleScroll();
  });
  return (
    <>
      <nav className={headerClass}>
        <p className="navbar-brand">SAAR TAL</p>
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
              <a className="nav-link" href="#aboutMe">
                ABOUT ME
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#a">
                PRICING
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#a">
                PRICING
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
