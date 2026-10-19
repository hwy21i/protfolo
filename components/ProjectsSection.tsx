"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { 
  Code, 
  Award, 
  Boxes, 
  ExternalLink, 
  ArrowRight, 
  Building2, 
  HeartHandshake, 
  ShoppingBag, 
  ShieldCheck, 
  Layers, 
  Maximize2, 
  X
} from "lucide-react";
import { PROJECTS_DATA, ProjectCaseStudy } from "@/data/portfolio-data";
import ProjectModal from "./ProjectModal";

// Tab Navigation Definition
const TABS = [
  { id: 0, label: "Projects", icon: Code },
  { id: 1, label: "Certificates", icon: Award },
  { id: 2, label: "Tech Stack", icon: Boxes },
];

// Verified Academic & Engineering Certificates Data
const CERTIFICATES_DATA = [
  {
    id: "unity-cs",
    title: "Bachelor of Science in Computer Science",
    institution: "Unity University",
    date: "Undergraduate Degree Program",
    description: "Rigorous coursework covering Data Structures, Algorithms, Operating Systems, Computer Networks, and Object-Oriented Software Design.",
    badge: "Academic Degree",
    credentialId: "UU-CS-2024",
  },
  {
    id: "apex-erp",
    title: "Enterprise ERP & Systems Architecture",
    institution: "Apex Developments Platform",
    date: "Production Implementation",
    description: "Architected 8-module commercial construction ERP system with role-based access matrix, MongoDB aggregation, and automated PDF/Excel reports.",
    badge: "Flagship Engineering",
    credentialId: "AD-ERP-01",
  },
  {
    id: "web-security",
    title: "Full-Stack Web Engineering & Identity Systems",
    institution: "Production Deployments",
    date: "Verified Software Systems",
    description: "Engineered secure session management, HTTP-only cookie authentication, client-side input sanitization, and responsive web experiences.",
    badge: "Full-Stack Security",
    credentialId: "FSE-SEC-02",
  },
];

// Tech Stack Showcase Items
const TECH_STACK_ITEMS = [
  { name: "Next.js", category: "Framework", desc: "App Router / SSR" },
  { name: "React", category: "Library", desc: "Component Architecture" },
  { name: "TypeScript", category: "Language", desc: "Strict Type Safety" },
  { name: "JavaScript", category: "Language", desc: "ES6+ / Asynchronous" },
  { name: "Node.js", category: "Runtime", desc: "Server Applications" },
  { name: "MongoDB", category: "Database", desc: "Document Schemas" },
  { name: "Tailwind CSS", category: "Styling", desc: "Utility-First UI" },
  { name: "C++", category: "Language", desc: "Systems & Memory" },
  { name: "Java", category: "Language", desc: "OOP Principles" },
  { name: "SQL", category: "Database", desc: "Relational Modeling" },
  { name: "Git & GitHub", category: "Tooling", desc: "Version Control" },
  { name: "Vercel", category: "Deployment", desc: "Edge & Serverless" },
];

export default function ProjectsSection() {
  const [activeTab, setActiveTab] = useState(0);
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState<ProjectCaseStudy | null>(null);
  const [selectedCert, setSelectedCert] = useState<typeof CERTIFICATES_DATA[0] | null>(null);

  // Filter projects by domain category
  const filteredProjects = PROJECTS_DATA.filter((project) => {
    if (selectedFilter === "all") return true;
    if (selectedFilter === "flagship") return project.isFlagship;
    if (selectedFilter === "web") return project.category.includes("WEB") || project.category.includes("COMMERCE");
    if (selectedFilter === "security") return project.category.includes("SECURITY");
    return true;
  });

  const getProjectIcon = (id: string) => {
    switch (id) {
      case "construction-erp":
        return Building2;
      case "wedding-invitation":
        return HeartHandshake;
      case "afro-trade":
        return ShoppingBag;
      case "authentication-system":
        return ShieldCheck;
      default:
        return Layers;
    }
  };

  return (
    <section
      id="projects"
      aria-labelledby="portfolio-showcase-heading"
      className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-t border-[var(--border-subtle)]"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header Section (fade-down entrance) */}
        <motion.div
          initial={{ opacity: 0, y: -25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="text-center pb-10"
        >
          <h2
            id="portfolio-showcase-heading"
            className="inline-block text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-cloud-white)] via-[var(--color-soft-ice-blue)] to-[var(--color-steel-blue)]"
          >
            Portfolio Showcase
          </h2>
          <p className="text-[var(--text-secondary)] max-w-2xl mx-auto text-sm sm:text-base mt-2.5 font-light">
            Explore my journey through verified projects, academic certifications, and technical capabilities.
            Each section represents a concrete milestone in my software engineering discipline.
          </p>
        </motion.div>

        {/* Reference Top Tab Bar (Recreated with Pure CSS Glassmorphism) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <div className="glass-panel rounded-2xl sm:rounded-3xl p-1.5 sm:p-2 border border-[var(--border-subtle)] max-w-2xl mx-auto flex items-center justify-between gap-1 shadow-xl">
            {TABS.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 py-3 sm:py-3.5 px-3 rounded-xl sm:rounded-2xl flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "bg-gradient-to-r from-[var(--color-midnight-blue)] to-[var(--color-steel-blue)] text-[var(--color-cloud-white)] shadow-md border border-[var(--color-soft-ice-blue)]/30 scale-[1.02]"
                      : "text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--color-midnight-blue)]/30"
                  }`}
                >
                  <Icon
                    className={`w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 ${
                      isActive ? "scale-110 text-[var(--color-soft-ice-blue)]" : ""
                    }`}
                  />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Tab Content Crossfade via AnimatePresence */}
        <AnimatePresence mode="wait">
          {/* ========================================================
              TAB 0: PROJECTS (EXACT CardProject.jsx RECREATION)
              ======================================================== */}
          {activeTab === 0 && (
            <motion.div
              key="tab-projects"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
            >
              {/* Filter Sub-Tabs */}
              <div className="flex items-center justify-center gap-2 flex-wrap mb-8">
                {[
                  { id: "all", label: "All Projects" },
                  { id: "flagship", label: "Flagship ERP" },
                  { id: "web", label: "Web Applications" },
                  { id: "security", label: "Security & Protocols" },
                ].map((btn) => (
                  <button
                    key={btn.id}
                    type="button"
                    onClick={() => setSelectedFilter(btn.id)}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all cursor-pointer border ${
                      selectedFilter === btn.id
                        ? "bg-[var(--color-steel-blue)] text-[var(--color-cloud-white)] border-[var(--color-soft-ice-blue)] shadow-sm"
                        : "bg-[var(--bg-surface-elevated)] text-[var(--text-secondary)] border-[var(--border-subtle)] hover:text-[var(--text-primary)]"
                    }`}
                  >
                    {btn.label}
                  </button>
                ))}
              </div>

              {/* Project Cards Grid with Alternating Staggered Motion (fade-up-right / fade-up-left) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                {filteredProjects.map((project, idx) => {
                  const Icon = getProjectIcon(project.id);
                  const isEven = idx % 2 === 0;

                  return (
                    <motion.div
                      key={project.id}
                      initial={{ opacity: 0, x: isEven ? -30 : 30, y: 25 }}
                      whileInView={{ opacity: 1, x: 0, y: 0 }}
                      viewport={{ once: false, amount: 0.15 }}
                      transition={{ duration: 0.8, delay: (idx % 2) * 0.15, ease: [0.16, 1, 0.3, 1] }}
                      className="group relative w-full"
                    >
                      {/* Outer Glow Halo Border on Hover */}
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-[var(--color-steel-blue)] to-[var(--color-soft-ice-blue)] rounded-2xl opacity-0 group-hover:opacity-40 blur-lg transition duration-500 pointer-events-none" />

                      <div className="relative overflow-hidden rounded-2xl glass-panel border border-[var(--border-subtle)] group-hover:border-[var(--color-steel-blue)] shadow-xl transition-all duration-300 flex flex-col justify-between h-full">
                        
                        {/* Subtle Ambient Card Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-steel-blue)]/5 via-transparent to-[var(--color-midnight-blue)]/15 opacity-60 group-hover:opacity-100 transition-opacity pointer-events-none" />

                        <div className="relative p-5 sm:p-6 z-10 flex flex-col flex-1 justify-between">
                          <div>
                            {/* Image Thumbnail Container (aspect-16/9 with hover zoom) */}
                            <div className="relative overflow-hidden rounded-xl aspect-16/9 bg-[var(--color-midnight-blue)] mb-5 border border-[var(--border-subtle)]">
                              {project.image ? (
                                <Image
                                  src={project.image}
                                  alt={project.title}
                                  fill
                                  sizes="(max-width: 768px) 100vw, 50vw"
                                  className="object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                                />
                              ) : (
                                /* Stylized Architecture Backdrop for Web Projects */
                                <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-tech-grid relative overflow-hidden group-hover:scale-105 transition-transform duration-700">
                                  <div className="w-12 h-12 rounded-2xl bg-[var(--color-deep-navy)]/90 border border-[var(--border-subtle)] flex items-center justify-center shadow-lg mb-2">
                                    <Icon className="w-6 h-6 text-[var(--color-soft-ice-blue)]" />
                                  </div>
                                  <span className="font-mono text-xs text-[var(--color-soft-ice-blue)] tracking-wider uppercase">
                                    {project.category}
                                  </span>
                                </div>
                              )}

                              {/* Flagship Badge Overlay if applicable */}
                              {project.isFlagship && (
                                <div className="absolute top-3 right-3 font-mono text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-md bg-[var(--color-deep-navy)]/90 text-[var(--color-cloud-white)] border border-[var(--color-steel-blue)] backdrop-blur-md">
                                  Flagship Architecture
                                </div>
                              )}
                            </div>

                            {/* Card Content & Headings */}
                            <div className="space-y-2">
                              <div className="font-mono text-[11px] text-[var(--color-steel-blue)] uppercase tracking-wider">
                                {project.number}
                              </div>
                              <h3 className="text-xl sm:text-2xl font-heading font-bold text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-cloud-white)] via-[var(--color-soft-ice-blue)] to-[var(--color-cloud-white)] group-hover:text-[var(--color-soft-ice-blue)] transition-colors">
                                {project.title}
                              </h3>
                              <p className="text-sm text-[var(--text-secondary)] font-light leading-relaxed line-clamp-2">
                                {project.description}
                              </p>
                            </div>

                            {/* Tech Stack Chips */}
                            <div className="flex flex-wrap gap-1.5 mt-4">
                              {project.technologies.slice(0, 4).map((tech) => (
                                <span
                                  key={tech}
                                  className="font-mono text-[10px] px-2.5 py-1 rounded-md bg-[var(--color-midnight-blue)] text-[var(--color-soft-ice-blue)] border border-[var(--border-subtle)]"
                                >
                                  {tech}
                                </span>
                              ))}
                              {project.technologies.length > 4 && (
                                <span className="font-mono text-[10px] px-2 py-1 rounded-md bg-[var(--color-midnight-blue)]/50 text-[var(--text-muted)] border border-[var(--border-subtle)]">
                                  +{project.technologies.length - 4} more
                                </span>
                              )}
                            </div>
                          </div>

                          {/* Action Buttons Row (Exact Reference CardProject.jsx) */}
                          <div className="pt-6 mt-6 border-t border-[var(--border-subtle)] flex items-center justify-between gap-3">
                            {project.liveUrl ? (
                              <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--color-soft-ice-blue)] hover:text-[var(--color-cloud-white)] transition-colors"
                              >
                                <span>Live Demo</span>
                                <ExternalLink className="w-3.5 h-3.5" />
                              </a>
                            ) : (
                              <span className="text-xs font-mono text-[var(--text-muted)]">
                                Internal Protocol
                              </span>
                            )}

                            <button
                              type="button"
                              onClick={() => setSelectedProject(project)}
                              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[var(--color-midnight-blue)] hover:bg-[var(--color-steel-blue)] text-[var(--color-cloud-white)] text-xs font-semibold transition-all duration-200 hover:scale-105 active:scale-95 border border-[var(--border-subtle)] cursor-pointer"
                            >
                              <span>Details</span>
                              <ArrowRight className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          )}

          {/* ========================================================
              TAB 1: CERTIFICATES & ACADEMICS (Recreated Certificate.jsx)
              ======================================================== */}
          {activeTab === 1 && (
            <motion.div
              key="tab-certificates"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {CERTIFICATES_DATA.map((cert, index) => (
                  <motion.div
                    key={cert.id}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ duration: 0.7, delay: index * 0.15 }}
                    onClick={() => setSelectedCert(cert)}
                    className="group relative rounded-2xl glass-panel p-6 border border-[var(--border-subtle)] hover:border-[var(--color-steel-blue)] transition-all duration-300 hover:-translate-y-1 cursor-pointer flex flex-col justify-between"
                  >
                    <div>
                      {/* Header Badge */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-10 h-10 rounded-xl bg-[var(--color-midnight-blue)] border border-[var(--border-subtle)] flex items-center justify-center text-[var(--color-soft-ice-blue)] group-hover:scale-105 transition-transform">
                          <Award className="w-5 h-5" />
                        </div>
                        <span className="font-mono text-[10px] uppercase tracking-wider px-2.5 py-1 rounded bg-[var(--color-midnight-blue)] text-[var(--color-soft-ice-blue)] border border-[var(--border-subtle)]">
                          {cert.badge}
                        </span>
                      </div>

                      <h3 className="font-heading font-bold text-lg text-[var(--text-primary)] group-hover:text-[var(--color-soft-ice-blue)] transition-colors mb-2">
                        {cert.title}
                      </h3>

                      <div className="font-mono text-xs text-[var(--color-steel-blue)] mb-3">
                        {cert.institution} · {cert.date}
                      </div>

                      <p className="text-xs text-[var(--text-secondary)] font-light leading-relaxed mb-6">
                        {cert.description}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-[var(--border-subtle)] flex items-center justify-between font-mono text-[11px] text-[var(--text-muted)]">
                      <span>ID: {cert.credentialId}</span>
                      <span className="flex items-center gap-1 text-[var(--color-soft-ice-blue)] group-hover:translate-x-0.5 transition-transform">
                        Inspect <Maximize2 className="w-3 h-3" />
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Certificate Inspection Modal */}
              {selectedCert && (
                <div
                  role="dialog"
                  aria-modal="true"
                  className="fixed inset-0 z-50 flex items-center justify-center p-4"
                >
                  <div
                    onClick={() => setSelectedCert(null)}
                    className="fixed inset-0 bg-[var(--color-deep-navy)]/80 backdrop-blur-md cursor-pointer"
                  />
                  <div className="relative z-10 glass-panel rounded-3xl p-6 sm:p-8 max-w-lg w-full border border-[var(--color-steel-blue)] shadow-2xl space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs uppercase text-[var(--color-steel-blue)]">
                        Verified Academic Credential
                      </span>
                      <button
                        type="button"
                        onClick={() => setSelectedCert(null)}
                        className="p-1 rounded-full text-[var(--text-secondary)] hover:text-[var(--text-primary)] cursor-pointer"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </div>

                    <h3 className="font-heading font-bold text-2xl text-[var(--text-primary)]">
                      {selectedCert.title}
                    </h3>

                    <div className="p-4 rounded-xl bg-[var(--color-midnight-blue)] border border-[var(--border-subtle)] font-mono text-xs text-[var(--color-soft-ice-blue)] space-y-1">
                      <div>Institution: {selectedCert.institution}</div>
                      <div>Status: {selectedCert.date}</div>
                      <div>Reference ID: {selectedCert.credentialId}</div>
                    </div>

                    <p className="text-sm text-[var(--text-secondary)] font-light leading-relaxed">
                      {selectedCert.description}
                    </p>

                    <div className="pt-4 border-t border-[var(--border-subtle)] flex justify-end">
                      <button
                        type="button"
                        onClick={() => setSelectedCert(null)}
                        className="px-5 py-2 rounded-xl bg-[var(--color-steel-blue)] text-[var(--color-cloud-white)] text-xs font-semibold cursor-pointer"
                      >
                        Close Inspection
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          )}

          {/* ========================================================
              TAB 2: TECH STACK (Recreated TechStackIcon.jsx)
              ======================================================== */}
          {activeTab === 2 && (
            <motion.div
              key="tab-tech"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5"
            >
              {TECH_STACK_ITEMS.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="glass-card rounded-2xl p-4 sm:p-5 border border-[var(--border-subtle)] hover:border-[var(--color-steel-blue)] transition-all duration-300 group hover:-translate-y-1"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-9 h-9 rounded-xl bg-[var(--color-midnight-blue)] border border-[var(--border-subtle)] flex items-center justify-center text-[var(--color-soft-ice-blue)] group-hover:scale-110 group-hover:text-[var(--color-cloud-white)] transition-all">
                      <Code className="w-4 h-4" />
                    </div>
                    <span className="font-mono text-[10px] text-[var(--text-muted)] uppercase tracking-wider">
                      {item.category}
                    </span>
                  </div>
                  <h4 className="font-heading font-semibold text-base text-[var(--text-primary)] group-hover:text-[var(--color-soft-ice-blue)] transition-colors">
                    {item.name}
                  </h4>
                  <p className="text-xs text-[var(--text-secondary)] font-light mt-0.5">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Case Study Details Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
