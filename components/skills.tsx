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
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Hono.js",
      "Express.js",
    ],
    color: "text-blue-500",
    bg: "bg-blue-500/5",
    border: "border-blue-500/10",
  },
  {
    title: "State & Data",
    icon: Database,
    skills: [
      "TanStack Query",
      "Redux Toolkit",
      "PostgreSQL",
      "Drizzle ORM",
      "RESTful APIs",
      "Firebase",
    ],
    color: "text-emerald-500",
    bg: "bg-emerald-500/5",
    border: "border-emerald-500/10",
  },
  {
    title: "UI & Architecture",
    icon: Layers,
    skills: [
      "Tailwind CSS",
      "shadcn/ui",
      "Framer Motion",
      "Core Web Vitals",
      "Unit Testing",
      "Micro-frontends",
    ],
    color: "text-indigo-500",
    bg: "bg-indigo-500/5",
    border: "border-indigo-500/10",
  },
  {
    title: "Tools & DevOps",
    icon: Cpu,
    skills: ["Git", "Azure DevOps", "Vercel", "Docker", "Jest", "Playwright"],
    color: "text-purple-500",
    bg: "bg-purple-500/5",
    border: "border-purple-500/10",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100 },
  },
};

export function Skills() {
  return (
    <Section
      id="skills"
      className="py-32 relative overflow-hidden bg-zinc-50/10 dark:bg-black/20 noise"
    >
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-24">
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              className="inline-block px-4 py-1.5 rounded-full bg-indigo-500/10 text-indigo-500 text-xs font-bold uppercase tracking-widest"
            >
              Expertise
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-7xl font-black tracking-tighter"
            >
              Technical <span className="text-gradient">Arsenal</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground max-w-md text-lg font-medium"
          >
            A comprehensive set of tools and technologies I use to build
            world-class digital products.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className={`group p-8 rounded-[2.5rem] border ${category.border} ${category.bg} glass space-y-8 relative overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-indigo-500/5`}
            >
              <div className="relative z-10 space-y-6">
                <div
                  className={`p-4 rounded-2xl bg-white dark:bg-zinc-900 w-fit ${category.color} shadow-lg shadow-black/5 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}
                >
                  <category.icon size={32} strokeWidth={2.5} />
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-black tracking-tight group-hover:text-indigo-500 transition-colors duration-300">
                    {category.title}
                  </h3>
                  <div className="h-1 w-12 bg-indigo-500/20 rounded-full group-hover:w-full transition-all duration-500" />
                </div>

                <ul className="space-y-4">
                  {category.skills.map((skill) => (
                    <li
                      key={skill}
                      className="flex items-center gap-3 text-sm font-bold text-muted-foreground group-hover:text-foreground transition-colors"
                    >
                      <CheckCircle2
                        size={16}
                        className={`${category.color} opacity-60 group-hover:opacity-100 transition-opacity`}
                      />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
