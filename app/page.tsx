"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";
import { Experience } from "@/components/experience";
import { Contact } from "@/components/contact";
import { useEffect, useState } from "react";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-screen bg-background text-foreground selection:bg-indigo-500/30">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-indigo-500 origin-left z-100"
        style={{ scaleX }}
      />

      {/* Custom Cursor Backdrop */}
      <motion.div
        className="fixed top-0 left-0 w-[400px] h-[400px] bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none z-0 hidden lg:block"
        animate={{
          x: mousePosition.x - 200,
          y: mousePosition.y - 200,
        }}
        transition={{ damping: 20, stiffness: 200, mass: 0.5 }}
      />

      <Navbar />

      <main>
        <Hero />

        <section
          id="about"
          className="py-20 px-6 md:px-12 bg-zinc-50/50 dark:bg-zinc-900/10"
        >
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-8">
              <h2 className="text-3xl md:text-5xl font-bold">
                Driven by Innovation, Defined by{" "}
                <span className="text-indigo-500">Performance</span>
              </h2>
              <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
                Senior Software Engineer with a passion for building scalable,
                high-performance web applications. Specialized in React,
                Next.js, and TypeScript, with a proven track record of leading
                large-scale migrations and optimizing complex frontend
                architectures.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { label: "Years Exp", value: "4.5+" },
                { label: "Performance Boost", value: "30%" },
                { label: "Boilerplate Red.", value: "50%" },
                { label: "Team Size", value: "3+" },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="p-6 rounded-3xl border border-border bg-card text-center hover:border-indigo-500/30 transition-colors"
                >
                  <div className="text-3xl font-black text-indigo-500">
                    {stat.value}
                  </div>
                  <div className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center">
              <a
                href="/Vinothkumar Senior Software Developer.pdf"
                download="Vinothkumar_Senior_Software_Engineer.pdf"
                className="px-10 py-4 rounded-full bg-primary text-primary-foreground font-bold hover:scale-105 transition-all shadow-lg shadow-indigo-500/10 active:scale-95 inline-block"
              >
                Download Resume
              </a>
            </div>
          </div>
        </section>

        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>

      <footer className="py-12 border-t border-border mt-20 text-center">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-2xl font-bold bg-linear-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
            Vinoth.dev
          </div>
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Vinothkumar S. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/techyvino"
              className="text-sm text-muted-foreground hover:text-indigo-500"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/techyvino"
              className="text-sm text-muted-foreground hover:text-indigo-500"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
