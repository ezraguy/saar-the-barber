import React from "react";
import "../scss/gallery.scss";
import InstagramEmbed from "react-instagram-embed";
import { useState } from "react";

const Gallery = ({ he }) => {
  let [posts] = useState([
    { id: 1, url: "https://www.instagram.com/p/CDd46zxAd5X/", delay: "100" },
    { id: 2, url: "https://www.instagram.com/p/CC6aHzVAkr7/", delay: "200" },
    { id: 3, url: "https://www.instagram.com/p/CA5VTDEAhLF/", delay: "300" },
    { id: 4, url: "https://www.instagram.com/p/CCY9UypguTI/", delay: "400" },
  ]);
  return (
    <div id="gallery" className="contaniner-fluid gallery">
      <p className="title">{he ? 'בואו לעקוב אחרי באינסטגרם' : 'Check me out on Insatgram'}</p>

      <div className="container-fluid">
        <div className="row justify-content-center">
          {posts.map((post) => {
            return (
              <div
                key={post.id}
                data-aos="fade-down"
                data-aos-delay={post.delay}
                className="post col-xl-3 col-lg-5 col-md-5 col-sm-10 col-xs-12"
              >
                <InstagramEmbed
                  url={post.url}
                  maxWidth={320}
                  hideCaption={true}
                  protocol=""
                  containerTagName="div"
                  injectScript
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
