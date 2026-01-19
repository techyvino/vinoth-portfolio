"use client";

import { motion } from "framer-motion";
import { Section } from "./section";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    role: "Senior Software Engineer",
    company: "WebCargo by Freightos",
    period: "July 2024 - Present",
    description:
      "Leading React 16 → 18 migration for a large-scale logistics platform, improving UI responsiveness and performance.",
    achievements: [
      "Improve rendering performance by 30% via React 18 concurrent features",
      "Redesigned API state management using TanStack Query, reducing server requests by 40%",
      "Built reusable form architecture with React Hook Form + Zod, cutting boilerplate by 50%",
    ],
  },
  {
    role: "Senior Software Engineer (Team Lead)",
    company: "Credo Health",
    period: "May 2023 - July 2024",
    description:
      "Frontend architecture for a Next.js Healthcare PaaS, implementing RBAC and optimizing Core Web Vitals.",
    achievements: [
      "Improved LCP by 15% using Image optimization and ISR",
      "Led frontend delivery and CI/CD automation on Azure DevOps",
      "Managed and mentored a 3-member team, delivered cross-platform Capacitor.js app",
    ],
  },
  {
    role: "Software Engineer",
    company: "Credo Health",
    period: "March 2022 - May 2023",
    description:
      "Developed and improved hospital management systems and analytics dashboards.",
    achievements: [
      "Built a shared UI library, improving component reusability by 25%",
      "Delivered real-time analytics dashboards using Recharts and Chart.js",
      "Reduced bundle size by 15% through code splitting and tree-shaking",
    ],
  },
  {
    role: "Junior Software Developer",
    company: "Billiontags Creations",
    period: "July 2021 - March 2022",
    description:
      "Built responsive React.js components for client-facing e-commerce applications.",
    achievements: [
      "Integrated RESTful APIs and managed state using Context API and Hooks",
      "Maintained pixel-perfect components across multiple devices",
    ],
  },
];

export function Experience() {
  return (
    <Section id="experience" className="bg-zinc-50/50 dark:bg-zinc-900/10">
      <div className="max-w-4xl mx-auto">
        <div className="text-center space-y-4 mb-20">
          <h2 className="text-3xl md:text-5xl font-bold">Work History</h2>
          <p className="text-muted-foreground">
            My professional journey in the tech industry.
          </p>
        </div>

        <div className="relative space-y-12 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-linear-to-b before:from-transparent before:via-indigo-500/50 before:to-transparent">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
            >
              {/* Icon */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-indigo-500/50 bg-background shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                <Briefcase size={18} className="text-indigo-500" />
              </div>

              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: idx % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="w-[calc(100%-4rem)] md:w-[45%] p-6 rounded-3xl border border-border bg-card shadow-sm hover:border-indigo-500/30 transition-colors"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="font-bold text-lg">{exp.role}</div>
                  <time className="font-mono text-xs font-medium text-indigo-500 flex items-center gap-1 text-nowrap">
                    <Calendar size={12} /> {exp.period}
                  </time>
                </div>
                <div className="text-indigo-500 font-semibold text-sm mb-4">
                  {exp.company}
                </div>
                <div className="text-muted-foreground text-sm mb-6 leading-relaxed">
                  {exp.description}
                </div>
                <ul className="space-y-2">
                  {exp.achievements.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-xs text-muted-foreground"
                    >
                      <div className="w-1 h-1 rounded-full bg-indigo-500 mt-1.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
