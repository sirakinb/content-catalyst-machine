import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How do you create content customized to my brand voice?",
    answer: "Our system uses advanced LLM prompting in automated workflows, learning from your past content and samples to understand your unique voice. It's a self-improving system that gets better at matching your tone and style over time.",
  },
  {
    question: "What types of content will you handle?",
    answer: "We specialize in short-form text for LinkedIn, Twitter, and blog posts. Other channels and formats can be included upon request to match your specific needs.",
  },
  {
    question: "Do you offer any money-back guarantees?",
    answer: "Yes! If you're not satisfied in the first 30 days, you get your money back - there's no risk to try our service.",
  },
  {
    question: "Can content creation really be automated?",
    answer: "We take what you already say, whether it's the conversations you're having about your products or services, or discussions about your prospects and customers' pain points. Then we help you capture more of that value through repurposed content that is put on autopilot for you.",
  },
];

export const FAQSection = () => {
  return (
    <section className="relative py-20 px-4">
      <div className="absolute inset-0 bg-gradient-to-b from-[#130B1D] to-brand-gradient-start pointer-events-none" />
      <div className="relative max-w-3xl mx-auto">
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