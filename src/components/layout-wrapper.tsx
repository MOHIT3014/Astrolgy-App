"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/navbar";

export function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const name =
    "ॐ कर्पूर गौरं करुणावतारं संसारसारम् भुजगेन्द्रहारम् । सदावसंतं हृदयारविंदे भवं भवानीसहितं नमामि ॥";
  const [loopNum, setLoopNum] = useState(0);

  useEffect(() => {
    // Total duration of typing ~ 1s (19 chars * 0.05). Pause for 2s. Total 3s.
    const timeout = setTimeout(() => {
      setLoopNum((prev) => prev + 1);
    }, 10000);
    return () => clearTimeout(timeout);
  }, [loopNum]);
  return (
    <div className="flex min-h-screen flex-col">
      {/* Sloka Sub-header */}
      <div className="w-full bg-background border-b py-2 text-center">
        <p className="font-rozha text-sm md:text-base text-primary/90 leading-relaxed tracking-wide md:p-0 p-2">
          {name.split("").map((char, index) => (
            <motion.span
              key={`${index}-${loopNum}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0,
                delay: index * 0.06,
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
