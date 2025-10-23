"use client"; 

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface Props {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  className?: string;
}

export function FadeIn({
  children,
  delay = 0,
  direction = "up",
  className,
}: Props) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const getVariant = () => {
    switch (direction) {
      case "up":
        return { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } };
      case "down":
        return { initial: { opacity: 0, y: -20 }, animate: { opacity: 1, y: 0 } };
      case "left":
        return { initial: { opacity: 0, x: 20 }, animate: { opacity: 1, x: 0 } };
      case "right":
        return { initial: { opacity: 0, x: -20 }, animate: { opacity: 1, x: 0 } };
      default:
        return { initial: { opacity: 0 }, animate: { opacity: 1 } };
    }
  };

  return (
    <motion.div
      ref={ref}
      variants={getVariant()}
      initial="initial"
      animate={isInView ? "animate" : "initial"}
      transition={{ duration: 0.6, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}