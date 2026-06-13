"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface InputFieldProps {
  id: string;
  label: string;
  icon: React.ReactNode;
  error?: string;
  children: React.ReactNode;
}

export function InputField({ id, label, icon, error, children }: InputFieldProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={id}
        className="text-sm font-semibold text-text-primary flex items-center gap-2"
      >
        <span className="text-indigo-500 dark:text-indigo-400">{icon}</span>
        {label}
      </label>
      {children}
      <AnimatePresence mode="wait">
        {error && (
          <motion.p
            key={error}
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            className="text-xs text-red-500 dark:text-red-400 flex items-center gap-1"
          >
            <X className="w-3 h-3" />
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}

export function getInputClass(hasError?: string) {
  return `w-full px-4 py-3 rounded-xl border text-sm font-medium transition-all duration-200 outline-none bg-white dark:bg-dark-2 text-text-primary placeholder:text-text-subtle focus:ring-2 focus:ring-indigo-500/30 ${
    hasError
      ? "border-red-400 dark:border-red-500"
      : "border-border dark:border-white/10 hover:border-indigo-300 dark:hover:border-indigo-500/40 focus:border-indigo-500"
  }`;
}
