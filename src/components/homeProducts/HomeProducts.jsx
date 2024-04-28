import React, { useState } from "react";
import "./HomeProducts.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GiInfo } from "react-icons/gi";
import images from "../../constants/images";
import { TbListDetails } from "react-icons/tb";
// import { Link } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

const HomeProducts = () => {
  const [seeMore, setSeeMore] = useState(false);
  let review = {
    tarpaulin:
      "A tarpaulin is a large sheet of waterproof material available in various sizes, usually made from plastic like HDPE, LDPE or PVC. In the olden days, they were used to cover objects on ships from where it gets its name – tar + palling meaning a “tarred canvas”. There are various types of tarpaulins available in different materials and thicknesses for various types of applications, e.g., canvas, urethane-coated polyester, polyethylene, etc. Modern day tarpaulins are made from woven polyethylene, at the corners and along the edges at regular intervals which are used to pass nylon ropes through them so that they can be tied to an anchor. The main use of tarpaulins is to provide shelter from rains and in some cases, even from sun and winds.",
    Multilayer_Cross_Laminated_Tarpaulin:
      "A multilayer cross laminated tarpaulin film consists of many layers of plastic that overlap before being laminated using a proprietary hot-cold technique. The multilayer lamination of this plastic film makes it more durable, flexible, and demanding than other films of similar weights and thickness. This multilayer cross laminated tarpaulin material is both durable and flexible. We are the leading maker of multilayer cross-laminated tarpaulins in Tamil Nadu. Our tarpaulins are created mostly from reprocessed granules from recycled industrial wastes.",
    Shade_Net:
      "Green Shade Net is designed to prevent direct sunlight and safeguard our plants and things. It is a versatile network with numerous uses. Green Net is used to cultivate crops in agriculture and horticulture. It may also be used for garden fences, balcony bird nets, and scaffolding. Greenera Shade Nets are well-known for their dependability in shading solutions. These nets, made from high-density polyethylene (HDPE) raw material and treated with UV stabilizers, anti-sulfur, and other additives utilizing warp knitting technique, are designed to provide maximum protection and climate control in a variety of applications. Greenera Shade Nets, made with high-quality materials and innovative weaving processes, provide durability, lifespan, and adaptability to meet a wide range of shade needs.",
    Pond_liner_des:
      "Greenera HDPE Geomembrane Pond Liner is precisely constructed from premium-grade high-density polyethylene (HDPE) utilizing modern production techniques. Our cutting-edge co-extrusion processes offer long-term durability and dependability. Our pond liner is engineered to offer seamless waterproofing, successfully preventing leakage and seepage while preserving water levels and quality. It is UV stabilized, so it can survive continuous sunshine exposure without losing structural integrity. Its versatility allows for simple installation and adaptability to diverse curves, resulting in a great match for any lining project. Our pond liner is resistant to chemicals and rips, ensuring long-lasting performance even in harsh conditions.",
    Grow_bag_des:
      "Greenera HDPE Grow Bags are intended to change your growing experience. They are made of premium HDPE weave laminated fabrics and are of the highest quality. Our manufacturing technique offers maximum durability, with UV stabilization for long-term performance. Waterproof design keeps moisture levels appropriate for healthy development. These versatile and eco-friendly bags may hold a variety of plants, making them great for urban gardens, balconies, or terraces.",
    LDPE_Plastic_dec:
      "Low-density polyethylene (LDPE) is a type of thermoplastic polymer commonly used in the manufacturing of various plastic products. LDPE is characterized by its flexibility, toughness, and transparency. It is produced through the polymerization of ethylene monomers, resulting in a polymer with a branched molecular structure and relatively low density. LDPE plastic is widely utilized in packaging materials such as plastic bags, shrink wraps, and containers due to its excellent resistance to moisture, chemicals, and impact. It is also commonly used in the production of squeeze bottles, tubing, and various household items. While LDPE offers advantageous properties such as flexibility and ease of processing, it is considered less environmentally friendly than some other types of plastics due to its slow rate of biodegradation. However, efforts are being made to improve recycling methods and develop more sustainable alternatives to mitigate its environmental impact.",
    vermi_compost_bed_des:
      "Vermi Beds are intended to transform kitchen and other green waste into very productive organic compost known as vermi compost. This technique is referred to as vermi composting. Earthworms devour this waste as food and degrade it, which eventually turns into organic compost. This is often referred to as worm composting. Vermi beds are the future of current composting technology. Vermi Beds are an excellent solution for organic agriculture growers seeking higher-quality crop harvests. Greenera HDPE Vermi beds are made of superior HDPE woven laminated textiles, are ISI-certified for quality assurance, and UV-resistant for durability. They have a net window for excellent aeration, an exit for collecting vermi wash, support pockets for simple installation, and dependable functioning.",
    Mulch_Film_des:
      "Mulching is the technique of covering the soil with a layer to allow for the growth of food crops and vegetables. Mulching sheets cover the soil, which helps to reduce weed development, regulate soil temperature, limit moisture loss, and boost crop yield and early harvest. Greenera Mulch Film is a high-quality product made from premium LLDPE and LDPE materials supplemented with additives. It stands out as a protective layer for soil surfaces, enhancing growing conditions and crop yields. With its remarkable moisture retention, weed suppression, and soil temperature management, it produces an optimal environment for plant development, distinguishing it from other mulch films on the market.",
    Bio_Degradable_bags_des:
      "Biodegradable bags are a type of packaging made from materials that can naturally decompose over time when exposed to environmental conditions such as moisture, heat, and microorganisms. These bags are designed to break down into organic compounds, water, carbon dioxide, and biomass, leaving behind minimal to no harmful residue. Typically crafted from renewable resources like plant-based polymers or starches, biodegradable bags offer a sustainable alternative to traditional plastic bags, helping to mitigate plastic pollution and protect the environment.",
  };
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    autoplay: true,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 970,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div style={{ background: "#e8f4d9" }}>
      <div className="values_head_main">
        <div className="heading">
          <h1>OUR PRODUCTS</h1>
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
                  backgroundImage: `url(${images.Tarpaulin})`,
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
                  {review.tarpaulin === "" ||
                  review.tarpaulin == null ||
                  review.tarpaulin === undefined ? null : (
                    <>
                      {seeMore
                        ? review.tarpaulin
                        : `${review.tarpaulin.substring(0, 500)}...`}
                      <Link
                        to="/Products#Tarpaulin"
                        className="btn-readmore"
                        style={{
                          background: "none",
                          color: "#000",
                          border: "none",
                          cursor: "pointer",
                          padding: "0px",
                          fontWeight: "600",
                        }}
                        onClick={() => setSeeMore(!seeMore)}>
                        {seeMore ? "Show less" : "  Read more"}
                      </Link>
                    </>
                  )}
                </p>
              </div>
            </div>
          </div>
          <div className="wrapper">
            <div className="container">
              <div
                className="top"
                style={{
                  backgroundImage: `url(${images.MultilayerCrossLaminatedTarpaulin})`,
                  backgroundPosition: "center",
                  backdropFilter: "blur(2px)",
                  WebkitBackdropFilter: "revert-layer",
                  backgroundSize: "cover",
                }}></div>
              <div className="bottom">
                <div className="left">
                  <div className="details">
                    <h4>Multilayer Cross Laminated Tarpaulin</h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="inside">
              <TbListDetails className="icon" size={24} />
              <div className="contents">
                <p className="pro_card_text">
                  {review.Multilayer_Cross_Laminated_Tarpaulin === "" ||
                  review.Multilayer_Cross_Laminated_Tarpaulin == null ||
                  review.Multilayer_Cross_Laminated_Tarpaulin ===
                    undefined ? null : (
                    <>
                      {seeMore
                        ? review.Multilayer_Cross_Laminated_Tarpaulin
                        : `${review.Multilayer_Cross_Laminated_Tarpaulin.substring(
                            0,
                            500
                          )}...`}
                      <Link
                        to="/Products#Multilayer_Cross_Laminated_Tarpaulin"
                        className="btn-readmore"
                        style={{
                          background: "none",
                          color: "#000",
                          border: "none",
                          cursor: "pointer",
                          padding: "0px",
                          fontWeight: "600",
                        }}
                        onClick={() => setSeeMore(!seeMore)}>
                        {seeMore ? "Show less" : "  Read more"}
                      </Link>
                    </>
                  )}
                </p>
              </div>
            </div>
          </div>
          <div className="wrapper">
            <div className="container">
              <div
                className="top"
                style={{
                  backgroundImage: `url(${images.Shade_net})`,
                  backgroundPosition: "center",
                  backdropFilter: "blur(2px)",
                  WebkitBackdropFilter: "revert-layer",
                  backgroundSize: "cover",
                }}></div>
              <div className="bottom">
                <div className="left">
                  <div className="details">
                    <h4>Shade Net</h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="inside">
              <TbListDetails className="icon" size={24} />
              <div className="contents">
                <p className="pro_card_text">
                  {review.Shade_Net === "" ||
                  review.Shade_Net == null ||
                  review.Shade_Net === undefined ? null : (
                    <>
                      {seeMore
                        ? review.Shade_Net
                        : `${review.Shade_Net.substring(0, 500)}...`}
                      <Link
                        to="/Products#Shade_Net"
                        className="btn-readmore"
                        style={{
                          // background: "none",
                          color: "#000",
                          border: "none",
                          cursor: "pointer",
                          padding: "0px",
                          fontWeight: "600",
                        }}
                        onClick={() => setSeeMore(!seeMore)}>
                        {seeMore ? "Show less" : "  Read more"}
                      </Link>
                    </>
                  )}
                </p>
              </div>
            </div>
          </div>
          <div className="wrapper">
            <div className="container">
              <div
                className="top"
                style={{
                  backgroundImage: `url(${images.Pond_liner})`,
                  backgroundPosition: "center",
                  backdropFilter: "blur(2px)",
                  WebkitBackdropFilter: "revert-layer",
                  backgroundSize: "cover",
                }}></div>
              <div className="bottom">
                <div className="left">
                  <div className="details">
                    <h4>Pond Liner</h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="inside">
              <TbListDetails className="icon" size={24} />
              <div className="contents">
                <p className="pro_card_text">
                  {review.Pond_liner_des === "" ||
                  review.Pond_liner_des == null ||
                  review.Pond_liner_des === undefined ? null : (
                    <>
                      {seeMore
                        ? review.Pond_liner_des
                        : `${review.Pond_liner_des.substring(0, 500)}...`}
                      <Link
                        to="/Products#Pond_liner"
                        className="btn-readmore"
                        style={{
                          // background: "none",
                          color: "#000",
                          border: "none",
                          cursor: "pointer",
                          padding: "0px",
                          fontWeight: "600",
                        }}
                        onClick={() => setSeeMore(!seeMore)}>
                        {seeMore ? "Show less" : "  Read more"}
                      </Link>
                    </>
                  )}
                </p>
              </div>
            </div>
          </div>
          <div className="wrapper">
            <div className="container">
              <div
                className="top"
                style={{
                  backgroundImage: `url(${images.Grow_bag})`,
                  backgroundPosition: "center",
                  backdropFilter: "blur(2px)",
                  WebkitBackdropFilter: "revert-layer",
                  backgroundSize: "cover",
                }}></div>
              <div className="bottom">
                <div className="left">
                  <div className="details">
                    <h4>Grow Bag</h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="inside">
              <TbListDetails className="icon" size={24} />
              <div className="contents">
                <p className="pro_card_text">
                  {review.Grow_bag_des === "" ||
                  review.Grow_bag_des == null ||
                  review.Grow_bag_des === undefined ? null : (
                    <>
                      {seeMore
                        ? review.Grow_bag_des
                        : `${review.Grow_bag_des.substring(0, 500)}...`}
                      <Link
                        to="/Products#Grow_bag"
                        className="btn-readmore"
                        style={{
                          // background: "none",
                          color: "#000",
                          border: "none",
                          cursor: "pointer",
                          padding: "0px",
                          fontWeight: "600",
                        }}
                        onClick={() => setSeeMore(!seeMore)}>
                        {seeMore ? "Show less" : "  Read more"}
                      </Link>
                    </>
                  )}
                </p>
              </div>
            </div>
          </div>
          <div className="wrapper">
            <div className="container">
              <div
                className="top"
                style={{
                  backgroundImage: `url(${images.Ldpe_plastic})`,
                  backgroundPosition: "center",
                  backdropFilter: "blur(2px)",
                  WebkitBackdropFilter: "revert-layer",
                  backgroundSize: "cover",
                }}></div>
              <div className="bottom">
                <div className="left">
                  <div className="details">
                    <h4>Ldpe Plastic</h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="inside">
              <TbListDetails className="icon" size={24} />
              <div className="contents">
                <p className="pro_card_text">
                  {review.LDPE_Plastic_dec === "" ||
                  review.LDPE_Plastic_dec == null ||
                  review.LDPE_Plastic_dec === undefined ? null : (
                    <>
                      {seeMore
                        ? review.LDPE_Plastic_dec
                        : `${review.LDPE_Plastic_dec.substring(0, 500)}...`}
                      <Link
                        to="/Products#LDPE_Plastic"
                        className="btn-readmore"
                        style={{
                          // background: "none",
                          color: "#000",
                          border: "none",
                          cursor: "pointer",
                          padding: "0px",
                          fontWeight: "600",
                        }}
                        onClick={() => setSeeMore(!seeMore)}>
                        {seeMore ? "Show less" : "  Read more"}
                      </Link>
                    </>
                  )}
                </p>
              </div>
            </div>
          </div>
          <div className="wrapper">
            <div className="container">
              <div
                className="top"
                style={{
                  backgroundImage: `url(${images.vermi_compost_bed})`,
                  backgroundPosition: "center",
                  backdropFilter: "blur(2px)",
                  WebkitBackdropFilter: "revert-layer",
                  backgroundSize: "cover",
                }}></div>
              <div className="bottom">
                <div className="left">
                  <div className="details">
                    <h4>Vermi Compost Bed</h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="inside">
              <TbListDetails className="icon" size={24} />
              <div className="contents">
                <p className="pro_card_text">
                  {review.vermi_compost_bed_des === "" ||
                  review.vermi_compost_bed_des == null ||
                  review.vermi_compost_bed_des === undefined ? null : (
                    <>
                      {seeMore
                        ? review.vermi_compost_bed_des
                        : `${review.vermi_compost_bed_des.substring(
                            0,
                            500
                          )}...`}
                      <Link
                        to="/Products#vermi_compost_bed"
                        className="btn-readmore"
                        style={{
                          // background: "none",
                          color: "#000",
                          border: "none",
                          cursor: "pointer",
                          padding: "0px",
                          fontWeight: "600",
                        }}
                        onClick={() => setSeeMore(!seeMore)}>
                        {seeMore ? "Show less" : "  Read more"}
                      </Link>
                    </>
                  )}
                </p>
              </div>
            </div>
          </div>
          <div className="wrapper">
            <div className="container">
              <div
                className="top"
                style={{
                  backgroundImage: `url(${images.Mulch_film})`,
                  backgroundPosition: "center",
                  backdropFilter: "blur(2px)",
                  WebkitBackdropFilter: "revert-layer",
                  backgroundSize: "cover",
                }}></div>
              <div className="bottom">
                <div className="left">
                  <div className="details">
                    <h4>Mulch Film</h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="inside">
              <TbListDetails className="icon" size={24} />
              <div className="contents">
                <p className="pro_card_text">
                  {review.Mulch_Film_des === "" ||
                  review.Mulch_Film_des == null ||
                  review.Mulch_Film_des === undefined ? null : (
                    <>
                      {seeMore
                        ? review.Mulch_Film_des
                        : `${review.Mulch_Film_des.substring(0, 500)}...`}
                      <Link
                        to="/Products#Mulch_Film"
                        className="btn-readmore"
                        style={{
                          // background: "none",
                          color: "#000",
                          border: "none",
                          cursor: "pointer",
                          padding: "0px",
                          fontWeight: "600",
                        }}
                        onClick={() => setSeeMore(!seeMore)}>
                        {seeMore ? "Show less" : "  Read more"}
                      </Link>
                    </>
                  )}
                </p>
              </div>
            </div>
          </div>
          <div className="wrapper">
            <div className="container">
              <div
                className="top"
                style={{
                  backgroundImage: `url(${images.Bio_Degradable_bags})`,
                  backgroundPosition: "center",
                  backdropFilter: "blur(2px)",
                  WebkitBackdropFilter: "revert-layer",
                  backgroundSize: "cover",
                }}></div>
              <div className="bottom">
                <div className="left">
                  <div className="details">Bio-Medical Bags</div>
                </div>
              </div>
            </div>
            <div className="inside">
              <TbListDetails className="icon" size={24} />
              <div className="contents">
                <p className="pro_card_text">
                  {review.Bio_Degradable_bags_des === "" ||
                  review.Bio_Degradable_bags_des == null ||
                  review.Bio_Degradable_bags_des === undefined ? null : (
                    <>
                      {seeMore
                        ? review.Bio_Degradable_bags_des
                        : `${review.Bio_Degradable_bags_des.substring(
                            0,
                            500
                          )}...`}

                      <Link
                        to="/Products#Bio_Degradable_bags"
                        className="btn-readmore"
                        style={{
                          // background: "none",
                          color: "#000",
                          border: "none",
                          cursor: "pointer",
                          padding: "0px",
                          fontWeight: "600",
                        }}
                        onClick={() => setSeeMore(!seeMore)}>
                        {seeMore ? "Show less" : "  Read more"}
                      </Link>
                    </>
                  )}
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
