import React, { useEffect } from "react";
import "./Homepage.css";
import {
  HomeHero,
  HomeOurBrands,
  HomeOurValues,
  HomeProducts,
  HomeWhyUS,
} from "../../components";
import { Helmet } from "react-helmet";
import Navbar from "../../common/navbar/Navbar";

const Homepage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Green Era | Home</title>
      </Helmet>
      <Navbar />
      <div>
        <HomeHero />
        <HomeOurValues />
        <HomeProducts />
        <HomeWhyUS />
        <HomeOurBrands />
      </div>
    </>
  );
};

export default Homepage;
