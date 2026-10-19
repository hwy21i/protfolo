"use client";

import React, { memo } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { FileText, Code, Award, Globe, ArrowUpRight, Sparkles } from "lucide-react";
import { DEVELOPER_PROFILE } from "@/data/portfolio-data";

// Centered Section Header Matching EkiZR Reference (zoom-in-up animation)
const AboutHeader = memo(() => (
  <motion.div
    initial={{ opacity: 0, scale: 0.92, y: -20 }}
    whileInView={{ opacity: 1, scale: 1, y: 0 }}
    viewport={{ once: false, amount: 0.3 }}
    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    className="text-center lg:mb-12 mb-8 px-4"
  >
    <div className="inline-block relative group">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-cloud-white)] via-[var(--color-soft-ice-blue)] to-[var(--color-steel-blue)]">
        About Me
      </h2>
    </div>
    <motion.p
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.8, delay: 0.15 }}
      className="mt-3 text-[var(--text-secondary)] max-w-2xl mx-auto text-sm sm:text-base flex items-center justify-center gap-2 font-light"
    >
      <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--color-steel-blue)] shrink-0 animate-pulse" />
      <span>Transforming ideas into digital experiences</span>
      <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--color-steel-blue)] shrink-0 animate-pulse" />
    </motion.p>
  </motion.div>
));
AboutHeader.displayName = "AboutHeader";

// Profile Image with Multi-Layered Rotating Halo Aura Rings (fade-up entrance)
const ProfileDisplay = memo(() => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9, y: 30 }}
    whileInView={{ opacity: 1, scale: 1, y: 0 }}
    viewport={{ once: false, amount: 0.2 }}
    transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
    className="flex justify-center lg:justify-end items-center p-2 sm:p-6"
  >
    <div className="relative group">
      {/* Optimized Multi-Layered Glowing Aura Rings from Reference */}
      <div className="absolute -inset-6 opacity-40 group-hover:opacity-70 transition-opacity duration-700 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-midnight-blue)] via-[var(--color-steel-blue)] to-[var(--color-soft-ice-blue)] rounded-full blur-2xl animate-spin-slower" />
        <div className="absolute inset-0 bg-gradient-to-l from-[var(--color-steel-blue)] via-[var(--color-midnight-blue)] to-[var(--color-deep-navy)] rounded-full blur-2xl animate-pulse-slow opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-steel-blue)] via-[var(--color-soft-ice-blue)] to-[var(--color-midnight-blue)] rounded-full blur-2xl animate-float opacity-50" />
      </div>

      <div className="relative">
        <div className="w-72 h-72 sm:w-80 sm:h-80 rounded-full overflow-hidden shadow-[0_0_40px_rgba(74,127,167,0.35)] transform transition-all duration-700 group-hover:scale-105 bg-[var(--color-deep-navy)] border-4 border-[var(--border-subtle)] group-hover:border-[var(--color-soft-ice-blue)]/60 relative">
          
          {/* Subtle Outer Border Ring Matching EkiZR */}
          <div className="absolute inset-0 border-4 border-white/10 rounded-full z-20 transition-all duration-700 group-hover:border-white/30 group-hover:scale-105 pointer-events-none" />

          {/* Optimized Ambient Lighting Overlays from Reference */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/50 z-10 transition-opacity duration-700 group-hover:opacity-0 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-midnight-blue)]/50 via-transparent to-[var(--color-steel-blue)]/20 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

          {/* Verified GitHub Profile Picture */}
          <Image
            src={DEVELOPER_PROFILE.avatar || "/github-profile.png"}
            alt={`${DEVELOPER_PROFILE.name} - GitHub Profile Picture`}
            fill
            sizes="(max-width: 768px) 288px, 320px"
            priority
            className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
          />

          {/* Desktop Hover Sheen Reflection (Exact Reference Recreation) */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 z-20 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-[var(--color-cloud-white)]/25 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-[var(--color-soft-ice-blue)]/20 to-transparent transform translate-y-full group-hover:-translate-y-full transition-transform duration-1000 delay-100" />
            <div className="absolute inset-0 rounded-full border-8 border-white/10 scale-0 group-hover:scale-100 transition-transform duration-700 animate-pulse-slow" />
          </div>
        </div>

        {/* Floating Identification Pill */}
        <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 z-30 inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[var(--color-deep-navy)]/90 backdrop-blur-md border border-[var(--color-steel-blue)]/40 text-[11px] font-mono text-[var(--color-cloud-white)] shadow-lg whitespace-nowrap">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>Unity University · CS</span>
        </div>
      </div>
    </div>
  </motion.div>
));
ProfileDisplay.displayName = "ProfileDisplay";

// Reusable Stat Card Component Matching Reference AOS & Hover States
interface StatCardProps {
  icon: React.ComponentType<{ className?: string }>;
  value: string;
  label: string;
  description: string;
  direction: "left" | "up" | "right";
  delay: number;
}

const StatCard = memo(({ icon: Icon, value, label, description, direction, delay }: StatCardProps) => {
  const initialMotion = direction === "right" 
    ? { opacity: 0, x: -35 } 
    : direction === "left" 
    ? { opacity: 0, x: 35 } 
    : { opacity: 0, y: 35 };

  return (
    <motion.div
      initial={initialMotion}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.75, delay, ease: [0.16, 1, 0.3, 1] }}
      className="relative group overflow-hidden rounded-2xl glass-panel p-6 border border-[var(--border-subtle)] hover:border-[var(--color-steel-blue)] transition-all duration-300 hover:shadow-[0_0_30px_rgba(74,127,167,0.2)]"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center bg-[var(--color-midnight-blue)] border border-[var(--border-subtle)] transition-transform duration-300 group-hover:rotate-6 group-hover:scale-105">
          <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-[var(--color-soft-ice-blue)]" />
        </div>
        <span className="text-3xl sm:text-4xl font-heading font-bold text-[var(--text-primary)]">
          {value}
        </span>
      </div>

      <div>
        <p className="text-xs uppercase tracking-wider text-[var(--color-soft-ice-blue)] font-mono mb-1">
          {label}
        </p>
        <div className="flex items-center justify-between gap-2">
          <p className="text-xs text-[var(--text-secondary)] font-light leading-relaxed">
            {description}
          </p>
          <ArrowUpRight className="w-4 h-4 text-[var(--color-steel-blue)] group-hover:text-[var(--color-soft-ice-blue)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
        </div>
      </div>
    </motion.div>
  );
});
StatCard.displayName = "StatCard";

export default function AboutSection() {
  const statsData: StatCardProps[] = [
    {
      icon: Code,
      value: "4",
      label: "Total Projects",
      description: "Production web & enterprise systems crafted",
      direction: "right",
      delay: 0.05,
    },
    {
      icon: Award,
      value: "Unity CS",
      label: "Academic Foundation",
      description: "Rigorous computer science theory & algorithms",
      direction: "up",
      delay: 0.15,
    },
    {
      icon: Globe,
      value: "20+",
      label: "Active Repositories",
      description: "Continuous version control & development journey",
      direction: "left",
      delay: 0.25,
    },
  ];

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-t border-[var(--border-subtle)]"
    >
      <div className="max-w-6xl mx-auto">
        <AboutHeader />

        {/* Narrative & Profile Grid (Exact 2-Column Split from Reference) */}
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-10 lg:gap-16 items-center pt-4 sm:pt-8">
          {/* Left Column: Greeting, Narrative & Interactive Actions (fade-right motion) */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6 text-center lg:text-left w-full"
          >
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-steel-blue)] to-[var(--color-soft-ice-blue)] block">
                Hello, I&apos;m
              </span>
              <span className="block mt-1 text-[var(--text-primary)]">
                {DEVELOPER_PROFILE.name}
              </span>
            </h3>

            <p className="text-base sm:text-lg text-[var(--text-secondary)] font-light leading-relaxed text-justify lg:text-left">
              I am a Computer Science undergraduate at{" "}
              <span className="text-[var(--color-soft-ice-blue)] font-medium">Unity University</span>{" "}
              and a full-stack software engineer dedicated to building dependable, high-performing digital architectures. My engineering approach combines algorithmic rigor, resilient data schemas, and clean component systems.
            </p>

            {/* Reference Quote Section with Floating Orbs & Icon (fade-up motion) */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.75, delay: 0.2 }}
              className="relative bg-gradient-to-br from-[var(--color-midnight-blue)]/30 via-transparent to-[var(--color-steel-blue)]/10 border border-[var(--border-subtle)] rounded-2xl p-5 my-6 backdrop-blur-md shadow-xl overflow-hidden text-left"
            >
              <div className="absolute top-2 right-4 w-16 h-16 bg-[var(--color-steel-blue)]/15 rounded-full blur-xl pointer-events-none" />
              <div className="absolute -bottom-4 -left-2 w-12 h-12 bg-[var(--color-soft-ice-blue)]/15 rounded-full blur-lg pointer-events-none" />

              <div className="absolute top-3 left-3 text-[var(--color-steel-blue)] opacity-40">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
                </svg>
              </div>

              <blockquote className="text-[var(--text-primary)] italic font-light text-sm relative z-10 pl-6 leading-relaxed">
                &ldquo;Rooted in Computer Science first-principles; engineering reliable software architectures from concept to production.&rdquo;
              </blockquote>
            </motion.div>

            {/* Reference Action Buttons (Download CV & View Projects) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center lg:items-start gap-4 w-full"
            >
              <a
                href={`mailto:${DEVELOPER_PROFILE.email}?subject=Resume%20Request%20-%20Hawariya%20Yohannes`}
                className="w-full sm:w-auto"
              >
                <button
                  type="button"
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-[var(--color-steel-blue)] to-[var(--color-midnight-blue)] text-[var(--color-cloud-white)] font-semibold text-sm transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 shadow-lg hover:shadow-[0_0_20px_rgba(74,127,167,0.4)] border border-[var(--color-soft-ice-blue)]/30 cursor-pointer"
                >
                  <FileText className="w-4 h-4 text-[var(--color-soft-ice-blue)]" />
                  <span>Request CV / Resume</span>
                </button>
              </a>

              <a href="#projects" className="w-full sm:w-auto">
                <button
                  type="button"
                  className="w-full sm:w-auto px-6 py-3 rounded-xl border border-[var(--color-steel-blue)]/60 text-[var(--color-soft-ice-blue)] font-semibold text-sm transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 hover:bg-[var(--color-midnight-blue)]/40 cursor-pointer"
                >
                  <Code className="w-4 h-4 text-[var(--color-steel-blue)]" />
                  <span>View Projects</span>
                </button>
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column: Profile Image Aura Rings */}
          <ProfileDisplay />
        </div>

        {/* 3 Interactive Stat Cards Grid (Recreated from Reference with directional motion) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {statsData.map((stat) => (
            <a key={stat.label} href="#projects" className="block focus:outline-none">
              <StatCard {...stat} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
