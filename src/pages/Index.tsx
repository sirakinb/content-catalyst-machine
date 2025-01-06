import { HeroSection } from "@/components/HeroSection";
import { ProblemSection } from "@/components/ProblemSection";
import { ProcessSection } from "@/components/ProcessSection";
import { PricingSection } from "@/components/PricingSection";
import { FAQSection } from "@/components/FAQSection";
import { CTASection } from "@/components/CTASection";
import NavBar from "@/components/NavBar";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#130B1D] text-white font-['Inter']">
      <NavBar />
      <HeroSection />
      <ProblemSection />
      <ProcessSection />
      <PricingSection />
      <FAQSection />
      <CTASection />
    </div>
  );
};

export default Index;