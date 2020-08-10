import React from "react";
import "../scss/reviews.scss";
import MainButton from "./main-button";
import background from "../images/reviews-background.jpg";
import { ReactComponent as Star } from "../svg/star.svg";
import { useState } from "react";
const Reviews = ({ he }) => {
  const [reviews] = useState([
    {
      id: 1,
      enText: 'Highly talented barber, professional and dedicated.',
      heText: '.ספר מוכשר מאוד, מקצועי ומסור',
      stars: [1, 2, 3, 5, 4],
      name: "Eliran Elnasi",
      className: "carousel-item active",
    },
    {
      id: 2,
      enText: 'You can now call this barber your new best friend. Thank you Saar for the haircut!! Fantastic treatment and lovely place.',
      heText: 'אתם יכולים לקרוא לספר הזה החבר הכי טוב שלכם. תודה לך סער על התספורת!! טיפול נהדר ומקום מקסים',
      stars: [1, 2, 3, 4, 5],
      name: "Ron Erlichman",
      className: "carousel-item",
    },
    {
      id: 3,
      heText: 'אחד הספרים התותחים שנתקלתי בהם אחרי שנים של חיפושים. יודע ישר להתאים לי את מה שאני רוצה. באמת מקצוען אמיתי ואני שמח שפגשתי אותו',
      enText: `One of the best barbers I have ever met after years of search. knows how to suit me what I want. A true professional and I'm so happy I found him .`,
      stars: [1, 2, 3, 4, 5],
      name: "reshef Halperin",
      className: "carousel-item",
    },
  ]);
  return (
    <div id="reviews" className="reviews container-fluid">
      <img src={background} className="background" alt="" />
      <div className="reviews-content container-fluid">
        <div className="title container">
          <p>{he ? 'מה לקוחות חושבים עלי' : 'What customers say about me'}</p>
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
                      className="review-text d-flex justify-content-center"

                    >
                      <p className={he ? "mb-2 text-right" : "mb-2 text-left"}>{he ? review.heText : review.enText}</p>
                    </div>
                    <br />
                    <div className="name mt-2">{review.name}</div>
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
            he={he}
            className="write-review"
            text={he ? 'כתוב ביקורת' : "Write a review"}
            location="https://g.page/saarthebarber/review?gm"
          />
        </div>
      </div>
    </div>
  );
};

export default Reviews;
