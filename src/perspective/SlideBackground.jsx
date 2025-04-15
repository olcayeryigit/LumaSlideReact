// src/components/SlideBackground.jsx
function SlideBackground({ image, dir, status }) {
  return (
    <div
      className="slide__bg"
      style={{ "--bg": `url(${image})`, "--dir": dir }}
      data-current={status === "current" ? "" : undefined}
      data-next={status === "next" ? "" : undefined}
      data-previous={status === "previous" ? "" : undefined}
    ></div>
  );
}

export default SlideBackground;
