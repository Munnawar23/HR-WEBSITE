"use client";

import React from "react";
import { Briefcase, DollarSign, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

export function Services() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
  };

  const servicesList = [
    {
      icon: <Briefcase className="w-6 h-6 text-white" />,
      title: "Smart Recruiting",
      color: "bg-primary",
      description:
        "Publish job positions instantly, track candidates through custom visual pipelines, and manage offer letters automatically.",
    },
    {
      icon: <DollarSign className="w-6 h-6 text-primary" />,
      title: "Automated Payroll",
      color: "bg-secondary",
      description:
        "Run compliant global payrolls in clicks. Handle tax deductions, direct deposits, and compliance effortlessly.",
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-white" />,
      title: "Performance & Culture",
      color: "bg-primary",
      description:
        "Foster alignment with periodic 360 review workflows, employee goal tracking (OKRs), and pulse surveys.",
    },
  ];

  return (
    <section id="services" className="py-20 bg-white border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-primary">
            Unified tools for scaling teams
          </h2>
          <p className="text-sm sm:text-base text-text-muted">
            Handle all stages of the employee lifecycle in one simple, integrated HR hub.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {servicesList.map((srv, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className="p-8 rounded-3xl bg-tag-bg/30 border border-border space-y-6 hover:shadow-lg transition-all duration-300"
            >
              <div className={`w-12 h-12 rounded-2xl ${srv.color} flex items-center justify-center shadow-sm`}>
                {srv.icon}
              </div>
              <h3 className="text-xl font-bold font-display text-primary">{srv.title}</h3>
              <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
                {srv.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
