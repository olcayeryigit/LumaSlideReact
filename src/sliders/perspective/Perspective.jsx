import { useState, useEffect } from "react";
import imagesLoaded from "imagesloaded";

import Image1 from "./assets/images/1.webp";
import Image2 from "./assets/images/2.webp";
import Image3 from "./assets/images/3.webp";
import Slider from "./slider";
import "./assets/css/style.css";

const slidesData = [
  {
    image: Image1,
    title: "Slide1",
    subtitle: "Slide1 Subtitle",
    description: "Slide1 Description",
    bgDir: 1,
  },
  {
    image: Image2,
    title: "Slide2",
    subtitle: "Slide2 Subtitle",
    description: "Slide2 Description",
    bgDir: 1,
  },
  {
    image: Image3,
    title: "Slide3",
    subtitle: "Slide3 Subtitle",
    description: "Slide3 Description",
    bgDir: -1,
  },
];

function Perspective() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const images = slidesData.map((slide) => slide.image);
    let loadedImages = 0;
    const totalImages = images.length;

    const updateProgress = () => {
      loadedImages++;
      if (loadedImages === totalImages) {
        setIsLoaded(true); // Tüm resimler yüklendiğinde isLoaded'i true yap
      }
    };

    const sliderElement = document.querySelector(".slider-container");
    if (sliderElement) {
      imagesLoaded(sliderElement, updateProgress);
    } else {
      images.forEach((src) => {
        const img = new Image();
        img.src = src;
        img.onload = updateProgress;
      });
    }
  }, []);

  return (
    <div className=" grid place-items-center overflow-hidden relative pt-24 pb-44 mx-4">
      <div className="slider-container">
        <Slider slidesData={slidesData} />
      </div>
    </div>
  );
}

export default Perspective;
