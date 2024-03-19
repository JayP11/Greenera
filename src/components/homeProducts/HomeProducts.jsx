import React from "react";
import "./HomeProducts.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GiInfo } from "react-icons/gi";
import images from "../../constants/images";
import { TbListDetails } from "react-icons/tb";

const HomeProducts = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <div style={{ background: "#e8f4d9" }}>
      <div className="values_head_main">
        <div className="heading">
          <h1>COUR VALUES</h1>
        </div>
        <div className="underline"></div>
      </div>
      <div className="main_flex">
        <Slider {...settings}>
          <div className="wrapper">
            <div className="container">
              <div
                className="top"
                style={{
                  // backgroundImage: url(${images.hero_banner}),
                  backgroundImage: `url(${images.tarpaulin_img})`,
                  backgroundPosition: "center",
                  backdropFilter: "blur(2px)",
                  WebkitBackdropFilter: "revert-layer",
                  backgroundSize: "cover",
                }}></div>
              <div className="bottom">
                <div className="left">
                  <div className="details">
                    <h4>Tarpaulin</h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="inside">
              <TbListDetails className="icon" size={24} />
              <div className="contents">
                <p className="pro_card_text">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="wrapper">
            <div className="container">
              <div
                className="top"
                style={{
                  // backgroundImage: url(${images.hero_banner}),
                  backgroundImage: `url(${images.prod2_img})`,
                  backgroundPosition: "center",
                  backdropFilter: "blur(2px)",
                  WebkitBackdropFilter: "revert-layer",
                  backgroundSize: "cover",
                }}></div>
              <div className="bottom">
                <div className="left">
                  <div className="details">
                    <h5>multilayer cross laminated tarpaulin </h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="inside">
              <TbListDetails className="icon" size={24} />
              <div className="contents">
                <p className="pro_card_text">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.
                </p>
              </div>
            </div>
          </div>
          <div className="wrapper">
            <div className="container">
              <div className="top"></div>
              <div className="bottom">
                <div className="left">
                  <div className="details">
                    <h4>Tarpaulinn</h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="inside">
              <TbListDetails className="icon" size={24} />
              <div className="contents">
                <p className="pro_card_text">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </div>
            </div>
          </div>
          <div className="wrapper">
            <div className="container">
              <div className="top"></div>
              <div className="bottom">
                <div className="left">
                  <div className="details">
                    <h4>Tarpaulin</h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="inside">
              <TbListDetails className="icon" size={24} />
              <div className="contents">
                <p className="pro_card_text">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </div>
            </div>
          </div>
          <div className="wrapper">
            <div className="container">
              <div className="top"></div>
              <div className="bottom">
                <div className="left">
                  <div className="details">
                    <h4>Tarpaulin</h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="inside">
              <TbListDetails className="icon" size={24} />
              <div className="contents">
                <p className="pro_card_text">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </div>
            </div>
          </div>
          <div className="wrapper">
            <div className="container">
              <div className="top"></div>
              <div className="bottom">
                <div className="left">
                  <div className="details">
                    <h4>Tarpaulin</h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="inside">
              <TbListDetails className="icon" size={24} />
              <div className="contents">
                <p className="pro_card_text">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default HomeProducts;
