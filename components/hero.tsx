"use client";

import { motion, Variants } from "framer-motion";
import { ArrowRight, Github, Linkedin, ExternalLink } from "lucide-react";
import { FloatingShape } from "./ui/floating-shape";

export function Hero() {
  const words = "Vinothkumar S".split(" ");

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
  };

  const child: Variants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden pt-20 noise">
      {/* Premium Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-mesh">
        <FloatingShape
          className="bg-indigo-500 w-64 h-64 top-1/4 -left-12"
          delay={0}
        />
        <FloatingShape
          className="bg-purple-500 w-96 h-96 bottom-1/4 -right-12"
          delay={2}
          duration={25}
        />
        <FloatingShape
          className="bg-pink-500 w-48 h-48 top-2/3 left-1/3"
          delay={4}
          duration={15}
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 text-center z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, type: "spring" }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-indigo-500/20 bg-indigo-500/5 backdrop-blur-md text-indigo-500 text-xs font-bold uppercase tracking-widest mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
          </span>
          Senior Software Engineer
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="space-y-4"
        >
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.9] flex flex-wrap justify-center gap-x-4">
            {words.map((word, index) => (
              <motion.span
                variants={child}
                key={index}
                className={
                  index === words.length - 1 ? "text-gradient italic pr-4" : ""
                }
              >
                {word}
              </motion.span>
            ))}
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="max-w-2xl mx-auto text-xl md:text-2xl text-muted-foreground mt-8 font-medium tracking-tight"
        >
          Architecting high-performance digital experiences with{" "}
          <span className="text-foreground font-bold">React</span>,{" "}
          <span className="text-foreground font-bold">Next.js</span>, and{" "}
          <span className="text-foreground font-bold">TypeScript</span>.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-wrap items-center justify-center gap-6 mt-12"
        >
          <a
            href="#projects"
            className="group relative px-8 py-5 rounded-3xl bg-primary text-primary-foreground font-bold flex items-center gap-3 transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-indigo-500/20"
          >
            Explore Projects
            <ArrowRight
              size={20}
              className="group-hover:translate-x-1 transition-transform"
            />
            <div className="absolute inset-0 rounded-3xl bg-linear-to-r from-indigo-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>

          <div className="flex items-center gap-3">
            {[
              {
                icon: Github,
                href: "https://github.com/techyvino",
                label: "GitHub",
              },
              {
                icon: Linkedin,
                href: "https://linkedin.com/in/techyvino",
                label: "LinkedIn",
              },
            ].map((social, i) => (
              <a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl border border-border glass hover:border-indigo-500/50 hover:bg-indigo-500/5 transition-all text-muted-foreground hover:text-indigo-500 group"
              >
                <social.icon
                  size={22}
                  className="group-hover:scale-110 transition-transform"
                />
              </a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Advanced Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <div className="w-[30px] h-[50px] rounded-full border-2 border-muted-foreground/30 flex justify-center p-2">
          <motion.div
            animate={{
              y: [0, 15, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-1.5 h-1.5 bg-indigo-500 rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}
