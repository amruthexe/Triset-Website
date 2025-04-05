import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";

interface FeaturesProps {
  icon: string;
  title: string;
  description: string;
}

const featureList: FeaturesProps[] = [
  {
    icon: "TabletSmartphone",
    title: "Mobile-Friendly Designs",
    description:
      "We ensure that your website is fully optimized for mobile devices, offering a seamless experience across all screen sizes.",
  },
  {
    icon: "BadgeCheck",
    title: "Proven Results",
    description:
      "With years of experience, we bring proven strategies that build your brand presence online, boosting engagement and driving conversions.",
  },
  {
    icon: "Goal",
    title: "Targeted Solutions",
    description:
      "Our tailored solutions are designed to meet your specific business needs, ensuring that every strategy drives measurable results.",
  },
  {
    icon: "PictureInPicture",
    title: "Visually Engaging",
    description:
      "We create visually appealing websites that capture your audience's attention with dynamic layouts, intuitive navigation, and stunning graphics.",
  },
  {
    icon: "MousePointerClick",
    title: "Clear Call-to-Actions",
    description:
      "We design clear, action-oriented buttons and links to guide users through the journey, converting visitors into leads and customers.",
  },
  {
    icon: "Newspaper",
    title: "Impactful Headlines",
    description:
      "Crafting compelling headlines that grab attention and communicate your value proposition, creating a strong first impression.",
  },
];

export const FeaturesSection = () => {
  return (
    <section id="features" className="container py-24 sm:py-32">
      <h2 className="text-lg font-bold text-primary text-center mb-2 tracking-wider">
        Features
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        What Makes Us Different
      </h2>

      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
        At our agency, we don’t just build websites; we create powerful digital experiences that drive results. From strategy to execution, we make sure your brand stands out online.
      </h3>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {featureList.map(({ icon, title, description }) => (
          <div key={title}>
            <Card className="h-full bg-background border-0 shadow-none">
              <CardHeader className="flex justify-center items-center">
                <div className="bg-primary/20 p-2 rounded-full ring-8 ring-primary/10 mb-4">
                  <Icon
                    name={icon as keyof typeof icons}
                    size={24}
                    color="hsl(var(--primary))"
                    className="text-primary"
                  />
                </div>

                <CardTitle>{title}</CardTitle>
              </CardHeader>

              <CardContent className="text-muted-foreground text-center">
                {description}
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
};
