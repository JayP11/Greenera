import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import {
  FaFacebook,
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaTwitter,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import { BsChatText } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer_main1">
      <div className="footer_main">
        <div className="footer_box1">
          <div className="headings">
            <h3>ABOUT US</h3>
          </div>
          <div className="aboutuspara">
            <p>
              Praesent massa felis, mattis et tempor non, condimentum vel
              lectus. in turpis leo. vestibulum a sagittis iaculis convallis sit
              amet purus. sed lacinia elit in dui imperdiet pottitor
            </p>
          </div>
        </div>
        {/* <div className="footer_box2">
          <div className="headings">
            <h3>CAR SERVICE</h3>
          </div>
          <div className="links_sec1">
            <Link to="/" className="link_inner">
              Audi service
            </Link>
            <Link to="/" className="link_inner">
              BMW service
            </Link>
            <Link to="/" className="link_inner">
              Citroen service
            </Link>
            <Link to="/" className="link_inner">
              Daewoo service
            </Link>
          </div>
        </div> */}
        <div className="footer_box3">
          <div className="headings">
            <h3>USEFUL LINKS</h3>
          </div>
          <div className="links_sec2">
            <Link to="/" className="link_inner">
              Home
            </Link>
            <Link to="/" className="link_inner">
              About us
            </Link>
            <Link to="/" className="link_inner">
              Our Products
            </Link>
            <Link to="/" className="link_inner">
              Contact Us
            </Link>
          </div>
        </div>
        <div className="footer_link_flex">
          <p className="footer_add_main">
            "Vitrag" Pnchvati Main Road,Opp Ravi-Kiran Apartment, Near ICICI
            Bank, Rajkot-360110{" "}
          </p>
          <div className="footer_icon_flex">
            <BsChatText
              style={{
                color: "white",
                alignSelf: "center",
                height: "22px",
                width: "22px",
              }}
              className="con-info-icon"
            />
            <Link to="tel:+91 9978600450" className="footer_link">
              91 9978600450
            </Link>
          </div>
          <div className="footer_icon_flex">
            <AiOutlineMail className="link_footer_icon" />
            {/* <Link
              className="footer_add_main"
              to={"mailto:" + `${getContactData ? getContactData.email : ""}`}>
              Greenera@gmail.com{" "}
            </Link> */}
            <Link to="mailto:Greenera@example.com" className="footer_add_main">
              Greenera@gmail.com
            </Link>
          </div>
        </div>
        {/* <div className="footer_box4">
          <div className="headings">
            <h3>USEFUL SEARCHES</h3>
          </div>
          <div className="links_sec3">
            <Link to="/" className="link_inner">
              Car MOT
            </Link>
            <Link to="/" className="link_inner">
              Car repair
            </Link>
            <Link to="/" className="link_inner">
              Car parts
            </Link>
            <Link to="/" className="link_inner">
              Car servicing
            </Link>
          </div>
        </div> */}
      </div>
      <br />
      <hr style={{ border: "1px solid gray" }} />
      <br />
      <div className="last_sec">
        <div className="rights_reserved">
          <p>© 2024 All Rights Reserved</p>
        </div>
        {/* <div className="socialicons">
          <FaFacebook className="socialicons_inner" />
          <FaInstagram className="socialicons_inner" />
          <FaTwitter className="socialicons_inner" />
        </div> */}
        <div className="Footer_main_social">
          <Link to="https://www.facebook.com">
            <FaFacebookF className="Footer_main_facebook_social" />
          </Link>
          <Link to="https://twitter.com">
            <FaTwitter className="Footer_main_twitter_social" />
          </Link>
          <Link to="https://www.instagram.com">
            <FaInstagram className="Footer_main_insta_social" />
          </Link>
          <Link to="https://in.pinterest.com/">
            <FaPinterestP className="Footer_main_pinterest_social" />
          </Link>
          <Link to="https://www.youtube.com">
            <FaYoutube className="Footer_main_youtube_social" />
          </Link>
          <Link to="http://api.whatsapp.com/send?phone=&text=Let%27s%20Get%20in%20Touch">
            <FaWhatsapp className="Footer_main_whatsapp_social" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
