import React, { useEffect, useState } from "react";
import Special from "./components/Special";
import "./index.css";
import { getSpecials } from "../../../Services/Specials.ts";

const Specials = () => {
  const [specials, setSpecials] = useState([]);
  const handleGetSpecials = async () => {
    const data = await getSpecials();
    setSpecials(data);
  };
  useEffect(() => {
    handleGetSpecials();
  }, []);
  return (
    <div className="specials__container" id="specials">
      <h1>View our weekly specials</h1>
      <div className="specials__special-container">
        {specials.map((x: any) => (
          <>
            <Special
              make={x.make}
              model={x.model}
              year={x.year}
              color={x.color}
              price={x.price}
              mileage={x.mileage}
              transmition={x.transmition}
              image={x.image}
            />
          </>
        ))}
      </div>
    </div>
  );
};

export default Specials;
