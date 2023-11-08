import React from "react";
import Review from "./components/review";
import "./index.css";

const Reviews = () => {
  return (
    <div className="reviews__container" id="reviews">
      <h1>Latest reviews from experts</h1>
      <h2>Get some reviews from our experts</h2>
      <div className="reviews__review">
        <Review />
        <Review />
        <Review />
        <Review />
      </div>
      <p className="reviews__see-more">
        <a href="/">See More Reviews</a>
      </p>
    </div>
  );
};

export default Reviews;
