"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const stats = [
  { label: "Years Exp", value: 4.5, suffix: "+" },
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
    <section id="about" className="py-32 px-6 relative overflow-hidden noise">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-indigo-500/10 text-indigo-500 text-xs font-bold uppercase tracking-widest">
              My Philosophy
            </div>
            <h2 className="text-4xl md:text-7xl font-black tracking-tighter leading-tight">
              Driven by <span className="text-gradient">Innovation</span>,<br />
              Defined by{" "}
              <span className="text-indigo-500 italic pr-2">Performance</span>
            </h2>
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-xl">
              Senior Software Engineer with a passion for building scalable,
              high-performance web applications. Specialized in React, Next.js,
              and TypeScript, with a proven track record of leading large-scale
              migrations and optimizing complex frontend architectures.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="/Vinothkumar Senior Software Developer.pdf"
                download="Vinothkumar_Senior_Software_Engineer.pdf"
                className="px-10 py-5 rounded-3xl bg-primary text-primary-foreground font-bold hover:scale-105 transition-all shadow-xl shadow-indigo-500/10 active:scale-95 inline-block"
              >
                Download Resume
              </a>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group p-8 rounded-[2.5rem] border border-border glass hover:border-indigo-500/30 transition-all duration-500 space-y-2"
              >
                <div className="text-4xl md:text-5xl font-black text-indigo-500 tracking-tighter group-hover:scale-110 transition-transform origin-left duration-500">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-xs uppercase tracking-widest font-black text-muted-foreground/60 group-hover:text-foreground transition-colors">
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
