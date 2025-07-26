import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface PreloaderProps {
  onComplete: () => void;
}

const Preloader = ({ onComplete }: PreloaderProps) => {
  const preloaderRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Simplified setup
    gsap.set([textRef.current], { 
      opacity: 0, 
      y: 20
    });

    // Simplified animation
    tl.to(textRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power2.out"
    })
    // Faster progress bar
    .to(progressRef.current, {
      width: "100%",
      duration: 1.5,
      ease: "power2.out"
    }, "-=0.4")
    // Quick fade out
    .to(preloaderRef.current, {
      opacity: 0,
      duration: 0.6,
      ease: "power2.inOut",
      onComplete: () => {
        onComplete();
      }
    });

    return () => {
      tl.kill();
    };
  }, [onComplete]);

  return (
    <div ref={preloaderRef} className="preloader">
      <div 
        ref={textRef}
        className="text-center mb-8"
      >
        <h1 className="text-4xl md:text-6xl font-light text-glow mb-4">
          Thiago Alberto
        </h1>
        <p className="text-lg md:text-xl text-cyber-blue font-light">
          Data Analyst & BI Specialist
        </p>
      </div>
      
      <div className="progress-container">
        <div 
          ref={progressRef}
          className="progress-bar"
        />
      </div>
    </div>
  );
};

export default Preloader;