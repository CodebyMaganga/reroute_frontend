"use client";
import { motion, useReducedMotion } from "framer-motion";

const animations = {
  fadeUp: { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } },
  fadeRight: { hidden: { opacity: 0, x: 80 }, visible: { opacity: 1, x: 0 } },
  fadeLeft: { hidden: { opacity: 0, x: -80 }, visible: { opacity: 1, x: 0 } },
  scale: { hidden: { opacity: 0, scale: 0.95 }, visible: { opacity: 1, scale: 1 } },
};

export default function SectionWrapper({
  children,
  delay = 0,
  duration = 0.6,
  variant = "fadeUp",
  className = "",
  preserveLayout = false, // set true to avoid wrapper affecting layout (uses display:contents)
  once = true,
  amount = 0.2,
  ...rest
}) {
  const reduce = useReducedMotion();
  const chosen = animations[variant] || animations.fadeUp;

  return (
    <motion.div
      variants={chosen}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      transition={reduce ? { duration: 0 } : { duration, delay, ease: "easeOut" }}
      className={className}
      style={preserveLayout ? { display: "contents" } : undefined}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
