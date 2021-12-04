import React from "react";
import "./SectionPage.css";
const SectionPage = ({ headline, description, imgStart, img, alt }) => {
  return (
    <>
      <div className="container__home">
        <div
          className="row1 home__hero-row"
          style={{
            display: "flex",
            flexDirection: imgStart === "Start" ? "row" : "row-reverse",
          }}
        >
          <div className="col">
            <div className="home__hero-text-wrapper">
              <h1 className="heading dark">{headline}</h1>
              <p className="home__hero-subtitle dark">{description}</p>
            </div>
          </div>
          <div className="col">
            <div className="section_img_wrapper">
              <img src={img} alt={alt} className="section_img_src_wrapper" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionPage;
