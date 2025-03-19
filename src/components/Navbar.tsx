
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface NavbarProps {
  transparent?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ transparent = true }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    document.body.style.overflow = isMobileMenuOpen ? 'auto' : 'hidden';
  };
  
  const navItems = [
    { label: 'Inicio', href: '#home' },
    { label: 'Servicios', href: '#services' },
    { label: 'Sobre Nosotros', href: '#about' },
    { label: 'Flota', href: '#fleet' },
    { label: 'Contacto', href: '#contact' },
  ];
  
  return (
    <>
      <nav
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out px-4 md:px-8 py-4',
          isScrolled || !transparent 
            ? 'bg-white/80 backdrop-blur-md shadow-sm' 
            : 'bg-transparent'
        )}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="font-display text-xl font-bold tracking-tight">
              <span className="text-primary">Transporte</span>Dinámico
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={cn(
                  'text-sm font-medium hover-underline transition-colors',
                  isScrolled ? 'text-foreground' : 'text-foreground/90'
                )}
              >
                {item.label}
              </a>
            ))}
            
            <Button variant="default" className="btn-hover-effect">
              Agendar Ahora
            </Button>
          </div>
          
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={toggleMobileMenu}
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </nav>
      
      {/* Mobile menu */}
      <div className={cn('mobile-menu-overlay', isMobileMenuOpen && 'open')} onClick={toggleMobileMenu} />
      
      <div className={cn('mobile-menu', isMobileMenuOpen && 'open')}>
        <div className="p-6">
          <div className="flex items-center justify-between mb-8">
            <Link to="/" className="font-display text-xl font-bold">
              <span className="text-primary">Transporte</span>Dinámico
            </Link>
            
            <Button variant="ghost" size="icon" onClick={toggleMobileMenu}>
              <X className="h-6 w-6" />
            </Button>
          </div>
          
          <div className="flex flex-col space-y-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-lg font-medium hover-underline"
                onClick={toggleMobileMenu}
              >
                {item.label}
              </a>
            ))}
            
            <Button variant="default" className="w-full mt-4 btn-hover-effect">
              Agendar Ahora
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div 
        className="scroll-indicator" 
        style={{ 
          width: `${(window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100}%` 
        }} 
      />
    </>
  );
};

export default Navbar;
