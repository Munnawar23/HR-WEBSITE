"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Button } from "./Button";
import { Menu, X, Sparkles } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Monitor scroll to add backdrop effects
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Features", href: "#services" },
    { name: "Solutions", href: "#" },
    { name: "About Us", href: "#about" },
    { name: "Pricing", href: "#" },
  ];

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`sticky top-0 z-50 transition-all duration-300 w-full ${
        scrolled
          ? "backdrop-blur-lg bg-background/90 border-b border-border shadow-sm py-3"
          : "bg-background border-b border-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-white font-display font-extrabold text-xl shadow-md shadow-primary/20 group-hover:scale-105 transition-transform duration-200">
                P
              </div>
              <span className="font-display font-bold text-xl md:text-2xl tracking-tight text-primary flex items-center gap-1">
                PeopleSync
                <Sparkles className="w-4 h-4 text-secondary animate-pulse" />
              </span>
            </Link>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8 font-medium">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm lg:text-base transition-colors relative py-1 hover:text-primary ${
                    isActive ? "text-primary font-semibold" : "text-text-muted hover:text-primary"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-secondary rounded-full" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Link href="#">
              <Button variant="ghost">Sign In</Button>
            </Link>
            <Link href="#">
              <Button variant="primary">Get Started</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl text-primary hover:bg-tag-bg transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div className="md:hidden border-b border-border bg-background/95 backdrop-blur-lg animate-in slide-in-from-top duration-200">
          <div className="px-4 pt-2 pb-6 space-y-3">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-2 rounded-xl text-base font-semibold ${
                    isActive ? "bg-tag-bg text-primary" : "text-text-muted hover:bg-tag-bg/50 hover:text-primary"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            <div className="h-px bg-border my-2" />
            <div className="grid grid-cols-2 gap-3 px-2">
              <Link href="#" onClick={() => setIsOpen(false)} className="w-full">
                <Button variant="ghost" className="w-full justify-center">
                  Sign In
                </Button>
              </Link>
              <Link href="#" onClick={() => setIsOpen(false)} className="w-full">
                <Button variant="primary" className="w-full justify-center">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </motion.nav>
  );
}
