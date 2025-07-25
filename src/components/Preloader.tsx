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

    // Initial setup
    gsap.set([textRef.current], { 
      opacity: 0, 
      y: 30, 
      filter: "blur(10px)" 
    });

    // Animate text in
    tl.to(textRef.current, {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      duration: 1,
      ease: "power2.out"
    })
    // Animate progress bar
    .to(progressRef.current, {
      width: "100%",
      duration: 2.5,
      ease: "power2.out"
    }, "-=0.5")
    // Fade out preloader
    .to(preloaderRef.current, {
      opacity: 0,
      scale: 0.9,
      duration: 1,
      delay: 0.3,
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