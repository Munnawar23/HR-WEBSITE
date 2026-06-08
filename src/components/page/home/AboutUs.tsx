"use client";

import React from "react";
import { Shield, Sparkles, Heart } from "lucide-react";
import { motion } from "framer-motion";

export function AboutUs() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
  };

  return (
    <section id="about" className="py-20 bg-white border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
        >
          {/* Text Info */}
          <div className="lg:col-span-7 space-y-6">
            <motion.h2 variants={itemVariants} className="text-3xl sm:text-4xl font-extrabold font-display text-primary leading-tight">
              A simplified platform built to respect your people.
            </motion.h2>
            <motion.p variants={itemVariants} className="text-sm sm:text-base text-text-muted leading-relaxed">
              We started PeopleSync because traditional HR platforms are clunky, slow, and overly administrative. Our mission is to build highly intuitive tools that make people management seamless, compliance automatic, and employee tracking stress-free.
            </motion.p>

            <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
              <div className="space-y-2">
                <h4 className="text-3xl font-extrabold text-secondary">99.8%</h4>
                <p className="text-xs font-bold text-primary uppercase tracking-wider">System Uptime</p>
                <p className="text-xs text-text-muted">Reliable global payroll delivery.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-3xl font-extrabold text-primary">24 Hours</h4>
                <p className="text-xs font-bold text-primary uppercase tracking-wider">Migration Promise</p>
                <p className="text-xs text-text-muted">Import all historic sheets seamlessly.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-3xl font-extrabold text-secondary">SOC 2</h4>
                <p className="text-xs font-bold text-primary uppercase tracking-wider">Certified Safe</p>
                <p className="text-xs text-text-muted">Bank-grade contract file vaults.</p>
              </div>
            </motion.div>
          </div>

          {/* Cards Graphics */}
          <div className="lg:col-span-5 space-y-4">
            <motion.div
              variants={itemVariants}
              className="bg-tag-bg/40 border border-border p-6 rounded-3xl flex gap-4 items-start"
            >
              <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-primary shrink-0 shadow-xs border border-border">
                <Heart className="w-5 h-5 text-secondary" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-primary">Designed for employees</h4>
                <p className="text-xs text-text-muted mt-1 leading-relaxed">
                  Fast self-service profiles, simplified holiday logs, and instant tax certificate downloads.
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-tag-bg/40 border border-border p-6 rounded-3xl flex gap-4 items-start"
            >
              <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-primary shrink-0 shadow-xs border border-border">
                <Shield className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-primary">Compliance guardrails</h4>
                <p className="text-xs text-text-muted mt-1 leading-relaxed">
                  Automatic state compliance checkers, dynamic tax withholdings, and localized employment templates.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
