"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ExternalLink, GitBranch, Check, AlertCircle, Sparkles } from "lucide-react";
import { ProjectCaseStudy } from "@/data/portfolio-data";

interface ProjectModalProps {
  project: ProjectCaseStudy | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-project-title"
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8"
      >
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[var(--color-deep-navy)]/80 backdrop-blur-md cursor-pointer"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 280 }}
          className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto glass-panel rounded-3xl border border-[var(--color-steel-blue)] shadow-2xl p-6 sm:p-8 md:p-10 z-10"
        >
          {/* Close Trigger Button */}
          <button
            type="button"
            onClick={onClose}
            aria-label="Close Case Study"
            className="absolute top-5 right-5 p-2 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-surface-elevated)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--color-steel-blue)] transition-all cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Modal Header Badge & Title */}
          <div className="font-mono text-xs text-[var(--color-steel-blue)] uppercase tracking-widest mb-2">
            {project.number}
          </div>
          <h2
            id="modal-project-title"
            className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-[var(--text-primary)] tracking-tight mb-2"
          >
            {project.title}
          </h2>
          <p className="font-mono text-xs text-[var(--color-soft-ice-blue)] tracking-wider uppercase mb-6 pb-4 border-b border-[var(--border-subtle)]">
            {project.category}
          </p>

          {/* Action Links Bar */}
          <div className="flex flex-wrap items-center gap-3 mb-8">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold bg-[var(--color-steel-blue)] text-[var(--color-cloud-white)] hover:bg-[var(--color-midnight-blue)] border border-[var(--color-steel-blue)] hover:border-[var(--color-soft-ice-blue)] transition-all shadow-sm"
              >
                <span>Live Production App</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold bg-[var(--bg-surface-elevated)] text-[var(--text-primary)] hover:bg-[var(--color-midnight-blue)] border border-[var(--border-subtle)] hover:border-[var(--color-steel-blue)] transition-all shadow-sm"
              >
                <GitBranch className="w-3.5 h-3.5 text-[var(--color-soft-ice-blue)]" />
                <span>View Source Code</span>
              </a>
            )}
          </div>

          {/* Overview Statement */}
          <div className="space-y-6 text-sm sm:text-base text-[var(--text-secondary)] font-light leading-relaxed mb-8">
            <div>
              <h3 className="font-heading font-semibold text-xs tracking-wider uppercase text-[var(--text-primary)] mb-2 font-mono">
                System Overview
              </h3>
              <p>{project.overview}</p>
            </div>

            {/* Problem & Solution Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-[var(--border-subtle)]">
              <div className="glass-card rounded-2xl p-5 border border-[var(--border-subtle)]">
                <div className="flex items-center gap-2 font-mono text-xs text-[var(--color-soft-ice-blue)] uppercase font-semibold mb-2">
                  <AlertCircle className="w-4 h-4 text-[var(--color-steel-blue)]" />
                  <span>The Problem</span>
                </div>
                <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                  {project.problem}
                </p>
              </div>

              <div className="glass-card rounded-2xl p-5 border border-[var(--border-subtle)]">
                <div className="flex items-center gap-2 font-mono text-xs text-[var(--color-soft-ice-blue)] uppercase font-semibold mb-2">
                  <Sparkles className="w-4 h-4 text-[var(--color-steel-blue)]" />
                  <span>The Solution</span>
                </div>
                <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </div>

            {/* Key Features List */}
            <div className="pt-4 border-t border-[var(--border-subtle)]">
              <h3 className="font-heading font-semibold text-xs tracking-wider uppercase text-[var(--text-primary)] mb-3 font-mono">
                Architectural &amp; Functional Highlights
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {project.keyFeatures.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2 text-xs sm:text-sm text-[var(--text-secondary)]"
                  >
                    <Check className="w-4 h-4 text-[var(--color-steel-blue)] shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies */}
            <div className="pt-4 border-t border-[var(--border-subtle)]">
              <h3 className="font-heading font-semibold text-xs tracking-wider uppercase text-[var(--text-primary)] mb-3 font-mono">
                Verified Technology Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-xs px-3 py-1 rounded-full bg-[var(--color-midnight-blue)] text-[var(--color-soft-ice-blue)] border border-[var(--border-subtle)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Engineering Takeaways */}
            <div className="pt-4 border-t border-[var(--border-subtle)]">
              <h3 className="font-heading font-semibold text-xs tracking-wider uppercase text-[var(--text-primary)] mb-2 font-mono">
                Key Engineering Takeaway
              </h3>
              <p className="text-xs sm:text-sm text-[var(--text-secondary)] italic">
                &ldquo;{project.whatILearned}&rdquo;
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
