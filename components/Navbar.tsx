"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Sun, Moon, ArrowUpRight } from "lucide-react";

const NAV_LINKS = [
  { href: "#hero", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#fundamentals", label: "CS Rigor" },
  { href: "#journey", label: "Journey" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("portfolio-theme") as "dark" | "light" | null;
      return savedTheme || "dark";
    }
    return "dark";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      const sectionElements = NAV_LINKS.map((link) => {
        const id = link.href.replace("#", "");
        const el = document.getElementById(id);
        if (!el) return null;
        return {
          id,
          top: el.offsetTop - 120,
          bottom: el.offsetTop + el.offsetHeight - 120,
        };
      }).filter(Boolean);

      const currentScroll = window.scrollY;
      const current = sectionElements.find(
        (sec) => currentScroll >= sec!.top && currentScroll < sec!.bottom
      );

      if (current) {
        setActiveSection(current.id);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    localStorage.setItem("portfolio-theme", nextTheme);
    document.documentElement.setAttribute("data-theme", nextTheme);
  };

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "py-3 sm:py-4" : "py-5 sm:py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav
            aria-label="Main Navigation"
            className="glass-panel rounded-full px-4 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between transition-all duration-300"
          >
            {/* Personal Brand Wordmark */}
            <a
              href="#hero"
              onClick={(e) => handleNavClick(e, "#hero")}
              className="flex items-center gap-2.5 group"
            >
              <div className="w-8 h-8 rounded-full bg-[var(--color-midnight-blue)] border border-[var(--border-subtle)] flex items-center justify-center text-[var(--color-cloud-white)] font-heading font-bold text-xs tracking-wider transition-transform duration-300 group-hover:scale-105 group-hover:border-[var(--color-steel-blue)]">
                HY
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-semibold text-sm sm:text-base tracking-tight text-[var(--text-primary)] group-hover:text-[var(--color-soft-ice-blue)] transition-colors">
                  Hawariya Yohannes
                </span>
                <span className="font-mono text-[9px] sm:text-[10px] tracking-widest text-[var(--text-muted)] uppercase">
                  CS Engineering
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-1">
              {NAV_LINKS.map((link) => {
                const isActive = activeSection === link.href.replace("#", "");
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`group relative px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all duration-300 ${
                      isActive
                        ? "text-[var(--color-cloud-white)] bg-[var(--color-midnight-blue)] border border-[var(--color-steel-blue)] shadow-sm"
                        : "text-[var(--text-secondary)] hover:text-[var(--color-cloud-white)] hover:bg-[var(--color-midnight-blue)]/30"
                    }`}
                  >
                    <span className="relative z-10">{link.label}</span>
                    <span
                      className={`absolute bottom-0 left-2 right-2 h-0.5 bg-gradient-to-r from-[var(--color-steel-blue)] to-[var(--color-soft-ice-blue)] transform origin-left transition-transform duration-300 ${
                        isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                      }`}
                    />
                  </a>
                );
              })}
            </div>

            {/* Right Actions: Theme Toggle & CTA */}
            <div className="flex items-center gap-2 sm:gap-3">
              <button
                type="button"
                onClick={toggleTheme}
                aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
                className="p-2 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-surface-elevated)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--color-steel-blue)] transition-all cursor-pointer"
              >
                {theme === "dark" ? (
                  <Sun className="w-4 h-4 text-[var(--color-soft-ice-blue)]" />
                ) : (
                  <Moon className="w-4 h-4 text-[var(--color-midnight-blue)]" />
                )}
              </button>

              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, "#contact")}
                className="hidden sm:inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold bg-[var(--color-steel-blue)] text-[var(--color-cloud-white)] hover:bg-[var(--color-midnight-blue)] hover:border-[var(--color-soft-ice-blue)] border border-transparent transition-all shadow-sm"
              >
                <span>Initiate Contact</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              {/* Mobile Menu Button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileMenuOpen}
                className="lg:hidden p-2 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-surface-elevated)] text-[var(--text-primary)] hover:border-[var(--color-steel-blue)] transition-all cursor-pointer"
              >
                {mobileMenuOpen ? (
                  <X className="w-4 h-4" />
                ) : (
                  <Menu className="w-4 h-4" />
                )}
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-4 top-24 z-40 lg:hidden"
          >
            <div className="glass-panel rounded-2xl p-5 border border-[var(--border-active)] shadow-2xl flex flex-col gap-2">
              <div className="flex items-center justify-between pb-3 mb-2 border-b border-[var(--border-subtle)]">
                <span className="font-mono text-xs tracking-wider text-[var(--text-muted)] uppercase">
                  Directory Index
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[var(--color-midnight-blue)] text-[var(--color-soft-ice-blue)]">
                  Unity University
                </span>
              </div>
              {NAV_LINKS.map((link) => {
                const isActive = activeSection === link.href.replace("#", "");
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                      isActive
                        ? "bg-[var(--color-midnight-blue)] text-[var(--color-cloud-white)] border border-[var(--color-steel-blue)] font-semibold"
                        : "text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--color-midnight-blue)]/30"
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
              <div className="pt-3 mt-2 border-t border-[var(--border-subtle)]">
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, "#contact")}
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-semibold bg-[var(--color-steel-blue)] text-[var(--color-cloud-white)] transition-all"
                >
                  <span>Initiate Contact</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
