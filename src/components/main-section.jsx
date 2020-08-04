import React from "react";
import "../scss/main-section.scss";
import logo from "../images/logo.png";
import { ReactComponent as InstaSvg } from "../svg/instagram.svg";
import { ReactComponent as MapsSvg } from "../svg/maps.svg";

const Main = () => {
  const handleAppClick = () => {
    window.location =
      "https://calendar.plannie.co.il/?name=saarthebarber&self=true#!/";
  };
  const goToSocial = (platform) => {
    if (platform === "insta")
      window.location = "https://www.instagram.com/saarthebarber/";
    if (platform === "google")
      window.location = "https://g.page/saar-the-barber?share";
  };
  return (
    <div id="home" className="container-fluid  p-0 mainWrap">
      <div className="main container">
        <div data-aos="fade-down" data-aos-delay="100" className="content">
          <img src={logo} className="logo" alt="logo" />
        </div>
        <p data-aos="fade-down" data-aos-delay="200" className="textUnderImg">
          Saar Tal,
        </p>
        <p data-aos="fade-down" data-aos-delay="300" className="textUnderImg">
          Your next barber.
        </p>
        <button
          onClick={handleAppClick}
          data-aos="fade-down"
          className="btn scheduleApp"
          data-aos-delay="400"
        >
          <span>Schedule Appointment</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-arrow-right"
          >
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </button>
      </div>
      <div className="icons">
        <InstaSvg onClick={() => goToSocial("insta")} className="mr-2" />
        <MapsSvg onClick={() => goToSocial("google")} />
      </div>
    </div>
  );
};

export default Main;
