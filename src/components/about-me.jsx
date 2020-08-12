import React from "react";
import "../scss/about-me.scss";
import { ReactComponent as PhoneSvg } from "../svg/phone.svg";
import { ReactComponent as AddressSvg } from "../svg/address.svg";
import { ReactComponent as ClockSvg } from "../svg/clock.svg";
import MainButton from "./main-button";
import Map from './map';
const AboutMe = ({ he }) => {
  return (
    <div id="info" className="about-me container-fluid">
      <div className="row">

        <Map he={he} />

        <div className={he ? 'container left-panel col-12 col-lg-6 rtl  ' : 'container left-panel col-12 col-lg-6 '}>
          <div className="info ">
            <p className={he ? "title px-2 text-right" : 'title px-2 rtl'}>{he ? 'קצת מידע' : 'Some info'}</p>

            <div className={he ? "hours text-right" : 'hours'} data-aos="fade-right">
              <ClockSvg className="mb-4 svg pl-1" />
              <ul>

                <li>
                  <span >
                    <b>{he ? 'ראשון' : 'Sunday'}</b>: 9:00-15:30
                  </span>
                </li>
                <li>
                  <span>
                    <b>{he ? 'שני - חמישי' : 'Monday - Thursday'}</b>: 9:00-20:00
                  </span>
                </li>
                <li>
                  <span>
                    <b>{he ? 'שישי' : 'Friday'}</b>: 9:00-15:00
                  </span>
                </li>
                <li>
                  {he ? <span>
                    <b>שבת</b>: סגור
                  </span> : <span>
                      <b>Saturday</b>: Closed
                  </span>}

                </li>
              </ul>
            </div>
            <div className="address" data-aos="fade-right">
              <AddressSvg className="mb-4 svg" />
              <span>{he ? 'בני אפרים 280, תל אביב יפו.' : 'Bnei Ephraim St 280, Tel Aviv-Yafo'}</span>
            </div>
            <div className="phone" data-aos="fade-right">
              <PhoneSvg className="mb-4" />
              <a href="tel:0548181959" className="pl-2">0548181959</a>
              <br />
            </div>
            <MainButton
              he={he}
              text={he ? "קביעת פגישה" : 'schedule appointment'}
              location="https://calendar.plannie.co.il/?name=saarthebarber&self=true#!/"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
