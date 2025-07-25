import { useState, useEffect } from 'react';
import { gsap } from 'gsap';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Animate nav in
    gsap.fromTo('.nav-container', 
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, delay: 3.5, ease: "power2.out" }
    );
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <nav className="nav-container fixed top-0 left-0 right-0 z-50 glass">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-xl font-semibold text-glow">
            TA
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-cyber-blue transition-colors duration-300 font-light"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-foreground hover:text-cyber-blue transition-colors"
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <span className={`block w-6 h-0.5 bg-current transition-transform ${isMenuOpen ? 'rotate-45 translate-y-1' : ''}`} />
              <span className={`block w-6 h-0.5 bg-current transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`block w-6 h-0.5 bg-current transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-1' : ''}`} />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-border">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block py-2 text-foreground hover:text-cyber-blue transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;