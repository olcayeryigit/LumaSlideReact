// src/components/Slider.jsx
import { useState } from "react";
import Slide from "./Slide";
import SlideInfo from "./SlideInfo";
import SlideBackground from "./SlideBackground";

function Slider({ slidesData }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const changeSlide = (direction) => {
    setCurrentIndex((prev) => {
      const newIndex =
        (prev + direction + slidesData.length) % slidesData.length;
      return newIndex;
    });
  };

  const getSlideStatus = (index) => {
    if (index === currentIndex) return "current";
    if (index === (currentIndex - 1 + slidesData.length) % slidesData.length)
      return "previous";
    if (index === (currentIndex + 1) % slidesData.length) return "next";
    return "";
  };

  return (
    <div className="slider flex items-center">
      <button
        className="slider--btn slider--btn__prev border-0 bg-none cursor-pointer focus:outline-none focus:border-0"
        onClick={() => changeSlide(-1)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m15 18-6-6 6-6" />
        </svg>
      </button>

      <div className="slides__wrapper">
        <div className="slides">
          {slidesData.map((slide, index) => (
            <Slide
              key={index}
              image={slide.image}
              status={getSlideStatus(index)}
              zIndex={
                getSlideStatus(index) === "current"
                  ? 20
                  : getSlideStatus(index) === "previous"
                  ? 30
                  : 10
              }
            />
          ))}
          {slidesData.map((slide, index) => (
            <SlideBackground
              key={`bg-${index}`}
              image={slide.image}
              dir={slide.bgDir}
              status={getSlideStatus(index)}
            />
          ))}
        </div>
        <div className="slides--infos">
          {slidesData?.map((slide, index) => (
            <SlideInfo
              key={`info-${index}`}
              title={slide.title}
              subtitle={slide.subtitle}
              description={slide.description}
              status={getSlideStatus(index)}
            />
          ))}
        </div>
      </div>

      <button
        className="slider--btn slider--btn__next border-0 bg-none cursor-pointer focus:outline-none focus:border-0"
        onClick={() => changeSlide(1)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m9 18 6-6-6-6" />
        </svg>
      </button>
    </div>
  );
}

export default Slider;
