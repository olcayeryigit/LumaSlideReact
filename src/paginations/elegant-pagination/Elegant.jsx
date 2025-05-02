"use client";

import React, { useState } from "react";
import "./assets/css/style.css";

const ElegantPagination = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const handleClick = (index) => {
    setActiveSlide(index);
    console.log("Slide geç:", index);
  };

  const contents = ["Page 1", "Page 2", "Page 3", "Page 4"];

  return (
    <div className="elegant-pagination-container">
      <div className="pagination-content">{contents[activeSlide]}</div>

      <div id="elegant-pagination">
        {[0, 1, 2, 3].map((index) => (
          <button
            key={index}
            className={activeSlide === index ? "active" : ""}
            data-slide={index}
            onClick={() => handleClick(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default ElegantPagination;
