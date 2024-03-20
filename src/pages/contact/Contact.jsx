/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useEffect } from "react";
import "./Contact.css";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaSkype,
} from "react-icons/fa";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Navbar from "../../common/navbar/Navbar";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Green Era | Contact</title>
      </Helmet>
      <Navbar />
      <div className="ContactUsHome_main">
        <div className="heading_sec_contact_main">
          <div>
            <h1 className="contactustitle">CONTACT US</h1>
            <div className="underline"></div>
          </div>
          <div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
        <div className="form_sec_main_home">
          <div
            style={{ display: "flex", gap: "2rem", flexDirection: "column" }}>
            <div style={{ display: "flex", gap: "2rem" }}>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="input_field"
              />
              <input
                type="text"
                name="email"
                placeholder="Email"
                className="input_field"
              />
            </div>
            <div style={{ display: "flex", gap: "2rem" }}>
              <input
                type="text"
                name="phone"
                placeholder="Phone"
                className="input_field"
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                className="input_field"
              />
            </div>
            <div>
              <button
                className="btn btn_bg"
                style={{ padding: "0.7rem", width: "100%" }}>
                Send Message
              </button>
            </div>
          </div>
          <div>
            <textarea
              id=""
              name=""
              rows="8"
              cols="50"
              placeholder="Message"
              className="input_field_message"
            />
          </div>
          <div>
            <button
              className="button sendmessagebtn_home2"
              style={{ padding: "0.7rem", width: "100%" }}>
              Send Message
            </button>
          </div>
        </div>
        <div className="map_and_contact_main">
          <div className="contactdetails_home_main">
            <div className="contactdetails_home1">
              <h4>Phone : </h4>
              <Link to="tel:+91 9978600450" className="details_p_contact">
                +91 9978600450
              </Link>
              {/* <p className="details_p_contact">61 3 8376 6284</p> */}
            </div>
            <div className="contactdetails_home1">
              <h3>Factory Address : </h3>
              <p className="details_p_contact" style={{ maxWidth: "380px" }}>
                Survey No. 730, Plot No. 1/2 & 2/1, Village Metoda (Rampar),
                Bodi-Ghodi Road, Rajkot-Jamnagar Highway, Dist. Raikot-360110
                (Gujarat) India.
              </p>
            </div>
            <div className="contactdetails_home1">
              <h3>Office Address : </h3>
              <Link to="https://maps.app.goo.gl/91V1ZtqiYg7KDBPE7"  target="_blank">
                <p className="details_p_contact" style={{ maxWidth: "380px" }}>
                  "Vitrag" Pnchvati Main Road,Opp Ravi-Kiran Apartment, Near
                  ICICI Bank, Rajkot-360110
                </p>
              </Link>
            </div>
            <div className="contactdetails_home1">
              <h3>Email : </h3>
              <Link
                to="mailto:greeneramultitech.Ilp@gmail.com"
                className="details_p_contact">
                Greeneramultitech.Ilp@gmail.com
              </Link>
            </div>
            <div className="contactdetails_home1">
              <h3>Open Hours : </h3>
              <p className="details_p_contact">10 AM - 7 PM</p>
            </div>
            <div className="socialicons_contact_home_main">
              <FaFacebook className="socialicons_contact_home_inner" />
              <FaInstagram className="socialicons_contact_home_inner" />
              <FaTwitter className="socialicons_contact_home_inner" />
              <FaYoutube className="socialicons_contact_home_inner" />
              <FaSkype className="socialicons_contact_home_inner" />
            </div>
            {/* </div> */}
          </div>
          <div className="ContactUsCards_mapblock">
            <iframe
              className="map_inner"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14767.056139427!2d70.7839535!3d22.2869266!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959ca3cf3a00449%3A0x5dc4becf715b75b6!2sGreen%20Era%20Multitech%20LLP!5e0!3m2!1sen!2sin!4v1710939155890!5m2!1sen!2sin"
              width="400px"
              height="324"
              frameborder=""
              allowfullscreen=""
              aria-hidden="false"
              tabindex="0"></iframe>
            {/* <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14767.056139427!2d70.7839535!3d22.2869266!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959ca3cf3a00449%3A0x5dc4becf715b75b6!2sGreen%20Era%20Multitech%20LLP!5e0!3m2!1sen!2sin!4v1710939155890!5m2!1sen!2sin"
              width="600"
              height="450"
              style="border:0;"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"></iframe> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
