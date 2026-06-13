"use client";

import React from "react";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@src/components/page/home/Hero";
import { Services } from "@src/components/page/home/Services";
import { WhoWeAre } from "@src/components/page/home/WhoWeAre";
import { Testimonials } from "@/components/page/home/Testimonials";
import { Hire } from "@/components/page/home/Hire";
import { ContactUs } from "@/components/page/home/ContactUs";

export default function Page() {
  useSmoothScroll();

  return (
    <div className="min-h-screen bg-background flex flex-col justify-between overflow-x-hidden font-sans pt-20">
      <Navbar />

      <main className="grow">
        <Hero />
        <WhoWeAre />
        <Services />
        <Hire />
        <Testimonials />
        <ContactUs />
      </main>

      <Footer />
    </div>
  );
}