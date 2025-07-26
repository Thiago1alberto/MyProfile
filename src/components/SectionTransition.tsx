import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface SectionTransitionProps {
  fromColor: string;
  toColor: string;
  className?: string;
}

const SectionTransition = ({ fromColor, toColor, className = "" }: SectionTransitionProps) => {
  const transitionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!transitionRef.current) return;

    // Subtle animation on scroll
    gsap.fromTo(transitionRef.current,
      { 
        opacity: 0.3,
        scaleY: 0.5
      },
      {
        opacity: 0.8,
        scaleY: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: transitionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          scrub: 1
        }
      }
    );

  }, []);

  return (
    <div 
      ref={transitionRef}
      className={`relative h-32 overflow-hidden ${className}`}
      style={{
        background: `linear-gradient(to bottom, ${fromColor}, ${toColor})`
      }}
    >
      {/* Subtle particle effect */}
      <div className="absolute inset-0">
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="absolute w-1 h-1 bg-blue-400/30 rounded-full animate-pulse"
            style={{
              left: `${15 + (index * 12)}%`,
              top: `${40 + (Math.sin(index) * 20)}%`,
              animationDelay: `${index * 0.5}s`,
              animationDuration: '3s'
            }}
          />
        ))}
      </div>

      {/* Gradient overlay for smoothness */}
      <div 
        className="absolute inset-0 opacity-60"
        style={{
          background: `linear-gradient(135deg, transparent 30%, rgba(59, 130, 246, 0.05) 50%, transparent 70%)`
        }}
      />
    </div>
  );
};

export default SectionTransition;
