import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$349",
    description: "Set Up Fee",
    features: [
      "Up to 4 curated content pieces per month",
      "Basic brand voice alignment",
      "Email support",
    ],
    cta: "Get Starter",
  },
  {
    name: "Momentum",
    price: "$499",
    description: "Set Up Fee",
    features: [
      "Everything in Starter",
      "Up to 8 curated content pieces per month",
      "Detailed content strategy reviews",
    ],
    cta: "Go Momentum",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Pricing",
    features: [
      "Unlimited content pieces",
      "Dedicated content strategist",
      "Advanced analytics and brand workshops",
    ],
    cta: "Request a Quote",
  },
];

export const PricingSection = () => {
  return (
    <section className="py-20 px-4 bg-dark-100">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Choose Your Content Journey
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`p-8 rounded-lg ${
                plan.popular
                  ? "bg-gradient-to-b from-brand-purple to-brand-pink"
                  : "bg-dark-200"
              } animate-fade-in`}
            >
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="text-4xl font-bold mb-2">{plan.price}</div>
                <div className="text-gray-400">{plan.description}</div>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <Check className="w-5 h-5 mr-2 text-brand-purple" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                className={`w-full ${
                  plan.popular
                    ? "bg-white text-brand-purple hover:bg-gray-100"
                    : "bg-brand-purple hover:bg-brand-pink"
                }`}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};