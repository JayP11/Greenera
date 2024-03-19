import React from "react";
import "./Homepage.css";
import { HomeHero, HomeOurBrands, HomeOurValues } from "../../components";

const Homepage = () => {
  return (
    <div>
      <HomeHero />
      <HomeOurValues />
      <HomeOurBrands />
    </div>
  );
};

export default Homepage;
