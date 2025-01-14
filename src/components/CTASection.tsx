export const CTASection = () => {
  return (
    <section id="cta" className="py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
          Ready to Transform Your Content Strategy?
        </h2>
        <p className="text-lg mb-8 text-gray-400">
          Schedule a demo call with us to see how Content Catalyst can work for you.
        </p>
        <a href="https://cal.com/akinyemi-bajulaiye-2jua88/30min" target="_blank" rel="noopener noreferrer">
          <button className="bg-brand-purple text-white py-3 px-6 rounded-lg hover:bg-brand-hover-blue transition-colors">
            Schedule a Demo Call
          </button>
        </a>
      </div>
    </section>
  );
};