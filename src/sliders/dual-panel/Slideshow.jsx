"use client";
import { forwardRef, useState, useEffect } from "react";

const Slideshow = forwardRef(
  (
    { className, items, currentSlide, maxItems, isImage, showDots, onDotClick },
    ref
  ) => {
    const [slideHeight, setSlideHeight] = useState(null);

    useEffect(() => {
      const updateHeight = () => {
        setSlideHeight(window.innerHeight);
      };

      updateHeight(); // İlk mount'ta çağır
      window.addEventListener("resize", updateHeight);

      return () => {
        window.removeEventListener("resize", updateHeight);
      };
    }, []);

    if (slideHeight === null) {
      // SSR ve hydration farkını önlemek için ilk yüklemede render'ı engelle
      return null;
    }

    const translateY = -currentSlide * slideHeight;

    return (
      <div className={className} ref={ref}>
        <div
          className="slider"
          style={{
            transform: `translateY(${translateY}px)`,
            transition: "transform 1s cubic-bezier(0.7, 0, 0.3, 1)",
          }}
        >
          <div className="slider-track">
            {items.map((item, index) => (
              <div
                key={index}
                className={`item slick-slide ${
                  currentSlide === index ? "slick-current" : ""
                }`}
              >
                {isImage ? (
                  <img
                    src={item.image}
                    className="object-cover"
                    alt={`Slide ${index}`}
                  />
                ) : (
                  <div className="text text-white font-bold text-4xl md:text-6xl leading-12 text-center text-dark-shadow">
                    {item.text}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        {showDots && (
          <ul className="slick-dots">
            {Array.from({ length: maxItems }).map((_, index) => (
              <li
                key={index}
                className={currentSlide === index ? "slick-active" : ""}
              >
                <button onClick={() => onDotClick(index)} />
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
);

Slideshow.displayName = "Slideshow";

export default Slideshow;
