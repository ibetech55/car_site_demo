import React from "react";
import "./index.css";
// import { getMakes, getModels } from "../../../Services/Brands";

const Header = () => {
  // const [makes, setMakes] = useState<any>([]);
  // const [models, setModels] = useState<any>([]);

  // const handleGetMakes = async () => {
  //   const data = await getMakes();
  //   setMakes(data);
  // };

  // const handleGetModels = async (make: string) => {
  //   const data = await getModels(make);
  //   setModels(data);
  // };

  // useEffect(() => {
  //   handleGetMakes();
  // }, []);

  return (
    <div className="header__container">
      <div className="header__content">
        <h1>Check out new cars weekly</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat
          minima repellendus nesciunt corrupti eligendi! Numquam nobis officia
          inventore distinctio autem dolores vel natus, quo saepe, rerum neque
          veniam itaque quas.
        </p>
        {/* <div className="header__search-container">
          <select
            className="header__search-make"
            onChange={async (e) => await handleGetModels(e.target.value)}
          >
            <option value="">Make</option>
            {makes.map((x: any) => (
              <option value={x.name}>{x.name}</option>
            ))}
          </select>
          <select className="header__search-model">
            <option value="">Model</option>
            {models.map((x: any) => (
              <option value={x.model}>{x.model}</option>
            ))}
          </select>
          <button className="btn btn-primary">Search Cars</button>
        </div> */}

        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora et
          aut, nostrum saepe facere ipsa.
        </p>
      </div>
      <div className="header__image">
        <img src="/assets/header-image.png" alt="header car" />
      </div>
    </div>
  );
};

export default Header;
