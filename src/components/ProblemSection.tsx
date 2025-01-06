import { Clock, Brain, LayoutList } from "lucide-react";

const problems = [
  {
    icon: Clock,
    title: "Time Constraints",
    description: "Founders are constantly putting out fires, making it difficult to break away from daily operations to craft a LinkedIn post.",
  },
  {
    icon: Brain,
    title: "Creative Block",
    description: "Staring at a blank page can be paralyzing. You have valuable insights but struggle to turn them into content.",
  },
  {
    icon: LayoutList,
    title: "Lack of Structure",
    description: "Consistency is key in content creation. Without regularly sharing valuable insights, your message will get lost in the crowd.",
  },
];

export const ProblemSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-brand-gradient-start to-brand-gradient-end">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white">
          The Problem With Founder-Led Content
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {problems.map((problem) => (
            <div 
              key={problem.title} 
              className="text-center p-8 rounded-2xl bg-brand-deep-purple/80 backdrop-blur-sm border border-white/10 animate-fade-in hover:transform hover:scale-105 transition-all duration-300"
            >
              <problem.icon className="w-12 h-12 mx-auto mb-6 text-gray-300" />
              <h3 className="text-xl font-semibold mb-4 text-white">{problem.title}</h3>
              <p className="text-gray-300 leading-relaxed">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};