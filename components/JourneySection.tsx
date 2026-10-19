"use client";

import React from "react";
import { motion } from "motion/react";
import { GraduationCap, Code2, Globe2, ShieldCheck, Rocket } from "lucide-react";
import { JOURNEY_MILESTONES } from "@/data/portfolio-data";

export default function JourneySection() {
  const getMilestoneIcon = (index: number) => {
    switch (index) {
      case 0:
        return GraduationCap;
      case 1:
        return Code2;
      case 2:
        return Globe2;
      case 3:
        return ShieldCheck;
      case 4:
        return Rocket;
      default:
        return GraduationCap;
    }
  };

  return (
    <section
      id="journey"
      aria-labelledby="journey-heading"
      className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-t border-[var(--border-subtle)]"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-start mb-16"
        >
          <div className="inline-flex items-center gap-2 font-mono text-xs text-[var(--color-steel-blue)] uppercase tracking-widest mb-3">
            <span className="w-6 h-px bg-[var(--color-steel-blue)]" />
            <span>05 / Academic &amp; Engineering Path</span>
          </div>
          <h2
            id="journey-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-[var(--text-primary)] tracking-tight max-w-2xl"
          >
            Academic grounding &amp; milestone trajectory.
          </h2>
          <p className="mt-4 text-base text-[var(--text-secondary)] max-w-xl font-light">
            From algorithmic theory at Unity University to architecting resilient, production-ready digital software.
          </p>
        </motion.div>

        {/* Milestone Timeline List with Staggered Entrance */}
        <div className="relative pl-6 sm:pl-10 border-l border-[var(--border-subtle)] space-y-12 sm:space-y-14">
          {JOURNEY_MILESTONES.map((item, idx) => {
            const Icon = getMilestoneIcon(idx);
            return (
              <motion.div
                key={item.period}
                initial={{ opacity: 0, x: -35 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.75, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="relative group"
              >
                {/* Timeline Node Dot */}
                <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-8 h-8 rounded-full bg-[var(--color-midnight-blue)] border-2 border-[var(--color-steel-blue)] flex items-center justify-center text-[var(--color-cloud-white)] transition-transform duration-300 group-hover:scale-110">
                  <Icon className="w-3.5 h-3.5 text-[var(--color-soft-ice-blue)]" />
                </div>

                <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-[var(--border-subtle)] hover:border-[var(--color-steel-blue)] transition-all duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <span className="font-mono text-xs font-semibold tracking-wider uppercase text-[var(--color-steel-blue)]">
                      {item.period}
                    </span>
                    <span className="font-mono text-xs text-[var(--color-soft-ice-blue)] px-3 py-1 rounded-full bg-[var(--color-midnight-blue)] border border-[var(--border-subtle)] self-start sm:self-auto">
                      {item.institution}
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-xl sm:text-2xl text-[var(--text-primary)] mb-2">
                    {item.role}
                  </h3>

                  <p className="text-sm sm:text-base text-[var(--text-secondary)] font-light leading-relaxed mb-5">
                    {item.summary}
                  </p>

                  <div className="space-y-2 pt-4 border-t border-[var(--border-subtle)]">
                    {item.highlights.map((point) => (
                      <div
                        key={point}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-[var(--text-secondary)]"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-steel-blue)] shrink-0 mt-1.5" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
