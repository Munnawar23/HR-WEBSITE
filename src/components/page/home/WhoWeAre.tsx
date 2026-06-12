"use client";

import React, { useRef } from "react";
import { Trophy, Award, ShieldCheck, Target } from "lucide-react";
import { motion, useInView } from "framer-motion";

const achievements = [
  {
    icon: Trophy,
    number: "01",
    title: "Best Recruitment Partner",
    year: "2025",
    description:
      "National HR Association — excellence in tech placement & client retention.",
    accent: "#f59e0b",
    glow: "rgba(245,158,11,0.15)",
  },
  {
    icon: Award,
    number: "02",
    title: "Fastest Growing Agency",
    year: "2024",
    description:
      "Global HR Tech Summit — 300% year-on-year placement scaling.",
    accent: "#818cf8",
    glow: "rgba(129,140,248,0.15)",
  },
  {
    icon: ShieldCheck,
    number: "03",
    title: "Top Digital Consulting",
    year: "2024",
    description:
      "Brand Leaders Summit — employer branding & digital candidate acquisition.",
    accent: "#06b6d4",
    glow: "rgba(6,182,212,0.15)",
  },
  {
    icon: Target,
    number: "04",
    title: "98% Placement Accuracy",
    year: "2023",
    description:
      "Lowest candidate replacement rate across tech and leadership hiring.",
    accent: "#34d399",
    glow: "rgba(52,211,153,0.15)",
  },
];

export function WhoWeAre() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-12 lg:py-16 bg-white dark:bg-dark overflow-hidden"
    >
      {/* ─── Ambient glows ─── */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full bg-indigo-500/5 blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[400px] rounded-full bg-cyan-500/5 blur-[100px]" />
      </div>

      {/* ─── Vertical editorial line (desktop) ─── */}
      <div className="pointer-events-none absolute left-1/2 top-0 hidden lg:block h-full w-px bg-linear-to-b from-transparent via-border-soft dark:via-white/5 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ─── Header ─── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-end mb-10 lg:mb-12">
          {/* Left: Badge + Heading */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-6"
          >
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase border bg-tag-bg border-border-soft text-primary w-fit">
                <span className="w-1.5 h-1.5 rounded-full animate-pulse bg-primary" />
                Who We Are
              </span>
            </div>

            <h2 className="text-5xl sm:text-6xl lg:text-[4rem] font-extrabold leading-[1.05] tracking-tight text-text-primary">
              A legacy of
              <br />
              <span className="relative inline-block">
                <span className="text-primary">trust</span>
                <span className="text-text-primary">,</span>
                {/* underline stroke */}
                <motion.span
                  className="absolute left-0 -bottom-1 h-[3px] rounded-full bg-linear-to-r from-primary to-secondary"
                  initial={{ scaleX: 0, originX: 0 }}
                  animate={isInView ? { scaleX: 1 } : {}}
                  transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  style={{ width: "100%" }}
                />
              </span>
              <br />
              driven by{" "}
              <span className="bg-linear-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                excellence.
              </span>
            </h2>
          </motion.div>

          {/* Right: Description */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.75, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-10"
          >
            <p className="text-base sm:text-lg text-text-muted leading-relaxed max-w-lg">
              PeopleSync is a premier digital consulting and talent acquisition
              agency. We bridge top-tier professionals with high-growth
              organizations — backed by industry-recognized service quality and
              years of collective expertise.
            </p>
          </motion.div>
        </div>

        {/* ─── Awards section label ─── */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex items-center gap-4 mb-12"
        >
          <div className="h-px flex-1 bg-linear-to-r from-border-soft dark:from-white/5 to-transparent" />
          <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-text-subtle">
            Awards & Recognition
          </span>
          <div className="h-px flex-1 bg-linear-to-l from-border-soft dark:from-white/5 to-transparent" />
        </motion.div>

        {/* ─── Awards Grid ─── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
          {achievements.map((item, idx) => (
            <AwardCard key={idx} item={item} idx={idx} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Award Card sub-component ─── */
function AwardCard({
  item,
  idx,
  isInView,
}: {
  item: (typeof achievements)[0];
  idx: number;
  isInView: boolean;
}) {
  const Icon = item.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.7,
        delay: 0.55 + idx * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative rounded-3xl overflow-hidden border border-border-soft dark:border-white/5 bg-light dark:bg-dark-2 p-7 sm:p-9 cursor-default"
      style={{ "--accent": item.accent, "--glow": item.glow } as React.CSSProperties}
    >
      {/* Hover accent glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: `radial-gradient(ellipse at 20% 50%, ${item.glow} 0%, transparent 70%)` }}
      />

      {/* Top-right number */}
      <span
        className="absolute top-6 right-7 text-6xl font-black opacity-[0.06] group-hover:opacity-[0.1] transition-opacity duration-300 select-none leading-none"
        style={{ color: item.accent }}
      >
        {item.number}
      </span>

      <div className="relative z-10 flex flex-col gap-5">
        {/* Year pill + Icon row */}
        <div className="flex items-center justify-between">
          <div
            className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110"
            style={{ backgroundColor: item.glow }}
          >
            <Icon className="w-5 h-5" style={{ color: item.accent }} />
          </div>
          <span
            className="text-xs font-bold px-3 py-1 rounded-full"
            style={{
              backgroundColor: item.glow,
              color: item.accent,
              letterSpacing: "0.1em",
            }}
          >
            {item.year}
          </span>
        </div>

        {/* Title */}
        <div className="flex flex-col gap-2">
          <h3 className="text-xl sm:text-2xl font-extrabold text-text-primary leading-tight group-hover:text-primary transition-colors duration-200">
            {item.title}
          </h3>
          <p className="text-sm text-text-muted leading-relaxed">
            {item.description}
          </p>
        </div>

        {/* Bottom accent line */}
        <motion.div
          className="h-[2px] rounded-full w-0 group-hover:w-full transition-all duration-500"
          style={{ backgroundColor: item.accent }}
        />
      </div>
    </motion.div>
  );
}
