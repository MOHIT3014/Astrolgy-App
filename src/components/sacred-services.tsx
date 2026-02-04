"use client";

import { motion } from "framer-motion";
import { useTranslations } from "@/hooks/use-translations";
import { Button } from "@/components/ui/button";

import {
  FileChartColumn,
  ScrollText,
  HeartHandshake,
  BookOpen,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { ServiceCard } from "@/components/service-card";

export function SacredServices() {
  const t = useTranslations();

  const services = [
    {
      id: "birthChart",
      icon: FileChartColumn,
      title: t.services.birthChart.title,
      description: t.services.birthChart.description,
    },
    {
      id: "varshfal",
      icon: ScrollText,
      title: t.services.varshfal.title,
      description: t.services.varshfal.description,
    },
    {
      id: "matchMaking",
      icon: HeartHandshake,
      title: t.services.matchMaking.title,
      description: t.services.matchMaking.description,
    },
    {
      id: "janampatri",
      icon: BookOpen,
      title: t.services.janampatri.title,
      description: t.services.janampatri.description,
    },
  ];

  return (
    <section className="pt-20 w-full bg-background relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10 -translate-x-1/2 translate-y-1/2" />

      <div className="container max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center space-y-4 mb-12 md:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-rozha font-bold text-foreground"
          >
            {t.services.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
          >
            {t.services.subtitle}
          </motion.p>
        </div>

        {/* Services Grid/Slider */}
        <div className="relative w-full">
          <div className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 overflow-x-auto md:overflow-visible pb-8 md:pb-0 px-4 md:px-0 snap-x snap-mandatory scrollbar-hide">
            {services.map((service, index) => (
              <div
                key={service.id}
                className="min-w-[280px] md:min-w-0 snap-center"
              >
                <ServiceCard
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  buttonText={t.services.bookSlot}
                  isFeatured={index === 1 || index === 2} // Make middle two larger
                />
              </div>
            ))}
          </div>
        </div>

        {/* Show More Button */}
        <div className="mt-12 md:mt-20 text-center">
          <Button
            variant="outline"
            size="lg"
            className="rounded-full px-8 border-primary/20 hover:border-primary/50 text-foreground hover:bg-primary/5"
          >
            {t.services.showMore}
          </Button>
        </div>
      </div>
    </section>
  );
}
