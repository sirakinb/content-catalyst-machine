import { Button } from "@/components/ui/button";
import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export const CTASection = () => {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      // Only add event listener if cal exists
      if (cal) {
        cal("on", {
          action: "bookingSuccessful",
          callback: (e) => {
            console.log("Booking successful:", e.detail);
          },
        });
      }
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
              calLink="cal_live_f9ebbbf564d59592ca234994681c9f78"
              style={{ width: "100%", height: "700px", overflow: "hidden" }}
              config={{
                layout: "month_view",
                theme: "dark",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};