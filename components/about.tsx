"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const stats = [
  { label: "Years Exp", value: 4.7, suffix: "+" },
  { label: "Performance Boost", value: 30, suffix: "%" },
  { label: "Boilerplate Red.", value: 50, suffix: "%" },
  { label: "Team Size", value: 3, suffix: "+" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

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
    <span ref={ref}>
      {count.toFixed(value % 1 === 0 ? 0 : 1)}
      {suffix}
    </span>
  );
}

export function About() {
  return (
    <section id="about" className="py-20 px-6 relative overflow-hidden noise">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-8"
          >
            <motion.div
              className="inline-block px-4 py-1.5 rounded-full bg-indigo-500/10 text-indigo-500 text-xs font-bold uppercase tracking-widest"
              whileHover={{ scale: 1.05 }}
            >
              My Philosophy
            </motion.div>
            <motion.h2
              className="text-4xl md:text-7xl font-black tracking-tighter leading-tight"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Driven by <span className="text-gradient">Innovation</span>,<br />
              Defined by{" "}
              <span className="text-indigo-500 italic pr-2">Performance</span>
            </motion.h2>
            <motion.p
              className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Senior Software Engineer with a passion for building scalable,
              high-performance web applications. Specialized in React, Next.js,
              and TypeScript, with a proven track record of leading large-scale
              migrations and optimizing complex frontend architectures.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <motion.a
                href="/Vinothkumar Senior Software Developer.pdf"
                download="Vinothkumar_Senior_Software_Engineer.pdf"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-10 py-5 rounded-3xl bg-primary text-primary-foreground font-bold transition-all shadow-xl shadow-indigo-500/10 overflow-hidden inline-block"
              >
                <span className="relative z-10">Download Resume</span>
                <motion.div
                  className="absolute inset-0 bg-linear-to-r from-indigo-600 to-purple-600"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            </motion.div>
          </motion.div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.1,
                  type: "spring",
                  stiffness: 100,
                }}
                viewport={{ once: true, amount: 0.2 }}
                whileHover={{
                  y: -10,
                  boxShadow: "0 20px 40px rgba(99, 102, 241, 0.2)",
                }}
                className="group p-8 rounded-[2.5rem] border border-border glass hover:border-indigo-500/30 transition-all duration-500 space-y-2 relative overflow-hidden"
              >
                <motion.div
                  className="text-4xl md:text-5xl font-black text-indigo-500 tracking-tighter relative z-10"
                  whileHover={{
                    scale: 1.1,
                    rotate: [0, -5, 5, 0],
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <Counter value={stat.value} suffix={stat.suffix} />
                </motion.div>
                <div className="text-xs uppercase tracking-widest font-black text-muted-foreground/60 group-hover:text-foreground transition-colors relative z-10">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none" />
    </section>
  );
}
