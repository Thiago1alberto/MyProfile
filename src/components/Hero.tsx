import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const splineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 4 });

    // Initial states
    gsap.set([titleRef.current, subtitleRef.current, ctaRef.current], {
      opacity: 0,
      y: 50,
      filter: "blur(10px)"
    });

    gsap.set(splineRef.current, {
      opacity: 0,
      x: 100,
      filter: "blur(20px)"
    });

    // Animate elements in sequence
    tl.to(titleRef.current, {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      duration: 1.2,
      ease: "power2.out"
    })
    .to(subtitleRef.current, {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      duration: 1,
      ease: "power2.out"
    }, "-=0.8")
    .to(ctaRef.current, {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      duration: 1,
      ease: "power2.out"
    }, "-=0.6")
    .to(splineRef.current, {
      opacity: 1,
      x: 0,
      filter: "blur(0px)",
      duration: 1.5,
      ease: "power2.out"
    }, "-=1");

    // Floating orbs animation
    gsap.to(".floating-orb-1", {
      y: -20,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut"
    });

    gsap.to(".floating-orb-2", {
      y: 15,
      x: -10,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut"
    });

    gsap.to(".floating-orb-3", {
      y: -25,
      x: 15,
      duration: 5,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut"
    });

    return () => {
      tl.kill();
    };
  }, []);

  const handleCTAHover = (e: React.MouseEvent) => {
    gsap.to(e.currentTarget, {
      scale: 1.05,
      duration: 0.3,
      ease: "power2.out"
    });
  };

  const handleCTALeave = (e: React.MouseEvent) => {
    gsap.to(e.currentTarget, {
      scale: 1,
      duration: 0.3,
      ease: "power2.out"
    });
  };

  return (
    <section id="home" ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden">
      {/* Floating Background Orbs */}
      <div className="floating-orb floating-orb-1" />
      <div className="floating-orb floating-orb-2" />
      <div className="floating-orb floating-orb-3" />

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Content */}
        <div className="space-y-8">
          <h1 
            ref={titleRef}
            className="text-5xl md:text-7xl lg:text-8xl font-light leading-tight"
          >
            Hi, I'm{' '}
            <span className="text-glow bg-gradient-primary bg-clip-text text-transparent">
              Thiago
            </span>
            <br />
            <span className="text-cyber-blue text-glow">Data Analyst</span>
            <br />
            <span className="text-2xl md:text-3xl lg:text-4xl text-muted-foreground">
              & BI Specialist
            </span>
          </h1>

          <p 
            ref={subtitleRef}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl font-light"
          >
            Transforming complex data into actionable insights through advanced analytics, 
            visualization, and business intelligence solutions.
          </p>

          <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4">
            <button 
              className="btn-cyber"
              onMouseEnter={handleCTAHover}
              onMouseLeave={handleCTALeave}
            >
              Download CV
            </button>
            <button 
              className="glass px-8 py-3 rounded-lg border border-cyber-blue/30 hover:border-cyber-blue/60 transition-all duration-300 hover:glow"
              onMouseEnter={handleCTAHover}
              onMouseLeave={handleCTALeave}
            >
              Hire Me
            </button>
          </div>
        </div>

        {/* Right Content - Enhanced Spline 3D */}
        <div ref={splineRef} className="relative h-[600px] lg:h-[800px]">
          <div className="spline-container h-full">
            <iframe 
              src='https://my.spline.design/boxeshover-cBwmku67JiRTKM040j4zFIE3/' 
              frameBorder='0' 
              width='100%' 
              height='100%'
              className="rounded-lg relative z-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;