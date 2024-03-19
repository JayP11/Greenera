import React from "react";
import "./Contact.css";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaSkype,
} from "react-icons/fa";

const Contact = () => {
  return (
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
        <div style={{ display: "flex", gap: "2rem", flexDirection: "column" }}>
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
            <p className="details_p_contact">61 3 8376 6284</p>
          </div>
          <div className="contactdetails_home1">
            <h3>Address : </h3>
            <p className="details_p_contact">
              121 King Street, Melbourne Victoria 3000 Australia
            </p>
          </div>
          <div className="contactdetails_home1">
            <h3>Email : </h3>
            <p className="details_p_contact">Alitstudios@gmail.com</p>
          </div>
          <div className="contactdetails_home1">
            <h3>Open Hours : </h3>
            <p className="details_p_contact">Alitstudios@gmail.com</p>
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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.8012919572607!2d70.75354627526973!3d22.28551577969722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959cbb81c917bb5%3A0x815d45b2c4636adc!2sApplified!5e0!3m2!1sen!2sin!4v1698319942961!5m2!1sen!2sin"
            width="100%"
            width="400px"
            height="324"
            frameborder=""
            // style="border:0"
            allowfullscreen=""
            aria-hidden="false"
            tabindex="0"></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
