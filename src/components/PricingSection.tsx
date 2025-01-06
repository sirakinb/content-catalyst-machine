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
    cta: "Get Started",
  },
  {
    name: "Momentum",
    price: "$879",
    description: "Set Up Fee",
    features: [
      "Everything in Starter",
      "Up to 8 curated content pieces per month",
      "Detailed content strategy reviews",
    ],
    cta: "Build Momentum",
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
              className={`relative p-8 rounded-lg bg-dark-200 animate-fade-in ${
                plan.popular ? "ring-2 ring-brand-purple ring-opacity-50 shadow-[0_0_15px_rgba(139,92,246,0.3)]" : ""
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-brand-purple text-xs px-3 py-1 rounded-full text-white">
                  Most Popular
                </span>
              )}
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
                className="w-full bg-brand-purple hover:bg-brand-pink"
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>

        {/* Monthly Subscription Section */}
        <div className="mt-16 p-8 rounded-lg bg-dark-200 max-w-2xl mx-auto animate-fade-in">
          <h3 className="text-2xl font-bold text-center mb-2">Monthly Subscription</h3>
          <p className="text-gray-400 text-center mb-6">
            Comprehensive coverage for your automations and AI token usage
          </p>
          <div className="text-4xl font-bold text-center mb-6">$60/month</div>
          <div className="mb-8">
            <h4 className="text-lg font-semibold mb-4">What's Included:</h4>
            <ul className="space-y-3">
              {[
                "Automation expenses",
                "Dedicated support",
                "AI token usage fees",
                "Access to new feature updates"
              ].map((feature) => (
                <li key={feature} className="flex items-center">
                  <Check className="w-5 h-5 mr-2 text-brand-purple" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          <Button className="w-full bg-brand-purple hover:bg-brand-pink">
            Subscribe Now
          </Button>
        </div>
      </div>
    </section>
  );
};