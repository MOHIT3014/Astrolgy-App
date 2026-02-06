"use client";

import { motion } from "framer-motion";
import { useTranslations } from "@/hooks/use-translations";
import { Award, Users, BookOpen, HeartHandshake } from "lucide-react";

export function MilestonesSection() {
  const t = useTranslations();

  const milestones = [
    {
      id: 1,
      icon: Award,
      value: "25+",
      label: t.about.milestones.years,
    },
    {
      id: 2,
      icon: Users,
      value: "5000+",
      label: t.about.milestones.clients,
    },
    {
      id: 3,
      icon: BookOpen,
      value: "500+",
      label: t.about.milestones.poojas,
    },
    {
      id: 4,
      icon: HeartHandshake,
      value: "100+",
      label: t.about.milestones.marriages,
    },
  ];

  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16 space-y-4"
      >
        <h2 className="text-3xl py-2 md:text-5xl font-rozha font-bold bg-clip-text text-transparent bg-linear-to-r from-primary via-primary/80 to-secondary">
          {t.about.milestones.title}
        </h2>
      </motion.div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
        {milestones.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative flex flex-col items-center justify-center p-6 md:p-8 rounded-3xl bg-card/30 border border-primary/10 hover:border-primary/40 backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 text-center"
          >
            {/* Icon */}
            <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center mb-4 rounded-2xl bg-linear-to-br from-primary/20 to-primary/5 text-primary group-hover:scale-110 transition-transform duration-300">
              <item.icon className="w-6 h-6 md:w-8 md:h-8" strokeWidth={1.5} />
            </div>

            {/* Value */}
            <h3 className="text-3xl md:text-4xl font-bold font-rozha text-primary mb-2">
              {item.value}
            </h3>

            {/* Label */}
            <p className="text-sm md:text-base text-muted-foreground font-medium">
              {item.label}
            </p>

            {/* Hover Glow */}
            <div className="absolute inset-0 bg-primary/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
