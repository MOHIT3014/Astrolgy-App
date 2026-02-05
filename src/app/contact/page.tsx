"use client";

import { ContactForm } from "@/components/contact-form";
import { Mail, MapPin, Phone } from "lucide-react";
import { useTranslations } from "@/hooks/use-translations";

export default function ContactPage() {
  const t = useTranslations();

  return (
    <div className="container mx-auto px-4 py-12 md:py-24 space-y-12">
      {/* Hero / Intro Section could go here */}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Left Side: Contact Info */}
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-rozha text-primary font-bold">
              {t.contact.heroTitle}
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              {t.contact.heroDescription}
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-center space-x-4 p-4 rounded-lg bg-card/50 border border-border/50">
              <div className="p-3 bg-primary/10 rounded-full text-primary">
                <Mail size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">
                  {t.contact.emailLabel}
                </h3>
                <p className="text-muted-foreground">
                  contact@astrologyapp.com
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4 p-4 rounded-lg bg-card/50 border border-border/50">
              <div className="p-3 bg-primary/10 rounded-full text-primary">
                <Phone size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">
                  {t.contact.phone}
                </h3>
                <p className="text-muted-foreground">+91 98765 43210</p>
              </div>
            </div>

            <div className="flex items-center space-x-4 p-4 rounded-lg bg-card/50 border border-border/50">
              <div className="p-3 bg-primary/10 rounded-full text-primary">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">
                  {t.contact.location}
                </h3>
                <p className="text-muted-foreground">Varanasi, India</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="w-full">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
