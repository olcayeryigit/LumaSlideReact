import React, { useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import image1 from "./assets/images/1.webp";
import image2 from "./assets/images/2.webp";
import image3 from "./assets/images/3.webp";
import image4 from "./assets/images/4.webp";
import image5 from "./assets/images/5.webp";
import image6 from "./assets/images/6.webp";
import "./assets/css/style.css";
const Flux = () => {
  const sliderRef = useRef(null);

  const items = [
    {
      backgroundImage: `url(${image1})`,
      title: "Cybernetic Youths",
      description:
        "The new generation thrives in a world driven by AI and big data. How do we navigate the digital landscape without losing ourselves?",
    },
    {
      backgroundImage: `url(${image2})`,
      title: "Encrypted Bonds",
      description:
        "Security in the digital era depends on encryption and blockchain. Discover how cryptography is shaping the future of trust.",
    },
    {
      backgroundImage: `url(${image3})`,
      title: "The AI Guardian",
      description:
        "Artificial intelligence is not just a tool but a protector. How can we ensure a safe coexistence with intelligent systems?",
    },
    {
      backgroundImage: `url(${image4})`,
      title: "Digital Footprint",
      description:
        "Every click, every search, every interaction leaves a mark. How can you protect your digital identity in an age of surveillance?",
    },
    {
      backgroundImage: `url(${image5})`,
      title: "Urban Cybernetics",
      description:
        "Smart cities powered by IoT and AI are redefining urban life. Are we ready for a world where technology governs our daily existence?",
    },
    {
      backgroundImage: `url(${image6})`,
      title: "The Digital Migration",
      description:
        "As we transition from physical to virtual spaces, the metaverse is becoming our new reality. What does this mean for human interaction?",
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
    <main className=" flux-slider z-50 overflow-hidden relative w-full h-screen  shadow-lg  border-t-2 border-gray-200 ">
      <ul
        className="flux-slider transition-all duration-500 ease-in-out"
        ref={sliderRef}
      >
        {items.map((item, index) => (
          <li
            key={index}
            className="flux-slider-item w-20 h-32 md:w-36 md:h-50 list-none absolute top-2/3 md:top-1/2 transform -translate-y-1 z-10 bg-center bg-cover rounded-2xl  transition-all duration-500 ease-in-out border-2 border-gray-200 shadow-3xl  "
            style={{ backgroundImage: item.backgroundImage }}
          >
            <div className="text-shadow-black flux-slider-content absolute top-1/3 md:top-1/2 left-8 md:left-12 transform -translate-y-1/2 font-normal text-white opacity-0 hidden min-w-[30vw] max-w-[400px] text-sm leading-relaxed transition-opacity duration-700 ease-in-out p-2 ">
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
      <nav className="nav-slider2 absolute bottom-20 left-10 md:bottom-4 md:left-1/2  transform md:-translate-x-1/2 z-50 select-none space-x-2">
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
