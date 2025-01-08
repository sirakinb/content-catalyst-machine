import { cn } from "@/lib/utils";

const steps = [
  {
    number: "01",
    title: "Your best ideas, captured",
    description: "Call-to-Content extracts the best ideas you already share with prospects, clients, and investors. No more blank-page syndrome.",
    image: "/lovable-uploads/c5857efd-2621-46fb-b945-a256d3b06bc0.png"
  },
  {
    number: "02",
    title: "AI-Powered Automation",
    description: "Your transcript has 8-12 amazing ideas in it. We'll send those to you for approval in Slack 2 minutes after your call.",
    image: "/lovable-uploads/3cf50142-4d6c-4eca-84b7-1a1b6022344b.png"
  },
  {
    number: "03",
    title: "Read, edit, post",
    description: "After Slack approval, we'll build out a full post and deliver it to your content hub for editing and scheduling!",
    image: "/lovable-uploads/b46f73a4-511d-4ee5-8abd-bfba70bd7c6a.png"
  }
];

export const SolutionSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-brand-gradient-end to-brand-gradient-start">
      <div className="max-w-6xl mx-auto">
        {steps.map((step, index) => (
          <div 
            key={step.number}
            className={cn(
              "flex flex-col md:flex-row items-center gap-12 mb-32 last:mb-0",
              index % 2 === 1 && "md:flex-row-reverse"
            )}
          >
            <div className="flex-1 text-white animate-fade-in">
              <span className="text-3xl text-gray-400 mb-4 block">{step.number}.</span>
              <h3 className="text-4xl mb-6">{step.title}</h3>
              <p className="text-xl text-gray-300 leading-relaxed">{step.description}</p>
            </div>
            <div className="flex-1">
              <img 
                src={step.image} 
                alt={step.title}
                className="w-full h-auto rounded-lg animate-fade-in shadow-lg"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};