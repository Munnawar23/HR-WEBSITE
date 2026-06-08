"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@src/components/common/Button";
import { motion } from "framer-motion";

export function ContactUs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setName("");
      setEmail("");
      setMessage("");
      alert("Message received! Our team will contact you shortly.");
    }, 1000);
  };

  return (
    <section className="py-20 bg-white border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start"
        >
          {/* Info Details */}
          <div className="lg:col-span-5 space-y-8">
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-primary">
                Let's discuss your workforce needs
              </h2>
              <p className="text-xs sm:text-sm text-text-muted mt-2 leading-relaxed">
                Have questions about international payroll routing or standard compliance setups? Get in touch with our team.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-4 text-xs sm:text-sm">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-tag-bg flex items-center justify-center text-primary">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-primary">Email Us</h4>
                  <p className="text-text-muted">contact@peoplesync.com</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-tag-bg flex items-center justify-center text-primary">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-primary">Call Us</h4>
                  <p className="text-text-muted">+1 (555) 234-5678</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-tag-bg flex items-center justify-center text-primary">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-primary">Headquarters</h4>
                  <p className="text-text-muted">100 Pine Street, San Francisco, CA</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Form Card */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-7 bg-tag-bg/30 border border-border p-6 sm:p-10 rounded-3xl"
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-primary mb-1">Your Name</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="John Doe"
                  className="w-full px-3 py-2.5 border border-border rounded-xl text-xs sm:text-sm focus:outline-none focus:border-primary bg-white text-primary placeholder:text-text-muted/65"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-primary mb-1">Work Email</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="john@workplace.com"
                  className="w-full px-3 py-2.5 border border-border rounded-xl text-xs sm:text-sm focus:outline-none focus:border-primary bg-white text-primary placeholder:text-text-muted/65"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-primary mb-1">Message</label>
                <textarea
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="How can our implementation engineers help you?"
                  className="w-full px-3 py-2.5 border border-border rounded-xl text-xs sm:text-sm focus:outline-none focus:border-primary bg-white text-primary placeholder:text-text-muted/65"
                />
              </div>

              <Button type="submit" isLoading={loading} className="w-full justify-center">
                Send Message
              </Button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
