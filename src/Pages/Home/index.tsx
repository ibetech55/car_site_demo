import React from "react";
import {
  Navbar,
  Header,
  // Brands,
  // Specials,
  Reviews,
  OurSite,
  PopularSearches,
} from "../../components/Home-Components";
import "./index.css";
import Footer from "../../components/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />

      <Header />

      {/* <Brands /> */}
{/* 
      <Specials /> */}

      <Reviews />

      <OurSite />

      <PopularSearches />
      <Footer />
    </div>
  );
};

export default Home;
