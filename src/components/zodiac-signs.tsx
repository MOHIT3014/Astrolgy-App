"use client";

import { motion } from "framer-motion";
import { useTranslations } from "@/hooks/use-translations";
import { cn } from "@/lib/utils";

// Standard Zodiac SVG Paths
const zodiacPaths = {
  aries:
    "M12 2a5 5 0 0 1 5 5v3a3 3 0 0 0 3 3h1v-2a7 7 0 0 0-14 0v2h1a3 3 0 0 0 3-3V7a5 5 0 0 1 5-5z M12 15v7",
  taurus: "M12 15a5 5 0 1 0 0-10 5 5 0 0 0 0 10z M12 2v3 M6 8a6 6 0 0 1 12 0",
  gemini:
    "M6 4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v1h-2V4H8v1H6V4z M6 20a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1h-2v1H8v-1H6v1z M8 6v12 M16 6v12",
  cancer:
    "M17.8 7.6a3 3 0 0 0-4.2-4.2 3 3 0 0 0-4.2 4.2c.6.6 1.1 1.3 1.4 2.1a3 3 0 0 1 4.2-4.2c-.2-.6-.7-1.1-1.2-1.5.3-.2.7-.4 1.1-.4 1.7 0 3 1.3 3 3 0 1.1-.6 2-1.5 2.6-.9-.6-1.9-1-2.9-1.2.6-.6 1.2-1.2 1.8-1.7 1.2 1.2 1.9 2.9 1.9 4.8 0 3.9-3.1 7-7 7s-7-3.1-7-7c0-2 .6-3.8 1.7-5.3", // Simplified representation
  leo: "M12 4a3 3 0 1 0-.9 5.86c.9.27 1.9.44 2.9.44 2.8 0 5 2.2 5 5s-2.2 5-5 5-5-2.2-5-5c0-1.2.4-2.3 1.1-3.2", // Stylized
  virgo:
    "M10 4v16 M17 4v10a3 3 0 0 1-3 3h-2 M4 4v12a4 4 0 0 0 4 4h1 M17 4v4a4 4 0 0 0 4 4h1v1a4 4 0 0 1-4 4", // Stylized M shape with loop
  libra:
    "M5 18h14 M12 3a5 5 0 0 0-5 5h2a3 3 0 0 1 6 0h2a5 5 0 0 0-5-5z M4 21h16",
  scorpio:
    "M17 4v6a3 3 0 0 1-3 3h-2 M10 4v9a3 3 0 0 1-3 3H5 M4 4v12a4 4 0 0 0 4 4h1 M19 14l2 2m0-2l-2 2", // Stylized M with tail
  sagittarius: "M12 2l10 10 M22 2l-10 10 M22 2v5 M22 2h-5 M2 22l15-15",
  capricorn:
    "M4 14a4 4 0 0 1 4-4h.2a5 5 0 0 1 5 5v3c0 1.7 1.3 3 3 3s3-1.3 3-3-1.3-3-3-3", // Stylized V with tail
  aquarius:
    "M2 10c2.8 0 2.8 4 5.6 4s2.8-4 5.6-4 2.8 4 5.6 4 2.8-4 5.6-4 M2 16c2.8 0 2.8 4 5.6 4s2.8-4 5.6-4 2.8 4 5.6 4 2.8-4 5.6-4",
  pisces:
    "M18 12c0 3.3-2 6.2-5 7.4 M13 4.6c3 1.2 5 4.1 5 7.4 M6 12c0-3.3 2-6.2 5-7.4 M11 19.4c-3-1.2-5-4.1-5-7.4 M2 12h20",
};

// More refined paths from a consistent set (approximated for visual quality)
const signs = [
  {
    id: "aries",
    path: "M12 21a9 9 0 0 0 9-9h-2a7 7 0 0 1-7 7 7 7 0 0 1-7-7H3a9 9 0 0 0 9 9z M12 7V3 M7.5 10.5A4.5 4.5 0 1 1 12 7a4.5 4.5 0 1 1 4.5 3.5",
  }, // Custom Aries
  {
    id: "taurus",
    path: "M12 22a8 8 0 1 0 0-16 8 8 0 0 0 0 16z M12 6V2 M6 7a6 6 0 0 1 12 0",
  },
  { id: "gemini", path: "M6 3v18 M18 3v18 M6 3h12 M6 21h12" }, // Simplified pillars
  {
    id: "cancer",
    path: "M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0-18 0 M8 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8 M16 12a4 4 0 1 1 0 8 4 4 0 0 1 0-8",
  }, // Abstract circles
  {
    id: "leo",
    path: "M11 7a5 5 0 1 1-5 5 5 5 0 0 1 5-5m0 0a5 5 0 0 1 5 5 5 5 0 0 1 5-5",
  }, // Abstract mane
  { id: "virgo", path: "M4 4v16 M12 4v12a4 4 0 0 0 4 4h1 M20 4v16" }, // M shape
  { id: "libra", path: "M4 18h16 M8 14h8 M12 6a4 4 0 0 0-4 4h8a4 4 0 0 0-4-4" },
  {
    id: "scorpio",
    path: "M4 4v16 M12 4v12a4 4 0 0 0 4 4h1 M20 4v10a2 2 0 1 1-2 2",
  }, // M with tail
  { id: "sagittarius", path: "M4 20L20 4 M20 4h-8 M20 4v8 M8 16l-4 4" }, // Arrow
  {
    id: "capricorn",
    path: "M4 8a4 4 0 0 0 4 4 4 4 0 0 0 4-4v-1a3 3 0 0 1 3 3 3 3 0 0 1 3 3",
  },
  {
    id: "aquarius",
    path: "M2 8c2-2 4-2 6 0s4 2 6 0 4-2 6 0 M2 16c2-2 4-2 6 0s4 2 6 0 4-2 6 0",
  }, // Waves
  {
    id: "pisces",
    path: "M6 12a6 6 0 0 1 6-6 6 6 0 0 1 6 6 M6 12a6 6 0 0 0 6 6 6 6 0 0 0 6-6 M2 12h20",
  }, // Two fish / cord
];

// Let's use a cleaner set of path data for the final implementation
const zodiacIcons = [
  {
    id: "aries",
    path: "M12 2a5 5 0 0 1 5 5v3a3 3 0 0 0 3 3h1v-2a7 7 0 0 0-14 0v2h1a3 3 0 0 0 3-3V7a5 5 0 0 1 5-5z M12 15v7",
  },
  {
    id: "taurus",
    path: "M12 15a5 5 0 1 0 0-10 5 5 0 0 0 0 10z M12 2v3 M6 8a6 6 0 0 1 12 0",
  },
  {
    id: "gemini",
    path: "M6 4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v1h-2V4H8v1H6V4z M6 20a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1h-2v1H8v-1H6v1z M8 6v12 M16 6v12",
  },
  {
    id: "cancer",
    path: "M12 4a3 3 0 0 1 2.8 2 3 3 0 0 0 2.2 2 3 3 0 0 1-2 4 3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 1-2-4 3 3 0 0 0 2.2-2A3 3 0 0 1 12 4z",
  }, // Stylized
  {
    id: "leo",
    path: "M12 5a3 3 0 1 0-2.6 4.5 4 4 0 1 1 2.9 3 4 4 0 0 1-2.9 3A3 3 0 1 0 12 5z",
  }, // Stylized
  {
    id: "virgo",
    path: "M5 7v10h2V8a2 2 0 0 1 4 0v9h2V8a2 2 0 0 1 4 0v3a3 3 0 0 1-3 3h-1",
  },
  {
    id: "libra",
    path: "M5 16h14 M12 4a4 4 0 0 0-4 4h8a4 4 0 0 0-4-4z M4 19h16",
  },
  {
    id: "scorpio",
    path: "M5 7v10h2V8a2 2 0 0 1 4 0v9h2V8a2 2 0 0 1 4 0v4l2 2",
  },
  {
    id: "sagittarius",
    path: "M12 3l9 9 M21 3l-9 9 M21 3H12 M21 3v9 M3 21l18-18",
  },
  {
    id: "capricorn",
    path: "M4 7a2 2 0 0 1 4 0v4a2 2 0 0 0 4 0v-1a3 3 0 0 1 3 3 3 3 0 0 1-3 3",
  },
  {
    id: "aquarius",
    path: "M2 10c2.7 0 2.7 4 5.3 4 2.7 0 2.7-4 5.4-4 2.7 0 2.7 4 5.3 4 2.7 0 2.7-4 5.3-4 M2 14c2.7 0 2.7 4 5.3 4 2.7 0 2.7-4 5.4-4 2.7 0 2.7 4 5.3 4 2.7 0 2.7-4 5.3-4",
  },
  {
    id: "pisces",
    path: "M12 8a5 5 0 0 0-5 5 5 5 0 0 0 5 5 5 5 0 0 0 5-5 5 5 0 0 0-5-5 M5 13a7 7 0 0 1 14 0 M2 13h20",
  },
];

export function ZodiacSigns() {
  const t = useTranslations();

  // Array of sign keys matching the messages file
  const zodiacKeys = [
    "aries",
    "taurus",
    "gemini",
    "cancer",
    "leo",
    "virgo",
    "libra",
    "scorpio",
    "sagittarius",
    "capricorn",
    "aquarius",
    "pisces",
  ];

  return (
    <section className=" md:py-32 w-full bg-background relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-primary/5 rounded-full blur-3xl -z-10" />

      <div className="container max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center space-y-4 mb-16 relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-rozha font-bold text-foreground"
          >
            {t.zodiac.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
          >
            {t.zodiac.subtitle}
          </motion.p>
        </div>

        <div className="flex md:grid md:grid-cols-3 lg:grid-cols-6 gap-6 md:justify-items-center overflow-x-auto md:overflow-visible pb-8 md:pb-0 px-4 md:px-0 snap-x snap-mandatory scrollbar-hide">
          {zodiacKeys.map((sign, index) => {
            const iconData = zodiacIcons.find((icon) => icon.id === sign);

            return (
              <motion.div
                key={sign}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group relative min-w-[140px] md:min-w-0 w-full aspect-square flex flex-col items-center justify-center p-4 rounded-3xl bg-transparent border border-primary/10 hover:border-primary/40 backdrop-blur-sm transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-primary/10 cursor-pointer snap-center"
              >
                {/* Icon Container */}
                <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center mb-3 rounded-2xl bg-linear-to-br from-primary to-purple-600 text-white shadow-lg group-hover:shadow-primary/40 transition-shadow duration-300">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-8 h-8 md:w-10 md:h-10"
                  >
                    <path d={iconData?.path || ""} />
                  </svg>
                </div>

                {/* Name */}
                <span className="text-sm md:text-base font-medium text-foreground/90 group-hover:text-primary transition-colors">
                  {t.zodiac[sign as keyof typeof t.zodiac]}
                </span>

                {/* Hover Glow */}
                <div className="absolute inset-0 bg-primary/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
