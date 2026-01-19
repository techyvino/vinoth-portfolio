"use client";

import { motion, Variants } from "framer-motion";
import { Section } from "./section";
import { Layout, Layers, Database, Cpu, CheckCircle2 } from "lucide-react";

const skillCategories = [
  {
    title: "Core & Frameworks",
    icon: Layout,
    skills: [
      "React.js",
      "Next.js (App Router)",
      "TypeScript",
      "JavaScript (ES6+)",
      "Hono.js",
      "Express.js",
    ],
    color: "text-blue-500",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
    shadow: "shadow-blue-500/10",
  },
  {
    title: "State & Data",
    icon: Database,
    skills: [
      "TanStack Query",
      "Redux Toolkit",
      "Context API",
      "PostgreSQL",
      "Drizzle ORM",
      "RESTful APIs",
    ],
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
    shadow: "shadow-emerald-500/10",
  },
  {
    title: "UI & Architecture",
    icon: Layers,
    skills: [
      "Tailwind CSS",
      "shadcn/ui",
      "Material UI",
      "Core Web Vitals",
      "Code Splitting",
      "Hydration Optimization",
    ],
    color: "text-indigo-500",
    bg: "bg-indigo-500/10",
    border: "border-indigo-500/20",
    shadow: "shadow-indigo-500/10",
  },
  {
    title: "Tools & Testing",
    icon: Cpu,
    skills: [
      "Jest",
      "React Testing Library",
      "Git",
      "Azure DevOps",
      "Vercel",
      "Postman",
    ],
    color: "text-purple-500",
    bg: "bg-purple-500/10",
    border: "border-purple-500/20",
    shadow: "shadow-purple-500/10",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
};

export function Skills() {
  return (
    <Section
      id="skills"
      className="bg-zinc-50/50 dark:bg-zinc-900/10 relative overflow-hidden"
    >
      {/* Decorative background blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none opacity-30 dark:opacity-20">
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/20 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center space-y-4 mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-indigo-500/10 text-indigo-500 text-xs font-bold uppercase tracking-widest mb-2"
          >
            My Expertise
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Comprehensive <span className="text-indigo-500">Tech Stack</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Specializing in modern frontend ecosystems with a strong focus on
            performance, scalability, and exceptional user experiences.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{
                y: -10,
                transition: { duration: 0.3, ease: "easeOut" },
              }}
              className={`group p-8 rounded-4xl border ${category.border} ${category.bg} backdrop-blur-md space-y-8 relative overflow-hidden transition-all duration-500 hover:${category.shadow} hover:border-${category.color.split("-")[1]}-500/30`}
            >
              {/* Animated Inner Glow */}
              <div className="absolute inset-0 bg-linear-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10 space-y-6">
                <div
                  className={`p-4 rounded-2xl bg-white dark:bg-zinc-950 w-fit ${category.color} shadow-lg shadow-black/5 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}
                >
                  <category.icon size={32} strokeWidth={2.5} />
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-bold tracking-tight group-hover:text-indigo-500 transition-colors duration-300">
                    {category.title}
                  </h3>
                  <div className="h-1 w-12 bg-indigo-500/20 rounded-full group-hover:w-full transition-all duration-500" />
                </div>

                <ul className="space-y-4">
                  {category.skills.map((skill, sIdx) => (
                    <motion.li
                      key={skill}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * idx + 0.05 * sIdx }}
                      className="flex items-center gap-3 text-sm font-medium text-muted-foreground/80 group-hover:text-foreground transition-colors duration-300"
                    >
                      <CheckCircle2
                        size={16}
                        className={`${category.color} opacity-60 group-hover:opacity-100 transition-opacity`}
                      />
                      {skill}
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Decorative corner element */}
              <div
                className={`absolute -bottom-6 -right-6 w-24 h-24 rounded-full ${category.bg} blur-2xl group-hover:scale-150 transition-transform duration-700`}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
