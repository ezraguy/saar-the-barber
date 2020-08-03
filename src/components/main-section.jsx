import React from "react";
import "../scss/main-section.scss";
import logo from "../images/logo.png";
const Main = () => {
  return (
    <div className="container-fluid  p-0 mainWrap">
      <div className="main container">
        <div data-aos="fade-left" data-aos-duration="1000" className="content">
          <img src={logo} className="logo" alt="logo" />
        </div>
        <p
          data-aos="fade-right"
          data-aos-duration="1000"
          className="textUnderImg"
        >
          Your next barber.
        </p>
      </div>
    </div>
  );
};

export default Main;
