"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "framer-motion";
import { Loader2, Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Form, FormControl } from "@/components/ui/form";
import { Field, FieldLabel, FieldError } from "@/components/ui/field";
import { useTranslations } from "@/hooks/use-translations";
import { toast } from "sonner"; // Assuming sonner is used based on package.json

export function ContactForm() {
  const t = useTranslations();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const formSchema = z.object({
    firstName: z
      .string()
      .min(2, { message: t.contact.validation.firstNameMin }),
    lastName: z.string().min(2, { message: t.contact.validation.lastNameMin }),
    email: z.string().email({ message: t.contact.validation.emailInvalid }),
    message: z.string().min(30, { message: t.contact.validation.messageMin }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    console.log(values);
    toast.success(t.contact.success);
    form.reset();
    setIsSubmitting(false);
  }

  return (
    <Card className="w-full max-w-2xl mx-auto shadow-lg bg-card/50 backdrop-blur-sm border-primary/10">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center font-rozha text-primary">
          {t.contact.title}
        </CardTitle>
        <CardDescription className="text-center">
          {t.contact.subtitle}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Field>
                <FieldLabel>{t.contact.firstName}</FieldLabel>
                <FormControl>
                  <Input
                    placeholder={t.contact.firstName}
                    {...form.register("firstName")}
                  />
                </FormControl>
                <FieldError errors={[form.formState.errors.firstName]} />
              </Field>

              <Field>
                <FieldLabel>{t.contact.lastName}</FieldLabel>
                <FormControl>
                  <Input
                    placeholder={t.contact.lastName}
                    {...form.register("lastName")}
                  />
                </FormControl>
                <FieldError errors={[form.formState.errors.lastName]} />
              </Field>
            </div>

            <Field>
              <FieldLabel>{t.contact.email}</FieldLabel>
              <FormControl>
                <Input
                  placeholder="john@example.com"
                  {...form.register("email")}
                />
              </FormControl>
              <FieldError errors={[form.formState.errors.email]} />
            </Field>

            <Field>
              <FieldLabel>{t.contact.message}</FieldLabel>
              <FormControl>
                <Textarea
                  placeholder={t.contact.subtitle}
                  className="min-h-[120px]"
                  {...form.register("message")}
                />
              </FormControl>
              <FieldError errors={[form.formState.errors.message]} />
            </Field>

            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="mr-2 h-4 w-4" />
                  {t.contact.send}
                </>
              )}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
