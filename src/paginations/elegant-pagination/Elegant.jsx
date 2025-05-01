import React, { useState } from "react";
import "./assets/css/style.css";

const Elegant = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const handleClick = (index) => {
    setActiveSlide(index);
    console.log("Slide geç:", index);
    // Burada sliderGoTo(index) gibi bir fonksiyon çağrılabilir
  };

  return (
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
  );
};

export default Elegant;
