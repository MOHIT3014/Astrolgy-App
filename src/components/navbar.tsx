"use client";

import * as React from "react";
import Link from "next/link";
import {
  Menu,
  Sun,
  ScrollText,
  Heart,
  BookOpen,
  LucideIcon,
  Sparkles,
  Calendar,
  User,
  Phone,
  Home,
} from "lucide-react";

import { cn } from "@/lib/utils";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { AnimatedIcon } from "@/components/animated-icon";
import { LanguageToggle } from "@/components/language-toggle";
import { useTranslations } from "@/hooks/use-translations";

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const t = useTranslations();

  const navItems = [
    {
      title: t.nav.home,
      href: "/",
      icon: Home,
    },
    {
      title: t.nav.about,
      href: "/about",
      icon: User,
    },
    {
      title: t.nav.services,
      href: "/#services",
      icon: Sparkles,
    },
    {
      title: t.nav.contact,
      href: "/contact",
      icon: Phone,
    },
    {
      title: t.nav.dailyHoroscope,
      href: "/horoscope",
      icon: Sun,
    },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="container flex h-14 items-center px-4 md:px-8">
        {/* Desktop Logo & Nav */}
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Sparkles className="h-6 w-6 text-primary" />
            <span className="hidden font-bold sm:inline-block">
              ज्योतिरशास्त्र
            </span>
          </Link>
          <NavigationMenu>
            <NavigationMenuList>
              {navItems.map((item) => (
                <NavigationMenuItem key={item.href}>
                  <NavigationMenuLink
                    asChild
                    className={navigationMenuTriggerStyle()}
                  >
                    <Link href={item.href}>{item.title}</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Mobile Header Layout: [Menu] [Logo] [Right: Book Icon] */}
        <div className="flex flex-1 items-center md:hidden">
          {/* 1. Menu Trigger (Left) */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                className="px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 mr-2"
              >
                <AnimatedIcon
                  icon={Menu}
                  animation="scale"
                  className="h-6 w-6"
                  iconClassName="h-6 w-6"
                />
                <span className="sr-only">{t.nav.toggleMenu}</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="left"
              className="pr-0 flex flex-col bg-background/95 backdrop-blur-xl border-r-primary/20"
            >
              <SheetTitle className="sr-only">
                {t.nav.navigationMenu}
              </SheetTitle>

              {/* Mobile Menu Header */}
              <div className="px-6 py-6 border-b border-border/50">
                <Link
                  href="/"
                  className="flex items-center gap-2 group"
                  onClick={() => setIsOpen(false)}
                >
                  <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Sparkles className="h-5 w-5 text-primary" />
                  </div>
                  <span className="font-bold text-xl tracking-tight text-foreground">
                    ज्योतिरशास्त्र
                  </span>
                </Link>
              </div>

              {/* Mobile Menu Links */}
              <div className="flex flex-col space-y-1 mt-6 px-4">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="flex items-center gap-4 px-4 md:py-3 py-2 border-b border-border/50 text-base font-medium text-muted-foreground hover:text-primary hover:bg-primary/5 rounded-xl transition-all duration-200 group"
                    onClick={() => setIsOpen(false)}
                  >
                    <item.icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    {item.title}
                  </Link>
                ))}
              </div>

              {/* Theme Toggle & Footer */}
              <div className="mt-auto p-6 border-t border-border/50 bg-muted/20">
                <div className="flex items-center justify-between gap-4">
                  <span className="text-sm font-medium text-muted-foreground">
                    {t.nav.settings}
                  </span>
                  <div className="flex items-center gap-2">
                    <LanguageToggle />
                    <ModeToggle />
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>

          {/* 2. Logo (Center/Left) */}
          <div className="flex items-center gap-2 mr-auto">
            <Sparkles className="h-5 w-5 text-primary" />
          </div>

          {/* 3. Book Now Icon (Right) */}
          <Button variant="ghost" size="icon" className="text-primary">
            <Calendar className="h-5 w-5" />
            <span className="sr-only">{t.nav.bookNow}</span>
          </Button>
        </div>

        {/* Desktop Right Side */}
        <div className="hidden md:flex flex-1 items-center justify-end space-x-2">
          <nav className="flex items-center space-x-2">
            <LanguageToggle />
            <ModeToggle />
            <Button size="sm">{t.nav.bookNow}</Button>
          </nav>
        </div>
      </div>
    </header>
  );
}
