import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { LinkedinLogo, GithubLogo, EnvelopeSimple } from 'phosphor-react';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const socialRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Simplified section animation
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
            toggleActions: "play none none reverse"
          }
        }
      );

      // Simplified social icons animation
      gsap.fromTo('.social-icon',
        { 
          scale: 0.8,
          opacity: 0
        },
        {
          scale: 1,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: socialRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const socialLinks = [
    {
      icon: LinkedinLogo,
      href: "https://www.linkedin.com/in/thiago-alberto-864121190",
      label: "LinkedIn",
      color: "hover:text-blue-400"
    },
    {
      icon: GithubLogo,
      href: "https://github.com/Thiago1alberto",
      label: "GitHub",
      color: "hover:text-gray-300"
    },
    {
      icon: EnvelopeSimple,
      href: "mailto:contato@thiagoalberto.dev",
      label: "Email",
      color: "hover:text-blue-300"
    }
  ];

  return (
    <section id="contact" ref={sectionRef} className="py-20 relative" style={{background: 'linear-gradient(to bottom, rgb(25 35 50), rgb(15 23 42))'}}>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light mb-6 text-glow">
            Let's Connect
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto font-light">
            Ready to transform your data into actionable insights? 
            Let's discuss how I can help drive your business forward.
          </p>
        </div>

        <div className="grid lg:grid-cols-1 gap-16 max-w-4xl mx-auto">
          {/* Contact Info & Social - Centered */}
          <div className="space-y-8">
            <div className="glass p-8 rounded-xl space-y-6 text-center">
              <h3 className="text-3xl font-light text-cyan-400 mb-6">
                Get In Touch
              </h3>
              
              <div className="space-y-6 text-gray-300">
                <p className="font-light text-lg max-w-2xl mx-auto">
                  I'm always interested in new opportunities and challenging 
                  data projects. Whether you need help with analytics, 
                  visualization, or business intelligence solutions, 
                  I'd love to hear from you.
                </p>
                
                <div className="space-y-2">
                  <p className="flex items-center justify-center gap-2">
                    <EnvelopeSimple size={20} className="text-cyber-blue" />
                    <a href="mailto:contato@thiagoalberto.dev" className="hover:text-cyan-400 transition-colors">
                      contato@thiagoalberto.dev
                    </a>
                  </p>
                  <p className="text-sm text-gray-400">
                    Response time: Usually within 24 hours
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links - Enhanced */}
            <div ref={socialRef} className="space-y-6 text-center">
              <h4 className="text-2xl font-light text-foreground">
                Connect With Me
              </h4>
              <div className="flex justify-center gap-6">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`social-icon w-16 h-16 glass rounded-xl flex items-center justify-center transition-all duration-300 hover:glow hover:scale-110 ${social.color} group`}
                    aria-label={social.label}
                  >
                    <social.icon size={24} className="group-hover:scale-110 transition-transform" />
                  </a>
                ))}
              </div>
              <p className="text-gray-400 text-sm">
                Click on the icons above to connect with me on different platforms
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;