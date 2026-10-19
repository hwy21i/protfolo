"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import { Code, Layout, Server, Database, Wrench, Binary, CheckCircle2 } from "lucide-react";
import { SKILL_CATEGORIES } from "@/data/portfolio-data";

export default function SkillsSection() {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);

  const getCategoryIcon = (index: number) => {
    switch (index) {
      case 0:
        return Code;
      case 1:
        return Layout;
      case 2:
        return Server;
      case 3:
        return Database;
      case 4:
        return Wrench;
      case 5:
        return Binary;
      default:
        return Code;
    }
  };

  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-t border-[var(--border-subtle)]"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-[var(--color-steel-blue)] uppercase tracking-widest mb-3">
            <span className="w-6 h-px bg-[var(--color-steel-blue)]" />
            <span>02 / Technical Capabilities</span>
          </div>
          <h2
            id="skills-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-[var(--text-primary)] tracking-tight max-w-2xl"
          >
            Verified technical stack &amp; capabilities.
          </h2>
          <p className="mt-4 text-base text-[var(--text-secondary)] max-w-xl font-light">
            Organized strictly by verified engineering experience and real production project usage.
          </p>
        </div>

        {/* Category Navigation Pills (Desktop & Tablet) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {SKILL_CATEGORIES.map((cat, idx) => {
            const Icon = getCategoryIcon(idx);
            const isSelected = activeCategoryIndex === idx;
            return (
              <button
                key={cat.title}
                type="button"
                onClick={() => setActiveCategoryIndex(idx)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono tracking-wider transition-all cursor-pointer whitespace-nowrap shrink-0 border ${
                  isSelected
                    ? "bg-[var(--color-steel-blue)] text-[var(--color-cloud-white)] border-[var(--color-soft-ice-blue)] shadow-md"
                    : "bg-[var(--bg-surface-elevated)] text-[var(--text-secondary)] border-[var(--border-subtle)] hover:text-[var(--text-primary)] hover:border-[var(--color-steel-blue)]"
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{cat.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Category Display & Detailed Grid */}
        <motion.div
          key={activeCategoryIndex}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="glass-panel rounded-3xl p-6 sm:p-10 border border-[var(--border-subtle)] shadow-xl mb-12"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-8 border-b border-[var(--border-subtle)] gap-4">
            <div>
              <div className="flex items-center gap-2.5 mb-1.5">
                {React.createElement(getCategoryIcon(activeCategoryIndex), {
                  className: "w-5 h-5 text-[var(--color-steel-blue)]",
                })}
                <h3 className="font-heading font-bold text-xl sm:text-2xl text-[var(--text-primary)]">
                  {SKILL_CATEGORIES[activeCategoryIndex].title}
                </h3>
              </div>
              <p className="text-sm text-[var(--text-secondary)] font-light">
                {SKILL_CATEGORIES[activeCategoryIndex].description}
              </p>
            </div>
            <div className="font-mono text-xs text-[var(--color-soft-ice-blue)] px-3 py-1 rounded-full bg-[var(--color-midnight-blue)] border border-[var(--border-subtle)] self-start sm:self-auto">
              Domain 0{activeCategoryIndex + 1} / 06
            </div>
          </div>

          {/* Skill Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {SKILL_CATEGORIES[activeCategoryIndex].skills.map((skill) => (
              <div
                key={skill.name}
                className="glass-card rounded-2xl p-4 sm:p-5 border border-[var(--border-subtle)] flex items-center justify-between group hover:border-[var(--color-steel-blue)] transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-[var(--color-steel-blue)] group-hover:scale-150 transition-transform" />
                  <div>
                    <h4 className="font-heading font-semibold text-sm sm:text-base text-[var(--text-primary)] group-hover:text-[var(--color-soft-ice-blue)] transition-colors">
                      {skill.name}
                    </h4>
                    <span className="font-mono text-[11px] text-[var(--text-muted)] tracking-wide">
                      {skill.tag}
                    </span>
                  </div>
                </div>
                <CheckCircle2 className="w-4 h-4 text-[var(--color-steel-blue)] opacity-40 group-hover:opacity-100 transition-opacity shrink-0" />
              </div>
            ))}
          </div>
        </motion.div>

        {/* All Domains Overview Grid (Quick Reference Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SKILL_CATEGORIES.map((cat, idx) => {
            const Icon = getCategoryIcon(idx);
            return (
              <div
                key={cat.title}
                onClick={() => setActiveCategoryIndex(idx)}
                className={`glass-card rounded-2xl p-5 border border-[var(--border-subtle)] cursor-pointer transition-all duration-200 ${
                  activeCategoryIndex === idx
                    ? "border-[var(--color-steel-blue)] bg-[var(--color-midnight-blue)]/50"
                    : "hover:border-[var(--color-steel-blue)]"
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Icon className="w-4 h-4 text-[var(--color-steel-blue)]" />
                    <h4 className="font-heading font-semibold text-sm text-[var(--text-primary)]">
                      {cat.title}
                    </h4>
                  </div>
                  <span className="font-mono text-[10px] text-[var(--text-muted)]">
                    {cat.skills.length} items
                  </span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {cat.skills.slice(0, 4).map((s) => (
                    <span
                      key={s.name}
                      className="font-mono text-[10px] px-2 py-0.5 rounded bg-[var(--color-midnight-blue)] text-[var(--color-soft-ice-blue)]"
                    >
                      {s.name}
                    </span>
                  ))}
                  {cat.skills.length > 4 && (
                    <span className="font-mono text-[10px] px-1.5 py-0.5 rounded text-[var(--text-muted)]">
                      +{cat.skills.length - 4}
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

