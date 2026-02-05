"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Facebook, Twitter, Instagram, Linkedin, Github } from "lucide-react";
import { useTranslations } from "@/hooks/use-translations";

export function Footer() {
  const t = useTranslations();

  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { name: t.nav.home, href: "/" },
    { name: t.nav.about, href: "/about" },
    { name: t.nav.services, href: "/#services" },
    { name: t.nav.contact, href: "/contact" },
    { name: t.nav.dailyHoroscope, href: "/daily-horoscope" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ];

  return (
    <footer className="w-full bg-background border-t border-border mt-auto">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="space-y-4">
            <h3 className="text-xl font-rozha text-primary font-bold">
              {t.footer.title}
            </h3>
            <p className="text-muted-foreground text-sm">
              {t.footer.description}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-2 text-sm">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services (Quick Access) */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">
              {t.footer.services}
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {t.footer.kundliMatching}
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {t.footer.vastuConsultation}
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter/Social */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">
              {t.footer.connect}
            </h4>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  className="p-2 rounded-full bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </Link>
              ))}
            </div>
            <div className="pt-2">
              <p className="text-xs text-muted-foreground">
                {t.footer.subscribe}
              </p>
              {/* Placeholder for newsletter input if needed later */}
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>
            &copy; {currentYear} {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
