import React from "react";
import "../scss/about-me.scss";
import { ReactComponent as PhoneSvg } from "../svg/phone.svg";
import { ReactComponent as AddressSvg } from "../svg/address.svg";
import { ReactComponent as ClockSvg } from "../svg/clock.svg";
import BookButton from "./book-appointment";

const AboutMe = () => {
  return (
    <div id="aboutMe" className="about-me container-fluid">
      <div className="row">
        <div className="container right-panel col-12 col-lg-6">
          <div className="map container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3379.017612591515!2d34.82635138449781!3d32.122826624358595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d4929572d0da3%3A0x7e0f7b453972932d!2sSaar%20the%20barber!5e0!3m2!1siw!2sil!4v1596541789336!5m2!1siw!2sil"
              width="600"
              height="450"
              frameBorder="0"
              title="barbershop"
              allowFullScreen={false}
              aria-hidden="false"
              tabIndex="0"
            ></iframe>
          </div>
        </div>
        <div className="container left-panel col-12 col-lg-6 ">
          <div className="info">
            <p className="title">Good to know</p>
            <p className="sub-title">Some info:</p>

            <div className="hours" data-aos="fade-right">
              <ClockSvg className="mb-4 svg" />
              <ul>
                <li>
                  <span>Sunday: 9am-3:30pm</span>
                </li>
                <li>
                  <span>Monday - Thursday: 9am-8pm</span>
                </li>
                <li>
                  <span>Friday: 9am-3pm</span>
                </li>
                <li>
                  <span>Saturday: Closed</span>
                </li>
              </ul>
            </div>
            <div className="address" data-aos="fade-right">
              <AddressSvg className="mb-4 svg" />
              <span>Bnei Ephraim St 280, Tel Aviv-Yafo</span>
            </div>
            <div className="phone" data-aos="fade-right">
              <PhoneSvg className="mb-4" />
              <span>0548181959</span>
              <br />
              <BookButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
