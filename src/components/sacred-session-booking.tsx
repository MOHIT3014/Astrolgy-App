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
                  <span className="text-primary"> Sacred Session</span>
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
          className="relative bg-card border border-border/50 rounded-3xl p-4 md:p-10 shadow-2xl overflow-hidden"
        >
          {/* Glow Effect */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10 translate-x-1/3 -translate-y-1/3" />

          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
            {/* Left Column: Calendar */}
            <div className="w-full lg:w-auto flex justify-center lg:justify-start">
              <div className="p-3 md:p-6 rounded-2xl bg-muted/30 border border-border/50 shadow-lg w-full max-w-[320px] md:max-w-sm mx-auto lg:mx-0">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  className="rounded-md w-full p-0"
                  classNames={{
                    months: "flex flex-col space-y-4",
                    month: "space-y-4 w-full",

                    // HEADER
                    caption: "flex items-center justify-between px-2",
                    caption_label:
                      "text-base font-semibold text-foreground flex-1 text-center",

                    nav: "flex items-center gap-1",
                    nav_button:
                      "h-8 w-8 bg-transparent p-0 opacity-70 hover:opacity-100 hover:bg-muted rounded-md transition-colors",
                    nav_button_previous: "",
                    nav_button_next: "",

                    // CALENDAR GRID
                    table: "w-full border-collapse",
                    head_row: "flex justify-between",
                    head_cell:
                      "w-9 text-center text-muted-foreground font-normal text-xs",

                    row: "flex w-full justify-between mt-2",
                    cell: "relative h-9 w-9 text-center text-sm p-0",

                    day: "h-9 w-9 rounded-md hover:bg-muted transition-colors",
                    day_selected:
                      "bg-primary text-primary-foreground hover:bg-primary",
                    day_today: "bg-muted text-primary font-bold",
                  }}
                />
              </div>
            </div>

            {/* Right Column: Time Slots */}
            <div className="w-full flex-1 space-y-8">
              <div>
                <h3 className="text-xl font-rozha text-primary mb-6 flex items-center justify-center gap-2">
                  <CalendarDays className="w-5 h-5 text-primary" />
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
                          ? "bg-transparent border-primary text-primary shadow-[0_0_15px_rgba(212,175,55,0.15)]"
                          : "bg-muted/20 text-muted-foreground border-border/50 hover:border-primary/30 hover:text-foreground",
                      )}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>

              <Button
                size="lg"
                className="w-full h-14 text-base font-bold rounded-xl shadow-lg transition-all duration-300 bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-primary/20"
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
