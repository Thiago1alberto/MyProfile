import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const DataVisualizationCSS = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Create floating data cubes animation
    const cubes = containerRef.current.querySelectorAll('.data-cube');
    const particles = containerRef.current.querySelectorAll('.data-particle');

    // Animate cubes rotation
    gsap.to(cubes, {
      rotationY: 360,
      rotationX: 180,
      duration: 20,
      ease: "none",
      repeat: -1,
      stagger: {
        amount: 5,
        from: "random"
      }
    });

    // Animate particles floating
    gsap.to(particles, {
      y: -20,
      duration: 3,
      ease: "power2.inOut",
      repeat: -1,
      yoyo: true,
      stagger: {
        amount: 2,
        from: "random"
      }
    });

    // Animate container rotation
    gsap.to(containerRef.current, {
      rotationY: 360,
      duration: 60,
      ease: "none",
      repeat: -1
    });

  }, []);

  return (
    <div 
      ref={containerRef}
      className="w-full h-full relative"
      style={{ 
        perspective: '1000px',
        transformStyle: 'preserve-3d'
      }}
    >
      {/* Data Cubes */}
      <div 
        className="data-cube absolute w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-400 opacity-60"
        style={{
          left: '20%',
          top: '30%',
          transform: 'translateZ(100px) rotateX(45deg)',
          boxShadow: '0 0 20px rgba(59, 130, 246, 0.5)'
        }}
      />
      <div 
        className="data-cube absolute w-6 h-6 bg-gradient-to-r from-green-500 to-blue-500 opacity-70"
        style={{
          right: '25%',
          top: '20%',
          transform: 'translateZ(150px) rotateY(45deg)',
          boxShadow: '0 0 15px rgba(16, 185, 129, 0.5)'
        }}
      />
      <div 
        className="data-cube absolute w-10 h-10 bg-gradient-to-r from-blue-400 to-cyan-400 opacity-50"
        style={{
          left: '60%',
          bottom: '40%',
          transform: 'translateZ(80px) rotateZ(45deg)',
          boxShadow: '0 0 25px rgba(34, 211, 238, 0.4)'
        }}
      />
      <div 
        className="data-cube absolute w-7 h-7 bg-gradient-to-r from-purple-500 to-blue-500 opacity-65"
        style={{
          left: '15%',
          bottom: '25%',
          transform: 'translateZ(120px) rotateX(30deg)',
          boxShadow: '0 0 18px rgba(139, 92, 246, 0.5)'
        }}
      />

      {/* Data Particles */}
      {Array.from({ length: 12 }).map((_, index) => (
        <div
          key={index}
          className="data-particle absolute w-2 h-2 bg-blue-400 rounded-full opacity-40"
          style={{
            left: `${Math.random() * 80 + 10}%`,
            top: `${Math.random() * 80 + 10}%`,
            transform: `translateZ(${Math.random() * 200 + 50}px)`,
            boxShadow: '0 0 10px rgba(59, 130, 246, 0.6)',
            animationDelay: `${Math.random() * 3}s`
          }}
        />
      ))}

      {/* Connection Lines (CSS-based) */}
      <div 
        className="absolute w-px h-32 bg-gradient-to-b from-blue-400 to-transparent opacity-30"
        style={{
          left: '30%',
          top: '25%',
          transform: 'rotateZ(45deg) translateZ(80px)'
        }}
      />
      <div 
        className="absolute w-24 h-px bg-gradient-to-r from-blue-400 to-transparent opacity-30"
        style={{
          right: '35%',
          top: '40%',
          transform: 'rotateY(30deg) translateZ(100px)'
        }}
      />
      <div 
        className="absolute w-px h-20 bg-gradient-to-b from-green-400 to-transparent opacity-30"
        style={{
          left: '70%',
          bottom: '30%',
          transform: 'rotateZ(-30deg) translateZ(90px)'
        }}
      />

      {/* Data Grid Background */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          transform: 'translateZ(-50px) rotateX(60deg)'
        }}
      />
    </div>
  );
};

export default DataVisualizationCSS;
