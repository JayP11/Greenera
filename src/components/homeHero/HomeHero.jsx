import React from "react";
import "./HomeHero.css";
import images from "../../constants/images";
// import images from "../../constants/images";

const HomeHero = () => {
  return (
    <div
      className=""
      style={{
        backgroundImage: `url(${images.hero_img})`,
        backgroundSize: "cover",
        height: "85vh",
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
            <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
          </div>
          <div>
            <p
              style={{
                lineHeight: "1.5",
                letterSpacing: "1px",
                wordSpacing: "1px",
              }}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum
              corporis necessitatibus ea, repudiandae voluptas nesciunt omnis
              libero. Quasi dolorem eius architecto porro consequatur officiis
              laudantium reprehenderit quis commodi. Incidunt consequuntur
              necessitatibus voluptatibus autem ex eligendi sequi maiores amet
              explicabo ut.{" "}
            </p>
            <h5
              style={{
                lineHeight: "1.5",
                letterSpacing: "1px",
                wordSpacing: "1px",
              }}>
              Free nationwide collection and delivery.
            </h5>
          </div>
          <div>
            <button className="btn">Contact now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
