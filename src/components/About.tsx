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
      // Section fade in
      gsap.fromTo(sectionRef.current,
        { 
          opacity: 0,
          filter: "blur(20px)"
        },
        {
          opacity: 1,
          filter: "blur(0px)",
          duration: 1.5,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Image animation
      gsap.fromTo(imageRef.current,
        { x: -100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: imageRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Content animation
      gsap.fromTo(contentRef.current,
        { x: 100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Skills stagger animation
      gsap.fromTo('.skill-icon',
        { 
          scale: 0,
          opacity: 0,
          rotation: -180
        },
        {
          scale: 1,
          opacity: 1,
          rotation: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "back.out(1.7)",
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
    { icon: ChartBar, name: 'Power BI', color: 'text-yellow-400' },
    { icon: File, name: 'Excel', color: 'text-green-400' },
    { icon: Code, name: 'Python', color: 'text-blue-400' },
    { icon: Database, name: 'SQL', color: 'text-orange-400' },
    { icon: PresentationChart, name: 'Looker', color: 'text-purple-400' },
    { icon: Brain, name: 'Machine Learning', color: 'text-pink-400' }
  ];

  return (
    <section id="about" ref={sectionRef} className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Profile Image */}
          <div ref={imageRef} className="relative">
            <div className="relative w-80 h-80 mx-auto lg:mx-0">
              <div className="absolute inset-0 bg-gradient-primary rounded-full opacity-20 blur-xl" />
              <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-cyber-blue/30 glass">
                <img 
                  src="/lovable-uploads/833095f4-726b-461d-beb5-ff64f05528c1.png" 
                  alt="Thiago Alberto"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating ring animation */}
              <div className="absolute inset-0 rounded-full border border-cyber-blue/20 animate-spin" 
                   style={{ animationDuration: '20s' }} />
            </div>
          </div>

          {/* Content */}
          <div ref={contentRef} className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-light mb-6 text-glow">
                About Me
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground font-light leading-relaxed">
                <p>
                  With over 5 years of experience in data analytics and business intelligence, 
                  I specialize in transforming raw data into strategic insights that drive 
                  business growth and operational efficiency.
                </p>
                <p>
                  My expertise spans across data visualization, statistical analysis, 
                  machine learning, and automated reporting systems. I'm passionate about 
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

            {/* Skills Grid */}
            <div ref={skillsRef}>
              <h3 className="text-2xl font-light mb-6 text-cyber-blue">
                Technical Skills
              </h3>
              <div className="grid grid-cols-3 gap-6">
                {skills.map((skill, index) => (
                  <div 
                    key={skill.name}
                    className="skill-icon flex flex-col items-center p-4 glass rounded-lg hover:glow transition-all duration-300 group cursor-pointer"
                  >
                    <skill.icon 
                      size={32} 
                      className={`${skill.color} group-hover:scale-110 transition-transform duration-300`}
                    />
                    <span className="text-sm mt-2 text-center font-light">
                      {skill.name}
                    </span>
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