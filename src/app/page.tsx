"use client";

import React from "react";
import { Navbar } from "@src/components/common/Navbar";
import { Footer } from "@src/components/common/Footer";
import { Hero } from "@src/components/page/home/Hero";
import { AboutUs } from "@src/components/page/home/AboutUs";
import { Services } from "@src/components/page/home/Services";
import { Testimonials } from "@src/components/page/home/Testimonials";
import { ContactUs } from "@src/components/page/home/ContactUs";

export default function Page() {
  return (
    <div className="min-h-screen bg-background flex flex-col justify-between overflow-x-hidden font-sans">
      <Navbar />

      <main className="flex-grow">
        <Hero />
        <AboutUs />
        <Services />
        <Testimonials />
        <ContactUs />
      </main>

      <Footer />
    </div>
  );
}