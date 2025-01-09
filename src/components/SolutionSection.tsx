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
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white">
          Your Automated Content Machine
        </h2>
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
                        src="/lovable-uploads/12367c26-f261-4d7f-b70a-85196ad028b0.png" 
                        alt="Fathom" 
                        className="w-24 h-24 object-contain"
                      />
                      <img 
                        src="/lovable-uploads/df02ca03-2987-459f-85ba-a13d5b709ca5.png" 
                        alt="ChatGPT" 
                        className="w-24 h-24 object-contain"
                      />
                    </div>
                  )}
                  {index === 1 && (
                    <div className="flex flex-col items-center gap-4">
                      <img 
                        src="/lovable-uploads/ee3a8285-af62-4ef4-a59a-68f691e986d3.png" 
                        alt="Trello" 
                        className="w-24 h-24 object-contain"
                      />
                      <img 
                        src="/lovable-uploads/92ef4d17-b0fc-4a99-9b1c-7324dc3bd168.png" 
                        alt="Slack" 
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
                        src="/lovable-uploads/2684b4e7-f485-4398-8047-13249cb30db6.png" 
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