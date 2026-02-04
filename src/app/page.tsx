"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useTranslations } from "@/hooks/use-translations";
import { useLanguage } from "@/store/use-language";
import { ZodiacSigns } from "@/components/zodiac-signs";
import { SacredServices } from "@/components/sacred-services";

export default function Home() {
  const t = useTranslations();
  const { language } = useLanguage();

  const [loopNum, setLoopNum] = useState(0);

  useEffect(() => {
    // Total duration of typing ~ 1s (19 chars * 0.05). Pause for 2s. Total 3s.
    const timeout = setTimeout(() => {
      setLoopNum((prev) => prev + 1);
    }, 5000);
    return () => clearTimeout(timeout);
  }, [loopNum]);

  return (
    <div className="relative min-h-[calc(100vh-3.5rem)] w-full overflow-x-hidden">
      {/* Background Elements - Fixed or Absolute to cover viewport without affecting flow */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none h-full">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-primary/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-purple-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-indigo-900/20 via-background to-background"></div>
      </div>

      <div className="container max-w-7xl mx-auto px-6 py-12 md:px-12 md:py-8 min-h-[calc(100vh-3.5rem)] flex flex-col-reverse md:flex-row items-center justify-between gap-12 lg:gap-20">
        {/* Left Side - Text Content */}
        <div className="flex-1 space-y-8 text-center md:text-left z-10 w-full">
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-medium tracking-wide mb-4 border border-primary/20">
                {t.home.title}
              </span>
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-7xl font-rozha font-bold tracking-tight text-foreground drop-shadow-sm leading-tight">
              {t.home.name.split("").map((char, index) => (
                <motion.span
                  key={`${index}-${loopNum}-${language}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 0,
                    delay: index * 0.15,
                  }}
                >
                  {char}
                </motion.span>
              ))}
            </h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="text-base md:text-xl text-muted-foreground leading-relaxed max-w-xl font-light mx-auto md:mx-0"
          >
            {t.home.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="pt-2"
          >
            <Button
              size="lg"
              className="h-12 md:h-14 px-8 text-base md:text-lg font-medium rounded-full shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all duration-300 w-full md:w-auto"
            >
              {t.home.bookConsultation}
            </Button>
          </motion.div>
        </div>

        {/* Right Side - Photo & Animation */}
        <div className="flex-1 flex justify-center md:justify-end z-10 w-full">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -3 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative"
          >
            {/* Decorative Circle Background */}
            <div className="absolute inset-0 bg-linear-to-tr from-primary/30 to-purple-500/30 rounded-full blur-2xl transform scale-110 -z-10 animate-pulse-slow"></div>

            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-96 md:h-96 rounded-full p-2 border border-primary/20 bg-background/50 backdrop-blur-sm">
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl">
                  {/* Placeholder for noise texture overlay if needed */}
                  <div className="absolute inset-0 bg-primary/5 mix-blend-overlay z-10"></div>
                  <Image
                    src="/Home/pandit.png"
                    alt={t.home.name}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700 ease-in-out"
                    priority
                  />
                </div>
              </div>
            </motion.div>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-2 -right-2 md:-top-4 md:-right-4 bg-card p-2 md:p-3 rounded-2xl shadow-xl border border-border/50 backdrop-blur-md"
            >
              <span className="text-xl md:text-2xl">✨</span>
            </motion.div>
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute -bottom-4 -left-4 md:-bottom-8 md:-left-8 bg-card px-3 py-1.5 md:px-4 md:py-2 rounded-2xl shadow-xl border border-border/50 backdrop-blur-md flex items-center gap-2"
            >
              <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-green-500 animate-pulse"></div>
              <span className="text-xs md:text-sm font-medium">
                {t.home.availableNow}
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <ZodiacSigns />
      <SacredServices />
    </div>
  );
}
