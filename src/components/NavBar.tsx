import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const NavBar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-transparent">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src="/logo.png" alt="Pentridge Media" className="h-8" />
          <span className="text-white text-xl font-semibold">Pentridge Media</span>
        </div>
        
        <div className="flex items-center gap-8">
          <div className="hidden md:flex items-center gap-8">
            <Link to="#" className="text-white hover:text-gray-300">Our Services</Link>
            <Link to="#" className="text-white hover:text-gray-300">Resources</Link>
            <Link to="#" className="text-white hover:text-gray-300">Contact</Link>
          </div>
          
          <Button 
            variant="outline" 
            className="bg-transparent text-white border-white hover:bg-white/10"
          >
            Book a Demo
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;