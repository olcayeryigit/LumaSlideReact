// src/hooks/useTilt.js
import { useEffect, useRef } from "react";

class Vec2 {
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }

  set(x, y) {
    this.x = x;
    this.y = y;
  }

  lerp(v, t) {
    this.x = lerp(this.x, v.x, t);
    this.y = lerp(this.y, v.y, t);
  }
}

const lerp = (a, b, t) => a + (b - a) * t;

function useTilt(triggerRef, targetRef) {
  const rotDeg = useRef({ current: new Vec2(), target: new Vec2() });
  const bgPos = useRef({ current: new Vec2(), target: new Vec2() });
  const lerpAmount = useRef(0.06);

  useEffect(() => {
    const trigger = triggerRef.current;
    const target = targetRef.current;
    if (!trigger || !target) return;

    const ticker = () => {
      rotDeg.current.current.lerp(rotDeg.current.target, lerpAmount.current);
      bgPos.current.current.lerp(bgPos.current.target, lerpAmount.current);

      target.style.setProperty(
        "--rotX",
        `${rotDeg.current.current.y.toFixed(2)}deg`
      );
      target.style.setProperty(
        "--rotY",
        `${rotDeg.current.current.x.toFixed(2)}deg`
      );
      target.style.setProperty(
        "--bgPosX",
        `${bgPos.current.current.x.toFixed(2)}%`
      );
      target.style.setProperty(
        "--bgPosY",
        `${bgPos.current.current.y.toFixed(2)}%`
      );

      rafId = requestAnimationFrame(ticker);
    };

    const onMouseMove = ({ offsetX, offsetY }) => {
      lerpAmount.current = 0.1;
      const ox = (offsetX - trigger.clientWidth * 0.5) / (Math.PI * 3);
      const oy = -(offsetY - trigger.clientHeight * 0.5) / (Math.PI * 4);
      rotDeg.current.target.set(ox, oy);
      bgPos.current.target.set(-ox * 0.3, oy * 0.3);
    };

    const onMouseLeave = () => {
      lerpAmount.current = 0.06;
      rotDeg.current.target.set(0, 0);
      bgPos.current.target.set(0, 0);
    };

    let rafId = requestAnimationFrame(ticker);
    trigger.addEventListener("mousemove", onMouseMove);
    trigger.addEventListener("mouseleave", onMouseLeave);

    return () => {
      cancelAnimationFrame(rafId);
      trigger.removeEventListener("mousemove", onMouseMove);
      trigger.removeEventListener("mouseleave", onMouseLeave);
    };
  }, [triggerRef, targetRef]);
}

export default useTilt;
