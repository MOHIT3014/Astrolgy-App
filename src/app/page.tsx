"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  const name = "Pandit Deepak";

  return (
    <div className="flex min-h-[calc(100vh-3.5rem)] flex-col md:flex-row items-center justify-center p-8 gap-12 max-w-7xl mx-auto">
      {/* Left Side - Text Content */}
      <div className="flex-1 space-y-6 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-primary">
            {/* Typewriter Animation for "Pandit Ajay Shastri" */}
            {"Pandit Ajay Shastri".split("").map((char, index) => (
                <motion.span
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        duration: 0,
                        delay: index * 0.1,
                        repeat: Infinity,
                        repeatDelay: 3
                    }}
                >
                    {char}
                </motion.span>
            ))}
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
          Discover your destiny with expert astrological guidance. Get personalized readings, 
          horoscope analysis, and spiritual remedies for a prosperous and balanced life.
        </p>
        <div className="pt-4">
            <Button size="lg" className="w-full md:w-auto text-lg font-semibold px-8">
                Book Appointment
            </Button>
        </div>
      </div>

      {/* Right Side - Photo & Animation */}
      <div className="flex-1 flex flex-col items-center justify-center space-y-6">
        <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20 shadow-xl">
            {/* Placeholder image - using a generic avatar */}
            <div className="absolute inset-0 bg-linear-to-br from-indigo-100 to-purple-100 flex items-center justify-center text-4xl text-indigo-300">
                <Image src="/pandit.png" alt="Pandit Deepak" fill className="object-cover" />
            </div>
            
        </div>
      </div>
    </div>
  );
}

