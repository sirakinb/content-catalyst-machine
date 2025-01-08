import { ArrowRight } from "lucide-react";

const steps = [
  {
    image: "/lovable-uploads/c8a0ba83-3644-4bcd-a8d0-91845cdd770d.png",
    title: "Capture your best insights",
    description: "Content-Catalyst extracts your top ideas from conversations with prospects, clients, and meeting participants—no more struggling with blank pages. Let your words spark content creation instantly",
    imagePosition: "right"
  },
  {
    image: "/lovable-uploads/8d753dfd-e4b5-4289-9f05-3b7a17dfab77.png",
    title: "Turn conversations into content instantly",
    description: "Content-Catalyst identifies valuable ideas from your call transcripts and sends them to Slack or Trello for your review—within minutes. creation powered by intelligent automation",
    imagePosition: "left"
  },
  {
    image: "/lovable-uploads/5ad297f5-c4c1-4213-b19c-79e6cfcd43be.png",
    title: "Streamline your content workflow",
    description: "Once approved, Content-Catalyst transforms your ideas into polished posts and delivers them directly to your content hub, ready for final edits and scheduling. Simple, efficient, and collaborative",
    imagePosition: "right"
  }
];

export const SolutionSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-brand-gradient-end to-brand-gradient-start">
      <div className="max-w-6xl mx-auto">
        {steps.map((step, index) => (
          <div 
            key={step.title}
            className={`flex flex-col ${step.imagePosition === 'right' ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 mb-20 last:mb-0 animate-fade-in`}
          >
            <div className="flex-1 text-left">
              <h3 className="text-2xl md:text-3xl mb-4 text-white">{step.title}</h3>
              <p className="text-gray-300 leading-relaxed mb-6">{step.description}</p>
              {index < steps.length - 1 && (
                <ArrowRight className="w-6 h-6 text-brand-purple mx-auto md:mx-0 rotate-90 md:rotate-0" />
              )}
            </div>
            <div className="flex-1">
              <img 
                src={step.image} 
                alt={step.title}
                className="rounded-lg shadow-xl hover:scale-105 transition-transform duration-300 w-full max-w-[500px] mx-auto"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};