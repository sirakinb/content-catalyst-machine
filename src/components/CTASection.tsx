import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export const CTASection = () => {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "30min" });
      cal("ui", {
        hideEventTypeDetails: true,
        layout: "month_view",
        theme: "light"
      });
    })();
  }, []);

  return (
    <section className="relative">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-100 to-black" />
      
      <div className="relative py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-16 leading-tight">
            Book a demo to see how you can grow your business with consistent content
          </h2>
          
          <div className="w-full max-w-3xl mx-auto">
            <Cal 
              namespace="30min"
              calLink="akinyemi-bajulaiye-2jua88/30min"
              style={{width:"100%", height:"700px", overflow:"scroll"}}
              config={{
                layout: "month_view",
                theme: "light"
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};