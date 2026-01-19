"use client";

import { motion } from "framer-motion";

interface FloatingShapeProps {
  className?: string;
  delay?: number;
  duration?: number;
  rotate?: number;
}

export const FloatingShape = ({
  className,
  delay = 0,
  duration = 20,
  rotate = 0,
}: FloatingShapeProps) => {
  return (
    <motion.div
      className={`absolute rounded-full mix-blend-multiply filter blur-xl opacity-30 ${className}`}
      animate={{
        x: [0, 100, 0],
        y: [0, 50, 0],
        rotate: [rotate, rotate + 360],
      }}
      transition={{
        duration,
        repeat: Infinity,
        delay,
        ease: "linear",
      }}
    />
  );
};
