"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { Section } from "./section";
import { Zap } from "lucide-react";
import { useRef } from "react";
import { cn } from "@/lib/utils";

interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
  color: string;
}

const experiences: Experience[] = [
  {
    role: "Senior Software Engineer",
    company: "WebCargo by Freightos",
    period: "July 2024 - Present",
    description:
      "Leading React 16 → 18 migration for a large-scale logistics platform, improving UI responsiveness and performance through architectural revamps.",
    achievements: [
      "Improve rendering performance by 30% via React 18 concurrent features",
      "Redesigned API state management using TanStack Query, reducing server requests by 40%",
      "Built reusable form architecture with React Hook Form + Zod, cutting boilerplate by 50%",
    ],
    color: "from-blue-500 to-indigo-500",
  },
  {
    role: "Senior Software Engineer (Team Lead)",
    company: "Credo Health",
    period: "May 2023 - July 2024",
    description:
      "Frontend architecture for a Next.js Healthcare PaaS, implementing RBAC and optimizing Core Web Vitals for hospital systems.",
    achievements: [
      "Improved LCP by 15% using Image optimization and ISR",
      "Led frontend delivery and CI/CD automation on Azure DevOps",
      "Managed and mentored a 3-member team, delivered cross-platform Capacitor.js app",
    ],
    color: "from-emerald-500 to-teal-500",
  },
  {
    role: "Software Engineer",
    company: "Credo Health",
    period: "March 2022 - May 2023",
    description:
      "Developed and improved hospital management systems and analytics dashboards using modern React practices.",
    achievements: [
      "Built a shared UI library, improving component reusability by 25%",
      "Delivered real-time analytics dashboards using Recharts and Chart.js",
      "Reduced bundle size by 15% through code splitting and tree-shaking",
    ],
    color: "from-cyan-500 to-blue-500",
  },
  {
    role: "Junior Software Developer",
    company: "Billiontags Creations",
    period: "July 2021 - March 2022",
    description:
      "Built responsive React.js components for client-facing e-commerce applications with a focus on pixel-perfection.",
    achievements: [
      "Integrated RESTful APIs and managed state using Context API and Hooks",
      "Maintained pixel-perfect components across multiple devices and browsers",
    ],
    color: "from-purple-500 to-pink-500",
  },
];

function ExperienceCard({ exp, index }: { exp: Experience; index: number }) {
  const isEven = index % 2 === 0;

  return (
    <div
      className={cn(
        "relative flex items-center justify-between gap-8 md:gap-0 group",
        isEven ? "md:flex-row" : "md:flex-row-reverse",
      )}
    >
      {/* Timeline Dot & Line Segment */}
      <div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-background bg-card shadow-xl z-20 md:absolute md:left-1/2 md:-translate-x-1/2 group-hover:scale-110 transition-transform duration-500">
        <div
          className={cn(
            "w-3 h-3 rounded-full bg-linear-to-br transition-all duration-500",
            exp.color,
          )}
        />
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, x: isEven ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
        whileHover={{
          y: -10,
          boxShadow: "0 25px 50px -12px rgba(99, 102, 241, 0.25)",
        }}
        className={cn(
          "flex-1 md:flex-none md:w-[42%] p-8 md:p-10 rounded-3xl bg-white/70 dark:bg-zinc-900/50 backdrop-blur-xl transition-all duration-500 relative overflow-hidden group/card cursor-default",
          "ring-1 ring-transparent hover:ring-indigo-500/50 hover:shadow-2xl",
          isEven ? "md:mr-auto" : "md:ml-auto",
        )}
      >
        {/* Connector Line (Desktop Only) - Now purely hover based for consistency */}
        <div
          className={cn(
            "hidden md:block absolute top-1/2 -translate-y-1/2 w-8 h-[2px] bg-linear-to-r transition-all duration-500 opacity-0 group-hover/card:opacity-100 group-hover/card:w-12",
            isEven
              ? "-right-8 group-hover/card:-right-12 from-indigo-500 to-transparent rotate-180"
              : "-left-8 group-hover/card:-left-12 from-indigo-500 to-transparent",
            exp.color,
          )}
        />

        {/* Glow Effect */}
        <div
          className={cn(
            "absolute -top-24 -right-24 w-48 h-48 blur-[80px] opacity-0 group-hover/card:opacity-20 transition-opacity duration-700 bg-linear-to-br",
            exp.color,
          )}
        />

        <div className="space-y-6 relative z-10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <div
                className={cn(
                  "text-[10px] font-black uppercase tracking-[0.3em] mb-1 bg-linear-to-r bg-clip-text text-transparent opacity-80",
                  exp.color,
                )}
              >
                {exp.period}
              </div>
              <h3 className="text-2xl md:text-3xl font-black tracking-tight leading-none text-zinc-900 dark:text-white">
                {exp.role}
              </h3>
            </div>
            <div className="px-4 py-2 rounded-xl bg-zinc-100 dark:bg-zinc-800/50 border border-zinc-200 dark:border-white/5 text-xs font-bold text-zinc-600 dark:text-zinc-400 whitespace-nowrap self-start sm:self-center transition-colors hover:border-indigo-500/30">
              {exp.company}
            </div>
          </div>

          <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed font-medium text-sm md:text-base">
            {exp.description}
          </p>

          <div className="space-y-3">
            {exp.achievements.map((item: string, i: number) => (
              <motion.div
                key={i}
                className="flex items-start gap-3 group/item"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.1 }}
              >
                <div
                  className={cn(
                    "mt-2 w-1.5 h-1.5 rounded-full shrink-0 bg-linear-to-br transition-transform group-hover/item:scale-125",
                    exp.color,
                  )}
                />
                <span className="text-sm font-medium text-zinc-500 dark:text-zinc-400 group-hover/item:text-zinc-900 dark:group-hover/item:text-zinc-200 transition-colors">
                  {item}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Empty space for the other side on desktop */}
      <div className="hidden md:block md:w-[42%]" />
    </div>
  );
}

export function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.8", "end center"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const translateY = useTransform(scaleY, [0, 1], ["0%", "100%"]);
  const tipOpacity = useTransform(scrollYProgress, [0, 0.05], [0, 1]);

  return (
    <Section
      id="experience"
      className="py-20 relative overflow-hidden bg-zinc-50/10 dark:bg-black/20 noise"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center space-y-6 mb-32">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="px-4 py-1.5 rounded-full bg-indigo-500/10 text-indigo-500 text-xs font-black uppercase tracking-widest"
          >
            Journey
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-7xl font-black tracking-tighter"
          >
            Work <span className="text-gradient">History</span>
          </motion.h2>
          <p className="text-muted-foreground text-lg md:text-xl font-medium max-w-2xl leading-relaxed">
            A track record of delivering high-impact solutions across
            healthcare, logistics, and e-commerce sectors.
          </p>
        </div>

        <div ref={containerRef} className="relative space-y-24 md:space-y-32">
          {/* Vertical Timeline Line */}
          <div className="absolute left-6 md:left-1/2 top-4 bottom-4 w-0.5 bg-zinc-200 dark:bg-zinc-800 md:-translate-x-1/2 overflow-hidden">
            <motion.div
              style={{ scaleY }}
              className="absolute inset-x-0 top-0 w-full bg-linear-to-b from-indigo-500 via-purple-500 to-pink-500 origin-top shadow-[0_0_15px_rgba(99,102,241,0.5)]"
            />
            {/* Moving Glow Tip */}
            <motion.div
              style={{
                top: translateY,
                opacity: tipOpacity,
              }}
              className="absolute left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-indigo-500 shadow-[0_0_15px_6px_rgba(99,102,241,0.6)] z-10"
            />
          </div>

          {experiences.map((exp, idx) => (
            <ExperienceCard key={idx} exp={exp} index={idx} />
          ))}
        </div>

        {/* Call to Action or Skills link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-32 flex justify-center"
        >
          <div className="flex items-center gap-4 text-muted-foreground font-black uppercase tracking-[0.2em] text-xs">
            <Zap size={16} className="text-indigo-500" />
            End of Timeline
            <Zap size={16} className="text-indigo-500" />
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
