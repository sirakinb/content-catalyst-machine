import { Button } from "@/components/ui/button";

export const CTASection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-brand-purple to-brand-pink">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Become the Founder Your Brand Needs?
        </h2>
        <p className="text-xl mb-8">
          Let Content Catalyst handle your content strategy so you can lead your business to new heights.
        </p>
        <Button size="lg" className="bg-white text-brand-purple hover:bg-gray-100">
          Book a Demo
        </Button>
      </div>
    </section>
  );
};