import React from "react";
import "./assets/css/style.css";

const Boost = () => {
  return (
    <div className="boost-container">
      {" "}
      <div className="boost-button-prev boost-button">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 350 160 90">
          <g className="boost-svg-wrap">
            <g className="boost-svg-circle-wrap">
              <circle cx="42" cy="42" r="40"></circle>
            </g>
            <path
              className="boost-svg-arrow"
              d="M.983,6.929,4.447,3.464.983,0,0,.983,2.482,3.464,0,5.946Z"
            ></path>
            <path className="boost-svg-line" d="M80,0H0"></path>
          </g>
        </svg>
      </div>
      <div className="boost-button-next boost-button">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 350 160 90">
          <g className="boost-svg-wrap">
            <g className="boost-svg-circle-wrap">
              <circle cx="42" cy="42" r="40"></circle>
            </g>
            <path
              className="boost-svg-arrow"
              d="M.983,6.929,4.447,3.464.983,0,0,.983,2.482,3.464,0,5.946Z"
            ></path>
            <path className="boost-svg-line" d="M80,0H0"></path>
          </g>
        </svg>
      </div>
    </div>
  );
};

export default Boost;
