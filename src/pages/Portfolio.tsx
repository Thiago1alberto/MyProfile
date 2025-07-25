import { useState, useEffect } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Preloader from '@/components/Preloader';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Portfolio = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Initialize Locomotive Scroll after loading
    const initLocomotiveScroll = async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;
      
      const scroll = new LocomotiveScroll({
        el: document.querySelector('[data-scroll-container]') as HTMLElement,
        smooth: true,
        multiplier: 1,
        class: 'is-revealed'
      });

      // Update ScrollTrigger when locomotive scroll updates
      scroll.on('scroll', () => {
        // Update GSAP ScrollTrigger
        ScrollTrigger.update();
      });

      return () => {
        if (scroll) scroll.destroy();
      };
    };

    if (!isLoading) {
      initLocomotiveScroll();
    }
  }, [isLoading]);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      {isLoading && <Preloader onComplete={handleLoadingComplete} />}
      
      <div data-scroll-container className="relative">
        <Navigation />
        
        <main>
          <Hero />
          <Projects />
          <About />
          <Contact />
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default Portfolio;