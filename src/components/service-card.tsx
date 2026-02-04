"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  buttonText: string;
  isFeatured?: boolean;
}

export function ServiceCard({
  icon: Icon,
  title,
  description,
  buttonText,
  isFeatured,
}: ServiceCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className={cn(
        "h-full transition-all duration-300",
        isFeatured ? "md:scale-110 md:z-10" : "scale-100",
      )}
    >
      <Card className="h-full flex flex-col bg-card/60 backdrop-blur-sm border-primary/10 hover:border-primary/40 shadow-lg hover:shadow-primary/10">
        <CardHeader className="text-center pb-2">
          <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center text-primary">
            <Icon className="w-6 h-6" />
          </div>
          <CardTitle className="font-rozha text-xl md:text-2xl text-foreground">
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent className="flex-1 text-center">
          <CardDescription className="text-muted-foreground text-sm md:text-base leading-relaxed">
            {description}
          </CardDescription>
        </CardContent>
        <CardFooter className="pt-2 pb-6 justify-center">
          <Button
            variant="default"
            size="sm"
            className="rounded-full px-6 shadow-md hover:shadow-primary/30"
          >
            {buttonText}
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
