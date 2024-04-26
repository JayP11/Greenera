import React from "react";
import "./HomeHero.css";
import images from "../../constants/images";
import { Link } from "react-router-dom";
// import images from "../../constants/images";

const HomeHero = () => {
  return (
    <div
      className="HomeHero_main"
      style={{
        backgroundImage: `url(${images.hero_img})`,
      }}>
      <div
        style={{
          backgroundColor: "rgba(0,0,0,.703)",
          color: "var(--color-white)",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}>
        <div className="title_main_hero">
          <div style={{ maxWidth: "570px", textAlign: "center" }}>
            <h1>WELCOME TO GREENERA</h1>
          </div>
          <div>
            <p
              style={{
                lineHeight: "1.5",
                letterSpacing: "1px",
                wordSpacing: "1px",
              }}>
              Green Era Multitech LLP is a leading manufacturer specializing in
              HDPE Tarpaulin, Pond Liners, and a diverse range of products,
              including Multi-layer Cross Lam. Tarpaulin, LDPE Plastic, LDPE
              Pond liners, Shade Nets, Mulch film, Vermi Compost Bed, Grow Bag,
              and Bio-Medical Waste Bag. Our offerings comprise UV-stabilized,
              high-quality Tarpaulin Rolls and various sizes to meet diverse
              needs.
            </p>
            <br />
            <p
              style={{
                lineHeight: "1.5",
                letterSpacing: "1px",
                wordSpacing: "1px",
              }}>
              With a robust stock holding accommodating individual parcels to
              pallets and container loads, we are dedicated to delivering
              competitive prices and upholding the service excellence expected
              from a family-owned business. At Green Era, we prioritize customer
              satisfaction, constantly expanding our product range and enhancing
              existing offerings to provide the best available solutions.
            </p>
          </div>
          <Link to="/contact">
            <button className="btn">Contact now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
