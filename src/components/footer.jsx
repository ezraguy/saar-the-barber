import React from "react";
import "../scss/footer.scss";
import { ReactComponent as PhoneSvg } from "../svg/phone.svg";

const Footer = () => {
  return (
    <div className="container-fluid footer">
      <div className="row">
        <div className="contnet col-lg-5 col-xl-5 col-12">
          <div id="mainTitle">Saar the barber</div>
          <div className="footer-sub-title gold">
            The best haircut you will ever get.
          </div>
        </div>

        <div className="explore col-lg-3 col-xl-3 col-12">
          <div className="title">Explore</div>
          <a href="#home">HOME</a>
          <a href="#aboutMe">about</a>
          <a href="#reviews">reviews</a>
          <a href="#gallery">gallery</a>
        </div>

        <div className="lets-talk col-lg-4 col-xl-4 col-12">
          <div className="title">LET'S TALK</div>
          <PhoneSvg className="phone-svg" />
          <span>0548181959</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
