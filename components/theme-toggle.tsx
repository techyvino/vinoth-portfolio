"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  // Avoid hydration mismatch
  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-10 h-10" />;
  }

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="relative p-2 rounded-xl border border-border bg-card hover:bg-accent transition-colors overflow-hidden"
      aria-label="Toggle theme"
    >
      <div className="relative w-5 h-5">
        <motion.div
          animate={{
            scale: theme === "dark" ? 0 : 1,
            rotate: theme === "dark" ? 90 : 0,
            opacity: theme === "dark" ? 0 : 1,
          }}
          transition={{ duration: 0.2 }}
          className="absolute inset-0"
        >
          <Sun size={20} className="text-amber-500" />
        </motion.div>
        <motion.div
          initial={{ scale: 0, rotate: -90, opacity: 0 }}
          animate={{
            scale: theme === "dark" ? 1 : 0,
            rotate: theme === "dark" ? 0 : -90,
            opacity: theme === "dark" ? 1 : 0,
          }}
          transition={{ duration: 0.2 }}
          className="absolute inset-0"
        >
          <Moon size={20} className="text-indigo-400" />
        </motion.div>
      </div>
    </motion.button>
  );
}
