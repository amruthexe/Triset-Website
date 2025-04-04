import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "Is your consultation free?",
    answer:
      "Yes, we offer a free initial consultation to discuss your project and understand your needs. After that, we can provide a tailored proposal.",
    value: "item-1",
  },
  {
    question: "What services do you offer?",
    answer:
      "We provide a full range of digital services including website development, app development, UI/UX design, and digital marketing. We also offer consultation to help businesses optimize their digital presence.",
    value: "item-2",
  },
  {
    question: "How long does it take to build a website?",
    answer:
      "The timeline depends on the complexity of your project. A standard website usually takes 4-6 weeks, while more complex applications might take longer. We will provide an estimated timeline during our consultation.",
    value: "item-3",
  },
  {
    question: "Do you provide ongoing support after the project is completed?",
    answer:
      "Yes, we offer ongoing maintenance and support packages to ensure your website or app remains updated and secure.",
    value: "item-4",
  },
  {
    question: "Can you help with SEO and digital marketing?",
    answer:
      "Absolutely! We offer SEO optimization and digital marketing services to help improve your online visibility and reach your target audience effectively.",
    value: "item-5",
  },
  {
    question: "How do I get started?",
    answer:
      "Simply reach out to us for a free consultation! We'll discuss your project, understand your goals, and propose the best solutions to meet your needs.",
    value: "item-6",
  },
];


export const FAQSection = () => {
  return (
    <section id="faq" className="container md:w-[700px] py-24 sm:py-32">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          FAQS
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold">
          Common Questions
        </h2>
      </div>

      <Accordion type="single" collapsible className="AccordionRoot">
        {FAQList.map(({ question, answer, value }) => (
          <AccordionItem key={value} value={value}>
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};
