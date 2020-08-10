import React from "react";
import "../scss/about-me.scss";
import { ReactComponent as PhoneSvg } from "../svg/phone.svg";
import { ReactComponent as AddressSvg } from "../svg/address.svg";
import { ReactComponent as ClockSvg } from "../svg/clock.svg";
import MainButton from "./main-button";

const AboutMe = ({ he }) => {

  return (
    <div id="aboutMe" className="about-me container-fluid">
      <div className="row">
        <div className={he ? 'container right-panel col-12 col-lg-6 order-2 ' : 'container right-panel col-12 col-lg-6  '}>
          <div className={he ? "map container " : ' map container justify-content-end'}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3379.017612591515!2d34.82635138449781!3d32.122826624358595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d4929572d0da3%3A0x7e0f7b453972932d!2sSaar%20the%20barber!5e0!3m2!1siw!2sil!4v1596541789336!5m2!1siw!2sil"
              width="500"
              height="350"
              frameBorder="0"
              title="barbershop"
              allowFullScreen={false}
              aria-hidden="false"
              tabIndex="0"
            ></iframe>
          </div>
        </div>


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
