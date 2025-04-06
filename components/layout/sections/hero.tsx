"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const slides = [
  "/final_slide1.svg",
  "/final_slide2.svg",
  "/final_slide3.svg",
  "/final_slide4.svg",
];

export const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <section className="container w-full pt-6 lg:pt-10">
      <div className="grid place-items-center lg:max-w-screen-xl gap-8 mx-auto pb-10">
        {/* === Carousel First (hidden on mobile) === */}
        <div className="hidden md:block relative w-full max-w-6xl overflow-hidden rounded-xl shadow-md">
          {/* Arrows only on md+ screens */}
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white p-2 rounded-full shadow-md transition"
          >
            <ChevronLeft className="w-6 h-6 text-red-600" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white p-2 rounded-full shadow-md transition"
          >
            <ChevronRight className="w-6 h-6 text-red-600" />
          </button>

          {/* SVG Carousel */}
          <div className="relative h-[300px] sm:h-[400px] md:h-[500px]">
            {slides.map((src, index) => (
              <div
                key={index}
                className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
                  index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
                }`}
              >
                <Image
                  src={src}
                  alt={`Slide ${index + 1}`}
                  fill
                  priority
                  className="rounded-2xl transition-all duration-1000 ease-in-out object-cover sm:object-contain"
                />
              </div>
            ))}
          </div>

          {/* Slide Indicators */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-30">
            {slides.map((_, idx) => (
              <span
                key={idx}
                className={`w-3 h-3 rounded-sm transition-all duration-300 ${
                  idx === currentSlide
                    ? "bg-red-600 scale-110"
                    : "bg-red-300"
                }`}
              />
            ))}
          </div>
        </div>

        {/* === Text Section Below Carousel === */}
        <div className="text-center pt-8 space-y-10">
          <Badge variant="outline" className="text-sm py-2">
            <span className="mr-2 text-primary">🚀</span>
            <span>Services Available!</span>
          </Badge>

          <div className="max-w-screen-md mx-auto text-center text-4xl md:text-6xl font-bold">
            <h1>
              Want to Elevate your
              <span className="text-transparent px-2 bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text">
                Business?
              </span>
              with a powerful digital presence
            </h1>
          </div>

          <p className="max-w-screen-sm mx-auto text-xl text-muted-foreground">
            We go beyond websites — from custom web apps to full-scale digital solutions,
            we build the tools that help your business grow and thrive online.
          </p>

          <div className="space-y-4 md:space-y-0 md:space-x-4">
            <Button asChild className="w-5/6 md:w-1/4 font-bold group/arrow">
              <Link
                href="https://wa.me/919848814614?text=Hi%2C%20I'm%20interested%20in%20booking%20a%20demo%20with%20your%20team."
                target="_blank"
              >
                Book a demo
                <ArrowRight className="size-5 ml-2 group-hover/arrow:translate-x-1 transition-transform" />
              </Link>
            </Button>

            <Button
              asChild
              variant="secondary"
              className="w-5/6 md:w-1/4 font-bold"
            >
              <Link href="tel:+919848814614">Call Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
