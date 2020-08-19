import React from "react";
import "../scss/footer.scss";
import { ReactComponent as PhoneSvg } from "../svg/phone.svg";

const Footer = ({ he }) => {
  return (
    <div className={he ? "container-fluid footer justify-content-end " : 'container-fluid footer justify-content-start'}>
      <div className={he ? "row text-right flex-row" : 'row text-left flex-row-reverse'}>
        <div className={he ? "contnet col-lg-5 col-xl-5 col-12 order-last" : 'contnet col-lg-5 col-xl-5 col-12 order-last'}>
          <div id="mainTitle">Saar the barber</div>
          <div className="footer-sub-title gold ">
            {he ? 'התספורת הכי טובה שתקבלו' : 'The best haircut you will ever get.'}
          </div>
        </div>

        <div className="explore col-lg-3 col-xl-3 col-12 ">
          <div className="title">{he ? 'ניווט' : 'Explore'}</div>
          <a href="#home">{he ? 'דף הבית' : 'HOME'}</a>
          <a href="#info">{he ? 'קצת עלי' : 'ABOUT'}</a>
          <a href="#reviews">{he ? 'ביקורות' : 'REVIEWS'}</a>
          <a href="#gallery">{he ? 'גלריה' : 'GALLERY'}</a>
        </div>

        <div className={he ? "lets-talk col-lg-4 col-xl-4 col-12 order-first" : "lets-talk col-lg-4 col-xl-4 col-12 order-first"} >
          <div className="title">{he ? 'לפרטים' : 'LET\'S TALK'}</div>
          <PhoneSvg className="phone-svg" />
          <a href="tel:0548181959">0548181959</a>
        </div>
      </div>
    </div >
  );
};

export default Footer;
