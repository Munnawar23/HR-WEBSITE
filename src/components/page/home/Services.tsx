"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import {
  ArrowRight,
  Award,
  TrendingUp,
  Briefcase,
  Target,
  Users,
  Megaphone,
  Search,
} from "lucide-react";

const recruitmentTags = [
  "Executive Search",
  "Direct Hire",
  "Talent Pipelines",
  "Skills Vetting",
  "Onboarding",
  "Leadership Roles",
];

const marketingTags = [
  "Employer Branding",
  "Digital Campaigns",
  "Social Strategy",
  "Content Creation",
  "Lead Generation",
  "Brand Positioning",
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const fadeRight: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export function Services() {
  return (
    <section id="services" className="bg-white dark:bg-dark py-20 lg:py-28 space-y-16 overflow-hidden">

      {/* ── SECTION INTRO ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 lg:gap-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="max-w-2xl"
          >
            <span
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase border bg-tag-bg border-border-soft text-primary mb-6"
            >
              <span className="w-1.5 h-1.5 rounded-full animate-pulse bg-primary" />
              What We Do
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold text-text-primary leading-[1.1] tracking-tight">
              Two forces.<br />
              <span className="text-primary">One mission</span> — to grow your business.
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.15 }}
            className="text-base text-text-muted leading-relaxed max-w-sm lg:text-right lg:pb-2"
          >
            We specialise in elite talent acquisition and high-impact marketing strategies — the two pillars that define competitive, scalable organisations.
          </motion.p>
        </div>

        {/* Thin rule */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
          style={{ transformOrigin: "left" }}
          className="mt-8 h-px bg-border"
        />
      </div>

      {/* ── PILLAR 01: RECRUITMENT ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">

          {/* Left: Image block */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="relative"
          >
            {/* Large number watermark */}
            <div
              className="absolute -top-8 -left-4 text-[9rem] font-black leading-none select-none pointer-events-none text-primary/10"
            >
              01
            </div>

            {/* Main image */}
            <div className="relative rounded-3xl overflow-hidden aspect-3/2">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&q=85&auto=format&fit=crop"
                alt="Recruitment specialist in action"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
              {/* Dark gradient overlay */}
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(160deg, transparent 40%, #1e1b4b88 100%)" }}
              />
              {/* Overlay badge */}
              <div className="absolute bottom-6 left-6 right-6">
                <div
                  className="inline-flex items-center gap-2.5 bg-white/95 dark:bg-dark-2/95 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-xl border border-white/20 dark:border-white/10"
                >
                  <Award className="w-5 h-5 text-amber-500 shrink-0" />
                  <div>
                    <div className="text-xs font-extrabold text-text-primary">98% Placement Rate</div>
                    <div className="text-[10px] text-text-subtle">consistently, year over year</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating stat — top right */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 10 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="absolute -right-6 top-16 bg-white dark:bg-dark-2 rounded-2xl px-5 py-4 shadow-2xl border border-border z-10"
            >
              <div className="text-3xl font-black text-primary leading-none">5K+</div>
              <div className="text-xs font-semibold text-text-muted mt-1">Candidates Placed</div>
            </motion.div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="flex flex-col gap-5"
          >
            {/* Number label */}
            <div className="flex items-center gap-4">
              <span
                className="text-xs font-black tracking-[0.2em] uppercase text-primary"
              >
                Pillar 01
              </span>
              <div className="h-px flex-1 bg-border" />
            </div>

            <h3 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-extrabold text-text-primary leading-[1.15] tracking-tight">
              Elite{" "}
              <span className="relative">
                Recruitment
                <svg
                  className="absolute -bottom-1.5 left-0 w-full"
                  viewBox="0 0 240 10"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <path d="M2 7C50 3 130 2 238 5" stroke="#4f46e5" strokeWidth="5" strokeLinecap="round" opacity="0.35" />
                </svg>
              </span>
            </h3>

            <p className="text-base text-text-muted leading-relaxed">
              We bridge the gap between world-class talent and high-growth organisations. Our end-to-end search process is data-driven, culturally sensitive, and built for speed — from the first brief to the signed offer.
            </p>

            {/* Tag cloud */}
            <div className="flex flex-wrap gap-2.5">
              {recruitmentTags.map((tag) => (
                <span
                  key={tag}
                  className="px-3.5 py-1.5 rounded-full text-xs font-bold border bg-tag-bg border-border-soft text-primary transition-all duration-200 hover:scale-105 cursor-default"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Divider */}
            <div className="h-px bg-border" />

            {/* Metrics row */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { val: "100+", label: "Job Roles" },
                { val: "50+", label: "Cities" },
                { val: "48h", label: "Avg. Response" },
              ].map((m) => (
                <div key={m.label}>
                  <div className="text-2xl font-extrabold text-text-primary">{m.val}</div>
                  <div className="text-xs font-semibold text-text-subtle mt-0.5">{m.label}</div>
                </div>
              ))}
            </div>

            <Link href="#hire">
              <span
                className="group/cta inline-flex items-center gap-3 px-7 py-3.5 rounded-xl text-sm font-bold text-white transition-all duration-200 hover:scale-[1.03] active:scale-[0.98] shadow-lg"
                style={{ background: "linear-gradient(135deg, #4f46e5, #7c3aed)", boxShadow: "0 8px 24px rgba(79,70,229,0.28)" }}
              >
                Find a job
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover/cta:translate-x-1" />
              </span>
            </Link>
          </motion.div>

        </div>
      </div>

      {/* ── THIN SEPARATOR ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-px bg-border" />
      </div>

      {/* ── PILLAR 02: MARKETING ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">

          {/* Left: Content (reversed order) */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="flex flex-col gap-5 lg:order-1"
          >
            {/* Number label */}
            <div className="flex items-center gap-4">
              <span
                className="text-xs font-black tracking-[0.2em] uppercase text-secondary"
              >
                Pillar 02
              </span>
              <div className="h-px flex-1 bg-border" />
            </div>

            <h3 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-extrabold text-text-primary leading-[1.15] tracking-tight">
              Strategic{" "}
              <span className="relative">
                Marketing
                <svg
                  className="absolute -bottom-1.5 left-0 w-full"
                  viewBox="0 0 220 10"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <path d="M2 7C46 3 120 2 218 5" stroke="#06b6d4" strokeWidth="5" strokeLinecap="round" opacity="0.35" />
                </svg>
              </span>
            </h3>

            <p className="text-base text-text-muted leading-relaxed">
              We craft narratives that command attention and build authority. From digital campaigns to employer branding that turns heads and attracts elite candidates — we put your brand exactly where it needs to be.
            </p>

            {/* Tag cloud */}
            <div className="flex flex-wrap gap-2.5">
              {marketingTags.map((tag) => (
                <span
                  key={tag}
                  className="px-3.5 py-1.5 rounded-full text-xs font-bold border bg-cyan-50 dark:bg-cyan-950/20 text-cyan-600 dark:text-cyan-400 border-cyan-100 dark:border-cyan-900/30 transition-all duration-200 hover:scale-105 cursor-default"
                >
                  {tag}
                </span>
              ))}
            </div>


            <Link href="#contact">
              <span
                className="group/cta inline-flex items-center gap-3 px-7 py-3.5 rounded-xl text-sm font-bold text-white transition-all duration-200 hover:scale-[1.03] active:scale-[0.98] shadow-lg"
                style={{ background: "linear-gradient(135deg, #06b6d4, #0284c7)", boxShadow: "0 8px 24px rgba(6,182,212,0.28)" }}
              >
                Grow Your Brand
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover/cta:translate-x-1" />
              </span>
            </Link>
          </motion.div>

          {/* Right: Image block */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="relative lg:order-2"
          >
            {/* Large number watermark */}
            <div
              className="absolute -top-8 -right-4 text-[9rem] font-black leading-none select-none pointer-events-none text-right text-secondary/10"
            >
              02
            </div>

            {/* Main image */}
            <div className="relative rounded-3xl overflow-hidden aspect-3/2">
              <Image
                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=900&q=85&auto=format&fit=crop"
                alt="Marketing strategy and analytics"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(160deg, transparent 40%, #06402888 100%)" }}
              />
              {/* Overlay badge */}
              <div className="absolute bottom-6 left-6 right-6">
                <div
                  className="inline-flex items-center gap-2.5 bg-white/95 dark:bg-dark-2/95 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-xl border border-white/20 dark:border-white/10"
                >
                  <TrendingUp className="w-5 h-5 text-emerald-500 shrink-0" />
                  <div>
                    <div className="text-xs font-extrabold text-text-primary">3× Average Brand Reach</div>
                    <div className="text-[10px] text-text-subtle">across all managed campaigns</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating stat — top left */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 10 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="absolute -left-6 top-16 bg-white dark:bg-dark-2 rounded-2xl px-5 py-4 shadow-2xl border border-border z-10"
            >
              <div className="text-3xl font-black text-secondary leading-none">99%</div>
              <div className="text-xs font-semibold text-text-muted mt-1">Client Satisfaction</div>
            </motion.div>
          </motion.div>

        </div>
      </div>


    </section>
  );
}
