import React from "react";
import "../scss/reviews.scss";
import MainButton from "./main-button";
import background from "../images/reviews-background.jpg";
import { ReactComponent as Star } from "../svg/star.svg";
import { useState } from "react";
const Reviews = () => {
  const [reviews] = useState([
    {
      id: 1,
      text: `Looked for a good barber in close vicinity to my home. I found Saar, and I'm glad did!
      Aside for being a professional in his field, he also a fantastic person! It's fun to come and get a good haircut and get your beard trimmed. Cool and relaxed vibes along with an ice cold beer, that's what you get here. Very recommended, now it's my usual place.`,
      stars: [1, 2, 3, 5, 4],
      dir: "ltr",
      name: "Hanan Mishurin",
      className: "carousel-item active",
    },
    {
      id: 2,
      text: `You can now call this barber your new best friend. Thank you Saar for the haircut!! Fantastic treatment and lovely place.`,
      stars: [1, 2, 3, 4, 5],
      dir: "ltr",
      name: "Ron Erlichman",
      className: "carousel-item",
    },
    {
      id: 3,
      text: `
      .אחד הספרים התותחים שנתקלתי בהם אחרי שנים של חיפושים. יודע ישר להתאים לי את מה שאני רוצה. באמת מקצוען אמיתי ואני שמח שפגשתי אותו
      `,
      stars: [1, 2, 3, 4, 5],
      dir: "rtl",
      name: "reshef Halperin",
      className: "carousel-item",
    },
  ]);
  return (
    <div id="reviews" className="reviews container-fluid">
      <img src={background} className="background" alt="" />
      <div className="reviews-content container-fluid">
        <div className="title container">
          <p>What customers say about us</p>
        </div>
      </div>

      <div className="carousel">
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="container">
              {reviews.map((review) => {
                return (
                  <div key={review.id} className={review.className}>
                    <div className="stars">
                      {review.stars.map((id, index) => {
                        return <Star key={index} className="mx-1" />;
                      })}
                    </div>
                    <div
                      className="review-text"
                      style={{ direction: review.dir }}
                    >
                      <p>{review.text}</p>
                    </div>

                    <div className="name">{review.name}</div>
                  </div>
                );
              })}
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleControls"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleControls"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </a>
          <MainButton
            className="write-review"
            text="Write a review"
            location="https://g.page/saarthebarber/review?gm"
          />
        </div>
      </div>
    </div>
  );
};

export default Reviews;
