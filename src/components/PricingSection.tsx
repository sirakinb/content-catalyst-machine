import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { FeatureComparison } from "./FeatureComparison";

const plans = [
  {
    name: "Starter",
    price: "$349",
    description: "Set Up Fee",
    tagline: "Craft professional posts directly from your call transcripts with ease",
    features: [
      "Personal Content Hub",
      "LinkedIn Post Creation", 
      "Customized Setup & Onboarding",
      "1-Hour Automation Strategy Session: Receive expert advice to optimize your content",
    ],
    cta: "Get Started",
    stripeLink: "https://buy.stripe.com/3cs5m8h20784e405kl"
  },
  {
    name: "Momentum",
    price: "$879",
    description: "Set Up Fee",
    tagline: "Expand your content across multiple platforms",
    features: [
      "Everything from the Starter plan",
      "Multi-Platform Content Creation: Generate content for LinkedIn, Twitter, Instagram, and Blogs",
      "AI-Powered Brand Voice Customization",
      "Custom Workflow Design",
      "Priority Customer Support",
    ],
    cta: "Build Momentum",
    stripeLink: "https://buy.stripe.com/5kAdSE7rqfEAf846oq",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Pricing",
    tagline: "A fully customized content automation suite for your CRM and tech stack",
    features: [
      "Everything from the Momentum plan",
      "Actionable Task Automation in Airtable",
      "Feed call insights directly into your CRM system",
      "Ongoing support for optimizing automated workflows",
      "Personalized assistance to help your team stay on track",
    ],
    cta: "Request a Quote",
  },
];

export const PricingSection = () => {
  const scrollToPackages = () => {
    // Get the pricing section element
    const pricingSection = document.getElementById('pricing');
    if (pricingSection) {
      const yOffset = -100; // Scroll up slightly from the packages
      const y = pricingSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth'
    });
  };

  return (
    <section id="pricing" className="py-20 px-4 bg-dark-100">
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
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-sm text-gray-300 mb-4">{plan.tagline}</p>
                <div className={`text-4xl font-bold mb-2 ${plan.popular ? "mt-6" : ""}`}>{plan.price}</div>
                <div className="text-gray-400 mb-2">{plan.description}</div>
                {plan.stripeLink ? (
                  <a href={plan.stripeLink} target="_blank" rel="noopener noreferrer">
                    <Button
                      className="w-full bg-brand-purple transition-transform duration-300 hover:scale-105 mb-4"
                    >
                      {plan.cta}
                    </Button>
                  </a>
                ) : (
                  <Button
                    className="w-full bg-brand-purple transition-transform duration-300 hover:scale-105 mb-4"
                    onClick={scrollToBottom}
                  >
                    {plan.cta}
                  </Button>
                )}
              </div>
              <div className="flex flex-col h-full">
                <ul className="space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <Check className="w-5 h-5 min-w-[1.25rem] mr-2 text-brand-purple" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 rounded-lg bg-dark-200 max-w-4xl mx-auto animate-fade-in">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-2">Automation Support Plan</h3>
              <p className="text-gray-400 mb-4">
                A complete solution for maintaining your automations and LLM fees
              </p>
              <div className="text-4xl font-bold">
                $60/month
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">What's Included</h4>
              <ul className="space-y-3">
                {[
                  "Automation cost coverage",
                  "AI tokens",
                  "Customer support",
                  "New feature rollouts"
                ].map((feature) => (
                  <li key={feature} className="flex items-center">
                    <Check className="w-5 h-5 mr-2 text-brand-purple" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center text-gray-400">
          Enjoy peace of mind with our 30-day money-back promise. <a href="#" onClick={(e) => {
            e.preventDefault();
            scrollToPackages();
          }} className="text-white underline">Sign up for Content-Catalyst risk-free today!</a>
        </div>

        <FeatureComparison />
      </div>
    </section>
  );
};