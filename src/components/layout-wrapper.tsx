"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/navbar";
import { useLanguage } from "@/store/use-language";
import { useTranslations } from "@/hooks/use-translations";

export function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const { language } = useLanguage();
  const t = useTranslations();

  return (
    <div className="flex min-h-screen flex-col">
      {/* Sloka Sub-header */}
      <div className="w-full bg-background border-b py-2 text-center min-h-[50px] flex items-center justify-center">
        <p className="font-rozha text-sm md:text-base text-primary/90 leading-relaxed tracking-wide md:p-0 p-2">
          {t.sloka.text.split("").map((char, index) => (
            <motion.span
              key={`${index}-${language}`} // Re-animate when language changes
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0,
                delay: index * 0.03, // Slightly faster typing for responsiveness
              }}
            >
              {char}
            </motion.span>
          ))}
        </p>
      </div>
      <Navbar />
      <main className="flex-1">{children}</main>
    </div>
  );
}
