"use client"

import * as React from "react"
import Link from "next/link"
import { Menu, Sun, ScrollText, Heart, BookOpen, LucideIcon } from "lucide-react"

import { cn } from "@/lib/utils"

// import { Icons } from "@/components/icons" // Assuming no Icons component yet, using text or finding lucide alternative
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { AnimatedIcon } from "@/components/animated-icon"

export type NavItem = {
  title: string
  href: string
  description: string
  icon: LucideIcon
}

export const navItems: NavItem[] = [
  {
    title: "Daily Horoscope",
    href: "/horoscope",
    description: "Read your daily prediction based on your zodiac sign.",
    icon: Sun
  },
  {
    title: "Birth Chart",
    href: "/birth-chart",
    description: "Generate and analyze your natal chart.",
    icon: ScrollText
  },
  {
    title: "Compatibility",
    href: "/compatibility",
    description: "Check compatibility between two signs.",
    icon: Heart
  },
  {
    title: "Learn",
    href: "/learn",
    description: "Understand the planets, houses, and aspects.",
    icon: BookOpen
  },
]

interface NavbarProps {
  onToggleLayout?: () => void
  showLayoutToggle?: boolean
}

export function Navbar({ onToggleLayout, showLayoutToggle }: NavbarProps) {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="container flex h-14 items-center px-4 md:px-8">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            {/* <Icons.logo className="h-6 w-6" /> */}
            <span className="hidden font-bold sm:inline-block">
              ज्योतिरशास्त्र
            </span>
          </Link>
          <NavigationMenu>
            <NavigationMenuList>
              {navItems.map((item) => (
                <NavigationMenuItem key={item.title}>
                  <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                    <Link href={item.href}>
                      {item.title}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        
        {/* Mobile Menu */}
        <div className="flex flex-1 items-center justify-between md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
                <Button
                variant="ghost"
                className="px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
                >
                    <AnimatedIcon icon={Menu} animation="scale" className="h-8 w-8" iconClassName="h-6 w-6" />
                    <span className="sr-only">Toggle Menu</span>
                </Button>
            </SheetTrigger>
            <SheetContent side="left" className="pr-0">
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>     
                <Link
                  href="/"
                  className="flex items-center"
                  onClick={() => setIsOpen(false)}
                >
                  {/* <Icons.logo className="mr-2 h-4 w-4" /> */}
                  <span className="font-bold">Astrology App</span>
                </Link>
                <div className="flex flex-col space-y-3 mt-4">
                    {navItems.map(item => (
                        <Link
                        key={item.href}
                        href={item.href}
                        className="text-foreground/70 transition-colors hover:text-foreground"
                        onClick={() => setIsOpen(false)}
                        >
                        {item.title}
                        </Link>
                    ))}
                </div>
            </SheetContent>
            </Sheet>
            <div className="mr-4 font-bold md:hidden">Astrology App</div> 
        </div>


        <div className="flex flex-1 items-center justify-end space-x-2">
            
          <nav className="flex items-center space-x-2">
            {showLayoutToggle && (
                <Button variant="outline" size="sm" onClick={onToggleLayout}>
                    Side Menu
                </Button>
            )}
            <ModeToggle />
            {/* Future: ThemeToggle, UserNav */}
             <Button size="sm">Get Started</Button>
          </nav>
        </div>
      </div>
    </header>
  )
}
