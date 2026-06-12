"use client";

import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@src/components/page/home/Hero";
import { AboutUs } from "@src/components/page/home/AboutUs";
import { Testimonials } from "@/components/page/home/Testimonials";
import { Hire } from "@/components/page/home/Hire";
import { ContactUs } from "@/components/page/home/ContactUs";

export default function Page() {
  return (
    <div className="min-h-screen bg-background flex flex-col justify-between overflow-x-hidden font-sans">
      <Navbar />

      <main className="grow">
        <Hero />
        <AboutUs />
        <Hire />
        <Testimonials />
        <ContactUs />
      </main>

      <Footer />
    </div>
  );
}