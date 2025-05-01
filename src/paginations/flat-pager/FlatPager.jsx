import React, { useState } from "react";

const FlatPager = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index) => {
    if (index === activeIndex) return; // Eğer tıklanan buton zaten aktifse, hiçbir şey yapma
    setActiveIndex(index); // Aktif butonu değiştir
  };

  return (
    <div className="p-3 mt-20 flex items-center justify-center gap-10 md:gap-2 ">
      {[...Array(4)].map((_, index) => (
        <div
          key={index}
          className={`btn  ${
            activeIndex === index ? "w-24 md:w-10" : " w-8 md:w-4"
          } h-8 md:h-4  rounded-full cursor-pointer transition-all duration-300 ease-in-out bg-pink-700`}
          onClick={() => handleClick(index)}
        />
      ))}
    </div>
  );
};

export default FlatPager;
