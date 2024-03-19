import React from "react";
import "./Homepage.css";
import { HomeHero, HomeOurBrands, HomeOurValues, HomeProducts } from "../../components";

const Homepage = () => {
  return (
    <div>
      <HomeHero />
      <HomeOurValues />
      <HomeProducts />
      <HomeOurBrands />
    </div>
  );
};

export default Homepage;
