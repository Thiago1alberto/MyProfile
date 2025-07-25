import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Eye } from 'phosphor-react';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Cards stagger animation
      gsap.fromTo('.project-card',
        { 
          y: 100,
          opacity: 0,
          scale: 0.8,
          filter: "blur(10px)"
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          filter: "blur(0px)",
          duration: 1,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Horizontal scroll animation for larger screens
      const cards = gsap.utils.toArray('.project-card');
      if (cards.length > 0 && window.innerWidth >= 1024) {
        gsap.to(cards, {
          xPercent: -100 * (cards.length - 1),
          ease: "none",
          scrollTrigger: {
            trigger: cardsRef.current,
            pin: true,
            scrub: 1,
            snap: 1 / (cards.length - 1),
            end: () => "+=" + (cardsRef.current?.offsetWidth || 0)
          }
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const projects = [
    {
      title: "Sales Performance Dashboard",
      description: "Interactive Power BI dashboard analyzing sales trends, KPIs, and regional performance metrics with real-time data integration.",
      techStack: ["Power BI", "SQL Server", "DAX", "Power Query"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&crop=entropy&auto=format",
      category: "Business Intelligence"
    },
    {
      title: "Financial Expense Tracker",
      description: "Advanced Excel model with VBA automation for tracking expenses, budget forecasting, and financial reporting.",
      techStack: ["Excel", "VBA", "Pivot Tables", "Power Query"],
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop&crop=entropy&auto=format",
      category: "Financial Analysis"
    },
    {
      title: "SQL Query Optimizer",
      description: "Python tool for analyzing and optimizing complex SQL queries, reducing execution time by up to 40%.",
      techStack: ["Python", "SQL", "PostgreSQL", "Performance Tuning"],
      image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=600&h=400&fit=crop&crop=entropy&auto=format",
      category: "Database Optimization"
    },
    {
      title: "Automated Reporting System",
      description: "Python-based automation system for generating and distributing daily/weekly reports to stakeholders.",
      techStack: ["Python", "Pandas", "SMTP", "Schedule"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&crop=entropy&auto=format",
      category: "Process Automation"
    },
    {
      title: "Customer Analytics Platform",
      description: "Comprehensive analytics platform using Plotly for visualizing customer behavior, retention, and lifetime value.",
      techStack: ["Python", "Plotly", "Dash", "Machine Learning"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&crop=entropy&auto=format",
      category: "Customer Analytics"
    },
    {
      title: "Predictive Sales Model",
      description: "Machine learning model for predicting sales trends and inventory optimization using historical data patterns.",
      techStack: ["Python", "Scikit-learn", "TensorFlow", "Jupyter"],
      image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=600&h=400&fit=crop&crop=entropy&auto=format",
      category: "Machine Learning"
    }
  ];

  return (
    <section id="projects" ref={sectionRef} className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light mb-6 text-glow">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-light">
            A showcase of data analytics projects demonstrating expertise in 
            business intelligence, visualization, and process automation.
          </p>
        </div>

        {/* Projects Grid/Scroll Container */}
        <div ref={cardsRef} className="lg:flex lg:space-x-8 lg:w-fit space-y-8 lg:space-y-0">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="project-card lg:w-96 lg:flex-shrink-0 glass rounded-xl overflow-hidden group hover:glow transition-all duration-500"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 text-xs bg-cyber-blue/20 text-cyber-blue rounded-full backdrop-blur-sm">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold text-foreground group-hover:text-cyber-blue transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground text-sm font-light leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span 
                      key={tech}
                      className="px-2 py-1 text-xs bg-secondary/50 text-secondary-foreground rounded border border-border/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* CTA Button */}
                <button className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-gradient-primary text-primary-foreground rounded-lg font-medium hover:scale-105 transition-transform duration-300 group">
                  <Eye size={16} />
                  View Project
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;