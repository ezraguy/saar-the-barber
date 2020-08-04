import React from "react";
import "../scss/book-appointment.scss";
const BookButton = () => {
  const handleAppClick = () => {
    window.location =
      "https://calendar.plannie.co.il/?name=saarthebarber&self=true#!/";
  };
  return (
    <button
      onClick={handleAppClick}
      data-aos="fade-down"
      className="btn scheduleApp"
      data-aos-delay="400"
    >
      <span>Schedule Appointment</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-arrow-right"
      >
        <line x1="5" y1="12" x2="19" y2="12"></line>
        <polyline points="12 5 19 12 12 19"></polyline>
      </svg>
    </button>
  );
};

export default BookButton;