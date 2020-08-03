import React from "react";
import "../scss/about-me.scss";
import { ReactComponent as PhoneSvg } from "../svg/phone.svg";
import { ReactComponent as AddressSvg } from "../svg/address.svg";
import { ReactComponent as ClockSvg } from "../svg/clock.svg";

const AboutMe = () => {
  return (
    <div id="aboutMe" className="about-me container-fluid">
      <div className="row">
        <div className="container left-panel col-12 col-lg-6">
          <div className="">
            <p className="title">So much more then just a haircut!</p>
            <p className="semi-title">we offer:</p>
            <ul>
              <li>haircuts</li>
              <li>breads triming and design</li>
              <li>skin treatments</li>
              <li>wax</li>
            </ul>
          </div>
          <div className="info">
            <p className="title">some info:</p>

            <div className="hours">
              <ClockSvg className="svg" />
              <span>Sunday: 9am-3:30pm</span>
              <br />
              <span>Monday-Thursday: 9am-3:30pm</span>
            </div>

            <p>
              <AddressSvg />
            </p>
            <p>
              <PhoneSvg />
            </p>
          </div>
        </div>
        <div className="container right-panel col-12 col-lg-6">s</div>
      </div>
    </div>
  );
};

export default AboutMe;
