import React, { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

const ScrollExperience = () => {
  useLayoutEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const lenis = reduced ? null : new Lenis({ duration: 1.05, smoothWheel: true, syncTouch: false });
    const raf = (time) => lenis?.raf(time * 1000);
    const update = () => ScrollTrigger.update();
    if (lenis) { lenis.on("scroll", update); gsap.ticker.add(raf); }
    const cleanup = [];
    const cursor = document.querySelector(".sky-cursor");
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (cursor && finePointer && !reduced) {
      document.documentElement.classList.add("sky-cursor-on");
      const move = (event) => {
        const linked = event.target.closest("a,button");
        gsap.set(cursor, { x: event.clientX, y: event.clientY, scale: linked ? 1.55 : 1 });
        cursor.classList.toggle("is-link", Boolean(linked));
      };
      window.addEventListener("pointermove", move, { passive: true });
      cleanup.push(() => { window.removeEventListener("pointermove", move); document.documentElement.classList.remove("sky-cursor-on"); });
    }
    const ctx = gsap.context(() => {
      const progress = document.querySelector(".scroll-progress");
      if (progress && !reduced) gsap.to(progress, { scaleX: 1, ease: "none", scrollTrigger: { trigger: document.documentElement, start: "top top", end: "bottom bottom", scrub: true } });
      const celestial = document.querySelector(".celestial-progress");
      if (celestial) {
        ScrollTrigger.create({
          trigger: document.documentElement,
          start: "top top",
          end: "bottom bottom",
          onUpdate: (self) => {
            celestial.style.setProperty("--journey-progress", self.progress);
            celestial.classList.toggle("is-night", self.progress > 0.68);
          },
        });
      }

      if (!reduced) {
        gsap.fromTo(".hero-letter", { y: 34, rotate: 5, opacity: 0 }, { y: 0, rotate: 0, opacity: 1, duration: .6, stagger: .045, ease: "back.out(1.4)", delay: .12 });
        gsap.utils.toArray(".statement-word").forEach((word, index) => gsap.fromTo(word, { color: "#b9adbf" }, { color: "#3B3057", ease: "none", scrollTrigger: { trigger: ".statement-section", start: `top+=${index * 8} 78%`, end: `top+=${index * 8 + 150} 38%`, scrub: true } }));
        const statementCopy = document.querySelector(".statement-copy-panel");
        if (statementCopy) gsap.fromTo(statementCopy, { autoAlpha: 0, y: 16 }, { autoAlpha: 1, y: 0, duration: .7, ease: "power2.out", scrollTrigger: { trigger: statementCopy, start: "top 78%", once: true } });
        gsap.utils.toArray(".project-editorial").forEach((card, index) => gsap.fromTo(card, { opacity: 0, x: index % 2 ? 34 : -34 }, { opacity: 1, x: 0, duration: .65, ease: "power2.out", scrollTrigger: { trigger: card, start: "top 88%", once: true } }));
        gsap.utils.toArray(".skill-bento-card,.journey-item,.publication-editorial,.certificate-row,.achievement-row").forEach((item) => gsap.fromTo(item, { opacity: 0, y: 18 }, { opacity: 1, y: 0, duration: .55, ease: "power2.out", scrollTrigger: { trigger: item, start: "top 90%", once: true } }));
        const path = document.querySelector(".journey-doodle-path path");
        if (path) { const length = path.getTotalLength(); gsap.set(path, { strokeDasharray: `${length} ${length}`, strokeDashoffset: length }); gsap.to(path, { strokeDashoffset: 0, ease: "none", scrollTrigger: { trigger: ".journey-timeline", start: "top 80%", end: "bottom 25%", scrub: true } }); }
      }

      const root = document.documentElement;
      const scenes = [["#home", "#FFD6E8", "#3B3057"], ["#statement", "#FFE1EA", "#3B3057"], ["#about", "#FFE3D0", "#3B3057"], ["#projects", "#FFC8A2", "#3B3057"], ["#research", "#FFE0CB", "#3B3057"], ["#certificates", "#FFE9D8", "#3B3057"], ["#skills", "#F3E7FF", "#3B3057"], ["#journey", "#CDB8F5", "#3B3057"], [".credibility-strip", "#D7C8F5", "#3B3057"], ["#achievements", "#BFAAEF", "#3B3057"], ["#contact", "#6B5BA8", "#FFFFFF"]];
      scenes.forEach(([selector, color, foreground]) => { const section = document.querySelector(selector); if (section) ScrollTrigger.create({ trigger: section, start: "top 54%", end: "bottom 46%", onEnter: () => gsap.to(root, { "--scene-bg": color, "--scene-fg": foreground, duration: .75 }), onEnterBack: () => gsap.to(root, { "--scene-bg": color, "--scene-fg": foreground, duration: .75 }) }); });

      const planePath = document.querySelector(".sky-plane-path");
      const plane = document.querySelector(".sky-plane-icon");
      if (planePath && plane && !reduced) {
        const length = planePath.getTotalLength();
        ScrollTrigger.create({ trigger: document.documentElement, start: "top top", end: "bottom bottom", onUpdate: (self) => { const point = planePath.getPointAtLength(length * self.progress); gsap.set(plane, { x: point.x - 19, y: point.y - 8, rotation: self.direction > 0 ? 18 : -18, transformOrigin: "10px 8px" }); } });
      }

      ScrollTrigger.refresh();
    });
    return () => { ctx.revert(); cleanup.forEach((fn) => fn()); if (lenis) { gsap.ticker.remove(raf); lenis.destroy(); } };
  }, []);
  return <>
    <div className="scroll-progress" aria-hidden="true" />
    <span className="page-load-heart" aria-hidden="true" />
    <svg className="sky-bg-cloud sky-bg-cloud-a" viewBox="0 0 180 90" aria-hidden="true"><path d="M32 72C12 72 4 60 4 47c0-15 12-26 27-26 6 0 11 2 15 5C54 10 69 3 85 7c14 3 23 14 24 29 5-3 10-4 16-4 18 0 31 12 31 27 0 8-5 13-15 13H32Z" /></svg>
    <svg className="sky-bg-cloud sky-bg-cloud-b" viewBox="0 0 180 90" aria-hidden="true"><path d="M32 72C12 72 4 60 4 47c0-15 12-26 27-26 6 0 11 2 15 5C54 10 69 3 85 7c14 3 23 14 24 29 5-3 10-4 16-4 18 0 31 12 31 27 0 8-5 13-15 13H32Z" /></svg>
    <svg className="sky-bg-cloud sky-bg-cloud-c" viewBox="0 0 180 90" aria-hidden="true"><path d="M32 72C12 72 4 60 4 47c0-15 12-26 27-26 6 0 11 2 15 5C54 10 69 3 85 7c14 3 23 14 24 29 5-3 10-4 16-4 18 0 31 12 31 27 0 8-5 13-15 13H32Z" /></svg>
    <svg className="sky-bg-cloud sky-bg-cloud-d" viewBox="0 0 180 90" aria-hidden="true"><path d="M32 72C12 72 4 60 4 47c0-15 12-26 27-26 6 0 11 2 15 5C54 10 69 3 85 7c14 3 23 14 24 29 5-3 10-4 16-4 18 0 31 12 31 27 0 8-5 13-15 13H32Z" /></svg>
    <svg className="sky-bg-cloud sky-bg-cloud-e" viewBox="0 0 180 90" aria-hidden="true"><path d="M32 72C12 72 4 60 4 47c0-15 12-26 27-26 6 0 11 2 15 5C54 10 69 3 85 7c14 3 23 14 24 29 5-3 10-4 16-4 18 0 31 12 31 27 0 8-5 13-15 13H32Z" /></svg>
    <svg className="sky-bg-cloud sky-bg-cloud-f" viewBox="0 0 180 90" aria-hidden="true"><path d="M32 72C12 72 4 60 4 47c0-15 12-26 27-26 6 0 11 2 15 5C54 10 69 3 85 7c14 3 23 14 24 29 5-3 10-4 16-4 18 0 31 12 31 27 0 8-5 13-15 13H32Z" /></svg>
    <div className="sky-cursor" aria-hidden="true" />
    <div className="celestial-progress" aria-hidden="true"><span className="celestial-track" /><span className="celestial-body" /></div>
    <div className="sky-night-details" aria-hidden="true"><span className="shooting-star" /><span className="night-star star-one" /><span className="night-star star-two" /><span className="night-star star-three" /></div>
  </>;
};

export default ScrollExperience;
