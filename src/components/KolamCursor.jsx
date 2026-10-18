import React, { useEffect, useRef } from "react";

const KolamCursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!finePointer.matches || reducedMotion.matches) return undefined;

    const dot = dotRef.current;
    const ring = ringRef.current;
    document.documentElement.classList.add("kolam-cursor-enabled");

    const move = (event) => {
      const point = `translate3d(${event.clientX}px, ${event.clientY}px, 0)`;
      dot.style.transform = point;
      ring.style.transform = point;
      dot.classList.add("is-visible");
      ring.classList.add("is-visible");
    };
    const over = (event) => {
      if (event.target.closest("a, button, [role='button'], input, textarea, select")) {
        ring.classList.add("is-hovering");
      } else {
        ring.classList.remove("is-hovering");
      }
    };
    window.addEventListener("pointermove", move, { passive: true });
    document.addEventListener("pointerover", over);
    return () => {
      window.removeEventListener("pointermove", move);
      document.removeEventListener("pointerover", over);
      document.documentElement.classList.remove("kolam-cursor-enabled");
    };
  }, []);

  return (
    <div className="kolam-cursor" aria-hidden="true">
      <span className="kolam-cursor-dot" ref={dotRef} />
      <span className="kolam-cursor-ring" ref={ringRef} />
    </div>
  );
};

export default KolamCursor;
