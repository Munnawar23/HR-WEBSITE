"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@src/components/common/Button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
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
    <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
        >
          {/* Hero Text */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-tag-bg border border-border">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
              <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                The future of HR is here
              </span>
            </motion.div>
            <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-display leading-[1.15] text-primary tracking-tight">
              Manage your people, payroll & culture in <span className="text-secondary">one place.</span>
            </motion.h1>
            <motion.p variants={itemVariants} className="text-base sm:text-lg lg:text-xl text-text-muted max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Streamline operations, automate onboarding, manage talent, and delight your team with our all-in-one HR platform built for modern workspaces.
            </motion.p>
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href="/signup">
                <Button variant="primary" size="lg" className="w-full sm:w-auto" rightIcon={<ArrowRight className="w-4 h-4" />}>
                  Start Free Trial
                </Button>
              </Link>
              <Link href="/solutions">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  Book Demo
                </Button>
              </Link>
            </motion.div>
          </div>

          {/* Hero Interactive Widget */}
          <motion.div
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" as const, delay: 0.3 } },
            }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none p-8 rounded-3xl bg-white border border-border shadow-2xl transition-all duration-300">
              <div className="flex justify-between items-center pb-6 border-b border-border">
                <div>
                  <h3 className="font-display font-bold text-lg text-primary">Team Growth</h3>
                  <p className="text-xs text-text-muted font-medium">Active members this month</p>
                </div>
                <span className="text-xs font-bold text-secondary bg-secondary/10 px-2.5 py-1 rounded-full">
                  +18.4%
                </span>
              </div>
              
              <div className="py-6 space-y-4">
                <div className="flex items-center justify-between p-3 rounded-2xl bg-tag-bg/50 border border-border/40">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-secondary/20 text-secondary font-display font-bold flex items-center justify-center">
                      JD
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-primary">Jane Doe</h4>
                      <p className="text-xs text-text-muted font-medium">Senior Product Designer</p>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-green-600 bg-green-50 px-2.5 py-1 rounded-full">Onboarded</span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-2xl bg-tag-bg/50 border border-border/40">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary font-display font-bold flex items-center justify-center">
                      JS
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-primary">John Smith</h4>
                      <p className="text-xs text-text-muted font-medium">VP of Engineering</p>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-amber-600 bg-amber-50 px-2.5 py-1 rounded-full">Pending</span>
                </div>
              </div>

              <div className="pt-4 border-t border-border flex items-center justify-between">
                <span className="text-xs text-text-muted font-semibold">Payroll Status</span>
                <span className="text-xs font-semibold text-primary">Approved &bull; May 2026</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
