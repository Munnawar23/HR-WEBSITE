"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Zap } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#hire" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact Us", href: "#footer" },
  ];

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`sticky top-0 z-50 w-full transition-all duration-400 ${
        scrolled
          ? "bg-white/90 backdrop-blur-xl border-b border-gray-100 shadow-sm py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/30 group-hover:scale-105 transition-transform duration-200">
              <Zap className="w-4.5 h-4.5 text-white fill-white" strokeWidth={2.5} />
            </div>
            <span className="font-display font-extrabold text-xl tracking-tight transition-colors text-[#1e1b4b]">
              People<span className="gradient-text">Sync</span>
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                    isActive
                      ? "text-indigo-600 bg-indigo-50"
                      : "text-gray-600 hover:text-indigo-600 hover:bg-gray-50"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 rounded-full bg-indigo-500"
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Link href="#hire">
              <span className="inline-flex items-center gap-1.5 px-4 py-2 bg-indigo-50 hover:bg-indigo-100 text-indigo-600 text-sm font-semibold rounded-xl transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]">
                Apply for role
              </span>
            </Link>
            <Link href="#contact">
              <span className="inline-flex items-center gap-1.5 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white text-sm font-semibold rounded-xl shadow-lg shadow-cyan-500/25 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]">
                Hire a talent
              </span>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-xl transition-colors text-[#1e1b4b] hover:bg-indigo-50"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="md:hidden overflow-hidden bg-white border-b border-gray-100 shadow-lg"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-3 rounded-xl text-sm font-semibold transition-colors ${
                      isActive
                        ? "bg-indigo-50 text-indigo-600"
                        : "text-gray-600 hover:bg-gray-50 hover:text-[#1e1b4b]"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
              <div className="pt-3 border-t border-gray-100 mt-2 flex flex-col gap-2">
                <Link href="#hire" onClick={() => setIsOpen(false)}>
                  <span className="flex items-center justify-center px-4 py-2.5 bg-indigo-50 text-indigo-600 text-sm font-semibold rounded-xl w-full">
                    Apply for role
                  </span>
                </Link>
                <Link href="#contact" onClick={() => setIsOpen(false)}>
                  <span className="flex items-center justify-center px-4 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-semibold rounded-xl w-full">
                    Hire a talent
                  </span>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
