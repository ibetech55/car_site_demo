import React from "react";
import "./index.css";

const Brands = () => {
  return (
    <div className="brands__container" id="brands">
      <h1>View Many Car brands nation and international</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam,
        voluptas.
      </p>
      <div className="brands__list">
        <div className="brands__logo">
          <img src="/assets/acura-logo.png" alt="acura logo" />
        </div>
        <div className="brands__logo">
          <img src="/assets/nissan-logo.png" alt="nissan logo" />
        </div>
        <div className="brands__logo">
          <img src="/assets/lexus-logo.png" alt="lexus logo" />
        </div>
        <div className="brands__logo">
          <img src="/assets/infiniti-logo.png" alt="infiniti logo" />
        </div>
        <div className="brands__logo">
          <img src="/assets/jeep-logo.png" alt="jeep logo" />
        </div>
        <div className="brands__logo">
          <img src="/assets/volvo-logo.png" alt="volvo logo" />
        </div>
      </div>
    </div>
  );
};

export default Brands;
