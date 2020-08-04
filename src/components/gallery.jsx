import React from "react";
import "../scss/gallery.scss";
import InstagramEmbed from "react-instagram-embed";

const Gallery = () => {
  return (
    <div className="contaniner-fluid gallery">
      <p className="title">Check us out on insatgram</p>
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div
            data-aos="fade-up"
            data-aos-delay="100"
            className="post col-xl-3 col-lg-5 col-md-5 col-sm-10 col-xs-12"
          >
            <InstagramEmbed
              url="https://www.instagram.com/p/CDd46zxAd5X/?utm_source=ig_web_copy_link"
              maxWidth={320}
              hideCaption={true}
              protocol=""
              containerTagName="div"
              injectScript
            />
          </div>

          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="post col-xl-3 col-lg-5 col-md-5 col-sm-10"
          >
            <InstagramEmbed
              url="https://www.instagram.com/p/CC6aHzVAkr7/?utm_source=ig_web_copy_link"
              maxWidth={320}
              hideCaption={true}
              containerTagName="div"
              protocol=""
              injectScript
            />
          </div>

          <div
            data-aos="fade-up"
            data-aos-delay="300"
            className="post col-xl-3 col-lg-5 col-md-5 col-sm-10 "
          >
            <InstagramEmbed
              url="https://www.instagram.com/p/CA5VTDEAhLF/?utm_source=ig_web_copy_link"
              maxWidth={320}
              hideCaption={true}
              containerTagName="div"
              protocol=""
              injectScript
            />
          </div>

          <div
            data-aos="fade-up"
            data-aos-delay="400"
            className="post col-xl-3 col-lg-5 col-md-5 col-sm-10 "
          >
            <InstagramEmbed
              url="https://www.instagram.com/p/CCY9UypguTI/?utm_source=ig_web_copy_link"
              maxWidth={320}
              hideCaption={true}
              containerTagName="div"
              protocol=""
              injectScript
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
