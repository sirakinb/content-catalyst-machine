import { Target, Users, Megaphone, ShoppingBag } from "lucide-react";

const steps = [
  {
    icon: Target,
    title: "Why Content Matters",
    description: "To get visibility, creating content is essential. The alternative? Paying for traffic through Google, Meta, or LinkedIn ads.",
  },
  {
    icon: Megaphone,
    title: "Building Brand Recognition",
    description: "Selling becomes difficult when your audience doesn't know who you are. Consistent content helps establish your brand and attract potential revenue.",
  },
  {
    icon: Users,
    title: "Nurturing Leads",
    description: "Sharing valuable content positions you as an authority in your industry, reinforcing trust and expertise until prospects are ready to buy.",
  },
  {
    icon: ShoppingBag,
    title: "Closing Deals",
    description: "Staying top of mind through content ensures your business is remembered when a lead is ready to make a purchasing decision.",
  },
];

export const ProcessSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Your Content Engine On Autopilot
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {steps.map((step, index) => (
            <div key={step.title} className="relative animate-fade-in">
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 right-0 w-full h-0.5 bg-white transform translate-x-1/2" />
              )}
              <div className="text-center p-6 rounded-lg bg-dark-100 relative z-10">
                <step.icon className="w-12 h-12 mx-auto mb-4 text-gray-300" />
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