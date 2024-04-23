import React from "react";
import "./HomeOurBrands.css";
import images from "../../constants/images";
import { Link } from "react-router-dom";

const HomeOurBrands = () => {
  return (
    <div style={{ padding: "4rem 0" }}>
      <div className="">
        <div className="heading">
          <h1>OUR BRANDS</h1>
        </div>
        <div className="underline"></div>
      </div>
      <div className="HomeOurBrands_main">
        <div className="HomeOurBrands_part1_main">
          <div className="HomeOurBrands_words_main">
            <div className="HomeOurBrands_words_inner">TEAM.</div>
            <div className="HomeOurBrands_words_inner">CUSTOMER.</div>
            <div className="HomeOurBrands_words_inner">COMMUNITY.</div>
          </div>
          <h1>We Work With The Best Partners</h1>
          <div>
            We have set a paradigm of perfect and quality-oriented products by
            working with these worldwide famous brands. Responsibility in the
            market and innovation in products has always been our strong points.
          </div>
          <Link to="/about">
            <button className="btn btn_bg">Read more</button>
          </Link>
        </div>
        <div className="HomeOurBrands_part2_main">
          <div className="HomeOurBrands_logo_main">
            <img
              src={images.GreenShield}
              alt=""
              className="HomeOurBrands_logo_inner"
            />
          </div>
          <div className="HomeOurBrands_logo_main">
            <img
              src={images.Radiance}
              alt=""
              className="HomeOurBrands_logo_inner"
            />
          </div>
          <div className="HomeOurBrands_logo_main">
            <img
              src={images.RainCare}
              alt=""
              className="HomeOurBrands_logo_inner"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeOurBrands;
