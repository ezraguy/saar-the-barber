import React from "react";
import "../scss/main-section.scss";
import logo from "../images/logo.png";
import background from "../images/main-background.jpg";
import { ReactComponent as InstaSvg } from "../svg/instagram.svg";
import { ReactComponent as MapsSvg } from "../svg/maps.svg";
import MainButton from "./main-button";

const Main = () => {
  const goToSocial = (platform) => {
    if (platform === "insta")
      window.location = "https://www.instagram.com/saarthebarber/";
    if (platform === "google")
      window.location = "https://g.page/saar-the-barber?share";
  };
  return (
    <div id="home" className="container-fluid p-0 mainWrap">
      <img className="background" src={background} alt="" />
      <div className="icons">
        <InstaSvg onClick={() => goToSocial("insta")} className="mr-2" />
        <MapsSvg onClick={() => goToSocial("google")} />
      </div>
      <div className="main container">
        <div className="content">
          <img src={logo} className="logo" alt="logo" />
        </div>
        <p className="textUnderImg">Saar Tal</p>
        <p className="textUnderImg">Your next barber.</p>
        <MainButton
          text="schedule appointment"
          location="https://calendar.plannie.co.il/?name=saarthebarber&self=true#!/"
        />
      </div>
    </div>
  );
};

export default Main;
