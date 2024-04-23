import React from "react";
import "./Products.css";
import Navbar from "../common/navbar/Navbar";
import { Link } from "react-router-dom";
import images from "../constants/images";
import { FaAngleDoubleRight } from "react-icons/fa";
import NavbarThree from "../common/navbarThree/NavbarThree";

const Products = () => {
  return (
    <div style={{ backgroundColor: "whitesmoke" }}>
      <NavbarThree />
      <div className="Products_main_heading">
        <h1 className="">Products</h1>
      </div>
      <div className="Products_main">
        <div className="Products_des1_main" id="Tarpaulin">
          <div className="Products_des">
            <div>
              <h1>Tarpaulin</h1>
            </div>
            <div className="Products_desc_main">
              <p className="Products_desc">
                A tarpaulin is a large sheet of waterproof material available in
                various sizes, usually made from plastic like HDPE, LDPE or PVC.
                In the olden days, they were used to cover objects on ships from
                where it gets its name – tar + palling meaning a “tarred
                canvas”. There are various types of tarpaulins available in
                different materials and thicknesses for various types of
                applications, e.g., canvas, urethane-coated polyester,
                polyethylene, etc. Modern day tarpaulins are made from woven
                polyethylene, at the corners and along the edges at regular
                intervals which are used to pass nylon ropes through them so
                that they can be tied to an anchor. The main use of tarpaulins
                is to provide shelter from rains and in some cases, even from
                sun and winds.
              </p>
              <div className="Products_details_points drop-in-2">
                <div className="pro_list_main">
                  <div className="tick_inner_main">
                    {/* <img src={images.tick} alt="tick" className="tick_inner" /> */}
                    <FaAngleDoubleRight />
                  </div>
                  <p>MADE FROM 100% HDPE PURE VIRGIN RAW MATERIAL</p>
                </div>
                <div className="pro_list_main">
                  <div className="tick_inner_main">
                    {/* <img src={images.tick} alt="tick" className="tick_inner" /> */}
                    <FaAngleDoubleRight />
                  </div>
                  <p>AVAILABLE IN DIFFERENT QUALITIES & COLORS</p>
                </div>
                <div className="pro_list_main">
                  <div className="tick_inner_main">
                    {/* <img src={images.tick} alt="tick" className="tick_inner" /> */}
                    <FaAngleDoubleRight />
                  </div>
                  <p>AVAILABLE IN DIFFERENT QUALITIES & COLORS</p>
                </div>
                <div className="pro_list_main">
                  <div className="tick_inner_main">
                    {/* <img src={images.tick} alt="tick" className="tick_inner" /> */}
                    <FaAngleDoubleRight />
                  </div>
                  <p>TIE IT DOWN EASILY</p>
                </div>
                <div className="pro_list_main">
                  <div className="tick_inner_main">
                    {/* <img src={images.tick} alt="tick" className="tick_inner" /> */}
                    <FaAngleDoubleRight />
                  </div>
                  <p>EXTRA THICK & STRONG</p>
                </div>
                <div className="pro_list_main">
                  <div className="tick_inner_main">
                    {/* <img src={images.tick} alt="tick" className="tick_inner" /> */}
                    <FaAngleDoubleRight />
                  </div>
                  <p>IS 7903:2017 CERTIFIED</p>
                </div>
              </div>
            </div>
          </div>
          <div className="Products_image_main">
            <img
              src={images.Tarpaulin}
              className="Products_image_inner"
              alt="tgesimage"
            />
          </div>
        </div>
        <div
          className="Products_des2_main"
          id="Multilayer_Cross_Laminated_Tarpaulin">
          <div className="Products_des">
            <div>
              <h1>Multilayer Cross Laminated Tarpaulin</h1>
            </div>
            <div className="Products_desc_main">
              <p className="Products_desc">
                A multilayer cross laminated tarpaulin film consists of many
                layers of plastic that overlap before being laminated using a
                proprietary hot-cold technique. The multilayer lamination of
                this plastic film makes it more durable, flexible, and demanding
                than other films of similar weights and thickness. This
                multilayer cross laminated tarpaulin material is both durable
                and flexible. We are the leading maker of multilayer
                cross-laminated tarpaulins in Tamil Nadu. Our tarpaulins are
                created mostly from reprocessed granules from recycled
                industrial wastes.
              </p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.5rem",
                }}>
                <div className="pro_list_main">
                  <div className="tick_inner_main">
                    {/* <img src={images.tick} alt="tick" className="tick_inner" /> */}
                    <FaAngleDoubleRight />
                  </div>
                  <p>
                    {/* Our <span style={{}}>Multilayer Cross laminated</span> tarpaulin is
                    made with state-of-the-art equipment and world-class
                    technology.{" "} */}
                    Our{" "}
                    <span className="product_font_weight">
                      Multilayer Cross laminated
                    </span>
                    tarpaulin is created with cutting-edge equipment and
                    technology.
                  </p>
                </div>
                <div className="pro_list_main">
                  <div className="tick_inner_main">
                    <FaAngleDoubleRight />
                  </div>
                  <p>
                    This film is durable enough to withstand all weather
                    conditions.
                  </p>
                </div>
                <div className="pro_list_main">
                  <div className="tick_inner_main">
                    <FaAngleDoubleRight />
                  </div>
                  <p>
                    This cutting-edge international technology protects your
                    possessions even under harsh weather conditions.{" "}
                  </p>
                </div>
                <div className="pro_list_main">
                  <div className="tick_inner_main">
                    {/* <img src={images.tick} alt="tick" className="tick_inner" /> */}
                    <FaAngleDoubleRight />
                  </div>
                  <p>
                    This is a superior alternative to HDPE textiles,
                    polyethylene sheets, and other coverings often utilized in
                    applications.
                  </p>
                </div>
                <div className="pro_list_main">
                  <div className="tick_inner_main">
                    {/* <img src={images.tick} alt="tick" className="tick_inner" /> */}
                    <FaAngleDoubleRight />
                  </div>
                  <p>
                    As a laminated multilayer{" "}
                    <span className="product_font_weight">tarpaulin</span>{" "}
                    manufacturer in India, our best-selling goods include safe
                    paulin, super gold paulin, and gold paulin.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="Products_image_main">
            <img
              src={images.MultilayerCrossLaminatedTarpaulin}
              className="Products_image_inner"
              alt="tgesimage"
            />
          </div>
        </div>
        <div className="Products_des1_main" id="Shade_Net">
          <div className="Products_des">
            <div>
              <h1>Shade Net</h1>
            </div>
            <div>
              <p className="Products_desc">
                Green Shade Net is designed to prevent direct sunlight and
                safeguard our plants and things. It is a versatile network with
                numerous uses. Green Net is used to cultivate crops in
                agriculture and horticulture. It may also be used for garden
                fences, balcony bird nets, and scaffolding.
              </p>
              <br />
              <p className="Products_desc">
                Greenera Shade Nets are well-known for their dependability in
                shading solutions. These nets, made from high-density
                polyethylene (HDPE) raw material and treated with UV
                stabilizers, anti-sulfur, and other additives utilizing warp
                knitting technique, are designed to provide maximum protection
                and climate control in a variety of applications. Greenera Shade
                Nets, made with high-quality materials and innovative weaving
                processes, provide durability, lifespan, and adaptability to
                meet a wide range of shade needs.
              </p>
              <br />
              <br />
              <h3>FEATURES OF SHADE NET:</h3>
              <br />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.5rem",
                }}>
                <div className="pro_list_main">
                  <div className="tick_inner_main">
                    {/* <img src={images.tick} alt="tick" className="tick_inner" /> */}
                    <FaAngleDoubleRight />
                  </div>
                  <p className="Products_desc">
                    <span className="product_font_weight">
                      {" "}
                      UV Protection:{" "}
                    </span>
                    Engineered with UV stabilizers, Greenera Shade Nets provide
                    superior protection against harmful ultraviolet radiation,
                    ensuring prolonged durability and extending the net's
                    lifespan.
                  </p>
                </div>
                <div className="pro_list_main">
                  <div className="tick_inner_main">
                    {/* <img src={images.tick} alt="tick" className="tick_inner" /> */}
                    <FaAngleDoubleRight />
                  </div>
                  <p className="Products_desc">
                    <span className="product_font_weight">
                      {" "}
                      Premium Quality Material:{" "}
                    </span>
                    Greenera Green Shade Net is made of 100% UV Stabilized
                    high-density polyethylene (HDPE) material. It is anti-aging,
                    strong, and durable.
                  </p>
                </div>
                <div className="pro_list_main">
                  <div className="tick_inner_main">
                    {/* <img src={images.tick} alt="tick" className="tick_inner" /> */}
                    <FaAngleDoubleRight />
                  </div>
                  <p className="Products_desc">
                    <span className="product_font_weight"> Anti-Sulfur: </span>
                    Specialized anti-sulfur additives enhance the nets'
                    resilience, ensuring durability even in environments where
                    sulfur-based pesticides are used.
                  </p>
                </div>
                <div className="pro_list_main">
                  <div className="tick_inner_main">
                    <FaAngleDoubleRight />
                  </div>
                  <p className="Products_desc">
                    <span className="product_font_weight">
                      {" "}
                      Climate Control:{" "}
                    </span>
                    These shade nets regulate light intensity, temperature, and
                    humidity levels, creating an optimal environment for plant
                    growth. They protect crops from excessive sunlight, heat,
                    and adverse weather conditions, promoting healthier growth
                    and higher yields.
                  </p>
                </div>
                <div className="pro_list_main">
                  <div className="tick_inner_main">
                    <FaAngleDoubleRight />
                  </div>
                  <p className="Products_desc">
                    <span className="product_font_weight"> Multipurpose: </span>
                    Green Net can be used for Crop Protection, Nurseries and
                    Greenhouses, Net Houses and Polyhouses, Fencing and
                    Enclosures, Parking Lot cover, Construction Sites cover,
                    residential areas, etc.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="Products_image_main">
            <img
              src={images.Shade_net}
              className="Products_image_inner"
              alt="tgesimage"
            />
          </div>
        </div>
        <div className="Products_des2_main" id="Pond_liner">
          <div className="Products_des">
            <div>
              <h1>Pond liner</h1>
            </div>
            <div>
              <p className="Products_desc">
                Greenera HDPE Geomembrane Pond Liner is precisely constructed
                from premium-grade high-density polyethylene (HDPE) utilizing
                modern production techniques. Our cutting-edge co-extrusion
                processes offer long-term durability and dependability. Our pond
                liner is engineered to offer seamless waterproofing,
                successfully preventing leakage and seepage while preserving
                water levels and quality. It is UV stabilized, so it can survive
                continuous sunshine exposure without losing structural
                integrity. Its versatility allows for simple installation and
                adaptability to diverse curves, resulting in a great match for
                any lining project. Our pond liner is resistant to chemicals and
                rips, ensuring long-lasting performance even in harsh
                conditions.
              </p>
            </div>
          </div>
          <div className="Products_image_main">
            <img
              src={images.Pond_liner}
              className="Products_image_inner"
              alt="tgesimage"
            />
          </div>
        </div>
        <div className="Products_des1_main" id="Grow_bag">
          <div className="Products_des">
            <div>
              <h1>Grow Bag</h1>
            </div>
            <div>
              <p className="Products_desc">
                Greenera HDPE Grow Bags are intended to change your growing
                experience. They are made of premium HDPE weave laminated
                fabrics and are of the highest quality. Our manufacturing
                technique offers maximum durability, with UV stabilization for
                long-term performance. Waterproof design keeps moisture levels
                appropriate for healthy development. These versatile and
                eco-friendly bags may hold a variety of plants, making them
                great for urban gardens, balconies, or terraces.
              </p>
            </div>
          </div>
          <div className="Products_image_main">
            <img src={images.Grow_bag} className="Products_image_inner" alt="tgesimage" />
          </div>
        </div>
        <div className="Products_des2_main" id="LDPE_Plastic">
          <div className="Products_des">
            <div>
              <h1>Ldpe Plastic</h1>
            </div>
            <div>
              <p className="Products_desc">
                Low-density polyethylene (LDPE) is a type of thermoplastic
                polymer commonly used in the manufacturing of various plastic
                products. LDPE is characterized by its flexibility, toughness,
                and transparency. It is produced through the polymerization of
                ethylene monomers, resulting in a polymer with a branched
                molecular structure and relatively low density.
              </p>
              <br />
              <p className="Products_desc">
                LDPE plastic is widely utilized in packaging materials such as
                plastic bags, shrink wraps, and containers due to its excellent
                resistance to moisture, chemicals, and impact. It is also
                commonly used in the production of squeeze bottles, tubing, and
                various household items.
              </p>
              <br />
              <p className="Products_desc">
                While LDPE offers advantageous properties such as flexibility
                and ease of processing, it is considered less environmentally
                friendly than some other types of plastics due to its slow rate
                of biodegradation. However, efforts are being made to improve
                recycling methods and develop more sustainable alternatives to
                mitigate its environmental impact.
              </p>
            </div>
          </div>
          <div className="Products_image_main">
            <img
              src={images.Ldpe_plastic}
              className="Products_image_inner"
              alt="tgesimage"
            />
          </div>
        </div>
        <div className="Products_des1_main" id="vermi_compost_bed">
          <div className="Products_des">
            <div>
              <h1>Vermi Compost Bed</h1>
            </div>
            <div>
              <p className="Products_desc">
                Vermi Beds are intended to transform kitchen and other green
                waste into very productive organic compost known as
                vermicompost. This technique is referred to as vermicomposting.
                Earthworms devour this waste as food and degrade it, which
                eventually turns into organic compost. This is often referred to
                as worm composting. Vermi beds are the future of current
                composting technology. Vermi Beds are an excellent solution for
                organic agriculture growers seeking higher-quality crop
                harvests.
              </p>
              <br />
              <p className="Products_desc">
                Greenera HDPE Vermi beds are made of superior HDPE woven
                laminated textiles, are ISI-certified for quality assurance, and
                UV-resistant for durability. They have a net window for
                excellent aeration, an exit for collecting vermi wash, support
                pockets for simple installation, and dependable functioning.
              </p>
            </div>
          </div>
          <div className="Products_image_main">
            <img
              src={images.vermi_compost_bed}
              className="Products_image_inner"
              alt="tgesimage"
            />
          </div>
        </div>
        <div className="Products_des2_main" id="Mulch_Film">
          <div className="Products_des">
            <div>
              <h1>Mulch Film</h1>
            </div>
            <div>
              <p className="Products_desc">
                Mulching is the technique of covering the soil with a layer to
                allow for the growth of food crops and vegetables. Mulching
                sheets cover the soil, which helps to reduce weed development,
                regulate soil temperature, limit moisture loss, and boost crop
                yield and early harvest.
              </p>
              <br />
              <p className="Products_desc">
                Greenera Mulch Film is a high-quality product made from premium
                LLDPE and LDPE materials supplemented with additives. It stands
                out as a protective layer for soil surfaces, enhancing growing
                conditions and crop yields. With its remarkable moisture
                retention, weed suppression, and soil temperature management, it
                produces an optimal environment for plant development,
                distinguishing it from other mulch films on the market.
              </p>
            </div>
          </div>
          <div className="Products_image_main">
            <img
              src={images.Mulch_film}
              className="Products_image_inner"
              alt="Mulch film"
            />
          </div>
        </div>
        <div className="Products_des1_main" id="Bio_Degradable_bags">
          <div className="Products_des">
            <div>
              <h1>Bio Degradable Bags</h1>
            </div>
            <div>
              <p className="Products_desc">
                Biodegradable bags are a type of packaging made from materials
                that can naturally decompose over time when exposed to
                environmental conditions such as moisture, heat, and
                microorganisms. These bags are designed to break down into
                organic compounds, water, carbon dioxide, and biomass, leaving
                behind minimal to no harmful residue. Typically crafted from
                renewable resources like plant-based polymers or starches,
                biodegradable bags offer a sustainable alternative to
                traditional plastic bags, helping to mitigate plastic pollution
                and protect the environment.
              </p>
            </div>
          </div>
          <div className="Products_image_main">
            <img
              src={images.Bio_Degradable_bags}
              className="Products_image_inner"
              alt="Bio_Degradable_bags"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
