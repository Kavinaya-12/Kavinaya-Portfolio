import React from "react";
import { motion, useReducedMotion } from "framer-motion";

const KolamDivider = () => {
  const reduceMotion = useReducedMotion();

  return (
    <motion.svg
      className="kolam-divider"
      viewBox="0 0 1200 46"
      preserveAspectRatio="none"
      aria-hidden="true"
      initial={reduceMotion ? false : { opacity: 0.35 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.8 }}
    >
      <motion.path
        d="M0 23 H500 C520 23 520 5 540 5 C560 5 560 41 580 41 C600 41 600 5 620 5 C640 5 640 23 660 23 H1200 M0 12 H290 M910 34 H1200"
        initial={reduceMotion ? false : { pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        transition={{ duration: 1.6, ease: "easeInOut" }}
        viewport={{ once: true, amount: 0.8 }}
      />
      {[0, 290, 500, 540, 580, 620, 660, 910, 1200].map((x, index) => (
        <circle key={`${x}-${index}`} cx={x} cy={x === 540 || x === 620 ? 5 : x === 580 ? 41 : x === 0 || x === 290 ? 12 : x === 910 || x === 1200 ? 34 : 23} r="2.2" />
      ))}
    </motion.svg>
  );
};

export default KolamDivider;
