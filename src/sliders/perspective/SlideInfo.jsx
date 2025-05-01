// src/components/SlideInfo.jsx
import { useRef } from "react";
import useTilt from "./useTilt";

function SlideInfo({ title, subtitle, description, status }) {
  const infoRef = useRef(null);
  const innerRef = useRef(null);

  useTilt(infoRef, innerRef);

  return (
    <div
      className="slide-info"
      data-current={status === "current" ? "" : undefined}
      data-next={status === "next" ? "" : undefined}
      data-previous={status === "previous" ? "" : undefined}
      ref={infoRef}
    >
      <div className="slide-info__inner" ref={innerRef}>
        <div className="slide-info--text__wrapper">
          <div data-title className="slide-info--text">
            <span>{title}</span>
          </div>
          <div data-subtitle className="slide-info--text">
            <span>{subtitle}</span>
          </div>
          <div data-description className="slide-info--text">
            <span>{description}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SlideInfo;
