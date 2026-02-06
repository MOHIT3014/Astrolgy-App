"use client";

import { motion } from "framer-motion";
import { useTranslations } from "@/hooks/use-translations";

export function HeroSection() {
  const t = useTranslations();

  return (
    <section className="relative flex flex-col items-center justify-center min-h-[30vh] px-4 py-5 md:py-10 text-center overflow-hidden">
      {/* Background with overlay to match the dark theme in the image */}
      <div className="absolute inset-0 bg-background/50 z-0">
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-background/80 to-background pointer-events-none" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 max-w-4xl mx-auto space-y-4"
      >
        <h1 className="text-4xl md:text-7xl font-bold tracking-tight font-rozha-one">
          {t.about.heroTitle.split(" ").map((word, index) => {
            const isHighlight =
              word.includes("पंडित") || word.includes("Pandit");

            return (
              <span key={index}>
                {isHighlight ? (
                  <span className="text-primary">{word}</span>
                ) : (
                  word
                )}{" "}
              </span>
            );
          })}
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground font-medium max-w-2xl mx-auto leading-relaxed">
          {t.about.heroSubtitle}
        </p>
      </motion.div>
    </section>
  );
}
