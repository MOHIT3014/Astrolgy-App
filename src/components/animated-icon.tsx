"use client"

import * as React from "react"
import { motion, MotionProps } from "framer-motion"
import { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

export type AnimationType = "scale" | "rotate" | "wiggle" | "pulse"

interface AnimatedIconProps extends React.HTMLAttributes<HTMLDivElement> {
  icon: LucideIcon
  animation?: AnimationType
  iconClassName?: string
}

export function AnimatedIcon({
  icon: Icon,
  animation = "scale",
  className,
  iconClassName,
  ...props
}: AnimatedIconProps) {
  
  const getAnimationVariant = (type: AnimationType) => {
    switch (type) {
      case "rotate":
        return {
          hover: { rotate: 90 },
          tap: { rotate: 45 }
        }
      case "wiggle":
        return {
          hover: { rotate: [0, -10, 10, -10, 10, 0], transition: { duration: 0.5 } },
          tap: { scale: 0.95 }
        }
      case "pulse":
        return {
          hover: { scale: 1.1, opacity: 0.8 },
          tap: { scale: 0.9 }
        }
      case "scale":
      default:
        return {
          hover: { scale: 1.2 },
          tap: { scale: 0.9 }
        }
    }
  }

  const variants = getAnimationVariant(animation)

  return (
    <motion.div
      className={cn("flex items-center justify-center p-1 cursor-pointer", className)}
      whileHover="hover"
      whileTap="tap"
      variants={variants}
      {...(props as MotionProps)}
    >
      <Icon className={cn("h-full w-full", iconClassName)} />
    </motion.div>
  )
}
