"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence, type Variants } from "motion/react";
import { Code2, User, Globe } from "lucide-react";
import { GitHubIcon } from "@/components/BrandIcons";

interface WelcomeScreenProps {
  onComplete: () => void;
}

// Looping Typewriter matching the reference video's continuous domain animation
const Typewriter = ({ text }: { text: string }) => {
  const [displayText, setDisplayText] = useState(text);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (!isDeleting && displayText === text) {
      // Hold domain before deleting
      timer = setTimeout(() => setIsDeleting(true), 1600);
    } else if (isDeleting && displayText === "") {
      // Pause before typing back
      timer = setTimeout(() => setIsDeleting(false), 300);
    } else {
      timer = setTimeout(
        () => {
          setDisplayText((prev) =>
            isDeleting ? text.slice(0, prev.length - 1) : text.slice(0, prev.length + 1)
          );
        },
        isDeleting ? 60 : 110
      );
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, text]);

  return (
    <span className="inline-block font-mono">
      {displayText}
      <span className="animate-blink text-[var(--color-steel-blue)] font-bold">|</span>
    </span>
  );
};

export default function WelcomeScreen({ onComplete }: WelcomeScreenProps) {
  const [isVisible, setIsVisible] = useState(() => {
    if (typeof window !== "undefined") {
      return !sessionStorage.getItem("portfolio-intro-seen");
    }
    return true;
  });

  const handleDismiss = useCallback(() => {
    if (typeof window !== "undefined") {
      sessionStorage.setItem("portfolio-intro-seen", "true");
    }
    setIsVisible(false);
    setTimeout(() => {
      onComplete();
    }, 850);
  }, [onComplete]);

  useEffect(() => {
    if (!isVisible) {
      onComplete();
      return;
    }

    // Video displays the welcome scene in mid-flow, then triggers the signature blur-zoom dissolve
    const timer = setTimeout(() => {
      handleDismiss();
    }, 2800);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" || e.key === "Enter" || e.key === " ") {
        handleDismiss();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isVisible, handleDismiss, onComplete]);

  // Exact reference container exit transition: scale up to 1.1 + 10px blur dissolve
  const containerVariants: Variants = {
    initial: { opacity: 1, scale: 1 },
    animate: { opacity: 1, scale: 1 },
    exit: {
      opacity: 0,
      scale: 1.1,
      filter: "blur(10px)",
      transition: {
        duration: 0.8,
        ease: [0.42, 0, 0.58, 1], // easeInOut
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  // Exact reference child variants: slide up with y: -20 and fade out
  const childVariants: Variants = {
    exit: {
      y: -20,
      opacity: 0,
      transition: {
        duration: 0.4,
        ease: [0.42, 0, 0.58, 1],
      },
    },
  };

  const icons = [Code2, User, GitHubIcon];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          variants={containerVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="fixed inset-0 z-50 flex items-center justify-center bg-[var(--color-deep-navy)] select-none overflow-hidden cursor-pointer"
          onClick={handleDismiss}
        >
          {/* Ambient Lighting Gradients (Strict 5-Color Palette) */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-[10%] left-[20%] w-[500px] h-[500px] rounded-full bg-[var(--color-midnight-blue)]/50 blur-[130px] animate-pulse" />
            <div className="absolute -bottom-[10%] right-[20%] w-[500px] h-[500px] rounded-full bg-[var(--color-steel-blue)]/20 blur-[140px] animate-blob" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(179,207,229,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(179,207,229,0.04)_1px,transparent_1px)] bg-[size:24px_24px]" />
          </div>

          <div className="relative z-10 w-full max-w-3xl mx-auto px-6 text-center">
            {/* Top Icon Pill Sequence (Already in position at frame 1) */}
            <motion.div variants={childVariants} className="flex justify-center gap-4 sm:gap-6 mb-8 sm:mb-10">
              {icons.map((Icon, idx) => (
                <div key={idx} className="relative group animate-float" style={{ animationDelay: `${idx * 0.4}s` }}>
                  <div className="absolute -inset-2 bg-gradient-to-r from-[var(--color-steel-blue)] to-[var(--color-soft-ice-blue)] rounded-full blur opacity-35 group-hover:opacity-75 transition duration-300" />
                  <div className="relative p-3 sm:p-3.5 bg-[var(--color-deep-navy)]/80 backdrop-blur-md rounded-full border border-[var(--border-subtle)]">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-[var(--color-cloud-white)]" />
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Heading Words (Rendered fully visible at start) */}
            <motion.div variants={childVariants} className="space-y-2 sm:space-y-3 mb-8 sm:mb-10">
              <div className="flex justify-center items-center gap-2 sm:gap-3 flex-wrap">
                {["Welcome", "To", "My"].map((word) => (
                  <span
                    key={word}
                    className="text-3xl sm:text-5xl md:text-6xl font-heading font-bold text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-cloud-white)] via-[var(--color-soft-ice-blue)] to-[var(--color-cloud-white)]"
                  >
                    {word}
                  </span>
                ))}
              </div>

              <div className="flex justify-center items-center gap-2 sm:gap-3 flex-wrap">
                {["Portfolio", "Website"].map((word) => (
                  <span
                    key={word}
                    className="text-3xl sm:text-5xl md:text-6xl font-heading font-bold text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-steel-blue)] to-[var(--color-soft-ice-blue)]"
                  >
                    {word}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Typewriter Domain Capsule (Actively animating in mid-flow) */}
            <motion.div variants={childVariants} className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-steel-blue)]/20 to-[var(--color-midnight-blue)]/30 rounded-full blur-md group-hover:blur-lg transition-all duration-300 border border-[var(--color-steel-blue)]/40" />
              <div className="relative flex items-center gap-2.5 text-base sm:text-lg md:text-xl font-medium text-[var(--color-cloud-white)]">
                <Globe className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--color-steel-blue)]" />
                <Typewriter text="hawariya.dev" />
              </div>
            </motion.div>

            {/* Skip Interaction Prompt */}
            <div className="mt-8 font-mono text-[10px] sm:text-xs text-[var(--color-soft-ice-blue)]/60 tracking-widest uppercase">
              Click anywhere or press ESC to enter
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
