import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/logo.png";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white backdrop-blur text-text-dark shadow-md py-2 px-3 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <a href="#home" className="flex items-center gap-3">
          <img src={logo} alt="Kunjwal City" className="h-12 w-12 rounded-md object-contain" />
          <div className="flex flex-col">
            <div className="text-text-dark font-bold text-lg leading-tight">
              Kunjwal City
            </div>
            <div className="text-golden-accent text-sm font-medium" style={{ fontFamily: 'serif' }}>
              جہاں دل بس جائے!
            </div>
          </div>
        </a>
        
        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-6">
          <a href="#about" className="text-text-dark hover:text-golden-accent transition-colors font-medium text-sm uppercase tracking-wide">About Us</a>
          <a href="#plots" className="text-text-dark hover:text-golden-accent transition-colors font-medium text-sm uppercase tracking-wide">Available Plots</a>
          <a href="#amenities" className="text-text-dark hover:text-golden-accent transition-colors font-medium text-sm uppercase tracking-wide">Amenities</a>
          <a href="#contact" className="text-text-dark hover:text-golden-accent transition-colors font-medium text-sm uppercase tracking-wide">Contact</a>
          <a href="/gallery" target="_blank" rel="noopener" className="text-text-dark hover:text-golden-accent transition-colors font-medium text-sm uppercase tracking-wide">Gallery page</a>
          
        </div>

        {/* CTA Button and Mobile Menu */}
        <div className="flex items-center gap-3">
          <Button 
            className="bg-golden-accent hover:bg-golden-hover text-text-dark font-semibold px-4 py-1.5 rounded-md shadow-md transition-all duration-300 hover:shadow-lg text-sm"
          >
            Book Your Plot Today
          </Button>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-text-dark hover:text-golden-accent transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur border-t border-gray-200 py-3">
          <div className="container mx-auto flex flex-col gap-2">
            <a href="#about" className="text-text-dark hover:text-golden-accent transition-colors font-medium text-sm uppercase tracking-wide py-2">About Us</a>
            <a href="#plots" className="text-text-dark hover:text-golden-accent transition-colors font-medium text-sm uppercase tracking-wide py-2">Available Plots</a>
            <a href="#amenities" className="text-text-dark hover:text-golden-accent transition-colors font-medium text-sm uppercase tracking-wide py-2">Amenities</a>
            <a href="#gallery" className="text-text-dark hover:text-golden-accent transition-colors font-medium text-sm uppercase tracking-wide py-2">Gallery</a>
            <a href="#contact" className="text-text-dark hover:text-golden-accent transition-colors font-medium text-sm uppercase tracking-wide py-2">Contact</a>
            <a href="/brochure.pdf" target="_blank" rel="noopener" className="text-text-dark hover:text-golden-accent transition-colors font-medium text-sm uppercase tracking-wide py-2">Download Brochure</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;