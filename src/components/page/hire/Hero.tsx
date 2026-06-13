"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Sparkles } from "lucide-react";

const FLOATING_TAGS = [
  { label: "Top 1% Talent", delay: 0 },
  { label: "48h Shortlist", delay: 0.3 },
  { label: "Pre-Vetted", delay: 0.6 },
  { label: "Zero Risk", delay: 0.9 },
  { label: "All Industries", delay: 1.2 },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-linear-to-br from-dark via-dark-2 to-dark-3 py-16 sm:py-24 lg:py-32">
      {/* Background image */}
      <div className="absolute inset-0 opacity-20">
        <Image
          src="/hire-hero-bg.png"
          alt="Abstract background"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      {/* Glowing blobs */}
      <div className="absolute -top-10 sm:-top-20 -left-10 sm:-left-20 w-64 sm:w-80 h-64 sm:h-80 rounded-full bg-cyan-600/20 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 sm:-bottom-20 -right-6 sm:-right-12 w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-indigo-500/10 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center gap-5 sm:gap-6 lg:gap-8">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-widest bg-cyan-500/15 border border-cyan-500/30 text-cyan-300"
        >
          <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
          For Companies
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="font-display font-extrabold text-3xl sm:text-5xl lg:text-7xl text-white leading-[1.1] sm:leading-tight max-w-4xl"
          style={{ color: "#ffffff" }}
        >
          Hire the{" "}
          <span className="bg-linear-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent block sm:inline">
            Perfect Candidate
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-sm sm:text-base lg:text-lg text-cyan-200/70 max-w-2xl leading-relaxed px-2 sm:px-0"
        >
          Tell us about the role you need filled. We'll match you with
          pre-vetted, top-tier professionals — fast.
        </motion.p>

        {/* Floating tags */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-4 sm:mt-6"
        >
          {FLOATING_TAGS.map((tag) => (
            <motion.span
              key={tag.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 + tag.delay, type: "spring", stiffness: 200 }}
              className="px-2.5 sm:px-4 py-1 sm:py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] sm:text-xs lg:text-sm text-cyan-200 font-medium whitespace-nowrap"
            >
              ✦ {tag.label}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
