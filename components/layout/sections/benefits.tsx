import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";

interface BenefitsProps {
  icon: string;
  title: string;
  description: string;
}

const benefitList: BenefitsProps[] = [
  {
    icon: "ShieldCheck",
    title: "Professional Expertise",
    description:
      "We bring together a robust and modern IT solutions team with deep expertise to drive your business forward.",
  },
  {
    icon: "UserPlus",
    title: "Generate More Leads",
    description:
      "Our innovative solutions help businesses expand their reach and attract more leads, creating long-term growth opportunities.",
  },
  {
    icon: "TrendingUp",
    title: "Boost Conversions",
    description:
      "Our expert strategies are designed to enhance conversion rates, ensuring measurable business growth and success.",
  },
  {
    icon: "ClipboardCheck",
    title: "Validate Market Ideas",
    description:
      "We help test and validate your market ideas to ensure they are aligned with your business objectives and industry trends.",
  },
];

export const BenefitsSection = () => {
  return (
    <section id="benefits" className="container py-24 sm:py-32">
      <div className="grid lg:grid-cols-2 place-items-center lg:gap-24">
        <div>
          <h2 className="text-lg text-primary mb-2 tracking-wider">Our Expertise</h2>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Your Partner in Digital Transformation
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            We are an IT solutions company with a dedicated and professional team that focuses on delivering modern, robust, and expert-driven solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-4 w-full">
          {benefitList.map(({ icon, title, description }, index) => (
            <Card
              key={title}
              className="bg-muted/50 dark:bg-card hover:bg-background transition-all delay-75 group/number"
            >
              <CardHeader>
                <div className="flex justify-between">
                  <Icon
                    name={icon as keyof typeof icons}
                    size={32}
                    color="hsl(var(--primary))"
                    className="mb-6 text-primary"
                  />
                  <span className="text-5xl text-muted-foreground/15 font-medium transition-all delay-75 group-hover/number:text-muted-foreground/30">
                    0{index + 1}
                  </span>
                </div>

                <CardTitle>{title}</CardTitle>
              </CardHeader>

              <CardContent className="text-muted-foreground">
                {description}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
