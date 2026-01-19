"use client";

import { motion, useMotionValue } from "framer-motion";
import { Section } from "./section";
import { Github, ArrowUpRight } from "lucide-react";
import { BlurImage } from "@/components/ui/blur-image";
import { cn } from "@/lib/utils";

interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string;
  link?: string;
  github?: string;
  color: string;
  accent: string;
  border: string;
}

const projects: Project[] = [
  {
    title: "United Airlines Agent Portal",
    description:
      "Enterprise React 18 cargo booking platform featuring multi-step complex workflows, real-time flight search, and automated AWB generation.",
    tags: ["React 18", "Redux Toolkit", "Tailwind CSS", "Enterprise", "B2B"],
    image: "/united-airlines.png",
    link: "#",
    github: "#",
    color: "from-blue-600/20 to-indigo-600/20",
    accent: "text-blue-500",
    border: "group-hover:border-blue-500/50",
  },
  {
    title: "MJ Urban Fit",
    description:
      "Modern e-commerce platform built with Next.js 15, featuring TanStack Query for state and Server Actions for seamless user interactions.",
    tags: ["Next.js 15", "TanStack Query", "Shadcn UI", "Server Actions"],
    image: "/mjurbanfit.png",
    link: "https://www.mjurbanfit.in/",
    color: "from-purple-600/20 to-pink-600/20",
    accent: "text-purple-500",
    border: "group-hover:border-purple-500/50",
  },
  {
    title: "MJ Admin Portal",
    description:
      "Comprehensive administration dashboard for MJ Urban Fit to manage products and orders. Built with high-performance execution patterns.",
    tags: ["Next.js", "PostgreSQL", "Inventory", "Analytics"],
    image: "/mjurbanfit-logo.png",
    link: "#",
    github: "#",
    color: "from-zinc-600/20 to-slate-600/20",
    accent: "text-zinc-500",
    border: "group-hover:border-zinc-500/50",
  },
  {
    title: "Thanzhi Tech (Credo v2)",
    description:
      "Multi-tenant healthcare PaaS enabling hospital onboarding with isolated data, HIPAA compliance, and performant Next.js Server Components.",
    tags: ["Next.js", "Server Components", "Azure", "Cloud", "RBAC"],
    image: "/kauvery.png",
    link: "#",
    github: "#",
    color: "from-emerald-600/20 to-teal-600/20",
    accent: "text-emerald-500",
    border: "group-hover:border-emerald-500/50",
  },
  {
    title: "Credo Hospital Management",
    description:
      "Enterprise-grade HMS for patients, vitals, and surgical workflows with role-based dashboards and real-time medical data visualization.",
    tags: ["React", "Redux", "Material UI", "Axios", "HMS"],
    image: "/credo.png",
    link: "#",
    github: "#",
    color: "from-cyan-600/20 to-blue-600/20",
    accent: "text-cyan-500",
    border: "group-hover:border-cyan-500/50",
  },
  {
    title: "Bhaasyam Construction",
    description:
      "Modern and SEO-optimized corporate website built with Gatsby and GraphQL for lightning-fast performance and superior user experience.",
    tags: ["Gatsby", "GraphQL", "SEO", "SSG", "Performance"],
    image: "/bhasyam.png",
    link: "https://bashyamgroup.com/",
    color: "from-orange-600/20 to-red-600/20",
    accent: "text-orange-500",
    border: "group-hover:border-orange-500/50",
  },
  {
    title: "Bhaasyam CRM Portal",
    description:
      "Internal CRM portal for managing leads, customers, and construction projects with real-time tracking and comprehensive analytics dashboard.",
    tags: ["React", "Redux", "CRM", "Lead Management", "Analytics"],
    image: "/baashyaam.png",
    link: "#",
    github: "#",
    color: "from-amber-600/20 to-orange-600/20",
    accent: "text-amber-500",
    border: "group-hover:border-amber-500/50",
  },
  {
    title: "Space & Beauty",
    description:
      "Responsive e-commerce platform with product listings and checkout flows. Integrated REST APIs for authentication, orders, and payments.",
    tags: ["Next.js", "Stripe", "REST API", "Styled Components"],
    image: "/spaceandbeauty.png",
    link: "https://spaceandbeauty.com/",
    color: "from-pink-600/20 to-rose-600/20",
    accent: "text-pink-500",
    border: "group-hover:border-pink-500/50",
  },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      className={cn(
        "group relative flex flex-col h-full rounded-[2.5rem] border border-border/50 bg-card/50 glass overflow-hidden transition-all duration-500",
        project.border,
      )}
    >
      {/* Spotlight Effect */}
      {/* Spotlight Effect - Only show if clickable */}
      {(project.link !== "#" || project.github !== "#") && (
        <motion.div
          className="pointer-events-none absolute -inset-px rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: useMotionValue(
              `radial-gradient(600px circle at 0px 0px, var(--indigo-500), transparent 40%)`,
            ),
            maskImage: useMotionValue(
              `radial-gradient(600px circle at 0px 0px, black, transparent)`,
            ),
            WebkitMaskImage: useMotionValue(
              `radial-gradient(600px circle at 0px 0px, black, transparent)`,
            ),
          }}
        />
      )}

      {/* Background Gradient Layer */}
      <div
        className={cn(
          "absolute inset-0 bg-linear-to-br opacity-5 group-hover:opacity-20 transition-opacity duration-500",
          project.color,
        )}
      />

      {/* Image Container */}
      <div className="relative h-64 w-full overflow-hidden">
        <BlurImage
          src={project.image}
          alt={project.title}
          fill
          className="object-cover scale-105 group-hover:scale-100 transition-transform duration-700 ease-out"
        />
        {(project.link !== "#" || project.github !== "#") && (
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 backdrop-blur-sm transition-all duration-500 flex items-center justify-center gap-4">
            {project.github && project.github !== "#" && (
              <motion.a
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                href={project.github}
                className="p-4 rounded-full bg-white text-black shadow-2xl"
              >
                <Github size={20} />
              </motion.a>
            )}
            {project.link && project.link !== "#" && (
              <motion.a
                whileHover={{ scale: 1.1, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
                href={project.link}
                className="p-4 rounded-full bg-indigo-500 text-white shadow-2xl flex items-center gap-2 font-black px-6"
              >
                Live <ArrowUpRight size={18} />
              </motion.a>
            )}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-10 flex flex-col grow space-y-6 relative z-10">
        <div className="flex flex-wrap gap-2">
          {project.tags.slice(0, 3).map((tag: string) => (
            <span
              key={tag}
              className={cn(
                "text-[10px] uppercase font-black tracking-widest px-3 py-1 rounded-full bg-background/50 border border-border/50",
                project.accent,
              )}
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="space-y-3">
          <h3 className="text-2xl font-black tracking-tight group-hover:translate-x-1 transition-transform duration-300">
            {project.title}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
            {project.description}
          </p>
        </div>

        <div className="pt-6 mt-auto flex items-center justify-between border-t border-border/50">
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground/50">
            Details
          </span>
          {project.link && project.link !== "#" ? (
            <motion.div
              whileHover={{ x: 5 }}
              className={cn(
                "w-10 h-10 rounded-full border border-border flex items-center justify-center group-hover:bg-indigo-500 group-hover:text-white group-hover:border-indigo-500 transition-all cursor-pointer",
                project.accent.replace("text-", "bg-").split(" ")[0] + "/10",
              )}
            >
              <ArrowUpRight size={18} />
            </motion.div>
          ) : (
            <div className="w-10 h-10" />
          )}
        </div>
      </div>
    </motion.div>
  );
}

export function Projects() {
  return (
    <Section
      id="projects"
      className="py-32 relative overflow-hidden bg-zinc-50/10 dark:bg-black/20 noise"
    >
      {/* Decorative Blur */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-24">
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              className="inline-block px-4 py-1.5 rounded-full bg-indigo-500/10 text-indigo-500 text-xs font-black uppercase tracking-widest"
            >
              Portfolio
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-7xl font-black tracking-tighter"
            >
              Selected <span className="text-gradient">Creations</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground max-w-lg text-lg md:text-xl font-medium leading-relaxed"
          >
            A curated selection of enterprise platforms and consumer products,
            blending technical excellence with intuitive design.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} project={project} index={idx} />
          ))}
        </div>
      </div>
    </Section>
  );
}
