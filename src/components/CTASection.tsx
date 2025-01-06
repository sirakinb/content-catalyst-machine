import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import { Button } from "./ui/button";

export const CTASection = () => {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "30min" });
      cal("ui", {
        hideEventTypeDetails: false,
        layout: "month_view"
      });
    })();
  }, []);

  return (
    <section className="relative">
      <div className="absolute inset-0 bg-gradient-to-b from-brand-gradient-start to-brand-gradient-end pointer-events-none" />
      
      <div className="relative py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl mb-16 leading-tight">
            Learn about growing your business with AI-powered content that converts
          </h2>
          
          <div className="w-full max-w-3xl mx-auto">
            <Button
              size="lg"
              data-cal-link="akinyemi-bajulaiye-2jua88/30min"
              data-cal-namespace="30min"
              data-cal-config='{"layout":"month_view"}'
              className="text-lg px-8 py-6 border border-white bg-transparent hover:bg-white/10 transition-colors"
            >
              Schedule a Demo Call
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};