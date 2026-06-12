"use client";

import React, { useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const EMAIL = "contact@hirepro.in";

export function ContactUs() {
  const btnRef = useRef<HTMLAnchorElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0, px: 50, py: 50 });
  const [hovered, setHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = btnRef.current?.getBoundingClientRect();
    if (!rect) return;
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = e.clientX - cx;
    const dy = e.clientY - cy;
    const px = ((e.clientX - rect.left) / rect.width) * 100;
    const py = ((e.clientY - rect.top) / rect.height) * 100;
    setTilt({ x: -(dy / rect.height) * 16, y: (dx / rect.width) * 16, px, py });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0, px: 50, py: 50 });
    setHovered(false);
  };

  // Rotating text ring characters
  const ringText = "GET IN TOUCH · DIGITAL MARKETING · BRAND GROWTH · ";
  const chars = ringText.split("");

  return (
    <section id="contact" className="py-20 lg:py-28 bg-light relative overflow-hidden">

      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#4f46e5 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          opacity: 0.025,
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ── Top label ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-8"
        >
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase border bg-tag-bg border-border-soft text-primary"
          >
            <span className="w-1.5 h-1.5 rounded-full animate-pulse bg-primary" />
            Contact Us
          </span>
        </motion.div>

        {/* ── Main two-column layout ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">

          {/* Left: Big headline */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex flex-col gap-6"
          >
            <h2 className="text-5xl sm:text-6xl lg:text-[4rem] font-extrabold text-text-primary leading-[1.05] tracking-tight">
              Let's grow
              <br />
              your{" "}
              <span className="relative inline-block">
                brand.
                {/* Underline svg */}
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 280 10" fill="none" preserveAspectRatio="none">
                  <path d="M2 7C60 3 160 2 278 5" stroke="#4f46e5" strokeWidth="5" strokeLinecap="round" opacity="0.4" />
                </svg>
              </span>
            </h2>

            <p className="text-base sm:text-lg text-text-muted leading-relaxed max-w-md">
              We craft campaigns, build employer brands, and put you in front of the right audience. Ready to talk?
            </p>

            {/* Small email reference */}
            <a
              href={`mailto:${EMAIL}`}
              className="group inline-flex items-center gap-2 text-sm font-bold text-primary transition-all duration-200 hover:gap-3"
            >
              {EMAIL}
              <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </motion.div>

          {/* Right: The Awwwards CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            className="flex items-center justify-center"
          >
            <a
              ref={btnRef}
              href={`mailto:${EMAIL}?subject=Digital Marketing Enquiry`}
              onMouseMove={handleMouseMove}
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={handleMouseLeave}
              aria-label="Email us for digital marketing"
              className="relative block"
              style={{
                width: 260,
                height: 260,
                transform: `perspective(600px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale(${hovered ? 1.06 : 1})`,
                transition: hovered ? "transform 0.08s linear" : "transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)",
              }}
            >
              {/* Outer glow ring — only shows on hover, no blur */}
              <span
                className="absolute inset-0 rounded-full transition-all duration-500"
                style={{
                  boxShadow: hovered
                    ? "0 0 0 12px rgba(79,70,229,0.07), 0 0 0 26px rgba(79,70,229,0.04)"
                    : "none",
                }}
              />

              {/* Main circle */}
              <span
                className="absolute inset-0 rounded-full flex items-center justify-center transition-all duration-300"
                style={{
                  background: hovered
                    ? `radial-gradient(circle at ${tilt.px}% ${tilt.py}%, #6366f1, #4f46e5 50%, #7c3aed)`
                    : "linear-gradient(135deg, #4f46e5, #7c3aed)",
                  boxShadow: hovered
                    ? "0 24px 60px rgba(79,70,229,0.35), inset 0 1px 0 rgba(255,255,255,0.2)"
                    : "0 12px 40px rgba(79,70,229,0.2), inset 0 1px 0 rgba(255,255,255,0.12)",
                }}
              >
                {/* Inner content */}
                <span className="flex flex-col items-center gap-2 text-white z-10 relative">
                  <span
                    className="text-xl font-extrabold tracking-tight transition-transform duration-300"
                    style={{ transform: hovered ? "translateY(-2px)" : "none" }}
                  >
                    Say hello
                  </span>
                  <ArrowUpRight
                    className="w-7 h-7 transition-all duration-300"
                    style={{
                      transform: hovered ? "translate(3px, -3px) rotate(0deg)" : "rotate(0deg)",
                    }}
                  />
                </span>
              </span>

              {/* Rotating text ring */}
              <span
                className="absolute inset-0 rounded-full"
                style={{
                  animation: "spin 12s linear infinite",
                }}
              >
                <svg viewBox="0 0 260 260" className="w-full h-full" aria-hidden="true">
                  <defs>
                    <path id="ring" d="M 130,130 m -110,0 a 110,110 0 1,1 220,0 a 110,110 0 1,1 -220,0" />
                  </defs>
                  <text
                    fontSize="10"
                    fontWeight="700"
                    letterSpacing="3.5"
                    fill="#4f46e5"
                    opacity={hovered ? "0.9" : "0.35"}
                    style={{ transition: "opacity 0.3s" }}
                    fontFamily="inherit"
                  >
                    <textPath href="#ring">{ringText}</textPath>
                  </text>
                </svg>
              </span>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Spinning ring CSS animation */}
      <style jsx global>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
}
