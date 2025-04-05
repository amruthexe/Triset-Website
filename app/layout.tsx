/* eslint-disable no-undef */
/* eslint-disable camelcase */

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/layout/navbar";
import { ThemeProvider } from "@/components/layout/theme-provider";
import { FaPhoneAlt, FaEnvelope, FaWhatsapp } from "react-icons/fa"; // <-- Added icons
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
          {/* <div className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white mb-4 text-center">
            <p className="font-semibold text-lg">
              Introducing Triset Soluatioins - Premium Websites And modern Apps We BUILD
            </p>
          </div> */}

          <Navbar />

          {children}

          {/* Contact Icons - Call, Email, WhatsApp */}
          <div className="fixed bottom-8 right-8 md:bottom-4 md:right-4 flex flex-col gap-3 items-center z-50">
            {/* Call Icon */}
            <Link href="tel:+919848814614">
              <div className="bg-red-600 text-white p-4 rounded-full shadow-lg hover:scale-110 transition-all">
                <FaPhoneAlt size={20} />
              </div>
            </Link>

            {/* Email Icon */}
            <Link href="mailto:admin@trisetsoluations.com">
              <div className="bg-red-600 text-white p-4 rounded-full shadow-lg hover:scale-110 transition-all">
                <FaEnvelope size={20} />
              </div>
            </Link>

            {/* WhatsApp Icon */}
            <Link
              href="https://wa.me/919848814614?text=I%20am%20interested"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="bg-green-600 text-white p-4 rounded-full shadow-lg hover:scale-110 transition-all animate-blink">
                <FaWhatsapp size={20} />
              </div>
            </Link>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
