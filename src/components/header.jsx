import React, { useEffect, useRef } from "react";
import "../scss/header.scss";
import { useState } from "react";
import "animate.css";
const Header = () => {
  let [headerClass, setHeaderClass] = useState(
    "navbar navbar-expand-lg navbar-dark  header"
  );
  let [navClass, setNavClass] = useState("navbar-nav animate__backInDown");
  const sideNav = useRef();

  const handleSideNav = (action) => {
    if (action === "open") {
      sideNav.current.style.display = "inline-block";
      setNavClass("navbar-nav animate__backInDown ");
    } else {
      setNavClass("navbar-nav animate__backOutDown ");
      setTimeout(() => {
        sideNav.current.style.display = "none";
      }, 500);
    }
  };
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
        <p className="navbar-brand">SAAR THE BARBER</p>
        <button
          onClick={() => handleSideNav("open")}
          className="navbar-toggler"
          type="button"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarNav" ref={sideNav}>
          <ul className={navClass}>
            <span className="x-button" onClick={handleSideNav}>
              X
            </span>
            <li className="nav-item">
              <a className="nav-link" href="#home" onClick={handleSideNav}>
                HOME
              </a>
            </li>
            <li className="nav-item middleLink">
              <a className="nav-link" href="#aboutMe" onClick={handleSideNav}>
                ABOUT ME
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#reviews" onClick={handleSideNav}>
                REVIEWS
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#gallery" onClick={handleSideNav}>
                GALLERY
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
