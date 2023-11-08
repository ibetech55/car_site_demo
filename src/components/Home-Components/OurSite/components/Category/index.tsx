import React from "react";
import { BsFillCarFrontFill } from "react-icons/bs";
import "./index.css";
const Category = () => {
  return (
    <div className="category__container">
      <div className="category__icon">
        <BsFillCarFrontFill size={40} color="#031B34" />
      </div>
      <div className="category__content">
        <h2>Shop</h2>
        <p className="category__content-text">
          Search millions of new and used cars for sale. Save favorites for
          price drop alerts and tailored recommendations. Find the right vehicle
          at a highly-rated local dealer.
        </p>
        <p className="category__content-link">
          <a href="/">Search cars for sale</a>
        </p>
      </div>
    </div>
  );
};

export default Category;
