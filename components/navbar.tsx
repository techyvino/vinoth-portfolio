"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Menu, X, Download } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6",
        isScrolled ? "py-4" : "py-8",
      )}
    >
      <div
        className={cn(
          "max-w-6xl mx-auto flex items-center justify-between px-6 py-3 rounded-full transition-all duration-500",
          isScrolled ? "glass shadow-2xl shadow-black/5" : "bg-transparent",
        )}
      >
        <motion.a
          href="#"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          whileHover={{ scale: 1.05 }}
          className="text-xl md:text-2xl font-black bg-linear-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent transition-all"
        >
          Vinoth.dev
        </motion.a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-6">
            {navItems.map((item, i) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -2 }}
                className="text-xs font-black uppercase tracking-widest text-muted-foreground hover:text-indigo-500 transition-colors relative group"
              >
                {item.name}
                <motion.span 
                  className="absolute -bottom-1 left-0 h-0.5 bg-indigo-500"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            ))}
          </div>

          <div className="flex items-center gap-4 pl-4 border-l border-border/50">
            <ThemeToggle />

            <motion.a
              href="/Vinothkumar Senior Software Developer.pdf"
              download="Vinothkumar_Senior_Software_Engineer.pdf"
              whileHover={{ scale: 1.05, rotate: 360 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="p-2.5 rounded-full bg-indigo-500/10 text-indigo-500 hover:bg-indigo-500 hover:text-white transition-all"
              aria-label="Download Resume"
            >
              <Download size={18} />
            </motion.a>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2.5 rounded-full bg-primary text-primary-foreground text-xs font-black uppercase tracking-widest transition-all shadow-xl shadow-indigo-500/10 relative overflow-hidden group"
            >
              <span className="relative z-10">Hire Me</span>
              <motion.div
                className="absolute inset-0 bg-linear-to-r from-indigo-600 to-purple-600"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-4">
          <ThemeToggle />
          <button
            className="p-2 rounded-full hover:bg-muted transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="absolute top-24 left-6 right-6 md:hidden glass rounded-4xl p-8 border border-border shadow-2xl z-40"
          >
            <div className="flex flex-col gap-6">
              {navItems.map((item, i) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-xl font-black uppercase tracking-widest hover:text-indigo-500 transition-colors"
                >
                  {item.name}
                </motion.a>
              ))}
              <div className="flex flex-col gap-4 mt-4">
                <a
                  href="/Vinothkumar Senior Software Developer.pdf"
                  download="Vinothkumar_Senior_Software_Engineer.pdf"
                  className="flex items-center justify-center gap-2 w-full py-4 rounded-2xl bg-indigo-500/10 text-indigo-500 font-black uppercase tracking-widest hover:bg-indigo-500 hover:text-white transition-all"
                >
                  <Download size={18} /> Resume
                </a>
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full py-4 rounded-2xl bg-indigo-500 text-white text-center font-black uppercase tracking-widest shadow-xl shadow-indigo-500/20"
                >
                  Hire Me
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
