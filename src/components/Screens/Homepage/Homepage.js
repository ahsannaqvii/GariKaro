import React from "react";
import "./Homepage.css";

const headline = "Everyday life made simple";
const description =
  "Ride, order food, shop, pay or become a Captain.Careem is a hassle-free, one stop solution for your daily needs";
const Homepage = () => {
  return (
    <div className="home__hero-img-wrapper1">
      <div className="container__home">
        <div
          className="row home__hero-row"
          style={{
            display: "flex", //inline styles
            flexDirection: "row",
          }}
        >
          <div className="col">
            <div className="home__hero-text-wrapper">
              <h1 className="heading">{headline}</h1>
              <p className="home__hero-subtitle">{description}</p>
            </div>
          </div>
        </div>

      </div>

    </div>

  );
};

export default Homepage;
