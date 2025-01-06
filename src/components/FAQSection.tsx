import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How do you create content customized to my brand voice?",
    answer: "We begin with a brand audit, then refine posts based on your feedback.",
  },
  {
    question: "What types of content will you handle?",
    answer: "We specialize in short-form text for LinkedIn, Twitter, and blog blurbs; we can adapt further if needed.",
  },
  {
    question: "Do you offer any money-back guarantees?",
    answer: "We stand behind our work—ask us about our satisfaction policies.",
  },
  {
    question: "Can content creation really be automated?",
    answer: "With the right tools and process, yes! We blend AI-driven drafts with real human touch.",
  },
];

export const FAQSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-dark-100 to-black">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Frequently Asked Questions
        </h2>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};