import { Check } from "lucide-react";

const features = [
  {
    name: "Content Approval Hub",
    starter: true,
    momentum: true,
    enterprise: true,
  },
  {
    name: "LinkedIn Post Creation",
    starter: true,
    momentum: true,
    enterprise: true,
  },
  {
    name: "Customized Setup & Onboarding",
    starter: true,
    momentum: true,
    enterprise: true,
  },
  {
    name: "1-Hour Automation Strategy Session",
    starter: true,
    momentum: true,
    enterprise: true,
  },
  {
    name: "Multi-Platform Content Creation (Twitter, Instagram, Blogs)",
    starter: false,
    momentum: true,
    enterprise: true,
  },
  {
    name: "AI-Powered Brand Voice Customization",
    starter: false,
    momentum: true,
    enterprise: true,
  },
  {
    name: "Custom Workflow Design",
    starter: false,
    momentum: true,
    enterprise: true,
  },
  {
    name: "Priority Customer Support",
    starter: false,
    momentum: true,
    enterprise: true,
  },
  {
    name: "Actionable Task Automation in Airtable",
    starter: false,
    momentum: false,
    enterprise: true,
  },
  {
    name: "Feed call insights directly into your CRM system",
    starter: false,
    momentum: false,
    enterprise: true,
  },
  {
    name: "Ongoing support for optimizing automated workflows",
    starter: false,
    momentum: false,
    enterprise: true,
  },
  {
    name: "Personalized assistance to help your team stay on track",
    starter: false,
    momentum: false,
    enterprise: true,
  },
];

export const FeatureComparison = () => {
  return (
    <div className="mt-20 px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Feature Comparison
      </h2>
      <div className="max-w-6xl mx-auto overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-brand-purple bg-opacity-20">
              <th className="p-4 text-left">Features</th>
              <th className="p-4 text-center">Starter</th>
              <th className="p-4 text-center">Momentum</th>
              <th className="p-4 text-center">Enterprise</th>
            </tr>
          </thead>
          <tbody>
            {features.map((feature, index) => (
              <tr
                key={feature.name}
                className={index % 2 === 0 ? "bg-dark-100" : "bg-dark-200"}
              >
                <td className="p-4">{feature.name}</td>
                <td className="p-4 text-center">
                  {feature.starter && <Check className="inline h-5 w-5 text-brand-purple" />}
                </td>
                <td className="p-4 text-center">
                  {feature.momentum && <Check className="inline h-5 w-5 text-brand-purple" />}
                </td>
                <td className="p-4 text-center">
                  {feature.enterprise && <Check className="inline h-5 w-5 text-brand-purple" />}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
