"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";
import { Hero } from "@/components/page/apply/Hero";
import { Info } from "@/components/page/apply/Info";
import { Form } from "@/components/page/apply/Form";
import { DialogueBox } from "@/components/common/DialogueBox";

export default function ApplyPage() {
  useSmoothScroll();
  const [success, setSuccess] = useState(false);

  return (
    <div className="min-h-screen bg-background flex flex-col overflow-x-hidden font-sans pt-20">
      <Navbar />

      {/* ── Hero Banner ── */}
      <Hero />

      {/* ── Form Section ── */}
      <section className="relative flex-1 py-20 bg-surface dark:bg-dark">
        {/* Subtle top glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-indigo-500/5 blur-3xl pointer-events-none rounded-full" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 items-start">
            {/* ── Left: Illustration + Info cards ── */}
            <Info />

            {/* ── Right: Form ── */}
            <div className="lg:col-span-3">
              <Form onSuccess={() => setSuccess(true)} />
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <DialogueBox
        open={success}
        type="success"
        title="Application Submitted! 🎉"
        description={
          <p>
            Thank you for applying! Our team will review your profile and{" "}
            <span className="text-indigo-600 dark:text-indigo-400 font-semibold">
              we will reach out to you soon
            </span>
            . Keep an eye on your email inbox.
          </p>
        }
        onClose={() => setSuccess(false)}
        actionText="Awesome, got it!"
      />
    </div>
  );
}
