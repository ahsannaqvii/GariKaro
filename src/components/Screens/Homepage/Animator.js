import React from "react";
import { AiFillFire } from "react-icons/ai";
import { FaFirefox, FaGripfire } from "react-icons/fa";
// import { Link } from "react-router-dom";

import "./Animator.css";
function Animator() {
  return (
    <React.Fragment>
      {" "}
      <div className="pricing__section">
        <div className="pricing__wrapper">
          <h1 className="pricing__heading">One app for everyday travel </h1>
          <div className="pricing__container">
            <a className="pricing__container-card">
              <div className="pricing__container-cardInfo">
                <div className="icon">
                  {" "}
                  <AiFillFire />
                </div>
                <h3>Security</h3>
                {/* <h4>$8.99</h4> */}
                {/* <p>per month</p> */}
                <ul className="pricing__container-features">
                  <li>Statistical Analysis</li>
                  <li>Cash-back</li>
                  <li>Helping to find previous studies</li>
                </ul>
              </div>
            </a>
            <a className="pricing__container-card">
              <div className="pricing__container-cardInfo">
                <div className="icon">
                  {" "}
                  <FaFirefox />
                </div>
                <h3
                  style={{
                    color: "black",
                  }}
                >
                  Car Pooling{" "}
                </h3>
                <ul className="pricing__container-features">
                  <li
                    style={{
                      color: "black",
                    }}
                  >
                    Statistical Analysis
                  </li>
                  <li
                    style={{
                      color: "black",
                    }}
                  >
                    Cash-back
                  </li>
                  <li
                    style={{
                      color: "black",
                    }}
                  >
                    {" "}
                    Helping to find previous studies
                  </li>
                </ul>
              </div>
            </a>
            <a className="pricing__container-card">
              <div className="pricing__container-cardInfo">
                <div className="icon">
                  {" "}
                  <FaGripfire />
                </div>
                <h3>Affordance</h3>
                {/* <h4>$8.99</h4>
                <p>per month</p> */}
                <ul className="pricing__container-features">
                  <li>Statistical Analysis</li>
                  <li>Cash-back</li>
                  <li>Helping to find previous studies</li>
                </ul>
              </div>
            </a>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
export default Animator;
