"use client";

import React from "react";
import { motion } from "motion/react";
import { Binary, Layers, Database, Globe2, Cpu, ShieldCheck } from "lucide-react";
import { CS_FUNDAMENTALS } from "@/data/portfolio-data";

export default function CSFundamentalsSection() {
  const getIcon = (id: string) => {
    switch (id) {
      case "dsa":
        return Binary;
      case "oop":
        return Layers;
      case "dbms":
        return Database;
      case "networks":
        return Globe2;
      case "os":
        return Cpu;
      case "swe":
        return ShieldCheck;
      default:
        return Binary;
    }
  };

  return (
    <section
      id="fundamentals"
      aria-labelledby="fundamentals-heading"
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
            <span>03 / Theoretical Rigor &amp; Computation</span>
          </div>
          <h2
            id="fundamentals-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-[var(--text-primary)] tracking-tight max-w-2xl"
          >
            Computer Science First Principles.
          </h2>
          <p className="mt-4 text-base text-[var(--text-secondary)] max-w-xl font-light">
            Core theoretical paradigms studied at Unity University and systematically integrated into applied software architecture.
          </p>
        </motion.div>

        {/* 6 Fundamentals Grid with Staggered Scroll-Triggered Entrance */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CS_FUNDAMENTALS.map((item, index) => {
            const Icon = getIcon(item.id);
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{ duration: 0.65, delay: (index % 3) * 0.12, ease: [0.16, 1, 0.3, 1] }}
                className="glass-card rounded-3xl p-6 sm:p-7 border border-[var(--border-subtle)] flex flex-col justify-between group hover:border-[var(--color-steel-blue)] transition-all duration-300 relative overflow-hidden"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-10 h-10 rounded-2xl bg-[var(--color-midnight-blue)] border border-[var(--border-subtle)] flex items-center justify-center group-hover:scale-105 group-hover:border-[var(--color-steel-blue)] transition-all">
                      <Icon className="w-5 h-5 text-[var(--color-soft-ice-blue)]" />
                    </div>
                    <span className="font-mono text-[10px] text-[var(--text-muted)] tracking-widest uppercase">
                      Pillar #{item.id.toUpperCase()}
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-lg sm:text-xl text-[var(--text-primary)] mb-1 group-hover:text-[var(--color-soft-ice-blue)] transition-colors">
                    {item.title}
                  </h3>
                  <div className="font-mono text-xs text-[var(--color-steel-blue)] font-medium mb-3">
                    {item.concept}
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] font-light leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                {item.codeSnippet && (
                  <div className="pt-4 border-t border-[var(--border-subtle)]">
                    <div className="font-mono text-[10.5px] px-3 py-2 rounded-xl bg-[var(--color-midnight-blue)]/60 text-[var(--color-soft-ice-blue)] border border-[var(--border-subtle)] flex items-center justify-between">
                      <span className="truncate">{item.codeSnippet}</span>
                    </div>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
