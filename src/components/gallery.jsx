import React, { } from "react";
import "../scss/gallery.scss";
import { useState } from "react";
import SwiperCore, { Pagination, Autoplay, EffectFade } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import pic1 from '../images/pic1.jpg';
import pic2 from '../images/pic2.jpg';
import pic3 from '../images/pic3.jpg';
import pic4 from '../images/pic4.jpg';
import pic5 from '../images/pic5.jpg';
import pic6 from '../images/pic6.jpg';
import pic7 from '../images/pic7.jpg';
import pic8 from '../images/pic8.jpg';

SwiperCore.use([Pagination, Autoplay,])
const Gallery = () => {
  let [photos] = useState([
    { id: 1, img: pic1 },
    { id: 2, img: pic2 },
    { id: 3, img: pic3 },
    { id: 4, img: pic4 },
    { id: 5, img: pic5 },
    { id: 6, img: pic6 },
    { id: 7, img: pic7 },
    { id: 8, img: pic8 },
  ]);
  return (
    <div id="gallery" className="contaniner-fluid gallery">

      <div className="container-fluid">
        <Swiper
          spaceBetween={40}
          slidesPerView={3}
          navigation
          delay={10}
          autoplay
          loop={true}
          pagination={true}
          breakpoints={{
            300: {
              width: 300,
              slidesPerView: 1,
            },
            440: {
              width: 440,
              slidesPerView: 1,
            },
            640: {
              width: 640,
              slidesPerView: 1,
            }, 768: {
              width: 768,
              slidesPerView: 2,
            },
            1400: {
              width: 1400,
              slidesPerView: 3,
            },
          }}
        >
          {photos.map((photo) => {
            return (

              <SwiperSlide className="slide"><img src={photo.img} className="sliderImg" alt="img" /></SwiperSlide>
            )

          })}
        </Swiper>
      </div>
    </div >
  );
};

export default Gallery;
