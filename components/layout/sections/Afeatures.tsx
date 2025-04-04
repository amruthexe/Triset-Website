import { cn } from "@/lib/utils";
import {
  IconDeviceDesktop,
  IconPalette,
  IconChartBar,
  IconCloud,
  IconShieldCheck,
  IconRocket,
  IconPhoneCall,
  IconWorld,
} from "@tabler/icons-react";

export default function FeaturesSectionDemo() {
  const features = [
    {
      title: "Custom Website Development",
      description:
        "Responsive, fast, and scalable websites built to reflect your brand and engage users.",
      icon: <IconDeviceDesktop />,
    },
    {
      title: "UI/UX & Branding",
      description:
        "Beautiful, user-first design and branding to make your digital presence unforgettable.",
      icon: <IconPalette />,
    },
    {
      title: "SEO & Analytics",
      description:
        "We optimize your visibility and track real results with performance-focused tools.",
      icon: <IconChartBar />,
    },
    {
      title: "Fast & Secure Hosting",
      description:
        "Enterprise-grade hosting for unbeatable speed, uptime, and data protection.",
      icon: <IconCloud />,
    },
    {
      title: "Ongoing Maintenance",
      description:
        "From backups to updates, we keep your platform running smooth and secure.",
      icon: <IconShieldCheck />,
    },
    {
      title: "Digital Marketing Tools",
      description:
        "Lead capture, automations, newsletters, and integrations to grow your audience.",
      icon: <IconRocket />,
    },
    {
      title: "Dedicated Support",
      description:
        "Our team is just a message away — get help when you need it, 24/7.",
      icon: <IconPhoneCall />,
    },
    {
      title: "Global Reach",
      description:
        "Multi-language support and global-ready infrastructure for your growing brand.",
      icon: <IconWorld />,
    },
  ];

  return (
    <>
    <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          New
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold">
          We Are Professional At 
        </h2>
      </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 py-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
    </>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 ? (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-orange-100 dark:from-orange-800 to-transparent pointer-events-none" />
      ) : (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-orange-100 dark:from-orange-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-primary transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
