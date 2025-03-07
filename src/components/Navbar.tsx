
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Brain, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 py-3 bg-ai-deepblue/80 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <Brain className="h-6 w-6 text-ai-purple" />
          <span className="font-bold text-xl">AI Engineer</span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-6">
          <NavLink to="/#about">About</NavLink>
          <NavLink to="/#projects">Projects</NavLink>
          <NavLink to="/#skills">Skills</NavLink>
          <Button asChild variant="ghost" className="text-ai-cyan hover:text-ai-cyan/80 hover:bg-ai-cyan/10">
            <Link to="/#contact">Contact</Link>
          </Button>
        </nav>
        
        <button 
          onClick={toggleMenu} 
          className="md:hidden text-white p-2"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 top-16 z-40 bg-ai-deepblue/95 backdrop-blur-md md:hidden">
          <nav className="flex flex-col items-center gap-6 py-8">
            <MobileNavLink to="/#about" onClick={toggleMenu}>About</MobileNavLink>
            <MobileNavLink to="/#projects" onClick={toggleMenu}>Projects</MobileNavLink>
            <MobileNavLink to="/#skills" onClick={toggleMenu}>Skills</MobileNavLink>
            <Button asChild variant="default" className="w-40 mt-4 bg-gradient-to-r from-ai-purple to-ai-blue">
              <Link to="/#contact" onClick={toggleMenu}>Contact</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

const NavLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
  <Link 
    to={to} 
    className="text-white/80 hover:text-white transition-colors relative after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-ai-purple hover:after:w-full after:transition-all"
  >
    {children}
  </Link>
);

const MobileNavLink = ({ to, children, onClick }: { to: string; children: React.ReactNode; onClick: () => void }) => (
  <Link 
    to={to} 
    className="text-white/90 hover:text-white text-xl py-2"
    onClick={onClick}
  >
    {children}
  </Link>
);

export default Navbar;
