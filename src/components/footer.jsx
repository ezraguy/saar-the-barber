import React from "react";
import "../scss/footer.scss";
import { ReactComponent as PhoneSvg } from "../svg/phone.svg";

const Footer = () => {
  return (
    <div className="container-fluid footer">
      <div className="row">
        <div className="contnet col-5">
          <div id="mainTitle">Saar the barber</div>
          <div className="footer-sub-title">
            The best haircut you will ever get.
          </div>
        </div>

        <div className="explore col">
          <div className="title">Explore</div>
          <a href="#home">HOME</a>
          <a href="#aboutMe">about</a>
          <a href="#reviews">reviews</a>
          <a href="#gallery">gallery</a>
        </div>

        <div className="lets-talk col">
          <div className="title">LET'S TALK</div>

          <PhoneSvg className="phone-svg" />
          <span>0548181959</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
