import React, { useEffect, useState } from "react";
import "./About.css";
import images from "../../constants/images";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import NavbarSec from "../../common/navbarSec/NavbarSec";
import { Helmet } from "react-helmet";
const About = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Green Era | About</title>
      </Helmet>
      <NavbarSec />
      <div className="about_main">
        <div
          style={{
            backgroundImage: `url(${images.whyUs})`,
            backgroundPosition: "center",
            backdropFilter: "blur(w2px)",
            WebkitBackdropFilter: "revert-layer",
            backgroundSize: "cover",
          }}>
          <div className="about_img_black_color">
            <div
              className="nav-main-nav-top"
              style={{
                backgroundColor: "transparent",
              }}>
              <div className="nav-main-nav">
                <nav className="Navbar_main">
                  <Link to="/" style={{ height: "90px", padding: "0.4rem 0" }}>
                    <img
                      src={images.logo}
                      alt=""
                      style={{ height: "100%", width: "100%" }}
                    />
                  </Link>
                  <div className="navbar_links_main">
                    <div className="link_decor_nav">
                      <Link
                        to="/"
                        className="nav_link_h3  nav_link_h3_about"
                        style={{
                          color:
                            location.pathname === "/"
                              ? "var(--color-white)"
                              : "var(--color-black)",
                        }}>
                        Home
                      </Link>
                    </div>
                    <div className="link_decor_nav">
                      <Link
                        to="/About"
                        className="nav_link_h3 nav_link_h3_about"
                        style={{
                          color:
                            location.pathname === "/About"
                              ? "var(--color-white)"
                              : "var(--color-black)",
                        }}>
                        About
                      </Link>
                    </div>
                    <div className="link_decor_nav">
                      <Link
                        to="/Products"
                        className="nav_link_h3 nav_link_h3_about"
                        style={{
                          color:
                            location.pathname === "/Products"
                              ? "var(--color-white)"
                              : "var(--color-black)",
                        }}>
                        Products
                      </Link>
                    </div>

                    <div className="link_decor_nav">
                      <Link
                        to="/Contact"
                        className="nav_link_h3  nav_link_h3_about"
                        style={{
                          color:
                            location.pathname === "/Contact"
                              ? "var(--color-white)"
                              : "var(--color-black)",
                        }}>
                        Contact
                      </Link>
                    </div>
                  </div>
                  <div className="nav-btn-icon-part">
                    {toggleMenu === false ? (
                      <button
                        className="nav-btn"
                        onClick={() => setToggleMenu(true)}>
                        <AiOutlineMenu className="nav-btn-icon" />
                      </button>
                    ) : (
                      <button
                        className="nav-btn"
                        onClick={() => setToggleMenu(false)}>
                        <AiOutlineClose className="nav-btn-icon" />
                      </button>
                    )}
                  </div>
                </nav>
              </div>
              <>
                {toggleMenu && (
                  <div
                    className="mobile-nav-main"
                    style={{ background: "var(--color-green-main)" }}>
                    <ul className="mobile-nav-links">
                      <li>
                        <Link
                          to={"/"}
                          onClick={() => setToggleMenu(false)}
                          className="mobile-nav-link">
                          Home
                        </Link>
                      </li>
                      <div className="dropdown">
                        <Link to="/About" className="mobile-nav-link">
                          About
                          <i className="fa fa-caret-down"></i>
                        </Link>
                      </div>
                      <div className="dropdown">
                        <Link to="/Products" className="mobile-nav-link">
                          Products
                          <i className="fa fa-caret-down"></i>
                        </Link>
                      </div>

                      <li>
                        <Link to={"/Contact"} className="mobile-nav-link">
                          Contact
                        </Link>
                      </li>
                    </ul>
                  </div>
                )}
              </>
            </div>
            <div className="about_img_con">
              <p
                className="about_img_con_txt"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                  paddingLeft: "2rem",
                }}>
                It's Time To <br /> KNOW US
                <div className="underline" style={{ margin: "0px" }}></div>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="about_content_main">
        <div className="about_content_con">
          <div>
            <div className="heading">
              <h1 className="">About Us </h1>
            </div>
            <div className="underline"></div>
          </div>
          <p className="about_content_text">
            Green Era Multitech LLP is a leading manufacturer specializing in
            HDPE Tarpaulin, Pond Liners, and a diverse range of products,
            including Multi-layer Cross Lam. Tarpaulin, LDPE Plastic, LDPE Pond
            liners, Shade Nets, Mulch film, Vermi Compost Bed, Grow Bag, and
            Bio-Medical Waste Bag. Our offerings comprise UV-stabilized,
            high-quality Tarpaulin Rolls and various sizes to meet diverse
            needs.
          </p>
          <p className="about_content_text">
            With a robust stock holding accommodating individual parcels to
            pallets and container loads, we are dedicated to delivering
            competitive prices and upholding the service excellence expected
            from a family-owned business. At Green Era, we prioritize customer
            satisfaction, constantly expanding our product range and enhancing
            existing offerings to provide the best available solutions.
          </p>
        </div>
      </div>

      {/*  */}
      <div className="our_miss_main" style={{ background: "whitesmoke" }}>
        <div className="values_head_main">
          <div className="heading">
            <h1>OUR MISSION & VISION</h1>
          </div>
          <div className="underline"></div>
        </div>
        <div className="our_miss_con">
          <div className="our_miss_part">
            <div className="our_miss_part_inner_first">
              <div className="our_miss_part_inner_bgwhite">
                <img
                  src={images.mission_icon}
                  alt=""
                  className="mission_icon"
                />
              </div>
            </div>
            <p className="our_miss_text">
              We want to reach to redefine industry standards through continuous
              innovation and expansion into new segments. Committed to providing
              sustainable solutions, our mission is to be the forefront of
              quality, ensuring that our products play a pivotal role in
              enhancing the efficiency & eco-friendliness of our clients'
              operations.
            </p>
          </div>
          <div className="our_miss_part2">
            <div className="our_miss_part_inner_sec">
              <div className="our_miss_part_inner_bgwhite">
                <img src={images.vision_icon} alt="" className="mission_icon" />
              </div>
            </div>

            <p className="our_miss_text">
              To be the global benchmark in manufacturing, delivering world -
              class products to delighted customers. Our vision is fueled by
              continuous improvement, driven by the integrity, teamwork, and
              creativity of our people.
            </p>
          </div>
        </div>
      </div>
      {/*  */}
      {/* <div className="about_certificate_main">
        <div className="values_head_main">
          <div className="heading">
            <h1>CERTIFICATES</h1>
          </div>
          <div className="underline"></div>
        </div>
        <div className="about_certificate_con">
          <img
            src={images.about_certificate}
            alt=""
            className="about_certificate_img"
          />
        </div>
      </div> */}
      {/*  */}
    </>
  );
};

export default About;
