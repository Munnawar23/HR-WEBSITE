"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Briefcase, MapPin, Users } from "lucide-react";



const stats = [
  { icon: Briefcase, value: "100+", label: "Job Roles" },
  { icon: MapPin, value: "50+", label: "Cities" },
  { icon: Users, value: "5K+", label: "Candidates" },
];

export function Hero() {
  return (
    <section className="relative bg-white dark:bg-dark overflow-hidden min-h-[75vh] lg:min-h-[85vh] flex items-center py-8 lg:py-0">

      {/* Soft background blobs using brand colors */}
      <div
        className="absolute top-[-120px] right-[-120px] w-[520px] h-[520px] rounded-full opacity-[0.07] pointer-events-none"
        style={{ background: "radial-gradient(circle, #4f46e5, transparent 70%)" }}
      />
      <div
        className="absolute bottom-[-80px] left-[-80px] w-[380px] h-[380px] rounded-full opacity-[0.05] pointer-events-none"
        style={{ background: "radial-gradient(circle, #06b6d4, transparent 70%)" }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-8 lg:pt-12 lg:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">

          {/* ── LEFT COLUMN ── */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.14 } } }}
            className="flex flex-col gap-8"
          >
            {/* Badge */}
            <motion.div
              variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55 } } }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase border bg-tag-bg border-border-soft text-primary"
              >
                <span className="w-1.5 h-1.5 rounded-full animate-pulse bg-primary" />
                Top HR Platform in India
              </span>
            </motion.div>

            {/* Heading */}
            <motion.div
              variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.65 } } }}
              className="space-y-3"
            >
              <h1 className="text-[2.75rem] sm:text-5xl lg:text-[3.5rem] xl:text-[4rem] font-extrabold leading-[1.1] tracking-tight text-text-primary">
                Find the perfect job
                <br />
                <span className="relative inline-block">
                  <span style={{ color: "#4f46e5" }}>for your skills</span>
                  {/* Brush underline */}
                  <svg
                    className="absolute -bottom-2 left-0 w-full"
                    viewBox="0 0 360 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M4 10C70 5 180 3 356 6"
                      stroke="#06b6d4"
                      strokeWidth="8"
                      strokeLinecap="round"
                      opacity="0.7"
                    />
                  </svg>
                </span>
              </h1>
              <p className="text-base sm:text-lg text-text-muted max-w-md leading-relaxed font-medium">
                Browse thousands of curated opportunities from top companies and land your dream role — faster than ever.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55, delay: 0.1 } } }}
              className="flex flex-wrap gap-4"
            >
              <Link href="/apply">
                <span
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-white text-sm font-bold shadow-lg transition-all duration-200 hover:scale-[1.03] active:scale-[0.98]"
                  style={{
                    background: "linear-gradient(135deg, #4f46e5, #7c3aed)",
                    boxShadow: "0 8px 24px rgba(79,70,229,0.28)",
                  }}
                >
                  Apply for Role
                  <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
              <Link href="/hire">
                <span className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold border-2 transition-all duration-200 hover:bg-indigo-50 dark:hover:bg-indigo-950/40 text-primary border-primary"
                >
                  Hire a Talent
                </span>
              </Link>
            </motion.div>

            {/* Stats Row */}
            <motion.div
              variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55, delay: 0.2 } } }}
              className="flex items-center gap-8 pt-2"
            >
              {stats.map((s) => (
                <div key={s.label} className="flex items-center gap-2">
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center bg-tag-bg">
                    <s.icon className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <div className="text-text-primary font-extrabold text-base leading-none">{s.value}</div>
                    <div className="text-text-subtle text-xs mt-0.5">{s.label}</div>
                  </div>
                </div>
              ))}
            </motion.div>


          </motion.div>

          {/* ── RIGHT COLUMN: Image ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.85, ease: "easeOut", delay: 0.1 }}
            className="relative w-full"
          >
            {/* Decorative background card */}
            <div
              className="absolute -top-6 -right-6 w-full h-full rounded-3xl bg-linear-to-br from-[#eef2ff] to-[#f0fdfe] dark:from-dark-2 dark:to-[#121124]"
              style={{ zIndex: 0 }}
            />
            {/* Accent border card */}
            <div
              className="absolute -bottom-4 -left-4 w-full h-full rounded-3xl border-2 border-[#c7d2fe] dark:border-white/10"
              style={{ zIndex: 0 }}
            />

            {/* Main image */}
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl aspect-4/3 lg:aspect-auto lg:h-[520px]">
              <Image
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=900&q=85&auto=format&fit=crop"
                alt="Team of professionals collaborating"
                fill
                className="object-cover"
                priority
              />
              {/* Subtle gradient overlay at bottom */}
              <div className="absolute inset-0 bg-linear-to-t from-[#1e1b4b]/30 via-transparent to-transparent" />
            </div>

            {/* Floating badge — top left */}
            <motion.div
              initial={{ opacity: 0, scale: 0.75, y: 8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.45, ease: "easeOut" }}
              className="absolute -left-5 top-10 z-20 bg-white dark:bg-dark-2 rounded-2xl px-4 py-3 shadow-xl flex items-center gap-3 border border-border"
            >
              <div className="w-9 h-9 rounded-xl flex items-center justify-center bg-tag-bg">
                <Briefcase className="w-4 h-4 text-primary" />
              </div>
              <div>
                <div className="text-text-primary text-sm font-bold">100+ Job Roles</div>
              </div>
            </motion.div>

            {/* Floating badge — bottom right */}
            <motion.div
              initial={{ opacity: 0, scale: 0.75, y: 8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.45, ease: "easeOut" }}
              className="absolute -right-4 bottom-10 z-20 bg-white dark:bg-dark-2 rounded-2xl px-4 py-3 shadow-xl flex items-center gap-3 border border-border"
            >
              <div className="w-9 h-9 rounded-xl flex items-center justify-center bg-tag-bg">
                <Users className="w-4 h-4 text-secondary" />
              </div>
              <div>
                <div className="text-text-primary text-sm font-bold">500+ Hired</div>
                <div className="text-text-subtle text-xs">This month</div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

