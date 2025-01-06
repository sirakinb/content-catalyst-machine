import { useEffect } from "react";

export const CTASection = () => {
  useEffect(() => {
    // Initialize Cal.com embed
    (function (C, A, L) {
      let p = function (a, ar) {
        a.q.push(ar);
      };
      let d = C.document;
      C.Cal =
        C.Cal ||
        function () {
          let cal = C.Cal;
          let ar = arguments;
          if (!cal.loaded) {
            cal.ns = {};
            cal.q = cal.q || [];
            d.head.appendChild(d.createElement("script")).src = A;
            cal.loaded = true;
          }
          if (ar[0] === L) {
            const api = function () {
              p(api, arguments);
            };
            const namespace = ar[1];
            api.q = api.q || [];
            if (typeof namespace === "string") {
              cal.ns[namespace] = cal.ns[namespace] || api;
              p(cal.ns[namespace], ar);
              p(cal, ["initNamespace", namespace]);
            } else p(cal, ar);
            return;
          }
          p(cal, ar);
        };
    })(window, "https://app.cal.com/embed/embed.js", "init");

    // Initialize the calendar
    (window as any).Cal("init", "30min", { origin: "https://cal.com" });

    // Configure the inline embed
    (window as any).Cal.ns["30min"]("inline", {
      elementOrSelector: "#my-cal-inline",
      config: { layout: "month_view" },
      calLink: "akinyemi-bajulaiye-2jua88/30min",
    });

    // Configure UI settings
    (window as any).Cal.ns["30min"]("ui", {
      hideEventTypeDetails: false,
      layout: "month_view",
    });
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
            <div 
              id="my-cal-inline" 
              style={{ width: "100%", height: "700px", overflow: "scroll" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};