import { ArrowRight, FileText } from "lucide-react";

const steps = [
  {
    title: "Capture your best insights",
    description: "Content Catalyst extracts your top ideas from conversations with prospects, clients, and meeting participants—no more struggling with blank pages. Let your words spark content creation instantly.",
    imagePosition: "right"
  },
  {
    title: "Turn conversations into postable content",
    description: "Content Catalyst identifies valuable ideas from your call transcripts and automatically translates them into quality, authentic content in your voice for review—within minutes.",
    imagePosition: "left"
  },
  {
    title: "Your Automated\nContent Machine",
    description: "Content Catalyst delivers your polished posts to a personal content hub, where you can finalize edits before scheduling or automatically distributing. It's simple, efficient, and collaborative.",
    imagePosition: "right"
  }
];

export const SolutionSection = () => {
  return (
    <section id="solution" className="py-20 px-4 bg-gradient-to-b from-brand-gradient-end to-brand-gradient-start">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white">
          Streamline Your Content Workflow
        </h2>
        {steps.map((step, index) => (
          <div 
            key={step.title}
            className={`flex flex-col ${step.imagePosition === 'right' ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 mb-20 last:mb-0 animate-fade-in`}
          >
            <div className="flex-1 text-left">
              <h3 className="text-2xl md:text-3xl mb-4 text-white whitespace-pre-line">{step.title}</h3>
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
                    <div className="flex flex-col items-center gap-4 relative w-full h-full">
                      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        <img 
                          src="/lovable-uploads/d4ef8b2a-04fd-4478-8cea-fdaa0756150b.png" 
                          alt="Google Meet Logo" 
                          className="w-20 h-20 object-contain"
                        />
                      </div>
                      <div className="absolute bottom-1/4 left-1/4 -translate-x-1/2">
                        <img 
                          src="/lovable-uploads/6425c1aa-867d-4ea7-8d2c-ff556143906a.png" 
                          alt="Zoom Logo" 
                          className="w-20 h-20 object-contain"
                        />
                      </div>
                      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2">
                        <img 
                          src="/lovable-uploads/038df6d9-3eb8-402c-b234-605834103002.png" 
                          alt="Cloud Logo" 
                          className="w-20 h-20 object-contain"
                        />
                      </div>
                    </div>
                  )}
                  {index === 1 && (
                    <div className="flex flex-col items-center gap-4">
                      <img 
                        src="/lovable-uploads/d085e4e7-7cd6-4bf9-8184-4f6f4c4cc2c7.png" 
                        alt="Whale Logo" 
                        className="w-24 h-24 object-contain"
                      />
                      <img 
                        src="/lovable-uploads/8d5cd76b-7895-47d1-a187-aff999bef8f9.png" 
                        alt="Spiral Logo" 
                        className="w-24 h-24 object-contain"
                      />
                    </div>
                  )}
                  {index === 2 && (
                    <div className="flex flex-col items-center gap-4">
                      <img 
                        src="/lovable-uploads/1acd3f64-94ab-4f1d-9e72-f30ba955486e.png" 
                        alt="Content Hub" 
                        className="w-24 h-24 object-contain"
                      />
                      <img 
                        src="/lovable-uploads/5dabea7b-3133-4b98-bcb8-312fd7efc7e6.png" 
                        alt="Notion" 
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