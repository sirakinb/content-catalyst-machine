import { Clock, MessageSquare, TrendingDown } from "lucide-react";

const problems = [
  {
    icon: Clock,
    title: "Inconsistent Posting",
    description: "Founders get busy. Content creation falls through the cracks and the brand stagnates.",
  },
  {
    icon: MessageSquare,
    title: "Misaligned Brand Voice",
    description: "Without a plan, messaging can feel disjointed and fail to resonate.",
  },
  {
    icon: TrendingDown,
    title: "Slow Growth & Missed Opportunities",
    description: "A neglected content strategy means fewer leads and less brand visibility.",
  },
];

export const ProblemSection = () => {
  return (
    <section className="py-20 px-4 bg-dark-100">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          The Problem With Founder-Led Content
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {problems.map((problem) => (
            <div key={problem.title} className="text-center p-6 rounded-lg bg-dark-200 animate-fade-in">
              <problem.icon className="w-12 h-12 mx-auto mb-4 text-brand-purple" />
              <h3 className="text-xl font-semibold mb-4">{problem.title}</h3>
              <p className="text-gray-400">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};