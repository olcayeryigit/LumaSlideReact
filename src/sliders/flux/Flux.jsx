import React, { useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import image1 from "./assets/images/1.webp";
import image2 from "./assets/images/2.webp";
import image3 from "./assets/images/3.webp";
import image4 from "./assets/images/4.webp";

import "./assets/css/style.css";
const Flux = () => {
  const sliderRef = useRef(null);

  const items = [
    {
      backgroundImage: `url(${image1})`,
      title: "Slide1",
      description: "Slide1 Description",
    },
    {
      backgroundImage: `url(${image2})`,
      title: "Slide1",
      description: "Slide2 Description",
    },
    {
      backgroundImage: `url(${image3})`,
      title: "Slide3",
      description: "Slide3  Description",
    },
    {
      backgroundImage: `url(${image4})`,
      title: "Slide4",
      description: "Slide4 Description",
    },
    {
      backgroundImage: `url(${image1})`,
      title: "Slide5",
      description: "Slide5 Description",
    },
    {
      backgroundImage: `url(${image2})`,
      title: "Slide6",
      description: "Slide6 Description",
    },
  ];

  const activate = (direction) => {
    if (!sliderRef.current) return;
    const slider = sliderRef.current;
    const firstItem = slider.firstElementChild;
    const lastItem = slider.lastElementChild;

    slider.style.transition = "transform 0.6s ease-in-out";

    if (direction === "next") {
      slider.appendChild(firstItem);
    } else if (direction === "prev") {
      slider.insertBefore(lastItem, firstItem);
    }
  };

  return (
    <main className=" flux-slider z-50 overflow-hidden relative w-full h-[48rem] md:h-[40rem] shadow-lg container mx-auto border-t-2 border-gray-300 ">
      <ul
        className="flux-slider transition-all duration-500 ease-in-out"
        ref={sliderRef}
      >
        {items.map((item, index) => (
          <li
            key={index}
            className="flux-slider-item w-24 h-36  lg:w-36 lg:h-44  xl:w-40 xl:h-50 list-none absolute bottom-52  lg:top-3/5 xl:bottom-40 transform -translate-y-1 z-10 bg-center bg-cover rounded-2xl  transition-all duration-500 ease-in-out border-2 border-gray-300 shadow-3xl  "
            style={{ backgroundImage: item.backgroundImage }}
          >
            <div className="text-shadow-black flux-slider-content absolute top-1/3 lg:top-1/2 left-6 lg:left-12 transform -translate-y-1/2 font-normal text-white opacity-0 hidden min-w-[30vw] max-w-[375px] text-base leading-relaxed transition-opacity duration-700 ease-in-out p-2 ">
              <h2 className="flux-slider-title font-black uppercase opacity-100 translate-y-0 transition-all duration-500 ease-in-out text-4xl">
                {item.title}
              </h2>
              <p className="flux-slider-description leading-7 my-4 text-md">
                {item.description}
              </p>
              <button className="w-fit bg-black/20 text-white border-2 border-white  rounded-sm py-1 px-3 cursor-pointer transition-all duration-300 hover:bg-black/30">
                Read More
              </button>
            </div>
          </li>
        ))}
      </ul>
      <nav className="nav-slider2 absolute bottom-20 left-6 lg:bottom-20 xl:bottom-10 md:left-24 xl:left-1/2  transform md:-translate-x-1/2 z-50 select-none space-x-2">
        <button
          className="bg-black/50 hover:bg-black/60 text-white border border-white rounded-full p-3  transition-all duration-300 ease-in-out hover:scale-105 cursor-pointer"
          onClick={() => activate("prev")}
        >
          <FaArrowLeft />
        </button>
        <button
          className="bg-black/50 hover:bg-black/60 text-white border border-white rounded-full p-3  transition-all duration-300 ease-in-out hover:scale-105 cursor-pointer"
          onClick={() => activate("next")}
        >
          <FaArrowRight />
        </button>
      </nav>
    </main>
  );
};

export default Flux;
