"use client";

import { motion } from "framer-motion";
import { Section } from "./section";
import { ExternalLink, Github, Eye } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "United Airlines Agent Portal",
    description:
      "Enterprise React 18 cargo booking platform featuring multi-step complex workflows, real-time flight search, and automated AWB generation.",
    tags: [
      "React 18",
      "Redux Toolkit",
      "Tailwind CSS",
      "Salesforce",
      "Jest",
      "Internal Tools",
      "B2B",
    ],
    image: "/united-airlines.png",
    link: "#",
    github: "#",
  },
  {
    title: "Thanzhi Tech (Credo v2)",
    description:
      "Multi-tenant healthcare PaaS enabling hospital onboarding with isolated data, HIPAA compliance, and performant Next.js Server Components.",
    tags: [
      "Next.js",
      "Server Components",
      "Tailwind CSS",
      "Azure DevOps",
      "TypeScript",
      "RBAC",
      "Cloud Architecture",
    ],
    image: "/kauvery.png",
    link: "#",
    github: "#",
  },
  {
    title: "Credo Hospital Management",
    description:
      "Enterprise-grade HMS for patients, vitals, and surgical workflows with role-based dashboards and real-time medical data visualization.",
    tags: [
      "React",
      "Redux",
      "Material UI",
      "Axios",
      "HMS",
      "Data Visualization",
      "Dashboard",
    ],
    image: "/credo.png",
    link: "#",
    github: "#",
  },
  {
    title: "Bhaasyam Construction",
    description:
      "Modern and SEO-optimized corporate website built with Gatsby and GraphQL for lightning-fast performance and superior user experience.",
    tags: [
      "Gatsby",
      "GraphQL",
      "Bootstrap",
      "SEO",
      "Performance",
      "Responsive",
      "SSG",
    ],
    image: "/bhasyam.png",
    link: "https://bashyamgroup.com/",
  },
  {
    title: "Bhaasyam CRM portal",
    description:
      "Internal CRM portal for managing leads, customers, and construction projects with real-time tracking and comprehensive analytics dashboard.",
    tags: [
      "Reactjs",
      "Redux",
      "Bootstrap",
      "CRM",
      "Lead Management",
      "Data Analytics",
      "Responsive",
    ],
    image: "/baashyaam.png",
  },
  {
    title: "Space & Beauty",
    description:
      "Responsive e-commerce platform with product listings and checkout flows. Integrated REST APIs for authentication, orders, and payments.",
    tags: [
      "Next.js",
      "Bootstrap",
      "Styled Components",
      "REST API",
      "E-commerce",
      "Stripe",
      "Checkout Flow",
    ],
    image: "/spaceandbeauty.png",
    link: "https://spaceandbeauty.com/",
  },
  {
    title: "MJ Urban Fit",
    description:
      "Modern e-commerce platform built with Next.js 15, featuring TanStack Query for state and Server Actions for seamless user interactions.",
    tags: [
      "Next.js",
      "TanStack Query",
      "Shadcn UI",
      "Server Actions",
      "Caching",
      "Performance",
      "E-commerce",
    ],
    image: "/mjurbanfit.png",
    link: "https://www.mjurbanfit.in/",
  },
  {
    title: "MJ Urban Fit - Admin Portal",
    description:
      "Comprehensive administration dashboard for MJ Urban Fit to manage products and orders. Built with the same high-performance Next.js stack.",
    tags: [
      "Next.js",
      "Dashboard",
      "TanStack Query",
      "Server Actions",
      "PostgreSQL",
      "Inventory",
      "Analytics",
    ],
    image: "/mjurbanfit-logo.png",
  },
];

export function Projects() {
  return (
    <Section id="projects">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold">
              Featured Projects
            </h2>
            <p className="text-muted-foreground max-w-xl">
              A collection of hand-crafted digital products focused on
              performance and user experience.
            </p>
          </div>
          <button className="text-indigo-500 font-semibold flex items-center gap-2 hover:gap-4 transition-all">
            View All Projects <ExternalLink size={18} />
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative bg-card rounded-3xl overflow-hidden border border-border/50 hover:border-indigo-500/50 transition-all duration-500 shadow-xl shadow-black/5"
            >
              <div className="relative h-60 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-4">
                  {project.github && project.github !== "#" && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-white/20 transition-all"
                    >
                      <Github size={20} />
                    </a>
                  )}
                  {project.link && project.link !== "#" && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-white/20 transition-all"
                    >
                      <Eye size={20} />
                    </a>
                  )}
                </div>
              </div>
              <div className="p-8 space-y-4">
                <div className="flex flex-wrap gap-2 min-h-[64px]">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] uppercase tracking-widest font-bold text-indigo-500/70 py-1 px-2 bg-indigo-500/5 rounded-md border border-indigo-500/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-2xl font-bold group-hover:text-indigo-500 transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed min-h-[60px]">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

function ArrowRight({
  size,
  className,
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      width={size || 24}
      height={size || 24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}
