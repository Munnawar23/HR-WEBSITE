"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle, Star, Briefcase } from "lucide-react";

export function Info() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="lg:col-span-2 flex flex-col gap-8 lg:sticky lg:top-28"
    >
      {/* Illustration */}
      <div className="relative rounded-3xl overflow-hidden bg-linear-to-br from-indigo-50 to-purple-50 dark:from-dark-2 dark:to-dark-3 border border-border dark:border-white/10 p-6 flex items-center justify-center min-h-[280px]">
        <div className="absolute top-4 right-4 w-16 h-16 rounded-full bg-indigo-500/10 blur-xl" />
        <div className="absolute bottom-4 left-4 w-12 h-12 rounded-full bg-cyan-500/10 blur-xl" />
        <Image
          src="/apply-illustration.png"
          alt="Apply for a role illustration"
          width={300}
          height={260}
          className="object-contain relative z-10 drop-shadow-xl"
        />
      </div>

      {/* Info cards */}
      {[
        {
          icon: <CheckCircle className="w-5 h-5 text-emerald-500" />,
          title: "Quick Review",
          desc: "We are receiving applications every hour.",
        },
        {
          icon: <Star className="w-5 h-5 text-amber-500" />,
          title: "Smart Matching",
          desc: "Get paired with roles that align with your true potential.",
        },
        {
          icon: <Briefcase className="w-5 h-5 text-indigo-500" />,
          title: "Multiple Roles",
          desc: "Openings across HR, Marketing & Business Development.",
        },
      ].map((card, i) => (
        <motion.div
          key={card.title}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 + i * 0.1 }}
          className="flex items-start gap-4 p-5 rounded-2xl bg-white dark:bg-dark-2 border border-border dark:border-white/8 shadow-sm hover:shadow-md hover:border-indigo-200 dark:hover:border-indigo-500/30 transition-all duration-200"
        >
          <div className="w-10 h-10 rounded-xl bg-gray-50 dark:bg-dark-3 flex items-center justify-center shrink-0">
            {card.icon}
          </div>
          <div>
            <p className="font-semibold text-sm text-text-primary">{card.title}</p>
            <p className="text-xs text-text-muted mt-0.5 leading-relaxed">{card.desc}</p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
