"use client";
import { useState } from "react";
import image1 from "./assets/images/1.webp";
import image2 from "./assets/images/2.webp";
import image3 from "./assets/images/3.webp";
import image4 from "./assets/images/4.webp";
import "./assets/css/style.css";
import SplitSlideshow from "./SplitSlideshow";

const slidesData = [
  {
    image: image1,
    text: "Slide1",
  },
  {
    image: image2,
    text: "Slide2",
  },
  {
    image: image3,
    text: "Slide3",
  },
  {
    image: image4,
    text: "Slide4",
  },
];

function DualPanel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div className="slider4  relative overflow-hidden h-[100vh] bg-gray-500 md:mx-8  border-2 border-gray-800  ">
      <SplitSlideshow
        slidesData={slidesData}
        currentSlide={currentSlide}
        setCurrentSlide={setCurrentSlide}
      />
    </div>
  );
}

export default DualPanel;
