"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, XCircle, AlertCircle, Star, X } from "lucide-react";

interface DialogueBoxProps {
  open: boolean;
  type: "success" | "error" | "info";
  title: string;
  description: React.ReactNode;
  onClose: () => void;
  actionText?: string;
}

export function DialogueBox({
  open,
  type,
  title,
  description,
  onClose,
  actionText = "Got it!",
}: DialogueBoxProps) {
  const isSuccess = type === "success";
  const isError = type === "error";

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-100"
          />
          {/* Dialog */}
          <motion.div
            key="dialog"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: "spring", stiffness: 280, damping: 22 }}
            className="fixed inset-0 flex items-center justify-center z-101 pointer-events-none px-4"
          >
            <div className="pointer-events-auto max-w-md w-full bg-white dark:bg-dark-2 rounded-3xl shadow-2xl shadow-indigo-500/10 border border-border dark:border-white/10 overflow-hidden relative">
              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-1.5 rounded-xl text-text-muted hover:text-text-primary hover:bg-gray-100 dark:hover:bg-white/5 transition-colors"
                aria-label="Close dialogue"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Top gradient bar */}
              <div
                className={`h-1.5 w-full ${
                  isSuccess
                    ? "bg-linear-to-r from-emerald-500 via-indigo-500 to-cyan-500"
                    : isError
                    ? "bg-linear-to-r from-red-500 to-amber-500"
                    : "bg-linear-to-r from-indigo-500 to-purple-500"
                }`}
              />

              <div className="p-8 flex flex-col items-center text-center gap-5">
                {/* Animated Icon */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.15, type: "spring", stiffness: 300 }}
                  className={`w-20 h-20 rounded-full flex items-center justify-center shadow-lg ${
                    isSuccess
                      ? "bg-linear-to-br from-emerald-500 to-cyan-500 shadow-emerald-500/30"
                      : isError
                      ? "bg-linear-to-br from-red-500 to-amber-500 shadow-red-500/30"
                      : "bg-linear-to-br from-indigo-500 to-purple-600 shadow-indigo-500/30"
                  }`}
                >
                  {isSuccess ? (
                    <CheckCircle className="w-10 h-10 text-white" strokeWidth={2} />
                  ) : isError ? (
                    <XCircle className="w-10 h-10 text-white" strokeWidth={2} />
                  ) : (
                    <AlertCircle className="w-10 h-10 text-white" strokeWidth={2} />
                  )}
                </motion.div>

                <div>
                  <h3 className="font-display font-extrabold text-2xl text-text-primary mb-2 px-4">
                    {title}
                  </h3>
                  <div className="text-text-muted text-sm leading-relaxed">
                    {description}
                  </div>
                </div>

                {/* Stars decorative for success */}
                {isSuccess && (
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 + i * 0.08 }}
                      >
                        <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
                      </motion.div>
                    ))}
                  </div>
                )}

                <button
                  id="dialogue-action-btn"
                  onClick={onClose}
                  className={`mt-1 px-8 py-3 rounded-xl font-semibold text-sm shadow-lg transition-all duration-200 hover:scale-[1.03] active:scale-[0.97] ${
                    isSuccess
                      ? "bg-linear-to-r from-emerald-500 to-indigo-600 text-white shadow-emerald-500/25 hover:shadow-emerald-500/40"
                      : isError
                      ? "bg-linear-to-r from-red-500 to-amber-600 text-white shadow-red-500/25 hover:shadow-red-500/40"
                      : "bg-linear-to-r from-indigo-500 to-purple-600 text-white shadow-indigo-500/25 hover:shadow-indigo-500/40"
                  }`}
                >
                  {actionText}
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
