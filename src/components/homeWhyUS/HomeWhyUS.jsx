import React from "react";
import "./HomeWhyUS.css";
import images from "../../constants/images";

const HomeWhyUS = () => {
  return (
    <div className="whyusHome_main">
      <div
        className=""
        style={{
          backgroundImage: `url(${images.whyUs})`,
          backgroundSize: "cover",
        }}>
        <div
          className=""
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            color: "var(--color-white)",
            width: "100%",
            // height: "75vh",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            padding: "6rem 0",
            justifyContent: "center",
          }}>
          <div>
            <h1 style={{ textAlign: "center" }}>WHY US</h1>
            <div className="underline"></div>
          </div>
          <div className="whyusHome_content_main">
            <div className="whyusHome_card_main">
              <div>
                <img
                  src={images.quality}
                  alt=""
                  className="whyusHome_img_inner"
                />
              </div>
              <h2>Quality</h2>
              <p>
                Our commitment to excellence ensures that every product leaving
                our facilities meets the highest standards, providing durability
                and reliability to our customers.
              </p>
            </div>
            <div className="whyusHome_card_main">
              <div>
                <img
                  src={images.solution}
                  alt=""
                  className="whyusHome_img_inner"
                />
              </div>
              <h2>Solutions</h2>
              <p>
                Dedicated focus on innovation, we consistently pioneer new
                solutions that address the evolving needs of the agriculture and
                manufacturing sectors.
              </p>
            </div>
            <div className="whyusHome_card_main">
              <div>
                <img
                  src={images.customer_centric}
                  alt=""
                  className="whyusHome_img_inner"
                />
              </div>
              <h2>Customer-Centric Approach</h2>
              <p>
                Our customers are at the heart of everything we do. We actively
                listen to their needs & tailor our products to exceed their
                expectations, fostering lasting partnerships.
              </p>
            </div>
            <div className="whyusHome_card_main">
              <div>
                <img
                  src={images.quality}
                  alt=""
                  className="whyusHome_img_inner"
                />
              </div>
              <h2>Sustainable Practices</h2>
              <p>
                We prioritize sustainability, integrating eco-friendly practices
                into our manufacturing processes. Customers align with a company
                dedicated to environmental responsibility.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeWhyUS;
