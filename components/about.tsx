"use client";

import { motion, useInView, Variants } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const stats = [
  { label: "Years Exp", value: 4.7, suffix: "+" },
  { label: "Performance Boost", value: 30, suffix: "%" },
  { label: "Boilerplate Red.", value: 50, suffix: "%" },
  { label: "Team Size", value: 3, suffix: "+" },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      type: "spring" as const,
      stiffness: 150,
      damping: 18,
    },
  },
};

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 2000;
      const increment = end / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(start);
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref} className="tabular-nums">
      {count.toFixed(value % 1 === 0 ? 0 : 1)}
      {suffix}
    </span>
  );
}

export function About() {
  return (
    <section id="about" className="py-24 px-6 relative overflow-hidden noise">
      {/* Decorative Floating Elements */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-20 left-10 w-64 h-64 bg-indigo-500/5 rounded-full blur-3xl -z-10"
      />
      <motion.div
        animate={{
          y: [0, 20, 0],
          rotate: [0, -5, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl -z-10"
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid lg:grid-cols-2 gap-20 items-center"
        >
          <div className="space-y-8">
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-3"
            >
              <div className="h-px w-8 bg-indigo-500" />
              <span className="px-4 py-1.5 rounded-full bg-indigo-500/10 text-indigo-500 text-xs font-black uppercase tracking-[0.2em]">
                My Philosophy
              </span>
            </motion.div>

            <motion.h2
              variants={itemVariants}
              className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.9] text-zinc-900 dark:text-white"
            >
              Driven by <span className="text-gradient">Innovation</span>,<br />
              Defined by{" "}
              <span className="text-indigo-500 italic pr-4">Performance</span>
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-zinc-600 dark:text-zinc-400 text-lg md:text-xl leading-relaxed max-w-xl font-medium"
            >
              Senior Software Engineer with a passion for building scalable,
              high-performance web applications. Specialized in React, Next.js,
              and TypeScript, with a proven track record of leading large-scale
              migrations and optimizing complex frontend architectures.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 pt-4"
            >
              <motion.a
                href="/Vinothkumar Senior Software Developer.pdf"
                download="Vinothkumar_Senior_Software_Engineer.pdf"
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-10 py-5 rounded-[2rem] bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-black transition-all shadow-2xl overflow-hidden inline-block"
              >
                <span className="relative z-10">Download Resume</span>
                <motion.div
                  className="absolute inset-0 bg-linear-to-r from-indigo-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                />
              </motion.a>
            </motion.div>
          </div>

          <div className="grid grid-cols-2 gap-6 md:gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{
                  y: -15,
                  scale: 1.02,
                  boxShadow: "0 30px 60px -12px rgba(99, 102, 241, 0.25)",
                }}
                className="group p-8 md:p-10 rounded-[3rem] border border-white/20 dark:border-white/5 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-2xl hover:border-indigo-500/50 transition-all duration-500 space-y-4 relative overflow-hidden"
              >
                {/* Individual card glow */}
                <div className="absolute -right-4 -top-4 w-24 h-24 bg-indigo-500/10 rounded-full blur-2xl group-hover:bg-indigo-500/20 transition-colors" />

                <motion.div
                  className="text-5xl md:text-6xl font-black text-indigo-500 tracking-tighter relative z-10"
                  initial={{ scale: 0.5, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 15,
                    delay: 0.2 + i * 0.05,
                  }}
                >
                  <Counter value={stat.value} suffix={stat.suffix} />
                </motion.div>
                <div className="text-xs uppercase tracking-[0.2em] font-black text-zinc-500 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors relative z-10">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
