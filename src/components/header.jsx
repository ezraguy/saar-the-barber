import React, { useEffect, useRef } from "react";
import "../scss/header.scss";
import { useState } from "react";
import "animate.css";
const Header = ({ he }) => {

  let [headerClass, setHeaderClass] = useState(
    "navbar navbar-expand-lg navbar-dark header "
  );
  let [navClass, setNavClass] = useState("navbar-nav flex-row animate__backInDown ");
  const sideNav = useRef();

  const handleSideNav = (action) => {

    if (action === "open") {
      sideNav.current.style.display = "inline-block";
      setNavClass("navbar-nav animate__backInDown ");
    } else {
      sideNav.current.style.display = "none";
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
      <nav className={headerClass} >
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
        <div className="collapse navbar-collapse" id="navbarNav" ref={sideNav}>

          <ul className={he ? navClass : 'navbar-nav flex-row-reverse animate__backInDown '}>
            <span className="x-button" onClick={handleSideNav}>
              X
            </span>
            <li className="nav-item order-3" >

              <a className="nav-link" href="#home" onClick={handleSideNav}>
                {he && <span>דף הבית</span>}
                {!he && <span>HOME</span>}

              </a>
            </li>
            <li className="nav-item order-2">
              <a className="nav-link" href="#info" onClick={handleSideNav}>
                {he && <span>קצת מידע</span>}
                {!he && <span>INFO</span>}
              </a>
            </li>
            <li className="nav-item order-1">
              <a className="nav-link" href="#reviews" onClick={handleSideNav}>
                {he && <span>ביקורות</span>}
                {!he && <span>REVIEWS</span>}
              </a>
            </li>
            <li className="nav-item order-0">
              <a className="nav-link" href="#gallery" onClick={handleSideNav}>
                {he && <span>גלריה</span>}
                {!he && <span>GALLERY</span>}
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
