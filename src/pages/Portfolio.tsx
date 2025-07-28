import { useState, useEffect } from 'react';
import Preloader from '@/components/Preloader';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Contact from "../components/Contact";
import Footer from '@/components/Footer';

const Portfolio = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simplified loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      {isLoading && <Preloader onComplete={handleLoadingComplete} />}
      
      <div className="relative bg-black text-white">
        <Navigation />
        
        <main>
          <Hero />
          <About />
          <Projects />
          <Contact />
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default Portfolio;