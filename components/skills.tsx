"use client";

import { motion } from "framer-motion";
import { Section } from "./section";
import {
  Code2,
  Cpu,
  Globe,
  Layout,
  Layers,
  Smartphone,
  Database,
  Figma,
} from "lucide-react";

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
  },
];

export function Skills() {
  return (
    <Section id="skills" className="bg-zinc-50/50 dark:bg-zinc-900/10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-5xl font-bold">
            Tech Stack & Expertise
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Leveraging the latest technologies to build scalable,
            high-performance applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`p-8 rounded-3xl border ${category.border} ${category.bg} backdrop-blur-sm space-y-6 hover:translate-y-[-5px] transition-transform duration-300`}
            >
              <div
                className={`p-4 rounded-2xl bg-background w-fit ${category.color}`}
              >
                <category.icon size={28} />
              </div>
              <h3 className="text-xl font-bold">{category.title}</h3>
              <ul className="space-y-3">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <div
                      className={`w-1.5 h-1.5 rounded-full ${category.color.replace("text", "bg")}`}
                    />
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
