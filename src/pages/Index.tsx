import { HeroSection } from "@/components/HeroSection";
import { ProblemSection } from "@/components/ProblemSection";
import { SolutionSection } from "@/components/SolutionSection";
import { ProcessSection } from "@/components/ProcessSection";
import { PricingSection } from "@/components/PricingSection";
import { FAQSection } from "@/components/FAQSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import NavBar from "@/components/NavBar";
import { VisionarySection } from "@/components/VisionarySection";
import { TestimonialSection } from "@/components/TestimonialSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#130B1D] text-white font-['Inter']">
      <NavBar />
      <HeroSection />
      <ProblemSection />
      <ProcessSection />
      <SolutionSection />
      <VisionarySection />
      <TestimonialSection />
      <PricingSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;