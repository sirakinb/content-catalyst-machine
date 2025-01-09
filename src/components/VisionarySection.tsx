import { Check } from "lucide-react";

export const VisionarySection = () => {
  const benefits = [
    "Turn everyday conversations and meetings into engaging content",
    "Say goodbye to creative block and the stress of a blank screen",
    "Convert your best ideas into impactful content that drives leads and sales",
    "Maintain a steady posting rhythm to keep the algorithm working in your favor",
    "Recycle and refresh your content ideas faster than ever before"
  ];

  return (
    <section className="py-20 px-4 bg-dark-100">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Increase Your Reach.
            <br />
            Amplify Your Impact.
          </h2>
          <p className="text-xl text-brand-purple mb-12">
            With Content-Catalyst, you can:
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