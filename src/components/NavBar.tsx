import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const NavBar = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 px-6 py-4 bg-[#130B1D]">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <a href="https://pentridgemedia.com" target="_blank" rel="noopener noreferrer">
            <img src="/lovable-uploads/bef7eeba-031a-4ca5-87e1-7e0bd3fa6c77.png" alt="Pentridge Media" className="h-16" />
          </a>
        </div>
        
        <div className="hidden md:flex items-center gap-12">
          <button onClick={() => scrollToSection('problem')} className="text-white hover:text-gray-300">Problem</button>
          <button onClick={() => scrollToSection('solution')} className="text-white hover:text-gray-300">Solution</button>
          <button onClick={() => scrollToSection('pricing')} className="text-white hover:text-gray-300">Pricing</button>
          <a href="https://pentridgemedia.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">Pentridge Media</a>
        </div>
        
        <Button 
          variant="outline" 
          data-cal-link="akinyemi-bajulaiye-2jua88/30min"
          data-cal-namespace="demo"
          data-cal-config='{"layout":"month_view"}'
          className="bg-transparent text-white border-2 border-white transition-transform duration-300 hover:scale-105 hover:bg-brand-hover-blue hover:border-brand-hover-blue hover:text-white"
        >
          Book a Demo
        </Button>
      </div>
    </nav>
  );
};

export default NavBar;