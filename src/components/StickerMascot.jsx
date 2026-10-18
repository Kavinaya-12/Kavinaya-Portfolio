import React, { useEffect, useRef } from "react";

const StickerMascot = ({ className = "" }) => {
  const mascot = useRef(null);

  useEffect(() => {
    const node = mascot.current;
    if (!node || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;
    const pupils = node.querySelectorAll(".mascot-pupil");
    const follow = (event) => {
      const rect = node.getBoundingClientRect();
      const dx = (event.clientX - (rect.left + rect.width / 2)) / Math.max(rect.width, 1);
      const dy = (event.clientY - (rect.top + rect.height / 2)) / Math.max(rect.height, 1);
      pupils.forEach((pupil) => { pupil.style.transform = `translate(${Math.max(-2, Math.min(2, dx * 5))}px, ${Math.max(-2, Math.min(2, dy * 4))}px)`; });
    };
    window.addEventListener("pointermove", follow, { passive: true });
    return () => window.removeEventListener("pointermove", follow);
  }, []);

  return (
    <svg ref={mascot} className={`sticker-mascot ${className}`} viewBox="0 0 150 130" role="img" aria-label="A little smiling mascot">
      <path className="mascot-body" d="M21 72C17 47 31 25 56 20c22-8 51-3 66 14 14 16 13 42 3 61-11 20-33 29-58 27-24-1-42-12-47-30-2-7-2-13 1-20Z" />
      <ellipse cx="49" cy="70" rx="14" ry="16" fill="#FFF8F0"/><ellipse cx="101" cy="70" rx="14" ry="16" fill="#FFF8F0"/>
      <circle className="mascot-pupil" cx="52" cy="72" r="9" fill="#3A2B3C"/><circle className="mascot-pupil" cx="104" cy="72" r="9" fill="#3A2B3C"/>
      <circle cx="49" cy="68" r="3.5" fill="#FFF"/><circle cx="101" cy="68" r="3.5" fill="#FFF"/>
      <circle cx="29" cy="89" r="8" fill="#FF9EBB" opacity=".88"/><circle cx="121" cy="89" r="8" fill="#FF9EBB" opacity=".88"/>
      <path d="M68 89q7 9 14 0" fill="none" stroke="#3A2B3C" strokeWidth="4" strokeLinecap="round"/>
    </svg>
  );
};

export default StickerMascot;
