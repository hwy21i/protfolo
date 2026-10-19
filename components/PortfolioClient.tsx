"use client";

import React, { useState, useEffect } from "react";
import Lenis from "lenis";
import WelcomeScreen from "@/components/WelcomeScreen";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import CSFundamentalsSection from "@/components/CSFundamentalsSection";
import ProjectsSection from "@/components/ProjectsSection";
import JourneySection from "@/components/JourneySection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import AmbientBackground from "@/components/AmbientBackground";

export default function PortfolioClient() {
  const [introFinished, setIntroFinished] = useState(false);

  // Initialize Reference-Grade Cinematic Smooth Inertial Scrolling via Lenis
  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.8,
    });

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return (
    <>
      {/* Exact TikTok Welcome Sequence on initial load */}
      <WelcomeScreen onComplete={() => setIntroFinished(true)} />

      <div
        className={`relative min-h-screen flex flex-col justify-between selection:bg-[var(--color-steel-blue)] selection:text-[var(--color-cloud-white)] transition-all duration-700 ${
          introFinished ? "opacity-100 translate-y-0" : "opacity-95"
        }`}
      >
        {/* Dynamic Trigonometric Scroll-Reactive Ambient Atmosphere */}
        <AmbientBackground />

        {/* Floating Capsule Glass Navbar */}
        <Navbar />

        {/* Core Engineered Portfolio Sections */}
        <main className="relative z-10 flex-1">
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <CSFundamentalsSection />
          <ProjectsSection />
          <JourneySection />
          <ContactSection />
        </main>

        {/* Minimalist Editorial Luxury Footer */}
        <Footer />
      </div>
    </>
  );
}
