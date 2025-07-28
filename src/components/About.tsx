import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '../contexts/LanguageContext';
import { 
  Database, 
  PresentationChart, 
  File, 
  Code, 
  Brain,
  ChartBar,
  Table,
  Lightning,
  Target,
  Lightbulb,
  Palette,
  TrendUp,
  Gear
} from 'phosphor-react';

gsap.registerPlugin(ScrollTrigger);

// Skill Item Component
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const SkillItem = ({ icon: Icon, name, color }: { icon: React.ComponentType<any>, name: string, color: string }) => (
  <div className="flex-shrink-0 group relative p-6 glass rounded-xl hover:scale-105 transition-all duration-300 cursor-pointer border border-slate-700/30 hover:border-blue-400/50 w-48 backdrop-blur-sm">
    <div className="flex flex-col items-center space-y-4">
      <div className="relative">
        <Icon 
          size={36} 
          className={`${color} group-hover:scale-110 transition-all duration-300`}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400/30 to-purple-400/30 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <span className="text-sm font-medium text-center text-slate-300 group-hover:text-white transition-colors leading-tight">
        {name}
      </span>
    </div>
    
    {/* Subtle glow effect */}
    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
  </div>
);

const About = () => {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Simplified fade in for image only
      if (imageRef.current) {
        gsap.fromTo(imageRef.current,
          { opacity: 0 },
          {
            opacity: 1,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: imageRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse"
            }
          }
        );
      }

      // Simplified fade in for content only
      if (contentRef.current) {
        gsap.fromTo(contentRef.current,
          { opacity: 0 },
          {
            opacity: 1,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: contentRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse"
            }
          }
        );
      }

      // Keep skills animation - only scale effect
      if (skillsRef.current) {
        gsap.fromTo('.skill-icon',
          { 
            scale: 0.9,
            opacity: 0
          },
          {
            scale: 1,
            opacity: 1,
            duration: 0.4,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: skillsRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse"
            }
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-24 relative bg-slate-800">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Profile Image - Rectangular with Clean Frame */}
          <div ref={imageRef} className="relative order-2 lg:order-1 flex justify-center lg:justify-start items-start">
            <div className="relative w-80 h-96 lg:w-96 lg:h-[450px] lg:mt-8">
              {/* Subtle background glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent rounded-lg blur-xl"></div>
              
              {/* Clean frame with simple border */}
              <div className="relative w-full h-full rounded-lg overflow-hidden border border-slate-600/40 shadow-xl glass">
                <img 
                  src="/lovable-uploads/833095f4-726b-461d-beb5-ff64f05528c1.png" 
                  alt="Thiago Alberto"
                  className="w-full h-full object-cover object-center"
                  style={{
                    objectPosition: 'center 25%',
                    filter: 'contrast(1.05) brightness(1.05) saturate(1.05)'
                  }}
                />
                
                {/* Subtle inner glow */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
              </div>
            </div>
          </div>

          {/* Content - Enhanced */}
          <div ref={contentRef} className="space-y-8 order-1 lg:order-2">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-blue-300"></div>
                <span className="text-blue-400 font-semibold uppercase tracking-wider text-sm">{t('about.title')}</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white leading-tight">
                {t('about.intro.title')}
              </h2>
              
              <div className="space-y-6 text-lg text-slate-300 font-light leading-relaxed">
                <p className="text-xl">
                  {t('about.intro.desc')}
                </p>
                <p>
                  {t('about.description.p1')}
                </p>
                <p>
                  {t('about.description.p2')}
                </p>
                <p>
                  {t('about.description.p3')}
                </p>
                <p>
                  {t('about.description.p4')}
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
      
      {/* Full-width Skills Carousel */}
      <div ref={skillsRef} className="mt-16 w-full">
        <div className="container mx-auto px-6 mb-8">
          <h3 className="text-2xl font-bold text-white text-center">
            {t('about.skills.title')}
          </h3>
        </div>
        
        {/* Skills Carousel Container - Simple CSS Animation */}
        <div className="relative w-full bg-gradient-to-r from-slate-800 via-slate-700/30 to-slate-800 py-12">
          <div className="overflow-hidden">
            <div 
              className="flex gap-8 animate-scroll-infinite"
              style={{ width: 'max-content', paddingLeft: '2rem', paddingRight: '2rem' }}
            >
              {/* First complete set */}
              <div className="flex gap-8">
                <SkillItem icon={PresentationChart} name="Power BI" color="text-yellow-400" />
                <SkillItem icon={Code} name="Python" color="text-blue-400" />
                <SkillItem icon={Database} name="SQL" color="text-green-400" />
                <SkillItem icon={Table} name="Excel" color="text-green-500" />
                <SkillItem icon={ChartBar} name="Looker Studio" color="text-orange-400" />
                <SkillItem icon={Brain} name="Pensamento Analítico" color="text-purple-400" />
                <SkillItem icon={Lightning} name="Automação" color="text-cyan-400" />
                <SkillItem icon={Target} name="Visão de Produto" color="text-red-400" />
                <SkillItem icon={Gear} name="Power Apps" color="text-pink-400" />
                <SkillItem icon={Lightbulb} name="Resolução de Problemas" color="text-yellow-300" />
              </div>
              
              {/* Separator with subtle indicator */}
              <div className="flex items-center justify-center w-16 mx-8">
                <div className="flex space-x-1">
                  <div className="w-1.5 h-1.5 bg-blue-400/30 rounded-full animate-pulse" style={{animationDelay: '0ms'}}></div>
                  <div className="w-1.5 h-1.5 bg-blue-400/40 rounded-full animate-pulse" style={{animationDelay: '200ms'}}></div>
                  <div className="w-1.5 h-1.5 bg-blue-400/30 rounded-full animate-pulse" style={{animationDelay: '400ms'}}></div>
                </div>
              </div>
              
              {/* Second complete set */}
              <div className="flex gap-8">
                <SkillItem icon={PresentationChart} name="Power BI" color="text-yellow-400" />
                <SkillItem icon={Code} name="Python" color="text-blue-400" />
                <SkillItem icon={Database} name="SQL" color="text-green-400" />
                <SkillItem icon={Table} name="Excel" color="text-green-500" />
                <SkillItem icon={ChartBar} name="Looker Studio" color="text-orange-400" />
                <SkillItem icon={Brain} name="Pensamento Analítico" color="text-purple-400" />
                <SkillItem icon={Lightning} name="Automação" color="text-cyan-400" />
                <SkillItem icon={Target} name="Visão de Produto" color="text-red-400" />
                <SkillItem icon={Gear} name="Power Apps" color="text-pink-400" />
                <SkillItem icon={Lightbulb} name="Resolução de Problemas" color="text-yellow-300" />
              </div>
              
              {/* Separator with subtle indicator */}
              <div className="flex items-center justify-center w-16 mx-8">
                <div className="flex space-x-1">
                  <div className="w-1.5 h-1.5 bg-blue-400/30 rounded-full animate-pulse" style={{animationDelay: '0ms'}}></div>
                  <div className="w-1.5 h-1.5 bg-blue-400/40 rounded-full animate-pulse" style={{animationDelay: '200ms'}}></div>
                  <div className="w-1.5 h-1.5 bg-blue-400/30 rounded-full animate-pulse" style={{animationDelay: '400ms'}}></div>
                </div>
              </div>
              
              {/* Third complete set for seamless transition */}
              <div className="flex gap-8">
                <SkillItem icon={PresentationChart} name="Power BI" color="text-yellow-400" />
                <SkillItem icon={Code} name="Python" color="text-blue-400" />
                <SkillItem icon={Database} name="SQL" color="text-green-400" />
                <SkillItem icon={Table} name="Excel" color="text-green-500" />
                <SkillItem icon={ChartBar} name="Looker Studio" color="text-orange-400" />
                <SkillItem icon={Brain} name="Pensamento Analítico" color="text-purple-400" />
                <SkillItem icon={Lightning} name="Automação" color="text-cyan-400" />
                <SkillItem icon={Target} name="Visão de Produto" color="text-red-400" />
                <SkillItem icon={Gear} name="Power Apps" color="text-pink-400" />
                <SkillItem icon={Lightbulb} name="Resolução de Problemas" color="text-yellow-300" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;