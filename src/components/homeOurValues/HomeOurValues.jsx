import React from "react";
import "./HomeOurValues.css";
import images from "../../constants/images";

const HomeOurValues = () => {
  return (
    <div className="values_main_top">
      <div className="values_head_main">
        <div className="heading">
          <h1>CORE VALUES</h1>
        </div>
        <div className="underline"></div>
      </div>
      <div className="values_main">
        <div className="values_boxes">
          <img
            src={images.Excellence_icon}
            className="values_img_inner"
            alt=""
            style={{ height: "60px" }}
          />
          <div className="">
            <h3 className="heading_values">EXCELLENCE</h3>
          </div>
          <div className="values_para">
            <p>
              We are committed to delivering unparalleled quality and excellence
              in every product and service we provide, setting the standard for
              the industry.
            </p>
          </div>
        </div>
        <div className="values_boxes">
          <img
            src={images.Integrity_icon}
            className="values_img_inner"
            alt=""
            style={{ height: "60px" }}
          />
          <div className="">
            <h3 className="heading_values">INTEGRITY</h3>
          </div>
          <div className="values_para">
            <p>
              Integrity is the foundation of our business. We operate with
              honesty, transpar-ency, and a commitment to ethical practices in
              all our interactions.
            </p>
          </div>
        </div>
        <div className="values_boxes">
          <img
            src={images.Innovation_icon}
            className="values_img_inner"
            alt=""
            style={{ height: "60px" }}
          />
          <div className="">
            <h3 className="heading_values">INNOVATION</h3>
          </div>
          <div className="values_para">
            <p>
              We embrace a culture of innovation, fostering creativity and
              continuous improvement to stay at the forefront of industry trends
              and technologies.
            </p>
          </div>
        </div>
        <div className="values_boxes">
          <img
            src={images.Customer_icon}
            className="values_img_inner"
            alt=""
            style={{ height: "60px" }}
          />
          <div className="">
            <h3 className="heading_values">CUSTOMER SATISFACTION</h3>
          </div>
          <div className="values_para">
            <p>
              Our customers are at the heart of everything we do. We are
              dedicated tound-erstanding and exceeding their expectations,
              ensuring their satisfaction with our products and services.
            </p>
          </div>
        </div>
        <div className="values_boxes">
          <img
            src={images.Team_icon}
            className="values_img_inner"
            alt=""
            style={{ height: "60px" }}
          />
          <div className="">
            <h3 className="heading_values">TEAMWORK</h3>
          </div>
          <div className="values_para">
            <p>
              Collaboration is key to our success. We value the diverse talents
              & perspectives of our team, working together seamlessly to achieve
              common goals.
            </p>
          </div>
        </div>
        <div className="values_boxes">
          <img
            src={images.Sustainability_icon}
            alt=""
            style={{ height: "60px" }}
            className="values_img_inner"
          />
          <div className="">
            <h3 className="heading_values">SUSTAINABILITY</h3>
          </div>
          <div className="values_para">
            <p>
              Committed to environmental responsibility, we prioritize
              sustainable practices in our manufacturing processes and product
              offerings, contributing to a greener future.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeOurValues;
