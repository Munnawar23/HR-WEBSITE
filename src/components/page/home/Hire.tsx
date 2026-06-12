"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Briefcase, Users, Sparkles, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export function Hire() {
  return (
    <section id="hire" className="py-20 lg:py-28 bg-slate-50 dark:bg-dark-2 relative overflow-hidden">
      {/* Decorative background grids */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02] dark:opacity-[0.05]" style={{ backgroundImage: "radial-gradient(#4f46e5 1.5px, transparent 1.5px)", backgroundSize: "32px 32px" }} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20 flex flex-col items-center gap-5">
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase border w-fit bg-tag-bg border-border-soft text-primary"
          >
            <span className="w-1.5 h-1.5 rounded-full animate-pulse bg-primary" />
            Get Started Today
          </span>

          <h2 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold text-text-primary leading-[1.1] tracking-tight">
            Choose your path. <br className="hidden sm:inline" />
            Let's build your <span className="text-primary">future.</span>
          </h2>
          
          <p className="text-base sm:text-lg text-text-muted leading-relaxed max-w-xl">
            Whether you are looking to accelerate your career growth or hire elite talent to scale your operations, we have you covered.
          </p>
        </div>

        {/* Pathways Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          
          {/* Path 1: Looking for a Job */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="group relative bg-white dark:bg-dark border border-slate-100 dark:border-white/5 hover:border-indigo-100 dark:hover:border-indigo-500/30 p-8 sm:p-12 rounded-4xl flex flex-col justify-between transition-all duration-300 hover:shadow-[0_24px_50px_rgba(79,70,229,0.06)] overflow-hidden"
          >
            {/* Interactive Corner Accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-50/50 dark:bg-indigo-950/20 rounded-bl-[4rem] group-hover:bg-indigo-100/60 dark:group-hover:bg-indigo-900/30 transition-colors duration-300" />
            
            <div className="relative z-10">
              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-indigo-50 dark:bg-indigo-950/50 flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-8 group-hover:scale-110 transition-transform duration-300">
                <Briefcase className="w-6 h-6" />
              </div>

              {/* Title */}
              <h3 className="text-2xl sm:text-3xl font-extrabold text-text-primary mb-4">
                Looking for a job?
              </h3>
              
              {/* Short description */}
              <p className="text-text-muted text-sm sm:text-base leading-relaxed mb-8">
                Skip the generic job boards. Get matched directly with top tier tech, operations, and creative roles in high-growth companies.
              </p>

              {/* Bullet points */}
              <ul className="flex flex-col gap-3.5 mb-10">
                {[
                  "Direct connection with hiring managers",
                  "Fast-track application & feedback process",
                  "Expert resume & interview guidance",
                  "100% free placement for candidates"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm font-semibold text-text-muted">
                    <CheckCircle2 className="w-5 h-5 text-indigo-500 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Button */}
            <Link href="/apply" className="relative z-10">
              <span className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl text-sm font-bold text-white transition-all duration-200 group-hover:scale-[1.02] active:scale-[0.98] shadow-md bg-linear-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700">
                Submit Your Resume
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </span>
            </Link>
          </motion.div>

          {/* Path 2: Hire a Talent */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            className="group relative bg-white dark:bg-dark border border-slate-100 dark:border-white/5 hover:border-cyan-100 dark:hover:border-cyan-500/30 p-8 sm:p-12 rounded-4xl flex flex-col justify-between transition-all duration-300 hover:shadow-[0_24px_50px_rgba(6,182,212,0.06)] overflow-hidden"
          >
            {/* Interactive Corner Accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-50/50 dark:bg-cyan-950/20 rounded-bl-[4rem] group-hover:bg-cyan-100/60 dark:group-hover:bg-cyan-900/30 transition-colors duration-300" />
            
            <div className="relative z-10">
              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-cyan-50 dark:bg-cyan-950/50 flex items-center justify-center text-cyan-600 dark:text-cyan-400 mb-8 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-6 h-6" />
              </div>

              {/* Title */}
              <h3 className="text-2xl sm:text-3xl font-extrabold text-text-primary mb-4">
                Hire a talent
              </h3>
              
              {/* Short description */}
              <p className="text-text-muted text-sm sm:text-base leading-relaxed mb-8">
                Build your dream team. We connect you with pre-vetted professionals matching your technical requirements and culture perfectly.
              </p>

              {/* Bullet points */}
              <ul className="flex flex-col gap-3.5 mb-10">
                {[
                  "Access pre-vetted active talent pools",
                  "First qualified matches within 48 hours",
                  "Flexible hiring models (Full-time & Contract)",
                  "Risk-free recruitment assurance"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm font-semibold text-text-muted">
                    <CheckCircle2 className="w-5 h-5 text-cyan-500 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Button */}
            <Link href="#contact" className="relative z-10">
              <span className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl text-sm font-bold text-white transition-all duration-200 group-hover:scale-[1.02] active:scale-[0.98] shadow-md bg-linear-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700">
                Request Talent Profile
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </span>
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
