"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface StarBorderProps {
  children: React.ReactNode;
  className?: string;
  borderClassName?: string;
  color?: string;
  speed?: number;
  as?: React.ElementType;
}

export function StarBorder({
  children,
  className,
  borderClassName,
  color = "from-indigo-500 to-purple-500",
  speed = 3,
  as: Component = "div",
}: StarBorderProps) {
  return (
    <Component className={cn("relative", className)}>
      {/* Animated stars/particles */}
      <div className="absolute inset-0 rounded-[2.5rem] overflow-visible pointer-events-none z-10">
        {/* Top border stars */}
        <motion.div
          className={cn(
            "absolute -top-px left-0 h-[3px] w-32 shadow-lg shadow-indigo-500/50 opacity-0 group-hover:opacity-100",
            `bg-linear-to-r ${color}`,
            borderClassName,
          )}
          animate={{
            x: ["0%", "300%"],
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: speed,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Right border stars */}
        <motion.div
          className={cn(
            "absolute top-0 -right-px w-[3px] h-32 shadow-lg shadow-indigo-500/50 opacity-0 group-hover:opacity-100",
            `bg-linear-to-b ${color}`,
            borderClassName,
          )}
          style={{ opacity: 0 }}
          animate={{
            y: ["0%", "300%"],
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: speed,
            repeat: Infinity,
            ease: "linear",
            delay: speed * 0.25,
          }}
        />

        {/* Bottom border stars */}
        <motion.div
          className={cn(
            "absolute -bottom-px right-0 h-[3px] w-32 shadow-lg shadow-indigo-500/50 opacity-0 group-hover:opacity-100",
            `bg-linear-to-l ${color}`,
            borderClassName,
          )}
          style={{ opacity: 0 }}
          animate={{
            x: ["0%", "-300%"],
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: speed,
            repeat: Infinity,
            ease: "linear",
            delay: speed * 0.5,
          }}
        />

        {/* Left border stars */}
        <motion.div
          className={cn(
            "absolute bottom-0 -left-px w-[3px] h-32 shadow-lg shadow-indigo-500/50 opacity-0 group-hover:opacity-100",
            `bg-linear-to-t ${color}`,
            borderClassName,
          )}
          style={{ opacity: 0 }}
          animate={{
            y: ["0%", "-300%"],
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: speed,
            repeat: Infinity,
            ease: "linear",
            delay: speed * 0.75,
          }}
        />

        {/* Corner sparkles */}
        {[0, 1, 2, 3].map((i) => (
          <motion.div
            key={i}
            className={cn(
              "absolute w-2 h-2 rounded-full shadow-lg shadow-indigo-500/50 opacity-0 group-hover:opacity-100",
              `bg-linear-to-br ${color}`,
              borderClassName,
            )}
            style={{
              top: i === 0 || i === 1 ? "-4px" : "auto",
              bottom: i === 2 || i === 3 ? "-4px" : "auto",
              left: i === 0 || i === 3 ? "-4px" : "auto",
              right: i === 1 || i === 2 ? "-4px" : "auto",
            }}
            animate={{
              scale: [0, 2, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      {children}
    </Component>
  );
}
