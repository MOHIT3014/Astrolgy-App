"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { useTranslations } from "@/hooks/use-translations";
import { cn } from "@/lib/utils";

export function Testimonials() {
  const t = useTranslations();

  return (
    <section className="py-20 w-full bg-background relative overflow-hidden">
      <div className="container max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center space-y-4 mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-rozha font-bold text-foreground"
          >
            {t.testimonials.title.split(" ").map((word, i) => (
              <span key={i} className={i === 1 ? "text-primary" : ""}>
                {word}{" "}
              </span>
            ))}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted-foreground text-lg"
          >
            {t.testimonials.subtitle}
          </motion.p>
        </div>

        {/* Testimonials Grid/Slider */}
        <div className="flex lg:grid lg:grid-cols-3 gap-6 lg:gap-8 overflow-x-auto lg:overflow-visible pb-8 lg:pb-0 px-4 md:px-0 snap-x snap-mandatory scrollbar-hide">
          {t.testimonials.reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="min-w-[320px] lg:min-w-0 snap-center bg-card border border-border rounded-3xl p-8 flex flex-col gap-6 relative shadow-lg h-full"
            >
              {/* Stars */}
              <div className="flex justify-center gap-1.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-primary text-primary" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-muted-foreground text-lg italic leading-relaxed text-center font-light">
                &quot;{review.text}&quot;
              </p>

              {/* Author */}
              <div className="mt-auto pt-6 border-t border-border flex justify-center">
                <p className="text-primary font-rozha text-xl tracking-wide">
                  — {review.author}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
