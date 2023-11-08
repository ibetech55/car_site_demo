import React from "react";
import "./index.css";
const Review = () => {
  return (
    <div className="review__container">
      <div className="review__image">
        <img src="/assets/ford_explorer.webp" alt="reviewer" />
      </div>
      <div className="review__content">
        <p className="review__title">2023 BMW M2 Lastest review</p>
        <div className="review__line" />
        <p className="review__text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, eius!
        </p>
        <div className="review__reviwer">
          <div className="review__reviewer-image">
            <img src="/assets/reviewer-image.jpeg" alt="picturereviewer" />
          </div>
          <div className="review__reviewer-details">
            <p>Evan Cabaong</p>
            <p>Road Tester</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
