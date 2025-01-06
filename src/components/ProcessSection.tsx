import { Search, PenTool, Coffee } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "We Audit Your Brand Voice",
    description: "We listen to your story, values, and target audience to shape a unique content tone.",
  },
  {
    icon: PenTool,
    title: "We Draft & Schedule Content",
    description: "Our platform (and team) curates, writes, and schedules posts tailored to your voice.",
  },
  {
    icon: Coffee,
    title: "Relax While We Handle The Rest",
    description: "Let us manage everything—analysis, feedback, adjustments—so you can focus on what matters.",
  },
];

export const ProcessSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Your Content Engine On Autopilot
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={step.title} className="relative animate-fade-in">
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 right-0 w-full h-0.5 bg-gradient-to-r from-brand-purple to-brand-pink transform translate-x-1/2" />
              )}
              <div className="text-center p-6 rounded-lg bg-dark-100 relative z-10">
                <step.icon className="w-12 h-12 mx-auto mb-4 text-brand-purple" />
                <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};