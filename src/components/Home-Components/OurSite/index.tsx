import React from "react";
import "./index.css";
import Category from "./components/Category";
const OurSite = () => {
  return (
    <div className="oursite__container" id="oursite">
      <h1>Our Site</h1>
      <p className="oursite__text">
        What our site offers. Check out what other possibilities you can do on
        this site.
      </p>
      <div className="oursite__categories">
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
      </div>
    </div>
  );
};

export default OurSite;
