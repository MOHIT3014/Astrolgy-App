"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslations } from "@/hooks/use-translations";

export function LegacySection() {
  const t = useTranslations();

  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Column: Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative aspect-square md:aspect-4/3 rounded-2xl overflow-hidden shadow-2xl"
        >
          <Image
            src="https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=1000&auto=format&fit=crop"
            alt="Mystical astrology"
            fill
            className="object-cover hover:scale-105 transition-transform duration-700"
          />
        </motion.div>

        {/* Right Column: Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-6"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-rozha-one">
            <span className="text-primary">{t.about.legacyTitle}</span>
          </h2>

          <p className="text-muted-foreground text-lg leading-relaxed">
            {t.about.legacyDescription}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
