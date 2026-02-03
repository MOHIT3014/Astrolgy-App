import type { Metadata } from "next";
import { Geist, Geist_Mono, Rozha_One } from "next/font/google";
import "./globals.css";
import "./globals.css";
// import { Navbar } from "@/components/navbar"; // Removing direct import
import { LayoutWrapper } from "@/components/layout-wrapper";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const rozhaOne = Rozha_One({
  weight: "400",
  variable: "--font-rozha-one",
  subsets: ["devanagari", "latin"],
});

export const metadata: Metadata = {
  title: "Astrology App",
  description: "Your daily astrology companion",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${rozhaOne.variable} antialiased h-full w-full`}
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >
            <LayoutWrapper>
                {children}
            </LayoutWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
