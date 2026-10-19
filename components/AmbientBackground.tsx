"use client";

import React, { useEffect, useRef } from "react";
import { useReducedMotion } from "motion/react";

const INITIAL_POSITIONS = [
  { x: -4, y: 0 },
  { x: 12, y: 0 },
  { x: 20, y: -8 },
  { x: -10, y: 20 },
];

export default function AmbientBackground() {
  const shouldReduceMotion = useReducedMotion();
  const blobRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (shouldReduceMotion) return;

    let requestId = 0;

    const handleScroll = () => {
      cancelAnimationFrame(requestId);
      requestId = requestAnimationFrame(() => {
        const scrollY = window.pageYOffset;

        blobRefs.current.forEach((blob, index) => {
          if (!blob) return;
          const initialPos = INITIAL_POSITIONS[index] || { x: 0, y: 0 };

          // Exact trigonometric harmonic calculation from TikTok reference
          const xOffset = Math.sin(scrollY / 120 + index * 0.55) * 280;
          const yOffset = Math.cos(scrollY / 120 + index * 0.55) * 45;

          const x = initialPos.x + xOffset;
          const y = initialPos.y + yOffset;

          blob.style.transform = `translate3d(${x}px, ${y}px, 0)`;
          blob.style.transition = "transform 1.4s ease-out";
        });
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(requestId);
    };
  }, [shouldReduceMotion]);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none"
    >
      {/* Dynamic Mathematically Reactive Color Blobs (Approved 5-Color System) */}
      <div className="absolute inset-0">
        {/* Blob 0: Midnight Blue */}
        <div
          ref={(el) => {
            blobRefs.current[0] = el;
          }}
          className="absolute top-0 -left-10 w-80 sm:w-96 h-80 sm:h-96 rounded-full filter blur-[128px] opacity-30 dark:opacity-45 bg-[var(--color-midnight-blue)]"
        />

        {/* Blob 1: Steel Blue */}
        <div
          ref={(el) => {
            blobRefs.current[1] = el;
          }}
          className="absolute top-12 -right-12 w-80 sm:w-96 h-80 sm:h-96 rounded-full filter blur-[128px] opacity-25 dark:opacity-40 bg-[var(--color-steel-blue)] hidden sm:block"
        />

        {/* Blob 2: Soft Ice Blue / Deep Navy Halo */}
        <div
          ref={(el) => {
            blobRefs.current[2] = el;
          }}
          className="absolute -bottom-16 left-[-15%] sm:left-24 w-80 sm:w-[420px] h-80 sm:h-[420px] rounded-full filter blur-[130px] opacity-20 dark:opacity-30 bg-[var(--color-midnight-blue)]"
        />

        {/* Blob 3: Steel Blue / Ice Accent */}
        <div
          ref={(el) => {
            blobRefs.current[3] = el;
          }}
          className="absolute -bottom-20 right-16 w-80 sm:w-[380px] h-80 sm:h-[380px] rounded-full filter blur-[128px] opacity-15 dark:opacity-25 bg-[var(--color-steel-blue)] hidden sm:block"
        />
      </div>

      {/* 24px Engineering Geometric Grid (Exact Grid Specification) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(179,207,229,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(179,207,229,0.04)_1px,transparent_1px)] bg-[size:24px_24px] opacity-80" />

      {/* Radial Atmospheric Vignette */}
      <div className="absolute inset-0 bg-radial-[circle_at_center,transparent_35%,var(--bg-primary)_100%] opacity-50 dark:opacity-80" />
    </div>
  );
}
