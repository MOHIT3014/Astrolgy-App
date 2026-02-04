"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { CalendarDays } from "lucide-react";
import { useTranslations } from "@/hooks/use-translations";
import { cn } from "@/lib/utils";

export function SacredSessionBooking() {
  const t = useTranslations();
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  // Use time slots from translations if available as array, or fallback to static
  const timeSlots = t.booking.timeSlots || [
    "10:00 AM",
    "11:30 AM",
    "2:00 PM",
    "3:30 PM",
    "5:00 PM",
    "6:30 PM",
  ];

  return (
    <section className="py-20 w-full bg-background relative overflow-hidden">
      <div className="container max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-rozha font-bold text-foreground"
          >
            {t.booking.title.split("Sacred Session").map((part, i, arr) => (
              <span key={i}>
                {part}
                {i < arr.length - 1 && (
                  <span className="text-amber-400"> Sacred Session</span>
                )}
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
            {t.booking.subtitle}
          </motion.p>
        </div>

        {/* Main Booking Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative bg-[#0F1116] border border-white/5 rounded-3xl p-6 md:p-10 shadow-2xl overflow-hidden"
        >
          {/* Glow Effect */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl -z-10 translate-x-1/3 -translate-y-1/3" />

          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
            {/* Left Column: Calendar */}
            <div className="w-full lg:w-auto flex justify-center lg:justify-start">
              <div className="p-6 rounded-2xl bg-[#161920] border border-white/5 shadow-lg w-full max-w-sm">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  className="rounded-md w-full"
                  classNames={{
                    head_cell:
                      "text-muted-foreground w-9 font-normal text-[0.8rem]",
                    cell: "h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
                    day: "h-9 w-9 p-0 font-normal aria-selected:opacity-100 hover:bg-white/5 rounded-md transition-colors text-gray-300",
                    day_selected:
                      "bg-amber-400 text-black hover:bg-amber-400 hover:text-black focus:bg-amber-400 focus:text-black font-semibold",
                    day_today: "bg-white/5 text-amber-400 font-bold",
                  }}
                />
              </div>
            </div>

            {/* Right Column: Time Slots */}
            <div className="w-full flex-1 space-y-8">
              <div>
                <h3 className="text-xl font-rozha text-amber-400 mb-6 flex items-center gap-2">
                  <CalendarDays className="w-5 h-5 text-amber-400" />
                  {t.booking.availableSlots}
                </h3>

                <div className="grid grid-cols-2 sm:grid-cols-2 gap-4">
                  {timeSlots.map((time: string) => (
                    <button
                      key={time}
                      onClick={() => setSelectedTime(time)}
                      className={cn(
                        "py-4 px-6 rounded-xl text-sm font-medium transition-all duration-300 border",
                        selectedTime === time
                          ? "bg-transparent border-amber-400 text-amber-400 shadow-[0_0_15px_rgba(251,191,36,0.3)]"
                          : "bg-[#161920] text-gray-400 border-white/5 hover:border-white/10 hover:text-gray-200",
                      )}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>

              <Button
                size="lg"
                className="w-full h-14 text-base font-bold rounded-xl shadow-lg transition-all duration-300 bg-amber-400 text-black hover:bg-amber-500 hover:shadow-amber-400/20"
                disabled={!date || !selectedTime}
              >
                <span className="flex items-center gap-2">
                  <CalendarDays className="w-5 h-5" />
                  {t.booking.confirmBooking}
                </span>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
