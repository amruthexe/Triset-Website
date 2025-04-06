import React from "react";
import Image from "next/image";

export const AboutUs = () => {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left: Image */}
          <div className="flex-1 flex justify-center md:justify-start">
            <div className="w-full md:w-[400px] h-auto rounded-tl-lg rounded-bl-lg overflow-hidden">
              <Image
                src="/final_slide1.svg"
                alt="Triset Solutions Office"
                width={400}
                height={400}
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          {/* Right: About Content */}
          <div className="flex-1 space-y-6 text-center md:text-left">
            <h2 className="text-4xl font-bold text-primary">Discover Our Journey</h2>
            <p className="text-lg text-muted-foreground">
              Triset Solutions India Private Limited, founded in 2023 and based in Hyderabad, India, is a dynamic company offering cutting-edge geospatial and digital solutions. Our journey began in 2018 as Aero Geospatial Services, and we rebranded to Triset Solutions to expand our offerings and better serve our clients worldwide.
            </p>
            <p className="text-lg text-muted-foreground">
              We specialize in services like photogrammetry, GIS, LiDAR data processing, drone data solutions, web and app development, e-commerce, digital marketing, and data entry. Our skilled team combines technical expertise with innovative technologies to deliver reliable and high-quality solutions tailored to our clients' needs.
            </p>
            <p className="text-lg text-muted-foreground">
              At Triset Solutions, we are committed to helping businesses, governments, and organizations make informed decisions by providing accurate data and innovative solutions. With a focus on quality, efficiency, and customer satisfaction, we strive to deliver exceptional value and establish ourselves as a trusted partner globally.
            </p>
            <p className="text-lg text-muted-foreground">
              Let us help you turn your data into impactful decisions with our innovative and reliable services.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
