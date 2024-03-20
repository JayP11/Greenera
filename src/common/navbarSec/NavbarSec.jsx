import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./NavbarSec.css";
// import images from "../../constants/images";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import images from "../../constants/images";

const NavbarSec = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const location = useLocation();

  const [navbarBgColor, setNavbarBgColor] = useState("none");
  const [navbarBgShadow, setNavbarBgShadow] = useState("");
  const HandleScroll = () => {
    window.scrollTo(0, 1300);
  };
  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      if (position > 600) {
        setNavbarBgColor("block"); // Change background color when scrolled
      } else {
        setNavbarBgColor("none"); // Reset background color when back to top
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      className="nav-main-nav-top test_position"
      style={{ display: navbarBgColor }}>
      <div className="nav-main-nav">
        <nav className="Navbar_main">
          <Link to="/" style={{ height: "90px", padding: "0.4rem 0" }}>
            <img
              src={images.logo}
              alt=""
              style={{ height: "100%", width: "100%" }}
            />
          </Link>
          {/* LOGO */}
          <div className="navbar_links_main">
            <div className="link_decor_nav">
              <Link
                to="/"
                className="nav_link_h3"
                style={{
                  color:
                    location.pathname === "/"
                      ? "var(--color-white)"
                      : "var(--color-green-nav)",
                }}>
                Home
              </Link>
            </div>
            <div className="link_decor_nav">
              <Link
                to="/About"
                className="nav_link_h3"
                style={{
                  color:
                    location.pathname === "/About"
                      ? "var(--color-white)"
                      : "var(--color-green-nav)",
                }}>
                About
              </Link>
            </div>
            <div className="link_decor_nav">
              <Link
                to="/ProductPage"
                className="nav_link_h3"
                style={{
                  color:
                    location.pathname === "/ProductPage"
                      ? "var(--color-white)"
                      : "var(--color-green-nav)",
                }}>
                Products
              </Link>
            </div>
            {/* <div className="dropdown" style={{ display: "flex" }}>
              <Link
                to="/ProductPage"
                style={{
                  color:
                    location.pathname === "/ProductPage"
                      ? "var(--color-blue)"
                      : "var(--color-white)",
                  display: "flex",
                  alignItems: "center",
                }}>
                Products
              </Link>
              <div className="dropdown-content">
                <Link to="/RollerChains">Roller Chains</Link>
                <Link to="/BushChains">Bush Chains</Link>
                <Link to="/ExtendedPitchChains">Extended Pitch Chains</Link>
                <Link to="/LeafChains">Leaf Chains</Link>
                <Link to="/AttachmentChains">Attachment Chains</Link>
                <Link to="/AgricultureChains">Agriculture Chains</Link>
              </div>
            </div> */}
            <div className="link_decor_nav">
              <Link
                to="/"
                className="nav_link_h3"
                style={{
                  color:
                    location.pathname === "/"
                      ? "var(--color-white)"
                      : "var(--color-green-nav)",
                }}>
                Media
              </Link>
            </div>
            <div className="link_decor_nav">
              <Link
                to="/Contact"
                className="nav_link_h3"
                style={{
                  color:
                    location.pathname === "/Contact"
                      ? "var(--color-white)"
                      : "var(--color-green-nav)",
                }}>
                Contact
              </Link>
            </div>
          </div>
          <div className="nav-btn-icon-part">
            {toggleMenu === false ? (
              <button className="nav-btn" onClick={() => setToggleMenu(true)}>
                <AiOutlineMenu className="nav-btn-icon" />
              </button>
            ) : (
              <button className="nav-btn" onClick={() => setToggleMenu(false)}>
                <AiOutlineClose className="nav-btn-icon" />
              </button>
            )}
          </div>
        </nav>
      </div>
      <>
        {toggleMenu && (
          <div className="mobile-nav-main">
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
                <Link to="/ProductPage" className="mobile-nav-link">
                  Products
                  <i className="fa fa-caret-down"></i>
                </Link>
                {/* <div className="dropdown-content">
                  <Link to="/RollerChains" style={{ color: "red" }}>
                    Roller Chains
                  </Link>
                  <Link to="/BushChains" style={{ color: "red" }}>
                    Bush Chains
                  </Link>
                  <Link to="/ExtendedPitchChains" style={{ color: "red" }}>
                    Extended Pitch Chains
                  </Link>
                  <Link to="/LeafChains" style={{ color: "red" }}>
                    Leaf Chains
                  </Link>
                  <Link to="/AttachmentChains" style={{ color: "red" }}>
                    Attachment Chains
                  </Link>
                  <Link to="/AgricultureChains" style={{ color: "red" }}>
                    Agriculture Chains
                  </Link>
                </div> */}
              </div>

              <li>
                <Link
                  to={"/Contact"}
                  // onClick={() => setToggleMenu(false)}
                  className="mobile-nav-link">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        )}
      </>
    </div>
  );
};

export default NavbarSec;
