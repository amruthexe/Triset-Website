import { ClipboardList, PenTool, Rocket, Settings, Layout, Earth } from 'lucide-react';

const processes = [
  {
    title: 'The details',
    icon: <ClipboardList className="w-12 h-12 text-primary" />,
    description:
      "We take the time to understand your business and its challenges. Our team asks the right questions to ensure that we can craft the most fitting solutions that align with your goals.",
  },
  {
    title: 'The plan',
    icon: <Settings className="w-12 h-12 text-primary" />,
    description:
      "In this phase, we define the roadmap. We identify the features, functionalities, and structure of your project, ensuring that everything is in place for a smooth and efficient workflow.",
  },
  {
    title: 'The design',
    icon: <PenTool className="w-12 h-12 text-primary" />,
    description:
      "Our creative team steps in to bring your vision to life with innovative designs. We provide mockups that are optimized for both desktop and mobile experiences, followed by a collaborative review process.",
  },
  {
    title: 'The build',
    icon: <Layout className="w-12 h-12 text-primary" />,
    description:
      "This is where everything comes together. We develop the solution with attention to detail, ensuring compatibility across modern browsers and devices, maintaining high standards in every aspect of the build.",
  },
  {
    title: 'Testing & delivery',
    icon: <Rocket className="w-12 h-12 text-primary" />,
    description:
      "Before launch, we conduct thorough testing to ensure that the solution works flawlessly. Once we're confident that it's ready, we provide you with a preview link to explore the project firsthand.",
  },
  {
    title: 'The launch', // New process
    icon: <Earth className="w-12 h-12 text-primary" />, // Earth icon used for launch
    description:
      "The final step! We assist with the smooth launch of your project, ensuring all elements are in place. Post-launch, we monitor the performance and provide continuous support to address any issues that may arise.",
  },
];

export default function ProcessSection() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-[1200px] mx-auto px-4">
        <h2 className="text-lg font-bold text-primary text-center mb-2 tracking-wider">
          Our Process
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold mb-12">
          How We Work
        </h2>
        <div className="relative">
          {/* Grid layout for processes */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-16">
            {processes.map((process) => (
              <div
                key={process.title}
                className="flex flex-col items-center justify-center space-y-8 p-6 border-2 border-primary/10 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                {/* Icon and Title container */}
                <div className="flex flex-col items-center space-y-4">
                  {/* Icon */}
                  <div className="relative mb-4 group">
                    <div className="absolute -inset-4 rounded-full bg-primary/5 group-hover:animate-pulse" />
                    <div className="relative w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center shadow-lg shadow-primary/20">
                      {process.icon}
                    </div>
                  </div>
                  {/* Title Below Icon */}
                  <h3 className="text-2xl font-semibold text-primary">
                    {process.title}
                  </h3>
                </div>

                {/* Process Description */}
                <div className="w-full space-y-2 text-left text-lg text-muted-foreground leading-relaxed max-w-xs mx-auto">
                  <p>{process.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
