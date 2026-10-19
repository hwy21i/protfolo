"use client";

import React, { useState, useEffect, useCallback, memo } from "react";
import { ExternalLink, Mail, Sparkles, Terminal, Cpu, Globe2, ShieldCheck } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/BrandIcons";
import { DEVELOPER_PROFILE } from "@/data/portfolio-data";

const StatusBadge = memo(() => (
  <div className="inline-block animate-float">
    <div className="relative group">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-[var(--color-steel-blue)] to-[var(--color-soft-ice-blue)] rounded-full blur opacity-30 group-hover:opacity-60 transition duration-1000" />
      <div className="relative px-3 sm:px-4 py-2 rounded-full bg-[var(--color-deep-navy)]/80 backdrop-blur-xl border border-[var(--border-subtle)] flex items-center gap-2">
        <Sparkles className="w-3.5 h-3.5 text-[var(--color-steel-blue)] animate-pulse" />
        <span className="bg-gradient-to-r from-[var(--color-soft-ice-blue)] to-[var(--color-cloud-white)] text-transparent bg-clip-text text-xs sm:text-sm font-mono font-medium">
          Ready to Innovate · Available for Roles
        </span>
      </div>
    </div>
  </div>
));
StatusBadge.displayName = "StatusBadge";

const MainTitle = memo(() => (
  <div className="space-y-1 sm:space-y-2">
    <h1 className="text-4xl sm:text-6xl md:text-6xl lg:text-7xl font-heading font-bold tracking-tight text-left leading-[1.08]">
      <span className="relative inline-block">
        <span className="absolute -inset-2 bg-gradient-to-r from-[var(--color-steel-blue)] to-[var(--color-midnight-blue)] blur-2xl opacity-25" />
        <span className="relative bg-gradient-to-r from-[var(--color-cloud-white)] via-[var(--color-soft-ice-blue)] to-[var(--color-cloud-white)] bg-clip-text text-transparent">
          Computer Science
        </span>
      </span>
      <br />
      <span className="relative inline-block mt-2">
        <span className="absolute -inset-2 bg-gradient-to-r from-[var(--color-steel-blue)] to-[var(--color-soft-ice-blue)] blur-2xl opacity-25" />
        <span className="relative bg-gradient-to-r from-[var(--color-steel-blue)] via-[var(--color-soft-ice-blue)] to-[var(--color-cloud-white)] bg-clip-text text-transparent">
          Software Engineer
        </span>
      </span>
    </h1>
  </div>
));
MainTitle.displayName = "MainTitle";

const TechStackPill = memo(({ tech }: { tech: string }) => (
  <div className="px-3.5 py-1.5 rounded-full bg-[var(--color-midnight-blue)]/50 backdrop-blur-sm border border-[var(--border-subtle)] text-xs font-mono text-[var(--color-soft-ice-blue)] hover:border-[var(--color-steel-blue)] hover:text-[var(--color-cloud-white)] transition-all">
    {tech}
  </div>
));
TechStackPill.displayName = "TechStackPill";

const CTAButton = memo(
  ({
    href,
    text,
    icon: Icon,
  }: {
    href: string;
    text: string;
    icon: React.ComponentType<{ className?: string }>;
  }) => (
    <a href={href} className="w-full sm:w-auto">
      <div className="group relative w-full sm:w-[160px] cursor-pointer">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-[var(--color-steel-blue)] to-[var(--color-midnight-blue)] rounded-xl opacity-50 blur-md group-hover:opacity-95 transition-all duration-500" />
        <div className="relative h-11 bg-[var(--color-deep-navy)] backdrop-blur-xl rounded-lg border border-[var(--border-subtle)] group-hover:border-[var(--color-steel-blue)] leading-none overflow-hidden flex items-center justify-center">
          <div className="absolute inset-0 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 bg-gradient-to-r from-[var(--color-steel-blue)]/30 to-[var(--color-soft-ice-blue)]/20" />
          <span className="relative z-10 flex items-center justify-center gap-2 text-xs font-semibold text-[var(--color-cloud-white)] transition-all duration-300">
            <span>{text}</span>
            <Icon
              className={`w-3.5 h-3.5 text-[var(--color-soft-ice-blue)] transition-transform duration-300 ${
                text === "Contact"
                  ? "group-hover:translate-x-1"
                  : "group-hover:rotate-45"
              }`}
            />
          </span>
        </div>
      </div>
    </a>
  )
);
CTAButton.displayName = "CTAButton";

const TYPING_SPEED = 90;
const ERASING_SPEED = 45;
const PAUSE_DURATION = 1800;
const WORDS = [
  "Computer Science Student",
  "Full-Stack Web Architect",
  "Systems & Algorithms Builder",
  "Unity University Undergraduate",
];

const TECH_STACK = ["Next.js", "React", "TypeScript", "Node.js", "MongoDB", "C++", "Tailwind CSS"];

export default function HeroSection() {
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isHoveringVisual, setIsHoveringVisual] = useState(false);

  const handleTyping = useCallback(() => {
    if (isTyping) {
      if (charIndex < WORDS[wordIndex].length) {
        setDisplayText((prev) => prev + WORDS[wordIndex][charIndex]);
        setCharIndex((prev) => prev + 1);
      } else {
        setTimeout(() => setIsTyping(false), PAUSE_DURATION);
      }
    } else {
      if (charIndex > 0) {
        setDisplayText((prev) => prev.slice(0, -1));
        setCharIndex((prev) => prev - 1);
      } else {
        setWordIndex((prev) => (prev + 1) % WORDS.length);
        setIsTyping(true);
      }
    }
  }, [charIndex, isTyping, wordIndex]);

  useEffect(() => {
    const timeout = setTimeout(
      handleTyping,
      isTyping ? TYPING_SPEED : ERASING_SPEED
    );
    return () => clearTimeout(timeout);
  }, [handleTyping, isTyping]);

  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-12 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center min-h-[70vh]">
          {/* Left Column (Exact Reference Arrangement with Staggered Motion) */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-7 text-left order-1">
            <StatusBadge />

            {/* Wordmark Identification */}
            <div className="font-mono text-xs tracking-[0.25em] uppercase text-[var(--color-soft-ice-blue)] font-semibold">
              Hawariya Yohannes
            </div>

            <MainTitle />

            {/* Reference Typewriter Headline */}
            <div className="h-8 flex items-center">
              <span className="text-lg sm:text-2xl font-mono text-[var(--color-soft-ice-blue)] font-light">
                {displayText}
              </span>
              <span className="w-[3px] h-6 bg-[var(--color-steel-blue)] ml-1 animate-blink" />
            </div>

            {/* Professional Authentic Description */}
            <p className="text-sm sm:text-base text-[var(--text-secondary)] max-w-xl font-light leading-relaxed">
              Studying Computer Science at Unity University. Engineering reliable, production-ready full-stack applications with architectural discipline, clean data models, and fluid interactive design.
            </p>

            {/* Tech Stack Pills Strip */}
            <div className="flex flex-wrap gap-2 pt-1">
              {TECH_STACK.map((tech) => (
                <TechStackPill key={tech} tech={tech} />
              ))}
            </div>

            {/* Reference Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
              <CTAButton href="#projects" text="Projects" icon={ExternalLink} />
              <CTAButton href="#contact" text="Contact" icon={Mail} />
            </div>

            {/* Reference Social Links Ribbon */}
            <div className="flex items-center gap-3 pt-3">
              <a
                href={DEVELOPER_PROFILE.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="group relative p-2.5 rounded-xl bg-[var(--color-midnight-blue)]/50 border border-[var(--border-subtle)] hover:border-[var(--color-steel-blue)] transition-all"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-[var(--color-steel-blue)] to-[var(--color-soft-ice-blue)] rounded-xl blur opacity-0 group-hover:opacity-40 transition duration-300" />
                <GitHubIcon className="relative z-10 w-4 h-4 text-[var(--color-soft-ice-blue)] group-hover:text-[var(--color-cloud-white)]" />
              </a>

              <a
                href={DEVELOPER_PROFILE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="group relative p-2.5 rounded-xl bg-[var(--color-midnight-blue)]/50 border border-[var(--border-subtle)] hover:border-[var(--color-steel-blue)] transition-all"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-[var(--color-steel-blue)] to-[var(--color-soft-ice-blue)] rounded-xl blur opacity-0 group-hover:opacity-40 transition duration-300" />
                <LinkedInIcon className="relative z-10 w-4 h-4 text-[var(--color-soft-ice-blue)] group-hover:text-[var(--color-cloud-white)]" />
              </a>

              <a
                href={`mailto:${DEVELOPER_PROFILE.email}`}
                aria-label="Send Email"
                className="group relative p-2.5 rounded-xl bg-[var(--color-midnight-blue)]/50 border border-[var(--border-subtle)] hover:border-[var(--color-steel-blue)] transition-all"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-[var(--color-steel-blue)] to-[var(--color-soft-ice-blue)] rounded-xl blur opacity-0 group-hover:opacity-40 transition duration-300" />
                <Mail className="relative z-10 w-4 h-4 text-[var(--color-soft-ice-blue)] group-hover:text-[var(--color-cloud-white)]" />
              </a>

              <span className="font-mono text-[11px] text-[var(--text-muted)] ml-2">
                hwy21i · Unity Univ
              </span>
            </div>
          </div>

          {/* Right Column: Futuristic Engineering Showcase Visual */}
          <div
            className="lg:col-span-5 relative flex items-center justify-center order-2"
            onMouseEnter={() => setIsHoveringVisual(true)}
            onMouseLeave={() => setIsHoveringVisual(false)}
          >
            <div className="relative w-full max-w-md">
              {/* Pulsating Glowing Aura from Reference */}
              <div
                className={`absolute inset-0 bg-gradient-to-r from-[var(--color-steel-blue)]/20 to-[var(--color-midnight-blue)]/30 rounded-3xl blur-3xl transition-all duration-700 ${
                  isHoveringVisual ? "opacity-70 scale-105" : "opacity-30 scale-100"
                }`}
              />

              {/* Central Engineering Telemetry Card */}
              <div
                className={`relative glass-panel rounded-3xl p-6 sm:p-8 border border-[var(--color-steel-blue)]/40 shadow-2xl transition-all duration-500 ${
                  isHoveringVisual
                    ? "scale-102 border-[var(--color-steel-blue)] -translate-y-1 shadow-[0_20px_50px_rgba(74,127,167,0.25)]"
                    : "scale-100"
                }`}
              >
                {/* Terminal Header Bar */}
                <div className="flex items-center justify-between pb-4 mb-5 border-b border-[var(--border-subtle)]">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[var(--color-steel-blue)]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[var(--color-soft-ice-blue)] opacity-60" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[var(--color-midnight-blue)] border border-[var(--border-subtle)]" />
                  </div>
                  <span className="font-mono text-[10px] text-[var(--color-soft-ice-blue)] tracking-wider">
                    SYS.HAWARIYA.V5
                  </span>
                </div>

                {/* Animated Code Visualizer */}
                <div className="space-y-3 font-mono text-xs">
                  <div className="flex items-center gap-2 text-[var(--color-soft-ice-blue)]">
                    <Terminal className="w-3.5 h-3.5 text-[var(--color-steel-blue)]" />
                    <span>const engineer = &quot;Hawariya Yohannes&quot;;</span>
                  </div>
                  <div className="flex items-center gap-2 text-[var(--text-muted)]">
                    <Cpu className="w-3.5 h-3.5 text-[var(--color-steel-blue)]" />
                    <span>degree: &quot;Computer Science @ Unity&quot;;</span>
                  </div>
                  <div className="flex items-center gap-2 text-[var(--color-soft-ice-blue)]">
                    <Globe2 className="w-3.5 h-3.5 text-[var(--color-steel-blue)]" />
                    <span>verifiedSystems: 4;</span>
                  </div>
                  <div className="flex items-center gap-2 text-[var(--text-muted)]">
                    <ShieldCheck className="w-3.5 h-3.5 text-[var(--color-steel-blue)]" />
                    <span>status: &quot;Available for Roles&quot;;</span>
                  </div>
                </div>

                {/* Micro Metric Blocks */}
                <div className="grid grid-cols-2 gap-3 mt-6 pt-5 border-t border-[var(--border-subtle)]">
                  <div className="p-3 rounded-xl bg-[var(--color-midnight-blue)]/60 border border-[var(--border-subtle)]">
                    <div className="font-heading font-bold text-lg text-[var(--color-cloud-white)]">
                      4 Apps
                    </div>
                    <div className="font-mono text-[10px] text-[var(--color-soft-ice-blue)]">
                      Live Verified
                    </div>
                  </div>
                  <div className="p-3 rounded-xl bg-[var(--color-midnight-blue)]/60 border border-[var(--border-subtle)]">
                    <div className="font-heading font-bold text-lg text-[var(--color-cloud-white)]">
                      20+ Repos
                    </div>
                    <div className="font-mono text-[10px] text-[var(--color-soft-ice-blue)]">
                      Active Practice
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
