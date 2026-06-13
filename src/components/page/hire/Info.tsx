"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ShieldCheck, Zap, Globe, Award } from "lucide-react";

export function Info() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="flex flex-col gap-6 sm:gap-8 lg:sticky lg:top-28"
    >
      {/* Illustration */}
      <div className="relative rounded-3xl overflow-hidden bg-linear-to-br from-cyan-50 to-blue-50 dark:from-dark-2 dark:to-dark-3 border border-border dark:border-white/10 p-6 flex items-center justify-center min-h-[220px] sm:min-h-[280px]">
        <div className="absolute top-4 right-4 w-12 sm:w-16 h-12 sm:h-16 rounded-full bg-cyan-500/10 blur-xl" />
        <div className="absolute bottom-4 left-4 w-8 sm:w-12 h-8 sm:h-12 rounded-full bg-indigo-500/10 blur-xl" />
        <Image
          src="/hire-illustration.png"
          alt="Hire top talent illustration"
          width={300}
          height={260}
          className="object-contain relative z-10 drop-shadow-xl w-[200px] sm:w-[250px] lg:w-[300px]"
        />
      </div>

      {/* Info cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 sm:gap-5">
        {[
          {
            icon: <Zap className="w-5 h-5 text-cyan-500" />,
            title: "Lightning Fast",
            desc: "Get shortlisted candidates as soon as possible.",
          },
          {
            icon: <ShieldCheck className="w-5 h-5 text-emerald-500" />,
            title: "Pre-Vetted Talent",
            desc: "Every candidate is thoroughly screened for skills and culture fit.",
          },
          {
            icon: <Globe className="w-5 h-5 text-indigo-500" />,
            title: "Pan-India Network",
            desc: "Access talent across 50+ cities and all major industries.",
          },
          {
            icon: <Award className="w-5 h-5 text-amber-500" />,
            title: "Risk-Free Process",
            desc: "Pay only upon successful placement of a candidate.",
          },
        ].map((card, i) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 + i * 0.1 }}
            className="flex items-start gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white dark:bg-dark-2 border border-border dark:border-white/8 shadow-sm hover:shadow-md hover:border-cyan-200 dark:hover:border-cyan-500/30 transition-all duration-200"
          >
            <div className="w-9 sm:w-10 h-9 sm:h-10 rounded-xl bg-gray-50 dark:bg-dark-3 flex items-center justify-center shrink-0">
              {card.icon}
            </div>
            <div>
              <p className="font-semibold text-sm sm:text-base text-text-primary">{card.title}</p>
              <p className="text-xs sm:text-sm text-text-muted mt-0.5 sm:mt-1 leading-relaxed">{card.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
