import React from "react";
import "../scss/gallery.scss";
import InstagramEmbed from "react-instagram-embed";

const Gallery = () => {
  return (
    <div className="contaniner-fluid gallery">
      <p className="title">Check us out on insatgram</p>
      <div className="container posts">
        <InstagramEmbed
          data-aos="fade-down"
          data-aos-delay="100"
          url="https://www.instagram.com/p/CDd46zxAd5X/?utm_source=ig_web_copy_link"
          maxWidth={320}
          hideCaption={true}
          containerTagName="div"
          className="post"
          protocol=""
          injectScript
          onLoading={() => {}}
          onSuccess={() => {}}
          onAfterRender={() => {}}
          onFailure={() => {}}
        />
        <InstagramEmbed
          data-aos="fade-down"
          data-aos-delay="200"
          url="https://www.instagram.com/p/CCY9UypguTI/?utm_source=ig_web_copy_link"
          maxWidth={320}
          hideCaption={true}
          containerTagName="div"
          className="post"
          protocol=""
          injectScript
          onLoading={() => {}}
          onSuccess={() => {}}
          onAfterRender={() => {}}
          onFailure={() => {}}
        />
        <InstagramEmbed
          data-aos="fade-down"
          data-aos-delay="300"
          url="https://www.instagram.com/p/CC6aHzVAkr7/?utm_source=ig_web_copy_link"
          maxWidth={320}
          hideCaption={true}
          containerTagName="div"
          className="post"
          protocol=""
          injectScript
          onLoading={() => {}}
          onSuccess={() => {}}
          onAfterRender={() => {}}
          onFailure={() => {}}
        />
        <InstagramEmbed
          data-aos="fade-down"
          data-aos-delay="400"
          url="https://www.instagram.com/p/CA5VTDEAhLF/?utm_source=ig_web_copy_link"
          maxWidth={320}
          hideCaption={true}
          containerTagName="div"
          className="post"
          protocol=""
          injectScript
          onLoading={() => {}}
          onSuccess={() => {}}
          onAfterRender={() => {}}
          onFailure={() => {}}
        />
      </div>
    </div>
  );
};

export default Gallery;
