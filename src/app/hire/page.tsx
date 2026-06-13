"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";
import { Hero } from "@/components/page/hire/Hero";
import { Info } from "@/components/page/hire/Info";
import { Form } from "@/components/page/hire/Form";
import { DialogueBox } from "@/components/common/DialogueBox";

export default function HirePage() {
  useSmoothScroll();
  const [success, setSuccess] = useState(false);

  return (
    <div className="min-h-screen bg-background flex flex-col overflow-x-hidden font-sans pt-16 sm:pt-20">
      <Navbar />

      {/* ── Hero Banner ── */}
      <Hero />

      {/* ── Form Section ── */}
      <section className="relative flex-1 py-12 sm:py-16 lg:py-24 bg-surface dark:bg-dark">
        {/* Subtle top glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[90%] max-w-[600px] h-[150px] sm:h-[200px] bg-cyan-500/5 blur-3xl pointer-events-none rounded-full" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 items-start">
            {/* ── Left: Illustration + Info cards ── */}
            <div className="lg:col-span-2">
              <Info />
            </div>

            {/* ── Right: Form ── */}
            <div className="lg:col-span-3 w-full">
              <Form onSuccess={() => setSuccess(true)} />
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <DialogueBox
        open={success}
        type="success"
        title="Hiring Request Received! 🎉"
        description={
          <p>
            Thank you for your request! Our talent team will review your
            requirements and{" "}
            <span className="text-cyan-600 dark:text-cyan-400 font-semibold">
              connect you with matched candidates within 24 hours
            </span>
            . Keep an eye on your inbox.
          </p>
        }
        onClose={() => setSuccess(false)}
        actionText="Awesome, got it!"
      />
    </div>
  );
}
