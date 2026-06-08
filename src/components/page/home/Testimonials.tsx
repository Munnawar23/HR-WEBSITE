"use client";

import React from "react";
import { Star } from "lucide-react";
import { motion } from "framer-motion";

export function Testimonials() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
  };

  const feedbackList = [
    {
      name: "Marcus Aurelius",
      role: "VP Operations & Finance",
      company: "SpaceBound Corp",
      rating: 5,
      comment:
        "PeopleSync saved our operations team over 15 hours every single week. Onboarding contracts takes under five minutes, and compliance is completely automated.",
    },
    {
      name: "Sarah Jenkins",
      role: "Head of Talent Management",
      company: "DesignGrid",
      rating: 5,
      comment:
        "Our employees absolute love the self-service portal. Calculating global payouts and managing vacation pools has never been this stress-free.",
    },
  ];

  return (
    <section className="py-20 bg-white border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-primary">
            Loved by modern workplaces
          </h2>
          <p className="text-sm sm:text-base text-text-muted">
            Hear from operations directors, business founders, and HR leaders scaling their cultures.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
        >
          {feedbackList.map((item, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className="bg-tag-bg/30 border border-border p-8 rounded-3xl space-y-6 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex gap-1 text-secondary">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <p className="text-xs sm:text-sm md:text-base text-primary italic leading-relaxed">
                "{item.comment}"
              </p>
              <div className="h-px bg-border" />
              <div>
                <h4 className="font-bold text-primary text-sm sm:text-base">{item.name}</h4>
                <p className="text-xs text-text-muted">
                  {item.role} &bull; {item.company}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
