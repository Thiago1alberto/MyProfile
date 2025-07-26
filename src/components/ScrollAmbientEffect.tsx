import { useEffect, useRef } from 'react';

const ScrollAmbientEffect = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const particles = containerRef.current.querySelectorAll('.ambient-particle');

    // Simple CSS animation instead of GSAP to avoid conflicts
    particles.forEach((particle, i) => {
      const element = particle as HTMLElement;
      element.style.animation = `gentle-float ${8 + i}s ease-in-out infinite`;
      element.style.animationDelay = `${i * 0.5}s`;
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
