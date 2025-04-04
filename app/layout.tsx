/* eslint-disable no-undef */
/* eslint-disable camelcase */

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/layout/navbar";
import { ThemeProvider } from "@/components/layout/theme-provider";
import Image from "next/image"; // Import the Image component
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Triset Solutions India Private Limited",
  description: "triset solution",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background", inter.className)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
{/*          
          <div className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white mb-4 text-center">
            <p className="font-semibold text-lg">
              Introducing Triset Soluatioins - Premium Websites And modern Apps We BUILD
            </p>
          </div> */}

          <Navbar />

          {children}

          {/* WhatsApp Button */}
          <Link
            href="https://wa.me/+919848814614?text=I%20am%20interested%20in%20your%20digital%20services."
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="fixed bottom-8 right-8 md:bottom-4 sm:right-4 md:right-4 cursor-pointer animate-blink">
              <Image
                src="/wa.png"
                alt="WhatsApp"
                width={64} // Set width for mobile
                height={64} // Set height for mobile
                className="transition-all duration-300 transform hover:scale-110"
              />
            </div>
          </Link>
        </ThemeProvider>
      </body>
    </html>
  );
}
