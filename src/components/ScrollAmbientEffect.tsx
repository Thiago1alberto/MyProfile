import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ScrollAmbientEffect = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Create floating particles that respond to scroll
    const particles = containerRef.current.querySelectorAll('.ambient-particle');

    // Floating animation
    gsap.to(particles, {
      y: (i) => -30 + (i * 5),
      x: (i) => Math.sin(i) * 20,
      rotation: (i) => i * 45,
      duration: 8,
      ease: "power1.inOut",
      repeat: -1,
      yoyo: true,
      stagger: {
        amount: 3,
        from: "random"
      }
    });

    // Scroll-triggered opacity changes
    gsap.to(containerRef.current, {
      opacity: 0.8,
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        scrub: 1
      }
    });

    // Individual particle scroll effects
    particles.forEach((particle, i) => {
      gsap.to(particle, {
        scale: 0.5 + (i * 0.1),
        rotation: 360,
        scrollTrigger: {
          trigger: "body",
          start: "top bottom",
          end: "bottom top",
          scrub: 2,
          onUpdate: (self) => {
            const progress = self.progress;
            gsap.set(particle, {
              x: Math.sin(progress * Math.PI * 4 + i) * 50,
              y: Math.cos(progress * Math.PI * 2 + i) * 30
            });
          }
        }
      });
    });

  }, []);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-10 opacity-15"
      style={{ mixBlendMode: 'lighten' }}
    >
      {/* Ambient floating particles - more subtle */}
      {Array.from({ length: 6 }).map((_, index) => (
        <div
          key={index}
          className="ambient-particle absolute w-1.5 h-1.5 bg-blue-400 rounded-full"
          style={{
            left: `${15 + (index * 12)}%`,
            top: `${25 + (index * 10)}%`,
            boxShadow: '0 0 6px rgba(59, 130, 246, 0.4)',
            filter: 'blur(0.5px)'
          }}
        />
      ))}

      {/* Larger ambient elements - reduced */}
      {Array.from({ length: 2 }).map((_, index) => (
        <div
          key={`large-${index}`}
          className="ambient-particle absolute w-0.5 h-12 bg-gradient-to-b from-cyan-400/40 to-transparent"
          style={{
            left: `${30 + (index * 40)}%`,
            top: `${40 + (index * 20)}%`,
            transform: `rotate(${index * 60}deg)`,
            filter: 'blur(1px)'
          }}
        />
      ))}

      {/* Connecting lines - more subtle */}
      <div 
        className="absolute w-px h-24 bg-gradient-to-b from-transparent via-blue-400/20 to-transparent"
        style={{
          left: '20%',
          top: '30%',
          transform: 'rotate(30deg)'
        }}
      />
      <div 
        className="absolute w-px h-16 bg-gradient-to-b from-transparent via-cyan-400/15 to-transparent"
        style={{
          right: '25%',
          top: '70%',
          transform: 'rotate(-45deg)'
        }}
      />
    </div>
  );
};

export default ScrollAmbientEffect;
