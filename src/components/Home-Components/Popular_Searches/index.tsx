import React from "react";
import "./index.css";

const PopularSearches = () => {
  return (
    <div className="popular-searches__container" id="popularsearches">
      <h1>Popular Searches</h1>
      <div className="popular-searches__categories">
        <p>
          <a href="/">Popular New cars for sale</a>
        </p>
        <p>
          <a href="/">Popular used cars for sale</a>
        </p>
        <p>
          <a href="/">Reasearch Popilar new Cars</a>
        </p>
        <p>
          <a href="/">Reasearch Popular uses Cars</a>
        </p>
      </div>
    </div>
  );
};

export default PopularSearches;
