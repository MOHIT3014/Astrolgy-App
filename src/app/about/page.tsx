"use client";

import { HeroSection } from "@/pages/about/hero-section";
import { LegacySection } from "@/pages/about/legacy-section";

export default function AboutPage() {
  return (
    <div className="min-h-screen w-full bg-background text-foreground overflow-x-hidden">
      <HeroSection />
      <LegacySection />
    </div>
  );
}
