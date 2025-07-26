import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { useLanguage } from '../contexts/LanguageContext';
import DataVisualizationCSS from './DataVisualizationCSS';

const Hero = () => {
  const { t } = useLanguage();
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
      {/* Clean gradient background with smooth transition */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-800"></div>
      
      {/* Bottom fade for seamless transition */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-800 to-transparent"></div>
      
      {/* Subtle geometric elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-400/8 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/3 rounded-full blur-3xl"></div>
      </div>

      {/* CSS 3D Data Visualization */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <DataVisualizationCSS />
      </div>
      
      {/* Content */}
      <div className="w-full px-6 py-20 relative z-20">
        <div className="max-w-5xl mx-auto text-center">
          {/* Main Content */}
          <div className="space-y-12">
            <div className="space-y-8">
              <p className="text-blue-400 font-medium text-lg tracking-wide uppercase">
                {t('hero.role')}
              </p>
              <h1 
                ref={titleRef}
                className="text-6xl md:text-7xl lg:text-8xl font-bold leading-tight"
              >
                <span className="text-white">{t('hero.greeting')} </span>
                <span className="bg-gradient-to-r from-blue-300 via-blue-400 to-blue-500 bg-clip-text text-transparent">
                  {t('hero.name')}
                </span>
                <br />
                <span className="text-blue-200 text-5xl md:text-6xl lg:text-7xl">
                  {t('hero.title')}
                </span>
              </h1>
            </div>

            <p 
              ref={subtitleRef}
              className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto font-light leading-relaxed"
            >
              {t('hero.subtitle').split(t('hero.subtitle.highlight1'))[0]}
              <span className="text-blue-400 font-medium">{t('hero.subtitle.highlight1')}</span>
              {t('hero.subtitle').split(t('hero.subtitle.highlight1'))[1].split(t('hero.subtitle.highlight2'))[0]}
              <span className="text-blue-300 font-medium">{t('hero.subtitle.highlight2')}</span>
              {t('hero.subtitle').split(t('hero.subtitle.highlight2'))[1]}
            </p>

            <div ref={ctaRef} className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
              <a 
                href="https://github.com/Thiago1alberto"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary px-12 py-6 text-lg font-semibold"
                onMouseEnter={handleCTAHover}
                onMouseLeave={handleCTALeave}
              >
                {t('hero.cta.work')}
              </a>
              <a 
                href="https://www.linkedin.com/in/thiago-alberto-864121190"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary px-12 py-6 text-lg font-semibold"
                onMouseEnter={handleCTAHover}
                onMouseLeave={handleCTALeave}
              >
                {t('hero.cta.linkedin')}
              </a>
            </div>

            {/* Professional highlights */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16 max-w-4xl mx-auto">
              <div className="glass p-6 rounded-xl text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">{t('hero.highlights.analytics')}</div>
                <div className="text-slate-400">{t('hero.highlights.analytics.desc')}</div>
              </div>
              <div className="glass p-6 rounded-xl text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">{t('hero.highlights.visualization')}</div>
                <div className="text-slate-400">{t('hero.highlights.visualization.desc')}</div>
              </div>
              <div className="glass p-6 rounded-xl text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">{t('hero.highlights.strategy')}</div>
                <div className="text-slate-400">{t('hero.highlights.strategy.desc')}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;