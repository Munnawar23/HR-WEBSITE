"use client";

import React from "react";
import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";

const feedbackList = [
  {
    name: "Amit Patel",
    role: "B.Tech Graduate",
    company: "TCS",
    avatar: "",
    rating: 5,
    comment:
      "Honestly, I was struggling to find job opportunities after graduation. I just filled up the contact form here, got a call back within 2 days, and cleared my interview at TCS last month!",
    companyLogo: "TC",
    accentColor: "from-blue-500 to-indigo-600",
    themeColor: "#3b82f6",
  },
  {
    name: "Priya Sharma",
    role: "MCA Student",
    company: "Wipro",
    avatar: "",
    rating: 5,
    comment:
      "I uploaded my resume through this website. The placement team guided me very well throughout the hiring rounds. Very happy with the support.",
    companyLogo: "WP",
    accentColor: "from-indigo-500 to-purple-600",
    themeColor: "#6366f1",
  },
  {
    name: "Rohan Das",
    role: "Frontend Developer",
    company: "Razorpay",
    avatar: "",
    rating: 5,
    comment:
      "Very simple process. I filled out the application details on the website, got a call from their recruitment specialist, and within a week, I had a job offer in hand!",
    companyLogo: "RP",
    accentColor: "from-emerald-500 to-teal-600",
    themeColor: "#10b981",
  },
  {
    name: "Sneha Reddy",
    role: "Marketing Associate",
    company: "Swiggy",
    avatar: "",
    rating: 5,
    comment:
      "This platform is very helpful for freshers. They matched my profile with the right marketing jobs and arranged interviews quickly. Got placed at Swiggy!",
    companyLogo: "SG",
    accentColor: "from-orange-500 to-red-600",
    themeColor: "#f97316",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-white dark:bg-dark relative overflow-hidden">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 lg:h-[80vh] lg:max-h-[700px] items-stretch">
          
          {/* Left Column: Sticky Header details */}
          <div className="lg:col-span-5 lg:h-full lg:flex lg:flex-col lg:justify-center gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col gap-5"
            >
              <span
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase border w-fit bg-tag-bg border-border-soft text-primary"
              >
                <span className="w-1.5 h-1.5 rounded-full animate-pulse bg-primary" />
                Wall of Fame
              </span>

              <h2 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold text-text-primary leading-[1.1] tracking-tight">
                Stories of success, <span className="text-primary">driven by results.</span>
              </h2>

              <p className="text-base sm:text-lg text-text-muted leading-relaxed">
                See how students and freshers started their careers simply by filling out our application form and getting matched with top companies.
              </p>
            </motion.div>

            {/* Overall Rating Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="mt-4 bg-slate-50 dark:bg-dark-2 border border-slate-100 dark:border-white/5 rounded-3xl p-6 flex items-center justify-between gap-6"
            >
              <div className="flex flex-col gap-1">
                <span className="text-3xl font-black text-text-primary">4.9</span>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-amber-400 fill-current" />
                  ))}
                </div>
                <span className="text-xs text-text-subtle font-semibold mt-1">Average Partner Rating</span>
              </div>
              <div className="h-12 w-px bg-slate-200 dark:bg-white/10" />
              <div className="flex flex-col gap-1">
                <span className="text-3xl font-black text-primary">2.4k+</span>
                <span className="text-xs text-text-subtle font-semibold">Active Placements</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Beautiful Editorial Stacked Cards */}
          <div className="lg:col-span-7 lg:h-full lg:overflow-y-auto pr-3 lg:py-2 flex flex-col gap-6 style-scrollbar">
            <style jsx global>{`
              .style-scrollbar::-webkit-scrollbar {
                width: 6px;
              }
              .style-scrollbar::-webkit-scrollbar-track {
                background: transparent;
              }
              .style-scrollbar::-webkit-scrollbar-thumb {
                background: #cbd5e1;
                border-radius: 9999px;
              }
              .style-scrollbar::-webkit-scrollbar-thumb:hover {
                background: #94a3b8;
              }
            `}</style>
            {feedbackList.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: "easeOut" }}
                className="group relative bg-white dark:bg-dark-2 border border-slate-100 dark:border-white/5 hover:border-slate-200/80 dark:hover:border-white/10 p-8 rounded-3xl transition-all duration-300 hover:shadow-md"
              >
                {/* Visual marker inside card */}
                <div 
                  className="absolute left-0 top-10 w-1.5 h-10 rounded-r-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ backgroundColor: item.themeColor }}
                />

                {/* Quote Icon */}
                <div className="flex items-center justify-between mb-6">
                  <div 
                    className="w-12 h-12 rounded-2xl flex items-center justify-center bg-slate-50 dark:bg-dark/50 group-hover:bg-indigo-50/50 dark:group-hover:bg-indigo-950/20 transition-colors duration-300"
                  >
                    <Quote className="w-5 h-5 text-indigo-400" />
                  </div>
                </div>

                {/* Testimonial body */}
                <p className="text-lg text-text-primary font-medium leading-relaxed mb-8 select-all">
                  "{item.comment}"
                </p>

                {/* Author Info block */}
                <div className="flex items-center justify-between gap-4 pt-6 border-t border-slate-50 dark:border-white/5">
                  <div className="flex items-center gap-3.5">
                    <div>
                      <h4 className="font-extrabold text-sm text-text-primary group-hover:text-primary transition-colors">
                        {item.name}
                      </h4>
                      <p className="text-xs text-text-muted font-medium mt-0.5">
                        {item.role}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
