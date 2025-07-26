import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PaperPlaneTilt, LinkedinLogo, GithubLogo, EnvelopeSimple } from 'phosphor-react';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const socialRef = useRef<HTMLDivElement>(null);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Simplified form animation
      gsap.fromTo('.form-input',
        { 
          y: 30,
          opacity: 0
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: formRef.current,
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
          rotation: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "back.out(1.7)",
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Animate submit button
    gsap.to('.submit-btn', {
      scale: 0.95,
      duration: 0.1,
      yoyo: true,
      repeat: 1,
      ease: "power2.inOut"
    });

    // Here you would handle the form submission
    console.log('Form submitted:', formData);
    
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

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
    <section id="contact" ref={sectionRef} className="py-20 relative bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light mb-6 text-glow">
            Let's Connect
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto font-light">
            Ready to transform your data into actionable insights? 
            Let's discuss how I can help drive your business forward.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="space-y-8">
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="form-input">
                <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300 glass text-white"
                  placeholder="Your full name"
                />
              </div>

              <div className="form-input">
                <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300 glass text-white"
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="form-input">
                <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300 glass resize-none text-white"
                  placeholder="Tell me about your project or data challenge..."
                />
              </div>

              <button
                type="submit"
                className="submit-btn w-full btn-cyber flex items-center justify-center gap-2"
              >
                <PaperPlaneTilt size={20} />
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info & Social */}
          <div className="space-y-8">
            <div className="glass p-8 rounded-xl space-y-6">
              <h3 className="text-2xl font-light text-cyan-400 mb-4">
                Get In Touch
              </h3>
              
              <div className="space-y-4 text-gray-300">
                <p className="font-light">
                  I'm always interested in new opportunities and challenging 
                  data projects. Whether you need help with analytics, 
                  visualization, or business intelligence solutions, 
                  I'd love to hear from you.
                </p>
                
                <div className="space-y-2">
                  <p className="flex items-center gap-2">
                    <EnvelopeSimple size={16} className="text-cyber-blue" />
                    thiago.alberto@example.com
                  </p>
                  <p className="text-sm">
                    Response time: Usually within 24 hours
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div ref={socialRef} className="space-y-4">
              <h4 className="text-lg font-light text-foreground">
                Connect With Me
              </h4>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`social-icon w-12 h-12 glass rounded-lg flex items-center justify-center transition-all duration-300 hover:glow ${social.color}`}
                    aria-label={social.label}
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;