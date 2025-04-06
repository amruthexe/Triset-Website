import Wrapper from "@/components/global/wrapper";
import { AboutUs } from "@/components/layout/AboutUs";
import FeaturesSectionDemo from "@/components/layout/sections/Afeatures";
import { BenefitsSection } from "@/components/layout/sections/benefits";
import { CommunitySection } from "@/components/layout/sections/community";
import { ContactSection } from "@/components/layout/sections/contact";
import CTA from "@/components/layout/sections/cta";
import { FAQSection } from "@/components/layout/sections/faq";
import { FeaturesSection } from "@/components/layout/sections/features";
import { FooterSection } from "@/components/layout/sections/footer";
import { HeroSection } from "@/components/layout/sections/hero";
import  OurProcess  from "@/components/layout/sections/OurProcess";
import { PricingSection } from "@/components/layout/sections/pricing";
import { ServicesSection } from "@/components/layout/sections/services";
import { SponsorsSection } from "@/components/layout/sections/sponsors";
import TeamSection from "@/components/layout/sections/TeamSection";
import { TestimonialSection } from "@/components/layout/sections/testimonial";
import { FeaturesSectionDemo1 } from "@/components/layout/sections/youtube";

export const metadata = {
  title: "Triset Solutions India Private Limited",
  description: "triset solution",
  openGraph: {
    type: "website",
    url: "https://github.com/nobruf/shadcn-landing-page.git",
    title: "Triset Solutions India Private Limited",
  description: "triset solution",
    images: [
      {
        url: "https://res.cloudinary.com/dbzv9xfjp/image/upload/v1723499276/og-images/shadcn-vue.jpg",
        width: 1200,
        height: 630,
        alt: "Shadcn - Landing template",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "https://github.com/nobruf/shadcn-landing-page.git",
    title: "Shadcn - Landing template",
    description: "Free Shadcn landing page for developers",
    images: [
      "https://res.cloudinary.com/dbzv9xfjp/image/upload/v1723499276/og-images/shadcn-vue.jpg",
    ],
  },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <SponsorsSection />
      <BenefitsSection />
      <FeaturesSection />
      <ServicesSection />
      <PricingSection />
      <OurProcess/>
      < FeaturesSectionDemo1/>
      <TeamSection/>
      <TestimonialSection />
      <ContactSection />
      <FAQSection />
{/*      
      <FeaturesSectionDemo/> */}
      <CommunitySection />
     <AboutUs/>
     <Wrapper className="py-20 relative">
     <CTA/>
     </Wrapper>
      <FooterSection />
     
    </>
  );
}
