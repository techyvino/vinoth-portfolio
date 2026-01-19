"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";
import { About } from "@/components/about";
import { Experience } from "@/components/experience";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { PageLoader } from "@/components/ui/page-loader";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import { useEffect, useState } from "react";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    // Any initialization code can go here
  }, []);

  return (
    <>
      <PageLoader />
      
      <div className="relative min-h-screen bg-background text-foreground selection:bg-indigo-500/30 noise">
        {/* Scroll Progress Bar */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 origin-left z-[100]"
          style={{ scaleX }}
        />

      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>

      <Footer />
        
        {/* Scroll to Top Button */}
        <ScrollToTop />
      </div>
    </>
  );
}
