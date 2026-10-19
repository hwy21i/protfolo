"use client";

import React from "react";
import { Mail, Phone, ArrowUp } from "lucide-react";
import { LinkedInIcon, GitHubIcon } from "@/components/BrandIcons";
import { DEVELOPER_PROFILE } from "@/data/portfolio-data";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative py-14 px-4 sm:px-6 lg:px-8 border-t border-[var(--border-subtle)] bg-[var(--color-deep-navy)] text-[var(--color-cloud-white)]">
      <div className="max-w-6xl mx-auto flex flex-col gap-10">
        {/* Top Tier */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-[var(--color-midnight-blue)]">
          <div className="flex flex-col">
            <span className="font-heading font-bold text-xl tracking-tight text-[var(--color-cloud-white)]">
              {DEVELOPER_PROFILE.name}
            </span>
            <span className="font-mono text-xs text-[var(--color-soft-ice-blue)] tracking-wider mt-0.5">
              Computer Science · Unity University · Software Engineer
            </span>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap items-center gap-5 text-xs font-mono text-[var(--color-soft-ice-blue)]">
            <a href="#hero" className="hover:text-[var(--color-cloud-white)] transition-colors">
              Overview
            </a>
            <a href="#about" className="hover:text-[var(--color-cloud-white)] transition-colors">
              About
            </a>
            <a href="#skills" className="hover:text-[var(--color-cloud-white)] transition-colors">
              Skills
            </a>
            <a href="#projects" className="hover:text-[var(--color-cloud-white)] transition-colors">
              Projects
            </a>
            <a href="#fundamentals" className="hover:text-[var(--color-cloud-white)] transition-colors">
              CS Rigor
            </a>
            <a href="#journey" className="hover:text-[var(--color-cloud-white)] transition-colors">
              Journey
            </a>
            <a href="#contact" className="hover:text-[var(--color-cloud-white)] transition-colors">
              Contact
            </a>
          </div>

          {/* Scroll to Top Trigger */}
          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="p-2.5 rounded-full bg-[var(--color-midnight-blue)] border border-[var(--border-subtle)] text-[var(--color-soft-ice-blue)] hover:text-[var(--color-cloud-white)] hover:border-[var(--color-steel-blue)] transition-all cursor-pointer self-end md:self-auto"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

        {/* Bottom Tier */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono text-[var(--color-soft-ice-blue)]/80">
          <div>
            © 2026 {DEVELOPER_PROFILE.name}. All verified systems preserved.
          </div>

          <div className="flex items-center gap-5">
            <a
              href={DEVELOPER_PROFILE.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-[var(--color-cloud-white)] transition-colors"
            >
              <GitHubIcon className="w-3.5 h-3.5 text-[var(--color-steel-blue)]" />
              <span>GitHub</span>
            </a>
            <a
              href={DEVELOPER_PROFILE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-[var(--color-cloud-white)] transition-colors"
            >
              <LinkedInIcon className="w-3.5 h-3.5 text-[var(--color-steel-blue)]" />
              <span>LinkedIn</span>
            </a>
            <a
              href={`mailto:${DEVELOPER_PROFILE.email}`}
              className="flex items-center gap-1.5 hover:text-[var(--color-cloud-white)] transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[var(--color-steel-blue)]" />
              <span>Email</span>
            </a>
            <a
              href={`tel:${DEVELOPER_PROFILE.phone}`}
              className="flex items-center gap-1.5 hover:text-[var(--color-cloud-white)] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[var(--color-steel-blue)]" />
              <span>Call</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
