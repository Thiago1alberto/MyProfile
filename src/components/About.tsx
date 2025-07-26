import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  ChartBar, 
  Database, 
  PresentationChart, 
  File, 
  Code, 
  Brain 
} from 'phosphor-react';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Simplified section fade in
      gsap.fromTo(sectionRef.current,
        { 
          opacity: 0,
          y: 30
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Simplified image animation
      gsap.fromTo(imageRef.current,
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: imageRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Simplified content animation
      gsap.fromTo(contentRef.current,
        { x: 50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Simplified skills animation
      gsap.fromTo('.skill-icon',
        { 
          scale: 0.8,
          opacity: 0
        },
        {
          scale: 1,
          opacity: 1,
          duration: 0.5,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: skillsRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const skills = [
    { icon: File, name: 'Excel', color: 'text-blue-400' },
    { icon: Code, name: 'Python', color: 'text-blue-300' },
    { icon: Database, name: 'SQL', color: 'text-blue-500' },
    { icon: PresentationChart, name: 'Looker', color: 'text-slate-300' },
    { icon: Brain, name: 'Machine Learning', color: 'text-blue-200' }
  ];

  return (
    <section id="about" ref={sectionRef} className="py-24 relative bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Profile Image - Enhanced */}
          <div ref={imageRef} className="relative order-2 lg:order-1">
            <div className="relative w-96 h-96 mx-auto">
              {/* Multiple glow layers for depth - refined */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-400 rounded-full opacity-20 blur-2xl animate-pulse" />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-300 rounded-full opacity-15 blur-xl" />
              
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-blue-400/30 glass">
                <img 
                  src="/lovable-uploads/833095f4-726b-461d-beb5-ff64f05528c1.png" 
                  alt="Thiago Alberto"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Refined floating badges */}
              <div className="absolute -top-4 -right-4 glass px-3 py-2 rounded-lg">
                <span className="text-blue-300 font-semibold text-sm">Data Expert</span>
              </div>
              <div className="absolute -bottom-4 -left-4 glass px-3 py-2 rounded-lg">
                <span className="text-blue-400 font-semibold text-sm">Analytics Pro</span>
              </div>
            </div>
          </div>

          {/* Content - Enhanced */}
          <div ref={contentRef} className="space-y-8 order-1 lg:order-2">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-blue-300"></div>
                <span className="text-blue-400 font-semibold uppercase tracking-wider text-sm">About Me</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white leading-tight">
                Turning Data Into 
                <span className="gradient-text"> Strategic Insights</span>
              </h2>
              
              <div className="space-y-6 text-lg text-slate-300 font-light leading-relaxed">
                <p className="text-xl">
                  With over <span className="text-blue-400 font-semibold">5 years of experience</span> in data analytics and business intelligence, 
                  I specialize in transforming raw data into <span className="text-green-400 font-semibold">strategic insights</span> that drive 
                  business growth and operational efficiency.
                </p>
                <p>
                  My expertise spans across <span className="text-blue-400">data visualization</span>, <span className="text-green-400">statistical analysis</span>, 
                  <span className="text-orange-400"> machine learning</span>, and automated reporting systems. I'm passionate about 
                  uncovering hidden patterns and trends that help organizations make 
                  data-driven decisions.
                </p>
                <p>
                  When I'm not analyzing data, I enjoy exploring new technologies, 
                  contributing to open-source projects, and sharing knowledge with 
                  the data community.
                </p>
              </div>
            </div>

            {/* Enhanced Skills Grid */}
            <div ref={skillsRef}>
              <h3 className="text-2xl font-bold mb-8 text-white">
                Technical Excellence
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {skills.map((skill, index) => (
                  <div 
                    key={skill.name}
                    className="skill-icon group relative p-6 glass rounded-xl hover:glow-success transition-all duration-300 cursor-pointer border border-slate-700/50 hover:border-blue-400/50"
                  >
                    <div className="flex flex-col items-center space-y-3">
                      <div className="relative">
                        <skill.icon 
                          size={40} 
                          className={`${skill.color} group-hover:scale-110 transition-all duration-300`}
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-green-400/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                      <span className="text-sm font-medium text-center text-slate-300 group-hover:text-white transition-colors">
                        {skill.name}
                      </span>
                    </div>
                    
                    {/* Skill level indicator */}
                    <div className="absolute bottom-2 left-2 right-2">
                      <div className="w-full h-1 bg-slate-700 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-blue-400 to-green-400 rounded-full transition-all duration-1000 group-hover:w-full"
                          style={{width: `${85 + (index * 2)}%`}}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;