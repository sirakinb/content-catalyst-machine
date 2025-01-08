import { ArrowRight, FileText } from "lucide-react";

const steps = [
  {
    title: "Capture your best insights",
    description: "Content-Catalyst extracts your top ideas from conversations with prospects, clients, and meeting participants—no more struggling with blank pages. Let your words spark content creation instantly",
    imagePosition: "right"
  },
  {
    title: "Turn conversations into content instantly",
    description: "Content-Catalyst identifies valuable ideas from your call transcripts and sends them to Slack or Trello for your review—within minutes. creation powered by intelligent automation",
    imagePosition: "left"
  },
  {
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
            <div className="flex-1 flex items-center justify-center">
              <div className={`
                w-[300px] h-[300px] rounded-3xl
                ${index === 0 ? 'bg-gradient-to-br from-brand-purple to-brand-pink' : 
                  index === 1 ? 'bg-gradient-to-tr from-brand-purple/80 to-brand-pink/80' :
                  'bg-gradient-to-bl from-brand-purple/60 to-brand-pink/60'}
                transform hover:scale-105 transition-transform duration-300
                shadow-lg hover:shadow-xl
                relative overflow-hidden
                ${index % 2 === 0 ? 'rotate-3' : '-rotate-3'}
              `}>
                <div className="absolute inset-0 backdrop-blur-sm bg-white/5 flex items-center justify-center">
                  {index === 0 && (
                    <div className="flex flex-col items-center gap-4">
                      <img 
                        src="/lovable-uploads/376e9b87-7b9a-439a-ac20-cc4e6d1b84b0.png" 
                        alt="Fathom" 
                        className="w-24 h-24 object-contain"
                      />
                      <img 
                        src="/lovable-uploads/900c556a-990d-4f13-b9a4-67ffb5f2d73e.png" 
                        alt="ChatGPT" 
                        className="w-24 h-24 object-contain"
                      />
                    </div>
                  )}
                  {index === 1 && (
                    <div className="relative">
                      <img 
                        src="/lovable-uploads/8e6ee1f2-d236-4104-bc55-04e558afb805.png" 
                        alt="Trello" 
                        className="w-24 h-24 object-contain"
                      />
                    </div>
                  )}
                  {index === 2 && (
                    <div className="relative">
                      <img 
                        src="/lovable-uploads/abc28c97-c92c-44c9-b2ce-b4caa1b53d5b.png" 
                        alt="Airtable" 
                        className="w-24 h-24 object-contain"
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};