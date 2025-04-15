"use client";

import { useRef, useEffect } from "react";
import Slideshow from "./Slideshow";

function SplitSlideshow({ slidesData, currentSlide, setCurrentSlide }) {
  const leftSliderRef = useRef(null);
  const rightSliderRef = useRef(null);
  const textSliderRef = useRef(null);
  const dragging = useRef(false);
  const tracking = useRef(0);
  const rightTracking = useRef(0);
  const maxItems = slidesData.length;

  const handleWheel = (e) => {
    e.preventDefault();
    if (e.deltaY > 0) {
      setCurrentSlide((prev) => (prev + 1) % maxItems);
    } else if (e.deltaY < 0) {
      setCurrentSlide((prev) => (prev - 1 + maxItems) % maxItems);
    }
  };

  const handleMouseDown = () => {
    const leftTrack = leftSliderRef.current?.querySelector(".slider-track");
    const rightTrack = rightSliderRef.current?.querySelector(".slider-track");

    if (!leftTrack || !rightTrack) return;

    dragging.current = true;
    tracking.current =
      parseFloat(getComputedStyle(leftTrack).transform.split(",")[5]) || 0;
    rightTracking.current =
      parseFloat(getComputedStyle(rightTrack).transform.split(",")[5]) || 0;
  };

  const handleMouseMove = () => {
    if (!dragging.current) return;

    const leftTrack = leftSliderRef.current?.querySelector(".slider-track");
    const rightTrack = rightSliderRef.current?.querySelector(".slider-track");

    if (!leftTrack || !rightTrack) return;

    const newTracking =
      parseFloat(getComputedStyle(leftTrack).transform.split(",")[5]) || 0;
    const diffTracking = newTracking - tracking.current;
    rightTrack.style.transform = `translateY(${
      rightTracking.current - diffTracking
    }px)`;
  };

  const handleMouseUp = () => {
    dragging.current = false;
  };

  const handleTouchStart = () => {
    const leftTrack = leftSliderRef.current?.querySelector(".slider-track");
    const rightTrack = rightSliderRef.current?.querySelector(".slider-track");

    if (!leftTrack || !rightTrack) return;

    dragging.current = true;
    tracking.current =
      parseFloat(getComputedStyle(leftTrack).transform.split(",")[5]) || 0;
    rightTracking.current =
      parseFloat(getComputedStyle(rightTrack).transform.split(",")[5]) || 0;
  };

  const handleTouchMove = () => {
    if (!dragging.current) return;

    const leftTrack = leftSliderRef.current?.querySelector(".slider-track");
    const rightTrack = rightSliderRef.current?.querySelector(".slider-track");

    if (!leftTrack || !rightTrack) return;

    const newTracking =
      parseFloat(getComputedStyle(leftTrack).transform.split(",")[5]) || 0;
    const diffTracking = newTracking - tracking.current;
    rightTrack.style.transform = `translateY(${
      rightTracking.current - diffTracking
    }px)`;
  };

  const handleTouchEnd = () => {
    dragging.current = false;
  };

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const leftSlider = leftSliderRef.current;
    if (!leftSlider) return;

    leftSlider.addEventListener("wheel", handleWheel);
    leftSlider.addEventListener("mousedown", handleMouseDown);
    leftSlider.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("touchend", handleTouchEnd);

    return () => {
      leftSlider.removeEventListener("wheel", handleWheel);
      leftSlider.removeEventListener("mousedown", handleMouseDown);
      leftSlider.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);

  const getRightIndex = (index) => maxItems - 1 - index;

  return (
    <div className="split-slideshow">
      <Slideshow
        className="slideshow slideshow-left"
        ref={leftSliderRef}
        items={slidesData.map((slide) => ({ image: slide.image }))}
        currentSlide={currentSlide}
        maxItems={maxItems}
        isImage={true}
        showDots={true}
        onDotClick={handleDotClick}
      />
      <Slideshow
        className="slideshow slideshow-right"
        ref={rightSliderRef}
        items={slidesData.map((slide) => ({ image: slide.image })).reverse()}
        currentSlide={getRightIndex(currentSlide)}
        maxItems={maxItems}
        isImage={true}
        showDots={false}
      />
      <Slideshow
        className="slideshow-text"
        ref={textSliderRef}
        items={slidesData.map((slide) => ({ text: slide.text }))}
        currentSlide={currentSlide}
        maxItems={maxItems}
        isImage={false}
        showDots={false}
      />
    </div>
  );
}

export default SplitSlideshow;
