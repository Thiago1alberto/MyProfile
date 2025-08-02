import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { gsap } from 'gsap';
import LanguageToggle from './LanguageToggle';
import { useLanguage } from '../contexts/LanguageContext';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useLanguage();
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    // Simplified nav animation
    gsap.fromTo('.nav-container', 
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, delay: 1, ease: "power2.out" }
    );
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { name: t('nav.home'), href: '#home', isSection: true },
    { name: t('nav.about'), href: '#about', isSection: true },
    { name: t('nav.projects'), href: '#projects', isSection: true },
    { name: 'Apps', href: '/apps', isSection: false },
    { name: t('nav.contact'), href: '#contact', isSection: true }
  ];

  return (
    <nav className="nav-container fixed top-0 left-0 right-0 z-50 glass">
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/tars-logo-original.svg" 
              alt="TARS Logo" 
              className="h-7 w-auto max-h-7 object-contain hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              item.isSection && isHomePage ? (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-foreground hover:text-cyber-blue transition-colors duration-300 font-light"
                >
                  {item.name}
                </a>
              ) : (
                <Link
                  key={item.name}
                  to={item.isSection ? '/' : item.href}
                  className="text-foreground hover:text-cyber-blue transition-colors duration-300 font-light"
                >
                  {item.name}
                </Link>
              )
            ))}
            
            {/* Language Toggle */}
            <div className="ml-4">
              <LanguageToggle />
            </div>
          </div>

          {/* Mobile Menu Button and Language Toggle */}
          <div className="md:hidden flex items-center space-x-4">
            {/* Language Toggle for Mobile */}
            <LanguageToggle />
            
            <button
              onClick={toggleMenu}
              className="text-foreground hover:text-cyber-blue transition-colors"
            >
              <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                <span className={`block w-6 h-0.5 bg-current transition-transform ${isMenuOpen ? 'rotate-45 translate-y-1' : ''}`} />
                <span className={`block w-6 h-0.5 bg-current transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`} />
                <span className={`block w-6 h-0.5 bg-current transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-1' : ''}`} />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-border">
            {navItems.map((item) => (
              item.isSection && isHomePage ? (
                <a
                  key={item.name}
                  href={item.href}
                  className="block py-2 text-foreground hover:text-cyber-blue transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ) : (
                <Link
                  key={item.name}
                  to={item.isSection ? '/' : item.href}
                  className="block py-2 text-foreground hover:text-cyber-blue transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              )
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;