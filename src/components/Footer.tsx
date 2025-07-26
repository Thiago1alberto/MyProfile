import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Simplified footer animation
      gsap.fromTo(footerRef.current,
        { 
          y: 30,
          opacity: 0
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 90%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }, footerRef);

    return () => ctx.revert();
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <footer ref={footerRef} className="relative py-16 mt-20 border-t border-gray-700/20 bg-background">
      {/* Background Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="particle absolute top-10 left-10 w-2 h-2 bg-cyan-400/30 rounded-full blur-sm" />
        <div className="particle absolute top-20 right-20 w-3 h-3 bg-purple-400/20 rounded-full blur-sm" />
        <div className="particle absolute bottom-16 left-1/3 w-2 h-2 bg-cyan-400/25 rounded-full blur-sm" />
        <div className="particle absolute bottom-10 right-1/4 w-4 h-4 bg-cyan-400/15 rounded-full blur-sm" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-light text-glow">
              Thiago Alberto
            </h3>
            <p className="text-gray-300 font-light text-sm">
              Data Analyst & BI Specialist
              <br />
              Transforming data into insights
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h4 className="text-lg font-medium text-cyan-400">
              Navigation
            </h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm font-light"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-medium text-cyan-400">
              Services
            </h4>
            <ul className="space-y-2 text-sm font-light text-gray-300">
              <li>Data Analysis</li>
              <li>Business Intelligence</li>
              <li>Dashboard Creation</li>
              <li>Process Automation</li>
              <li>Data Visualization</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-medium text-cyan-400">
              Get in Touch
            </h4>
            <div className="space-y-2 text-sm font-light text-gray-300">
              <p>thiago.alberto@example.com</p>
              <p>Available for freelance projects</p>
              <p>Response time: 24 hours</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-700/20 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-gray-300 font-light">
            © 2024 Thiago Alberto. All rights reserved.
          </p>
          
          <div className="flex items-center space-x-6 text-sm text-gray-300 font-light">
            <a href="#privacy" className="hover:text-cyan-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#terms" className="hover:text-cyan-400 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;