"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Sparkles } from "lucide-react";

const FLOATING_TAGS = [
  { label: "Full-time", delay: 0 },
  { label: "Remote OK", delay: 0.3 },
  { label: "Competitive Pay", delay: 0.6 },
  { label: "Growth Culture", delay: 0.9 },
  { label: "Great Team", delay: 1.2 },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-linear-to-br from-dark via-dark-2 to-dark-3 py-24">
      {/* Background image */}
      <div className="absolute inset-0 opacity-20">
        <Image
          src="/apply-hero-bg.png"
          alt="Abstract background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Glowing blobs */}
      <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full bg-indigo-600/20 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -right-12 w-96 h-96 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center gap-6">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-indigo-500/15 border border-indigo-500/30 text-indigo-300"
        >
          <Sparkles className="w-3.5 h-3.5" />
          Join Our Team
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white leading-tight max-w-3xl"
          style={{ color: "#ffffff" }}
        >
          Apply for Your{" "}
          <span className="bg-linear-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Dream Role
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-base sm:text-lg text-indigo-200/70 max-w-xl leading-relaxed"
        >
          Take the first step toward a fulfilling career. Fill in the details below
          and our team will get back to you shortly.
        </motion.p>

        {/* Floating tags */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-2 mt-2"
        >
          {FLOATING_TAGS.map((tag) => (
            <motion.span
              key={tag.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 + tag.delay, type: "spring", stiffness: 200 }}
              className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-indigo-200 font-medium"
            >
              ✦ {tag.label}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
