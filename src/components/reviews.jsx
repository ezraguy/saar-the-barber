import React from "react";
import "../scss/reviews.scss";
import background from "../images/reviews-background.jpg";
const Reviews = () => {
  return (
    <div className="reviews container-fluid">
      <img src={background} className="background" alt="" />
      <div className="reviews-content container-fluid">
        <div className="title container-fluid">
          <p>What customers say about us</p>
        </div>
      </div>
      <div className="carouselWrap container-fluid"></div>
      <div className="carousel">
        <div
          id="carouselExampleControls"
          class="carousel slide"
          data-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <p>hey</p>
            </div>
            <div class="carousel-item">
              <p>hey</p>
            </div>
            <div class="carousel-item">
              <p>hey</p>
            </div>
          </div>
          <a
            class="carousel-control-prev"
            href="#carouselExampleControls"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselExampleControls"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
