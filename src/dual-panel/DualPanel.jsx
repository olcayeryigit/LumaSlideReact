"use client";
import { useState } from "react";
import image1 from "./assets/images/1.png";
import image2 from "./assets/images/2.png";
import image3 from "./assets/images/3.png";
import image4 from "./assets/images/4.png";
import "./assets/css/style.css";
import SplitSlideshow from "./SplitSlideshow";

const slidesData = [
  {
    image: image1,
    text: "Monstera Deliciosa",
  },
  {
    image: image2,
    text: "Snake Plant",
  },
  {
    image: image3,
    text: "Aloe Vera",
  },
  {
    image: image4,
    text: "Water Lily",
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
