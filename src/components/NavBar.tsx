import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const NavBar = () => {
  return (
    <nav className="absolute top-0 left-0 right-0 z-50 px-6 py-4 bg-[#130B1D]">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src="/lovable-uploads/bef7eeba-031a-4ca5-87e1-7e0bd3fa6c77.png" alt="Pentridge Media" className="h-16" />
        </div>
        
        <div className="hidden md:flex items-center gap-12">
          <Link to="#problem" className="text-white hover:text-gray-300">Problem</Link>
          <Link to="#solution" className="text-white hover:text-gray-300">Solution</Link>
          <Link to="#pricing" className="text-white hover:text-gray-300">Pricing</Link>
          <Link to="#" className="text-white hover:text-gray-300">Pentridge Media</Link>
        </div>
        
        <Button 
          variant="outline" 
          className="bg-transparent text-white border-2 border-white hover:bg-white/10 transition-colors"
        >
          Book a Demo
        </Button>
      </div>
    </nav>
  );
};

export default NavBar;