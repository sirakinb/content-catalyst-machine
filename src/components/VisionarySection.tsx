import { Check } from "lucide-react";

export const VisionarySection = () => {
  const benefits = [
    "Effortlessly generate content from your everyday conversations",
    "Eliminate the frustration of staring at a blank screen",
    "Transform your best insights into powerful, lead-generating content that nurtures and converts",
    "Stay consistent with a daily posting schedule to keep the algorithm working in your favor",
    "Repurpose your content ideas more efficiently than ever before"
  ];

  return (
    <section className="py-20 px-4 bg-dark-100">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            You are a Visionary.
            <br />
            Expand Your Impact.
          </h2>
          <p className="text-xl text-brand-purple mb-12">
            With Call-to-Content, you can:
          </p>
        </div>
        
        <div className="grid gap-4 max-w-3xl mx-auto">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="flex items-start gap-4 p-4 rounded-lg bg-dark-200 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Check className="w-6 h-6 text-[#00FFD1] flex-shrink-0 mt-1" />
              <p className="text-lg">{benefit}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};