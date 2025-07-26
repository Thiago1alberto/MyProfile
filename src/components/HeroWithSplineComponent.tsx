import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Spline from '@splinetool/react-spline';

const HeroWithSplineComponent = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Simplified timeline with reduced delay
    const tl = gsap.timeline({ delay: 1 });

    // Initial states - less blur
    gsap.set([titleRef.current, subtitleRef.current, ctaRef.current], {
      opacity: 0,
      y: 30,
      filter: "blur(5px)"
    });

    // Animate elements in sequence - faster and smoother
    tl.to(titleRef.current, {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      duration: 0.8,
      ease: "power2.out"
    })
    .to(subtitleRef.current, {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      duration: 0.6,
      ease: "power2.out"
    }, "-=0.4")
    .to(ctaRef.current, {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      duration: 0.6,
      ease: "power2.out"
    }, "-=0.3");

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
    <section id="home" ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Spline Background - Full Section with React Component */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/5untepMaai7oLDEB/scene.splinecode"
          style={{
            width: '100%',
            height: '100%',
            position: 'absolute',
            top: 0,
            left: 0
          }}
        />
      </div>

      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]"></div>
      
      {/* Content over Spline */}
      <div className="w-full px-6 py-20 relative z-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Content - Centered over Spline */}
          <div className="space-y-8">
            <div className="space-y-6">
              <p className="text-blue-300 font-medium text-lg tracking-wide uppercase">
                Data Analytics Professional
              </p>
              <h1 
                ref={titleRef}
                className="text-6xl md:text-7xl lg:text-8xl font-bold leading-tight"
              >
                <span className="text-white drop-shadow-lg">Hi, I'm </span>
                <span className="bg-gradient-to-r from-blue-300 via-blue-400 to-blue-500 bg-clip-text text-transparent drop-shadow-lg">
                  Thiago Alberto
                </span>
                <br />
                <span className="text-blue-200 text-5xl md:text-6xl lg:text-7xl drop-shadow-lg">
                  Data Analyst
                </span>
              </h1>
            </div>

            <p 
              ref={subtitleRef}
              className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto font-light leading-relaxed drop-shadow-lg"
            >
              Transforming <span className="text-blue-300 font-medium">complex data</span> into 
              <span className="text-blue-200 font-medium"> actionable insights</span> through 
              advanced analytics and stunning visualizations.
            </p>

            <div ref={ctaRef} className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
              <a 
                href="https://github.com/Thiago1alberto"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary px-10 py-5 text-lg font-semibold"
                onMouseEnter={handleCTAHover}
                onMouseLeave={handleCTALeave}
              >
                View My Work
              </a>
              <a 
                href="https://www.linkedin.com/in/thiago-alberto-864121190"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary px-10 py-5 text-lg font-semibold backdrop-blur-sm"
                onMouseEnter={handleCTAHover}
                onMouseLeave={handleCTALeave}
              >
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroWithSplineComponent;
