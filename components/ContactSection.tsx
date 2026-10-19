"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  CheckCircle2, 
  Copy, 
  Check, 
  ArrowUpRight, 
  Share2, 
  User, 
  MessageSquare
} from "lucide-react";
import { LinkedInIcon, GitHubIcon } from "@/components/BrandIcons";
import { DEVELOPER_PROFILE } from "@/data/portfolio-data";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Please enter your name.";
    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!formData.message.trim()) newErrors.message = "Please write a message.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate reliable dispatch
    await new Promise((resolve) => setTimeout(resolve, 900));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(DEVELOPER_PROFILE.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-t border-[var(--border-subtle)]"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header Section (fade-down entrance) */}
        <motion.div
          initial={{ opacity: 0, y: -25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2
            id="contact-heading"
            className="inline-block text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-cloud-white)] via-[var(--color-soft-ice-blue)] to-[var(--color-steel-blue)]"
          >
            Contact Me
          </h2>
          <p className="text-[var(--text-secondary)] max-w-2xl mx-auto text-sm sm:text-base mt-2.5 font-light">
            Have a question or looking to discuss software engineering opportunities? Send me a message and let&apos;s talk.
          </p>
        </motion.div>

        {/* 2-Column Contact Grid (Reference Layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 items-start">
          
          {/* Left Column: Frosted Form Container with Icon Inputs (fade-right motion) */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 glass-panel rounded-3xl p-6 sm:p-10 border border-[var(--border-subtle)] shadow-2xl relative overflow-hidden"
          >
            {/* Ambient Accent Light */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-[var(--color-steel-blue)]/10 rounded-full blur-3xl pointer-events-none" />

            <div className="flex justify-between items-start mb-8 relative z-10">
              <div>
                <h3 className="text-2xl sm:text-3xl font-heading font-bold text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-cloud-white)] to-[var(--color-soft-ice-blue)]">
                  Get In Touch
                </h3>
                <p className="text-sm text-[var(--text-secondary)] mt-1 font-light">
                  Direct communication for technical collaboration and engineering roles.
                </p>
              </div>
              <div className="w-10 h-10 rounded-2xl bg-[var(--color-midnight-blue)] border border-[var(--border-subtle)] flex items-center justify-center text-[var(--color-steel-blue)] shrink-0">
                <Share2 className="w-5 h-5" />
              </div>
            </div>

            {isSubmitted ? (
              <div className="py-12 flex flex-col items-center text-center relative z-10">
                <div className="w-16 h-16 rounded-full bg-[var(--color-midnight-blue)] border border-[var(--color-steel-blue)] flex items-center justify-center text-[var(--color-soft-ice-blue)] mb-6 shadow-lg">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="font-heading font-bold text-2xl text-[var(--text-primary)] mb-2">
                  Message Transmitted Successfully
                </h4>
                <p className="text-sm text-[var(--text-secondary)] max-w-md font-light leading-relaxed mb-6">
                  Thank you for reaching out. Your dispatch has been received and I will respond to your email promptly.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({ name: "", email: "", message: "" });
                  }}
                  className="px-6 py-2.5 rounded-xl text-xs font-semibold bg-[var(--color-steel-blue)] text-[var(--color-cloud-white)] hover:bg-[var(--color-midnight-blue)] border border-[var(--color-soft-ice-blue)]/30 transition-all cursor-pointer shadow-md"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5 relative z-10">
                {/* Name Input with User Icon */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="relative group"
                >
                  <User className="absolute left-4 top-4 w-5 h-5 text-[var(--text-muted)] group-focus-within:text-[var(--color-soft-ice-blue)] transition-colors" />
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    disabled={isSubmitting}
                    className="w-full p-4 pl-12 bg-[var(--color-deep-navy)]/60 rounded-xl border border-[var(--border-subtle)] placeholder-[var(--text-muted)] text-[var(--text-primary)] focus:outline-none focus:border-[var(--color-steel-blue)] focus:ring-2 focus:ring-[var(--color-steel-blue)]/20 transition-all duration-300 hover:border-[var(--color-steel-blue)]/50 text-sm disabled:opacity-50"
                  />
                  {errors.name && (
                    <p className="mt-1 font-mono text-[11px] text-rose-300">{errors.name}</p>
                  )}
                </motion.div>

                {/* Email Input with Mail Icon */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="relative group"
                >
                  <Mail className="absolute left-4 top-4 w-5 h-5 text-[var(--text-muted)] group-focus-within:text-[var(--color-soft-ice-blue)] transition-colors" />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    disabled={isSubmitting}
                    className="w-full p-4 pl-12 bg-[var(--color-deep-navy)]/60 rounded-xl border border-[var(--border-subtle)] placeholder-[var(--text-muted)] text-[var(--text-primary)] focus:outline-none focus:border-[var(--color-steel-blue)] focus:ring-2 focus:ring-[var(--color-steel-blue)]/20 transition-all duration-300 hover:border-[var(--color-steel-blue)]/50 text-sm disabled:opacity-50"
                  />
                  {errors.email && (
                    <p className="mt-1 font-mono text-[11px] text-rose-300">{errors.email}</p>
                  )}
                </motion.div>

                {/* Message Textarea with MessageSquare Icon */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="relative group"
                >
                  <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-[var(--text-muted)] group-focus-within:text-[var(--color-soft-ice-blue)] transition-colors" />
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Your Message..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    disabled={isSubmitting}
                    className="w-full p-4 pl-12 bg-[var(--color-deep-navy)]/60 rounded-xl border border-[var(--border-subtle)] placeholder-[var(--text-muted)] text-[var(--text-primary)] focus:outline-none focus:border-[var(--color-steel-blue)] focus:ring-2 focus:ring-[var(--color-steel-blue)]/20 transition-all duration-300 hover:border-[var(--color-steel-blue)]/50 text-sm resize-none disabled:opacity-50"
                  />
                  {errors.message && (
                    <p className="mt-1 font-mono text-[11px] text-rose-300">{errors.message}</p>
                  )}
                </motion.div>

                {/* Submit Button (Exact Reference Styling) */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-[var(--color-steel-blue)] to-[var(--color-midnight-blue)] text-[var(--color-cloud-white)] py-4 rounded-xl font-semibold text-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_25px_rgba(74,127,167,0.35)] active:scale-[0.98] flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer border border-[var(--color-soft-ice-blue)]/30"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-4 h-4 border-2 border-[var(--color-cloud-white)] border-t-transparent rounded-full animate-spin" />
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </motion.div>
              </form>
            )}

            {/* Bottom Social Quick Links Strip */}
            <div className="mt-8 pt-6 border-t border-[var(--border-subtle)] flex items-center justify-center gap-6 relative z-10">
              <a
                href={DEVELOPER_PROFILE.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="w-10 h-10 rounded-full bg-[var(--color-midnight-blue)] border border-[var(--border-subtle)] flex items-center justify-center text-[var(--color-soft-ice-blue)] hover:text-[var(--color-cloud-white)] hover:border-[var(--color-steel-blue)] hover:scale-110 transition-all shadow-sm"
              >
                <GitHubIcon className="w-4 h-4" />
              </a>

              <a
                href={DEVELOPER_PROFILE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="w-10 h-10 rounded-full bg-[var(--color-midnight-blue)] border border-[var(--border-subtle)] flex items-center justify-center text-[var(--color-soft-ice-blue)] hover:text-[var(--color-cloud-white)] hover:border-[var(--color-steel-blue)] hover:scale-110 transition-all shadow-sm"
              >
                <LinkedInIcon className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${DEVELOPER_PROFILE.email}`}
                aria-label="Email Hawariya"
                className="w-10 h-10 rounded-full bg-[var(--color-midnight-blue)] border border-[var(--border-subtle)] flex items-center justify-center text-[var(--color-soft-ice-blue)] hover:text-[var(--color-cloud-white)] hover:border-[var(--color-steel-blue)] hover:scale-110 transition-all shadow-sm"
              >
                <Mail className="w-4 h-4" />
              </a>

              <a
                href={`tel:${DEVELOPER_PROFILE.phone}`}
                aria-label="Phone Hawariya"
                className="w-10 h-10 rounded-full bg-[var(--color-midnight-blue)] border border-[var(--border-subtle)] flex items-center justify-center text-[var(--color-soft-ice-blue)] hover:text-[var(--color-cloud-white)] hover:border-[var(--color-steel-blue)] hover:scale-110 transition-all shadow-sm"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Direct Reach Cards & Real-Time Status (fade-left motion) */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 space-y-4"
          >
            {/* Direct Email Card with One-Click Copy */}
            <div className="glass-panel rounded-3xl p-6 border border-[var(--border-subtle)] hover:border-[var(--color-steel-blue)] transition-all shadow-xl">
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 rounded-2xl bg-[var(--color-midnight-blue)] border border-[var(--border-subtle)] flex items-center justify-center">
                  <Mail className="w-5 h-5 text-[var(--color-soft-ice-blue)]" />
                </div>
                <button
                  type="button"
                  onClick={copyEmailToClipboard}
                  className="font-mono text-[11px] flex items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--color-midnight-blue)] text-[var(--color-soft-ice-blue)] hover:text-[var(--color-cloud-white)] border border-[var(--border-subtle)] transition-colors cursor-pointer"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
              <span className="font-mono text-[11px] text-[var(--text-muted)] tracking-wider uppercase block mb-1">
                Primary Email
              </span>
              <a
                href={`mailto:${DEVELOPER_PROFILE.email}`}
                className="font-heading font-semibold text-base sm:text-lg text-[var(--text-primary)] hover:text-[var(--color-soft-ice-blue)] transition-colors break-all"
              >
                {DEVELOPER_PROFILE.email}
              </a>
            </div>

            {/* Direct Telephone Card */}
            <div className="glass-panel rounded-3xl p-6 border border-[var(--border-subtle)] hover:border-[var(--color-steel-blue)] transition-all shadow-xl">
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 rounded-2xl bg-[var(--color-midnight-blue)] border border-[var(--border-subtle)] flex items-center justify-center">
                  <Phone className="w-5 h-5 text-[var(--color-soft-ice-blue)]" />
                </div>
                <a
                  href={`tel:${DEVELOPER_PROFILE.phone}`}
                  className="font-mono text-[11px] flex items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--color-midnight-blue)] text-[var(--color-soft-ice-blue)] hover:text-[var(--color-cloud-white)] border border-[var(--border-subtle)] transition-colors"
                >
                  <span>Direct Call</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
              <span className="font-mono text-[11px] text-[var(--text-muted)] tracking-wider uppercase block mb-1">
                Telephone Reach
              </span>
              <a
                href={`tel:${DEVELOPER_PROFILE.phone}`}
                className="font-heading font-semibold text-base sm:text-lg text-[var(--text-primary)] hover:text-[var(--color-soft-ice-blue)] transition-colors"
              >
                {DEVELOPER_PROFILE.phone}
              </a>
            </div>

            {/* Academic & Geographic Location Presence Card */}
            <div className="glass-panel rounded-3xl p-6 border border-[var(--border-subtle)] space-y-3 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[var(--color-midnight-blue)] border border-[var(--border-subtle)] flex items-center justify-center text-[var(--color-soft-ice-blue)]">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-sm text-[var(--text-primary)]">
                    Addis Ababa, Ethiopia
                  </h4>
                  <p className="font-mono text-[11px] text-[var(--text-muted)]">
                    Unity University · Computer Science
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-[var(--border-subtle)] flex items-center gap-2 font-mono text-xs text-[var(--color-soft-ice-blue)]">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                <span>Response Time &lt; 24h · Available for Interviews</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
