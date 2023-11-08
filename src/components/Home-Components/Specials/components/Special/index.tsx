import React from "react";
import "./index.css";

const Special = ({
  make,
  model,
  year,
  price,
  color,
  transmition,
  mileage,
  image,
}: any) => {
  return (
    <div className="special__container">
      <div className="special__car-image">
        <img src={`/assets/${image}`} alt="test" />
      </div>
      <div className="special__content">
        <p className="special__content-title">
          {year} {make} {model}
        </p>
        <p className="special__content-price">{price}</p>
        <p className="special__content-color">{color}</p>
        <p className="special__content-trans">{transmition}</p>
        <p className="special__content-miles">{mileage} mi</p>
      </div>
    </div>
  );
};

export default Special;
