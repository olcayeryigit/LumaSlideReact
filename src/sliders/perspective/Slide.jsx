// src/components/Slide.jsx
import { useRef } from "react";
import useTilt from "./useTilt";

function Slide({ image, status, zIndex }) {
  const slideRef = useRef(null);
  const innerRef = useRef(null);

  useTilt(slideRef, innerRef);

  return (
    <div
      className="slide"
      data-current={status === "current" ? "" : undefined}
      data-next={status === "next" ? "" : undefined}
      data-previous={status === "previous" ? "" : undefined}
      style={{ zIndex }}
      ref={slideRef}
    >
      <div className="slide__inner" ref={innerRef}>
        <div className="slide--image__wrapper">
          <img
            className="slide--image bg-top"
            src={image}
            alt={`Slide ${status}`}
          />
        </div>
      </div>
    </div>
  );
}

export default Slide;
