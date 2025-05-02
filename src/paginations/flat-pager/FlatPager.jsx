"use client";
import React, { useState } from "react";

const FlatPager = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index) => {
    if (index === activeIndex) return; // Eğer tıklanan buton zaten aktifse, hiçbir şey yapma
    setActiveIndex(index); // Aktif butonu değiştir
  };

  const contents = ["Page 1", "Page 2", "Page 3", "Page 4"];

  return (
    <div className="py-12 container mx-auto">
      <div className="pagination-content  text-lg bg-white   text-center py-12  text-black">
        {contents[activeIndex]}
      </div>

      <div className="py-4 bg-white flex items-center justify-center gap-10 md:gap-2">
        {[...Array(4)].map((_, index) => (
          <div
            key={index}
            className={`btn  ${
              activeIndex === index ? "w-24 md:w-12" : " w-8 md:w-6"
            } h-8 md:h-6  rounded-full cursor-pointer transition-all duration-300 ease-in-out bg-pink-700`}
            onClick={() => handleClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default FlatPager;
