"use client";

import {
  motion,
  useInView,
  useScroll,
  useSpring,
  useTransform,
  Variants,
} from "framer-motion";
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

const cardVariants: Variants = {
  hidden: (isEven: any) => ({
    opacity: 0,
    x: isEven ? -50 : 50,
    y: 20,
  }),
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 20,
      mass: 1,
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -10 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring" as const,
      stiffness: 200,
      damping: 20,
    },
  },
};

function ExperienceCard({ exp, index }: { exp: Experience; index: number }) {
  const isEven = index % 2 === 0;
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.4 });

  return (
    <div
      ref={cardRef}
      className={cn(
        "relative flex items-center justify-between gap-8 md:gap-0 group/row",
        isEven ? "md:flex-row" : "md:flex-row-reverse",
      )}
    >
      {/* Timeline Dot & Line Segment */}
      <div className="flex items-center justify-center w-12 h-12 z-20 md:absolute md:left-1/2 md:-translate-x-1/2">
        <motion.div
          animate={{
            scale: isInView ? 1 : 0,
            opacity: isInView ? 1 : 0,
          }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 25,
            delay: 0.1,
          }}
          className="relative flex items-center justify-center"
        >
          {/* Outer Ring */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className={cn(
              "absolute inset-0 rounded-full blur-md bg-linear-to-br",
              exp.color,
            )}
          />
          <div className="relative w-12 h-12 rounded-full border-4 border-background bg-card shadow-2xl flex items-center justify-center overflow-hidden">
            <motion.div
              animate={{
                scale: isInView ? 1 : 0.5,
              }}
              className={cn(
                "w-4 h-4 rounded-full bg-linear-to-br transition-all duration-500",
                exp.color,
              )}
            />
          </div>
        </motion.div>
      </div>

      {/* Content */}
      <motion.div
        custom={isEven}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={cardVariants}
        whileHover={{
          y: -12,
          scale: 1.01,
          transition: { type: "spring", stiffness: 400, damping: 25 },
        }}
        className={cn(
          "flex-1 md:flex-none md:w-[42%] p-8 md:p-12 rounded-[3rem] bg-white/70 dark:bg-zinc-900/50 backdrop-blur-3xl relative overflow-hidden group/card cursor-default border border-white/20 dark:border-white/5",
          "hover:border-indigo-500/50 transition-colors duration-500 shadow-2xl shadow-black/5",
          isEven ? "md:mr-auto" : "md:ml-auto",
        )}
      >
        {/* Connector Line (Desktop Only) */}
        <div
          className={cn(
            "hidden md:block absolute top-1/2 -translate-y-1/2 w-8 h-[2px] bg-linear-to-r transition-all duration-700 opacity-20 group-hover/card:opacity-100 group-hover/card:w-16",
            isEven
              ? "-right-8 group-hover/card:-right-16 from-indigo-500 to-transparent rotate-180"
              : "-left-8 group-hover/card:-left-16 from-indigo-500 to-transparent",
            exp.color,
          )}
        />

        {/* Glow Effect */}
        <motion.div
          animate={{
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className={cn(
            "absolute -top-32 -right-32 w-80 h-80 blur-[120px] bg-linear-to-br",
            exp.color,
          )}
        />

        <div className="space-y-8 relative z-10">
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6">
            <div className="space-y-3">
              <motion.div
                variants={itemVariants}
                className={cn(
                  "inline-block px-3 py-1 rounded-full bg-linear-to-r text-[10px] font-black uppercase tracking-[0.2em] text-white opacity-90",
                  exp.color,
                )}
              >
                {exp.period}
              </motion.div>
              <motion.h3
                variants={itemVariants}
                className="text-3xl md:text-4xl font-black tracking-tighter leading-none text-zinc-900 dark:text-white"
              >
                {exp.role}
              </motion.h3>
              <motion.div
                variants={itemVariants}
                className="flex items-center gap-2 text-zinc-500 font-bold text-sm tracking-tight"
              >
                <div
                  className={cn(
                    "w-1.5 h-1.5 rounded-full",
                    exp.color.replace("from-", "bg-"),
                  )}
                />
                {exp.company}
              </motion.div>
            </div>
          </div>

          <motion.p
            variants={itemVariants}
            className="text-zinc-600 dark:text-zinc-400 leading-relaxed font-medium text-base md:text-lg border-l-2 border-indigo-500/20 pl-6"
          >
            {exp.description}
          </motion.p>

          <div className="space-y-4">
            {exp.achievements.map((item: string, i: number) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="flex items-start gap-4 group/item"
              >
                <div
                  className={cn(
                    "mt-2 w-2 h-2 rounded-full shrink-0 shadow-lg transition-transform group-hover/item:scale-150 group-hover/item:rotate-90",
                    exp.color.replace("from-", "bg-"),
                  )}
                />
                <span className="text-sm md:text-base font-medium text-zinc-500 dark:text-zinc-400 group-hover/item:text-zinc-900 dark:group-hover/item:text-zinc-200 transition-colors">
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
    offset: ["start center", "end 80%"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  // Calculate moving glow tip position with smoothing
  const translateY = useTransform(scaleY, [0, 1], ["0%", "100%"]);
  const tipOpacity = useTransform(
    scrollYProgress,
    [0, 0.05, 0.95, 1],
    [0, 1, 1, 0],
  );

  return (
    <Section
      id="experience"
      className="py-32 relative overflow-hidden bg-zinc-50/10 dark:bg-black/20 noise"
    >
      {/* Background Decorative Element */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-indigo-500/5 rounded-full blur-[150px] -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center text-center space-y-8 mb-40">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="px-6 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-500 text-xs font-black uppercase tracking-[0.3em]"
          >
            My Professional Path
          </motion.div>
          <div className="space-y-4">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-8xl font-black tracking-tighter"
            >
              Work <span className="text-gradient">Experience</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-muted-foreground text-xl md:text-2xl font-medium max-w-3xl leading-relaxed"
            >
              A track record of delivering high-impact solutions across
              enterprise healthcare, logistics, and e-commerce systems.
            </motion.p>
          </div>
        </div>

        <div ref={containerRef} className="relative space-y-32 md:space-y-48">
          {/* Vertical Timeline Line Container */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-1 bg-zinc-200/50 dark:bg-zinc-800/50 md:-translate-x-1/2 rounded-full overflow-hidden">
            {/* Active Progress Line */}
            <motion.div
              style={{ scaleY }}
              className="absolute inset-x-0 top-0 w-full h-full bg-linear-to-b from-indigo-500 via-purple-500 to-pink-500 origin-top shadow-[0_0_20px_rgba(99,102,241,0.6)]"
            />

            {/* Floating Glow Follower */}
            <motion.div
              style={{
                top: translateY,
                opacity: tipOpacity,
              }}
              className="absolute left-1/2 -translate-x-1/2 w-4 h-20 bg-linear-to-b from-indigo-500 to-transparent blur-md z-10"
            />
          </div>

          {/* Moving Glow Tip (Actual Point) */}
          <motion.div
            style={{
              top: translateY,
              opacity: tipOpacity,
              position: "absolute",
              left: "24px", // Matches mobile timeline pos
            }}
            className="md:hidden w-3 h-3 rounded-full bg-indigo-500 shadow-[0_0_15px_rgba(99,102,241,1)] z-30"
          />

          {experiences.map((exp, idx) => (
            <ExperienceCard key={idx} exp={exp} index={idx} />
          ))}
        </div>

        {/* Closing Timeline Marker */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-48 flex flex-col items-center gap-6"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse shadow-[0_0_10px_rgba(99,102,241,1)]" />
          <div className="flex items-center gap-4 text-muted-foreground font-black uppercase tracking-[0.3em] text-[10px] opacity-50">
            Present
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
