"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Github, Calendar, Layers } from "lucide-react";
import { useEffect } from "react";
import { BlurImage } from "./blur-image";

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

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: Project | null;
}

export function ProjectModal({ isOpen, onClose, project }: ProjectModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Modal Container */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 pointer-events-none">
            <motion.div
              layoutId={`card-${project.title}`}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="w-full max-w-2xl bg-card border border-border rounded-2xl shadow-2xl relative pointer-events-auto max-h-[80vh] flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/50 text-white backdrop-blur-md hover:bg-black/70 transition-colors"
              >
                <X size={18} />
              </button>

              {/* Scrollable Content */}
              <div
                className="flex-1 min-h-0 overflow-y-auto overscroll-contain [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-zinc-400 dark:[&::-webkit-scrollbar-thumb]:bg-zinc-600 [&::-webkit-scrollbar-track]:bg-zinc-100 dark:[&::-webkit-scrollbar-track]:bg-zinc-800"
                onWheel={(e) => e.stopPropagation()}
              >
                {/* Hero Image */}
                <div className="relative h-48 md:h-64 w-full shrink-0 rounded-t-2xl overflow-hidden">
                  <BlurImage
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                  <div
                    className={`absolute inset-0 bg-linear-to-b from-transparent via-black/60 to-black/90`}
                  />

                  <div className="absolute bottom-0 left-0 p-6 w-full">
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="flex flex-wrap gap-2 mb-3"
                    >
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded-full bg-background/80 backdrop-blur-md border border-border/50 ${project.accent}`}
                        >
                          {tag}
                        </span>
                      ))}
                    </motion.div>
                    <motion.h2
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="text-2xl md:text-3xl font-black tracking-tight text-white mb-1"
                    >
                      {project.title}
                    </motion.h2>
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-6 space-y-6">
                  {/* Stats/Links Row */}
                  <div className="flex flex-wrap gap-4 items-center justify-between pb-8 border-b border-border/50">
                    <div className="flex items-center gap-6">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar size={18} />
                        <span className="text-sm font-medium">
                          2024 Project
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Layers size={18} />
                        <span className="text-sm font-medium">
                          Frontend Architecture
                        </span>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      {project.github && project.github !== "#" && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-secondary hover:bg-secondary/80 text-secondary-foreground font-bold transition-colors"
                        >
                          <Github size={18} />
                          GitHub
                        </a>
                      )}
                      {project.link && project.link !== "#" && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-indigo-500 hover:bg-indigo-600 text-white font-bold transition-all shadow-lg shadow-indigo-500/20"
                        >
                          <ExternalLink size={18} />
                          Live Demo
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Description */}
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                        <span
                          className={`w-1 h-6 rounded-full bg-linear-to-b ${project.color.replace("from-", "from-").split(" ")[0]}`}
                        />
                        Overview
                      </h3>
                      <p className="text-muted-foreground leading-relaxed text-lg">
                        {project.description}
                      </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-4 bg-secondary/30 p-6 rounded-2xl border border-border/50">
                        <h4 className="font-bold text-foreground">
                          Key Features
                        </h4>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2 text-sm text-muted-foreground">
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0" />
                            <span>
                              Advanced filtering and sorting capabilities
                            </span>
                          </li>
                          <li className="flex items-start gap-2 text-sm text-muted-foreground">
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-purple-500 shrink-0" />
                            <span>Real-time data synchronization</span>
                          </li>
                          <li className="flex items-start gap-2 text-sm text-muted-foreground">
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-pink-500 shrink-0" />
                            <span>Responsive design for all devices</span>
                          </li>
                        </ul>
                      </div>

                      <div className="space-y-4 bg-secondary/30 p-6 rounded-2xl border border-border/50">
                        <h4 className="font-bold text-foreground">
                          Technologies
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-2 py-1 text-xs font-medium rounded-md bg-background border border-border/50 text-muted-foreground"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
